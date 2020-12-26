import '../styles/global.css'
import Navbar from '../src/components/navbar';

function MyApp({ Component, pageProps }) {
  return <div style={{width:"100%"}}>
           <Navbar />
           <Component {...pageProps} />
           <div className="footer">
              <h1>Thanks</h1>
           </div>
        </div>
}

export default MyApp
