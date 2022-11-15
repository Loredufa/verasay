import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Photos.css';
import CloseIcon from '@material-ui/icons/Close';
import { setGooglePhotos } from '../actions';
import styled from "styled-components";

export function Gallery () {

    const dispatch = useDispatch()

    const googlePhotos = useSelector ((state) => state.googlePhotos)

  let photos  = googlePhotos.map((el, index) => {
      return {id: index += 1,  imgSrc: el}
      
    })
    console.log(photos)
       
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  useEffect(() => {
    dispatch(setGooglePhotos());
    }, [dispatch])

   return (
     <>
     <div className={model? "model open" : "model"}>
        <img src={tempImgSrc} alt='imge not found'/>
        <CloseIcon onClick={() => setModel(false)}/>
     </div>
     <div className="gallery">
       {photos.map((item, index) => {
         return (
           <div className="pics" key={index} onClick= {()=> getImg(item.imgSrc)}>
             <Photo src={item.imgSrc} alt='imge not found' />
           </div>
         )
       })}

     </div>
     </>
   )
}

const Photo = styled.img`
width: 100%;
overflow: hidden;
`;