const express = require('express'); 
const app = express(); 

app.set('port', 8080); 

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '에서 대기 중'); 
});