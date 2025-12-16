import React from 'react'
import './PlayVideo.css'
import v1 from '../../assets/video.mp4'
import li from '../../assets/like.png'
import dli from '../../assets/dislike.png'
import sh from '../../assets/share.png'
import sav from '../../assets/save.png'
import jac from '../../assets/jack.png'
import u_p from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div>
    <div className='play-video'>
      <video src={v1} controls autoPlay muted></video>
      <h3>Best YouTube Channel To Learn Web Development</h3>
      <div className='play-video-info'>
        <p>1525 Views &bull; 2 days ago</p>
        <div>
        <span><img src={li} alt="" />125</span>
        <span><img src={dli} alt="" />2</span>
        <span><img src={sh} alt="" />Share</span>
        <span><img src={sav} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jac} alt="" />
        <div>
          <p>Greatstack</p>
          <span>1M Subscribers</span>
        </div>
      </div>
      <button>Subscribe</button>
    </div> 
      <div className="vid-description">
        <p>Channel that makes learning Easy</p>
        <p>Subscribe Greatstack to Watch More Tutorials on web development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="Comment">
          <img src={u_p} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 days ago</span></h3>
            <p>A global computer network providing a variety of information and communication facts of interconnection networks using standardized communication protocols.</p>
            <div className="connand-action">
              <img src={li} alt="" />
              <span>244</span>
              <img src={dli} alt="" />
            </div>
          </div>
        </div>
        <div className="Comment">
          <img src={u_p} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 days ago</span></h3>
            <p>A global computer network providing a variety of information and communication facts of interconnection networks using standardized communication protocols.</p>
            <div className="connand-action">
              <img src={li} alt="" />
              <span>244</span>
              <img src={dli} alt="" />
            </div>
          </div>
        </div>
        <div className="Comment">
          <img src={u_p} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 days ago</span></h3>
            <p>A global computer network providing a variety of information and communication facts of interconnection networks using standardized communication protocols.</p>
            <div className="connand-action">
              <img src={li} alt="" />
              <span>244</span>
              <img src={dli} alt="" />
            </div>
          </div>
        </div>
        <div className="Comment">
          <img src={u_p} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 days ago</span></h3>
            <p>A global computer network providing a variety of information and communication facts of interconnection networks using standardized communication protocols.</p>
            <div className="connand-action">
              <img src={li} alt="" />
              <span>244</span>
              <img src={dli} alt="" />
            </div>
          </div>
        </div>
        <div className="Comment">
          <img src={u_p} alt="" />
          <div>
            <h3>Jack Nicholson <span>1 days ago</span></h3>
            <p>A global computer network providing a variety of information and communication facts of interconnection networks using standardized communication protocols.</p>
            <div className="connand-action">
              <img src={li} alt="" />
              <span>244</span>
              <img src={dli} alt="" />
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default PlayVideo
