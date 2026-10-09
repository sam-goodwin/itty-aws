import * as Effect from "effect/Effect";
import * as Predicate from "effect/Predicate";

//#region lib/error-category.js
const categoriesKey = "@distilled/meta/error-categories";
const withCategory = (...categories) => (C) => {
	const Mixed = class extends C {};
	for (const category of categories) {
		if (!("@distilled/meta/error-categories" in Mixed.prototype)) Mixed.prototype[categoriesKey] = {};
		Mixed.prototype[categoriesKey][category] = true;
	}
	return Mixed;
};
const hasCategory = (category) => (value) => {
	if (!Predicate.isObject(value)) return false;
	if (!Predicate.hasProperty("@distilled/meta/error-categories")(value)) return false;
	return category in value[categoriesKey];
};
const hasAnyCategory = (...categories) => (value) => {
	if (!Predicate.isObject(value)) return false;
	if (!Predicate.hasProperty("@distilled/meta/error-categories")(value)) return false;
	const cats = value[categoriesKey];
	for (const c of categories) if (c in cats) return true;
	return false;
};
const catchCategory = (...args) => (effect) => {
	const f = args.pop();
	const matches = hasAnyCategory(...args);
	return Effect.catchIf(effect, matches, (e) => f(e));
};

//#endregion
export { catchCategory, categoriesKey, hasAnyCategory, hasCategory, withCategory };