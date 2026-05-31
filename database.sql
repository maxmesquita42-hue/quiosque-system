CREATE TABLE categorias (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL
);

CREATE TABLE produtos (
  id SERIAL PRIMARY KEY,
  categoria_id INTEGER REFERENCES categorias(id),
  nome VARCHAR(150) NOT NULL,
  descricao TEXT,
  preco DECIMAL(10,2) NOT NULL,
  ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE mesas (
  id SERIAL PRIMARY KEY,
  numero INTEGER NOT NULL,
  status VARCHAR(20) DEFAULT 'LIVRE'
);

CREATE TABLE pedidos (
  id SERIAL PRIMARY KEY,
  mesa_id INTEGER REFERENCES mesas(id),
  status VARCHAR(20) DEFAULT 'ABERTO',
  data_pedido TIMESTAMP DEFAULT NOW()
);

CREATE TABLE itens_pedido (
  id SERIAL PRIMARY KEY,
  pedido_id INTEGER REFERENCES pedidos(id),
  produto_id INTEGER REFERENCES produtos(id),
  quantidade INTEGER NOT NULL DEFAULT 1,
  observacao TEXT,
  preco DECIMAL(10,2) NOT NULL
);
