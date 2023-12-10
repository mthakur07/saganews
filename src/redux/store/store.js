import { configureStore } from "@reduxjs/toolkit";
import {newsReducer} from "../reducer/news.reducer";
import createSagaMiddleware from 'redux-saga'
import news from "../saga/news.saga";

const sagaMiddleware = createSagaMiddleware();

const newsStore = configureStore({
    reducer: newsReducer,
    middleware: [sagaMiddleware],
    devTools: true
})
sagaMiddleware.run(news)
export default newsStore;
