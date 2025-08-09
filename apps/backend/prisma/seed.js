const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: [
      { title: 'Welcome to IPTE', slug: 'welcome-to-ipte', excerpt: 'Intro', content: '<p>Hello IPTE</p>', publishedAt: new Date() },
      { title: 'Second Post', slug: 'second-post', excerpt: 'More', content: '<p>Another</p>', publishedAt: new Date() }
    ]
  });
  console.log('Seeded.');
}
main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
