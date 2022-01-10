const db = require('../db.config')

exports.getAllUsers = (req, res) => {

          const sql ="SELECT * FROM user"
          db.query(sql,(err,result,field)=>{
                if(err){
                   res.send({err:err.message,data:res});
                }else{
                  res.send(result)
                }
          })
};
exports.getUsedById = (req, res) => {
  res.send("Hello i'm User Id");
};
exports.deleteUserId = (req, res) => {
  res.send("Delete");
};
exports.addUser=(req,res)=>{
res.send("add user")
}