/*
  Warnings:

  - You are about to drop the `Experience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Habilits` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `AcademicFormation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Experience";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Habilits";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "expereinces" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "startedAt" DATETIME NOT NULL,
    "endedAte" DATETIME NOT NULL,
    "currentJob" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "expereinces_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "habilits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "habilits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "expereinces_userId_key" ON "expereinces"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "habilits_userId_key" ON "habilits"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AcademicFormation_userId_key" ON "AcademicFormation"("userId");
