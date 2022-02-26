import React, { useEffect, useState } from 'react';
import "./TrendingBooks.css";
import TrendingBooksItem from './TrendingBooksItem';
import db from '../../../Firebase';

function TrendingBooks() {

  const [Trendingbooks, setTrendingbooks] = useState([]);

  useEffect(() => {
    db.collection("Books_trending").onSnapshot(snapshot => (
      setTrendingbooks(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  return <div className='trending-books'>
    <div className="trending-books-header">
      <h5>Books</h5>
      <div className="header-right">
        <p className='text-gray-400'>View More</p>
      </div>
    </div>
    <div className="trending-books-body flex space-x-10">
     {
        Trendingbooks.map(book => (
          <TrendingBooksItem key={book.book_img} book_author={book.book_author} book_img={book.book_img} />
        ))
      }
    </div>

  </div>
}

export default TrendingBooks;

