import _ from 'lodash';

export const transformYupValidationErrors = res => _.reduce(res.inner, (acc, item) => {
  _.set(acc, item.path, item.errors.join());
  return acc;
}, { _error: res.message });

export const transformCategories = categories => _.reduce(categories, (acc, category) => {
  _.set(acc, category.id, category.name);
  return acc;
}, {});

export const mapCategoriesToSubCategories = (categories, subcategories) => _.reduce(categories, (acc, category) => {
  const modifiedSubcategories = _.filter(subcategories, { categoryId: category.id });
  const modifiedCategory = Object.assign({}, category, { subcategories: modifiedSubcategories });
  acc.push(modifiedCategory);
  return acc;
}, []);