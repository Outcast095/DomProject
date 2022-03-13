const head = document.head;
const css = document.createElement('style')
head.append(css);





const body = document.body;
const container = document.createElement('div');
const header = document.createElement('header');
const logo = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul')

///////////////////////////////////////////////////css container style /////////////////////////////////////////////////////////
container.style.width = "1046px";
container.style.margin = "0 auto";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

body.prepend(container);
container.prepend(header);
header.prepend(nav);
nav.prepend(ul)
header.prepend(logo);


container.classList.add('container');
header.classList.add('headerStyle');
logo.classList.add('LogoStyle');
nav.classList.add('NavStyle')


logo.innerHTML = 'Relvise'


//header.innerHTML = 'Hello world';
