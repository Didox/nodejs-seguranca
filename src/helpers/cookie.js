module.exports = {
  get: (request, value) => {
    let cookie = {},
      rc = request.headers.cookie;
  
    rc && rc.split(';').forEach(function( cookie ) {
      let parts = cookie.split('=');
      cookie[parts.shift().trim()] = decodeURI(parts.join('='));
    });
  
    return cookie[value];
  }
};