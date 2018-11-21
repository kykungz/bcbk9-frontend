import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import Sessions from '../pages/Sessions'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/sessions',
    exact: true,
    component: Sessions,
  },
]

export default () => (
  <>
    {routes.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </>
)
