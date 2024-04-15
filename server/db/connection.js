const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://wobot:wobot@cluster0.qm1umai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to database');
  } catch (error) {
    console.log('Error connecting to database:', error.message);
  }
};

module.exports = connectToDatabase;