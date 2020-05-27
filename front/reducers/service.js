import produce from 'immer';

export const LOAD_ANNOUNCEMENTS_REQUEST = 'LOAD_ANNOUNCEMENTS_REQUEST';
export const LOAD_ANNOUNCEMENTS_SUCCESS = 'LOAD_ANNOUNCEMENTS_SUCCESS';
export const LOAD_ANNOUNCEMENTS_FAILURE = 'LOAD_ANNOUNCEMENTS_FAILURE';

export const LOAD_NEWS_REQUEST = 'LOAD_NEWS_REQUEST';
export const LOAD_NEWS_SUCCESS = 'LOAD_NEWS_SUCCESS';
export const LOAD_NEWS_FAILURE = 'LOAD_NEWS_FAILURE';

const dummyAnnouncements = {
    id: 1,
    subject: '공지사항입니다.',
    content: '공지사항입니다. 공지사항입니다.',
    regDate: '2020-05-21',
    hit: 9997,
};

const dummyNews = {
    id: 1,
    subject: '뉴스입니다.',
    content: '뉴스입니다. 뉴스입니다.',
    regDate: '2020-05-21',
    hit: 995,
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

export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOAD_ANNOUNCEMENTS_REQUEST: {
                draft.isLoadingAnnouncements = true;
                draft.isLoadingAnnouncements = true;
                draft.isLoadedAnnouncements = false;
                draft.announcementsLoadErrorReason = '';
                draft.announcementsList = [];
                break;
            }
            case LOAD_ANNOUNCEMENTS_SUCCESS: {
                draft.isLoadingAnnouncements = false;
                draft.announcementsList = [dummyAnnouncements, ...state.announcementsList];
                draft.isLoadedAnnouncements = true;
                break;
            }
            case LOAD_ANNOUNCEMENTS_FAILURE: {
                draft.isLoadingAnnouncements = false;
                draft.announcementsLoadErrorReason = action.error;
                break;
            }
            case LOAD_NEWS_REQUEST: {
                draft.isLoadingNews = true;
                draft.isLoadedNews = false;
                draft.NEWSLoadErrorReason = '';
                draft.newsList = [];
                break;
            }
            case LOAD_NEWS_SUCCESS: {
                draft.isLoadingNews = false;
                draft.newsList = [dummyNews, ...state.newsList];
                draft.isLoadedNews = true;
                break;
            }
            case LOAD_NEWS_FAILURE: {
                draft.isLoadingNews = false;
                draft.newsLoadErrorReason = action.error;
                break;
            }
            default: {
                break;
            }
        }
    });
};
