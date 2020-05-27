--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.19
-- Dumped by pg_dump version 9.5.19

-- Started on 2020-05-01 11:28:20 EDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 200 (class 1259 OID 655708413)
-- Name: users; Type: TABLE; Schema: public; Owner: coleo
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    lastname character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    role public.enum_users_role DEFAULT 'user'::public.enum_users_role NOT NULL,
    organization character varying(255),
    password character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO coleo;

--
-- TOC entry 199 (class 1259 OID 655708411)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: coleo
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO coleo;

--
-- TOC entry 4561 (class 0 OID 0)
-- Dependencies: 199
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: coleo
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4425 (class 2604 OID 655708416)
-- Name: id; Type: DEFAULT; Schema: public; Owner: coleo
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4555 (class 0 OID 655708413)
-- Dependencies: 200
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: coleo
--

COPY public.users (id, name, lastname, email, role, organization, password, created_at, updated_at) FROM stdin;
1	Dominique	Gravel	dominique.gravel@usherbrooke.ca	user	Université de Sherbrooke	$2a$12$U7dRnFfzv3WSZmkKR1guLeW5SGRHeowQFWlwfSlTn1hD3CZ09p8e2	2018-11-07 13:44:50.442-05	2018-11-07 13:44:50.442-05
2	Anouk	Simard	Anouk.Simard@mffp.gouv.qc.ca	user	MFFP	$2a$12$HdlfuEL/WHIr/BX6M/H6WeKCO3I4kg.fiNZr7CCxCwV1dSIDnaIoG	2018-11-07 13:44:50.442-05	2018-11-07 13:44:50.442-05
5	Timothée	Poisot	timothee.poisot@umontreal.ca	user	Université de Montréal	$2a$12$IxASJ28sF1p2mbwqRUK/6ull9hUS8vwM/ADxR8CQYMgyvzRpV9SJ.	2018-11-07 13:44:50.443-05	2018-11-07 13:44:50.443-05
6	Andrew	MacDonald	a.a.m.macdonald@gmail.com	user	Université de Montréal	$2a$12$PyL0PCLY6ewyi4ZVnfKjt.ssUKM8.0qeavqEhtx2T31sR0jYRUUi.	2018-11-07 13:44:50.442-05	2018-11-07 13:44:50.442-05
7	Jean	Marchal	jean.d.marchal@gmail.com	user	WavX	$2a$12$eDdh7Ji2guEMavxCPTLj.OcjqSscPQEP8nT7hKytUIHdzkREga/Mq	2018-11-26 14:07:36.609-05	2018-11-26 14:07:36.609-05
14	Heida	Sammari	hedia.sammari@environnement.gouv.qc.ca	user	MELCC	$2a$12$QIflyAnAoI/QphMYHAt5AOln2rfnzmrUPcqh9ia/57oX1GKp7iBeK	2019-07-11 09:59:51.611-04	2019-07-11 09:59:51.611-04
4	Steve	Vissault	steve.vissault@usherbrooke.ca	user	Université de Sherbrooke	$2a$12$TyIraDG9STQZN9h5zp1omuUewWmnemon/RZV98XcMbVTGPybnO7dq	2018-11-07 13:44:50.44-05	2020-02-13 18:45:13.879-05
16	Guillaume	Larocque	guillaume.larocque@mcgill.ca	user	CSBQ	$2a$12$ptjQqYGGGQ9U2MkcO2Sv..e.qZzCRewZ/x3gf2jmN7ujVI9VnfCfi	2020-02-11 11:13:59.064-05	2020-02-12 17:34:19.772-05
19	Sabrina	Courant	Sabrina.Courant@environnement.gouv.qc.ca	user	MELCC	$2a$12$DPbCL7Zb8q.oG6OOfsAZCudFX/.TfsmAFagEF5vP7SB.mkCeyZMRG	2020-03-20 13:12:59.064-04	2020-03-20 13:12:59.064-04
21	Elise	Groulx-Maurer	Elise.Groulx-Maurer@mffp.gouv.qc.ca	user	MELCC	$2a$12$07T7vt8pafGH3nYObtxh1ewMz3i0JjAqG289lB43lZjTm3O/Z.K06	2020-03-20 13:12:59.064-04	2020-03-20 13:12:59.064-04
3	Caroline	Dubé	Caroline.Dube@mffp.gouv.qc.ca	user	MFFP	$2a$12$HzQLOQveZEIBTiQsygYLheg4ZMdRJz2FVsci//05M6jYj/AJC5Vuu	2018-11-07 13:44:50.442-05	2018-11-07 13:44:50.442-05
20	Chantale	Langevin	Chantale.Langevin@environnement.gouv.qc.ca	user	MELCC	$2a$12$z36slCbk7HiN4OMsnLf4U.vHPlffMVDRceYedU3IniIrxWnDXgJxC	2020-03-20 13:12:59.064-04	2020-03-20 13:12:59.064-04
24	Francis	Lessard	Francis.Lessard@mffp.gouv.qc.ca	user	MFFP	$2a$12$ZRSekyebA7UPDp3r43JPcuD6aFAGM6WMpApmeKHiua4McfnsHX5F6	2020-03-20 13:12:59.064-04	2020-03-20 13:12:59.064-04
23	Bilel	Chalghaf	bilel.chalghaf@environnement.gouv.qc.ca	user	MELCC	$2a$12$7pZV0KnX3hqyHcinm2YZRu8VSLVl/OJeRP3oT2E9.1YYAit4ek0ha	2020-03-20 13:12:59.064-04	2020-04-01 17:20:55.994-04
\.


--
-- TOC entry 4562 (class 0 OID 0)
-- Dependencies: 199
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: coleo
--

SELECT pg_catalog.setval('public.users_id_seq', 24, true);


--
-- TOC entry 4428 (class 2606 OID 655708426)
-- Name: users_email_key; Type: CONSTRAINT; Schema: public; Owner: coleo
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 4430 (class 2606 OID 655708424)
-- Name: users_name_lastname_key; Type: CONSTRAINT; Schema: public; Owner: coleo
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_name_lastname_key UNIQUE (name, lastname);


--
-- TOC entry 4432 (class 2606 OID 655708422)
-- Name: users_pkey; Type: CONSTRAINT; Schema: public; Owner: coleo
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


-- Completed on 2020-05-01 11:28:20 EDT

--
-- PostgreSQL database dump complete
--

