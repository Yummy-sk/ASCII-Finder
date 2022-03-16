export const $ = (selector: string): HTMLElement => document.querySelector(selector) as HTMLElement;
export const $$ = (selector: string): NodeListOf<Element> => document.querySelectorAll(selector) as NodeListOf<Element>;
