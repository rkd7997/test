const dummyAnnouncements = {
    id: 1,
    subject: '공지사항입니다.',
    content: '공지사항입니다. 공지사항입니다.',
    regDate: '2020-05-21',
    hit: 9997,
};

export const initialState = {
    announcementsList: [],
    isLoadingAnnouncements: false,
    isLoadedAnnouncements: false,
    announcementsLoadErrorReason: '',
    newsList: [],
    isLoadingNews: false,
    isLoadedNews: false,
    newsLoadErrorReason: '',
};

export const LOAD_ANNOUNCEMENTS_REQUEST = 'LOAD_ANNOUNCEMENTS_REQUEST';
export const LOAD_ANNOUNCEMENTS_SUCCESS = 'LOAD_ANNOUNCEMENTS_SUCCESS';
export const LOAD_ANNOUNCEMENTS_FAILURE = 'LOAD_ANNOUNCEMENTS_FAILURE';

export const LOAD_NEWS_REQUEST = 'LOAD_NEWS_REQUEST';
export const LOAD_NEWS_SUCCESS = 'LOAD_NEWS_SUCCESS';
export const LOAD_NEWS_FAILURE = 'LOAD_NEWS_FAILURE';

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ANNOUNCEMENTS_REQUEST: {
            return {
                ...state,
                isLoadingAnnouncements: true,
                isLoadedAnnouncements: false,
                announcementsLoadErrorReason: '',
                announcementsList: [],
            };
        }
        case LOAD_ANNOUNCEMENTS_SUCCESS: {
            return {
                ...state,
                isLoadingAnnouncements: false,
                announcementsList: [dummyAnnouncements, ...state.announcementsList],
                isLoadedAnnouncements: true,
            };
        }
        case LOAD_ANNOUNCEMENTS_FAILURE: {
            return {
                ...state,
                isLoadingAnnouncements: false,
                announcementsLoadErrorReason: action.error,
            };
        }
        case LOAD_NEWS_REQUEST: {
            return {
                ...state,
                isLoadingNews: true,
                isLoadedNews: false,
                NEWSLoadErrorReason: '',
                newsList: [],
            };
        }
        case LOAD_NEWS_SUCCESS: {
            return {
                ...state,
                isLoadingNews: false,
                isLoadedNews: true,
            };
        }
        case LOAD_NEWS_FAILURE: {
            return {
                ...state,
                isLoadingNews: false,
                newsLoadErrorReason: action.error,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
