const http = require('http');

const port = 3000;
const app = express;


const server = http.createServer((req, res) => {

});

server.listen(port , ()=>{
    console.log(`Server Running on Port ${port}.`);
}); 