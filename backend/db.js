const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://sheguey:b6HpZ9nX8NwvGT46@cluster0.tozqnmx.mongodb.net/CrudDB", (err) => {
//   if (!err) console.log("MongoDB connection succeeded....");
//   else
//     console.log(
//       "Error in DB connection : " + JSON.stringify(err, undefined, 2)
//     );
// });


mongoose.connect('mongodb://mongodb:27017/storesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});


module.exports = mongoose;
