import Link from "next/link";
import {type ReactNode} from "react";


type NavLinkProps = {
    href: string
    children : ReactNode
}

function Navlink(props: NavLinkProps){
    return (
        <li className="hover:bg-cyan-600 rounded-md py-2 px-4">
            <Link href={props.href}>{props.children}</Link>
        </li>
    )

}

export default function Navbar() {
    return (
        <nav className="bg-cyan-500 p-4">
            <ul className="flex space-x-4 red text-white font-semibold">
                <Navlink href="/">Infos</Navlink>
                <Navlink href="crousticho">Les crousticho</Navlink>
                <Navlink href="/cv">Cv</Navlink>
                <Navlink href="/blog">Le Blog</Navlink>
            </ul>
        </nav>
    )
}