import mysql from "mysql"
import {promisify} from "util"

class ConnectDB {
    pool = null

    connect = async () => 
    {
        try {
            const pool  = await mysql.createPool({
                connectionLimit : 10,
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                 password: process.env.MYSQL_PASSWORD,
                 database: process.env.MYSQL_DATABASE
            });
           
            pool.query = promisify(pool.query);
            this.pool = pool
            console.log('Connected to DB '+ process.env.MYSQL_DATABASE)
        } catch(err) {
            console.log('Error connecting to mySQL')
        }
    }

    getConnectionPool = () => this.pool
}
export default new ConnectDB()