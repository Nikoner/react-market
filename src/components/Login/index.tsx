import './style.css';

const Login = () => {

  return (
    <div className="container">
      <div className="form-content">
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

export default Login;