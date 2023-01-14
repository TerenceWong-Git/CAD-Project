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
yarn add sass react-hook-form @reduxjs/toolkit react-redux @types/react-redux react-router-dom @types/react-router-dom react-router @types/react-router redux-logger @types/redux-logger redux-thunk @types/redux-thunk @testing-library/react @testing-library/jest-dom --dev fetch-mock redux-mock-store @types/fetch-mock @types/redux-mock-store node-fetch@2
```

## 4. Create Nest.js & Install Prisma

```
- nest new {Project Name} --skip-git
- yarn add -D prisma
- yarn prisma init
- yarn add @prisma/client
- yarn add dotenv-cli
```

### 5 Update Backend package.json

```
Add "migrate:dev": "prisma migrate dev", into "scripts"
```

## 6. Install Nest.js package

```
npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt
```

### 7 Create MVC

```
- nest g module
- nest g service {Name} --no-spec
- nest g controller {Name} --no-spec
```

### 7 Prisma in Nest.js

```
- nest g module prisma
- nest g service prisma --no-spec
- nest g controller prisma --no-spec
```
