import { Logo } from '../logo/Logo';
import { Navigation } from '../navigation/Navigation';
import s from './header.module.css';
import { Burger } from '../burger/Burger';
import { useState } from 'react';


export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className={`container ${s.wrapper}`}>
        <div className={s.nav}>
            <Navigation open={open} setOpen={setOpen} /> 
            <div className={s.menu}>
              <div className={`${open ? s.hide : ''} ${s.logo}`}>
                <Logo/>
              </div>
              <Burger open={open} setOpen={setOpen} />
            </div>
        </div>
      </div>
    </header>
  )
}
