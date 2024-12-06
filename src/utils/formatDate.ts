export const formatDate = (dateProps : Date) : string | null => {
  const today = new Date();

  // calculate the length between date
  const differenceBetween = Math.floor(
    (today.getTime() - dateProps.getTime()) / (1000 * 3600 * 24)
  ); //convert from second to the day

  if (differenceBetween > 0 && differenceBetween <= 6) {
    return `${differenceBetween} gün əvvəl`;
  } else if (differenceBetween > 6 && differenceBetween <= 30) {
    return `${Math.floor(differenceBetween / 7)} həftə əvvəl`;
  } else if (differenceBetween > 30) {
    const formatter = new Intl.DateTimeFormat("en-GB");
    return formatter.format(dateProps); // return like DD/MM/YYYY
  } else {  
    return null;
  }
};
