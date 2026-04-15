const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ifsuldeminas",
    database: "ecommerce"
})

exports.create = (user, callback) => {
   const sql = "INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)"
   db.query(sql, [user.name, user.email, user.password, user.role], callback)
}

exports.getById = (id, callback) => {
   db.query("SELECT * FROM users WHERE id=?", [id], callback)
}

exports.update = (id, user, callback) => {
   const sql = "UPDATE users SET name=?, email=?, password=? WHERE id=?"
   db.query(sql, [user.name, user.email, user.password, id], callback)
}

exports.delete = (id, callback) => {
   db.query("DELETE FROM users WHERE id=?", [id], callback)
}

exports.findByEmail = (email,callback) =>{
    const sql = "SELECT * from users WHERE email = ?";
    db.query(sql, [email], (err, result)=> {
        if(err) throw err
        callback(result[0]);
    })

}
