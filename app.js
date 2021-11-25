const Processor = require('./Processor')
const Reader = require('./Reader')
const Table = require('./Table')
const HTMLParser = require('./HTMLParser')
const Writer = require('./Writer')

async function main() {
    const leitor = new Reader()
    const escritor = new Writer()

    const data = await leitor.read('./users.csv')
    const processed_data = Processor.process(data)
    const usuarios = new Table(processed_data)
    
    const html = await HTMLParser.parse(usuarios)
    escritor.write('./inde.html', html)

}

main()