import produce from "immer";

export const CHART_DATA_UPDATE = 'CHART_DATA_UPDATE';
export const CHART_DATA_SUCCESS = 'CHART_DATA_SUCCESS';
export const CHART_DATA_FAILURE = 'CHART_DATA_UPDATE';

export const initialState = {
  chart_data :null,
};

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CHART_DATA_UPDATE: {
        // TODO
        break;
      }
      case CHART_DATA_SUCCESS: {
        draft.chart_data = action.data;
        break;
      }

      case CHART_DATA_FAILURE: {
        // TODO
        break;
      }

      default: {
        break;
      }
    }
  });
};
