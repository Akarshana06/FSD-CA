
const express =require('express');
const app = express();
const {error} = {console};

const PORT =3194;

app.use(express.json())

app.get('/',(req,res)=>{
    return res.send({message:"Server is running is Fine!"})
})

app.post('/signup',(req,res)=>{
    const {Username,Email,Password,DateOfBirth}=req.body;

    if(!Username ||!Email || !Password || !DateOfBirth ){
        res.json({message: "All fields are required!" })
    }

    if(!Username ){
        res.json({message:"Username cannot be empty"})
    }
    if(!Email){
        res.json({message:"Email cannot be empty"})
    }
    if(Password.length() < 8 || Password.length() > 16 ){
        res.json({message:"Password length should be greater than 8 or less than or equal to 16"})
    }

    else{
        res.status(200).json({message:"User Signup is Successful!"})
    }
})



app.listen(PORT,
    console.log(`Server is running on http://localhost:${PORT}`)
)