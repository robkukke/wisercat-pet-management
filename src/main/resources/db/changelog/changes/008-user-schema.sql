CREATE TABLE account (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username VARCHAR(100),
  password VARCHAR(100)
);