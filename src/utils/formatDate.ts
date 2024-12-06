export const formatDate = (dateProps: Date): string | null => {
  const today = new Date();

  // calculate the length between date
  const diffInDays = Math.floor(
    (today.getTime() - dateProps.getTime()) / (1000 * 3600 * 24)
  ); //convert to the day
  const diffInHours = Math.floor(
    (today.getTime() - dateProps.getTime()) / (1000 * 60 * 60)
  ); //convert to the hours
  const diffInMinutes = Math.floor(
    (today.getTime() - dateProps.getTime()) / (1000 * 60)
  ); //convert to the minutes
  const diffInSeconds = Math.floor(
    (today.getTime() - dateProps.getTime()) / 1000
  ); //convert to the second 

  if (diffInMinutes >= 1 && diffInMinutes <= 59) {
    return `${diffInMinutes} dəqiqə əvvəl`;
  } else if (diffInHours >= 1 && diffInHours <= 23) {
    return `${diffInHours} saat əvvəl`;
  } else {
    if (diffInDays > 0 && diffInDays <= 6) {
      return `${diffInDays} gün əvvəl`;
    } else if (diffInDays > 6 && diffInDays <= 30) {
      return `${Math.floor(diffInDays / 7)} həftə əvvəl`;
    } else if (diffInDays > 30) {
      const formatter = new Intl.DateTimeFormat("en-GB");
      return formatter.format(dateProps); // return like DD/MM/YYYY
    } else {
      return `${diffInSeconds} saniyə əvvəl`;
    }
  }
};
