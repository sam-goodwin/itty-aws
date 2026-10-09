import { lazyFrom } from "./schema.js";

//#region lib/chunks.js
const builders = /*@__PURE__*/ new WeakMap();
const at = (build, j) => {
	let builder = builders.get(build);
	if (!builder) builders.set(build, builder = { build: (data) => build(data) });
	return lazyFrom(builder, j);
};

//#endregion
export { at };