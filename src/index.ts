import { Hono } from 'hono'
import { Routes } from './routes'

// Initialize the Hono app
const app = new Hono().basePath('/api')

// Posts Routes
app.route('/pakaian', Routes)

export default app