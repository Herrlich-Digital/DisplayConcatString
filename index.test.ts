import { describe, expect, test } from "bun:test"
import { displayString } from "./index"

describe("displayString", () => {
  test("verbindet mit Standard-Trenner", async () => {
    expect(await displayString(["a", "b", "c"])).toBe("a, b, c")
  })

  test("nutzt eigenen Trenner", async () => {
    expect(await displayString(["a", "b"], " | ")).toBe("a | b")
  })

  test("lässt null-Einträge weg", async () => {
    expect(await displayString(["a", null as unknown as string, "b"])).toBe("a, b")
  })
})
