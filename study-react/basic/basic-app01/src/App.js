import logo from './logo.svg';
import './App.css';

const hero = {
  name: 'Tony Stark',
  imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Robert_Downey%2C_Jr._2012.jpg',
  imgSize: 120,
}
function MyButton() {
	return (
		<button>myButton</button>
	);
}

function App() {
  return (
    <div className='App'>
      <h1>{hero.name}</h1>
      <img className='profile'
           src={hero.imgUrl} alt={'Photo of ' + hero.name}
           style={{
            width: hero.imgSize,
            height: hero.imgSize,
            borderRadius: '50%',
           }} >
       </img>
    </div>
  );
}

export default App;