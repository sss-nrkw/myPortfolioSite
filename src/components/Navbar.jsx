import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
            <Link href="/">
                Yuuki's Blog
            </Link>
            </div>
        </div>
    );
}

export default Navbar;