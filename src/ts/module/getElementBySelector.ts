const getHTMLElementBySelector = <T extends HTMLElement>(selector: string): T => {
  return document.querySelector(`.${selector}`) as T;
};

const getElementBySelector = <T extends  Element>(selector: string): T => {
  return document.querySelector(`.${selector}`) as T;
};

export { getElementBySelector, getHTMLElementBySelector };
