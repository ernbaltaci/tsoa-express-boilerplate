# TSOA Express Boilerplate

A modern boilerplate for building RESTful APIs with TypeScript, Express, TSOA, and Mongoose. This project provides a solid foundation for scalable API development, Typegoose models, Swagger documentation, and more.

## Features

- **TypeScript** for type-safe development
- **Express 5** for robust REST API routing
- **TSOA** for automatic OpenAPI/Swagger documentation and type-safe controllers
- **Mongoose & Typegoose** for MongoDB object modeling
- **Winston** for advanced logging
- **Dotenv** for environment variable management
- **Swagger UI** for interactive API docs
- **Nodemon & ts-node** for a smooth development workflow

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/tsoa-express-boilerplate.git
cd tsoa-express-boilerplate
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your environment variables (e.g., MongoDB URI, etc.).

### 4. Run the project

- For development (with hot-reload and auto Swagger generation):

  ```bash
  npm run dev
  ```

- For production build:

  ```bash
  npm run build
  npm start
  ```

## Scripts

- `npm run dev` — Start in development mode with hot-reload and auto Swagger generation
- `npm run build` — Generate Swagger spec/routes and compile TypeScript
- `npm start` — Run the compiled app

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [TSOA](https://tsoa-community.github.io/docs/)
- [Mongoose](https://mongoosejs.com/) & [Typegoose](https://typegoose.github.io/typegoose/)
- [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express)
- [Winston](https://github.com/winstonjs/winston)
- [JWT](https://github.com/auth0/node-jsonwebtoken)
- [Dotenv](https://github.com/motdotla/dotenv)

