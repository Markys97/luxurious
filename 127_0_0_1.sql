-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 25, 2023 at 08:17 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `luxurious`
--
CREATE DATABASE IF NOT EXISTS `luxurious` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `luxurious`;

-- --------------------------------------------------------

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
CREATE TABLE IF NOT EXISTS `card` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `state` tinyint(1) NOT NULL,
  `total_price` int(11) NOT NULL,
  `date_order` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `img_preview` text NOT NULL,
  `date_enter` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `img_preview`, `date_enter`) VALUES
(1, 'Nike', 'nike.jpg', '2023-04-18 16:12:29'),
(2, 'Addidas', 'addidas.jpg', '2023-04-18 16:16:00'),
(3, 'Puma', 'puma.jpg', '2023-04-18 16:16:00'),
(4, 'New Balance', 'new_balance.jpg', '2023-04-18 16:16:00');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `message` int(11) NOT NULL,
  `note` int(11) NOT NULL,
  `note_global` int(11) NOT NULL,
  `date_comment` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `like`
--

DROP TABLE IF EXISTS `like`;
CREATE TABLE IF NOT EXISTS `like` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `date_liked` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `category` varchar(256) NOT NULL,
  `state` json NOT NULL,
  `price` int(11) NOT NULL,
  `colors` json NOT NULL,
  `imgs` json NOT NULL,
  `genre` varchar(10) NOT NULL,
  `date_in` datetime NOT NULL,
  `description` json NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `category`, `state`, `price`, `colors`, `imgs`, `genre`, `date_in`, `description`) VALUES
(1, 'brexe', 'nike', '{\"new\": false, \"news\": {\"en\": \"some text in english\", \"fr\": \"nouveaute\", \"ru\": \"комментарий\"}, \"solde\": {\"active\": true, \"percent\": 10, \"dateLimit\": \"25/12/2143\"}}', 15000, '[{\"imgs\": [\"01.jpg\", \"22.jpg\", \"03.jpg\"], \"size\": [45, 30, 50, 70], \"value\": \"black\", \"quantity\": 10}]', '{\"all\": [\"04.jpg\", \"05.jpg\", \"06.jpg\"], \"size\": [12, 13, 15, 16], \"preview\": \"08.jpg\"}', 'M', '2023-04-12 17:36:26', '{\"en\": \"Lorem ipsum dolor sit amet \", \"fr\": \"un futur commentaire du produit\", \"ru\": \"описание для будущего продукта\"}'),
(2, 'le primus', 'puma', '{\"new\": false, \"news\": {\"en\": \"some text in english\", \"fr\": \"nouveaute\", \"ru\": \"комментарий\"}, \"solde\": {\"active\": true, \"percent\": 10, \"dateLimit\": \"25/12/2143\"}}', 1100, '[{\"imgs\": [\"11.jpg\", \"18.jpg\", \"03.jpg\"], \"size\": [5, 35, 25, 70], \"value\": \"black\", \"quantity\": 10}]', '{\"all\": [\"03.jpg\", \"15.jpg\", \"09.jpg\"], \"size\": [12, 10, 15, 16], \"preview\": \"04.jpg\"}', 'F', '2023-04-09 17:36:26', '{\"en\": \"Lorem ipsum dolor sit amet \", \"fr\": \"un futur commentaire du produit\", \"ru\": \"описание для будущего продукта\"}'),
(3, 'le roi de la foret', 'nike', '{\"new\": false, \"news\": {\"en\": \"some text in english\", \"fr\": \"nouveaute\", \"ru\": \"комментарий\"}, \"solde\": {\"active\": false, \"percent\": 10, \"dateLimit\": \"25/12/2143\"}}', 2000, '[{\"imgs\": [\"08.jpg\", \"12.jpg\", \"20.jpg\"], \"size\": [20, 25, 30, 35], \"value\": \"black\", \"quantity\": 10}, {\"imgs\": [\"08.jpg\", \"12.jpg\", \"20.jpg\"], \"size\": [20, 25, 30, 35], \"value\": \"red\", \"quantity\": 10}]', '{\"all\": [\"13.jpg\", \"22.jpg\", \"01.jpg\"], \"size\": [11, 18, 15, 16], \"preview\": \"15.jpg\"}', 'K', '2023-04-03 17:36:26', '{\"en\": \"Lorem ipsum dolor sit amet \", \"fr\": \"un futur commentaire du produit\", \"ru\": \"описание для будущего продукта\"}'),
(4, 'le kinda', 'new balance', '{\"new\": false, \"news\": {\"en\": \"some text in english\", \"fr\": \"nouveaute\", \"ru\": \"комментарий\"}, \"solde\": {\"active\": true, \"percent\": 10, \"dateLimit\": \"25/12/2143\"}}', 8000, '[{\"imgs\": [\"05.jpg\", \"06.jpg\", \"08.jpg\"], \"size\": [45, 20, 80, 10], \"value\": \"blue\", \"quantity\": 10}]', '{\"all\": [\"10.jpg\", \"21.jpg\", \"11.jpg\"], \"size\": [41, 58, 45, 36], \"preview\": \"22.jpg\"}', 'K', '2023-04-17 17:36:26', '{\"en\": \"Lorem ipsum dolor sit amet \", \"fr\": \"un futur commentaire du produit\", \"ru\": \"описание для будущего продукта\"}');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(256) DEFAULT NULL,
  `email` varchar(200) NOT NULL,
  `phone_number` int(20) NOT NULL,
  `date_sign_in` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
