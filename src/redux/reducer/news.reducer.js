import { GETCATEGORYNEWS_SUCCESS, GETNEWS_SUCCESS } from "../constant/news.contant";

const initialState = {
    news: [],
    categoryNews: [],
    newsCategory: [
        "Education",
        "Business",
        "Goverment",
        "Politics",
        "health",
        "Economy",
        "Fashion",
        "sports",
        "Environment",
        "Entertainment",
        "War"
    ]
}
export  const newsReducer = (state = initialState, action) => {

    switch (action.type) {
        case GETNEWS_SUCCESS:
            return {
                ...state,
                news: [...action.payload]
            }
        case GETCATEGORYNEWS_SUCCESS:

            return {
                ...state,
                categoryNews: [...action.payload]
            }
        default:
            return state;
    }

}

 //export default newsReducer;

 // Ye already export hai fir bhi ? 