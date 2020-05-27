

const dummyTransactionHistory = {
    id: 1,
    time: '13일 19시 56분',
    unit: '10000',
    result: '매도'
};

export const initialState = {
    transactionHistory: [],
    isLoadingTransactionHistory: false,
    isLoadedTransactionHistory: false,
    transactionHistoryErrorReason: '',
};

export const LOAD_TRANSACTION_HISTORY_REQUEST = 'LOAD_TRANSACTION_HISTORY_REQUEST';
export const LOAD_TRANSACTION_HISTORY_SUCCESS = 'LOAD_TRANSACTION_HISTORY_SUCCESS';
export const LOAD_TRANSACTION_HISTORY_FAILURE = 'LOAD_TRANSACTION_HISTORY_FAILURE';

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TRANSACTION_HISTORY_REQUEST: {
            return {
                ...state,
                isLoadingTransactionHistory: true,
                isLoadedTransactionHistory: false,
                transactionHistoryErrorReason: '',
                transactionHistory: [],
            };
        }
        case LOAD_TRANSACTION_HISTORY_SUCCESS: {
            return {
                ...state,
                isLoadingTransactionHistory: false,
                transactionHistory: [dummyTransactionHistory, ...state.transactionHistory],
                isLoadedTransactionHistory: true,
            };
        }
        case LOAD_TRANSACTION_HISTORY_FAILURE: {
            return {
                ...state,
                isLoadingTransactionHistory: false,
                transactionHistoryErrorReason: action.error,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
