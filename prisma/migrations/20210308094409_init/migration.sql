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
ALTER TABLE `theme` DROP FOREIGN KEY `theme_ibfk_1`;

-- DropForeignKey
ALTER TABLE `undercategory` DROP FOREIGN KEY `undercategory_ibfk_1`;

-- CreateTable
CREATE TABLE `Provinces` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_uz` VARCHAR(191) NOT NULL,
    `name_ru` VARCHAR(191) NOT NULL,
    `row_obl` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PhysicalPerson` (
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
CREATE TABLE `LegalEntity` (
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
CREATE TABLE `Type` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uzbek` VARCHAR(191) NOT NULL,
    `russian` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnderCategory` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Theme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `underCategoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datas` (
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
DROP TABLE `category`;

-- DropTable
DROP TABLE `legalentity`;

-- DropTable
DROP TABLE `physicalperson`;

-- DropTable
DROP TABLE `provinces`;

-- DropTable
DROP TABLE `theme`;

-- DropTable
DROP TABLE `type`;

-- DropTable
DROP TABLE `undercategory`;

-- AddForeignKey
ALTER TABLE `UnderCategory` ADD FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Theme` ADD FOREIGN KEY (`underCategoryId`) REFERENCES `UnderCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
