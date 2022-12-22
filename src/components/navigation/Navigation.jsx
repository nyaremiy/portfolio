import s from './navigation.module.css';
import { Logo } from './../logo/Logo';

export const Navigation = ({open, setOpen}) => {
  const closeMenuHandler = () => {
    setOpen(false)
  }

  return (
    <nav className={`${s.navigation} ${open ? s.open : ''}`}>
      <ul className={s.list}>
        <li className={s.item}>
          <a href='/' className={s.link}>
            <Logo/>
          </a>
        </li>
        <li className={s.item} onClick={closeMenuHandler}>
          <a href='#intro' className={s.link}>intro</a>
        </li>
        <li className={s.item} onClick={closeMenuHandler}>
          <a href='#about' className={s.link}>about</a>
        </li>
        <li className={s.item} onClick={closeMenuHandler}>
          <a href='#works' className={s.link}>works</a>
        </li>
        <li className={s.item} onClick={closeMenuHandler}>
          <a href='#blogs' className={s.link}>blogs</a>
        </li>
        <li className={s.item} onClick={closeMenuHandler}>
          <a href='#sayHello' className={s.link}>say hello</a>
        </li>
      </ul>
    </nav>
  )
}
