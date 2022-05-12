-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

CREATE TABLE IF NOT EXISTS `citation` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `citation` TEXT NOT NULL,
  `author` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `citation` (`citation`, `author`) VALUES
("<< L'homme se doit d'être le gardien de la nature, non son propriétaire. >>", 'Philippe St Marc'),
("<< Vous êtes prisonnier d'un système de civilisation qui vous pousse plus ou moins à détruire le monde pour survivre. >>", 'Daniel Quinn'),
("<< Si l'on m'apprenait que la fin du monde est pour demain, je planterais quand même un pommier. >>", 'Martin Luther King'),
("<< C'est une triste chose de songer que la nature parle et que le genre humain ne l'écoute pas. >>", 'Victor Hugo'),
("<< Ils ne savaient pas que c'était impossible, alors ils l'ont fait. >>", 'Mark Twain'),
("<< Celui qui déplace une montagne commence par déplacer de petites pierres. >>", 'Confucius'),
("<< Le peu qu'on peut faire, le très peu qu'on peut faire, il faut le faire. >>", 'Théodore Monod'),
("<< Ne doutez jamais qu'un petit groupe de citoyens engagés et réfléchis puisse changer le monde. En réalité c'est toujours ce qui s'est passé. >>", 'Margret Mead'),
("<< Nous n'héritons pas de la terre de nos parents, nous l'empruntons à nos enfants. >>", 'Antoine de Saint-Exupéry');


CREATE TABLE `item` (
  `id` int(11) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `item`
--

INSERT INTO `item` (`id`, `title`) VALUES
(1, 'Stuff'),
(2, 'Doodads');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
