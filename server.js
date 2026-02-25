import http from 'http';
import decrypt  from 'dotenv';
decrypt.config();

const port = process.env.PORT || 3000;

const server = http.createServer(async(req, res)=>{



});

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
