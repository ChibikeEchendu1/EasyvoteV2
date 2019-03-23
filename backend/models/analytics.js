const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
Schema for analytics data
*/

AnalyticsSchema = new Schema({
  description: {    // Short string describing data
    type: String,
    required: true
  },
  electionID: {     // Reference to the election which the data represents
    type: Schema.Types.ObjectId,
    ref: 'election',
    required: true
  },
  dataPoints: {   // Array of numbers to be plotted in chart
    type: [Number],
    required: true
  },
<<<<<<< HEAD
  dataLabels: {   // Array of labels for each of data point
=======
  dataLabels: {
>>>>>>> 9f0c398ae9ead3683aa7e09c80de45a55952ab9f
    type: [String],
    required: true
  },
  tag: {        // Short tag to identify type of analytic
    type: String,
    enum: ['count', 'gender', 'avgAge', 'ageGroup', 'province'],
    required: true
  }
});

const Analytics = mongoose.model('Analytics', AnalyticsSchema);
module.exports = Analytics;
