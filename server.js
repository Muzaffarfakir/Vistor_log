/// require
let express = require("express");
let app = express();
let mongoose = require("mongoose");
let cors = require("cors");
let jwt = require("jsonwebtoken");
const { Mongoose } = require("mongoose");
let { ObjectId } = require("mongodb")

let port = 8000;


///cors settibg
app.use(cors());
app.use(express.json());

//connection of db
let url = "mongodb+srv://fakirmuzaffar771:Muzaffar@cluster0.5em0gah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url).then(() => {
    console.log("sucessfully Connected ")
}).catch((er) => {
    console.log(er)
})
//define schema
let schemeData = mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    pass: String,
    users: [
        {
            user_name: String,
            user_age: Number,
            user_MN: Number,
            initNum: [],
            ConRoom: String,
        }
    ]
})

let collectionDb = new mongoose.model("collection", schemeData);


app.post("/sign", async (req, res) => {

    try {
        let email_check = await collectionDb.findOne({ email: req.body.email });
        console.log(email_check)

        if (email_check) {
            res.send("Email_found");
            return


        }
        let data = new collectionDb({
            name: req.body.name,
            email: req.body.email,
            pass: req.body.pass,
        });
        await data.save();
        res.send("sucess")

    } catch (er) {
        console.log(er)
    }

})
app.post("/login", async (req, res) => {
    try {
        //   console.log(req.body)
        let data = await collectionDb.findOne({ email: req.body.email, pass: req.body.pass });
        if (!data) {
            res.json({ mes: "invalid" })
        }
        else {
            let token = jwt.sign({ id: data._id }, "MUJJJJJJJJJJUUUUJUJ", { expiresIn: "24h" })
            res.json({ mes: "valid", dataa: data, token: token })
        }

    } catch (er) {
        res.send("er")
    }
});
app.post("/ext", async (req, res) => {
    try {
        let getData = req.body.getData;

        await collectionDb.updateMany({
            _id: new mongoose.Types.ObjectId(getData),
        }, {

            $push: {
                users: {
                    $each: [{
                        user_name: req.body.name,
                        user_MN: req.body.number,
                        user_age: req.body.age,
                        initNum: req.body.initNum,
                        ConRoom: req.body.ConRoom,
                    }]
                }
            }

        }, { upsert: true },
        );
    } catch (er) {
        res.send({ mes: "error" });
    }
    res.json({ mes: 'err' })
})

app.post("/get_data", async (req, res) => {
    let data = await collectionDb.findOne({email:req.body.email});
    console.log(data,req.body.email);
    if (!data) {
        res.send("err");
    }
    else {
        res.send(data)
    }
});
app.post("/del", async (req, res) => {
    try {

        const mainId = req.body.i;  // parent document id
        const subId = req.body.id;  // subdocument id

        const result = await collectionDb.updateOne(
            { _id: new ObjectId(mainId) },
            { $pull: { users: { _id: new ObjectId(subId) } } }
        );

        if (result.modifiedCount > 0) {
            res.json({ success: true, message: "Sub-user deleted" });
        } else {
            res.json({ success: false, message: "Sub-user not found" });
        }
    } catch (error) {
        console.error("Error deleting:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
});







app.listen(port);
