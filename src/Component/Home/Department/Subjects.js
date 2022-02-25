import React from 'react';
import {useParams} from 'react-router-dom';

function Subjects() {
    let { id } = useParams();
  return (
    <div>Hello World {id}</div>
  )
}

export default Subjects