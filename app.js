const Processor = require('./Processor')
const Reader = require('./Reader')
const Table = require('./Table')
const HTMLParser = require('./HTMLParser')

const leitor = new Reader()

async function main() {
    const data = await leitor.read('./users.csv')
    const processed_data = Processor.process(data)
    const usuarios = new Table(processed_data)
    
    const html = await HTMLParser.parse(usuarios)
    console.log(html)

}

main()