/** True when any part of the element is visible in the viewport. */
export function isInViewport(el: Element, bottomInset = 48) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - bottomInset && rect.bottom > 0;
}
