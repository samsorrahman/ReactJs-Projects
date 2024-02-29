import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={() =>{
              setPlayState(true)}} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing tomorrow Leaders Today </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in risus eget
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in risus eget
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in risus eget
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in risus eget
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in risus eget
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in risus eget
            </p>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in risus eget
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in risus eget
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in risus eget
            </p>
        </div>

    </div>
  )
}

export default About