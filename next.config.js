/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');
dotenv.config();


const nextConfig = {
  reactStrictMode: true,
  env:{
    EMAILJS_TEMPLETE: process.env.EMAILJS_TEMPLETE,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
    EMAILJS_SERVICEID: process.env.EMAILJS_SERVICEID,

  }
}



module.exports = nextConfig
