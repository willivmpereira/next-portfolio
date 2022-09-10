const withImages = require('next-images');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})

module.exports = withImages({
  esModule: true
});

module.exports = {
  images: {
    domains: ['wnka.co'],
  },
}
