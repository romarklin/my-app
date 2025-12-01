import CvEntry from "../components/CvEntry"; // Assurez-vous que le chemin est correct
import Link from 'next/link';

export default function Cv() {
    return(
        // Changement du fond de la page : de bg-gray-50 à bg-gray-900 (très sombre)
        <div className="min-h-screen bg-gray-900 p-6 sm:p-10">
            {/* Changement du fond du conteneur principal : de bg-white à bg-gray-800 */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-8 sm:p-12 shadow-2xl rounded-xl">
                
                {/* En-tête du CV */}
                <header className="mb-12 border-b-4 border-blue-600 pb-4">
                    {/* Changement de la couleur du texte H1 : de text-gray-900 à text-white */}
                    <h1 className="text-6xl font-extrabold text-center text-white tracking-tight">
                        Curriculum Vitae
                    </h1>
                </header>

                {/* Section Expérience */}
                <section className="mt-8">
                    {/* Changement de la couleur du texte H2 : de text-gray-800 à text-gray-100 */}
                    <h2 className="text-3xl font-bold text-gray-100 mb-6 border-b pb-2">
                        Expérience Professionnelle
                    </h2>

                    {/* Remarque : Le composant CvEntry utilise probablement un fond blanc par défaut. 
                       Pour un thème sombre complet, vous devrez également modifier 'components/CvEntry.tsx' 
                       pour changer 'bg-white' en 'bg-gray-700' et adapter les couleurs de texte internes. */}
                    
                    <CvEntry title="Dindon de la farce" employe="dindons|farces.com">
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                Fourreur de dindons avec de la farce.
                            </li>
                        </ul>
                    </CvEntry>

                    <CvEntry title="Ingénieur de Her Müller" employe="Müller Inc">
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                Conception et mise en œuvre de solutions logicielles pour les clients.
                            </li>
                        </ul>
                    </CvEntry>

                    <CvEntry title="Assembleur de Grenades" employe="Grenades & Co">
                        <ul className="list-disc list-inside space-y-1">
                            <li>
                                Assemblage d'engins explosifs propulsés à la main, aussi appellés "grenades".
                            </li>
                        </ul>
                    </CvEntry>
                </section>
                
                {/* Ajustement de la couleur du texte et de la bordure du footer pour le mode sombre */}
                <footer className="mt-12 text-center text-gray-400 pt-6 border-t border-gray-700">
                    <Link href="/" className="text-blue-500 hover:text-blue-400 transition">
                        &larr; Retour à l'accueil
                    </Link>
                </footer>
            </div>
        </div>
    )
}