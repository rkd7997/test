import produce from 'immer';

export const LOAD_ANNOUNCEMENTS_REQUEST = 'LOAD_ANNOUNCEMENTS_REQUEST';
export const LOAD_ANNOUNCEMENTS_SUCCESS = 'LOAD_ANNOUNCEMENTS_SUCCESS';
export const LOAD_ANNOUNCEMENTS_FAILURE = 'LOAD_ANNOUNCEMENTS_FAILURE';

export const LOAD_NEWS_REQUEST = 'LOAD_NEWS_REQUEST';
export const LOAD_NEWS_SUCCESS = 'LOAD_NEWS_SUCCESS';
export const LOAD_NEWS_FAILURE = 'LOAD_NEWS_FAILURE';

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
                action.data.forEach((d) => {
                    draft.announcementsList.push(d);
                });
                draft.isLoadedAnnouncements = true;
                break;
            }
            case LOAD_ANNOUNCEMENTS_FAILURE: {
                draft.isLoadingAnnouncements = false;
                draft.announcementsLoadErrorReason = action.reason;
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
                action.data.forEach((d) => {
                    draft.newsList.push(d);
                });
                draft.isLoadedNews = true;
                break;
            }
            case LOAD_NEWS_FAILURE: {
                draft.isLoadingNews = false;
                draft.newsLoadErrorReason = action.reason;
                break;
            }
            default: {
                break;
            }
        }
    });
};
