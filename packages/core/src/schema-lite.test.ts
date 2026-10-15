import { describe, expect, test } from "vitest";
import * as S from "./schema-lite-typed.ts";

class Oops extends S.TaggedError<Oops>()("Oops", { message: S.optional(S.String) }) {}

describe("lite TaggedError", () => {
  test("make builds an instance like new", () => {
    const e = Oops.make({ message: "boom" });
    expect(e).toBeInstanceOf(Oops);
    expect(e._tag).toBe("Oops");
    expect(e.message).toBe("boom");
  });

  test("make keeps only the declared fields", () => {
    const e = Oops.make({ message: "boom", extra: 1 } as never);
    expect(Object.keys(e)).not.toContain("extra");
  });
});
