const formatDateTime = (dateTime, includeTime = true) => {
  const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

  let options = dateOptions;

  if (includeTime) {
    options = { ...dateOptions, ...timeOptions };
  }

  const formattedDateTime = new Date(dateTime).toLocaleDateString('pt-BR', options);
  return formattedDateTime.replace(', ', ' - ');
};

export default formatDateTime;
