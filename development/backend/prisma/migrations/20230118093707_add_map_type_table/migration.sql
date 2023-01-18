/*
  Warnings:

  - You are about to drop the column `tag` on the `maps` table. All the data in the column will be lost.
  - You are about to drop the column `dateBirth` on the `pets` table. All the data in the column will be lost.
  - You are about to drop the column `album_name` on the `pets_img` table. All the data in the column will be lost.
  - You are about to drop the column `familyId` on the `species` table. All the data in the column will be lost.
  - You are about to drop the column `mapId` on the `working_hours` table. All the data in the column will be lost.
  - You are about to drop the `map_tags` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `map_type_id` to the `maps` table without a default value. This is not possible if the table is not empty.
  - Added the required column `map_id` to the `working_hours` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "species" DROP CONSTRAINT "species_familyId_fkey";

-- DropForeignKey
ALTER TABLE "working_hours" DROP CONSTRAINT "working_hours_mapId_fkey";

-- AlterTable
ALTER TABLE "maps" DROP COLUMN "tag",
ADD COLUMN     "map_type_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "dateBirth",
ADD COLUMN     "date_birth" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "pets_img" DROP COLUMN "album_name";

-- AlterTable
ALTER TABLE "species" DROP COLUMN "familyId",
ADD COLUMN     "family_id" INTEGER;

-- AlterTable
ALTER TABLE "working_hours" DROP COLUMN "mapId",
ADD COLUMN     "map_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "map_tags";

-- CreateTable
CREATE TABLE "map_type" (
    "id" SERIAL NOT NULL,
    "chinese_type" VARCHAR(255) NOT NULL,
    "english_type" VARCHAR(255) NOT NULL,
    "type_count" INTEGER NOT NULL,

    CONSTRAINT "map_type_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "map_type_chinese_type_english_type_key" ON "map_type"("chinese_type", "english_type");

-- AddForeignKey
ALTER TABLE "maps" ADD CONSTRAINT "maps_map_type_id_fkey" FOREIGN KEY ("map_type_id") REFERENCES "map_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "working_hours" ADD CONSTRAINT "working_hours_map_id_fkey" FOREIGN KEY ("map_id") REFERENCES "maps"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "species" ADD CONSTRAINT "species_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "species"("id") ON DELETE SET NULL ON UPDATE CASCADE;
