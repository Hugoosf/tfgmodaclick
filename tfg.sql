-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 03-06-2025 a las 20:43:01
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tfg`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogos`
--

CREATE TABLE `catalogos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `urlprenda` varchar(255) NOT NULL,
  `enlace` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `catalogos`
--

INSERT INTO `catalogos` (`id`, `urlprenda`, `enlace`, `created_at`, `updated_at`) VALUES
(7, 'ropita/camis/untitled0.png', 'aliexpress', '2025-05-30 15:13:02', '2025-05-30 15:13:02'),
(26, 'ropita/camis/untitled1.png', 'amazon.com', '2025-06-01 15:49:48', '2025-06-01 15:49:48'),
(27, 'ropita/camis/untitled2.png', 'amazon.com', '2025-06-01 15:49:54', '2025-06-01 15:49:54'),
(28, 'ropita/camis/untitled3.png', 'amazon.com', '2025-06-01 15:50:00', '2025-06-01 15:50:00'),
(29, 'ropita/camis/untitled4.png', 'amazon.com', '2025-06-01 15:50:04', '2025-06-01 15:50:04'),
(30, 'ropita/camis/untitled5.png', 'amazon.com', '2025-06-01 15:50:12', '2025-06-01 15:50:12'),
(31, 'ropita/camis/untitled6.png', 'amazon.com', '2025-06-01 15:50:18', '2025-06-01 15:50:18'),
(32, 'ropita/camis/untitled7.png', 'amazon.com', '2025-06-01 15:50:26', '2025-06-01 15:50:26'),
(33, 'ropita/camis/untitled8.png', 'amazon.com', '2025-06-01 15:50:34', '2025-06-01 15:50:34'),
(34, 'ropita/camis/untitled9.png', 'amazon.com', '2025-06-01 15:50:43', '2025-06-01 15:50:43'),
(35, 'ropita/camis/untitled10.png', 'amazon.com', '2025-06-01 15:50:50', '2025-06-01 15:50:50'),
(36, 'ropita/camis/untitled11.png', 'amazon.com', '2025-06-01 15:50:55', '2025-06-01 15:50:55'),
(37, 'ropita/pantalones/untitled0.png', 'amazon.com', '2025-06-01 15:51:05', '2025-06-01 15:51:05'),
(38, 'ropita/pantalones/untitled1.png', 'amazon.com', '2025-06-01 15:51:10', '2025-06-01 15:51:10'),
(39, 'ropita/pantalones/untitled2.png', 'amazon.com', '2025-06-01 15:51:15', '2025-06-01 15:51:15'),
(40, 'ropita/pantalones/untitled4.png', 'amazon.com', '2025-06-01 15:51:21', '2025-06-01 15:51:21'),
(41, 'ropita/pantalones/untitled7.png', 'amazon.com', '2025-06-01 15:51:25', '2025-06-01 15:51:25'),
(50, 'ropita/sombreros/untitled0.png', 'https://www.mykaramelli.com/sombrero-bombin-azul-escarchado-26-cm/', '2025-06-02 14:14:04', '2025-06-02 14:14:04'),
(51, 'ropita/sombreros/untitled0.png', 'https://www.barullo.com/sombreros-y-pelucas/10748-sombrero-mujer-azul-personalizable.html', '2025-06-02 14:14:27', '2025-06-02 14:14:27'),
(52, 'ropita/sombreros/untitled0.png', 'https://www.esfantastica.com/es/sombreros-para-shows-y-espectaculos/2815-sombrero-de-copa-para-fiesta-o-disfraz-color-azul.html', '2025-06-02 14:14:58', '2025-06-02 14:14:58'),
(53, 'ropita/sombreros/untitled0.png', 'https://www.sombrerosmengual.es/sombrero-california-azul-803.html', '2025-06-02 14:15:20', '2025-06-02 14:15:20'),
(54, 'ropita/sombreros/untitled0.png', 'https://www.elementbrand.es/eager---gorro-de-pescador-para-hombre-3613378235294.html', '2025-06-02 14:15:49', '2025-06-02 14:15:49'),
(55, 'ropita/sombreros/untitled1.png', 'https://www.vegaoo.es/p-224792-sombrero-gangster-amarillo-fluorescente-adulto.html', '2025-06-02 14:16:23', '2025-06-02 14:16:23'),
(56, 'ropita/sombreros/untitled1.png', 'https://www.amazon.es/SILABA-TONICA-Sombreros-para-Fiestas/dp/B0B7MVH82K', '2025-06-02 14:16:42', '2025-06-02 14:16:42'),
(57, 'ropita/sombreros/untitled1.png', 'https://www.bon-clic-bon-genre.es/sombrero-amarillo.html', '2025-06-02 14:16:54', '2025-06-02 14:16:54'),
(58, 'ropita/sombreros/untitled1.png', 'https://www.istockphoto.com/es/fotos/sombrero-amarillo', '2025-06-02 14:17:28', '2025-06-02 14:17:28'),
(59, 'ropita/sombreros/untitled2.png', 'https://www.corbetosboots.com/es/complementos-sombrero-vaquero-hombre/2624-sombrero-vaquero-fieltro-de-lana-roja-para-hombre-y-mujer.html', '2025-06-02 14:18:03', '2025-06-02 14:18:03'),
(60, 'ropita/sombreros/untitled2.png', 'https://www.disfrazjaiak.com/es/comprar-complementos-de-vaqueros-baratos/12443-sombrero-vaquero-tejano-rojo-8434077230282.html', '2025-06-02 14:18:15', '2025-06-02 14:18:15'),
(61, 'ropita/sombreros/untitled2.png', 'https://www.vegaoo.es/p-237634-sombrero-de-copa-de-pl-stico-con-brillantina-rojo-adulto.html', '2025-06-02 14:18:40', '2025-06-02 14:18:40'),
(62, 'ropita/sombreros/untitled2.png', 'https://www.barullo.com/sombreros-y-pelucas/10751-sombrero-mujer-rojo-personalizable.html', '2025-06-02 14:18:53', '2025-06-02 14:18:53'),
(63, 'ropita/sombreros/untitled3.png', 'https://www.thebs.com/es/sombrero-azul-claro-amiri-359223', '2025-06-02 14:19:39', '2025-06-02 14:19:39'),
(64, 'ropita/sombreros/untitled3.png', 'https://matprom.com/sombrero-azul-claro-mp2794950', '2025-06-02 14:19:49', '2025-06-02 14:19:49'),
(65, 'ropita/sombreros/untitled3.png', 'https://www.amazon.com/-/es/ZELVA-Ceilo-Sombrero-Azul-Claro/dp/B098TKSZ3Y', '2025-06-02 14:20:01', '2025-06-02 14:20:01'),
(66, 'ropita/sombreros/untitled3.png', 'https://alashats.com/products/cowboy-sky-blue', '2025-06-02 14:20:13', '2025-06-02 14:20:13'),
(67, 'ropita/sombreros/untitled4.png', 'https://www.amazon.es/Sombrero-vaquero-occidental-caballero-nacional/dp/B0C2YFB9MR', '2025-06-02 14:20:58', '2025-06-02 14:20:58'),
(68, 'ropita/sombreros/untitled4.png', 'https://www.mykaramelli.com/sombrero-bombin-verde-escarchado-26-cm/', '2025-06-02 14:21:09', '2025-06-02 14:21:09'),
(69, 'ropita/sombreros/untitled4.png', 'https://www.novodistribuciones.com/sombrero-premium-verde-35068', '2025-06-02 14:21:20', '2025-06-02 14:21:20'),
(70, 'ropita/sombreros/untitled4.png', 'https://www.istockphoto.com/es/fotos/sombrero-verde', '2025-06-02 14:21:31', '2025-06-02 14:21:31'),
(71, 'ropita/sombreros/untitled5.png', 'https://sombrerosalbero.es/mujer/1139-sombrero-rubi-ruggine.html', '2025-06-02 14:22:13', '2025-06-02 14:22:13'),
(72, 'ropita/sombreros/untitled5.png', 'https://www.mykaramelli.com/sombrero-bombin-rojo-escarchado-26-cm/', '2025-06-02 14:22:27', '2025-06-02 14:22:27'),
(73, 'ropita/sombreros/untitled5.png', 'https://www.freepik.es/vectores/traje-rojo-rubi', '2025-06-02 14:22:42', '2025-06-02 14:22:42'),
(74, 'ropita/sombreros/untitled5.png', 'https://alfareriaaparicio.es/tienda/sombrero-rojo/', '2025-06-02 14:22:51', '2025-06-02 14:22:51'),
(75, 'ropita/sombreros/untitled6.png', 'https://www.esfantastica.com/es/sombreros-para-shows-y-espectaculos/2821-sombrero-de-copa-para-fiesta-o-disfraz-con-cinta-color-violeta.html', '2025-06-02 14:23:18', '2025-06-02 14:23:18'),
(76, 'ropita/sombreros/untitled6.png', 'https://www.barullo.com/sombreros-y-pelucas/10382-sombrero-fedora-violeta-con-lentejuelas.html', '2025-06-02 14:23:27', '2025-06-02 14:23:27'),
(77, 'ropita/sombreros/untitled6.png', 'https://es.vecteezy.com/arte-vectorial/17406836-sombrero-de-copa-morado-con-pluma', '2025-06-02 14:23:39', '2025-06-02 14:23:39'),
(78, 'ropita/sombreros/untitled6.png', 'https://www.freepik.es/vector-premium/sombrero-mujer-elegancia-purpura-dibujos-animados-vector-sobre-fondo-blanco_26351298.htm', '2025-06-02 14:23:57', '2025-06-02 14:23:57'),
(79, 'ropita/sombreros/untitled7.png', 'https://www.amazon.es/Sombrero-reflectante-verde-claro-s%C3%B3lido/dp/B0CBFRXPVQ', '2025-06-02 14:24:26', '2025-06-02 14:24:26'),
(80, 'ropita/sombreros/untitled7.png', 'https://www.laboratorioti.com/2015/02/25/creatividad-en-la-gestion-de-proyectos-los-6-sombreros-de-pensar/', '2025-06-02 14:24:42', '2025-06-02 14:24:42'),
(81, 'ropita/sombreros/untitled7.png', 'https://www.amazon.es/Sombrero-vaquero-occidental-caballero-nacional/dp/B0C2YFB9MR', '2025-06-02 14:24:53', '2025-06-02 14:24:53'),
(82, 'ropita/sombreros/untitled7.png', 'https://www.bon-clic-bon-genre.es/sombrero-verde.html', '2025-06-02 14:25:03', '2025-06-02 14:25:03'),
(83, 'ropita/sombreros/untitled8.png', 'https://www.corbetosboots.com/es/complementos-sombrero-vaquero-hombre/3950-sombrero-vaquero-americano-para-hombre-fieltro-lana-marron-claro.html', '2025-06-02 14:25:29', '2025-06-02 14:25:29'),
(84, 'ropita/sombreros/untitled8.png', 'https://www.trendhim.es/sombrero-fedora-de-lana-marron-fido-alessandria-p.html', '2025-06-02 14:25:39', '2025-06-02 14:25:39'),
(85, 'ropita/sombreros/untitled8.png', 'https://robertogarrudo.com/es/sombreros-ala-ancha-hombre/6825-sombrero-jerezano-panama-fango.html', '2025-06-02 14:25:50', '2025-06-02 14:25:50'),
(86, 'ropita/sombreros/untitled8.png', 'https://www.disfracesmurillo.es/sombreros-/5629-sombrero-vaquero-marron-claro.html', '2025-06-02 14:26:01', '2025-06-02 14:26:01'),
(87, 'ropita/sombreros/untitled9.png', 'https://araras.es/invierno/700-sombrero-fedora-cinta-tk865-furfelt.html', '2025-06-02 14:26:20', '2025-06-02 14:26:20'),
(88, 'ropita/sombreros/untitled9.png', 'https://sombrerosalbero.es/inicio/2494-7115-sombrero-bryce-gris-claro.html', '2025-06-02 14:26:36', '2025-06-02 14:26:36'),
(89, 'ropita/sombreros/untitled9.png', 'https://www.etsy.com/es/listing/937793438/fedora-the-optman-sombrero-fedora-gris', '2025-06-02 14:26:47', '2025-06-02 14:26:47'),
(90, 'ropita/sombreros/untitled9.png', 'https://artesaniaislascanarias.com/portfolio-item/sombrero-isesa-con-ventiladores-gris/', '2025-06-02 14:26:59', '2025-06-02 14:26:59'),
(91, 'ropita/sombreros/untitled10.png', 'https://www.trendhim.es/sombrero-fedora-de-lana-marron-fido-alessandria-p.html', '2025-06-02 14:27:28', '2025-06-02 14:27:28'),
(92, 'ropita/sombreros/untitled10.png', 'https://hipermontigala.com/producto/sombrero-vaquero-marron-oscuro-adul/', '2025-06-02 14:27:37', '2025-06-02 14:27:37'),
(93, 'ropita/sombreros/untitled10.png', 'https://sombrerosalbero.es/sombreros-de-hombre/2376-6785-sombrero-tabea-marron.html', '2025-06-02 14:27:51', '2025-06-02 14:27:51'),
(94, 'ropita/sombreros/untitled10.png', 'https://www2.hm.com/es_es/productpage.1218533005.html', '2025-06-02 14:28:07', '2025-06-02 14:28:07'),
(95, 'ropita/sombreros/untitled11.png', 'https://www.thebs.com/es/sombrero-rojo-oscuro-borsalino-407827', '2025-06-02 14:28:52', '2025-06-02 14:28:52'),
(96, 'ropita/sombreros/untitled11.png', 'https://www.sombreroshop.es/Sombrero-de-Lana-Piemonte-Traveller-by-Borsalino.html', '2025-06-02 14:29:02', '2025-06-02 14:29:02'),
(97, 'ropita/sombreros/untitled11.png', 'https://www.etsy.com/es/listing/1553986897/sombrero-de-disfraz-de-bruja-o-mago', '2025-06-02 14:29:15', '2025-06-02 14:29:15'),
(98, 'ropita/sombreros/untitled11.png', 'https://www.etsy.com/es/listing/1875462567/sombrero-de-copa-steampunk-gotico', '2025-06-02 14:29:44', '2025-06-02 14:29:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `email`, `nombre`, `apellidos`, `password`, `is_admin`, `created_at`, `updated_at`) VALUES
(9, 'hugo@gmail.com', 'Hugo', 'Suárez', '$2y$12$3hLIfM0DO.IRz8xq4pwnveJFiJnBlJTmm6sFnxsqnHm4Pg1PFKEVa', 1, '2025-06-02 14:35:33', '2025-06-02 14:36:33'),
(10, 'conchi@gmail.com', 'Conchi', 'Peinó', '$2y$12$sheQJJDYjKHkGjNUyOuRFeBLcpD2f1IwD66S4FX.ZHGChkOYhii.e', 0, '2025-06-02 14:37:50', '2025-06-02 15:13:43'),
(15, 'marcos@gmail.com', 'Marcos', 'García', '$2y$12$dfi03NHwFqoJhZ.58OHij.ip7grgenrCP29fSclEL0ney1GLKyRiG', 1, '2025-06-02 15:19:47', '2025-06-02 15:22:37'),
(16, 'samuel@gmail.com', 'Samuel', 'Fernández', '$2y$12$KwY/yozbKVZawr3GvXO3oONRb0Y2BmQ6on7ck8zMkdfgAVUgHUb3a', 0, '2025-06-02 15:20:54', '2025-06-02 15:20:54'),
(17, 'carlos@gmail.com', 'Carlos', 'Blanco', '$2y$12$BFlf7crm/3ZX3KrRdqUMHOYQ4sLEwJqpXZFBwh/8iQbZ1ZCvK0ryy', 0, '2025-06-02 15:21:23', '2025-06-02 15:21:23'),
(18, 'alejandro@gmail.com', 'Alejandro', 'Menéndez', '$2y$12$29.vjArCIzeBka7v6bRHbu2XdtSpN3Udjn.Q6l4AHQRanWWHOdqAm', 0, '2025-06-02 15:22:11', '2025-06-02 15:22:11');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enlaces`
--

