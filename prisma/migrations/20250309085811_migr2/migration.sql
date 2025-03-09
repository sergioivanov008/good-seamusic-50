/*
  Warnings:

  - You are about to drop the `Album` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Artist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Beat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Beatpack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Chat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Licence` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Messages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Playlist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Producer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Soundkit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Squad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Track` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AlbumToTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BeatToBeatpack` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BeatToTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BeatpackToTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PlaylistToTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SoundkitToTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_TagToTrack` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Artist" DROP CONSTRAINT "Artist_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Producer" DROP CONSTRAINT "Producer_user_id_fkey";

-- DropForeignKey
ALTER TABLE "_AlbumToTag" DROP CONSTRAINT "_AlbumToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_AlbumToTag" DROP CONSTRAINT "_AlbumToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "_BeatToBeatpack" DROP CONSTRAINT "_BeatToBeatpack_A_fkey";

-- DropForeignKey
ALTER TABLE "_BeatToBeatpack" DROP CONSTRAINT "_BeatToBeatpack_B_fkey";

-- DropForeignKey
ALTER TABLE "_BeatToTag" DROP CONSTRAINT "_BeatToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_BeatToTag" DROP CONSTRAINT "_BeatToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "_BeatpackToTag" DROP CONSTRAINT "_BeatpackToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_BeatpackToTag" DROP CONSTRAINT "_BeatpackToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "_PlaylistToTag" DROP CONSTRAINT "_PlaylistToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_PlaylistToTag" DROP CONSTRAINT "_PlaylistToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "_SoundkitToTag" DROP CONSTRAINT "_SoundkitToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_SoundkitToTag" DROP CONSTRAINT "_SoundkitToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "_TagToTrack" DROP CONSTRAINT "_TagToTrack_A_fkey";

-- DropForeignKey
ALTER TABLE "_TagToTrack" DROP CONSTRAINT "_TagToTrack_B_fkey";

-- DropTable
DROP TABLE "Album";

-- DropTable
DROP TABLE "Artist";

-- DropTable
DROP TABLE "Beat";

-- DropTable
DROP TABLE "Beatpack";

-- DropTable
DROP TABLE "Chat";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Licence";

-- DropTable
DROP TABLE "Messages";

-- DropTable
DROP TABLE "Notification";

-- DropTable
DROP TABLE "Playlist";

-- DropTable
DROP TABLE "Producer";

-- DropTable
DROP TABLE "Soundkit";

-- DropTable
DROP TABLE "Squad";

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "Track";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "_AlbumToTag";

-- DropTable
DROP TABLE "_BeatToBeatpack";

-- DropTable
DROP TABLE "_BeatToTag";

-- DropTable
DROP TABLE "_BeatpackToTag";

-- DropTable
DROP TABLE "_PlaylistToTag";

-- DropTable
DROP TABLE "_SoundkitToTag";

-- DropTable
DROP TABLE "_TagToTrack";

-- DropEnum
DROP TYPE "Level";

-- DropEnum
DROP TYPE "Role";

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
    "album_name" TEXT NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX "Artists_artist_name_key" ON "Artists"("artist_name");

-- CreateIndex
CREATE UNIQUE INDEX "Artists_photo_url_key" ON "Artists"("photo_url");

-- CreateIndex
CREATE UNIQUE INDEX "Producers_producer_name_key" ON "Producers"("producer_name");

-- CreateIndex
CREATE UNIQUE INDEX "Producers_photo_url_key" ON "Producers"("photo_url");

-- CreateIndex
CREATE UNIQUE INDEX "Tracks_artist_id_key" ON "Tracks"("artist_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tracks_producer_id_key" ON "Tracks"("producer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tracks_album_id_key" ON "Tracks"("album_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tags_artist_id_key" ON "Tags"("artist_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tags_producer_id_key" ON "Tags"("producer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Beats_artist_id_key" ON "Beats"("artist_id");

-- CreateIndex
CREATE UNIQUE INDEX "Beats_producer_id_key" ON "Beats"("producer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Beats_beatpack_id_key" ON "Beats"("beatpack_id");

-- AddForeignKey
ALTER TABLE "Tracks" ADD CONSTRAINT "Tracks_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tracks" ADD CONSTRAINT "Tracks_producer_id_fkey" FOREIGN KEY ("producer_id") REFERENCES "Producers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tracks" ADD CONSTRAINT "Tracks_album_id_fkey" FOREIGN KEY ("album_id") REFERENCES "Albums"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_producer_id_fkey" FOREIGN KEY ("producer_id") REFERENCES "Producers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beats" ADD CONSTRAINT "Beats_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beats" ADD CONSTRAINT "Beats_producer_id_fkey" FOREIGN KEY ("producer_id") REFERENCES "Producers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Beats" ADD CONSTRAINT "Beats_beatpack_id_fkey" FOREIGN KEY ("beatpack_id") REFERENCES "Beatpacks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
