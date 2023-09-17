// components/Layout.jsx

import Navbar from '/src/components/navbar';
import Footer from '/src/components/footer';

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