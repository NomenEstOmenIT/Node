module.exports = function(request) {
  return new Promise((res, rej) => {
    let body = [];

    request
      .on("error", err => {
        rej(err);
      })
      .on("data", chunk => {
        body.push(chunk);
      })
      .on("end", () => {
        const bufferString = Buffer.concat(body).toString();
        const bodyObject = JSON.parse(bufferString);
        res(bodyObject);
      });
  });
};
