import Link from "next/link";
import { getPosts } from "../lib/api";

export default async function Home() {
    // call thử api, chổ này m fake data coding in frontend trước
    // const posts = await getPosts({ limit: 10 });

    // fake data for now
    const posts = [
        { slug: "post-1", title: "Bài viết 1" },
        { slug: "post-2", title: "Bài viết 2" },
        { slug: "post-3", title: "Bài viết 3" },
    ];

    return (
        <main>
            <h1>IPTE - Bài viết mới</h1>
            <ul>
                {posts.map((p: any) => (
                    <li key={p.slug}>
                        <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
