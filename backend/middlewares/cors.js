import cors from 'cors'

export function corsMiddleware () {
  const corsOptions = {
    origin: 'http//localhost:5173',
    optionsSuccessStatus: 200
  }
  return cors(corsOptions)
}