# 🚀 Saas starter

## 📋 Introduction

This project is a SaaS starter built with Bun, Elysia for the server, Prisma for the ORM, and Vite, React, and Mantine for the front-end.

## 🛠 Server Setup

### ✅ Prerequisites

- Ensure you have [Bun](https://bun.sh/) installed on your system.

### ⚙️ Configuration

1. Navigate to the `apps/backend` folder.
2. Create a `.env` file and add the following line:

```
DATABASE_URL=your-database-URL-here
```

Replace `your-database-URL-here` with your actual database URL.

### 🌟 Generating and Pushing Prisma Client

- Generate the Prisma client:

```
bun generate
```

- Push the Prisma schema to your database:

```
bun push
```

### 🚀 Starting the Server

- To start the server, run:

```
bun dev
```

## 💻 Client Setup

### 🌐 Running the Client

- Navigate to the `apps/client` folder.
- Start the front-end application:

```
bun dev
```

Enjoy!
