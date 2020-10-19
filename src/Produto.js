import React from 'react';

const Produto = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <img
        style={{ width: '400px', height: '400px' }}
        src={dados.fotos[0].src}
        alt={dados.fotos[0].titulo}
      />
    </div>
  );
};

export default Produto;
