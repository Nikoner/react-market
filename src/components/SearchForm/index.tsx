import './style.css';
const SearchForm = () => {

  // const searchOptionsContainerElement = document.querySelector('.search-options-container');
  // const backgroundMuterElement = document.querySelector('.background-muter');
  // const searchInput = document.querySelector('.search-input');
  
  // searchInput.addEventListener('focus', () => {
  //   backgroundMuterElement.classList.add('background-muter__enabled');
  //   searchOptionsContainerElement.classList.add('search-options-container__enabled');
  // })
  
  // const onSearchInputBlur = () => {
  //   backgroundMuterElement.classList.remove('background-muter__enabled');
  //   searchOptionsContainerElement.classList.remove('search-options-container__enabled');
  //   searchInput.blur();
  // }
  
  // backgroundMuterElement.addEventListener('click', onSearchInputBlur);
  
  // searchInput.addEventListener('blur', onSearchInputBlur);
  

  return (
    <div>
    <div className="background-muter"></div>
    <div className="search-container"> 
    <form action="" className="search-form">
    <div className="search-input-group">
      <input type="text" className="search-input" placeholder="Поиск товаров..."/>
      <button type="submit" className="search-button"></button>
      {/* <!-- &#x1F50D --> */}
    </div>
    <div className="search-options-container">
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