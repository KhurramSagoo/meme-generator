import React, { useState } from 'react';
import star from '../img/star.svg';
import starFill from '../img/star-fill.svg'

const YesNo = () => {
    const [changeYes,setChangeYes] = useState(true);
    function handleChange() {
        setChangeYes(prevState=>!prevState)}
        // const isGoing=true;
        // let answer=isGoing?"Yes" :"no"
  return (
    <div>
        {/* {answer} */}
    {/* {changeYes} */}

    <br />
    <button onClick={handleChange}>"Yes"{starFill} or "No" <span><img src={star} alt="" /></span></button>
<h1>{changeYes?"Yes" : ("No",{star} )}</h1>
    </div>
  )
}

export default YesNo;