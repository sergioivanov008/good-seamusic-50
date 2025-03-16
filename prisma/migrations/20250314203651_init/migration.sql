-- CreateTable
CREATE TABLE "Artists" (
    "id" SERIAL NOT NULL,
    "artist_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,

    CONSTRAINT "Artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producers" (
    "id" SERIAL NOT NULL,
    "producer_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,

    CONSTRAINT "Producers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tracks" (
    "id" SERIAL NOT NULL,
    "cover_url" TEXT NOT NULL,
    "track_name" TEXT NOT NULL,
    "listens" INTEGER NOT NULL,
    "playtime" INTEGER NOT NULL,
    "like" BOOLEAN NOT NULL,
    "artist_id" INTEGER NOT NULL,
    "producer_id" INTEGER NOT NULL,
    "album_id" INTEGER NOT NULL,
    "file_url" TEXT NOT NULL,

    CONSTRAINT "Tracks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "tag_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "artist_id" INTEGER NOT NULL,
    "producer_id" INTEGER NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beats" (
    "id" SERIAL NOT NULL,
    "cover_url" TEXT NOT NULL,
    "beat_name" TEXT NOT NULL,
    "beatpack_name" TEXT NOT NULL,
    "listens" INTEGER NOT NULL,
    "playtime" INTEGER NOT NULL,
    "like" BOOLEAN NOT NULL,
    "artist_id" INTEGER NOT NULL,
    "producer_id" INTEGER NOT NULL,
    "beatpack_id" INTEGER NOT NULL,
    "file_url" TEXT NOT NULL,

    CONSTRAINT "Beats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Albums" (
    "id" SERIAL NOT NULL,
    "cover_url" TEXT NOT NULL,
    "album_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "plays_number" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "like" BOOLEAN NOT NULL,

    CONSTRAINT "Albums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beatpacks" (
    "id" SERIAL NOT NULL,
    "cover_url" TEXT NOT NULL,
    "beatpack_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "plays_number" INTEGER NOT NULL,
    "like" BOOLEAN NOT NULL,

    CONSTRAINT "Beatpacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "verificationToken" TEXT,
    "resetToken" TEXT,
    "resetTokenExpiry" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Artists_artist_name_key" ON "Artists"("artist_name");

-- CreateIndex
CREATE UNIQUE INDEX "Artists_photo_url_key" ON "Artists"("photo_url");

-- CreateIndex
CREATE UNIQUE INDEX "Producers_producer_name_key" ON "Producers"("producer_name");

-- CreateIndex
CREATE UNIQUE INDEX "Producers_photo_url_key" ON "Producers"("photo_url");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Tracks" ADD CONSTRAINT "Tracks_album_id_fkey" FOREIGN KEY ("album_id") REFERENCES "Albums"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tracks" ADD CONSTRAINT "Tracks_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tracks" ADD CONSTRAINT "Tracks_producer_id_fkey" FOREIGN KEY ("producer_id") REFERENCES "Producers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_producer_id_fkey" FOREIGN KEY ("producer_id") REFERENCES "Producers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beats" ADD CONSTRAINT "Beats_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beats" ADD CONSTRAINT "Beats_beatpack_id_fkey" FOREIGN KEY ("beatpack_id") REFERENCES "Beatpacks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beats" ADD CONSTRAINT "Beats_producer_id_fkey" FOREIGN KEY ("producer_id") REFERENCES "Producers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
