// Fonction pour rediriger l'utilisateur vers la page de gestion du compte après la connexion
function redirectToAccountPage() {
    window.location.href = "redirection_apres_connexion.html";
}

// Fonction pour rediriger l'utilisateur vers la page de création de compte après la création de compte
function redirectToCreationPage() {
    window.location.href = "redirection_apres_creation.html";
}

// Fonction pour vérifier si l'utilisateur est connecté ou s'il vient de créer un compte
function checkUserStatus() {
    // Supposons que vous ayez une variable isLoggedIn qui indique si un utilisateur est connecté
    var isLoggedIn = true; // Vous devez remplacer cela par votre propre logique de vérification de connexion
    
    // Supposons que vous ayez une variable isNewAccount qui indique si un nouvel utilisateur vient de créer un compte
    var isNewAccount = true; // Vous devez remplacer cela par votre propre logique de vérification de nouveau compte

    // Vérifie si l'utilisateur est connecté
    if (isLoggedIn) {
        redirectToAccountPage(); // Redirige vers la page de gestion du compte
    } else {
        // Si l'utilisateur n'est pas connecté, vérifie s'il vient de créer un compte
        if (isNewAccount) {
            redirectToCreationPage(); // Redirige vers la page de création de compte
        } else {
            // Si l'utilisateur n'est ni connecté ni un nouvel utilisateur, vous pouvez choisir de le rediriger vers une autre page ou afficher un message d'erreur
            // Par exemple :
            // window.location.href = "page_d'accueil.html"; // Redirige vers la page d'accueil
            // alert("Vous devez vous connecter ou créer un compte pour accéder à cette page."); // Affiche un message d'erreur
        }
    }
}

// Appel de la fonction de vérification de l'état de l'utilisateur au chargement de la page
checkUserStatus();
