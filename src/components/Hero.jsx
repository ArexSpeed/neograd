import { Link } from 'react-scroll';
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__logo">
        <div className="hero__logo-neo">Neo</div><div className="hero__logo-grad">Grad</div>
      </div>
      <div className="hero__description">
        CSS effects for your website
      </div>
      <Link  
        to='builder' 
        smooth={true}
        duration={500} 
        className="hero__button"
      >
        Create
      </Link>
    </div>
  )
};

export default Hero;