const formatNumber = (number) => {
  
    const units = ['', 'mil', 'milhões'];
  
    const convertChunk = (chunk) => {
      const [integerPart, decimalPart] = chunk.split('.');
  
      const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
      let result = formattedIntegerPart;
  
      if (decimalPart && parseInt(decimalPart) !== 0) {
        result += `.${decimalPart}`;
      }
  
      return result;
    };
  
    const chunks = number.toString().split(',');
  
    if (chunks.length > 2) {
      throw new Error('Invalid number format.');
    }
  
    const integerPart = chunks[0];
    const decimalPart = chunks[1] || '0';
  
    const result = [];
  
    if (integerPart !== '0') {
      const integerChunks = integerPart.match(/\d{1,3}(?=(\d{3})*$)/g).reverse();
  
      for (let i = 0; i < integerChunks.length; i++) {
        const formattedChunk = convertChunk(integerChunks[i]);
        if (formattedChunk !== '0') {
          result.push(formattedChunk + ' ' + units[i]);
        }
      }
    }
  
    return result.reverse().join(' ');
  };

export default formatNumber;