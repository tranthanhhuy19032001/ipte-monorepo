import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class PostsService {
  async findAll(limit = 10) {
    return prisma.post.findMany({
      take: limit,
      orderBy: { publishedAt: 'desc' }
    });
  }

  async findBySlug(slug: string) {
    return prisma.post.findUnique({ where: { slug } });
  }
}
