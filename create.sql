CREATE DATABASE investimentos

CREATE TABLE lancamento (
  id_lancamento SERIAL PRIMARY KEY,
  usuario TEXT,
  ticket TEXT,
  quantidade INT,
  preco REAL,
  data DATE,
  compra BOOLEAN
)

CREATE TABLE ativo (
  id_ativos SERIAL PRIMARY KEY,
  usuario TEXT,
  tipo TEXT,
  ticket TEXT,
  quantidade INT,
  media REAL,
)