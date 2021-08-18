import { generateShortURL, getLongURL } from "./api-services";
const longURL = "https://www.giffgaff.io/life/this-is-giffgaff";

describe("generateShortURL", () => {
  it("should return a string", async () => {
    const response = await generateShortURL({ longURL });
    expect(response).toEqual(expect.any(String));
  });

  it("should return a string of 6 characters", async () => {
    const response = await generateShortURL({ longURL });
    expect(response).toMatch(/^[A-Za-z0-9_-]{6,}$/);
  });
});

describe("getURL", () => {
  it("should retrieve a long URL from a short one", async () => {
    // generate shortened URL
    const newShortURL = await generateShortURL({ longURL });

    // obtain long URL
    const newLongURL = await getLongURL(newShortURL);
    expect(newLongURL).toEqual(longURL);
  });
});
