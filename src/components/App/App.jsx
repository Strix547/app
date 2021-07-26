import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import { Sidebar } from '../Sidebar'
import { AuthPage, HomePage } from '../../pages'

import { ROUTES } from '../../core/routes'

import './App.scss'

export const App = () => {
  const { pathname } = useLocation()

  if (pathname === '/auth') return <AuthPage />

  return (
    <div className="app">
      <Sidebar />

      <main className="content">
        <Switch>
          <Route path={ROUTES.HOME} component={HomePage} />
        </Switch>
      </main>
    </div>
  )
}
