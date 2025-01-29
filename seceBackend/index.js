const express=require('express')
const path=require('path')
const mdb=require("mongoose")
const dotenv=require("dotenv")
const Signup=require("./models/signupSchema")
const bcrypt=require("bcrypt")
const cors=require("cors")
const app=express()
dotenv.config();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json())
mdb.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log(err)
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

app.post("/signup", async(req,res)=>{
    const {firstname,lastname,email,password}=req.body;
    var hashedPassword=await bcrypt.hash(password,10);
    try{
        const newCustomer=new Signup({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:hashedPassword
    });
    newCustomer.save();
    res.status(201).send("yooo!");
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
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }
        
        res.status(201).json({ message: "Login successful", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/update",async(req,res)=>{
    const user=await Signup.findOneAndUpdate({firstname:"luffy"},{$set:{firstname:"Monkey D Luffy"}});
    res.json("record updated");
    user.save();
});
app.listen(3001,()=>{
    console.log("server is started");
    
})