var favicons = require('favicons')
var source = 'src/graphics/logo.png'
var configuration = {
  path: 'public/icons',
  icons: {
    // android: true,
    // appleIcon: true,
    // appleStartup: true,
    // coast: true,
    favicons: true,
    // firefox: true,
    // windows: true,
    // yandex: true
  }
},
callback = function (error, response) {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log(response.images);
  console.log(response.files);
  console.log(response.html);
}

favicons(source, configuration, callback)
