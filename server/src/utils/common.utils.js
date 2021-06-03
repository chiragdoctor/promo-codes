exports.multipleColumnSet = object => {
  if (typeof object !== 'object') {
    throw new Error('Invalid input');
  }

  const keys = Object.keys(object);
  const values = Object.values(object).map(str => `%${str}%`);

  const columnSet = keys.map(key => `${key} like ?`).join(', ');

  return {
    columnSet,
    values,
  };
};
