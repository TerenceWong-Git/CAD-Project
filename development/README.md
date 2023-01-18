# Setup

## 1. Install Nest.js

```
npm install -g @nestjs/cli
```

## 2. Create React

```
yarn create react-app {Project Name} --template cra-template-pwa-typescript
```

## 3. Install React package

```
yarn add sass react-hook-form @reduxjs/toolkit react-redux @types/react-redux react-router-dom @types/react-router-dom react-router @types/react-router redux-logger @types/redux-logger redux-thunk @types/redux-thunk @testing-library/react @testing-library/jest-dom --dev fetch-mock redux-mock-store @types/fetch-mock @types/redux-mock-store node-fetch@2 @mui/material @emotion/react @emotion/styled @mantine/core @mantine/hooks @mantine/form @emotion/react

```

## 4. Create Nest.js & Install Prisma

```
- nest new {Project Name} --skip-git
- yarn add -D prisma
- yarn prisma init
- yarn add @prisma/client
- yarn add dotenv-cli
- yarn add -D bcryptjs @types/bcryptjs
- yarn add class-validator class-transformer
```

## 5 Update Backend package.json

```
Add "migrate:dev": "dotenv -e .env -- prisma migrate dev", into "scripts"
```

### 5.1 If use seed in prisma

```
Add "seed:dev": "dotenv -e .env -- ts-node prisma/seed.ts", into "scripts"
```

## 6. Install Nest.js package

```
- yarn add @nestjs/passport passport
- yarn add @nestjs/jwt passport-jwt
- yarn add -D @types/passport-jwt
- yarn add @nestjs/config
```

### 7 Create MVC

```
- nest g module {Name}
- nest g service {Name} --no-spec
- nest g controller {Name} --no-spec
```

### 8 Prisma in Nest.js

```
- nest g module prisma
- nest g service prisma --no-spec
```
