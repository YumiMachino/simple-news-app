import Footer from "./Footer"
import Header from "./Header"



const Layout = ({ children }) => {
    return ( 
        <div style={{minHeight: '100vh'}}>
            <Header />
            { children }
            <Footer />
        </div>
     );
}
 
export default Layout;