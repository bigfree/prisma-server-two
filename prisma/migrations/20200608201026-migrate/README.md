# Migration `20200608201026-migrate`

This migration has been generated at 6/8/2020, 8:10:26 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"deletedAt" timestamp(3)   ,"email" text  NOT NULL ,"id" SERIAL,"name" text   ,"password" text  NOT NULL ,"updatedAt" timestamp(3)   ,
    PRIMARY KEY ("id"))

CREATE TABLE "public"."Task" (
"archiveAt" timestamp(3)   ,"content" text   ,"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"deletedAt" timestamp(3)   ,"id" SERIAL,"name" text  NOT NULL ,"updatedAt" timestamp(3)   ,"userId" integer   ,
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")

ALTER TABLE "public"."Task" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200608201026-migrate
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,33 @@
+datasource db {
+  default  = true
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+  output   = "../src/generated/prisma-client"
+}
+
+model User {
+  id        Int       @id @default(autoincrement())
+  email     String    @unique
+  name      String?
+  password  String
+  createdAt DateTime  @default(now())
+  updatedAt DateTime?
+  deletedAt DateTime?
+  tasks     Task[]
+}
+
+model Task {
+  id        Int       @id @default(autoincrement())
+  name      String
+  content   String?
+  createdAt DateTime  @default(now())
+  updatedAt DateTime?
+  deletedAt DateTime?
+  archiveAt DateTime?
+  user      User?     @relation(fields: [userId], references: [id])
+  userId    Int?
+}
```


