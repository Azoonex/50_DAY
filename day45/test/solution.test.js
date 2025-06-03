
import { describe, expect, it } from "vitest";
import { allCharacterUnique } from "../doc";

describe("check test", () => {
  it("check the character should return false", () => {
    const character = allCharacterUnique("test");
    expect(character).toBe(false)
  });

  it("Return Array as Character unique",()=>{
    const characterUnique = allCharacterUnique("al");
    expect(characterUnique).toEqual(['a',"l"])
  })

});
