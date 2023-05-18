import "dotenv/config"

const config = {
  port: process.env.PORT,
  db: {
    url: process.env.URL,
  },
}

export default config
