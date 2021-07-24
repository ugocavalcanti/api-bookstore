import app from "./api.js";
import db from "./repositories/db/db.js";

app.listen("3000", async () => { 
    console.log("API started!!") 
    try{
        await db.authenticate()
        console.log("Connected do PostgreSQL.")
    }catch (error){
        console.log("Unable to connect to the database:", error);
    }
});
