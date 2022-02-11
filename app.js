const express =require('express');
const PORT =5000;
const app = express();


app.set('views','./views')
app.set('view engine','ejs')
app.use('/Public', express.static('public'))


app.get('/', (req ,res)=>{
    // res.send('bonjour ali je viendrai chez toi ce soir')
    res.render('index');
    
})

// app.get('/movies', (req ,res)=>{
//     res.send('bientot les films')
   
// })
// app.get('/movies/:id', (req ,res)=>{
//     const id =req.params.id
//     res.send(`film numero ${id}`)
   
// })





app.get('/movies' , (req ,resp)=>{
    res.send('Bientot des films ici meme')
   
})
app.listen( PORT , ()=>{
    console.log(`listening on port ${PORT}`)
})
