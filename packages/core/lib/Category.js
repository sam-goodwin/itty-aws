import { Effect, Predicate } from "effect";
export const categoriesKey = "@effect/error/categories";
export const withCategory = (...categories) => (C) => {
    // @ts-expect-error
    const Mixed = class extends C {
    };
    for (const category of categories) {
        if (!(categoriesKey in Mixed.prototype)) {
            // @ts-expect-error
            Mixed.prototype[categoriesKey] = {};
        }
        // @ts-expect-error
        Mixed.prototype[categoriesKey][category] = true;
    }
    return Mixed;
};
export const catchCategory = (...args) => (effect) => {
    const f = args.pop();
    const categories = args;
    return Effect.catchIf(effect, (e) => {
        if (Predicate.isObject(e) && Predicate.hasProperty(categoriesKey)(e)) {
            const cats = e[categoriesKey];
            for (const cat of categories) {
                if (cat in cats) {
                    return true;
                }
            }
        }
        return false;
    }, (e) => f(e));
};
//# sourceMappingURL=Category.js.map