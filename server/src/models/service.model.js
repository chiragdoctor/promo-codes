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

  findWithPage = async (page = 1) => {
    const limit = 3;
    const offset = (page - 1) * limit;

    let sql = `SELECT * FROM ${this.tableName}`;

    sql += ` LIMIT ${limit} OFFSET ${offset}`;
    return await query(sql);
  };
}

module.exports = new ServiceModel();
