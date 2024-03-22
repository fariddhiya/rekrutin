/** @type {import('next').NextConfig} */

import * as dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}


const nextConfig = {
    env: {
        PORT: process.env.PORT,
        api: process.env.api
    }
};

export default nextConfig;
