const supertest = require("supertest");
const app = require("../server");
const mocks = require("./mocks");
const db = require("../models/database");

const request = supertest(app);

afterAll(async () => {
  await db.dropCollection("urls");
  await db.close();
});

describe("/getShortURL endpoint", () => {
  it("should post url to urls collection", async () => {
    await request
      .post("/getShortURL")
      .set("Content-Type", "application/json")
      .send(mocks.longURL)
      .expect(201);
  });

  it("should save long url to DB and return a shortURL", async () => {
    const response = await request
      .post("/getShortURL")
      .set("Content-Type", "application/json")
      .send(mocks.longURL)
      .expect(201);

    expect(response.body.shortURL).toBeDefined();
    expect(response.body.shortURL).toMatch(/^[A-Za-z0-9_-]{6,}$/);
  });
});

describe("/getLongURL endpoint", () => {
  it("should return useful error if no URL found", async () => {
    const nonexistentURL = "123456";
    const response = await request.get(`/getLongURL/${nonexistentURL}`);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe("no such URL found");
  });
});
