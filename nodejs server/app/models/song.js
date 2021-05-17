var mongoose = require('mongoose');

module.exports = mongoose.model('song',{
  id:{
    type:String,
    default:''
  },
  songname:{
    type:String,
    default:''
  },
  author:{
    type:String,
    default:''
  },
  genre:{
    type:String,
    default:''
  },
  quantity:{
    type:String,
    default:''
  },
  price:{
    type:String,
    default:''
  },
  date:{
    type:String,
    default:''
  }
});
