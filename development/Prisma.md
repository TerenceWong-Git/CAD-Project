# How to use Prisma

## 1. Link Prisma to your database

```
Set your database info in .env
DATABASE_URL="postgresql://user:password@localhost:5432/db?schema=public"
```

## 2. Run Prisma command

```
- yarn migrate:dev => create/edit/drop table
- yarn seed:dev => insert details into specific table
- yarn prisma migrate reset => rollback all migrations
```
