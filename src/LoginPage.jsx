import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const validUsername = "user";                         //for checking login credentials 
  const validPassword = "password";

  const goToLoginPage = () => {
    navigate('/landing'); // Navigate to the Login page
  };
  
  const handleSubmit = async (e) => {                   //when user clicks Login button
    e.preventDefault();                                 
    setError('');
    setLoading(true);

    const isValidUser = await mockVerifyUser(username, password);//test if credentials are valid
    
    if (isValidUser) {                                  //if valid user
      alert('Login successful!');
      // Proceed with login
      goToLoginPage();
    } else {
      setError('Invalid username or password');         //if invalid user
    }
    
    setLoading(false);                                  //loading complete/login checked
  };
  
  const mockVerifyUser = (username, password) => {      //take given name/pass and
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(username === validUsername && password === validPassword);//compare to acceptable values
      }, 1000);                                         //timeout after 1000ms
    });
  };

  return (                                              //onscreen text and buttons for login page
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>                    {/*creates login form*/}
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}//saves user input as username
              required                                     //indicates required field
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}//saves user input as password
              required                                     //indicates required field
            />
          </label>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}{/* conditional formatting for invalid login */}
        <div>
          <button type="submit" disabled={loading}>       {/* submit button */}
            {loading ? 'Logging in...' : 'Login'}         {/* changes during login-test */}
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
