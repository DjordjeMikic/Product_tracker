export const capitalize = (a) => a[0].toUpperCase() + a.slice(1);

export const stripSlashes = (a) => a.replace(/\//gi, ' ');

export const capitalizeWords = (arr) => arr.split(' ').filter(a => !!a).map(a => capitalize(a));

export const getDate = (a) => {
    const d = a || new Date();
    const date = d.getDate();
    const month = d.toLocaleString('default', { month: 'long' });
    const year = d.getFullYear();
    const monthNum = d.getMonth();
    return {
        date,
        month,
        year,
        monthNum
    }
}