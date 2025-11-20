import CvEntry from "../components/CvEntry";


export default function Cv() {
    return(
        <>
        <body className="bg-gray-100">
            <h1 className="text-5xl text-center border rounded-xl">Curriculum Vitae</h1>

            <CvEntry title="Dindon de la farce" employe="dindons|farces.com">
                <ul>
                    <p>Fourreur de dindons avec de la farce     </p>
                </ul>
                
            </CvEntry>

            <CvEntry title="Ingénieur de Her Müller" employe="Müller Inc">
                <ul>
                    <p>Conception et mise en œuvre de solutions logicielles pour les clients.</p>
                </ul>
            </CvEntry>

            <CvEntry title="Assembleur de Grenades" employe="Grenades & Co">
                <ul>
                    <p>Assemblage d'engins explosifs propulsés à la main, aussi appellé "grenades".</p>
                </ul>
            </CvEntry>
        </body>
        </>
    )
}