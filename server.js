const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = {
    myBudget: [
    {
        title: 'Eat out',
        budget: 25
    },
    {
        title: 'Rent',
        budget: 375
    },
    {
        title: 'Furniture',
        budget: 110
    },
    ]
};

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});
  
const myBudget = require("./myData.json")
app.get( '/budget',(req,res)=>{
    res.json(myBudget);
}
)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});