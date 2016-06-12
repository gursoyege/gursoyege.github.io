-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Client :  mysql.etude.cergy.eisti.fr
-- Généré le :  Dim 12 Juin 2016 à 23:29
-- Version du serveur :  5.5.44-MariaDB
-- Version de PHP :  5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `gursoyege`
--

-- --------------------------------------------------------

--
-- Structure de la table `Jeunes`
--

CREATE TABLE IF NOT EXISTS `Jeunes` (
  `firstname` varchar(128) NOT NULL,
  `lastname` varchar(128) NOT NULL,
  `birthdate` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `reseausocial` varchar(128) NOT NULL,
  `reseausocial1` varchar(128) NOT NULL,
  `reseausocial2` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `engagement` varchar(128) NOT NULL,
  `duree` varchar(128) NOT NULL,
  `message` varchar(1280) NOT NULL,
  `se` varchar(128) NOT NULL,
  `se1` varchar(128) NOT NULL,
  `se2` varchar(128) NOT NULL,
  `se3` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Jeunes`
--

INSERT INTO `Jeunes` (`firstname`, `lastname`, `birthdate`, `password`, `reseausocial`, `reseausocial1`, `reseausocial2`, `email`, `engagement`, `duree`, `message`, `se`, `se1`, `se2`, `se3`) VALUES
('Ahmed', 'BOUDIA', '', 'AHMEDBOUDIA', '', '', '', 'ahmedboudia97@hotmail.fr', '123456789', '1', '', 'autonome, capable, ecoute, organise, ', '', '', ''),
('cuk', 'armut', '', 'amk', 'https://github.com/gursoyege/gursoyege.github.io', '', '', 'armut@armut.com', 'sikko', 'anan', '', 'autonome, capable, ecoute, organise, ', '', '', ''),
('Hamid', 'Hamid', '', 'poipoi', '', '', '', 'bouhafssof@eisti.eu', 'travailler', '1 an ', '', 'capable, fiable, patient, responsable, ', '', '', ''),
('Cristiano', 'Ronaldo', '', 'ronaldo', 'http://www.facebook.com', '', '', 'cr7@gmail.com', 'travailler', '1 an', '', 'autonome, capable, ecoute, organise, ', '', '', ''),
('Ege', 'Gursoy', '', 'ege', 'http://fsqfdfqsdf.com', '', '', 'ege@ege.com', 'lqgjnq', '3lmkg', '', 'autonome, capable, ecoute, organise, ', '', '', ''),
('dhdhd', 'bsbd', '', 'poipoi', '', '', '', 'free@gmail.com', 'travail', '1 an', '', 'autonome, ecoute, organise, passione, ', '', '', ''),
('ttgg', 'hzhz', '', 'poipoi', '', '', '', 'frere@hotmail.fr', 'travailler', '1 an', '', 'autonome, capable, ecoute, organise, ', '', '', ''),
('ClÃ©ment', 'Roger', '', 'test', 'https://twitter.com/clemtoon', '', '', 'rogercleme@eisti.eu', 'blabla', '2 ans', '', 'autonome, capable, ecoute, passione, ', '', '', ''),
('Sof', 'Sofiane', '', 'sofiane', '', '', '', 'sofiane.bouhafs@gmail.com', 'travailler', '1an', '', 'autonome, capable, ecoute, organise, ', '', '', ''),
('Homer', 'Simpson', '', 'poipoi', 'http://www.facebook.com', '', '', 'Weataid53@armyspy.com', 'travail', '1an', '', 'autonome, capable, ecoute, organise, ', '', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `Referents`
--

CREATE TABLE IF NOT EXISTS `Referents` (
  `prenom` varchar(128) NOT NULL,
  `nom` varchar(128) NOT NULL,
  `datedenaissance` varchar(128) NOT NULL,
  `reseausocial` varchar(128) NOT NULL,
  `reseausocial1` varchar(128) NOT NULL,
  `reseausocial2` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `presentation` varchar(128) NOT NULL,
  `duree` varchar(128) NOT NULL,
  `commentaire` varchar(128) NOT NULL,
  `unique_id` varchar(24) NOT NULL,
  `etat` varchar(20) NOT NULL,
  `se` varchar(128) NOT NULL,
  `jeune_id` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Referents`
--

INSERT INTO `Referents` (`prenom`, `nom`, `datedenaissance`, `reseausocial`, `reseausocial1`, `reseausocial2`, `email`, `presentation`, `duree`, `commentaire`, `unique_id`, `etat`, `se`, `jeune_id`) VALUES
('', '', '', '', '', '', 'egegursoy08@gmail.com', '', '', '', 'ZToIq27mp2Y5nRYB13ALMN6C', 'en attente', '', '0c7f3c35bc5571d2694aec97eea47ea91f917c99');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Jeunes`
--
ALTER TABLE `Jeunes`
  ADD PRIMARY KEY (`email`);

--
-- Index pour la table `Referents`
--
ALTER TABLE `Referents`
  ADD PRIMARY KEY (`unique_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
