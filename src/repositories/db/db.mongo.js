import mongoose from "mongoose";

async  function connect() {
    const uri = "mongodb+srv://ugocavalcanti:Iqz8S7CUa9jOcj19@ugocluster.snyy3.mongodb.net/bookstore?retryWrites=true&w=majority"

    return await mongoose.connect(uri, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
}

export { connect }