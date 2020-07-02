import { ActionType, Filter } from 'types';

const reducer = (state: Filter, action: ActionType): Filter => {
  switch (action.type) {
    case 'changeQuery':
      return { ...state, query: action.payload };

    case 'sort':
      return { ...state, sort: action.payload };

    default:
      throw new Error();
  }
};

export default reducer;
