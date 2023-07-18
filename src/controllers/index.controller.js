const{Pool} = require('pg')

const pool = new Pool ({
    host:'localhost',
    user: 'postgres',
    password: '2062',
    database: 'student',
    port:'5432'

 })



 const getUsers = async(req, res) => {
    const response = await pool.query( 'select*from students');
    res.status(200).json(response.rows);
    
 }
 const getUserByid = async(req, res) => {
   const id = req.params.id
   const response = await pool.query('select*from students where identification = $1', [id])
   res.json(response.rows)    
 }
 
 const CreateStudent = async(req, res) => {

   const {identification, names, surname} = req.body;
   
   const response =await pool.query('insert into students (identification, names, surname) values ($1,$2,$3)',[identification,names,surname] )
   console.log(response);

   res.json({
    message: 'User Added Succesfully',
    body: {
        student:{identification, names, surname}
    }
   });

    
 }
  
 const UpdateUser = async(req, res) => {
    const id = req.params.id;
    const {names, surname} = req.body;
    const response = await pool.query('update students set names =$1, surname=$2  where identification = $3', [
        names,
        surname,
        id
    ]);
    console.log(response);
    res.json('user update succesflly')



 }
 const DeleteUser = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('delete from students where identification = $1', [id]);
    console.log(response);
    res.json(`User ${id} Deleted Succesfully `)  
 }


module.exports = {
    getUsers,
    getUserByid,
    CreateStudent,
    UpdateUser,
    DeleteUser


}

