import express, { Application } from "express";
import dotenv from "dotenv";
import searchContenetRoute from "./routes/searchContent";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", searchContenetRoute);

app.listen(PORT, () => {
  console.log(`Server run on port http://localhost:${PORT}/api`);
});
