export const ItemList = (items: string[]) => {
    if (!items) {
        return ''
    }
    let itemList = ''
    for (let i = 0; i < items.length; i++) {
        if (i === 0) {
            itemList = items[i]
        } else {
            itemList = `${itemList}, ${items[i]}`
        }
    }
    return itemList
}