const express = require("express")
const app = express()
const { spawn } = require('child_process');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

// app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json());

// const corsOptions = {
//     origin: 'http://localhost:3000/', // Allow only this origin
//     credentials: true, // Allow credentials
//   };

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
}));
  

// app.options('/predict', cors(corsOptions));

const main = async () => {
    try {
        await app.listen(4000)
        console.log("server works on port 4000")
    } catch (error) {
        console.log(error)
    }
}

main();

app.get('/', (req,res) => {
    try {
        res.json("wroks")
    } catch (error) {
        res.json(error)
    }
})

app.post('/predict', async (req,res) => {
    try {
        const {book_name} = await req.body;
        console.log("this fucn "+book_name)
        
        const pythonProcess = spawn('python', ['predict_script.py', JSON.stringify(book_name)]);
        
        pythonProcess.stdout.on('data', (data) => {
            res.json(JSON.parse(data.toString()));
        });
        
        pythonProcess.stderr.on('data', (data) => {
            console.error(data.toString());
        });
        
    } catch (error) {
        console.log("wtf")
        console.log(error)
    }
})

app.post('/', (req,res) => {
    try {
        const {Books} = req.body;
        consolel.log(Books)
        console.log("wtfdfdf")
        
    } catch (error) {
        console.log("wtf")
        console.log(error)
    }
})

// app.get('/books', (req,res) => {
//     try {
//         res.json("wroks")
//     } catch (error) {
//         res.json(error)
//     }
// })

// app.get('/books', (req, res) => {


//     try {
//         fs.readFile('ml_files/second_books.json', 'utf8', (err, data) => {
//             if (err) {
//                 res.status(500).send('Error reading file');
//                 return;
//             }

            
//             res.setHeader('Content-Type', 'application/json');
//             res.json(JSON.parse(data.toString()));
//     //         const booksArray = JSON.parse(data);
//     //   res.send(booksArray);
//             // res.json(data);
//             // console.log(data)
//         });
//     } catch (error) {
//         alert(error)
//     }
    
// });

app.get('/books', async (req, res) => {
    try {
        const pythonProcess = await spawn('python', ['books_script.py']);
        
        pythonProcess.stdout.on('data', (data) => {
            res.json(JSON.parse(data.toString()));
            console.log(JSON.parse(data.toString()))
        });
        
        pythonProcess.stderr.on('data', (data) => {
            console.error(data.toString());
        });
    } catch (error) {
        alert(error)
    }
    
});