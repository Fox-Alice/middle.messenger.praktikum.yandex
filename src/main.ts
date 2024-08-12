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
   //@ts-ignore
  const [source, context] = pages[page];
  const container = document.getElementById('app');
  console.log(container);
   //@ts-ignore
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('nav'));

document.addEventListener('click', e => {
   //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);
  e.preventDefault();
  e.stopImmediatePropagation();
};
})

console.log(pages);

