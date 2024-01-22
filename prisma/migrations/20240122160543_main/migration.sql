-- CreateTable
CREATE TABLE "responses" (
    "email" VARCHAR(50) NOT NULL,
    "college" VARCHAR(150),
    "interests" TEXT,
    "max_price" VARCHAR(5),
    "timestamp" TIMESTAMP(6),
    "rentpc" VARCHAR(10),
    "games" TEXT,
    "ip" TEXT,

    CONSTRAINT "responses_pkey" PRIMARY KEY ("email")
);
