import {
    GETCATEGORYNEWS_ERROR,
    GETCATEGORYNEWS_START,
    GETCATEGORYNEWS_SUCCESS,
    GETNEWS_ERROR,
    GETNEWS_START,
    GETNEWS_SUCCESS
}
    from "../constant/news.contant"

export const getNewsStart = () => ({
    type: GETNEWS_START
})

export const getNewsSuccess = (data) => ({
    type: GETNEWS_SUCCESS,
    payload: data
})

export const getNewsError = (error) => ({
    type: GETNEWS_ERROR,
    payload: error
})

// for categoryNews

export const getCategoryNewsStart = (slug) => ({
    type: GETCATEGORYNEWS_START,
    payload: slug
})

export const getCategoryNewsSuccess = (data) => ({
    type: GETCATEGORYNEWS_SUCCESS,
    payload: data,

})

export const getCategoryNewsError = (error) => ({
    type: GETCATEGORYNEWS_ERROR,
    payload: error
})

