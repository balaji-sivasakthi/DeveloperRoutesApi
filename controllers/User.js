const db = require('../db.config')
const {escape} = require('mysql')

exports.getAllUsers = (req, res) => {

          const sql ="SELECT * FROM users"
          db.query(sql,(err,result,field)=>{
                if(err){
                   res.send({err:err.message,data:[]});
                }else{
                  res.status(200).json(result);
                }
          })
};

exports.getUsedById = (req, res) => {
  const sql ="SELECT * FROM users WHERE id ="+escape(req.params.id)
       
          db.query(sql,(err,result)=>{
                if(err){
                   res.send({err:err.message,data:[]});
                }else{
                  res.status(200).json(result);
                }
          })
};

exports.deleteUserId = (req, res) => {
  const sql ="DELETE FROM users WHERE ID ="+escape(req.params.id)
       
  db.query(sql,(err,result)=>{
        if(err){
           res.send({err:err.message,data:[]});
        }else{
          res.status(200).json(result);
        }
  })
};

exports.deleteAllUser = (req, res) => {
  const sql ="DROP TABLE users"
       
  db.query(sql,(err,result)=>{
        if(err){
           res.send({err:err.message,data:[]});
        }else{
          res.status(200).json({"INFO":"TABLE DELETED ","RESULT":result});
        }
  })
};

exports.addUser=async(req,res)=>{
  //res.json(req.body)
   const sql ="INSERT INTO users (ID,name,email,pass,mobile,qualification) VALUE ?"
  
  const findMax = ()=>{
    return new Promise((res,rej)=>{
      db.query("SELECT Max(ID) as id FROM users",(err,result)=>{
        if(err){
          resj(0)
        }
        else{
          res(++(result[0].id))
        }
      })
    })
  } 
  
  //console.log(findMax());

  const value=[[await findMax(),
            req.body.name,
            req.body.email,
            req.body.pass,
            req.body.mobile,
            req.body.qualification]]
       
            console.log(value)
  db.query(sql,[value],(err,result)=>{
        if(err){
           res.send({err:err.message,data:[]});
        }else{
          res.status(200).json(result);
        }
  })
}