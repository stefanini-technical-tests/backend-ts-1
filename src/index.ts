import config from './config'
import app from './app'

const PORT = config.port || 9000

app.listen(PORT, () => {
  console.log(`This application is listening at 🚀  http://localhost:${PORT}`)
})
