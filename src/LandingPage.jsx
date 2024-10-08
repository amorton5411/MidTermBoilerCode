import React from 'react';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const goToQuizPage = () => {
    navigate('/quiz'); // Navigate to the Quiz page
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation
    if (!username || !email || !firstName || !lastName) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    // Mock registration function
    const isRegistered = await mockRegisterUser({
      username,
      email,
      firstName,
      lastName,
    });

    if (isRegistered) {
      alert('Registration successful!');
      // Reset form or redirect user
    } else {
      setError('Registration failed. Please try again.');
    }

    setLoading(false);
  };

  const mockRegisterUser = (userData) => {
    // Simulate an API call for user registration
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate success
        resolve(true);
      }, 1000);
    });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </div>
      </form>
    </div>
  );
};
  
export default LandingPage;
  
  