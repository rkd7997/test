import produce from "immer";

export const LOAD_TRANSACTIONS_REQUEST = 'LOAD_TRANSACTIONS_REQUEST';
export const LOAD_TRANSACTIONS_SUCCESS = 'LOAD_TRANSACTIONS_SUCCESS';
export const LOAD_TRANSACTIONS_FAILURE = 'LOAD_TRANSACTIONS_FAILURE';
export const LOAD_USER_TRANSACTIONS_REQUEST = 'LOAD_USER_TRANSACTIONS_REQUEST';
export const LOAD_USER_TRANSACTIONS_SUCCESS = 'LOAD_USER_TRANSACTIONS_SUCCESS';
export const LOAD_USER_TRANSACTIONS_FAILURE = 'LOAD_USER_TRANSACTIONS_FAILURE';


export const initialState = {
    transactions: [],
    isLoadingTransactions: false,
    isLoadedTransactions: false,
    transactionsErrorReason: '',
    UserTransactions: [],
    isLoadingUserTransactions: false,
    isLoadedUserTransactions: false,
    userTransactionsErrorReason: '',
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
            case LOAD_USER_TRANSACTIONS_REQUEST: {
                draft.isLoadingUserTransactions = true;
                draft.isLoadedUserTransactions = false;
                draft.UserTransactionsErrorReason = '';
                draft.UserTransactions = [];
                break;
            }
            case LOAD_USER_TRANSACTIONS_SUCCESS: {
                draft.isLoadingUserTransactions = false;
                action.data.forEach((d) => {
                    draft.UserTransactions.push(d);
                });
                draft.isLoadedUserTransactions = true;
                break;
            }
            case LOAD_USER_TRANSACTIONS_FAILURE: {
                draft.isLoadingUserTransactions = false;
                draft.userTransactionsErrorReason = action.reason;
                break;
            }
            default: {
                break;
            }
        }
    });
};
