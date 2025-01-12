-- CreateEnum
CREATE TYPE "Frequency" AS ENUM ('daily', 'weekly');

-- CreateTable
CREATE TABLE "habits" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "frequency" "Frequency" NOT NULL,

    CONSTRAINT "habits_pkey" PRIMARY KEY ("id")
);
