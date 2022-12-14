import { Navigation } from '../navigation/Navigation';
import s from './header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.wrapper}`}>
        <Navigation/>
      </div>
    </header>
  )
}
