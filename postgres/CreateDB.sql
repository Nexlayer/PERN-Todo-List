CREATE TABLE todos (
    id bigint GENERATED ALWAYS AS IDENTITY,
    task varchar(80),
    status varchar(150),
    deadline timestamptz
);