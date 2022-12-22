import s from './burger.module.css';

export const Burger = ({open,setOpen}) => {
  const clickToBurgerHundler = () => {
    setOpen(!open);
  }

  return (
    <div className={`${open ? s.open : ''} ${s.burger}`} onClick={clickToBurgerHundler}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
