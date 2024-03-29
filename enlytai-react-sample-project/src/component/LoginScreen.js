import React from 'react';\n\nexport default function LoginScreen() {\n  return (\n    <div style={{ margin: 'auto', width: '50%', padding: '10px' }}>\n      <form>\n        <label>Username:</label>\n        <input type='text' id='username' name='username' required />\n        <label>Password:</label>\n        <input type='password' id='password' name='password' required />\n        <button type='submit' disabled={!username || !password}>Login</button>\n        <a href='#'>Forgot Password?</a>\n        <a href='#'>Signup</a>\n      </form>\n    </div>\n  );\n}