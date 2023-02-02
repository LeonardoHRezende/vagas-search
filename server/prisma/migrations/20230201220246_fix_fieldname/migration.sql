/*
  Warnings:

  - You are about to drop the column `endedAte` on the `expereinces` table. All the data in the column will be lost.
  - Added the required column `endedAt` to the `expereinces` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_expereinces" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "startedAt" DATETIME NOT NULL,
    "endedAt" DATETIME NOT NULL,
    "currentJob" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "expereinces_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_expereinces" ("company", "currentJob", "description", "id", "startedAt", "title", "userId") SELECT "company", "currentJob", "description", "id", "startedAt", "title", "userId" FROM "expereinces";
DROP TABLE "expereinces";
ALTER TABLE "new_expereinces" RENAME TO "expereinces";
CREATE UNIQUE INDEX "expereinces_userId_key" ON "expereinces"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
