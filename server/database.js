const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(db => console.log('Database is connected'))
  .catch(err => console.log('Error Database', err));

mongoose.set('useCreateIndex', true); // (for update of mongoose)
mongoose.set('useFindAndModify', false); // (for update of mongoose)