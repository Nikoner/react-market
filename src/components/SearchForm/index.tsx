import { useState } from 'react';
import './style.css';
import loop from '../../assets/images/loop2.png';
const SearchForm = () => {

  const [isActive, setIsActive] = useState(false);

  const onSearchInputFocus = () => {
    setIsActive(!isActive);
  }

  const onSearchInputBlur = () => {
    setIsActive(false);
  }

  return (
    <div>
    <div className="background-muter"></div>
    <div className="search-container"> 
    <form action="" className="search-form">
    <div className="search-input-group">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Поиск товаров..." 
        onFocus={onSearchInputFocus} 
        onBlur={onSearchInputBlur}
      />
      <button type="submit" className="search-button">
        <img src={loop} alt="loop" className="loop"/>
      </button>
    </div>
    <div className={isActive ? "search-options-container__enabled" : "search-options-container"}>
      <h5>История: </h5>
      <ul className="search-options">
        <li>Бананы</li>
        <li>Яблоки</li>
        <li>Апельсины</li>
        <li>Абрикосы</li>
        <li>Груши</li>
      </ul>
    </div>
  </form>
    </div>
  </div>
  )
}

export default SearchForm;