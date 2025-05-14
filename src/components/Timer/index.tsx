import {useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';

const Timer = () => {
  const newExhibitionDate = new Date(2025, 6, 25, 15, 35);
  const [timerLabel, setTimerLabel] = useState<string | null>(null);

  const timer = useRef<number | undefined>(undefined);

  const formatTimeLeft = (date: Date) => {
    const now = new Date();
    const dateDiff = date.getTime() - now.getTime();
    const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}min ${seconds}sec`;
  };

  useEffect(() => {
    timer.current = setInterval(
      () => setTimerLabel(formatTimeLeft(newExhibitionDate)),
      5000,
    );

    return () => {
      timer.current && clearInterval(timer.current);
    };
  }, []);

  if (timerLabel) {
    return <TimerCaption>{`Time until our next exhibition: \n${timerLabel}`}</TimerCaption>
  }

  return <></>
};

export default Timer;

const SubHeader = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
  color: ${({color}) => color};
`;

const TimerCaption = styled(SubHeader)`
  color: #ed9e30;
`;
