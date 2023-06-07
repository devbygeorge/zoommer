export function isPageScrolledDown() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return scrollTop > 90;
}
