import { PageList, Filter } from 'types';

export default (originalRows: PageList, filter: Filter): PageList => {
  let result = [...originalRows];

  //文字列による絞り込み
  if (filter.query) {
    const { query } = filter;
    const isMatch = ({ path, template }: { path: string; template: string }) =>
      RegExp(query, 'i').test(path) || RegExp(query, 'i').test(template);
    result = result.filter(isMatch);
  }

  //ソートによる順番整理
  if (filter.sort.key) {
    const { key, order } = filter.sort;
    result.sort((a, b) => {
      const valueA = a[key].toUpperCase();
      const valueB = b[key].toUpperCase();
      switch (order) {
        case 'asc':
          return valueA < valueB ? 1 : -1;
        case 'desc':
          return valueA > valueB ? 1 : -1;
        default:
          return 0;
      }
    });
  }

  return result;
};
