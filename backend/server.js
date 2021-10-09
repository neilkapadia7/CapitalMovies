const express = require('express');
// import connectDB = './config/db.js'
const dotenv = require('dotenv');
const path = require('path');
// import mentorRoutes = './routes/mentorRoutes.js'
// import taskRoutes = './routes/taskRoutes.js'

dotenv.config()

const app = express();

// connectDB();

app.use(express.json());

// app.use('/api/mentors', mentorRoutes)
// app.use('/api/tasks', taskRoutes)

// const __dirname = path.resolve()
// if  (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '/build')))
  
//     app.get('*', (req, res) =>
//         res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
//     )
// }
// else {
//     app.get('/', (req, res) => {
//         res.send('API is running...');
//     });
// }

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Started on Port Number ${PORT}`))