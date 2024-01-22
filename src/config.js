const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb+srv://chidinmaonyeri1:chidinma25@cluster0.nukzvad.mongodb.net/?retryWrites=true&w=majority')

connect
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });

  const reviewformSchema= new  mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      question1: {
        type: String,
        required: true,
      },
      question2: {
        type: String,
        required: true,
      },
      question3: {
        type: String,
        required: true,
      },
      question4: {
        type: String,
        required: true,
      },
      problems: {
        type: String,
        required: true,
      },
      feedback: {
        type: String,
        required: true,
      },

  })

  const collection=  mongoose.model('reviewdata',reviewformSchema)


  module.exports = collection;
