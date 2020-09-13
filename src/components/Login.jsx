import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const handleSignIn = (e) => {
    e.preventDefault()
    if (username && password) {
      localStorage.setItem('userName', username)
      history.push('/')
    }
  }

  return (
    <div
      className="container"
      style={{
        paddingTop: '45px',
        marginTop: '5%',
        paddingLeft: '20%',
        paddingBottom: '20px',
        backgroundColor: '#d5dcde',
        height: '100%',
        width: '100%',
      }}
    >
      <div>
        <h1 style={{ marginRight: '300px' }}>Login</h1>
        <form onSubmit={handleSignIn} style={{ marginTop: '15px' }}>
          <div className="form-group row">
            <label className="col-form-label">User Name: </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                placeholder="Enter user name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label">Password: </label>
            <div className="col-sm-6" style={{ marginLeft: '12px' }}>
              <input
                type="password"
                className="form-control"
                value={password}
                name="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ marginRight: '150px' }}
              >
                LogIn
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
