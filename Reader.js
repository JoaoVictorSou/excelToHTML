const fs = require('fs')
const util = require('util')

class Reader{
    constructor(){
        this.reader = util.promisify(fs.readFile)
    }

    async read(file_path) {
        try {
            return await this.reader(file_path, "utf8")
        } catch(err) {
            console.log(`[ERR] reader file: ${err}`)
            return undefined
        }
    }
}

module.exports = Reader