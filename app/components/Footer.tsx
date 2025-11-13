import { ReactNode } from "react"



type FooterProps = {
    year: number
    children?:ReactNode 
}

function Footerlink(props: FooterProps) {
    return (
        <footer className="bg-cyan-500 p-4 text-center text-white font-semibold mt-8">
            &copy; {props.year} Mon Site Web. Tous droits réservés.
        </footer>
    )
}

export default function Footer(props: FooterProps) {
    return (
        <footer className="bg-cyan-500 p-4 text-center text-white font-semibold mt-8">
            &copy; {props.year} Mon Site Web. Tous droits réservés.
        </footer>
    )
}