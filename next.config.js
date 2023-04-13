const withImages = require('next-images')

module.exports = {
  ...withImages(),
  images: {
    domains: [
      'wnka.co', 
      'i.imgur.com', 
      'media.graphassets.com', 
      'upload.wikimedia.org', 
      'observatoriodocinema.uol.com.br',
      'images4.alphacoders.com',
      'images3.alphacoders.com',
      'images.alphacoders.com',
    ],
  },
  build : { 
    transpile : [ 'gsap' ] 
  }  
}
