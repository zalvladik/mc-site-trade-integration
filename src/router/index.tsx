import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AuctionLayout from 'src/layouts/AuctionLayout'
import AuthLayout from 'src/layouts/AuthLayout'
import BarCharPage from 'src/pages/BarCharPage'
import ExpansionWorldsPage from 'src/pages/ExpansionWorldsPage'
import { RoutesPath } from 'src/router/routes'

const ErrorPage = lazy(() => import('src/pages/ErrorPage'))
// const WikiPage = lazy(() => import('src/pages/WikiPage'))
const SignInPage = lazy(() => import('src/pages/SignInPage'))
const MapPage = lazy(() => import('src/pages/MapPage'))
const InventoryPage = lazy(() => import('src/pages/InventoryPage'))
const ProfilePage = lazy(() => import('src/pages/ProfilePage'))

export const Router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      { path: RoutesPath.SIGN_IN, element: <SignInPage /> },
      {
        path: RoutesPath.USER,
        element: <AuthLayout />,
        children: [
          { path: RoutesPath.PROFILE, element: <ProfilePage /> },
          { path: RoutesPath.INVENTORY, element: <InventoryPage /> },
          {
            path: RoutesPath.AUCTION,
            element: <AuctionLayout />,
          },
          { path: RoutesPath.MAP, element: <MapPage /> },
          { path: RoutesPath.TRADE_CHART, element: <BarCharPage /> },
          { path: RoutesPath.EXPANSION_WORLDS, element: <ExpansionWorldsPage /> },
          // { path: RoutesPath.WIKI, element: <WikiPage /> },
        ],
      },
    ],
  },
])
