import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import ModalQrCode from './components/ModalQrCode/ModalQrCode';
import { useSelector } from 'react-redux';

function App() {
  const qrModal = useSelector((state) => state.qrcode.value);
  return (
    <div className='App'>
      {qrModal && <ModalQrCode />}
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
