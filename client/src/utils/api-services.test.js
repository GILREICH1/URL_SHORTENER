import { generateShortURL } from "./api-services";
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
