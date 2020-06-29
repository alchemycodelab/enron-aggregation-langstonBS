

<<<<<<< HEAD
const emailsPerDay = [
  { $unwind: '$headers.To' },
  { $project: { to: '$headers.To', day: { $dateToString: { format: '%Y-%m-%d', date: '$headers.Date' } } } },
  { $group: { _id: '$to', count: { $sum: 1 } } },
  { $sort: { 'count': -1 } }
]; 

module.exports = { emailsPerDay } ;
=======
[{
  $project: {
    date: {
      $dateToString: { format: '%Y-%m-%d', date: '$headers.Date' }
    }
  }
}, {
  $group: {
    _id: 'date', count: { $sum: 1 }
  }
}, {
  $group: {
    _id: null, avg: { $avg: '$count' }, min: { $min: '$count' }, max: { $max: '$count' }
  }
}];
module.exports = [];

>>>>>>> 37f9141448340fc710c1ba8f5ce8bbd552d0fead
