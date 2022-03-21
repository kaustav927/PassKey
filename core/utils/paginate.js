export function paginate (items, topMostPassIndex, pageSize){
    const startItem = (topMostPassIndex);
    const pageItems = items.slice(startItem, startItem+pageSize);
    return(pageItems);
}

/**
 * This function returns the list of pages to be rendered based on the right/left button that user clicks on. 
 */
