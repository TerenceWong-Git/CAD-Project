import { Weekday } from '@prisma/client';

const workingHourData = [
  {
    weekday: Weekday['Monday'],
    hours: '24小時開放',
  },
  {
    weekday: Weekday['Monday'],
    hours: '10:00am - 8:00pm',
  },
  {
    weekday: Weekday['Tuesday'],
    hours: '10:00am - 8:00pm',
  },
  {
    weekday: Weekday['Wednesday'],
    hours: '10:00am - 8:00pm',
  },
  {
    weekday: Weekday['Thursday'],
    hours: 'Closed',
  },
  {
    weekday: Weekday['Friday'],
    hours: '10:00am - 8:00pm',
  },
  {
    weekday: Weekday['Saturday'],
    hours: '10:30am - 8:30pm',
  },
  {
    weekday: Weekday['Sunday'],
    hours: '10:00am - 8:30pm',
  },
];

export default workingHourData;
