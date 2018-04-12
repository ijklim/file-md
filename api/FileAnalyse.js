module.exports = function (req) {
  this.analyse = (file) => {
    // Ref: https://www.npmjs.com/package/multer
    return {
      originalFileName: file.originalname,
      fileSize: file.size,
    }
  }
}