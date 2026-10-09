import { pipeArguments } from "effect/Pipeable";
import * as Data from "effect/Data";

//#region lib/schema-lite-impl.js
const liteKey = "~lite";
const node = (n) => Object.assign(n, { [liteKey]: true });
const Proto = {
	"~lite": true,
	pipe() {
		return pipeArguments(this, arguments);
	},
	annotate(annotations) {
		return make({
			...this.ast,
			annotations: {
				...this.ast.annotations,
				...annotations
			}
		}, this);
	}
};
const make = (ast, from) => {
	const self = Object.create(Proto);
	self.ast = ast;
	if (from) {
		for (const k of [
			"fields",
			"key",
			"value"
		]) if (k in from) self[k] = from[k];
	}
	return self;
};
const isLite = (u) => (typeof u === "object" || typeof u === "function") && u !== null && u["~lite"] === true;
const astOf = (s) => s.ast;
const String = /*@__PURE__*/ make(node({ _tag: "String" }));
const Number = /*@__PURE__*/ make(node({ _tag: "Number" }));
const Boolean = /*@__PURE__*/ make(node({ _tag: "Boolean" }));
const Unknown = /*@__PURE__*/ make(node({ _tag: "Unknown" }));
const Any = /*@__PURE__*/ make(node({ _tag: "Any" }));
const Null = /*@__PURE__*/ make(node({ _tag: "Null" }));
const Void = /*@__PURE__*/ make(node({ _tag: "Void" }));
const Undefined = /*@__PURE__*/ make(node({ _tag: "Undefined" }));
const Literal = (value) => make(node({
	_tag: "Literal",
	literal: value
}));
const Literals = (values) => make(node({
	_tag: "Union",
	types: values.map((v) => node({
		_tag: "Literal",
		literal: v
	}))
}));
const optional = (s) => {
	const inner = astOf(s);
	return make(node({
		_tag: "Union",
		types: [inner, node({ _tag: "Undefined" })],
		context: { isOptional: true }
	}));
};
const NullOr = (s) => make(node({
	_tag: "Union",
	types: [astOf(s), node({ _tag: "Null" })]
}));
const Union = (members) => make(node({
	_tag: "Union",
	types: members.map(astOf)
}));
const Array = (item) => make(node({
	_tag: "Arrays",
	elements: [],
	rest: [astOf(item)]
}));
const Tuple = (elements) => make(node({
	_tag: "Arrays",
	elements: elements.map(astOf),
	rest: []
}));
const Record = (key, value) => {
	const s = make(node({
		_tag: "Objects",
		propertySignatures: [],
		indexSignatures: [{
			parameter: astOf(key),
			type: astOf(value)
		}]
	}));
	s.key = key;
	s.value = value;
	return s;
};
const Struct = (fields) => {
	const s = make(node({
		_tag: "Objects",
		propertySignatures: Object.keys(fields).map((name) => {
			return {
				name,
				type: astOf(fields[name])
			};
		}),
		indexSignatures: []
	}));
	s.fields = fields;
	return s;
};
const suspend = (f) => {
	let resolved;
	return make(node({
		_tag: "Suspend",
		thunk: () => resolved ??= astOf(f())
	}));
};
const encodeKeys = (mapping) => (s) => s.annotate({ [encodeKeysKey]: mapping });
const encodeKeysKey = "@distilled.cloud/core/schema-lite/encodeKeys";
const declaration = (identifier) => make(node({
	_tag: "Declaration",
	typeParameters: [],
	annotations: { identifier }
}));
const Date = /*@__PURE__*/ declaration("Date");
const Duration = /*@__PURE__*/ declaration("Duration");
const Redacted = (value) => make(node({
	_tag: "Declaration",
	typeParameters: [astOf(value)],
	annotations: { identifier: "Redacted" }
}));
const instanceOf = (cls, annotations) => make(node({
	_tag: "Declaration",
	typeParameters: [],
	annotations: {
		identifier: cls.name,
		...annotations
	}
}));
const declare = (_is, annotations) => make(node({
	_tag: "Declaration",
	typeParameters: [],
	annotations: { ...annotations }
}));
const tagKey = "~distilled/tag";
const keysKey = "~distilled/keys";
let liteErrorBase;
const LiteErrorBase = () => liteErrorBase ??= class LiteError extends Data.Error {
	constructor(props) {
		const keys = new.target[keysKey];
		const picked = {};
		if (props) {
			for (const k of keys) if (props[k] !== void 0) picked[k] = props[k];
		}
		super(picked);
		this._tag = new.target[tagKey];
	}
	static get ast() {
		return node({
			_tag: "Declaration",
			typeParameters: [],
			annotations: { identifier: this[tagKey] }
		});
	}
	static pipe() {
		return pipeArguments(this, arguments);
	}
};
const TaggedError = (_identifier) => (tag, fields = {}) => {
	const C = class extends LiteErrorBase() {};
	C[tagKey] = tag;
	C[keysKey] = Object.keys(fields);
	C.fields = fields;
	C.identifier = tag;
	C.prototype.name = tag;
	return C;
};
const at = (build, j) => suspend(() => build(j));
const toEffect = (S, ast) => {
	const memo = /* @__PURE__ */ new Map();
	const liteBelow = /* @__PURE__ */ new Map();
	const hasLite = (n) => {
		const known = liteBelow.get(n);
		if (known !== void 0) return known;
		liteBelow.set(n, false);
		const kids = [
			...n.types ?? [],
			...n.elements ?? [],
			...n.rest ?? [],
			...n.typeParameters ?? [],
			...(n.propertySignatures ?? []).map((p) => p.type),
			...(n.indexSignatures ?? []).flatMap((i) => [i.parameter, i.type]),
			...(n.encoding ?? []).map((l) => l.to),
			...n._tag === "Suspend" && n.thunk ? [n.thunk()] : []
		];
		const r = !!n["~lite"] || kids.some(hasLite);
		liteBelow.set(n, r);
		return r;
	};
	const build = (n) => {
		const hit = memo.get(n);
		if (hit) return hit;
		if (!n["~lite"] && !hasLite(n)) {
			const real = S.make(n);
			memo.set(n, real);
			return real;
		}
		let out;
		switch (n._tag) {
			case "String":
				out = S.String;
				break;
			case "Number":
				out = S.Number;
				break;
			case "Boolean":
				out = S.Boolean;
				break;
			case "Null":
				out = S.Null;
				break;
			case "Undefined":
				out = S.Undefined;
				break;
			case "Void":
				out = S.Void;
				break;
			case "Any":
				out = S.Any;
				break;
			case "Literal":
				out = S.Literal(n.literal);
				break;
			case "Union":
				out = n.context?.isOptional ? S.optional(build(n.types[0])) : S.Union(n.types.map(build));
				break;
			case "Arrays":
				out = n.rest.length ? S.Array(build(n.rest[0])) : S.Tuple(n.elements.map(build));
				break;
			case "Objects":
				out = n.indexSignatures?.length ? S.Record(build(n.indexSignatures[0].parameter), build(n.indexSignatures[0].type)) : S.Struct(Object.fromEntries(n.propertySignatures.map((p) => [p.name, build(p.type)])));
				break;
			case "Suspend": {
				const thunk = n.thunk;
				out = S.suspend(() => build(thunk()));
				break;
			}
			case "Declaration":
				out = S.Unknown;
				break;
			case "Unknown":
				out = S.Unknown;
				break;
			default: out = n["~lite"] ? S.Unknown : S.make(n);
		}
		memo.set(n, out);
		return out;
	};
	return build(ast);
};

//#endregion
export { Any, Array, Boolean, Date, Duration, Literal, Literals, Null, NullOr, Number, Record, Redacted, String, Struct, TaggedError, Tuple, Undefined, Union, Unknown, Void, at, declare, encodeKeys, encodeKeysKey, instanceOf, isLite, liteKey, optional, suspend, toEffect };