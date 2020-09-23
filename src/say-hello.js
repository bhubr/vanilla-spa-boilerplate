export default function sayHello(selector) {
  const element = document.querySelector(selector);
  element.innerHTML = 'Hello!';
}