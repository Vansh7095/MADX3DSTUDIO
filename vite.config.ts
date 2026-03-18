import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { IncomingMessage } from 'node:http'
import type { Plugin } from 'vite'

const readBody = async (req: IncomingMessage) => {
  const chunks: Uint8Array[] = []

  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }

  const raw = Buffer.concat(chunks).toString('utf-8')

  try {
    return JSON.parse(raw || '{}')
  } catch {
    return {}
  }
}

const apiSimulator = (): Plugin => ({
  name: 'api-simulator',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (!req.url?.startsWith('/api/')) {
        next()
        return
      }

      if (req.method !== 'POST') {
        res.statusCode = 405
        res.end('Method Not Allowed')
        return
      }

      const payload = await readBody(req)

      if (req.url === '/api/contact') {
        const isValid = payload?.name && payload?.email && payload?.message
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = isValid ? 200 : 400
        res.end(
          JSON.stringify({
            ok: Boolean(isValid),
            message: isValid
              ? 'Message received. Our team will contact you shortly.'
              : 'Please complete all fields.',
          }),
        )
        return
      }

      if (req.url === '/api/order') {
        const isValid = payload?.fullName && payload?.email && payload?.material
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = isValid ? 200 : 400
        res.end(
          JSON.stringify({
            ok: Boolean(isValid),
            message: isValid
              ? 'Custom order submitted. We will return with a production quote soon.'
              : 'Order submission is missing required fields.',
          }),
        )
        return
      }

      res.statusCode = 404
      res.end('Not Found')
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), apiSimulator()],
})
