import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './index';


const pages = {
  'login': [ Pages.Login],
  'register': [Pages.Register],
  'profile': [Pages.Profile],
  'chat' : [Pages.Chat],
  '404' : [Pages.NotFound],
  '500' : [Pages.ServerError],
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

