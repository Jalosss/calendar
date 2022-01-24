-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 14 Sie 2021, 08:28
-- Wersja serwera: 10.4.17-MariaDB
-- Wersja PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `organizer`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `tresci`
--

CREATE TABLE `tresci` (
  `id` int(11) NOT NULL,
  `data` date NOT NULL,
  `godz` time NOT NULL,
  `tresc` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `tresci`
--

INSERT INTO `tresci` (`id`, `data`, `godz`, `tresc`) VALUES
(1, '2021-08-10', '12:00:00', 'Umówiona wizyta w serwisie samochodowym'),
(2, '2021-08-10', '16:00:00', 'Umówiony obiad z Panem Sowińskim i rozmowa na temat nowego kontraktu dla firmy'),
(3, '2021-08-10', '10:00:00', 'Spotkanie z Panem Kowalskim'),
(4, '2021-08-11', '12:00:00', 'Wizyta na myjni samochodowej'),
(15, '2021-08-11', '16:00:00', 'Kino z dziećmi'),
(26, '2021-08-12', '18:00:00', 'Kolacja z żoną'),
(27, '2021-08-12', '10:00:00', 'Kurs angielskiego'),
(28, '2021-08-12', '12:00:00', 'Wizyta projektanta wnętrz w domu');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `tresci`
--
ALTER TABLE `tresci`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `tresci`
--
ALTER TABLE `tresci`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
