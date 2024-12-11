# Clean Architecture with NodeJS and TypeScript

Project developed in order to implement clean architecture and dependency injection. Las tecnologias que se usaron para el desarrollo fueron:

- NodeJS
- ExpressJS
- TypeScript
- Prisma
- Zod
- Vitest (For testing)
- Ioctopus (To handle dependency injection, you can look for the repository as "evyweb/ioctopus")

## How to run the project?

1. Clone the repository
```Shell
git clone https://github.com/Remy349/clean-architecture-nodejs.git
```

2. Install dependencies
```Shell
cd clean-architecture-nodejs

npm install
```

3. Run the project
```Shell
npm run dev
```

4. If you want to see the result of the unit tests you can run the following commands
```Shell
npm run test
```

```Shell
npm run coverage
```

## Project folder structure and implementation of clean architecture

```shell
src
├── api
│   ├── app.ts
│   ├── middleware
│   │   └── error-handler.ts
│   ├── routes
│   │   ├── auth
│   │   │   ├── auth.route.ts
│   │   │   └── routes.ts
│   │   ├── category
│   │   │   ├── category.route.ts
│   │   │   └── routes.ts
│   │   └── user
│   │       ├── routes.ts
│   │       └── user.route.ts
│   └── server.ts
├── application
│   ├── repositories
│   │   ├── category.repository.interface.ts
│   │   └── user.repository.interface.ts
│   └── use-cases
│       ├── auth
│       │   └── sign-up.use-case.ts
│       ├── category
│       │   ├── create-category.use-case.ts
│       │   ├── delete-category.use-case.ts
│       │   ├── get-all-categories.use-case.ts
│       │   └── get-category-by-id.use-case.ts
│       └── user
│           ├── delete-user.use-case.ts
│           ├── get-all-users.use-case.ts
│           └── get-user-by-id.use-case.ts
├── db
│   └── prisma.ts
├── di
│   ├── container.ts
│   ├── modules
│   │   ├── auth.module.ts
│   │   ├── category.module.ts
│   │   └── user.module.ts
│   ├── types
│   │   ├── auth.type.ts
│   │   ├── category.type.ts
│   │   └── user.type.ts
│   └── types.ts
├── entities
│   ├── errors
│   │   ├── api.error.ts
│   │   ├── database.error.ts
│   │   └── parse.error.ts
│   └── models
│       ├── category.model.ts
│       └── user.model.ts
├── infrastructure
│   └── repositories
│       ├── category.repository.mock.ts
│       ├── category.repository.ts
│       └── user.repository.ts
├── interface-adapters
│   └── controllers
│       ├── auth
│       │   └── sign-up.controller.ts
│       ├── category
│       │   ├── create-category.controller.ts
│       │   ├── delete-category.controller.ts
│       │   ├── get-all-categories.controller.ts
│       │   └── get-category-by-id.controller.ts
│       └── user
│           ├── delete-user.controller.ts
│           ├── get-all-users.controller.ts
│           └── get-user-by-id.controller.ts
└── tests
    └── unit
        ├── application
        │   └── use-cases
        │       └── category
        │           ├── delete-category.use-case.test.ts
        │           ├── get-all-categories.use-case.test.ts
        │           └── get-category-by-id.use-case.test.ts
        └── interface-adapters
            └── controllers
                └── category
                    └── get-all-categories.controller.test.ts
```
