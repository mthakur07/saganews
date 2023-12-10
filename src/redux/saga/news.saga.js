import { getCategoryNewsError, getCategoryNewsSuccess, getNewsError, getNewsSuccess } from "../action/news.action";
import { GETCATEGORYNEWS_START, GETNEWS_START } from "../constant/news.contant";
import {put, takeLatest} from "redux-saga/effects"
import { getNewsbyAPI } from "../service/news.service";

function* getNews() {
    try {
        let data = yield getNewsbyAPI();
        yield put(getNewsSuccess(data));

    } catch (error) {
        yield put(getNewsError(error));
    }
}

function* getCategoryNews({payload}) { 
    try {
        let data = yield getNewsbyAPI(payload);
        console.log(data)

        yield put(getCategoryNewsSuccess(data)); 
        
    } catch (error) {
        yield put(getCategoryNewsError(error));
    }
}

export default function* news(){
   yield takeLatest(GETNEWS_START, getNews)
   yield takeLatest(GETCATEGORYNEWS_START, getCategoryNews)
}

 