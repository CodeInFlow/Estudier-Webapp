import React from 'react';
import "./Department.css"
import DeptItem from './DeptItem';
import CompImage from '../../../assets/comp.png';

function Department() {
  return <div className='Dept'>
    <div className="Dept_Header">
      <h5>Department</h5>
      <div className="Head_Right">
        <p className='text-gray-400'>View More</p>
      </div>
    </div>
    <div className="Dept_Body">
      <DeptItem dept_name="Computer" dept_img={CompImage} />
    </div>

  </div>
}

export default Department;

