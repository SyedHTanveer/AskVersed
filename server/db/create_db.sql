CREATE USER softwarebros;
ALTER USER softwarebros WITH PASSWORD 'askversed';
ALTER USER softwarebros WITH SUPERUSER;

DROP DATABASE askversed;

CREATE DATABASE askversed;
\c askversed;

CREATE TABLE parents (
  p_id bigserial PRIMARY KEY,
  children bigint[], /* cant foreign key this array yet but will do when possible */
  username text NOT NULL,
  password text NOT NULL,
  salt text NOT NULL,
  is_admin boolean,
  is_advisor boolean,
  active boolean
);

CREATE TABLE colleges (
  c_id bigserial PRIMARY KEY,
  college text
);

CREATE TABLE student (
  s_id bigserial PRIMARY KEY,
  gender text,
  ethnicity text[],
  c_id bigserial references colleges,
  college_class_year int,
  college_program text,
  college_legacy boolean,
  college_majors text[],
  college_acceptance_type text[],
  college_acceptances text[],
  college_admissions_resources text[],
  hs_type text[],
  hs_size int,
  hs_academic_strengths text[],
  hs_academic_achievements text[],
  hs_academic_achievements_other text[],
  hs_standardized_test text[],
  hs_ap_classes text[],
  hs_honors_or_ib text[],
  sports text[],
  sports_level text[],
  sports_awards text[],
  ea_activities text[],
  ea_if_music text[],
  ea_desc text[],
  ea_awards text[],
  summer_activities_fr text[],
  summer_activities_soph text[],
  summer_activiites_jun text[],
  ms_awards text[],
  ms_summer_activites text[]
);

CREATE TABLE advisors (
    a_id bigserial PRIMARY KEY,
    p_id bigserial references parents,
    students bigint[], /* cant foreign key this array yet but will do when available for referential integrity */
    name text,
    state text,
    city text,
    advice_college_admissions_process text,
    advice_general_hs_guidance text,
    advice_special_hs_guidance text,
    email text,
    description text,
    phone_number text,
    username text,
    country text,
    languages text[],
    hs_academic_ec_interests text[],
    sports text[],
    charge_30 money,
    charge_60 money,
    mailing_address text
);

CREATE TABLE question_types (
  q_id bigserial PRIMARY KEY,
  type text
);

CREATE TABLE questions (
  quest_id bigserial PRIMARY KEY,
  question text,
  q_id bigserial references question_types
);
