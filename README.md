# 🍰 Backend Confeitaria

API REST desenvolvida em Node.js para gerenciar uma confeitaria, com foco em boas práticas de back-end, arquitetura em camadas e fundamentos utilizados no mercado.

---
## 🌐 Frontend (em desenvolvimento)

Este backend será integrado futuramente com uma aplicação React.

---
## 🚀 Tecnologias utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **PostgreSQL**
- **Prisma**
- **JWT**

---

## 📌 Funcionalidades
A API possui múltiplos módulos, cada um com CRUD completo para atender as regras de um sistema de gestão para confeitaria.

* Usuários (Users)
* Produtos (Products)
* Receitas (Recipes)
* Estoque (Stock)
* Mão de obra / Produção (Labor)

---

## 🧠 Conceitos aplicados

* Arquitetura em camadas (Controllers, Services e Models)
* API RESTful
* Tratamento de erros
* Uso de variáveis de ambiente
* Versionamento com Git

---

## 🖥️ Como rodar o projeto localmente

### Pré-requisitos

Antes de começar, você vai precisar ter instalado na sua máquina:

* **Node.js** (versão 18 ou superior recomendada)
* **Git**
* **PostgreSQL**

---

### 📥 Clonando o repositório

```bash
git clone https://github.com/JonathanEJY/backend-confeitaria.git
cd backend-confeitaria
```

---

### 📦 Instalando dependências

```bash
npm install
```

---

### ⚙️ Configurando variáveis de ambiente

Crie um arquivo **.env** na raiz do projeto com base no arquivo de exemplo:

```bash
cp .env.example .env
```

Preencha as variáveis necessárias, por exemplo:

```env
PORT=3000
DATABASE_URL=seu_banco_de_dados
JWT_SECRET=sua_chave_secreta
```

---

### ▶️ Executando o projeto

```bash
npm run dev
# ou
npm start
```

A API estará disponível em:

```
http://localhost:3000
```

---

## 📑 Documentação da API — Endpoints

Base URL
 ```
http://localhost:3000
```
A API utiliza JWT (Bearer Token) para autenticação nas rotas protegidas.

### 👤 Users

* POST /users → Criar usuário
* PATCH /users → Atualizar usuário
* DELETE /users → Remover usuário
* POST /login → Autenticação do usuário

### 🧮 Labor (Custos de produção / mão de obra)

**Rotas associadas ao usuário autenticado.**

* POST /users/labor → Criar dados de labor
* GET /users/labor → Buscar dados de labor
* PATCH /users/labor → Atualizar dados de labor
* DELETE /users/labor → Remover dados de labor

### 📦 Products

**Gerenciamento de produtos/insumos utilizados nas receitas.**

* POST /users/product → Criar produto
* GET /users/product → Listar produtos
* PATCH /users/product → Atualizar produto
* DELETE /users/product → Remover produto

### 🏬 Stock (Estoque)

**Gerenciamento de estoque do usuário.**

* POST /users/stock → Criar estoque
* GET /users/stock → Buscar estoque
* PATCH /users/stock → Atualizar estoque
* DELETE /users/stock → Remover estoque

### 🍰 Recipes

**Módulo reservado para implementação futura.**

---

## 🔁 Exemplo de fluxo
1. Criar usuário
2. Autenticar via login
3. Cadastrar produtos
4. Criar estoque
5. Cadastrar produto no estoque

---

## 📂 Estrutura do projeto

```bash
prisma/
 ├── migrations/
 ├── schema.prisma
src/
 ├── controllers/
 ├── middlewares/
 ├── models/
 ├── services/
 ├── types/
 ├── utils/
 ├── routes.ts
 └── server.ts
```

---

## 📈 Próximas melhorias

* Criar testes automatizados
* Implementar módulo de receitas (Recipes)
* Relacionar receitas com produtos e estoque
* Padronizar rotas REST
* Adicionar paginação e filtros
* Criar documentação com Swagger
* Integração com front-end em React


---

## 👤 Autor

**Jonathan Emanuel Jara Yont**

* Desenvolvedor Full Stack
* JavaScript | Node.js | React
* GitHub: [https://github.com/JonathanEJY](https://github.com/JonathanEJY)

---

## 📄 Licença

Este projeto está sob a licença MIT.
