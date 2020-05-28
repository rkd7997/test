import produce from 'immer';

export const LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_REQUEST = 'LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_REQUEST';
export const LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_SUCCESS = 'LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_SUCCESS';
export const LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_FAILURE = 'LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_FAILURE';

export const LOAD_USER_TRANSACTION_HISTORY_REQUEST = 'LOAD_USER_TRANSACTION_HISTORY_REQUEST';
export const LOAD_USER_TRANSACTION_HISTORY_SUCCESS = 'LOAD_USER_TRANSACTION_HISTORY_SUCCESS';
export const LOAD_USER_TRANSACTION_HISTORY_FAILURE = 'LOAD_USER_TRANSACTION_HISTORY_FAILURE';

export const initialState = {
    userDepositsAndWithdrawsHistory: [],
    isLoadingUserDepositsAndWithdrawsHistory: false,
    isLoadedUserDepositsAndWithdrawsHistory: false,
    userDepositsAndWithdrawsHistoryErrorReason: '',
    userTransactionHistory: [],
    isLoadingUserTransactionHistory: false,
    isLoadedUserTransactionHistory: false,
    userTransactionHistoryErrorReason: '',
};

export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_REQUEST: {
                draft.isLoadingUserDepositsAndWithdrawsHistory = true;
                draft.isLoadedUserDepositsAndWithdrawsHistory = false;
                draft.userDepositsAndWithdrawsHistoryErrorReason = '';
                draft.userDepositsAndWithdrawsHistory = [];
                break;
            }
            case LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_SUCCESS: {
                draft.isLoadingUserDepositsAndWithdrawsHistory = false;
                action.data.forEach((d) => {
                    draft.userDepositsAndWithdrawsHistory.push(d);
                });
                draft.isLoadedUserDepositsAndWithdrawsHistory = true;
                break;
            }
            case LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_FAILURE: {
                draft.isLoadingUserDepositsAndWithdrawsHistory = false;
                draft.userDepositsAndWithdrawsHistoryErrorReason = action.reason;
                break;
            }
            case LOAD_USER_TRANSACTION_HISTORY_REQUEST: {
                draft.isLoadingUserTransactionHistory = true;
                draft.isLoadedUserTransactionHistory = false;
                draft.userTransactionHistoryErrorReason = '';
                draft.userTransactionHistory = [];
                break;
            }
            case LOAD_USER_TRANSACTION_HISTORY_SUCCESS: {
                draft.isLoadingUserTransactionHistory = false;
                action.data.forEach((d) => {
                    draft.userTransactionHistory.push(d);
                });
                draft.isLoadedUserTransactionHistory = true;
                break;
            }
            case LOAD_USER_TRANSACTION_HISTORY_FAILURE: {
                draft.isLoadingUserTransactionHistory = false;
                draft.userTransactionHistoryErrorReason = action.reason;
                break;
            }
            default: {
                break;
            }
        }
    });
};
