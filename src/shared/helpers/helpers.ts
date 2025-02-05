export const generateYears = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: currentYear - 1895 + 1 }, (_, i) => currentYear - i);
};

export const generateRating = () => {
  return Array.from({ length: 10 }, (_, i) => 10 - i);
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
