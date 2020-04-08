export default (srcs) => {
  function loadImage(src) {
      return new Promise(function(resolve, reject) {
          var img = new Image();
          img.onload = function() {
              resolve(img);
          };
          img.onerror = img.onabort = function() {
              reject(src);
          };
          img.src = src;
      });
  }
  var promises = [];
  for (var i = 0; i < srcs.length; i++) {
      promises.push(loadImage(srcs[i]));
  }
  return Promise.all(promises);
}