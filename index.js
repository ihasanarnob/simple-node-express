
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('My first node!Copy second one. ehhe eehhee.me me me')
  })




const users = [
    {id:0,description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?' , name:'Engine Diagonistic',price:200,time:2,img: 'https://ibb.co/nsHmkZG'},
    {id:1,description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?' , name:'Replace Tire',price:300,time:2,img: 'https://ibb.co/MNX4nwV'},
    {id:2,description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?' , name:'Wheel Alignment',price:200,time:2,img: 'https://ibb.co/8DcWGwR'},
    {id:3,description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?' , name:'Replace Tire',price:200,time:2,img: 'https://ibb.co/QjGBmg9'},
    {id:4,description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?' , name:'Replace Tire',price:200,time:2,img: 'https://ibb.co/swzVc4Q'},
    {id:5,description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?' , name:'Replace Tire',price:200,time:2,img: 'https://ibb.co/yN93zjs'}
]

app.get('/users',(req,res) =>{
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }

});

// app method
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post',req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users/:id',(req,res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})
app.get('/fruits',(req,res)=>{
    res.send(['mango','peyara','komola','amra']);
})

app.get('/fruits/mangoes/lengra',(req,res) =>{
    res.send('lengra is the sweetest');
})

  app.listen(port, () => {
    console.log('listening to port',port)
  })