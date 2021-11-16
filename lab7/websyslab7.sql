-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2021 at 07:47 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `websyslab7`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `crn` int(11) NOT NULL,
  `prefix` varchar(4) NOT NULL,
  `number` smallint(4) NOT NULL,
  `title` varchar(255) NOT NULL,
  `Section` int(11) NOT NULL,
  `Year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`crn`, `prefix`, `number`, `title`, `Section`, `Year`) VALUES
(50049, 'CSCI', 2500, 'Computer Organization', 5, 2021),
(52708, 'CSCI', 2200, 'Foundations of Computer Science', 3, 2021),
(53470, 'ITWS', 2110, 'Web Systems Development', 2, 2021),
(53632, 'COMM', 4420, 'Foundations of HCI Usability', 1, 2021);

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

CREATE TABLE `grades` (
  `id` int(11) NOT NULL,
  `crn` int(11) DEFAULT NULL,
  `RIN` int(11) DEFAULT NULL,
  `grade` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`id`, `crn`, `RIN`, `grade`) VALUES
(1, 52708, 661998257, 85),
(2, 50049, 661998257, 86),
(3, 53470, 661998257, 91),
(4, 53632, 661998257, 78),
(5, 52708, 661998237, 93),
(6, 50049, 661998237, 82),
(7, 53470, 661998237, 87),
(8, 53632, 661998237, 89),
(9, 52708, 661993847, 85),
(10, 50049, 669384028, 92);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `RIN` int(9) NOT NULL,
  `RCSID` char(7) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `alias` varchar(100) NOT NULL,
  `phone` bigint(10) NOT NULL,
  `street` varchar(128) NOT NULL,
  `city` varchar(128) NOT NULL,
  `state` varchar(128) NOT NULL,
  `zip` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`RIN`, `RCSID`, `fname`, `lname`, `alias`, `phone`, `street`, `city`, `state`, `zip`) VALUES
(661993847, 'shena', 'Addy', 'Shen', 'Addy', 3840291740, '213 South Woodland Ave', 'Pensacola', 'Florida', 32503),
(661998237, 'wange', 'Eric', 'Wang', 'Eric', 5183902940, '60 Rosewood Ave', 'Mount Vernon', 'Michigan', 48044),
(661998257, 'shine2', 'Edward', 'Shin', 'Eddie', 8382170932, '15th street', 'Troy', 'Troy', 12180),
(669384028, 'huc3', 'Catherine', 'Hu', 'Kait', 3720394718, '532 Littleton Ave', 'Culpeper', 'Virginia', 22701);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`crn`);

--
-- Indexes for table `grades`
--
ALTER TABLE `grades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `crn` (`crn`),
  ADD KEY `RIN` (`RIN`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`RIN`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `grades`
--
ALTER TABLE `grades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `grades`
--
ALTER TABLE `grades`
  ADD CONSTRAINT `grades_ibfk_1` FOREIGN KEY (`crn`) REFERENCES `courses` (`crn`),
  ADD CONSTRAINT `grades_ibfk_2` FOREIGN KEY (`RIN`) REFERENCES `students` (`RIN`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
