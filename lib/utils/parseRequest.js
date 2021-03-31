module.exports = rawRequest => {
  const [header, body] = rawRequest.split('\r\n\r\n');
  const [method, path] = header
    .split('/n')[0]
    .split(' ');
  return { method, path, body };
};
