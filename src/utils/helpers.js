export const getLatestItems = (items, dateKey, limit) => {
    return items
        .sort((a, b) => new Date(b[dateKey]) - new Date(a[dateKey]))  // Sort by specified date key
        .slice(0, limit);                                             // Limit the results
};