CREATE TABLE `enlaces` (
  `idusuario` bigint(20) UNSIGNED NOT NULL,
  `idprenda` varchar(255) NOT NULL,
  `enlace` varchar(255) NOT NULL,
  `urlprenda` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `enlaces`
--

INSERT INTO `enlaces` (`idusuario`, `idprenda`, `enlace`, `urlprenda`, `created_at`, `updated_at`) VALUES
(10, '1', 'https://www.sombrerosmengual.es/sombrero-california-azul-803.html', 'ropita/sombreros/untitled0.png', '2025-06-02 14:43:45', '2025-06-02 14:43:45'),
(10, '2', 'https://www.mykaramelli.com/sombrero-bombin-azul-escarchado-26-cm/', 'ropita/sombreros/untitled0.png', '2025-06-03 13:32:42', '2025-06-03 13:32:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(10, '0001_01_01_000000_create_users_table', 1),
(11, '0001_01_01_000001_create_cache_table', 1),
(12, '0001_01_01_000002_create_jobs_table', 1),
(13, '2025_05_14_171832_create_clientes_table', 1),
(14, '2025_05_17_174534_create_prendas_table', 1),
(15, '2025_05_25_143833_create_catalogos_table', 1),
(16, '2025_05_25_170457_create_enlaces_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prendas`
--

CREATE TABLE `prendas` (
  `idusuario` bigint(20) UNSIGNED NOT NULL,
  `idprenda` varchar(255) NOT NULL,
  `sombreros` varchar(255) NOT NULL,
  `camisetas` varchar(255) NOT NULL,
  `pantalones` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `prendas`
--

INSERT INTO `prendas` (`idusuario`, `idprenda`, `sombreros`, `camisetas`, `pantalones`, `created_at`, `updated_at`) VALUES
(10, '1', 'public/ropita/sombreros/untitled0.png', 'public/ropita/camis/untitled0.png', 'public/ropita/pantalones/untitled0.png', '2025-06-02 14:41:07', '2025-06-02 14:41:07'),
(10, '2', 'public/ropita/sombreros/untitled0.png', 'public/ropita/camis/untitled1.png', 'public/ropita/pantalones/untitled3.png', '2025-06-02 14:45:50', '2025-06-02 16:58:51'),
(10, '3', 'public/ropita/sombreros/untitled1.png', 'public/ropita/camis/untitled4.png', 'public/ropita/pantalones/untitled4.png', '2025-06-02 14:46:47', '2025-06-02 14:46:47'),
(10, '4', 'public/ropita/sombreros/untitled0.png', 'public/ropita/camis/untitled8.png', 'public/ropita/pantalones/untitled0.png', '2025-06-02 14:47:41', '2025-06-02 14:47:41'),
(10, 'funciona', 'ropita/sombreros/untitled0.png', 'ropita/camis/untitled1.png', 'ropita/pantalones/untitled3.png', '2025-06-03 05:48:49', '2025-06-03 05:48:49');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('4meE8alqAMKO7SRqwmkOIkFtu1iRSlXb8FwvF7bY', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUzhNU3ZiWmZOZDkxZlNUS0Naa2R0cDRGcWpseUxqUmh0T0NJOUJ5RCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3QvdGZnL21vZGFjbGljay9wdWJsaWMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1748963898),
('5mrNSAhpbeBPrh2M6aiEgp9DZNBM5CMRQTl7jMLz', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRkZQSTdSdjJsQm1aQk1zY2tzTWplN3hBOGc1V0p1NXlnMWJDcFNMTiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3QvdGZnL21vZGFjbGljay9wdWJsaWMiO319', 1748965353),
('7qkxq3IIONiZKLekpdMgrktcHafGoZx5lTiAunpm', NULL, '::1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiM3F6cDdPSmx3ZVFFQU9kMXdoNHJiYlM4M3BCcnBqQXU4eG8yZnBVYiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3QvdGZnL21vZGFjbGljay9wdWJsaWMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1748962461),
('8Yg0r6M44Ba5NlWu2PKQoqB7CtAjiXHpp2rAlbjA', NULL, '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibFZ4UUM5TFJucWROZGlGdDdTdTV3ZnNPbW1DYkg3WVEwSVI5YkxISyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3QvdGZnL21vZGFjbGljay9wdWJsaWMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1748963224),
('KFrQRmLIwLegpKpcM0CUA9r0HiOWXONLWaMVRW6v', NULL, '::1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoib2R2WGVZVTBVYUkyRGR6Y243a3BMYTZuV2ZwTmNId1FsazQwV1M2QyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3QvdGZnL21vZGFjbGljay9wdWJsaWMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1748961717),
('TMQpQmv1pJTIgwsgHVH8kSK6D6KI1ejYxtZ6xgNH', NULL, '::1', 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYk13OGpSS0l2bXcyaWs2RU85dkdkanM1cnJJTW11N09OWFV4S2k5SyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzc6Imh0dHA6Ly9sb2NhbGhvc3QvdGZnL21vZGFjbGljay9wdWJsaWMiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1748964681);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indices de la tabla `catalogos`
--
ALTER TABLE `catalogos`
  ADD PRIMARY KEY (`id`,`urlprenda`,`enlace`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `clientes_email_unique` (`email`);

--
-- Indices de la tabla `enlaces`
--
ALTER TABLE `enlaces`
  ADD PRIMARY KEY (`idusuario`,`idprenda`,`enlace`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indices de la tabla `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `prendas`
--
ALTER TABLE `prendas`
  ADD PRIMARY KEY (`idusuario`,`idprenda`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `catalogos`
--
ALTER TABLE `catalogos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `enlaces`
--
ALTER TABLE `enlaces`
  ADD CONSTRAINT `enlaces_idusuario_foreign` FOREIGN KEY (`idusuario`) REFERENCES `clientes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `enlaces_idusuario_idprenda_foreign` FOREIGN KEY (`idusuario`,`idprenda`) REFERENCES `prendas` (`idusuario`, `idprenda`) ON DELETE CASCADE;

--
-- Filtros para la tabla `prendas`
--
ALTER TABLE `prendas`
  ADD CONSTRAINT `prendas_idusuario_foreign` FOREIGN KEY (`idusuario`) REFERENCES `clientes` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
