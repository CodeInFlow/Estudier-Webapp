import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../../Firebase';
import {Link} from 'react-router-dom';

function ParticularSubject() {
  
  let { id, id2 } = useParams();
  const [notes, setnotes] = useState([]);
  let DeptName, link;

  useEffect(() => {
    db.collection(id2).onSnapshot(snapshot => (
      setnotes(snapshot.docs.map(doc => doc.data()))
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
          notes.map(note => (
            link = note.notes_link,
            link = link.split("o/"),
            link = link[1].split(".p"),
            <Link to={`${id2}/123`}><div className='text-xl p-3'>{note.notes_name}</div><hr className='bg-gray-400' /></Link>
          ))
        }
      </div>
    </>
  )
}

export default ParticularSubject;