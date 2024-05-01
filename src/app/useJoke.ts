import {useCallback, useState} from "react";

export default function useJoke() {
  const [joke, setJoke] = useState<string>('');

  const getJoke = useCallback(async () => {
    setJoke('Loading...');

    try {
      const res = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json'
        }
      });

      setJoke((await res.json()).joke);
    } catch (e) {
      setJoke('Failed to fetch joke');
    }
  }, []);

  return { joke, getJoke };
}