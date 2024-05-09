const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173",Credential:true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
   try{
    // res.status(200).json({username})
    const r = await axios.put(
     "https://api.chatengine.io/users/",
        {username:username,secret:username,first_name:username},
        {headers:{"private-key":"be4cc75a-fd80-4232-a87e-e103105d972b"}}
    )
    return res.status(r.status).json(r.data)
   }catch(e){
    return res.status(e.response.status).json(e.response.data);
   }
});

app.listen(3001);

