import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import adminRoutes from "./routes/admin.routes.js";
import { engine } from 'express-handlebars';


const app = express();
const port = 3000;

// Hbs config 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Static file
app.use(express.static("public"));

// setting 
app.set("port", process.env.PORT || 3000);
app.set('view engine', 'hbs');


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(adminRoutes);

export default app;
