const dummyUser = {
  nickname: '강준호',
  money: 5000000,
  location: '삼성점',
  // Post: [],
  // Followings: [],
  // Followers: [],
  // id: 1,
};

export const initialState = {
  chart_data :null,
};

export const CHART_DATA_UPDATE = 'CHART_DATA_UPDATE';
export const CHART_DATA_SUCCESS = 'CHART_DATA_SUCCESS';
export const CHART_DATA_FAILURE = 'CHART_DATA_UPDATE';




export default (state = initialState, action) => {
  switch (action.type) {
     case CHART_DATA_UPDATE: {
      return {
        ...state,
      };
    }
    case CHART_DATA_SUCCESS: {
      return {
        ...state,
        chart_data:action.data
      };
    }

    case CHART_DATA_FAILURE: {
      return {
        ...state,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
