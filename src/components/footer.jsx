// components/Footer.jsx

const Footer = () => {
    return (
        <>
        <hr/>
        <div className="footer-container">
            <p>
            © {new Date().getFullYear()} Yuuki's Blog. All rights reserved.
            </p>
            <div className="social_icons">
            <a
                href="https://github.com/sss-nrkw"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fa-brands fa-github"></i>
            </a>
            </div>
        </div>
        </>
    )
}

export default Footer;