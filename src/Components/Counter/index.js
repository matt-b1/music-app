import { useEffect, useRef, useState } from 'react'

export const Countdown = () => {
    const setBg = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
      }
    const [timeLeft, setTimeLeft] = useState(30);
    const intervalRef = useRef(); 
    useEffect(() => {
        intervalRef.current = setInterval(() => {
        setTimeLeft((t) => t - 1);
        }, 1000);
    }, []);
    useEffect(() => {
        if (timeLeft <= 0) {
            setBg();
            setTimeLeft(30);
        }
    }, [timeLeft]);

}

export default Countdown;
