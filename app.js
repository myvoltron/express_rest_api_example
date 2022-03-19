const express = require('express'); 
const app = express(); 

// 임시 데이터
const posts = [
    { id: 1, title: 'title1', content: 'content1'},
    { id: 2, title: 'title2', content: 'content2'},
    { id: 3, title: 'title3', content: 'content3'},
]; 

app.set('port', 8083); 

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.get('/', (req, res) => {
    res.send('hi plz use api'); 
}); 

// 글 목록을 제공하는 라우팅
app.get('/api/post', (req, res) => {

    // 글 정보 반환
    res.json(posts); 
});

// Path Variable 을 이용한 글 세부정보 라우팅
app.get('/api/post/:id', (req, res) => {

    const postId = Number(req.params.id); 
    const post = posts.filter(post => {
        return post.id === postId;  
    }); 

    // 글 세부정보 반환
    res.json(post); 
}); 


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '에서 대기 중'); 
});