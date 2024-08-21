export function dateFormat(date) {
  let convertDate = date.toISOString().slice(0, 10).replace("T", " ");
  return convertDate;
}
