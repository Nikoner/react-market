import './style.css';
import facebookLogo from '../../../assets/images/facebook.png';
import twitterLogo from '../../../assets/images/twitter.png';
import instagramLogo from '../../../assets/images/inst.png';
import whatsAppLogo from '../../../assets/images/watsApp.png';
import telegramLogo from '../../../assets/images/telegram.png';

const SocialMedia = () => {
  return (
      <div className="down-elements-information">
        <p>Найти нас Вы можете тут:</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank"><img src={facebookLogo} alt="Facebook" /></a>
          <a href="https://www.twitter.com" target="_blank"><img src={twitterLogo} alt="Twitter" /></a>
          <a href="https://www.instagram.com" target="_blank"><img src={instagramLogo} alt="Instagram" /></a>
          <a href="https://www.web.whatsapp.com" target="_blank"><img src={whatsAppLogo} alt="Twitter" /></a>
          <a href="https://www.web.telegram.org" target="_blank"><img src={telegramLogo} alt="Instagram" /></a>
        </div>
      </div>

  )
}

export default SocialMedia