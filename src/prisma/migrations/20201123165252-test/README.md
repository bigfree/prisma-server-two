# Migration `20201123165252-test`

This migration has been generated by Adam Mikó at 11/23/2020, 5:52:52 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201123163432-create-workspace-and-projects..20201123165252-test
--- datamodel.dml
+++ datamodel.dml
@@ -1,17 +1,17 @@
 datasource db {
   default  = true
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 generator typegraphql {
   provider = "typegraphql-prisma"
-  output   = "../src/prisma/generated/type-graphql"
+  output   = "../prisma/generated/type-graphql"
 }
 // TODO: priprava na workspace
 model Workspace {
@@ -34,24 +34,24 @@
   updatedAt    DateTime? @updatedAt
   deletedAt    DateTime?
   projectOwner User      @relation("ProjectOwner", fields: [userId], references: [id])
   userId       String
-  users        User[]
+  assignUsers  User[]
 }
 model User {
-  id         String      @id @default(uuid())
-  email      String      @unique
-  name       String?
-  password   String
-  createdAt  DateTime    @default(now())
-  updatedAt  DateTime?   @updatedAt
-  deletedAt  DateTime?
-  role       Role        @default(USER)
-  tasks      Task[]
-  workspaces Workspace[]
-  projects   Project[]
-  project    Project[]   @relation("ProjectOwner")
+  id            String      @id @default(uuid())
+  email         String      @unique
+  name          String?
+  password      String
+  createdAt     DateTime    @default(now())
+  updatedAt     DateTime?   @updatedAt
+  deletedAt     DateTime?
+  role          Role        @default(USER)
+  tasks         Task[]
+  workspaces    Workspace[]
+  projects      Project[]
+  projectOwners Project[]   @relation("ProjectOwner")
 }
 model Task {
   id        String    @id @default(uuid())
```


