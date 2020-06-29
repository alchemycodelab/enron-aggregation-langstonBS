
<<<<<<< HEAD
const emailRecipients = [
  { $project: { date: { $dateToString: { format: '%Y-%m-%d', date: '$headers.Date' } } } },
  { $group: { _id: '$date', count: { $sum: 1 } } },
  { $group: { _id: null, min: { $min: '$count' }, max: { $max: '$count' }, avg: { $avg: '$count' } } }
];

module.exports = { emailRecipients };
=======
[
  { $unwind: '$headers.To' },
  { $project: { to: '$headers.To', day: { $dateToString: { format: '%Y-%m-%d', date: '$headers.Date' } } } },
  { $group: { _id: '$to', count: { $sum: 1 } } },
  { $sort: { 'count': -1 } }
];

module.exports = [];
>>>>>>> 37f9141448340fc710c1ba8f5ce8bbd552d0fead
