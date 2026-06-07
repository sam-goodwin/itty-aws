import { Effect, Predicate } from "effect";
export const categoriesKey = "@distilled/meta/error-categories";
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
/**
 * Runtime check: does `value` carry the given category?
 * Works on instances tagged via `withCategory(...)`.
 */
export const hasCategory = (category) => (value) => {
    if (!Predicate.isObject(value))
        return false;
    if (!Predicate.hasProperty(categoriesKey)(value))
        return false;
    return category in value[categoriesKey];
};
/** True if `value` has any of the given categories. */
export const hasAnyCategory = (...categories) => (value) => {
    if (!Predicate.isObject(value))
        return false;
    if (!Predicate.hasProperty(categoriesKey)(value))
        return false;
    const cats = value[categoriesKey];
    for (const c of categories)
        if (c in cats)
            return true;
    return false;
};
export const catchCategory = (...args) => (effect) => {
    const f = args.pop();
    const categories = args;
    const matches = hasAnyCategory(...categories);
    return Effect.catchIf(effect, matches, (e) => f(e));
};
//# sourceMappingURL=error-category.js.map