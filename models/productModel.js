const { sql } = require("../config/db")


 module.exports= class Product {
   
    static async save(title){

        await sql`INSERT INTO product (title) VALUES  (${title})`;
    }
   static async getAll(){
        return sql`SELECT * FROM product`;
    }
    static async getById(id){
        return sql`SELECT * FROM product WHERE id = ${id}`;
    }
}







