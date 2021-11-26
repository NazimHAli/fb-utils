"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("@/src/index");
describe("index", () => {
  describe("cacheFirestoreQuery", () => {
    it("should not throw error", () => {
      const message = "moo";
      const result = (0, index_1.cacheFirestoreQuery)(message);
      expect(result).toMatch(message);
    });
  });
});
