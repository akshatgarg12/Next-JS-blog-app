import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../src/components/navbar';
import ThemeContextProvider from '../src/context/theme';

function MyApp({ Component, pageProps }) {
  return <ThemeContextProvider>
                <div>
                <MyNavbar />
                <Component {...pageProps} />
                </div>
        </ThemeContextProvider>
}

export default MyApp
