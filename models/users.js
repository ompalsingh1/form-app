const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String
        

    },
    email: {
        type: String
        

    },

    phone: {
        type: Number
        
    },

    image: {
        type: String
        
    },
    created: {
        type: Date,
        required: true,
        default: Date.now,
    },
    
});

const User = mongoose.model("User", userSchema);

module.exports = User;

// module.exports = mongoose.model('Data',userSchema);