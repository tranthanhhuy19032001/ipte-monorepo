# ipte-monorepo (npm workspaces)

Frontend: Next.js 15 App Router (TypeScript)
Backend: Express + TypeScript + Prisma (Postgres)

---

# Hướng dẫn run local for FE:

-   ở root-repo

npm install

npm run dev --workspace=apps-frontend

Frontend: http://localhost:3000

---

# Hướng dẫn Run in local cho cả FE VÀ BE:

1. npm install
2. Khởi động Postgres (dùng Docker):
   cd infra/docker
   docker-compose up -d
3. Tạo Prisma client và migrate:

# từ thư mục project root

npm run -w apps-backend prisma:generate
npm run -w apps-backend prisma:migrate

# seed sample data

npm run -w apps-backend seed

4. Chạy backend và frontend (2 terminal hoặc dùng npm run dev):

# backend

npm run dev --workspace=apps-backend

# frontend

npm run dev --workspace=apps-frontend

5. Mở trình duyệt:

Frontend: http://localhost:3000

Backend API: http://localhost:3001/api/v1/posts
