import { Effect } from "effect";
export declare const categoriesKey = "@distilled/meta/error-categories";
export declare const withCategory: <Categories extends Array<PropertyKey>>(...categories: Categories) => <Args extends Array<any>, Ret, C extends {
    new (...args: Args): Ret;
}>(C: C) => C & {
    new (...args: Args): Ret & {
        [categoriesKey]: { [Cat in Categories[number]]: true; };
    };
};
export type AllKeys<E> = E extends {
    [categoriesKey]: infer Q;
} ? keyof Q : never;
export type ExtractAll<E, Cats extends PropertyKey> = Cats extends any ? Extract<E, {
    [categoriesKey]: {
        [K in Cats]: any;
    };
}> : never;
/**
 * Runtime check: does `value` carry the given category?
 * Works on instances tagged via `withCategory(...)`.
 */
export declare const hasCategory: <const Cat extends PropertyKey>(category: Cat) => (value: unknown) => value is {
    readonly [categoriesKey]: { readonly [K in Cat]: true; };
};
/** True if `value` has any of the given categories. */
export declare const hasAnyCategory: (...categories: ReadonlyArray<PropertyKey>) => (value: unknown) => boolean;
export declare const catchCategory: <E, const Categories extends Array<AllKeys<E>>, A2, E2, R2>(...args: [...Categories, f: (err: ExtractAll<E, Categories[number]>) => Effect.Effect<A2, E2, R2>]) => <A, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A | A2, E2 | Exclude<E, ExtractAll<E, Categories[number]>>, R | R2>;
//# sourceMappingURL=error-category.d.ts.map