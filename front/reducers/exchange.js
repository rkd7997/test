import produce from "immer";

// 거래종류
export const LOAD_ORDER_CATEGORY_REQUEST = 'exchange/LOAD_ORDER_CATEGORY_REQUEST';
export const LOAD_ORDER_CATEGORY_SUCCESS = 'exchange/LOAD_ORDER_CATEGORY_SUCCESS';
export const LOAD_ORDER_CATEGORY_FAILURE = 'exchange/LOAD_ORDER_CATEGORY_FAILURE';

// 거래결과
export const LOAD_TRANSACTIONS_REQUEST = 'exchange/LOAD_TRANSACTIONS_REQUEST';
export const LOAD_TRANSACTIONS_SUCCESS = 'exchange/LOAD_TRANSACTIONS_SUCCESS';
export const LOAD_TRANSACTIONS_FAILURE = 'exchange/LOAD_TRANSACTIONS_FAILURE';

// 내 거래결과
export const LOAD_USER_TRANSACTIONS_REQUEST = 'exchange/LOAD_USER_TRANSACTIONS_REQUEST';
export const LOAD_USER_TRANSACTIONS_SUCCESS = 'exchange/LOAD_USER_TRANSACTIONS_SUCCESS';
export const LOAD_USER_TRANSACTIONS_FAILURE = 'exchange/LOAD_USER_TRANSACTIONS_FAILURE';

export const initialState = {
    orderCategory: '1MIN',
    orderCategoryNumber: 1,
    isLoadingOrderCategory: false,
    isLoadedOrderCategory: false,
    orderCategoryErrorReason: '',

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

          // 거래종류
            case LOAD_ORDER_CATEGORY_REQUEST: {
                draft.isLoadingOrderCategory = true;
                draft.isLoadedOrderCategory = false;
                draft.orderCategoryErrorReason = '';
                draft.orderCategory = '';
                draft.orderCategoryNumber = 0;
                break;
            }
            case LOAD_ORDER_CATEGORY_SUCCESS: {
                draft.isLoadingOrderCategory = false;
                draft.orderCategory = action.data.orderCategory;
                draft.orderCategoryNumber = action.data.orderCategoryNumber;
                draft.isLoadedOrderCategory = true;
                break;
            }
            case LOAD_ORDER_CATEGORY_FAILURE: {
                draft.isLoadingOrderCategory = false;
                draft.orderCategoryErrorReason = action.reason;
                break;
            }

          // 거래결과
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

          // 내 거래결과
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
