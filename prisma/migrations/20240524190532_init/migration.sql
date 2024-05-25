-- CreateTable
CREATE TABLE "Pakaian" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "jenis" TEXT NOT NULL,
    "ukuran" TEXT NOT NULL,
    "warna" TEXT NOT NULL,
    "harga" DOUBLE PRECISION NOT NULL,
    "stok" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pakaian_pkey" PRIMARY KEY ("id")
);
