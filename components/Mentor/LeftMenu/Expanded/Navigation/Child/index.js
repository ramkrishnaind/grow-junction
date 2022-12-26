import React from 'react'
import NavLink from '../../../../../Utilities/NavLink'
import classes from './Child.module.css'
<<<<<<< HEAD
const Child = ({ title, image, url, js, setActive, partial }) => {
=======
import { Auth } from 'aws-amplify'
import { useAuth0 } from '@auth0/auth0-react'
import {useDispatch} from 'react-redux'
import {
  ClearUser,
  StoreUserAuth,
} from '../../../../../../redux/actions/AuthAction'
const Child = ({ title, image, url, js, setActive, partial }) => {
  const dispatch=useDispatch()
  const { logout: oAuthLogout } = useAuth0()
  if (image === 'logout.png') {
    url = 'javascript:logout()'
    console.log('url', url)
  }
  window.auth = Auth
  window.logout = logout
  window.ClearUser = ClearUser
  window.StoreUserAuth = StoreUserAuth
  window.dispatch = dispatch
  async function logout() {
    try {
      await auth.signOut()
    } catch (error) {}
    try {
      oAuthLogout({ returnTo: window.location.origin })
    } catch (error) {}
    ClearUser(dispatch)
    StoreUserAuth(dispatch, null)
    // try {
    //   await auth.signOut()
    //   oAuthLogout({ returnTo: window.location.origin })
    // } catch (error) {
    //   console.log('error signing out: ', error)
    // }
  }
>>>>>>> 41932461691cefea30eaccc078d8ea374aa1fd91
  return (
    <NavLink
      href={url}
      exact={!partial}
      className="cursor-pointer"
      setActive={setActive}
    >
      <div
        className={`${classes.container} pl-10 my-2 text-2xl flex items-center cursor-pointer`}
      >
        <img
          className="pl-14 pr-6  w-50 h-50"
          style={{ width: '75px' }}
          src={`/assets/icon/mentor-dashboard/${image}`}
        />
        <span>{title}</span>
      </div>
    </NavLink>
  )
}

export default Child
