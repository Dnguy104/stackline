import apiData from '../assets/Webdev_data2.json';

export const fetchData = () =>
  new Promise(resolve => {
    setTimeout(() =>
      resolve(apiData[0]), 500);
  });
