import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className=" ges">
                <img src="https://source.unsplash.com/1300x1200/?algeria" alt=''/>
                <img src="frontend\build\air.jpg" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?qatar" alt=''/>
                <img src="frontend\build\dhirubhai.jpg" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?kuwait" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?oman" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?turkey" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?iran" alt=''/>
                <img src="https://source.unsplash.com/1300x1200/?jordan" alt=''/>
                <img src="frontend\build\atomic.jpg" alt=''/>
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery