import s from './Header.module.scss';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import qrcode from './../../assets/qrcode/qrcode-lin.png';
import { useDispatch } from 'react-redux';
import { setValueQrCode } from '../../features/qrcode/qrcodeSlice';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className={s.header}>
      <div className={`container ${s.wrapper}`}>
        <Link to="/" className={s.logo}>
          <Logo />
        </Link>
        <div className={s.info}>
          <div
            className={s.qrcode}
            onClick={() => dispatch(setValueQrCode(true))}
          >
            <img src={qrcode} alt="qrcode" />
          </div>
          <Link to="/contact-me" className={s.link}>
            Contact me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
