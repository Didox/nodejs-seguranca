const bcrypt = require('bcrypt');

module.exports = {
  make: (value) => {
    return bcrypt.hashSync(value, 10);
  },
  compare: (value, hash) => {
    return bcrypt.compareSync(value, hash); 
  }
};