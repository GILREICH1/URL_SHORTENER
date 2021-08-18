const supertest = require("supertest");
const app = require("../server");
const mocks = require("./mocks");
const db = require("../models/database");

const request = supertest(app);

afterAll(async () => {
  await db.close();
});

describe("/saveURL endpoint", () => {
  afterEach(async () => {
    await db.dropCollection("urls");
  });

  it("should post url to urls collection", async () => {
    await request
      .post("/saveURL")
      .set("Content-Type", "application/json")
      .send(mocks.longURL)
      .expect(201);
  });

  it("should save long url to DB and return a shortURL", async () => {
    const response = await request
      .post("/saveURL")
      .set("Content-Type", "application/json")
      .send(mocks.longURL)
      .expect(201);

    expect(response.shortURL).toBeDefined();
    expect(response.shortURL).toMatch(/^[a-zA-Z0-9]{6,}$/);
  });
});
