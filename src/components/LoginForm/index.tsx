import './style.css';

const LoginForm = () => {

  return (
    <div className="container">
      <div className="form-content">
        <h1>Войти в аккаунт</h1>
          <label htmlFor="login">
              <span>Логин:</span>
          </label>
          <input type="text" id="adress" required />
          <label htmlFor="login">
              <span>Пароль:</span>
          </label>
          <input type="text" id="adress" required />
      </div>
    </div>
  )
}

export default LoginForm;