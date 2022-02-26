import React from 'react';

function DeptItem({ dept_name, dept_img }) {
  return (
    <div className='py-4 px-8 rounded-lg bg-slate-50 w- hover:scale-105 hover:shadow-sm'>
    <img className='w-10 h-10 m-auto' src={dept_img} alt="" />
    <div className="mt-2 text-center">
      {dept_name}
    </div>
  </div>
  )
}

export default DeptItem;
