module.exports = {
  get: (request, key) => {
    let cookieParse = {},
      rc = request.headers.cookie;
  
    rc && rc.split(';').forEach(function( cookie ) {
      let parts = cookie.split('=');
      cookieParse[parts.shift().trim()] = decodeURI(parts.join('='));
    });
  
    return cookieParse[key];
  },
  set: (response, key, value) => {
    response.cookie(key, value, { maxAge: (2 * 60 * 60 * 1000), httpOnly: true }); // 2 horas
  },
  remove: (response, key) => {
    response.cookie(key, "", { maxAge: -1, httpOnly: true });
  }
};