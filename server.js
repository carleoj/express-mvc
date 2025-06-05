import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import dotenv from 'dotenv';
import db from './config/db.js';
import { swaggerUi, swaggerSpec } from './middleware/swagger.js';
import userRoutes from './routes/R_User.js';
import notesRoutes from './routes/R_Notes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(morgan('dev', {
  skip: function (req, res) {
    return req.url.startsWith('/api-docs');
  }
}));

app.use('/api', userRoutes);
app.use('/api', notesRoutes);

app.use(errorHandler);

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
  console.log(`Swagger: http://localhost:${PORT}/api-docs`);
});