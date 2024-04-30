import formatNumber from "../../../services/formatNumber";

const getTitles = async (form, getAllTimeline) => {
    const initialCount = {
        getAllTimeline,
        total: 0,
        actions: 0,
        forActions: 0,
        averageWater: 0,
        totalWater: 0,
        adherence: 0
    };

    await Promise.all(form.map(async (item) => {
        initialCount.total += item.actions.length + item.forActions.length;
        initialCount.actions += item.actions.length,
        initialCount.forActions += item.forActions.length,
        initialCount.totalWater += 0

        item.water.map(async (waterEntry) => {
            const { action, water } = waterEntry;
            const waterValue = Number(water);
            initialCount.totalWater += waterValue;
        });

    }));

    initialCount.averageWater = initialCount.totalWater / initialCount.total;

    initialCount.averageWater = !isNaN(initialCount.averageWater) ?  formatNumber(initialCount.averageWater): 0;
    initialCount.totalWater = formatNumber(initialCount.totalWater);

    initialCount.adherence =  (isNaN(initialCount.averageWater) ? (initialCount.total / (initialCount.actions + initialCount.forActions)) * 100 : 0)  + '%';

    return Object.values(initialCount);
}

const getActionByTool = async (form) => {
    const initialCount = {}

    await Promise.all(form.map(async (item) => {
        item.tool.map(async (tool) => {
            initialCount[tool] =  (initialCount[tool] || 0) + 1;
        });
    }))

    return initialCount.length == 0 ? [] : [...Object.entries(initialCount).map(([key,value]) => [key, value])];
}
const getWaterConsumption = async (form) => {
    var initialCount = {}

    await Promise.all(form.map(async (item) => {
        item.water.map(async (waterEntry) => {
            const { action, water } = waterEntry;
            const waterValue = Number(water);
            initialCount[action] = (initialCount[action] || 0) + waterValue;
        });
    }))
    const countsArray = Object.entries(initialCount);
    const sortedCounts = countsArray.sort((a, b) => b[1] - a[1]);
    initialCount= sortedCounts.slice(0, 10);

    return initialCount.length == 0 ? [] : [...initialCount];
}

const getScheduleCount = async (data) => {
    return [["dentro do cronograma", data[1]],["fora do cronograma", data[2]]];
}

const getAllTimelineProcessor = (form, filters, data) => {
    form = form.sort((a, b) => new Date( a.date) - new Date(b.date));
    if (!filters.start){
        filters.start = form[0]?.date.split('T')[0];
    } else { 
        filters.start = new Date(filters.start);
    }
    if (!filters.end){
        filters.end = form[form.length-1]?.date.split('T')[0];
    } else {
    filters.end =  new Date(filters.end);
    }
    const dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    let daysOfWeek = [];
    
    let current = filters.start;
    let end = filters.end;

    try {
        while (current <= end) {
            daysOfWeek.push(dayNames[current.getDay()]);
            current.setDate(current.getDate() + 1);
        }
    } catch (error){}
    
    var plates = filters.plate.length != 0 ? data.plate.filter(x=> filters.plate.some(word => x?.name.includes(word)) ) : data.plate;

    let totalValue = 0;
    
    daysOfWeek.forEach(item => {
        plates.forEach(plate => {
            plate.timeline.forEach(timeline => {
                if (timeline.days.find(day => day==item)) totalValue += 1;
            })
        })
    });

    return totalValue
    
};

const getActionByPlate = async (form) => {
    const initialCount = {}

    await Promise.all(form.map(async (item) => {
            if (item.plate?.name) initialCount[item.plate.name] =  (initialCount[item.plate.name] || 0) + 1;
    }))
    
    return initialCount.length == 0 ? [] : [...Object.entries(initialCount).map(([key,value]) => [key, value])];
}

export const processData = async ({filters, data}) => {
    var { start, end } = filters;

    let filteredData = data.form;
    
    if (start) {
        const startDate = new Date(start);
        filteredData = filteredData.filter((item) => {
            const formDate = new Date(item.fill);
            return formDate > startDate;
        });
    }
    
    if (end) {
        const endDate = new Date(end);
        filteredData = filteredData.filter((item) => {
            const formDate = new Date(item.fill);
            return formDate < endDate;
        });
    }

    if (filters.local.length != 0) filteredData = filteredData.filter(x => filters.local.some(word => x.local.includes(word)));
    if (filters.plate.length != 0) filteredData = filteredData.filter(x => x.plate?.name ?  filters.plate.some(word => x?.plate.name.includes(word)) : false);
    if (filters.users.length != 0) filteredData = filteredData.filter(x => filters.users.some(word => x.user.includes(word)));
    if (filters.actions.length != 0){
        filteredData = filteredData.filter(x => {
            var allActions = [...x.actions, ...x.forActions];
            return filters.actions.some(word => allActions.includes(word))
        })
    }

    
    const getAllTimeline = true ? await getAllTimelineProcessor(filteredData, filters, data) : 999
    const titles = await getTitles(filteredData, getAllTimeline);
    const actionBytool = await getActionByTool(filteredData);
    const actionByPlate = await getActionByPlate(filteredData);
    const scheduledCount = await getScheduleCount(titles);
    const waterConsumption = await getWaterConsumption(filteredData);

    return  {
        titles, actionBytool, filteredData, actionByPlate, scheduledCount, waterConsumption, getAllTimeline
    }
};
