import './style.css';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="elements-footer">
      <div className="footer-elements">
        <div>
          <ul className="footer-categories">
              <li><h4>Покупателям</h4></li>
              <li>Поддержка</li>
              <li>Гид по сайту</li>  
          </ul>
        </div>
        <div>
          <ul className="footer-categories">
              <li><h4>Партнерам</h4></li>
              <li>Продавайте на FOX Market</li>
              <li>Аффилиатная программа</li>
              <li>Блог для продавца</li>
            </ul>
        </div>
        <div>
          <ul className="footer-categories">
              <li><h4>Помощь</h4></li>
              <li>Контакты</li>
              <li>Доставка</li>
              <li>Оплата</li>
              <li>Возврат</li>
            </ul>
        </div>
        <div>
          <ul className="footer-categories">
              <li><h4>О компании</h4></li>
              <li>Пресс-центр</li>
              <li>Вакансии</li>
              <li>FOX Tech</li>
              <li>Блог о жизни компании</li>
            </ul>
        </div>
      </div>
    </div>
    <SocialMedia />
    <div>
      <p>© 2023 FOX Market. Все права защищены.</p>
    </div>
    </footer>
  )
}

export default Footer;