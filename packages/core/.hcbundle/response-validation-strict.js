import { toEffect } from "./schema-lite-impl.js";
import "effect/Effect";
import { Any, Array, Boolean, Literal, Null, Number, Record, String, Struct, Tuple, Undefined, Union, Unknown, Void, decodeUnknownEffect, make, optional, suspend } from "effect/Schema";

//#region lib/response-validation-strict.js
const decoders = /*@__PURE__*/ new WeakMap();
const decoderFor = (ast) => {
	let decode = decoders.get(ast);
	if (!decode) {
		decode = decodeUnknownEffect(toEffect({
			Any,
			Array,
			Boolean,
			Literal,
			Null,
			Number,
			Record,
			String,
			Struct,
			Tuple,
			Undefined,
			Union,
			Unknown,
			Void,
			optional,
			suspend,
			make
		}, ast));
		decoders.set(ast, decode);
	}
	return decode;
};

//#endregion
export { decoderFor };