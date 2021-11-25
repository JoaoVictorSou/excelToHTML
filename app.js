const Processor = require('./Processor')
const Reader = require('./Reader')
const Table = require('./Table')

const leitor = new Reader()

async function main() {
    const data = await leitor.read('./users.csv')
    const processed_data = Processor.process(data)
    const usuarios = new Table(processed_data)
    console.log(usuarios)
    console.log(usuarios.rowCount)
    console.log(usuarios.columnCount)

}

main()