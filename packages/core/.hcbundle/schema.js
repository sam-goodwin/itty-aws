import { t as __exportAll } from "./_chunks/rolldown-runtime-w6R9maHv.js";
import { pipeArguments } from "effect/Pipeable";
import * as S from "effect/Schema";
import { Duration, Redacted, declare, instanceOf } from "effect/Schema";

//#region lib/schema.js
var schema_exports = /* @__PURE__ */ __exportAll({
	Any: () => Any,
	Array: () => Array,
	Boolean: () => Boolean,
	Date: () => Date,
	Duration: () => Duration,
	Literal: () => Literal,
	Literals: () => Literals,
	Null: () => Null,
	NullOr: () => NullOr,
	Number: () => Number,
	Record: () => Record,
	Redacted: () => Redacted,
	String: () => String,
	Struct: () => Struct,
	TaggedError: () => TaggedError,
	Tuple: () => Tuple,
	Union: () => Union,
	Unknown: () => Unknown,
	Void: () => Void,
	declare: () => declare,
	encodeKeys: () => encodeKeys,
	instanceOf: () => instanceOf,
	lazyFrom: () => lazyFrom,
	optional: () => optional,
	suspend: () => suspend
});
const optional = S.optional;
const Struct = S.Struct;
const suspend = (f) => lazySuspend(f);
const Array = (item) => lazyArray(item);
const Record = (key, value) => lazyRecord(key, value);
const Union = S.Union;
const Literal = S.Literal;
const Literals = S.Literals;
const NullOr = S.NullOr;
const Tuple = S.Tuple;
const encodeKeys = S.encodeKeys;
const String = S.String;
const Number = S.Number;
const Boolean = S.Boolean;
const Date = S.Date;
const Unknown = S.Unknown;
const Null = S.Null;
const Void = S.Void;
const Any = S.Any;
const SchemaProto = /*@__PURE__*/ Object.getPrototypeOf(S.String);
const buildKey = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/schema/build");
const annotationsKey = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/schema/annotations");
const dataKey = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/schema/data");
const force = (self) => {
	const build = self[buildKey];
	if (!build) return;
	const annotations = self[annotationsKey];
	const built = typeof build === "function" ? build() : build.build(self[dataKey]);
	const real = annotations ? built.annotate(annotations) : built;
	delete self[buildKey];
	delete self[dataKey];
	delete self[annotationsKey];
	Object.defineProperties(self, Object.getOwnPropertyDescriptors(real));
};
const forwarded = (name) => ({
	configurable: true,
	get() {
		if (!this[buildKey]) return void 0;
		force(this);
		return this[name];
	}
});
const LazyProto = /*@__PURE__*/ Object.create(SchemaProto, {
	ast: /*@__PURE__*/ forwarded("ast"),
	value: /*@__PURE__*/ forwarded("value"),
	key: /*@__PURE__*/ forwarded("key"),
	annotate: {
		configurable: true,
		writable: true,
		value(annotations) {
			const build = this[buildKey];
			if (!build) return SchemaProto.annotate.call(this, annotations);
			const previous = this[annotationsKey];
			return lazy(build, previous ? {
				...previous,
				...annotations
			} : annotations, this[dataKey]);
		}
	}
});
const supported = SchemaProto["~effect/Schema/Schema"] !== void 0;
const lazy = (build, annotations, data) => {
	if (!supported) {
		const built = typeof build === "function" ? build() : build.build(data);
		return annotations ? built.annotate(annotations) : built;
	}
	const self = Object.create(LazyProto);
	self[buildKey] = build;
	if (data !== void 0) self[dataKey] = data;
	if (annotations) self[annotationsKey] = annotations;
	return self;
};
const lazyFrom = (builder, data) => lazy(builder, void 0, data);
const lazySuspend = (f) => lazy(() => S.suspend(f));
const lazyArray = (item) => lazy(() => S.Array(item));
const lazyRecord = (key, value) => lazy(() => S.Record(key, value));
const lazyErrorKey = /*@__PURE__*/ Symbol.for("@distilled.cloud/core/schema/lazyError");
const SchemaTypeId = "~effect/Schema/Schema";
let errorBase;
const ErrorBase = () => errorBase ??= Object.getPrototypeOf(S.TaggedError()("Probe", {}));
const realErrorClass = (cls) => {
	const state = cls[lazyErrorKey];
	if (!state.real) {
		const real = S.TaggedError(state.identifier)(...state.args);
		state.real = real;
		Object.setPrototypeOf(state.lazy.prototype, real.prototype);
	}
	return state.real;
};
const FORWARDED_STATICS = [
	"ast",
	"fields",
	"make",
	"makeOption",
	"makeEffect",
	"annotate",
	"annotateKey",
	"check",
	"rebuild",
	"extend",
	"mapFields"
];
let lazyErrorStatics;
const LazyErrorStatics = () => lazyErrorStatics ??= Object.create(ErrorBase(), {
	[SchemaTypeId]: {
		value: SchemaTypeId,
		configurable: true
	},
	identifier: {
		configurable: true,
		get() {
			const state = this[lazyErrorKey];
			return state.identifier ?? state.args[0];
		}
	},
	pipe: {
		configurable: true,
		writable: true,
		value() {
			return pipeArguments(this, arguments);
		}
	},
	...Object.fromEntries(FORWARDED_STATICS.map((name) => [name, {
		configurable: true,
		get() {
			let owner = realErrorClass(this);
			let descriptor;
			while (owner && !(descriptor = Object.getOwnPropertyDescriptor(owner, name))) owner = Object.getPrototypeOf(owner);
			if (!descriptor) return void 0;
			if (descriptor.get) return descriptor.get.call(this);
			return typeof descriptor.value === "function" ? descriptor.value.bind(this) : descriptor.value;
		}
	}]))
});
const lazyTaggedError = (identifier) => (...args) => {
	function LazyTaggedError(input, options) {
		if (!new.target) throw new TypeError("Class constructor cannot be invoked without 'new'");
		return Reflect.construct(realErrorClass(new.target), [input, options], new.target);
	}
	Object.setPrototypeOf(LazyTaggedError, LazyErrorStatics());
	LazyTaggedError.prototype = Object.create(ErrorBase().prototype, { constructor: {
		value: LazyTaggedError,
		writable: true,
		configurable: true
	} });
	Object.defineProperty(LazyTaggedError, lazyErrorKey, { value: {
		identifier,
		args,
		lazy: LazyTaggedError
	} });
	return LazyTaggedError;
};
const TaggedError = lazyTaggedError;

//#endregion
export { Any, Array, Boolean, Date, Duration, Literal, Literals, Null, NullOr, Number, Record, Redacted, String, Struct, TaggedError, Tuple, Union, Unknown, Void, declare, encodeKeys, instanceOf, lazyFrom, optional, suspend, schema_exports as t };