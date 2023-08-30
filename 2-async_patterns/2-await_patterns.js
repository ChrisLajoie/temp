const { readFile, writeFile } = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile(
      './content/first.txt',
      'utf8',
      (err) => err && console.error(err)
    );
    const second = await readFile(
      './content/second.txt',
      'utf8',
      (err) => err && console.error(err)
    );
    await writeFile(
      './content/result_mind_grenade.txt',
      `This is Awesome: ${first} ${second}`,
      { flag: 'a' },
      (err) => err && console.error(err)
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
