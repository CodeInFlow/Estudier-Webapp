import React from 'react';

function TrendingBooksItem({ book_author, book_img }) {
  return (
    <div className='py-4 px-8 rounded-lg bg-slate-50 w- hover:scale-105 hover:shadow-sm'>
    <img className='w-24 h-fit m-auto' src={book_img} alt="" />
    <div className="mt-2 text-center">
      {book_author}
    </div>
  </div>
  )
}

export default TrendingBooksItem;
