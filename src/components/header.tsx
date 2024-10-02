import Link from "next/link"
import Image from "next/image"
import Logo from "../app/public/images.jpg"
export default function Header(){
    return(
        <div className="header">
        <div className="logo">
        <Image src={Logo} alt="Logo"  width={80} height={60} />
        </div>
            <ul className="header-button">
            <Link href={"/"}>
                <li><b>Home</b></li>
                </Link>
                <Link href={"/about-us"}>
                <li>About</li>
                </Link>
                <Link href={"/contact-us"}>
                <li>Contact</li>
                </Link>
                <Link href={"/job"}>
                <li>Jobs</li>
                </Link>
            </ul>
        </div>
    )
}