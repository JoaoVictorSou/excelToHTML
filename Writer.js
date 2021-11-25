const fs = require('fs')
const util = require('util')

class Writer {
    constructor() {
        this.writeFile = util.promisify(fs.writeFile)
    }

    async write(filePath, data) {
        try {
            await this.writeFile(filePath, data)
            return true
        } catch(err) {
            console.log(`[ERR] WRITE HTML PAGE: ${err}`)
            return false
        }
    }
}

module.exports = Writer