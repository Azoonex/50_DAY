import { describe, expect, it } from "vitest";
import { hightScoringWord,validAnagram } from "../src/doc";

// describe("check test", () => {
//   it("check the character should return false", () => {
//     const character = allCharacterUnique("test");
//     expect(character).toBe(false);
//   });

//   it("Return Array as Character unique", () => {
//     const characterUnique = allCharacterUnique("al");
//     expect(characterUnique).toEqual(["a", "l"]);
//   });
// });

describe("Function stringTo_array", () => {
  it("should return smaller invalid", () => {
    const func = hightScoringWord("");
    expect(func).toBe("Invalid string and writing This.");
  });
  it("should return string large lengths", () => {
    const validValue = hightScoringWord("crypto dollar jan");

    expect(validValue).toBe("crypto");
  });
});


describe('Check the letter world return == false', () => {
    it('should  return false', () => {
      expect(validAnagram("ttt","mma")).toBe(false)
    });
    it('should return true validAnagram', () => {
      expect(validAnagram("take","get")).toBeTruthy()
    });
});