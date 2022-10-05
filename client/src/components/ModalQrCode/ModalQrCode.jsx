import s from './ModalQrCode.module.scss';
import qrcode from './../../assets/qrcode/qrcode-lin.png';
import { useDispatch } from 'react-redux';
import { setValueQrCode } from '../../features/qrcode/qrcodeSlice';

const ModalQrCode = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.modal}>
      <div className={s.window}>
        <div
          className={s.close}
          onClick={() => dispatch(setValueQrCode(false))}
        >
          <svg
            version='1.1'
            id='Layer_1'
            x='0px'
            y='0px'
            viewBox='0 0 50 50'
            enableBackground='new 0 0 50 50'
            xmlSpace='preserve'
          >
            <path
              fill='#231F20'
              d='M9.016,40.837c0.195,0.195,0.451,0.292,0.707,0.292c0.256,0,0.512-0.098,0.708-0.293l14.292-14.309
            l14.292,14.309c0.195,0.196,0.451,0.293,0.708,0.293c0.256,0,0.512-0.098,0.707-0.292c0.391-0.39,0.391-1.023,0.001-1.414
            L26.153,25.129L40.43,10.836c0.39-0.391,0.39-1.024-0.001-1.414c-0.392-0.391-1.024-0.391-1.414,0.001L24.722,23.732L10.43,9.423
            c-0.391-0.391-1.024-0.391-1.414-0.001c-0.391,0.39-0.391,1.023-0.001,1.414l14.276,14.293L9.015,39.423
            C8.625,39.813,8.625,40.447,9.016,40.837z'
            />
          </svg>
        </div>
        <div className={s.qrcode}>
          <img src={qrcode} alt='qrcode' />
        </div>
      </div>
    </div>
  );
};

export default ModalQrCode;