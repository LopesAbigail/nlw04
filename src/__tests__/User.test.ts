import request from "supertest";
import { app } from "../app";

import createConnection from "../database"

describe("Users", () => {
    // Antes de qualquer execução: rodar as migrations
    // Adição de async e await por se tratarem de promises
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new user", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example1.com",
            name: "User Example1"
        })

        expect(response.status).toBe(201);

    });

    it("Should not be able to create a user with exists email", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example1.com",
            name: "User Example1"
        })

        expect(response.status).toBe(400);

    });

});