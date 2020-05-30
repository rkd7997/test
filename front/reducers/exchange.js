import produce from "immer";

export const LOAD_TRANSACTIONS_REQUEST = 'LOAD_TRANSACTIONS_REQUEST';
export const LOAD_TRANSACTIONS_SUCCESS = 'LOAD_TRANSACTIONS_SUCCESS';
export const LOAD_TRANSACTIONS_FAILURE = 'LOAD_TRANSACTIONS_FAILURE';

export const initialState = {
    transactions: [],
    isLoadingTransactions: false,
    isLoadedTransactions: false,
    transactionsErrorReason: '',
};

export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOAD_TRANSACTIONS_REQUEST: {
                draft.isLoadingTransactions = true;
                draft.isLoadedTransactions = false;
                draft.transactionsErrorReason = '';
                draft.transactions = [];
                break;
            }
            case LOAD_TRANSACTIONS_SUCCESS: {
                draft.isLoadingTransactions = false;
                action.data.forEach((d) => {
                    draft.transactions.push(d);
                });
                draft.isLoadedTransactions = true;
                break;
            }
            case LOAD_TRANSACTIONS_FAILURE: {
                draft.isLoadingTransactions = false;
                draft.transactionsErrorReason = action.reason;
                break;
            }
            default: {
                break;
            }
        }
    });
};
