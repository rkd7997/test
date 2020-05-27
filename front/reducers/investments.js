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

export const LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_REQUEST = 'LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_REQUEST';
export const LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_SUCCESS = 'LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_SUCCESS';
export const LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_FAILURE = 'LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_FAILURE';

export const LOAD_USER_TRANSACTION_HISTORY_REQUEST = 'LOAD_USER_TRANSACTION_HISTORY_REQUEST';
export const LOAD_USER_TRANSACTION_HISTORY_SUCCESS = 'LOAD_USER_TRANSACTION_HISTORY_SUCCESS';
export const LOAD_USER_TRANSACTION_HISTORY_FAILURE = 'LOAD_USER_TRANSACTION_HISTORY_FAILURE';

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_REQUEST: {
            return {
                ...state,
                isLoadingUserDepositsAndWithdrawsHistory: true,
                isLoadedUserDepositsAndWithdrawsHistory: false,
                userDepositsAndWithdrawsHistoryErrorReason: '',
                userDepositsAndWithdrawsHistory: [],
            };
        }
        case LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_SUCCESS: {
            return {
                ...state,
                isLoadingUserDepositsAndWithdrawsHistory: false,
                userDepositsAndWithdrawsHistory: [dummyUserDepositsAndWithdrawsHistory, ...state.userDepositsAndWithdrawsHistory],
                isLoadedUserDepositsAndWithdrawsHistory: true,
            };
        }
        case LOAD_USER_DEPOSIT_WITHDRAW_HISTORY_FAILURE: {
            return {
                ...state,
                isLoadingUserDepositsAndWithdrawsHistory: false,
                userDepositsAndWithdrawsHistoryErrorReason: action.error,
            };
        }
        case LOAD_USER_TRANSACTION_HISTORY_REQUEST: {
            return {
                ...state,
                isLoadingUserTransactionHistory: true,
                isLoadedUserTransactionHistory: false,
                userTransactionHistoryErrorReason: '',
                userTransactionHistory: [],
            };
        }
        case LOAD_USER_TRANSACTION_HISTORY_SUCCESS: {
            return {
                ...state,
                isLoadingUserTransactionHistory: false,
                userTransactionHistory: [dummyUserTransactionHistory, ...state.userTransactionHistory],
                isLoadedUserTransactionHistory: true,
            };
        }
        case LOAD_USER_TRANSACTION_HISTORY_FAILURE: {
            return {
                ...state,
                isLoadingUserTransactionHistory: false,
                userTransactionHistoryErrorReason: action.error,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
