import { generateShortURL } from "./api-services";
const longURL = "https://www.giffgaff.io/life/this-is-giffgaff";

describe("generateShortURL", () => {
  it("should return a string", async () => {
    const response = await generateShortURL(longURL);
    expect(response).toEqual(expect.any(String));
  });
});
