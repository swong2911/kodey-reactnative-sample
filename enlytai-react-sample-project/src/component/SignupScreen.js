import React from 'react';

const SignupScreen = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isFormEmpty = username === '' || email === '' || password === '';

  return (
    <div style={{ margin: '20px' }}>
      <h2>Signup</h2>
      <form>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" disabled={isFormEmpty}>Signup</button>
      </form>
    </div>
  );
};

export default SignupScreen;