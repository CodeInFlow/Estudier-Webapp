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
      <Link to="dept/cs"><DeptItem dept_name="CS" dept_img={CompImage} /></Link>
      <Link to="dept/it"><DeptItem dept_name="IT" dept_img={ITImage} /></Link>
      <Link to="dept/entc"><DeptItem dept_name="ENTC" dept_img={ENTCImage} /></Link>
      <Link to="dept/ee"><DeptItem dept_name="EE" dept_img={EEImage} /></Link>
      <Link to="dept/me"><DeptItem dept_name="ME" dept_img={MEImage} /></Link>
      <Link to="dept/csbs"><DeptItem dept_name="CSBS" dept_img={CSBSImage} /></Link>
    </div>

  </div>
}

export default Department;

