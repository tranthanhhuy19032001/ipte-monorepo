import { getPost } from '../../../lib/api';

export async function generateMetadata({ params }: any) {
  const post = await getPost(params.slug);
  return { title: post?.title || 'IPTE' };
}

export default async function PostPage({ params }: any) {
  const post = await getPost(params.slug);
  if (!post) return <h1>Không tìm thấy</h1>;
  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
