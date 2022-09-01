function findMatching(drivers, name) {
    const result = drivers.filter(element => element.toLowerCase().includes(name.toLowerCase()))
    return result
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(element => element.startsWith(string))
    return result
}

function matchName(drivers, string) {
    const result = drivers.filter(element => element.name === string)
    return result
}