function loadDoc(e) {
    const file = e.target.files[0];

    if (!file) {
        throw new Error('You need to choose an XML file first')
        alert('You need to choose an XML file first')
        return false
    }

    readDoc(file).then(parseDoc).then(showDocInTable).catch(onError)
}

function readDoc(file) {
    const reader = new FileReader()

    return new Promise((ok) => {
        reader.readAsText(file)
        reader.onload = function() {
            ok(reader.result)
        }
    })
}

function parseDoc(rawXML) {
    const parser = new DOMParser()
    const xml = parser.parseFromString(rawXML, 'text/html')
    return xml
}

function showDocInTable(xml) {
    const table = document.querySelector('#bookTable > tbody')
    const datasource = xml.querySelector('bookstore')
    const books = datasource.querySelectorAll('book')

    table.removeChild(table.children[0])

    Array.from(books).map((book, i) => {
        const tr = document.createElement('tr')
        const title = tagToData(book.querySelector('title'))
        const author = tagToData(book.querySelector('author'))
        const year = tagToData(book.querySelector('year'))
        const price = tagToData(book.querySelector('price'))

        tr.append(title, author, year, price)
        table.appendChild(tr)
    })
}

function tagToData(tag) {
    const td = document.createElement('td')
    td.textContent = tag.textContent
    return td
}

function onError(reason) {
    console.error(reason)
}