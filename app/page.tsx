import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black  flex flex-col items-center justify-center p-4 sm:p-8">
      
      {/* Conteneur principal centré */}
      <div className="max-w-4xl w-full text-center py-16 px-6 sm:px-10 bg-white rounded-3xl shadow-2xl">
        
        {/* Titre principal et slogan */}
        <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-900 leading-tight mb-4">
          Bienvenue sur Mon Blog Next.js
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-10">
          La révolution des Server Actions avec Next.js et Tailwind CSS 
        </p>
        
        {/* Section Blog Call-to-Action */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Découvrez les Derniers Articles
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Plongez dans le contenu que j'ai créé en utilisant les Server Actions de Next.js.
          </p>
          
          {/* Bouton d'accès au Blog */}
          <Link href="/blog" passHref>
            <button className="bg-blue-600 text-white font-semibold py-4 px-10 rounded-full text-lg 
                             hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-xl 
                             focus:outline-none focus:ring-4 focus:ring-blue-300">
              Voir tous les Posts du Blog &rarr;
            </button>
          </Link>
        </div>
        
        {/* Petit footer/info */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            Codé par Romain Halewyck &copy; 2024. Propulsé par Next.js et Tailwind CSS.
          </p>
        </div>
      </div>
      
    </div>
  );
}