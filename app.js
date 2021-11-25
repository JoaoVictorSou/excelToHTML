const Processor = require('./Processor')
const Reader = require('./Reader')

const leitor = new Reader()

async function main() {
    let data = await leitor.read('./users.csv')
    console.log(Processor.process(data))
}

main()