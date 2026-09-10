const button = document.querySelector('.menu-button');
const navigation = document.querySelector('nav');

button.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  button.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  button.setAttribute('aria-expanded', 'false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();
