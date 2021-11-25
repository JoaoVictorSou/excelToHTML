const Processor = require('./Processor')
const Reader = require('./Reader')
const Table = require('./Table')
const HTMLParser = require('./HTMLParser')
const Writer = require('./Writer')
const PDFWriter = require('./PDFWriter')

async function main() {
    const leitor = new Reader()
    const escritor = new Writer()

    const data = await leitor.read('./users.csv')
    const processed_data = Processor.process(data)
    const usuarios = new Table(processed_data)
    
    const html = await HTMLParser.parse(usuarios)
    escritor.write('./index.html', html)

    PDFWriter.writePDF('cl3.pdf', html)
    console.log('batata')
}

main()