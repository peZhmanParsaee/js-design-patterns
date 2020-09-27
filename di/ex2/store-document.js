function storeDocument(
  { userDB, folderDB, userAccess, fileStorage },
  userID,
  folderLocation,
  fileStream
) {
  return Promise.all([
    userDB.findOne(userID),
    folderDB.findOne(folderLocation),
  ]).then(([user, folder]) => {
    userAccess.canWrite(user, folder).then((allowed) => {
      if (!allowed) {
        return Promise.reject(new Error("it went wrong"));
      }

      return fileStorage.save(fileStream, user, folder);
    });
  });
}

function storeDocumentFactory(deps) {
  return storeDocument.bind(null, deps);
}

module.exports = storeDocumentFactory;
