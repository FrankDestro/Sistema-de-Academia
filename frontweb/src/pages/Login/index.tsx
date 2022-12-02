import './styles.css';

import { Link } from 'react-router-dom';

import LoginLogo from 'assets/img/login-logo.png';

function Login() {
  return (
    <>
      <div className="card-login container-fluid login-card">
        <div className="container-logo-login">
          <img src={LoginLogo} alt="Logo-Login" />
        </div>

        <div className="container-content-login">
          <h1>Login</h1>
          <form>
            <div className="mb-4">
              <input
                type="text"
                className="form-control base-input"
                placeholder="Email"
                name="username"
              />
            </div>

            <div className="mb-2 input-password">
              <input
                type="password"
                className="form-control base-input "
                placeholder="Password"
                name="password"
              />
            </div>

            <a href="/admin/auth/recover" className="login-link-recover">
              Esqueci a senha
            </a>
            <div className="login-submit ">
            <Link to="/home">
              <button className="btn-primary">Fazer Login</button>
              </Link>

            </div>
         
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
