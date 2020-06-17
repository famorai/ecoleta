import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
     {title: 'Lãmpada', img: 'lampadas.svg'},
     {title: 'Pilhas e Baterias', img: 'baterias.svg'},
     {title: 'Papeis e Papelão', img: 'papeis-papelao.svg'},
     {title: 'Resíduos Eletrônicos', img: 'eletronicos.svg'},
     {title: 'Resíduos Orgânicos', img: 'organicos.svg'},
     {title: 'Óleo de Cozinha', img: 'oleo.svg'},
  ]);
}