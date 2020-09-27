function view(storeDocument) {
  const myFileStream = [12, 15, 15, 13, 17];
  storeDocument(123, "/tmp-folder", myFileStream);
}

module.exports = view;
