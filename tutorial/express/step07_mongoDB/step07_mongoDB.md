ROUTE	METHOD	DESCRIPTION
/api/books	GET	모든 book 데이터 조회
/api/books/:book_id	GET	 _id 값으로 데이터 조회
/api/books/author/:author	GET	author 값으로 데이터 조회
/api/books	POST	book 데이터 생성
/api/books/:book_id	PUT	book 데이터 수정
/api/books/:book_id	DELETE	book 데이터 제거

mongoDB 테스트 하기 전에 /data 폴더를 생성시킬 것.

mac 에서 `npm start` 시 mongo 서버실행과 동시에 server 구동시키는 방법.
http://antrikshy.com/blog/run-mongodb-automatically-nodejs-project

윈도우에서는 먼저 mongo 서버를 먼저 실행한 후에, `node app.js` 을 실행하여 구동시키도록 한다.