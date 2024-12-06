export const formatDate = (dateProps: Date): string => {
  const today = new Date();

  // calculate the length between date
  const diffInSeconds = Math.floor(
    (today.getTime() - dateProps.getTime()) / 1000
  );
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInMinutes < 1) return `${diffInSeconds} saniyə əvvəl`;
  if (diffInHours < 1) return `${diffInMinutes} dəqiqə əvvəl`;
  if (diffInDays < 1) return `${diffInHours} saat əvvəl`;
  if (diffInDays < 7) return `${diffInDays} gün əvvəl`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} həftə əvvəl`;

  return new Intl.DateTimeFormat("en-GB").format(dateProps);
};
