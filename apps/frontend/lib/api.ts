const API_BASE = process.env.API_URL || "http://localhost:3001";
export async function getPosts(q: { limit?: number } = {}) {
    const res = await fetch(`${API_BASE}/api/v1/posts?limit=${q.limit || 10}`, {
        cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
}
export async function getPost(slug: string) {
    const res = await fetch(`${API_BASE}/api/v1/posts/${slug}`, {
        cache: "no-store",
    });
    if (!res.ok) return null;
    return res.json();
}
