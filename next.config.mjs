/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/interview_work/" : "",
  basePath: isProd ? "/interview_work" : "",
  output: "export", // Вказуємо на статичний експорт
  images: {
    unoptimized: true, // Вимикаємо оптимізацію зображень
  },
};

export default nextConfig;
