export const getSavedDate = function () {
  return localStorage.getItem('targetDate');
};
export const getSavedTheme = function () {
  return JSON.parse(localStorage.getItem('theme'));
};
export const getSavedTitle = function () {
  return localStorage.getItem('title');
};
export const saveDate = function (date) {
  localStorage.setItem('targetDate', date);
};
export const saveTitle = function (title) {
  localStorage.setItem('title', title);
};
export const saveTheme = function (theme) {
  localStorage.setItem('theme', JSON.stringify(theme));
};
