-- CreateTable
CREATE TABLE "jobs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "payment" REAL NOT NULL,
    "experienceLevel" TEXT NOT NULL,
    "stack" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    CONSTRAINT "jobs_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "webSite" TEXT NOT NULL,
    "employersNumber" INTEGER NOT NULL,
    "descrption" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "candidatureId" TEXT,
    CONSTRAINT "users_candidatureId_fkey" FOREIGN KEY ("candidatureId") REFERENCES "jobs" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

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
CREATE TABLE "AcademicFormation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "schoolName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startedAt" DATETIME NOT NULL,
    "endedAt" DATETIME NOT NULL,
    "currentFormation" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "AcademicFormation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "habilits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "habilits_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "jobs_companyId_key" ON "jobs"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "users_candidatureId_key" ON "users"("candidatureId");

-- CreateIndex
CREATE UNIQUE INDEX "expereinces_userId_key" ON "expereinces"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AcademicFormation_userId_key" ON "AcademicFormation"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "habilits_userId_key" ON "habilits"("userId");
