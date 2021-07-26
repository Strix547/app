import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import './Auth.scss'

export const AuthPage = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const onUserNameChange = (event) => {
    setUserName(event.target.value)
  }

  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div className="auth-page">
      <div className="content">
        <h4>Добро пожаловать!</h4>

        <form className="form">
          <TextField
            label="Логин"
            variant="outlined"
            color="#2f49d1"
            value={userName}
            onChange={onUserNameChange}
          />

          <TextField
            label="Пароль"
            variant="outlined"
            color="#2f49d1"
            value={password}
            onChange={onPasswordChange}
          />

          <Button>Войти</Button>
        </form>
      </div>
    </div>
  )
}
