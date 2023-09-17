// components/Layout.jsx

import Navbar from '/src/components/navbar.jsx';
import Footer from '/src/components/footer.jsx';

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