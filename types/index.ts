export type Domain = string;

export type PageListApiSingle = {
  path: string;
  template: string;
};

export type PageListApi = PageListApiSingle[];

export type PageListSingle = {
  path: string;
  template: string;
  link: string;
};

export type PageList = PageListSingle[];

export type SortKey = 'template' | 'path';
export type SortOrder = 'asc' | 'desc';

export type Filter = {
  query: string;
  sort: {
    key: SortKey;
    order: SortOrder;
  };
};

export type ActionType =
  | { type: 'changeQuery'; payload: string }
  | {
      type: 'sort';
      payload: {
        key: SortKey;
        order: SortOrder;
      };
    };
