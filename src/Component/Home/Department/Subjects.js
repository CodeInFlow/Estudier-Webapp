import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../../Firebase';
import {Link} from 'react-router-dom';

function Subjects() {
  let { id } = useParams();
  const [subjects, setsubjects] = useState([]);
  let DeptName;

  useEffect(() => {
    db.collection(id).onSnapshot(snapshot => (
      setsubjects(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  switch (id) {
    case "cs": DeptName = "Computer"; break;
    case "it": DeptName = "Information Technology"; break;
    case "entc": DeptName = "Electronics and telecommunication"; break;
    case "ee": DeptName = "Electrical engineering"; break;
    case "me": DeptName = "Mechanical engineering"; break;
    case "csbs": DeptName = "Computer"; break;
  }

  return (
    <>
      <div className='text-2xl text-gray-600 font-semibold'>{DeptName}</div>
      <div className='p-10'>
        {
          subjects.map(subject => (
            <Link to={`${id}/${subject.sub_link}`}><div className='text-xl p-3'>{subject.sub_name}</div><hr className='bg-gray-400' /></Link>
          ))
        }
      </div>
    </>
  )
}

export default Subjects