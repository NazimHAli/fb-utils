import { cacheFirestoreQuery } from "@/src/index";

describe("index", () => {
  describe("cacheFirestoreQuery", () => {
    it("should not throw error", () => {
      const message = "moo";
      const result = cacheFirestoreQuery(message);

      expect(result).toMatch(message);
    });
  });
});