--
-- Database: `marcusdev`
--
CREATE DATABASE IF NOT EXISTS `marcusdev` DEFAULT CHARACTER SET latin1 COLLATE latin1_general_ci;
USE `marcusdev`;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `post_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `content` text COLLATE latin1_general_ci NOT NULL,
  `created_at` timestamp NOT NULL,
  `is_actived` int(1) NOT NULL DEFAULT '1',
  `author` int(11) NOT NULL,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `title`, `content`, `created_at`, `is_actived`, `author`) VALUES
(1, 'ma vie au gabon', '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia at provident repellendus nulla, repudiandae cum? Id esse neque fugit dolor minus. Neque architecto quod, quam est sed aspernatur error.\r\n    Nihil cum in quas inventore. Tenetur reiciendis nostrum dolor modi ducimus possimus quibusdam qui ullam id doloribus praesentium tempore soluta quae, optio eos? Omnis at vel quia architecto libero fuga.\r\n    Maxime, doloribus assumenda. Dolor atque dicta nesciunt? Minima rerum ab corporis excepturi asperiores adipisci, obcaecati id officiis, laudantium eius amet beatae provident praesentium dolorem voluptas hic repellendus temporibus! Incidunt, eum.\r\nQuos illo, ducimus veniam necessitatibus numquam quo, tempora doloribus culpa reiciendis, quam similique enim iste vero mollitia explicabo odio unde fuga amet voluptatibus repudiandae? Recusandae eius culpa illum animi delectus?\r\n    Odio, quam mollitia cumque eligendi veniam aspernatur hic dignissimos praesentium natus nulla perspiciatis itaque, temporibus doloribus porro molestias saepe ea labore accusamus suscipit? Commodi fugiat assumenda amet, accusantium obcaecati laborum.', '2022-12-10 14:59:19', 1, 1),
(2, 'la russie', '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia at provident repellendus nulla, repudiandae cum? Id esse neque fugit dolor minus. Neque architecto quod, quam est sed aspernatur error.\r\n    Nihil cum in quas inventore. Tenetur reiciendis nostrum dolor modi ducimus possimus quibusdam qui ullam id doloribus praesentium tempore soluta quae, optio eos? Omnis at vel quia architecto libero fuga.\r\n    Maxime, doloribus assumenda. Dolor atque dicta nesciunt? Minima rerum ab corporis excepturi asperiores adipisci, obcaecati id officiis, laudantium eius amet beatae provident praesentium dolorem voluptas hic repellendus temporibus! Incidunt, eum.\r\n    Quos illo, ducimus veniam necessitatibus numquam quo, tempora doloribus culpa reiciendis, quam similique enim iste vero mollitia explicabo odio unde fuga amet voluptatibus repudiandae? Recusandae eius culpa illum animi delectus?\r\n    Odio, quam mollitia cumque eligendi veniam aspernatur hic dignissimos praesentium natus nulla perspiciatis itaque, temporibus doloribus porro molestias saepe ea labore accusamus suscipit? Commodi fugiat assumenda amet, accusantium obcaecati laborum.', '2022-12-05 14:59:19', 1, 2),
(3, 'le travail', '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia at provident repellendus nulla, repudiandae cum? Id esse neque fugit dolor minus. Neque architecto quod, quam est sed aspernatur error.\r\n    Nihil cum in quas inventore. Tenetur reiciendis nostrum dolor modi ducimus possimus quibusdam qui ullam id doloribus praesentium tempore soluta quae, optio eos? Omnis at vel quia architecto libero fuga.\r\n    Maxime, doloribus assumenda. Dolor atque dicta nesciunt? Minima rerum ab corporis excepturi asperiores adipisci, obcaecati id officiis, laudantium eius amet beatae provident praesentium dolorem voluptas hic repellendus temporibus! Incidunt, eum.\r\nQuos illo, ducimus veniam necessitatibus numquam quo, tempora doloribus culpa reiciendis, quam similique enim iste vero mollitia explicabo odio unde fuga amet voluptatibus repudiandae? Recusandae eius culpa illum animi delectus?\r\n    Odio, quam mollitia cumque eligendi veniam aspernatur hic dignissimos praesentium natus nulla perspiciatis itaque, temporibus doloribus porro molestias saepe ea labore accusamus suscipit? Commodi fugiat assumenda amet, accusantium obcaecati laborum.', '2022-12-15 14:59:19', 1, 2),
(4, 'la france', '    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et officia at provident repellendus nulla, repudiandae cum? Id esse neque fugit dolor minus. Neque architecto quod, quam est sed aspernatur error.\r\n    Nihil cum in quas inventore. Tenetur reiciendis nostrum dolor modi ducimus possimus quibusdam qui ullam id doloribus praesentium tempore soluta quae, optio eos? Omnis at vel quia architecto libero fuga.\r\n    Maxime, doloribus assumenda. Dolor atque dicta nesciunt? Minima rerum ab corporis excepturi asperiores adipisci, obcaecati id officiis, laudantium eius amet beatae provident praesentium dolorem voluptas hic repellendus temporibus! Incidunt, eum.\r\n    Quos illo, ducimus veniam necessitatibus numquam quo, tempora doloribus culpa reiciendis, quam similique enim iste vero mollitia explicabo odio unde fuga amet voluptatibus repudiandae? Recusandae eius culpa illum animi delectus?\r\n    Odio, quam mollitia cumque eligendi veniam aspernatur hic dignissimos praesentium natus nulla perspiciatis itaque, temporibus doloribus porro molestias saepe ea labore accusamus suscipit? Commodi fugiat assumenda amet, accusantium obcaecati laborum.', '2022-12-01 14:59:19', 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `pass` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `date_inscription` timestamp NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `pass`, `date_inscription`) VALUES
(6, 'marcus', 'brexejunior@gmail.com', '$2y$10$QnCGszsVNAYNebrLCQ/DfO3jXbDYizTHi99miarZs1JH8V.EPAWQ.', '2022-12-04 13:46:42'),
(8, 'primus', 'primus@gmail.com', '$2y$10$KB/Cyy0mGfWdB9nmLd1mRerf5z3OS23Lf7VCcGX6W6l8RPsYv3sWi', '2022-12-04 15:13:34');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
