import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:5173',
  'https://toxicity-detection.com'
]

const corsOptions = {
  origin: function (origin, callback) {
    if (ACCEPTED_ORIGINS.includes(origin)) {
      callback(null, true)
    } else if (!origin) {
      callback(null, new Error('Origin not provided'))
    } else callback(new Error('Not allowed by CORS'))
  },
  optionsSuccessStatus: 200
}

export function corsMiddleware () {
  return cors(corsOptions)
}