const pdf = require('html-pdf')

class PDFWriter {
    static writePDF(fileName, html) {
        pdf.create(html).toFile(fileName, err => {
            if (err) {
                console.log(`[ERR] write PDF: ${err}`)
            }
        })
    }
}

module.exports = PDFWriter