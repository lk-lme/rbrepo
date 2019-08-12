/**
 * Takes a date object and converts it into a datetime
 * format for the <time /> element etc.
 */
function formatDateAsDateTime(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth()).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return [year, month, day].join('-');
}

export default formatDateAsDateTime;
