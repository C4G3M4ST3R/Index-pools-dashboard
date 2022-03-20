const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default {
  formatDate(date) {
    let year = new Date(date).getFullYear();

    if (year === 1970) year = new Date().getFullYear();

    return `${months[new Date(date).getMonth()].toUpperCase()} ${year}`;
  },
  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm.toUpperCase();
    return strTime;
  },
};
