# Instructions pour installer la base de données

1. Ouvrez **phpMyAdmin**.
2. Créez une nouvelle base de données nommée `project_db` (ou tout autre nom, mais assurez-vous de le modifier dans les fichiers de configuration si nécessaire).
3. Sélectionnez la base de données que vous venez de créer.
4. Allez dans l’onglet **Importer**.
5. Cliquez sur **"Choisir un fichier"** et sélectionnez le fichier `database/project_db.sql` (inclus dans ce dossier).
6. Cliquez sur **"Exécuter"** pour importer la structure et les données dans votre base de données.

## Configuration

Assurez-vous de configurer le fichier `database.php` avec les bonnes informations de connexion :

- **Hôte** : `localhost`
- **Nom d'utilisateur** : `root` (ou l'utilisateur configuré)
- **Mot de passe** : `''` (vide par défaut pour WAMP)
- **Nom de la base de données** : `project_db` (ou le nom choisi)
