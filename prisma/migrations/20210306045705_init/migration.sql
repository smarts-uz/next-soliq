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

-- AddForeignKey
ALTER TABLE `UnderCategory` ADD FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Theme` ADD FOREIGN KEY (`underCategoryId`) REFERENCES `UnderCategory`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
