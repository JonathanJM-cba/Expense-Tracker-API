--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-05-04 16:42:20

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "DB_rastreador_gastos";
--
-- TOC entry 4921 (class 1262 OID 24586)
-- Name: DB_rastreador_gastos; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "DB_rastreador_gastos" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'es-ES';


ALTER DATABASE "DB_rastreador_gastos" OWNER TO postgres;

\connect "DB_rastreador_gastos"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4913 (class 0 OID 24606)
-- Dependencies: 220
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.categories (id, name, "createdAt", "updatedAt") VALUES (1, 'Comestibles', '2025-05-01 23:23:06.638-03', '2025-05-01 23:23:06.638-03');
INSERT INTO public.categories (id, name, "createdAt", "updatedAt") VALUES (2, 'Ocio', '2025-05-01 23:23:42.899-03', '2025-05-01 23:23:42.899-03');
INSERT INTO public.categories (id, name, "createdAt", "updatedAt") VALUES (3, 'Electrónica', '2025-05-01 23:24:06.449-03', '2025-05-01 23:24:06.449-03');
INSERT INTO public.categories (id, name, "createdAt", "updatedAt") VALUES (4, 'Utilidades', '2025-05-01 23:24:26.852-03', '2025-05-01 23:24:26.852-03');
INSERT INTO public.categories (id, name, "createdAt", "updatedAt") VALUES (5, 'Ropa', '2025-05-01 23:24:44-03', '2025-05-01 23:24:44-03');
INSERT INTO public.categories (id, name, "createdAt", "updatedAt") VALUES (6, 'Salud', '2025-05-01 23:24:56.668-03', '2025-05-01 23:24:56.668-03');
INSERT INTO public.categories (id, name, "createdAt", "updatedAt") VALUES (7, 'Otros', '2025-05-01 23:25:18.199-03', '2025-05-01 23:25:18.199-03');


--
-- TOC entry 4915 (class 0 OID 24613)
-- Dependencies: 222
-- Data for Name: expenses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.expenses (id, amount, description, date, "idUser", "idCategory", "createdAt", "updatedAt") VALUES (3, 30000.00, 'Juego Residente Evil 4', '2025-02-05', 1, 2, '2025-05-03 21:40:32.149-03', '2025-05-03 22:08:56.375-03');
INSERT INTO public.expenses (id, amount, description, date, "idUser", "idCategory", "createdAt", "updatedAt") VALUES (4, 22000.00, 'Cargador para joystick', '2025-04-17', 1, 2, '2025-05-03 22:30:37.021-03', '2025-05-03 22:30:37.021-03');
INSERT INTO public.expenses (id, amount, description, date, "idUser", "idCategory", "createdAt", "updatedAt") VALUES (5, 50000.00, 'Pava electrica', '2025-04-02', 1, 3, '2025-05-04 16:05:40.09-03', '2025-05-04 16:05:40.09-03');
INSERT INTO public.expenses (id, amount, description, date, "idUser", "idCategory", "createdAt", "updatedAt") VALUES (6, 250000.00, 'Buzo de invierno', '2025-05-03', 1, 5, '2025-05-04 16:11:53.95-03', '2025-05-04 16:11:53.95-03');
INSERT INTO public.expenses (id, amount, description, date, "idUser", "idCategory", "createdAt", "updatedAt") VALUES (7, 250300.00, 'Remera', '2024-08-14', 1, 5, '2025-05-04 16:16:45.932-03', '2025-05-04 16:16:45.932-03');


--
-- TOC entry 4911 (class 0 OID 24595)
-- Dependencies: 218
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users (id, name, email, password, "createdAt", "updatedAt") VALUES (1, 'Guido Carrillo', 'gcarillo@gmail.com', '$2b$10$zAYPqvsgjRHC1ycy5HXo0OhjOt8yYhtjF2HVTeQ92dz/8HB2gu8I.', '2025-05-02 21:46:59.671-03', '2025-05-02 21:46:59.671-03');
INSERT INTO public.users (id, name, email, password, "createdAt", "updatedAt") VALUES (2, 'Carlos Portilla', 'cportilla@gmail.com', '$2b$10$sQ58q4dayXBMa0znJq2HXeV6U1aoKCWD5QTjTMIPoRNK73Xp3ROXC', '2025-05-02 21:47:58.116-03', '2025-05-02 21:47:58.116-03');
INSERT INTO public.users (id, name, email, password, "createdAt", "updatedAt") VALUES (3, 'Pedro Castillo', 'pcastillo@gmail.com', '$2b$10$0Id1sEOKPNOWLNUT/J0zI.gcfKiHgqOI2d2cksFqAWIIvPxW/LCD6', '2025-05-02 22:03:14.738-03', '2025-05-02 22:03:14.738-03');


--
-- TOC entry 4925 (class 0 OID 0)
-- Dependencies: 219
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 8, true);


--
-- TOC entry 4926 (class 0 OID 0)
-- Dependencies: 221
-- Name: expenses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.expenses_id_seq', 7, true);


--
-- TOC entry 4927 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


-- Completed on 2025-05-04 16:42:21

--
-- PostgreSQL database dump complete
--

