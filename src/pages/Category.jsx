import React, { useEffect } from 'react'
import { getCategoryNewsStart } from '../redux/action/news.action';
import Card from '../componant/Card';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Category() {

  let { id } = useParams();

  let categoryNews = useSelector(state => state.categoryNews);

  console.log(categoryNews);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryNewsStart(id))
  }, [id, categoryNews.length])

  return (
    <div className='row'>
      {
        categoryNews.length > 0 && categoryNews.map((item, index) => (
          <Card item={item} key={index} />
        ))
      }
    </div>
  )
}
