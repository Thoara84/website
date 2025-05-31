/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,        // Wichtig für sauberes Routing bei GitHub Pages
    output: 'export',           // Damit `next export` funktioniert
    images: {
        domains: [],              // Nur notwendig, wenn du externe Bilder nutzt
    },
};

module.exports = nextConfig;
