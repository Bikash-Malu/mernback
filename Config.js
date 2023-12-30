const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
const { ServerSelectionError } = require('mongodb');
// Example: Simulating a ServerSelectionError
try {
  // Code that may result in a ServerSelectionError
  throw new ServerSelectionError('Unable to select a server for the operation.');
} catch (error) {
  if (error instanceof ServerSelectionError) {
    console.error('Caught a ServerSelectionError:', error.message);
  } else {
    console.error('Caught a different error:', error);
  }
}
