const { ServerSelectionError } = require('mongodb');
try {


const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
  // Code that may result in a ServerSelectionError
  throw new ServerSelectionError('Unable to select a server for the operation.');


} catch (error) {
 
    console.error('Caught a different error:', error);
  }

