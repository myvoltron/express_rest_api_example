# express_rest_api_example

`expree-rest-api-example을 만들어보자 post에 대한 간단한 CRUD를 할 것이다.` 

### API 스펙은?

1. 글 목록 
    - 엔드 포인트 : [GET] /api/posts
    - 설명 : post들의 목록을 반환합니다.
    - request example
        
        URL : [GET] /api/posts
        
        Body : N/A
        
    - reponse example
        
        ```json
        [
            {
                "id": 1,
                "title": "title1",
                "content": "content1"
            },
            {
                "id": 2,
                "title": "title2",
                "content": "content2"
            },
            {
                "id": 3,
                "title": "title3",
                "content": "content3"
            }
        ]
        ```
        
2. 글 상세보기
    - 엔드 포인트 : [GET] /api/posts/:id
    - 설명 : id값에 해당되는 post를 반환합니다.
    - request example
        
        URL : [GET] /api/posts/:1
        
        Body : N/A
        
    - reponese example
        
        ```json
        [
            {
                "id": 1,
                "title": "title1",
                "content": "content1"
            }
        ]
        ```
        
3. 글 추가하기
    - 엔드 포인트 : [POST] /api/posts
    - 설명 : `{ title: String, content: String }` 를 받아 글을 추가합니다. 새로 추가되는 글의 id는 원래 post 배열에서 제일 큰 id값 + 1입니다. 성공 여부와 추가되는 글 정보를 반환합니다.
    - request example
        
        URL : [POST] /api/posts
        
        Body : `[{"key":"title","value":"asdf"}, {"key":"content","value":"asdfasdf"}]`
        
    - reponese example
        
        ```json
        {
            "success": true,
            "data": {
                "id": 4,
                "title": "asdf",
                "content": "asdfasdf"
            }
        }
        ```
        
4. 글 수정하기
    - 엔드 포인트 : [PUT] /api/posts/:id
    - 설명 : `{ title: String, content: String }` 를 받아 id에 해당되는 글을 수정합니다. 성공여부와 수정된 이후의 글 목록을 반환합니다.
    - request example
        
        URL : [PUT] /api/posts/1
        
        Body : `[{"key":"title","value":"updated"}, {"key":"content","value":"updatedPost"}]`
        
    - reponese example
        
        ```json
        {
            "success": true,
            "updatedPosts": [
                {
                    "id": 1,
                    "titel": "updated",
                    "content": "updatedPost"
                },
                {
                    "id": 2,
                    "titel": "title2",
                    "content": "content2"
                },
                {
                    "id": 3,
                    "titel": "title3",
                    "content": "content3"
                }
            ]
        }
        ```
        
5. 글 삭제하기
    - 엔드 포인트 : [DELETE] /api/posts/:id
    - 설명 : id에 해당되는 글을 삭제합니다. 성공여부와 삭제된 이후의 글 목록을 반환합니다.
    - request example
        
        URL : [DELETE] /api/posts/1
        
        Body : N/A
        
    - reponese example

        ```json
        {
            "success": true,
            "deletedPosts": [
                {
                    "id": 2,
                    "title": "title2",
                    "content": "content2"
                },
                {
                    "id": 3,
                    "title": "title3",
                    "content": "content3"
                }
            ]
        }
        ```
        