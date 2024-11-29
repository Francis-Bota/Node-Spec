exports.migration = async () => {
    await sql`CREATE TABLE if not exists product (id serial primary key, title varchar(255))`;
    const result = await sql`SELECT * FROM product`;
}
  