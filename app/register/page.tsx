'use client';

import React, { useState, FormEvent } from 'react';


interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
    
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    
    // États pour feedback user
    const [error, setError] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Fonction de gestion de la soumission formulaire
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault(); 
        
        setError('');
        setSuccessMessage('');
        setIsLoading(true);

        // --- VALIDATIONS FRONT-END ---

        // 1. Vérification que les mots de passe correspondent
        if (password !== confirmPassword) {
            setError('Les mots de passe ne correspondent pas.');
            setIsLoading(false);
            return;
        }

        // 2. Vérification simple de la longueur du mot de passe 
        if (password.length < 8) {
            setError('Le mot de passe doit contenir au moins 8 caractères.');
            setIsLoading(false);
            return;
        }

        // --- SIMULATION DE L'APPEL API (CÔTÉ CLIENT) ---
        
        console.log('Tentative d\'inscription avec:', { username, email });

        try {
            
            
            // Exemple de simulation de réussite
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            setSuccessMessage(`Inscription réussie pour ${username} ! Vous pouvez maintenant vous connecter.`);
            // Réinitialiser les champs après succès
            setEmail('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
            
        } catch (err) {
            console.error('Erreur d\'inscription:', err);
            setError('Une erreur est survenue lors de l\'inscription.');
            
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2>Créer un Compte</h2>
                
                {/* Affichage des messages */}
                {error && <p style={styles.error}>{error}</p>}
                {successMessage && <p style={styles.success}>{successMessage}</p>}

                {/* Champ Email */}
                <div style={styles.group}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                        placeholder="votre.email@exemple.com"
                        disabled={isLoading}
                    />
                </div>

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
                        placeholder="Choisissez un nom d'utilisateur"
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
                        placeholder="Minimum 8 caractères"
                        disabled={isLoading}
                    />
                </div>
                
                {/* Champ Confirmation Mot de passe */}
                <div style={styles.group}>
                    <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        style={styles.input}
                        placeholder="Confirmez votre mot de passe"
                        disabled={isLoading}
                    />
                </div>

                {/* Bouton de soumission */}
                <button 
                    type="submit" 
                    style={styles.button}
                    disabled={isLoading}
                >
                    {isLoading ? 'Inscription en cours...' : 'S\'inscrire'}
                </button>
                
                <p style={styles.loginLink}>
                    Déjà un compte ? <a href="/login">Connectez-vous ici.</a>
                </p>
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
        backgroundColor: 'Black',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
    },
    group: {
        marginBottom: '15px',
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
        backgroundColor: '#28a745', // Vert pour l'inscription
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '15px',
    },
    error: {
        color: '#dc3545',
        marginBottom: '15px',
        textAlign: 'center',
        backgroundColor: '#f8d7da',
        padding: '10px',
        borderRadius: '4px',
    },
    success: {
        color: '#155724',
        marginBottom: '15px',
        textAlign: 'center',
        backgroundColor: '#d4edda',
        padding: '10px',
        borderRadius: '4px',
    },
    loginLink: {
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '14px',
    }
};

export default RegisterPage;