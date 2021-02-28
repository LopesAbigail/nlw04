import request from "supertest";
import { app } from "../app";

import createConnection from "../database"

describe("Surveys", () => {
    // Antes de qualquer execução: rodar as migrations
    // Adição de async e await por se tratarem de promises
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it("Should be able to create a new survey", async () => {
        const response = await request(app).post("/surveys").send({
            title: "Example",
            description: "Example"
        });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");

    });

    it("Should be able to get all surveys", async () => {
        await request(app).get("/surveys").send({
            title: "Example2",
            description: "Example2"
        });

        const response = await request(app).get("/surveys");

        expect(response.body.lenght).toBe(2);

    });

});