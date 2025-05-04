const { Op } = require("sequelize");

const filterStrategies = {
  last_week: () => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return { [Op.gte]: date.toISOString().split("T")[0] };
  },
  last_month: () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    return { [Op.gte]: date.toISOString().split("T")[0] };
  },
  last_3_months: () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 3);
    return { [Op.gte]: date.toISOString().split("T")[0] };
  },
  custom: (startDate, endDate) => {
    return { [Op.between]: [startDate, endDate] };
  },
};

module.exports = filterStrategies;
