CREATE DATABASE askversed;
\c askversed;
CREATE TABLE advisors (
    a_id bigserial,
    students bigint[],
    name text,
    state text,
    city text
);
