import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './index';


const pages = {
  'login': [ Pages.Login, {test: 123} ],
  'register': [Pages.Register],
  'nav': [Pages.Nav]
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  const [source, context] = pages[page];
  const container = document.getElementById('app');
  console.log(container);
  const templatingFunction = Handlebars.compile(source);
  container.innerHTML = templatingFunction(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('nav'));

document.addEventListener('click', e => {
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);
  e.preventDefault();
  e.stopImmediatePropagation();
};
})

