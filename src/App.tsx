import React, {useCallback, useState} from 'react';
import styles from './App.module.scss';
import useJoke from "./useJoke";

function App() {

  const {joke, getJoke} = useJoke();

  return (
    <div className={styles.container}>
        <button onClick={getJoke} className={styles.button}>
          Tell me a Dad joke
        </button>

        {joke && <p className={styles.joke}>{joke}</p>}
    </div>
  );
}

export default App;
