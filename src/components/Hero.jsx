// components/Hero.jsx

const Hero = () => {
    return (
    <div className="hero-container">
            <img src="finaldddd.jpg" width={300} height={300}/>
        <div className="hero-text">
        <h1>こんにちは 👋</h1>
        <p>
            大学生プログラマーのnrkwです。普段はプログラミングしたり、
        </p>
        <p>哲学を勉強しています。将来は自分で作ったソフトで起業したいです。</p>
        <div className="social-icons">
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
    </div>
    )
}

export default Hero;