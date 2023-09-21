import React, { useState, useRef } from "react";
import './PostShare.css'
import ProfileImage from '../../img/profileImg.jpg'
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TodayIcon from '@material-ui/icons/Today';
import CloseIcon from '@material-ui/icons/Close';

function PostShare() {
    const [image, setImage] = useState(null);
    const imageRef = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };

    return (
        <div className="PostShare">
            <img src={ProfileImage} alt="" />
            <div>
                <input type='text' placeholder="What's Happening?" />
                <div className='PostOptions'>
                    <div className='option'>
                        <PhotoIcon style={{ color: '#70b5f9' }}
                            onClick={() => imageRef.current.click()} />
                        <span>Photo</span>
                    </div>

                    <div className='option'>
                        <YouTubeIcon style={{ color: '#7fc15e' }} />
                        <span>Video</span>
                    </div>

                    <div className='option'>
                        <TodayIcon style={{ color: '#e7a33e' }} />
                        <span>Event</span>
                    </div>

                    <button className='button ps-button'>
                        Share
                    </button>
                    <div style={{ display: "none" }}>
                        <input
                            type="file"
                            name="myImage"
                            ref={imageRef}
                            onChange={onImageChange}
                        />
                    </div>
                </div>
                {image && (

                    <div className="previewImage">
                        <CloseIcon onClick={() => setImage(null)} />
                        <img src={image.image} alt="" />
                    </div>

                )}
            </div>
        </div>

    )
}

export default PostShare
