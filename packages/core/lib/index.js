import { Effect, Schema as S } from "effect";
import { catchCategory, withCategory } from "./Category.js";
export * from "./Category.js";
class FooError extends S.TaggedErrorClass()("FooError", {}).pipe(withCategory("domain")) {
}
class BarError extends S.TaggedErrorClass()("BarError", {}).pipe(withCategory("system", "domain")) {
}
class BazError extends S.TaggedErrorClass()("BazError", {}).pipe(withCategory("system")) {
}
const baz = (x) => Effect.gen(function* () {
    if (x > 2) {
        return yield* new FooError();
    }
    else if (x > 1) {
        return yield* new BarError();
    }
    else {
        return yield* new BazError();
    }
});
// catches BarError + BazError (both "system"); residual error: FooError
export const program = baz(1).pipe(catchCategory("system", (e) => Effect.log(e._tag)));
// catches FooError + BarError (both "domain"); residual error: BazError
export const program2 = baz(1).pipe(catchCategory("domain", (e) => Effect.log(e._tag)));
// catches all three; residual error: never
export const program3 = baz(1).pipe(catchCategory("system", "domain", (e) => Effect.log(e._tag)));
//# sourceMappingURL=index.js.map