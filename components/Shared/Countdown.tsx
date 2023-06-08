import { useState, useEffect } from "react";
import dayjs from "dayjs";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

export interface CountdownTimeProps {
  endtimeMs: number;
  setCanSettle: Function;
}

function CountdownTimer({ endtimeMs, setCanSettle }: CountdownTimeProps) {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(endtimeMs, setCanSettle);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endtimeMs]);

  //update remaining time var
  function updateRemainingTime(ms: number, setCanSattle: Function) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(ms, setCanSattle));
  }

  return (
    <div className="text-[60px] flex gap-10">
      {/* <span>{remainingTime.days}</span>
      <span>days</span> */}
      <span className="">
        {remainingTime.hours}
        <span className="">hr</span>
      </span>

      <span className="">
        {remainingTime.minutes}
        <span className="">min</span>
      </span>

      <span className="">
        {remainingTime.seconds}
        <span className="">sec</span>
      </span>
    </div>
  );
}

function getRemainingTimeUntilMsTimestamp(
  timestampMs: number,
  setCanSettle: Function
) {
  const timestampDayjs = dayjs(timestampMs * 1000);
  const nowDayjs = dayjs();

  if (timestampDayjs.isBefore(nowDayjs)) {
    setCanSettle(true);
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    };
  }

  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
  };
}

function getRemainingSeconds(
  newDayjs: dayjs.Dayjs,
  timestampDayjs: dayjs.Dayjs
) {
  const seconds = timestampDayjs.diff(newDayjs, "seconds") % 60;
  return padWithZeros(seconds, 2);
}

function getRemainingMinutes(
  newDayjs: dayjs.Dayjs,
  timestampDayjs: dayjs.Dayjs
) {
  const mintutes = timestampDayjs.diff(newDayjs, "minutes") % 60;
  return padWithZeros(mintutes, 2);
}

function getRemainingHours(newDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs) {
  const hours = timestampDayjs.diff(newDayjs, "hours") % 60;
  return padWithZeros(hours, 2);
}

function getRemainingDays(newDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs) {
  const days = timestampDayjs.diff(newDayjs, "days") % 24;
  return padWithZeros(days, 2);
}

function padWithZeros(number: number, minLength: number) {
  const numberString = number.toString();
  if (numberString.length >= minLength) return numberString;
  return "0".repeat(minLength - numberString.length) + numberString;
}

export default CountdownTimer;
