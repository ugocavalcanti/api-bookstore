import mongoose from "mongoose";

async  function connect() {
    const uri = "mongodb+srv://<user>:<password>@ugocluster.snyy3.mongodb.net/<database>?retryWrites=true&w=majority"

    return await mongoose.connect(uri, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
}

export { connect }
