// components/Layout.jsx

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/footer.jsx';

const Layout = ({ children }) => {
    return (
    <>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </>
    )
}

export default Layout;