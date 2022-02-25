import React from 'react';
import "./Department.css"
import DeptItem from './DeptItem';
import CompImage from '../../../assets/comp.png';
import ITImage from '../../../assets/it.png';
import ENTCImage from '../../../assets/entc.png';
import EEImage from '../../../assets/elec.png';
import MEImage from '../../../assets/mech.png';
import CSBSImage from '../../../assets/csbs.png';
import {Link} from 'react-router-dom';

function Department() {
  return <div className='Dept'>
    <div className="Dept_Header">
      <h5>Department</h5>
      <div className="Head_Right">
        <p className='text-gray-400'>View More</p>
      </div>
    </div>
    <div className="Dept_Body flex space-x-10">
      {/* <Link to=""><DeptItem dept_name="Computer" dept_img={CompImage} /></Link>
      <Link to=""><DeptItem dept_name="Infromation Technology" dept_img={ITImage} /></Link> */}
      <Link to="dept/comp"><DeptItem dept_name="CS" dept_img={CompImage} /></Link>
      <DeptItem dept_name="IT" dept_img={ITImage} />
      <DeptItem dept_name="ENTC" dept_img={ENTCImage} />
      <DeptItem dept_name="EE" dept_img={EEImage} />
      <DeptItem dept_name="ME" dept_img={MEImage} />
      <DeptItem dept_name="CSBS" dept_img={CSBSImage} />
    </div>

  </div>
}

export default Department;

