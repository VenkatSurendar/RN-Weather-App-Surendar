import express from "express";
import bodyParser from "body-parser";
import graphqlHttp from "express-graphql";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import graphQlSchema from "./GraphQL/Schema/index.js";
// import graphQlResolvers from "./GraphQL/Resolver/Auth.js";
// import isLogged from "./Middleware/isLogged.js";
import { getForcast } from "./Forcast.js";
// import fetch from "node-fetch";
// import redis from "redis";
import { cache } from "./Forcast.js";
import { getCurrentWeather } from "./Current.js";
import cors from "cors";
import schema from "./schema/schema.js";
// import User from "./Models/User.js";

const REDIS_PORT = process.env.PORT || 6379;

const app = express();
app.use(express.json());
app.use(bodyParser.json());

// app.use(isLogged);
app.use(cors());
app.use(
  "/graphql",
  graphqlHttp.graphqlHTTP({
    schema: schema,
    // schema: graphQlSchema,
    // rootValue: graphQlResolvers,
    graphiql: true,
  }),
);

//Final Weather API Redis Middleware
app.get("/forecast/:city", cache, getForcast);
app.get("/current/:city", cache, getCurrentWeather);

dotenv.config();
const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster-1.ezkes.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })

  .then(() => {
    app.listen(4002);
    console.log("MongoDB connection established!");
    console.log(`Running on localhost: http://localhost:4002`);
  })
  .catch((err) => {
    console.log(err);
  });
