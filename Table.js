class Table {
    constructor(data) {
        this.header = data[0]
        data.shift()
        this.rows = data
    }

    get rowCount() {
        return this.rows.length
    }

    get columnCount() {
        return this.header.length
    }
}

module.exports = Table