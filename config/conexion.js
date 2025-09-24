import mysql from 'mysqlz/promise'
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tienda',
    connectionLimit: s
})
pool.getConnection()
.then(connection=>{
    console.log('Conexion exitosa')
    connection.release
})
.catch(error=>{
    console.log('error de conexion')
})
export default pool