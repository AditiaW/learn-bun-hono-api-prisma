# Cloth(pakaian) CRUD API using Bun, Hono, and Prisma

This project contains a CRUD API for managing cloth(pakaian) items.

## Cloning the Project

To clone the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/AditiaW/learn-bun-hono-api-prisma.git
   cd learn-bun-hono-api-prisma
   ```

2. Install dependencies:
   ```sh
   bun install
   ```

3. Rename the `.env.example` file to `.env`, and fill in the database URL with your database connection details.

4. Run Prisma migrations:
   ```sh
   bunx prisma migrate dev
   ```

## Running the Project

To run the project, execute the following command:
```sh
bun run dev
```

Once the server is running, you can access the API at [http://localhost:3000/api/pakaian](http://localhost:3000/api/pakaian).

## Testing the API

To test the POST functionality, you can send a JSON payload like the following:

```json
{
    "nama": "Kemeja Batik",
    "jenis": "Kemeja",
    "ukuran": "M",
    "warna": "Merah",
    "harga": 150000,
    "stok": 20
}
```

If the operation is successful, you will receive a response similar to this:

```json
{
    "success": true,
    "message": "Pakaian Created Successfully!",
    "data": {
        "id": 1,
        "nama": "Kemeja Batik",
        "jenis": "Kemeja",
        "ukuran": "M",
        "warna": "Merah",
        "harga": 150000,
        "stok": 20,
        "createdAt": "2024-05-25T00:00:00.000Z",
        "updatedAt": "2024-05-25T00:00:00.000Z"
    }
}
```


Feel free to adjust the instructions further as needed.
