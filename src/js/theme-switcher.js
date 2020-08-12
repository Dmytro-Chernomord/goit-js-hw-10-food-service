const refs = {
  button: document.querySelector('#theme-switch-control'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
refs.button.addEventListener('click', themeChange);

getStorage();
function getStorage() {
  const themeCheck = localStorage.getItem('Theme:');
  if (themeCheck === null || themeCheck === 'light-theme') {
    setLocalStorage(Theme.LIGHT);
    lightTheme();
  } else if (themeCheck === 'dark-theme') {
    darkTheme();
  }
}

function darkTheme() {
  refs.body.classList.add('dark-theme');
  refs.body.classList.remove('light-theme');
  refs.button.checked = true;
}

function lightTheme() {
  refs.body.classList.remove('dark-theme');
  refs.body.classList.add('light-theme');
}

function themeChange() {
  if (refs.button.checked) {
    darkTheme();
    setLocalStorage(Theme.DARK);
  } else {
    lightTheme();
    setLocalStorage(Theme.LIGHT);
  }
}

function setLocalStorage(info) {
  localStorage.setItem('Theme:', info);
}
