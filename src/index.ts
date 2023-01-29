import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';

dotenv.config();

const app: Express = express();
const port = process.env.SERVICE_PORT || 3000;
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: 'mysecretstring',
    saveUninitialized: true,
    resave: true,
    cookie: {
      httpOnly: true,
    },
  }),
);
app.use(flash());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
