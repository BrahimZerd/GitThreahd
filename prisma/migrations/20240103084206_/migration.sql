/*
  Warnings:

  - You are about to drop the column `userId` on the `users` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "username" TEXT NOT NULL,
    "bio" TEXT,
    "link" TEXT NOT NULL,
    "email" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email_verified" DATETIME,
    "image" TEXT
);
INSERT INTO "new_users" ("bio", "createdAt", "email", "email_verified", "id", "image", "link", "name", "username") SELECT "bio", "createdAt", "email", "email_verified", "id", "image", "link", "name", "username" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
