const formatNumber = (number) => {

    if (number === 0) {
        return '0';
    }

    const suffixes = ['', ' mil', ' milhões', ' bilhões'];
    let suffixIndex = 0;

    while (number >= 1e3) {
        number /= 1e3;
        suffixIndex++;
    }

    const formattedNumber = new Intl.NumberFormat('pt-BR', {
        maximumFractionDigits: 1,
    }).format(number);

    return `${formattedNumber}${suffixes[suffixIndex]}`;
};

export default formatNumber;