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

    return  {
        titles
    }
};
