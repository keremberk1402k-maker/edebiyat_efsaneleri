/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- BU SATIR SİTEYİ STATİK YAPAR (404'ü ÇÖZER)
  basePath: '/edebiyat-v4-final', // <--- DEPO ADIN BURAYA GELMELİ
  images: {
    unoptimized: true, // <--- RESİMLERİN GÖRÜNMESİ İÇİN ŞART
  },
};

export default nextConfig;