const { createReadStream } = require('fs');

// last buffer - remainder
// highWaterMark - control size
const stream = createReadStream('./content/big.txt', {
  highWaterMark: 90000,
  encoding: 'utf8',
});
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' });

// const stream = createReadStream('./content/big.txt');

stream.on('data', (result) => {
  console.log(result);
});

stream.on('error', (error) => console.log(error));
