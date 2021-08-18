const supertest = require("supertest");
const app = require("../server");
const mocks = require("./mocks");
const db = require("../models/database");

const request = supertest(app);

afterAll(async () => {
  await db.dropCollection("urls");
  await db.close();
});

describe("/saveURL endpoint", () => {
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
      .send(mocks.longURLRequest)
      .expect(201);

    expect(response.body.shortURL).toBeDefined();
    expect(response.body.shortURL).toMatch(/^[A-Za-z0-9_-]{6,}$/);
  });
});

describe("/getURL endpoint", () => {
  it("should return useful error if no URL found", async () => {
    const nonexistentURL = "123456";
    const response = await request.get(`/getURL/${nonexistentURL}`);
    expect(response.status).toBe(404);
    expect(response.body.error).toBe("no such URL found");
  });

  it("should return the corrent longURL when shortURL provided", async () => {
    // shorten and save a URL to DB
    const postResponse = await request
      .post("/saveURL")
      .set("Content-Type", "application/json")
      .send(mocks.longURLRequest)
      .expect(201);
    const shortenedURL = postResponse.body.shortURL;

    // retreive shortenedURL from DB
    const getResponse = await request.get(`/getURL/${shortenedURL}`);
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.longURL).toBe(mocks.longURLRequest.longURL);
  });
});
