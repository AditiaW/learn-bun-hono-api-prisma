// import hono
import { Hono } from 'hono';

// import controller
import { getPakaian, createPakaian, getPakaianById, updatePakaian, deletePakaian } from '../controllers/PakaianController';

// inisialisasi router
const router = new Hono();

// routes pakaian index
router.get('/', (c) => getPakaian(c));

// routes pakaian create
router.post('/', (c) => createPakaian(c));

// route untuk mendapatkan pakaian berdasarkan ID
router.get('/:id', (c) => getPakaianById(c));

// route untuk memperbarui pakaian berdasarkan ID
router.put('/:id', (c) => updatePakaian(c));

// route untuk menghapus pakaian berdasarkan ID
router.delete('/:id', (c) => deletePakaian(c));

export const Routes = router;
