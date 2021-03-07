import React, { useState, useEffect } from 'react';
import {
  differenceInMilliseconds,
  intervalToDuration,
  isAfter,
} from 'date-fns';
import { useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';

import { finishTimeSelector } from 'store/modules/room/selectors';

const Timer = () => {
  const now = new Date();
  const finishTime = useSelector(finishTimeSelector);
  const diffMilliseconds = differenceInMilliseconds(now, finishTime);
  const [duration, setDuration] = useState(
    intervalToDuration({ start: 0, end: diffMilliseconds })
  );
  const formattedMinutes = duration.minutes.toLocaleString('en-us', {
    minimumIntegerDigits: 2,
  });
  const formattedSeconds = duration.seconds.toLocaleString('en-us', {
    minimumIntegerDigits: 2,
  });

  useEffect(() => {
    const myInterval = setInterval(() => {
      const { seconds, minutes } = duration;

      if (seconds > 0) {
        setDuration({
          seconds: seconds - 1,
          minutes,
        });
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setDuration({
            minutes: minutes - 1,
            seconds: 59,
          });
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [duration]);

  const timeLeft = isAfter(now, finishTime)
    ? '00:00'
    : `${formattedMinutes}:${formattedSeconds}`;

  return (
    <TextField
      id="time-left"
      label="Tempo restante"
      type="text"
      disabled
      value={timeLeft}
    />
  );
};

export default Timer;
