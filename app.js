const Reader = require('./Reader')

const leitor = new Reader()

async function main() {
    let data = await leitor.read('./users.csv')
    console.log(data)
}

main()