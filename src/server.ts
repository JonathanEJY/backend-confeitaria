import express from "express";
import router from "./routes";
import cors from "cors";


const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log("Rodando!");
});
