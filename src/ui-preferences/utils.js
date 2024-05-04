export function createEl(string){
  const $el = document.createElement('div');
  $el.innerHTML = string;
  return $el.firstElementChild;
}

/**
 * @param {string} selector The selector
 * @param {Element} el The element to select from
 * @returns {Element | null}
 */
export function qs(selector, el = document) {
  return el.querySelector(selector);
}
