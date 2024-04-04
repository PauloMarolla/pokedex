import { ToastContainer } from 'react-toastify';
import { AppRoutes } from './Routes';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
