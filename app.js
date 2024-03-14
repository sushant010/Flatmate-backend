const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const roommateRoutes = require('./routes/roommateRoutes'); 
const findRoomRoutes = require('./routes/findRoomRoutes');
const verificationFlatRoutes = require('./routes/verificationFlatRoutes');


dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(cors({
  origin: ['http://localhost:3000']
}));

app.use(express.json());

app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/roommate', roommateRoutes); 
app.use('/room', findRoomRoutes);
app.use('/verification-flat', verificationFlatRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
