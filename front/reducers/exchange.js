import produce from "immer";

export const LOAD_TRANSACTION_HISTORY_REQUEST = 'LOAD_TRANSACTION_HISTORY_REQUEST';
export const LOAD_TRANSACTION_HISTORY_SUCCESS = 'LOAD_TRANSACTION_HISTORY_SUCCESS';
export const LOAD_TRANSACTION_HISTORY_FAILURE = 'LOAD_TRANSACTION_HISTORY_FAILURE';

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

export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOAD_TRANSACTION_HISTORY_REQUEST: {
                draft.isLoadingTransactionHistory = true;
                draft.isLoadedTransactionHistory = false;
                draft.transactionHistoryErrorReason = '';
                draft.transactionHistory = [];
                break;
            }
            case LOAD_TRANSACTION_HISTORY_SUCCESS: {
                draft.isLoadingTransactionHistory = false;
                draft.transactionHistory = [dummyTransactionHistory, ...state.transactionHistory];
                draft.isLoadedTransactionHistory = true;
                break;
            }
            case LOAD_TRANSACTION_HISTORY_FAILURE: {
                draft.isLoadingTransactionHistory = false;
                draft.transactionHistoryErrorReason = action.error;
                break;
            }
            default: {
                break;
            }
        }
    });
};
