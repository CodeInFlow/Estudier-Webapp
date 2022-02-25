import React from 'react';
import "./DeptItem.css"

function DeptItem({ dept_name, dept_img }) {
  return (
    <div className='p-4 rounded-lg bg-slate-50 w-fit hover:scale-105 hover:shadow-sm'>
    <img className='w-10 h-fit m-auto' src={dept_img} alt="" />
    <div className="mt-2">
      {dept_name}
    </div>
  </div>
  )
}

export default DeptItem;
