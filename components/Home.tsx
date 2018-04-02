import app, {Component} from 'apprun';

export default class HomeComponent extends Component {
  state = {
    title: 'Homy',
    subtitle: 'Hello from home component!'
  }

  view = (state) => {
    return <div>
      <h2>{state.title}</h2>
      <h3>{state.subtitle}</h3>
    </div>
  }

  update = {
    '#Home': state => state,
    'hello-world': () => console.log('hello world!')
  }
}

