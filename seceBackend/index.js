const express=require('express')
const path=require('path')
const mdb=require("mongoose")
const dotenv=require("dotenv")
const Signup=require("./models/signupSchema")
const app=express()
dotenv.config();

app.use(express.urlencoded());
app.use(express.json())
mdb.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log("not connected")
})

app.get('/',(req,res)=>{
    res.send("hi\n fellows");
})
app.get('/newPath',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.get('/newPath2',(req,res)=>{
    res.json({"key":"index.html"});
})

app.post("/signup", (req,res)=>{
    const {firstname,lastname,email,password}=req.body;
    try{
        const newCustomer=new Signup({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password
    });
    newCustomer.save();
    res.status(201).send("yooo!")
    console.log("value recived")
}catch(e){
    res.status(401).send("yooo!")
    console.log("unSuccessful")
}
})
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Signup.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const user_password=user.password;
        if (password!=user_password) {
            return res.status(401).json({ message: "Invalid password" });
        }
        
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


app.listen(3001,()=>{
    console.log("server is started");
    
})