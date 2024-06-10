## Find A Friend API

### Integrantes (Grupo 3)

| Integrantes                             | RA          |
| --------------------------------------- | ----------- |
| Antonio Gutemberg                       | 12723115063 |
| Edilson Monteiro Neto                   | 1272318185  |
| Gabriel Vitor Cedraz Carneiro           | 12723118390 |
| Gilson Roberto de Oliveira Leite Junior | 1272312112  |
| Marcus Vinicius Lima Ribeiro            | 12723116626 |
| Thiago Silvany de Azevedo               | 12724161085 |

### Como rodar o projeto

- Primeiro, rodar o comando npm install
- Criar um arquivo .env na raiz do projeto (Pode copiar do .env.example)
- Colocar no .env no campo DATABASE_URL a url passada no grupo
- Rodar o comando npx prisma migrate dev para sincronizar o banco de dados
- Rodar o comando npm run dev para rodar o servidor (Por padrão, a aplicação roda na porta 3333)
- Se desejar rodar os testes unitários, rodar o comando npm run test
- A documentação de todos os endpoints respondem na rota http://localhost:3333/docs (A porta depende da sua configuração)

### Regras da aplicação

- [x] Deve ser possível cadastrar um pet
- [x] Deve ser possível cadastrar uma ong
- [x] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
- [x] Deve ser possível filtrar pets por suas características
- [x] Deve ser possível visualizar detalhes de um pet para adoção
- [x] Deve ser possível se cadastrar como uma ORG


### Regras de negócio

- Para listar os pets, obrigatoriamente precisamos informar a cidade
- Uma ORG precisa ter um endereço e um número de WhatsApp
- Um pet deve estar ligado a uma ORG
- Todos os filtros, além da cidade, são opcionais
