import axios from 'axios';
import qs from 'qs';

const API_ROOT = `${process.env.API_ENDPOINT}/api/${process.env.API_VERSION}`;

class Agent {
    constructor(baseURL = null) {
        this.axios = axios.create({
            baseURL,
            // 아래 옵션이 없으면 params를 array로 넘길때 url에 key=value가 아닌 key[]=value 와 같은 식으로 parsing 됩니다.
            paramsSerializer: params => qs.stringify(params, {arrayFormat: 'repeat'})
        });
    }

    /**
     * 추후 자동으로 basic end points를 생성하는 로직이 필요하다고 여겨질 때 참고
     * https://codeburst.io/how-to-call-api-in-a-smart-way-2ca572c6fe86
     */

    /* Base REST API method */
    get(url, params = {}, withConfig = true) {
        if (typeof url === 'string') url = url.replace('http:', 'https:');
        const config = withConfig ? this.requestConfig : {};

        return this.axios
          .get(url, { params, ...config })
          .catch(this._handleError);
    }

    getPublic(url, params = {}) {
        return this.get(url, params, false);
    }
    put(url, body) {
        return this.axios
          .put(url, body, this.requestConfig)
          .catch(this._handleError);
    }
    patch(url, body) {
        return this.axios
          .patch(url, body, this.requestConfig)
          .catch(this._handleError);
    }
    post(url, body) {
        return this.axios
          .post(url, body, this.requestConfig)
          .catch(this._handleError);
    }
    delete(url) {
        return this.axios
          .delete(url, this.requestConfig)
          .catch(this._handleError);
    }
    postFile(url, file) {
        return this.axios
          .post(url, file, this.requestConfigForFilePost)
          .catch(this._handleError);

    }
    requestConfig() {
        let requestConfig = { headers: {} };
        let accessToken = '';
        if (accessToken) {
            requestConfig.headers.Authorization = `Bearer ${accessToken}`;
        }
        return requestConfig;
    }
    requestConfigForFilePost() {
        let requestConfig = null;
        let accessToken = '';
        if (accessToken) {
            requestConfig = {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            };
        }
        return requestConfig;
    }
    _handleError(error) {
        if (!error.response) {
            throw error;
        }
        console.log('handle error : ', error.response);
        throw error;
    }


    /**
     * APIs
     * */

    /* 시스템 */

    // - API health check
    health() {
        return this.axios.get(`${process.env.API_ENDPOINT}/api/health`);
    }


    /* 회원정보 - User and Auth */

    // 회원가입
    signup(signupInfo) {
        return axios.post(`${API_ROOT}/users/signup/`, signupInfo).catch(this._handleError);
    }

    // 로그인
    login(loginInfo) {
        return axios.post(`${API_ROOT}/users/login/`, loginInfo).catch(this._handleError);
    }

    // 로그아웃
    logout() {
        return this.delete(`users/logout/`);
    }

    //
    loadUser() {
        return this.get(`users/`);
    }


    /* 차트 */



    /* 거래화면 exchange */

    // candle - 오늘 (00:00 ~ 현재) 까지의 분봉 데이터
    loadDailyCandle() {
        return this.getPublic(`candle/`);
    }

    // API 시세 수신 - Polling/Stream 등


    // 실시간 시세


    // 거래내역
    loadRealtimeTrades() {
        return this.getPublic(`trade_history/`, {});
    }

    // 내 거래내역 - 회원의 거래 내역(턴 완료에 따른 주문 결과)
    loadRealtimeResult() {
        return this.get(`trade_result/`, {});
    }

    // Order - /api/v1/order?type=buy&turn=12345678&price=5000
    registerOrder(orderInfo) {
        return this.post(`orders/`, orderInfo);
    }


    /* 거래결과 */

    // TransactionHistory
    loadTransactionHistory(cat = 1, date, page = 1) {
        let params = {};
        if (cat) params.cat = cat;
        if (date) params.date = date;
        if (page) params.page = page;
        return this.get(`result_history/`, params);
    }


    /* 입출금 */


    /* 서비스 화면 */

    // announcement
    loadAnnouncementList(id, page, search){
        let params = {};
        if (id) params.id = id;
        if (page) params.page = page;
        if (search) params.search = search;
        return this.getPublic(`/announcements/`, params);
    }


}

const agent = new Agent(API_ROOT);

export default agent;
