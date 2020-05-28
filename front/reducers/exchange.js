import produce from "immer";

export const LOAD_TRANSACTION_HISTORY_REQUEST = 'LOAD_TRANSACTION_HISTORY_REQUEST';
export const LOAD_TRANSACTION_HISTORY_SUCCESS = 'LOAD_TRANSACTION_HISTORY_SUCCESS';
export const LOAD_TRANSACTION_HISTORY_FAILURE = 'LOAD_TRANSACTION_HISTORY_FAILURE';

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
                action.data.forEach((d) => {
                    draft.transactionHistory.push(d);
                });
                draft.isLoadedTransactionHistory = true;
                break;
            }
            case LOAD_TRANSACTION_HISTORY_FAILURE: {
                draft.isLoadingTransactionHistory = false;
                draft.transactionHistoryErrorReason = action.reason;
                break;
            }
            default: {
                break;
            }
        }
    });
};
