import express from 'express'
const app = express();
const jokes = [
    {
      id: 1,
      title: "Why dont programmers like nature?",
      joke: "It has too many bugs!"
    },
    {
      id: 2,
      title: "How do you comfort a JavaScript bug?",
      joke: "You console it!"
    },
    {
      id: 3,
      title: "Why do programmers prefer dark mode?",
      joke: "Because light attracts bugs!"
    },
    {
      id: 4,
      title: "Whats a programmers favorite hangout place?",
      joke: "The Foo Bar!"
    }
  ];
app.get('/', (req, res) => {
    res.send("server is readyfor me ");
})
app.get('/api/jokes',(req,res)=>{
    
    res.send(jokes);
})
const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})