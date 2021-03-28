/*
  Warnings:

  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `legalentity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `physicalperson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `provinces` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `theme` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `type` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `undercategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `next_theme` DROP FOREIGN KEY `theme_ibfk_1`;

-- DropForeignKey
ALTER TABLE `next_undercategory` DROP FOREIGN KEY `undercategory_ibfk_1`;

-- CreateTable
CREATE TABLE `next_Provinces` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_uz` VARCHAR(191) NOT NULL,
    `name_ru` VARCHAR(191) NOT NULL,
    `row_obl` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `next_PhysicalPerson` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ns10_code` INTEGER NOT NULL,
    `ns11_code` INTEGER NOT NULL,
    `tin` VARCHAR(191) NOT NULL,
    `company_name` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(191) NOT NULL,
    `series_passport` VARCHAR(191) NOT NULL,
    `number_passport` INTEGER NOT NULL,
    `org_passport` VARCHAR(191) NOT NULL,
    `issued_passport` VARCHAR(191) NOT NULL,
    `pinfl` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `next_LegalEntity` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ns10_code` INTEGER NOT NULL,
    `ns11_code` INTEGER NOT NULL,
    `tin` VARCHAR(191) NOT NULL,
    `company_name` VARCHAR(191) NOT NULL,
    `na1_name` INTEGER NOT NULL,
    `ns4_name` INTEGER NOT NULL,
    `adress` VARCHAR(191) NOT NULL,
    `gd_tin` VARCHAR(191) NOT NULL,
    `gd_name` VARCHAR(191) NOT NULL,
    `gb_tin` VARCHAR(191) NOT NULL,
    `gb_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `next_Type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uzbek` VARCHAR(191) NOT NULL,
    `russian` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `next_Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `next_UnderCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `next_Theme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `underCategoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `next_Datas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `operator` VARCHAR(191) NOT NULL,
    `fio` VARCHAR(191) NOT NULL,
    `referenceContent` VARCHAR(191) NOT NULL,
    `inn` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `province` VARCHAR(191) NOT NULL,
    `destrict` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `underCategory` VARCHAR(191) NOT NULL,
    `theme` VARCHAR(191) NOT NULL,
    `reviewResult` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- DropTable
DROP TABLE `next_category`;

-- DropTable
DROP TABLE `next_legalentity`;

-- DropTable
DROP TABLE `next_physicalperson`;

-- DropTable
DROP TABLE `next_provinces`;

-- DropTable
DROP TABLE `next_theme`;

-- DropTable
DROP TABLE `next_type`;

-- DropTable
DROP TABLE `next_undercategory`;

-- AddForeignKey
ALTER TABLE `next_UnderCategory` ADD FOREIGN KEY (`categoryId`) REFERENCES `next_Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `next_Theme` ADD FOREIGN KEY (`underCategoryId`) REFERENCES `next_UnderCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
