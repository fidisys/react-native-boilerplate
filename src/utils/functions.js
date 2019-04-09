import moment from 'moment';

export default function checkDaysLeft(startTime, endTime) {
  const remainingTime = endTime - startTime;
  const difference = new moment.duration(remainingTime / 1000); // eslint-disable-line new-cap
  return difference._data.days; // eslint-disable-line no-underscore-dangle
}
