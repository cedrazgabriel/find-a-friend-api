### Como rodar o projeto

- Primeiro, rodar o comando npm install
- Criar um arquvivo .env na raiz do projeto (Pode copiar do .env.example)
- Colocar no .env no campo DATABASE_URL a url passada no grupo
- Rodar o comando npx prisma migrate dev para sincronizar o banco de dados
- Rodar o comando npm run dev para rodar o servidor (Por padrão, a aplicação roda na porta 3333)
- Se desejar rodar os testes unitários, rodar o comando npm run test
- A documentação de todos os endpoints respondem na rota http://localhost:3333/docs (A porta depende da sua configuração)

### Regras da aplicação

- Deve ser possível cadastrar um pet
- Deve ser possível cadastrar uma ong
- Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
- Deve ser possível filtrar pets por suas características
- Deve ser possível visualizar detalhes de um pet para adoção
- Deve ser possível se cadastrar como uma ORG


### Regras de negócio

- Para listar os pets, obrigatoriamente precisamos informar a cidade
- Uma ORG precisa ter um endereço e um número de WhatsApp
- Um pet deve estar ligado a uma ORG
- Todos os filtros, além da cidade, são opcionais
