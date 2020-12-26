import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from '../src/components/navbar';


function MyApp({ Component, pageProps }) {
  return <div>
          <MyNavbar />
           <Component {...pageProps} />
        </div>
}

export default MyApp
