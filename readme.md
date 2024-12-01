# Instructions pour installer la base de données

Ce projet utilise une base de données MySQL pour stocker les informations des utilisateurs et des messages. Le projet a été développé dans un environnement local avec **WAMP**, une solution qui permet de faire tourner Apache, MySQL et PHP sur une machine de développement.

Suivez les étapes ci-dessous pour installer la base de données :

## Étapes pour installer la base de données

1. Ouvrez **phpMyAdmin** sur votre serveur WAMP.
2. Créez une nouvelle base de données nommée `project_db` (ou tout autre nom, mais assurez-vous de le modifier dans les fichiers de configuration si nécessaire).
3. Sélectionnez la base de données que vous venez de créer.
4. Allez dans l’onglet **Importer**.
5. Cliquez sur **"Choisir un fichier"** et sélectionnez le fichier `SQL/project_db.sql` qui se trouve dans le dossier `SQL` du projet.
6. Cliquez sur **"Exécuter"** pour importer la structure et les données dans votre base de données.

## Configuration

Après avoir importé la base de données, vous devez configurer votre fichier de connexion à la base de données (`PHP/database.php`) :

- **Hôte** : `localhost`
- **Nom d'utilisateur** : `root` 
- **Mot de passe** : `''` (vide par défaut pour WAMP)
- **Nom de la base de données** : `project_db`

# Lancer un serveur local

Pour exécuter le projet localement, suivez les étapes ci-dessous :

1. **Ouvrir WAMP** :
   - Lancez **WAMP** (ou votre solution locale équivalente).
   - Vérifiez que les services Apache et MySQL sont bien démarrés (les icônes doivent être vertes dans la barre des tâches).

2. **Accéder à votre projet** :
   - Placez votre projet dans le répertoire `www` de votre installation WAMP (par exemple, `C:/wamp/www/mon_projet`).
   - Ouvrez votre navigateur et accédez à `localhost/mon_projet` pour voir le projet en cours d'exécution.

3. **Tester les fonctionnalités** :
   - Assurez-vous que toutes les fonctionnalités du projet fonctionnent correctement en naviguant sur les pages principales (connexion, inscription, etc.).


