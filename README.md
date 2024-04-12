### Regras da aplicação

- Deve ser possível cadastrar um pet
- Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
- Deve ser possível filtrar pets por suas características
- Deve ser possível visualizar detalhes de um pet para adoção
- Deve ser possível se cadastrar como uma ORG
- Deve ser possível realizar login como uma ORG

### Regras de negócio

- Para listar os pets, obrigatoriamente precisamos informar a cidade
- Uma ORG precisa ter um endereço e um número de WhatsApp
- Um pet deve estar ligado a uma ORG
- O usuário que quer adotar, entrará em contato com a ORG via WhatsApp
- Todos os filtros, além da cidade, são opcionais
- Para uma ORG acessar a aplicação como admin, ela precisa estar logada


### Como rodar o projeto

- Primeiro, rodar o comando npm install
- Criar um arquvivo .env na raiz do projeto (Pode copiar do .env.example)
- Colocar no .env no campo DATABASE_URL a url passada no grupo
- Rodar o comando npx prisma migrate dev para sincronizar o banco de dados
- Rodar o comando npm run dev para rodar o servidor (Por padrão, a aplicação roda na porta 3333)
- Se desejar rodar os testes unitários, rodar o comando npm run test