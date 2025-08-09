import { Router } from "express";
import { PostsService } from "../services/posts.service";

const router = Router();
const service = new PostsService();

router.get("/", async (req, res) => {
    const limit = Number(req.query.limit || 10);
    const posts = await service.findAll(limit);
    res.json(posts);
});

router.get("/:slug", async (req, res) => {
    const slug = req.params.slug;
    const post = await service.findBySlug(slug);
    if (!post) return res.status(404).json({ message: "Not found" });
    res.json(post);
});

export default router;
