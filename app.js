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

// 글 목록으로 리다이렉트 
app.get('/', (req, res) => {

    res.redirect('/api/post');
}); 

// Index
// 글 목록을 제공하는 라우팅
app.get('/api/post', (req, res) => {

    // 글 정보 반환
    res.json(posts); 
});

// Show
// Path Variable 을 이용한 글 세부정보 라우팅
app.get('/api/post/:id', (req, res) => {

    const postId = Number(req.params.id); 
    const post = posts.filter(post => {
        return post.id === postId;  
    }); 

    // 글 세부정보 반환
    res.json(post); 
}); 

// Create
// 글 추가 라우팅 
app.post('/api/post', (req, res) => {

    const title = req.body.title;
    const content = req.body.content; 
    const lastId = posts[posts.length - 1] ? posts[posts.length - 1].id + 1 : 0; // 추가할 글의 id

    const postObj = {
        id: lastId, 
        title: title,
        content: content, 
    }; 

    try {
        posts.push(postObj); 
        res.json({ success: true, data: postObj });
    } catch (error) {
        res.json({ success: false, message: error }); 
    }
});

// Update
// 글 수정 라우팅
app.patch('/api/post/:id', (req, res) => {

    const title = req.body.title;
    const content = req.body.content; 

    const id = parseInt(req.params.id); 
    if(!id) {
        return res.json({ success: false, message: "올바른 글 번호를 입력해주세요" }); 
    }

    const updatedPosts = posts.map(post => {                 // map을 통해 해당 id의 글이 수정된 버전의 배열을 반환한다. (원본배열은 그대로)
        if(post.id === id) {
            post.title = title; 
            post.content = content; 
        }

        return {
            id:post.id,
            titel:post.title,
            content:post.content, 
        }
    }); 

    res.json({ success: true, updatedPosts }); 
}); 

// Delete
// 글 삭제 라우팅
app.delete('/api/post/:id', (req, res) => {

    const id = parseInt(req.params.id);
    if(!id) {
        return res.json({ success: false, message: "올바른 글 번호를 입력해주세요" }); 
    }

    const deletedPosts = posts.filter(post => { // filter를 통해 해당 id의 글이 삭제된 배열을 반환한다. (원본배열은 그대로)
        if(post.id === id) return false; 

        return true; 
    });

    res.json({ success: true, deletedPosts }); 
}); 


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '에서 대기 중'); 
});