var contactList = [
  {name: 'Ned Stark', email: 'ned@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Winter is coming.'},
  {name: 'Theon Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Reluctant to pay iron price.'},
  {name: 'Samwell Tarly', email: 'starly@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Loyal brother of the watch.'},
  {name: 'Jon Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Knows nothing.'},
  {name: 'Arya Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Has a list of names.'},
  {name: 'Jora Mormont', email: 'khaleesifan100@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Lost in the friend-zone.'},
  {name: 'Tyrion Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Currently drunk.'},
  {name: 'Stannis Baratheon', email: 'onetrueking@dragonstone.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Nobody expects the Stannish inquisition.'},
  {name: 'Hodor', email: 'hodor@hodor.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Hodor? Hodor... Hodor!'},
  {name: 'Margaery Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Keeper of kings.'},
  { name: 'Brienne of Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not cross her.'},
  { name: 'Petyr Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not trust anyone.'},
  ]


express = require('express')
app = express()
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.use(express.static('public'))



app.get('/', (req, res) => {
  res.render('home',{contact: contactList,body:'default'})
})
app.get('/contact-info/:id', (req, res) => {
  res.render('info',{contact: contactList,id:req.params.id})
})
app.get('/add', (req, res) => {
  res.render('add',{contact: contactList,id:req.params.id})
})
app.get('/edit/:id', (req, res) => {
  res.render('edit',{contact: contactList,id:req.params.id})
})
app.post('/add', (req, res) => {
  contactList.push({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    url: req.body.url,
    notes: req.body.notes
  });
  res.redirect('/');
})
app.get('/api/getjson', (req, res) => {
  res.json(contactList);
})

app.listen(8000,
  () => console.log("Server is Running => http://127.0.0.1:8000"))