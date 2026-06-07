import { Effect, Schema as S } from "effect";
export * from "./Category.ts";
declare const FooError_base: S.Class<FooError, S.TaggedStruct<"FooError", {}>, import("effect/Cause").YieldableError> & (new (...args: any[]) => {
    "@effect/error/categories": {
        domain: true;
    };
});
declare class FooError extends FooError_base {
}
declare const BazError_base: S.Class<BazError, S.TaggedStruct<"BazError", {}>, import("effect/Cause").YieldableError> & (new (...args: any[]) => {
    "@effect/error/categories": {
        system: true;
    };
});
declare class BazError extends BazError_base {
}
export declare const program: Effect.Effect<void, FooError, never>;
export declare const program2: Effect.Effect<void, BazError, never>;
export declare const program3: Effect.Effect<void, never, never>;
//# sourceMappingURL=index.d.ts.map