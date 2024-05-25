// import context
import { Context } from 'hono';

// import prisma client
import prisma from '../../prisma/client';

/**
 * Mendapatkan semua pakaian
 */
export const getPakaian = async (c: Context) => {
    try {
        // Mendapatkan semua pakaian
        const pakaian = await prisma.pakaian.findMany({ orderBy: { id: 'desc' } });

        // Mengembalikan JSON
        return c.json({
            success: true,
            message: 'List Data Pakaian!',
            data: pakaian
        }, 200);

    } catch (e: unknown) {
        console.error(`Error getting pakaian: ${e}`);
        return c.json({
            success: false,
            message: 'Error getting pakaian'
        }, 500);
    }
};

/**
 * Membuat pakaian baru
 */
export async function createPakaian(c: Context) {
    try {
        // Mendapatkan body request
        const body = await c.req.json();

        console.log("Request Body:", body);

        // Memeriksa apakah nama, jenis, ukuran, warna, harga, dan stok ada dan valid
        const nama   = typeof body['nama'] === 'string' && body['nama'].trim() !== '' ? body['nama'] : null;
        const jenis  = typeof body['jenis'] === 'string' && body['jenis'].trim() !== '' ? body['jenis'] : null;
        const ukuran = typeof body['ukuran'] === 'string' && body['ukuran'].trim() !== '' ? body['ukuran'] : null;
        const warna  = typeof body['warna'] === 'string' && body['warna'].trim() !== '' ? body['warna'] : null;
        const harga  = typeof body['harga'] === 'number' ? body['harga'] : null;
        const stok   = typeof body['stok'] === 'number' ? body['stok'] : null;

        // Jika ada field yang kosong, kembalikan respon error
        if (!nama || !jenis || !ukuran || !warna || harga === null || stok === null) {
            return c.json({
                success: false,
                message: 'All fields are required and must be valid!',
                receivedData: {
                    nama,
                    jenis,
                    ukuran,
                    warna,
                    harga,
                    stok
                }
            }, 400);
        }

        // Membuat pakaian
        const pakaian = await prisma.pakaian.create({
            data: {
                nama: nama,
                jenis: jenis,
                ukuran: ukuran,
                warna: warna,
                harga: harga,
                stok: stok,
            }
        });

        // Mengembalikan JSON
        return c.json({
            success: true,
            message: 'Pakaian Created Successfully!',
            data: pakaian
        }, 201);

    } catch (e: unknown) {
        console.error(`Error creating pakaian: ${e}`);
        return c.json({
            success: false,
            message: 'Error creating pakaian'
        }, 500);
    }
}

/**
 * Mendapatkan pakaian berdasarkan ID
 */
export async function getPakaianById(c: Context) {
    try {
        // Konversi tipe id menjadi number
        const pakaianId = parseInt(c.req.param('id'));

        // Mendapatkan pakaian berdasarkan id
        const pakaian = await prisma.pakaian.findUnique({
            where: { id: pakaianId },
        });

        // Jika pakaian tidak ditemukan
        if (!pakaian) {
            // Mengembalikan JSON
            return c.json({
                success: false,
                message: 'Pakaian Not Found!',
            }, 404);
        }

        // Mengembalikan JSON
        return c.json({
            success: true,
            message: `Detail Data Pakaian By ID: ${pakaianId}`,
            data: pakaian
        }, 200);

    } catch (e: unknown) {
        console.error(`Error finding pakaian: ${e}`);
        return c.json({
            success: false,
            message: 'Error finding pakaian'
        }, 500);
    }
}

/**
 * Memperbarui pakaian
 */
export async function updatePakaian(c: Context) {
    try {
        // Konversi tipe id menjadi number
        const pakaianId = parseInt(c.req.param('id'));

        // Mendapatkan body request
        const body = await c.req.json();

        // Memeriksa apakah nama, jenis, ukuran, warna, harga, dan stok ada dan valid
        const nama   = typeof body['nama'] === 'string' && body['nama'].trim() !== '' ? body['nama'] : null;
        const jenis  = typeof body['jenis'] === 'string' && body['jenis'].trim() !== '' ? body['jenis'] : null;
        const ukuran = typeof body['ukuran'] === 'string' && body['ukuran'].trim() !== '' ? body['ukuran'] : null;
        const warna  = typeof body['warna'] === 'string' && body['warna'].trim() !== '' ? body['warna'] : null;
        const harga  = typeof body['harga'] === 'number' ? body['harga'] : null;
        const stok   = typeof body['stok'] === 'number' ? body['stok'] : null;

        // Jika ada field yang kosong, kembalikan respon error
        if (!nama || !jenis || !ukuran || !warna || harga === null || stok === null) {
            return c.json({
                success: false,
                message: 'All fields are required and must be valid!',
                receivedData: {
                    nama,
                    jenis,
                    ukuran,
                    warna,
                    harga,
                    stok
                }
            }, 400);
        }

        // Update pakaian dengan prisma
        const updatedPakaian = await prisma.pakaian.update({
            where: { id: pakaianId },
            data: {
                nama: nama,
                jenis: jenis,
                ukuran: ukuran,
                warna: warna,
                harga: harga,
                stok: stok,
                updatedAt: new Date(),
            },
        });

        // Mengembalikan JSON
        return c.json({
            success: true,
            message: 'Pakaian Updated Successfully!',
            data: updatedPakaian
        }, 200);

    } catch (e: unknown) {
        console.error(`Error updating pakaian: ${e}`);
        return c.json({
            success: false,
            message: 'Error updating pakaian'
        }, 500);
    }
}

/**
 * Menghapus pakaian
 */
export async function deletePakaian(c: Context) {
    try {
        // Konversi tipe id menjadi number
        const pakaianId = parseInt(c.req.param('id'));

        // Menghapus pakaian dengan prisma
        await prisma.pakaian.delete({
            where: { id: pakaianId },
        });

        // Mengembalikan JSON
        return c.json({
            success: true,
            message: 'Pakaian Deleted Successfully!',
        }, 200);

    } catch (e: unknown) {
        console.error(`Error deleting pakaian: ${e}`);
        return c.json({
            success: false,
            message: 'Error deleting pakaian'
        }, 500);
    }
}
