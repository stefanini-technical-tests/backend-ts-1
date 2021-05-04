import 'dotenv/config'

export default {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 9000,
  jwtSecret: process.env.JWT_SECRET
}
