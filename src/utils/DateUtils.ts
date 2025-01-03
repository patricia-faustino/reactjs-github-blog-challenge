import { differenceInDays } from 'date-fns';

export const calculateDifferenceInDays = (dateString: string): number => {
  const today = new Date();
  const parsedDate = new Date(dateString);
  return differenceInDays(today, parsedDate);
};
