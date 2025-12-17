import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import li from '../../assets/like.png'
import dli from '../../assets/dislike.png'
import sh from '../../assets/share.png'
import sav from '../../assets/save.png'
import {API_KEY} from '../../data'
import moment from 'moment'
import { value_converter } from '../../data'
import { useParams } from 'react-router-dom'

const PlayVideo = () => {

  const {videoId} = useParams();

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData,setCommentData] = useState([])

  const fetchVideoData = async()=>{
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(res=>res.json()).then(data=> setApiData(data.items[0]))
  }

  const fetchOtherData = async()=>{
    const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channel_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))

  }

  const fetchComment = async()=>{
    const comment_url = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResult=50&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
  }

  useEffect(()=>{
    fetchVideoData();
  },[videoId]);
  
  useEffect(()=>{
    fetchOtherData();
  },[apiData])

  useEffect(()=>{
    fetchComment();
  },[]);

  return (
    <div>
    <div className='play-video'>
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className='play-video-info'>
        <p>{apiData?apiData.statistics.viewCount:"16K"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
        <span><img src={li} alt="" />{apiData?value_converter(apiData.statistics.likeCount):1}</span>
        <span><img src={dli} alt="" /> </span>
        <span><img src={sh} alt="" />Share</span>
        <span><img src={sav} alt="" />Save</span>
        </div>
      </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:""}</p>
          <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1"}Subscribers</span>
        </div>
      <button>Subscribe</button>
    </div> 
      <div className="vid-description">
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
        <hr />
        <h4>{apiData?value_converter(apiData.statistics.commentCount):1}</h4>
        
        {commentData.map((item,ind)=>{
          return(
            <div key={ind} className="Comment">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 days ago</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={li} alt="" />
                  <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dli} alt="" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PlayVideo
