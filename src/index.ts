import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes';
import { errorMiddleware } from './common/middlewares/error.middleware';
import { loggingMiddleware } from './common/middlewares/logging.middleware';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(loggingMiddleware);
app.use('/swagger.json', express.static(path.join(__dirname, 'swagger.json')));
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  })
);

// Database connection
mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Register routes
RegisterRoutes(app);

// Error handling middleware (must be last)
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    errorMiddleware(err, req, res, next);
  }
);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

