

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

