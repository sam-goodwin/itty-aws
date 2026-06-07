import { Effect } from "effect";
export declare const categoriesKey = "@effect/error/categories";
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
export declare const catchCategory: <E, const Categories extends Array<AllKeys<E>>, A2, E2, R2>(...args: [...Categories, f: (err: ExtractAll<E, Categories[number]>) => Effect.Effect<A2, E2, R2>]) => <A, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A | A2, E2 | Exclude<E, ExtractAll<E, Categories[number]>>, R | R2>;
//# sourceMappingURL=Category.d.ts.map