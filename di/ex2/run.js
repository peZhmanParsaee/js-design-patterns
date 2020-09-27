const view = require("./view");
const createStoreDocument = require("./store-document");
const { userDB, folderDB } = require("./db");
const userAccess = require("./acl");
const fileStorage = require("./file-storage");

let storeDocument = createStoreDocument({
  userDB,
  folderDB,
  userAccess,
  fileStorage,
});
view(storeDocument);
