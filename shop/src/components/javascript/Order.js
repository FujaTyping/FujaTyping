function oridg() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const orderIdLength = 6;
    let OrderId = '';

    for (let i = 0; i < orderIdLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        OrderId += characters.charAt(randomIndex);
    }

    return OrderId;
}

export default oridg;