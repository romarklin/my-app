'use client'

import React, { useState, FormEvent, use } from 'react';


interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
    // 1 Déclarer les états pour le nom d'utilisateur et le mot de passe
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // 2 Fonction de gestion de la soumission du formulaire
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault(); // Empêche le rechargement de la page par défaut
        
        // Reset les erreurs
        setError('');
        setIsLoading(true);

        // --- SIMULATION DE LA LOGIQUE DE CONNEXION (CÔTÉ CLIENT) ---
        
        console.log('Tentative de connexion avec:', { username, password });

        try {
            
            
            // Exemple de logique de validation :
            if (username === 'admin' && password === 'password123') {
                // Succès : Redirection ou stockage du jeton/session
                console.log('Connexion réussie ! Redirection...');
                // Simuler un délai de réseau
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                alert('Connexion réussie ! (Simulée)');
                
            
            } else {
                // Échec : Afficher l'erreur
                await new Promise(resolve => setTimeout(resolve, 1500));
                setError('Nom d\'utilisateur ou mot de passe incorrect.');
            }

        } catch (err) {
            console.error('Erreur de connexion:', err);
            setError('Une erreur est survenue lors de la tentative de connexion.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2>Connexion Utilisateur</h2>
                
                {/* Affichage des erreurs si elles existent */}
                {error && <p style={styles.error}>{error}</p>}

                {/* Champ Nom d'utilisateur */}
                <div style={styles.group}>
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={styles.input}
                        placeholder="Entrez votre nom d'utilisateur"
                        disabled={isLoading}
                    />
                </div>

                {/* Champ Mot de passe */}
                <div style={styles.group}>
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                        placeholder="Entrez votre mot de passe"
                        disabled={isLoading}
                    />
                </div>
                <p style={styles.forgotPasswordLink}>
                   <a href="/register ">Pas de compte ? Inscrivez-vous</a>
                </p>
                {/* Bouton de soumission */}
                <button 
                    type="submit" 
                    style={styles.button}
                    disabled={isLoading}
                >
                    {isLoading ? 'Connexion...' : 'Se connecter'}
                </button>
            </form>
        </div>
    );
};

// Styles CSS 
const styles: { [key: string]: React.CSSProperties } = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f9',
    },
    form: {
        padding: '40px',
        backgroundColor: 'black',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
    },
    group: {
        marginBottom: '20px',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginTop: '5px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
    },
    button: {
        padding: '12px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px',
    },
    error: {
        color: '#ff0000',
        marginBottom: '15px',
        textAlign: 'center',
    },
};

export default LoginPage;