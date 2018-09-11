const fs = require('fs')
const parse = require('csv-parse/lib/sync')

const file = fs.readFileSync(process.argv[2], 'utf8')
const json = parse(file, {
    from: 2,
    columns: ['resourceName', 'categories', 'info', 'mission', 'url', 'phone', 'address', 'email'],
    trim: true
})

json.sort((a, b) => {
    const nameA = a.resourceName.toLowerCase()
    const nameB = b.resourceName.toLowerCase()
    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }
    return 0
}).forEach((resource, id) => {
    resource.id = id
    resource.categories = resource.categories.split(/\s*,\s*/)
})

// add id to each resource

console.log(JSON.stringify(json))
