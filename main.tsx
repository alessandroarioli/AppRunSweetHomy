import app from 'apprun';
import Components from './components'

app.on('#', _ => app.run('#Home'))

app.on('//', route => {
  const menus = document.querySelectorAll('.navbar-nav li');
  for (let i = 0; i < menus.length; ++i) menus[i].classList.remove('active');
  const item = document.querySelector(`[href='${route}']`);
  item && item.parentElement.classList.add('active');
})

const view = (state) => 
<div className="container">
  <Components.Navigation />
  <div className="container" id="my-app"></div>
</div>

app.start('main', {}, view, {})


const element = 'my-app';

new Components.Home().mount(element);
new Components.About().mount(element);  
new Components.Contact().mount(element);
