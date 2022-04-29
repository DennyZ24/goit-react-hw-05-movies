import { NavLink, } from "react-router-dom";
import s from 'components/Navigation/Navigation.module.css'

export default function Navigation() {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink to='/' className={({ isActive }) =>
            isActive ? `${s.link} ${s.activ}` : s.link}>Home</NavLink>
        <NavLink to='movies' className={({ isActive }) =>
            isActive ? `${s.link} ${s.activ}` : s.link}>Movies</NavLink>
      </nav>
    </header>
  )
}