class Processor{
    static process(data) {
        let processed = data.split('\r\n')

        processed.forEach((row, i) => {
            processed[i] = row.split(',')
            
        })

        return processed
    }
}

module.exports = Processor