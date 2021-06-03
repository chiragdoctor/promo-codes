const query = require('../db/db-connections');
const { multipleColumnSet } = require('../utils/common.utils');

class ServiceModel {
  tableName = 'service';

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

module.exports = new ServiceModel();
