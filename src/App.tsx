import React, {useCallback, useState} from 'react';
import styles from './App.module.scss';

function App() {

  const [joke, setJoke] = useState<string>('');

  const getJoke = useCallback(async () => {
    setJoke('Loading...');

    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    });

    setJoke((await res.json()).joke);
  }, []);


  return (
    <div className={styles.container}>
        <button onClick={getJoke} className={styles.button}>Tell me a Dad joke</button>
        {joke && <p className={styles.joke}>{joke}</p>}
    </div>
  );
}

export default App;
