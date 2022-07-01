
import React, { useState } from "react";
import './Photos.css';
import CloseIcon from '@material-ui/icons/Close';
import img1 from '../assets/Session1/01.jpg';
import img2 from '../assets/Session1/02.jpg';
import img3 from '../assets/Session1/03.jpg';
import img4 from '../assets/Session3/n3.jpg';
import img5 from '../assets/Session1/05.jpg';
import img6 from '../assets/Session2/06.jpg';
import img7 from '../assets/Session2/07.jpg';
import img8 from '../assets/Session2/08.jpg'; 
import img9 from '../assets/Session1/04.jpg';

const Photos = () => {
  let photos  = [
    {
        id: 1,
        imgSrc: img1,
      },
      {
        id: 2,
        imgSrc: img2,
      },
      {
        id: 3,
        imgSrc: img3,
      },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    }
  ] 
   
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }
   return (
     <>
     <div className={model? "model open" : "model"}>
        <img src={tempImgSrc} />
        <CloseIcon onClick={() => setModel(false)}/>
     </div>
     <div className="gallery">
       {photos.map((item, index) => {
         return (
           <div className="pics" key={index} onClick= {()=> getImg(item.imgSrc)}>
             <img src={item.imgSrc} style={{width: '100%'}} />
           </div>
         )
       })}

     </div>
     </>
   )
}

  export default Photos
  