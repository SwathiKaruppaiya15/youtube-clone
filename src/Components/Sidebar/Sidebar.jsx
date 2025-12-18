import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import megan from '../../assets/megan.png'
import swathi from '../../assets/swathi.png'
import techss from '../../assets/techsuperstar.jpg'
import rj from '../../assets/ramjan.jpg'
import vijtv from '../../assets/vijaytv.jpeg'

const Sidebar = ({ sidebar,category,setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className="sortcut-links">
        <div className={`side-link ${category===0?"active":""}`} onClick={()=>{setCategory(0)}}>
          <img src={home} alt="home" />
          <p>Home</p>
        </div>

        <div className={`side-link ${category===20?"active":""}`} onClick={()=>{setCategory(20)}}>
          <img src={game_icon} alt="gaming" />
          <p>Gaming</p>
        </div>

        <div className={`side-link ${category===2?"active":""}`} onClick={()=>{setCategory(2)}}>
          <img src={automobiles} alt="automobiles" />
          <p>Automobiles</p>
        </div>

        <div className={`side-link ${category===17?"active":""}`} onClick={()=>{setCategory(17)}}>
          <img src={sports} alt="sports" />
          <p>Sports</p>
        </div>

        <div className={`side-link ${category===24?"active":""}`} onClick={()=>{setCategory(24)}}>
          <img src={entertainment} alt="entertainment" />
          <p>Entertainment</p>
        </div>

        <div className={`side-link ${category===28?"active":""}`} onClick={()=>{setCategory(28)}}>
          <img src={tech} alt="technology" />
          <p>Technology</p>
        </div>

        <div className={`side-link ${category===10?"active":""}`} onClick={()=>{setCategory(10)}}>
          <img src={music} alt="music" />
          <p>Music</p>
        </div>

        <div className={`side-link ${category===22?"active":""}`} onClick={()=>{setCategory(22)}}>
          <img src={blogs} alt="blogs" />
          <p>Blogs</p>
        </div>

        <div className={`side-link ${category===25?"active":""}`} onClick={()=>{setCategory(25)}}>
          <img src={news} alt="news" />
          <p>News</p>
        </div>
      </div>
      <hr />

      <div className="subscribed-list">
        <h3>Subscribed</h3>

        <div className="side-link"onClick={()=>{setCategory(0)}}>
          <img src={swathi} alt="swathi" />
          <p>Swathi</p>
        </div>

        <div className="side-link"onClick={()=>{setCategory(0)}}>
          <img src={techss} alt="" />
          <p>Tech Super star</p>
        </div>

        <div className="side-link"onClick={()=>{setCategory(0)}}>
          <img src={vijtv} alt="" />
          <p>Vijay television</p>
        </div>

        <div className="side-link"onClick={()=>{setCategory(0)}}>
          <img src={megan} alt="5-Min Crafts" />
          <p>5-Min Crafts</p>
        </div>

        <div className="side-link"onClick={()=>{setCategory(0)}}>
          <img src={rj} alt="" />
          <p>Ram & Jannu</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
