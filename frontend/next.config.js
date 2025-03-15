/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEAVIATE_URL: process.env.WEAVIATE_URL,
    WEAVIATE_API_KEY: process.env.WEAVIATE_API_KEY,
    WEAVIATE_INDEX_NAME: process.env.WEAVIATE_INDEX_NAME
  }
};

module.exports = nextConfig;
