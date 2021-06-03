const query = require('../db/db-connections');
const { multipleColumnSet } = require('../utils/common.utils');

class ActivateBonusModel {
  tableName = 'activate_bonus';

  create = async ({ userId, serviceId }) => {
    const sql = `INSERT INTO ${this.tableName}
        (userId, serviceId) VALUES (?,?)`;

    const result = await query(sql, [userId, serviceId]);
    const affectedRows = result ? result.affectedRows : 0;

    return affectedRows;
  };

  find = async (params = {}) => {
    let sql = `SELECT * FROM ${this.tableName}`;

    if (!Object.keys(params).length) {
      return await query(sql);
    }

    const { columnSet, values } = multipleColumnSet(params);
    sql += ` WHERE ${columnSet}`;

    return await query(sql, [...values]);
  };
}

module.exports = new ActivateBonusModel();
