import formatNumber from "../../../services/formatNumber";
const getTitles = async (form) => {
    const initialCount = {
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
            //initialValue.waterConsumptionByActivity[action] = (initialValue.waterConsumptionByActivity[action] || 0) + waterValue;
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

const getScheduleCount = async (data) => {
    return [["dentro do cronograma", data[1]],["fora do cronograma", data[2]]];
}
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

    const titles = await getTitles(filteredData);
    const actionBytool = await getActionByTool(filteredData);
    const actionByPlate = await getActionByPlate(filteredData);
    const scheduledCount = await getScheduleCount(titles);

    return  {
        titles, actionBytool, filteredData, actionByPlate, scheduledCount
    }
};
