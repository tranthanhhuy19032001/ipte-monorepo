import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import postsRouter from "./controllers/posts.controller";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/posts", postsRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Backend started on http://localhost:${port}`);
});
