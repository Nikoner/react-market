import './style.css';

const LoginForm = () => {

  return (
    <div className="container">
      <div className="form-content">
        <h3>Войти в аккаунт</h3>
        <label htmlFor="login" className='label-form'>
            <span>Номер телефона:</span>
        </label>
        <input type="text" required />
        <label htmlFor="login" className='label-form'>
            <span>Пароль:</span>
        </label>
        <input type="text" required />
        <a href="#" className="forgot-password">Забыли пароль?</a>
        <div className="login-button-container">
          <button type="submit" className="login-button"> Войти
          </button>
          <button type="submit" className="register-button"> Создать аккаунт
          </button>
        </div>
        {/* <span>Ещё нет аккаунта? Тогда <a href="#" className="register-link">создайте его</a> прямо сейчас</span> */}
      </div>
    </div>
  )
}

export default LoginForm;