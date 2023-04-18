import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoogleReCaptchaProvider
    reCaptchaKey={`${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`}
  >
    <App />
  </GoogleReCaptchaProvider>
);

