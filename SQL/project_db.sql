-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 11 nov. 2024 à 11:54
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `project_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(128) NOT NULL,
  `BODY` text NOT NULL,
  `PRIORITY` int NOT NULL,
  `TYPE` int NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`ID`, `NAME`, `BODY`, `PRIORITY`, `TYPE`) VALUES
(1, 'yahya', 'testing inserting on db', 3, 2),
(2, 'Adam', 'Hi I\'m Adama', 3, 2),
(3, 'Oussama', 'Let\'s play Roblox', 2, 2),
(4, 'Bouarfa', 'cwxcxcxwcxwc', 4, 1),
(5, 'Amine', 'Hi I\'m in Sapin', 4, 2);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `ID` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `NAME` varchar(128) NOT NULL,
  `EMAIL` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `PASSWORD_HASH` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `EMAIL` (`EMAIL`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`ID`, `NAME`, `EMAIL`, `PASSWORD_HASH`) VALUES
(1, 'Yahya FAREHAN', 'yahyafarehanmj@gmail.com', '$2y$10$yaCAWcn/SB2SUcWbBlj5xOT5Sujh5c26ttWBBxhMp/OCB7NhYDeLy'),
(2, 'Yahya FAREHAN', 'yahya2farehanmj@gmail.com', '$2y$10$wzhjqlaRwls6RBonCTFpdOPhYFIzk3FFvimpCT/cd1nq1dvja5Oca'),
(3, 'Yahya FAREHAN', 'yddahyafarehanmj@gmail.com', '$2y$10$ugoh78THTTTFu69tR0lmnOg2TXaVX0VydKnfh5fTmmjH.QOI4L3wK'),
(4, 'Yahya FAREHAN', 'yasmine@gmail.com', '$2y$10$baOhtM2p0zaFjP5xgH/CH.dX6mIo4xHwVMLhQHRuEY/a4QD5t9jvy'),
(5, 'Yahya FAREHAN', 'yasmdine@gmail.com', '$2y$10$BWF6zUTs/db9DKmMJuRpuOqyVdmybeiQMnoxzx/VKWZ/L5Qp0IUTC'),
(6, 'Yahya FAREHAN', 'lazy@gmail.com', '$2y$10$zFng0G1qbUlBzL3roT33VOnW9qkJwWT0FFBEhhRTKGOVSG6eJ/R22'),
(7, 'Adam', 'AdamSalim@doctor.ma', '$2y$10$XZRN7f6i9HsB8kRGJy/53erObjK.CVtIiiDfNvlzurfgMW01.UyJ6'),
(8, 'Abdeltif', 'Abdeltif@gmail.com', '$2y$10$8JV6piFG921E9wBhGD7BXuIKab3l6KlOqQZhmhzL8USstZEcHjG/.'),
(9, 'Watel', 'Watel@ensiie.com', '$2y$10$xNXa9Sp8B8cm5cQFfSc5Qe.F/DK8ap8uwGfgS0B5t4x/jaseCgcD6'),
(10, 'momotetouan', 'momo@gmail.com', '$2y$10$8tNIgs9UD.pJddy2GFpG8uQYHuk44svhFp4lk6Nw251KaFSe4HdDG');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
