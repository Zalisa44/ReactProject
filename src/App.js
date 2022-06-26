import Test from './Test';
import styles from './App.module.css'
import { Title } from './component'
import Bootstrap from './Bootstrap';
import './tailwind.css'
import Tailwind from './Tailwind';


function App() {


  // useEffect(() => {
  //   console.log(styles)
  // }, [])
  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme='dark'>{process.env.NODE_ENV}</Title>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      <Test className='App'></Test>
      {process.env.NODE_ENV === 'production'}

      <Bootstrap></Bootstrap>
      <Tailwind></Tailwind>

    </div>);

}

export default App;
