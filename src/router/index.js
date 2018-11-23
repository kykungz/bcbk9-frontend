import React from 'react'
import { Route, Redirect } from 'react-router-dom'
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
  {
    path: '*',
    components: () => <Redirect to="/" />,
  },
]

export default () => (
  <>
    {routes.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </>
)
