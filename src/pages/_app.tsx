import '../../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Navbar/index'
import MyNavbar from '../components/Navbar';


function MyApp({ Component, pageProps }) {
  return <div>
          <MyNavbar />
           <Component {...pageProps} />
        </div>
}

export default MyApp
