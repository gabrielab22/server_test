import * as http from "http";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

import { Auth } from "./middlewares/auth";
import { login } from "./routes/login";
import { cars } from "./routes/cars";

const startServer = async () => {
  const app = express();

  app.use(
    express.json({
      type: ["application/json", "text/plain"],
    })
  );

  app.use(cors());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(bodyParser.json({ limit: "5mb" }));

  app.use("/login", login);
  app.use("/carsDetails", Auth, cars);

  const server = http.createServer(app);

  server.listen(8080, () => {
    console.info(`server is running on localhost:8080`);
  });
};

try {
  startServer();
} catch (error) {
  console.error("Error", error);
  throw new Error(error);
}
