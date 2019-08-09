const autoCorrect = require('./autoCorrect');

Math = autoCorrect(Math);
console.log(Math.PI); // 3.141592653589793
console.log(Math.PIE); // 3.141592653589793
console.log(Math.PIEE); // 3.141592653589793