const mongoose = require('mongoose');
async function main() {

    if(mongoose.connection.readyState==1)
    {
        return mongoose.connection.asPromise();
    }
    else
    {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection succesful");
    }
}

export default main;