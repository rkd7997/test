import produce from 'immer';

export const LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_REQUEST = 'LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_REQUEST';
export const LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_SUCCESS = 'LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_SUCCESS';
export const LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_FAILURE = 'LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_FAILURE';

export const LOAD_USER_TRANSACTION_HISTORY_REQUEST = 'LOAD_USER_TRANSACTION_HISTORY_REQUEST';
export const LOAD_USER_TRANSACTION_HISTORY_SUCCESS = 'LOAD_USER_TRANSACTION_HISTORY_SUCCESS';
export const LOAD_USER_TRANSACTION_HISTORY_FAILURE = 'LOAD_USER_TRANSACTION_HISTORY_FAILURE';

const dummyUserDepositsAndWithdrawsHistory = {
    id: 1,
    type: '입금',
    time: '2020-05-13 18:52:00.880',
    amount: '10000',
    result: '완료'
};

const dummyUserTransactionHistory = {
    id: 1,
    type: '1분매수',
    time: '13일 19시 56분',
    amount: '10000',
    result: '실현'
};

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
                draft.userDepositsAndWithdrawsHistory = [dummyUserDepositsAndWithdrawsHistory, ...state.userDepositsAndWithdrawsHistory];
                draft.isLoadedUserDepositsAndWithdrawsHistory = true;
                break;
            }
            case LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_FAILURE: {
                draft.isLoadingUserDepositsAndWithdrawsHistory = false;
                draft.userDepositsAndWithdrawsHistoryErrorReason = action.error;
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
                draft.userTransactionHistory = [dummyUserTransactionHistory, ...state.userTransactionHistory];
                draft.isLoadedUserTransactionHistory = true;
                break;
            }
            case LOAD_USER_TRANSACTION_HISTORY_FAILURE: {
                draft.isLoadingUserTransactionHistory = false;
                draft.userTransactionHistoryErrorReason = action.error;
                break;
            }
            default: {
                break;
            }
        }
    });
};
