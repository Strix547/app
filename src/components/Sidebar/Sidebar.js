import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

import { ROUTES } from '../../core/routes'

import './Sidebar.scss'

import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg'
import { ReactComponent as UsersIcon } from '../../assets/icons/users.svg'
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg'
import { ReactComponent as SettingIcon } from '../../assets/icons/settings.svg'
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg'

export const Sidebar = () => {
  const { pathname } = useLocation()

  const links = [
    { label: 'Главная', link: ROUTES.HOME, icon: <HomeIcon /> },
    { label: 'Пользователи', link: ROUTES.USERS, icon: <UsersIcon /> },
    { label: 'Загрузки', link: ROUTES.DOWNLOADS, icon: <DownloadIcon /> },
    { label: 'Настройки', link: ROUTES.SETTINGS, icon: <SettingIcon /> },
    {
      label: 'Выйти',
      icon: <LogoutIcon />,
      onClick: () => {
        console.log('logout')
      }
    }
  ]

  const linkList = links.map(({ label, link, icon, onClick }) => {
    const isActive = pathname === link

    return (
      <li key={label} className={isActive ? 'active' : null}>
        <Button component={Link} to={link} onClick={onClick}>
          {icon}
          {label}
        </Button>
      </li>
    )
  })

  return (
    <div className="sidebar">
      <nav>
        <ul>{linkList}</ul>
      </nav>
    </div>
  )
}
