import React from 'react';
import "./Department.css"
import Dept_Item from './Dept_Item';

function Department() {
  return <div className='Dept'>
    <div className="Dept_Header">
         <h5>Department</h5>
         <div  className="Head_Right">
            <p>View More</p>
         </div>
    </div> 
    <div className="Dept_Body">
            <Dept_Item/>
         </div>

  </div>
}

export default Department;

