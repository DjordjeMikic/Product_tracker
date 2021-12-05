export const generateToken = () => {
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for(let i = 0; i < 20; i++) {
        result = result + possible[Math.floor(Math.random() * possible.length)];
    }
    return result;
}