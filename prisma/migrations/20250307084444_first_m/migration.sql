-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'admin', 'superuser');

-- CreateEnum
CREATE TYPE "Level" AS ENUM ('none', 'bot', 'full');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "picture_url" TEXT NOT NULL,
    "access_level" "Role" NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "is_verified" BOOLEAN NOT NULL,
    "is_adult" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artist" (
    "user_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "picture_url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Producer" (
    "user_id" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "picture_url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Licence" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Licence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Squad" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "picture_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "followers" TEXT NOT NULL,
    "applicant_artists" TEXT NOT NULL,
    "applicant_producers" TEXT NOT NULL,

    CONSTRAINT "Squad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Playlist" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "picture_url" TEXT NOT NULL,
    "viewers_ids" INTEGER[],
    "likers_ids" INTEGER[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "creator" TEXT NOT NULL,
    "authors" TEXT NOT NULL,
    "beats" TEXT NOT NULL,
    "tracks" TEXT NOT NULL,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "picture_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_available" BOOLEAN NOT NULL,
    "followers" TEXT NOT NULL,
    "beats" TEXT NOT NULL,
    "squads" TEXT NOT NULL,
    "beatpacks" TEXT NOT NULL,
    "soundkits" TEXT NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "file_url" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "viewers_ids" INTEGER[],
    "likers_ids" INTEGER[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "album" TEXT NOT NULL,
    "license" TEXT NOT NULL,
    "producers" TEXT NOT NULL,
    "comments" TEXT NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beat" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "picture_url" TEXT NOT NULL,
    "file_url" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "viewers_ids" INTEGER[],
    "likers_ids" INTEGER[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "comments" TEXT NOT NULL,
    "license" TEXT NOT NULL,

    CONSTRAINT "Beat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beatpack" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "viewers_ids" INTEGER[],
    "likers_ids" INTEGER[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Beatpack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Soundkit" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "picture_url" TEXT NOT NULL,
    "file_url" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "viewers_ids" INTEGER[],
    "likers_ids" INTEGER[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "license" TEXT NOT NULL,
    "beats" TEXT NOT NULL,

    CONSTRAINT "Soundkit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" SERIAL NOT NULL,
    "messages" TEXT NOT NULL,
    "participants" TEXT NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Messages" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "chat" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "reciever" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PlaylistToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PlaylistToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_AlbumToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_AlbumToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_TagToTrack" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_TagToTrack_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_BeatToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_BeatToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_BeatToBeatpack" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_BeatToBeatpack_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_BeatpackToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_BeatpackToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_SoundkitToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_SoundkitToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_picture_url_key" ON "User"("picture_url");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_user_id_key" ON "Artist"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Producer_user_id_key" ON "Producer"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Producer_picture_url_key" ON "Producer"("picture_url");

-- CreateIndex
CREATE UNIQUE INDEX "Squad_picture_url_key" ON "Squad"("picture_url");

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_picture_url_key" ON "Playlist"("picture_url");

-- CreateIndex
CREATE UNIQUE INDEX "Album_picture_url_key" ON "Album"("picture_url");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Track_file_url_key" ON "Track"("file_url");

-- CreateIndex
CREATE UNIQUE INDEX "Beat_picture_url_key" ON "Beat"("picture_url");

-- CreateIndex
CREATE UNIQUE INDEX "Beat_file_url_key" ON "Beat"("file_url");

-- CreateIndex
CREATE UNIQUE INDEX "Soundkit_picture_url_key" ON "Soundkit"("picture_url");

-- CreateIndex
CREATE UNIQUE INDEX "Soundkit_file_url_key" ON "Soundkit"("file_url");

-- CreateIndex
CREATE INDEX "_PlaylistToTag_B_index" ON "_PlaylistToTag"("B");

-- CreateIndex
CREATE INDEX "_AlbumToTag_B_index" ON "_AlbumToTag"("B");

-- CreateIndex
CREATE INDEX "_TagToTrack_B_index" ON "_TagToTrack"("B");

-- CreateIndex
CREATE INDEX "_BeatToTag_B_index" ON "_BeatToTag"("B");

-- CreateIndex
CREATE INDEX "_BeatToBeatpack_B_index" ON "_BeatToBeatpack"("B");

-- CreateIndex
CREATE INDEX "_BeatpackToTag_B_index" ON "_BeatpackToTag"("B");

-- CreateIndex
CREATE INDEX "_SoundkitToTag_B_index" ON "_SoundkitToTag"("B");

-- AddForeignKey
ALTER TABLE "Artist" ADD CONSTRAINT "Artist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Producer" ADD CONSTRAINT "Producer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlaylistToTag" ADD CONSTRAINT "_PlaylistToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlaylistToTag" ADD CONSTRAINT "_PlaylistToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlbumToTag" ADD CONSTRAINT "_AlbumToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlbumToTag" ADD CONSTRAINT "_AlbumToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToTrack" ADD CONSTRAINT "_TagToTrack_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TagToTrack" ADD CONSTRAINT "_TagToTrack_B_fkey" FOREIGN KEY ("B") REFERENCES "Track"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BeatToTag" ADD CONSTRAINT "_BeatToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Beat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BeatToTag" ADD CONSTRAINT "_BeatToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BeatToBeatpack" ADD CONSTRAINT "_BeatToBeatpack_A_fkey" FOREIGN KEY ("A") REFERENCES "Beat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BeatToBeatpack" ADD CONSTRAINT "_BeatToBeatpack_B_fkey" FOREIGN KEY ("B") REFERENCES "Beatpack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BeatpackToTag" ADD CONSTRAINT "_BeatpackToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Beatpack"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BeatpackToTag" ADD CONSTRAINT "_BeatpackToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SoundkitToTag" ADD CONSTRAINT "_SoundkitToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Soundkit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SoundkitToTag" ADD CONSTRAINT "_SoundkitToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
