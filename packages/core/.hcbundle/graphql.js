import { t as __exportAll } from "./_chunks/rolldown-runtime-w6R9maHv.js";
import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Option from "effect/Option";
import * as S from "effect/Schema";
import * as Stream from "effect/Stream";
import * as Schedule from "effect/Schedule";
import * as Data from "effect/Data";

//#region lib/graphql.js
var graphql_exports = /* @__PURE__ */ __exportAll({
	GqlError: () => GqlError,
	GqlTransport: () => GqlTransport,
	GraphQLFailure: () => GraphQLFailure,
	GraphQLPaginationError: () => GraphQLPaginationError,
	GraphQLTransportError: () => GraphQLTransportError,
	QueryNode: () => QueryNode,
	QuerySymbol: () => QuerySymbol,
	UnknownGraphQLError: () => UnknownGraphQLError,
	connectionField: () => connectionField,
	errorFields: () => errorFields,
	errorSpec: () => errorSpec,
	filterQuery: () => filterQuery,
	flatMapQuery: () => flatMapQuery,
	isQuery: () => isQuery,
	itemsQuery: () => itemsQuery,
	listField: () => listField,
	mapQuery: () => mapQuery,
	objectField: () => objectField,
	ofQuery: () => ofQuery,
	pagesQuery: () => pagesQuery,
	queryFn: () => queryFn,
	root: () => root,
	rootConnection: () => rootConnection,
	rootLeaf: () => rootLeaf,
	rootList: () => rootList,
	scalarField: () => scalarField
});
const QuerySymbol = /*@__PURE__*/ Symbol.for("@distilled.cloud/graphql/Query");
const inspect = /*@__PURE__*/ Symbol.for("nodejs.util.inspect.custom");
var GqlError = class {
	_tag = "GqlError";
	message;
	constructor(message) {
		this.message = message;
	}
};
const errorFields = {
	message: S.String,
	code: /*@__PURE__*/ S.optional(S.String),
	path: /*@__PURE__*/ S.optional(/*@__PURE__*/ S.Array(/*@__PURE__*/ S.Union([S.String, S.Number]))),
	locations: /*@__PURE__*/ S.optional(/*@__PURE__*/ S.Array(/*@__PURE__*/ S.Struct({
		line: S.Number,
		column: S.Number
	}))),
	extensions: /*@__PURE__*/ S.optional(S.Unknown),
	traceId: /*@__PURE__*/ S.optional(S.String),
	status: /*@__PURE__*/ S.optional(S.Number),
	retryAfter: /*@__PURE__*/ S.optional(S.Number)
};
var UnknownGraphQLError = class extends S.TaggedError()("UnknownGraphQLError", {
	...errorFields,
	coordinate: /*@__PURE__*/ S.optional(S.String)
}) {};
var GraphQLFailure = class extends Data.TaggedError("GraphQLFailure") {
	get message() {
		return this.errors.map((e) => `${e._tag}${e.path?.length ? ` at ${e.path.join(".")}` : ""}: ${e.message}`).join("; ");
	}
};
var GraphQLTransportError = class extends Data.TaggedError("GraphQLTransportError") {};
var GraphQLPaginationError = class extends Data.TaggedError("GraphQLPaginationError") {};
const errorSpec = (make, tag, matchers, options = {}) => ({
	tag,
	make: (props) => new make(props),
	matchers,
	retryable: options.retryable ?? false,
	global: options.global ?? false
});
const scalarField = (name) => ({
	name,
	kind: "scalar"
});
const objectField = (name, objectType) => ({
	name,
	kind: "object",
	of: objectType
});
const listField = (name, itemType, argTypes) => ({
	name,
	kind: "list",
	of: itemType,
	argTypes
});
const connectionField = (name, nodeType, argTypes) => ({
	name,
	kind: "connection",
	of: nodeType,
	argTypes
});
const objectRef = (meta) => ({
	tag: "object",
	meta
});
const listRef = (itemType) => ({
	tag: "list",
	of: itemType
});
const fieldResult = (parent, field) => {
	const inner = () => {
		if (field.kind === "scalar") return { tag: "scalar" };
		if (field.kind === "object") return objectRef(field.of);
		return listRef(objectRef(field.of));
	};
	return parent.tag === "list" ? listRef(fieldResult(parent.of, field)) : inner();
};
const unwrapList = (typeRef) => {
	if (typeRef.tag !== "list") throw new GqlError("expected a list Query");
	return typeRef.of;
};
const fieldsOf = (typeRef) => {
	if (typeRef.tag === "object") return typeRef.meta.fields;
	if (typeRef.tag === "list") return fieldsOf(typeRef.of);
	return {};
};
var GqlTransport = class extends Context.Service()("@distilled.cloud/graphql/Transport") {};
var QueryNode = class {
	[QuerySymbol] = QuerySymbol;
	expr;
	constructor(expr) {
		this.expr = expr;
		return proxy(this);
	}
	pipe(...steps) {
		return steps.reduce((current, step) => step(current), this);
	}
	[inspect]() {
		return printExpr(this.expr);
	}
	toString() {
		return this[inspect]();
	}
};
const isQuery = (value) => (typeof value === "object" || typeof value === "function") && value !== null && QuerySymbol in value;
const make$1 = (expr) => new QueryNode(expr);
const itemQuery = (list) => new QueryNode({
	_tag: "Item",
	list: list.expr,
	type: unwrapList(list.expr.type)
});
function proxy(self) {
	const callable = Object.assign(function(bag) {
		return bag == null ? self : applyBag(self, bag);
	}, self);
	return new Proxy(callable, {
		has: (_, prop) => prop === QuerySymbol || prop === inspect || prop in self || typeof prop === "string" && prop in fieldsOf(self.expr.type),
		get: (_target, prop) => {
			if (prop === QuerySymbol) return QuerySymbol;
			if (prop === inspect) return self[inspect].bind(self);
			if (prop === "pipe") return self.pipe.bind(self);
			if (typeof prop === "string" && prop in self) {
				const member = self[prop];
				return typeof member === "function" ? member.bind(self) : member;
			}
			if (typeof prop !== "string") return void 0;
			const field = fieldsOf(self.expr.type)[prop];
			if (!field) return void 0;
			return make$1({
				_tag: "Prop",
				parent: self.expr,
				field,
				type: fieldResult(self.expr.type, field)
			});
		},
		apply: (_target, _thisArg, args) => applyBag(self, args[0] ?? {})
	});
}
const applyBag = (self, bag) => {
	const argTypes = self.expr._tag === "Prop" ? self.expr.field.argTypes : self.expr._tag === "Root" ? self.expr.argTypes : void 0;
	const args = {};
	for (const [argName, argValue] of Object.entries(bag)) if (argTypes && argName in argTypes) args[argName] = argValue;
	if (self.expr._tag === "Prop") return make$1({
		...self.expr,
		args: {
			...self.expr.args,
			...args
		}
	});
	if (self.expr._tag === "Root") return make$1({
		...self.expr,
		args: {
			...self.expr.args,
			...args
		}
	});
	return self;
};
const root = (op, field, meta, args, argTypes, errors = []) => make$1({
	_tag: "Root",
	op,
	field,
	args,
	argTypes,
	type: objectRef(meta),
	errors
});
const rootList = (op, field, meta, args, argTypes, errors = []) => make$1({
	_tag: "Root",
	op,
	field,
	args,
	argTypes,
	type: listRef(objectRef(meta)),
	errors
});
const rootConnection = (op, field, meta, args, argTypes, errors = []) => make$1({
	_tag: "Root",
	op,
	field,
	args,
	argTypes,
	type: listRef(objectRef(meta)),
	connection: true,
	errors
});
const rootLeaf = (op, field, list, args, argTypes, errors = []) => make$1({
	_tag: "Root",
	op,
	field,
	args,
	argTypes,
	type: list ? listRef({ tag: "scalar" }) : { tag: "scalar" },
	errors
});
const printExpr = (expr) => {
	switch (expr._tag) {
		case "Root": return expr.args ? `${expr.field}(${JSON.stringify(expr.args)})` : expr.field;
		case "Prop": return `${printExpr(expr.parent)}.${expr.field.name}`;
		case "Item": return "$item";
		case "MapValue": return `map(${printExpr(expr.parent)})`;
		case "MapItems": return `mapItems(${printExpr(expr.parent)})`;
		case "Filter": return `filter(${printExpr(expr.parent)})`;
		case "FlatMap": return `flatMap(${printExpr(expr.parent)})`;
		case "Literal": return `of(${String(expr.value)})`;
	}
};
const emptySel = (field) => ({
	field,
	alias: void 0,
	args: void 0,
	children: /* @__PURE__ */ new Map(),
	isScalar: false,
	isList: false
});
const stableStringify = (value) => {
	if (value === null || typeof value !== "object") return JSON.stringify(value);
	if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
	return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(",")}}`;
};
const bindArgs = (forest, args, argTypes) => {
	if (args === void 0) return void 0;
	const bound = {};
	let hasArgs = false;
	for (const [name, value] of Object.entries(args)) {
		if (value === void 0) continue;
		forest.vars.set(`v${forest.varI}`, {
			type: argTypes?.[name] ?? "String",
			value
		});
		bound[name] = `v${forest.varI++}`;
		hasArgs = true;
	}
	return hasArgs ? bound : void 0;
};
const ensureChild = (forest, parent, field, options) => {
	const key = options.args === void 0 ? field : `${field}:${stableStringify(options.args)}`;
	const existing = parent.children.get(key);
	if (existing) return existing;
	const taken = new Set([...parent.children.values()].map((c) => c.alias ?? c.field));
	let alias;
	if (taken.has(field)) do
		alias = `${field}_${forest.aliasI++}`;
	while (taken.has(alias));
	const sel = {
		field,
		alias,
		args: bindArgs(forest, options.args, options.argTypes),
		children: /* @__PURE__ */ new Map(),
		isScalar: options.isScalar ?? false,
		isList: options.isList ?? false
	};
	parent.children.set(key, sel);
	return sel;
};
const paintConnection = (forest, connection) => {
	const edges = ensureChild(forest, connection, "edges", { isList: true });
	ensureChild(forest, edges, "node", {});
	return ["edges", "node"];
};
const paintAbs = (forest, expr) => {
	switch (expr._tag) {
		case "Root": {
			if (forest.kind !== void 0 && forest.kind !== expr.op) throw new GqlError(`cannot mix ${forest.kind} and ${expr.op} in one document`);
			forest.kind = expr.op;
			const node = ensureChild(forest, forest.roots, expr.field, {
				args: expr.args,
				argTypes: expr.argTypes,
				isScalar: expr.type.tag === "scalar" || expr.type.tag === "list" && expr.type.of.tag === "scalar",
				isList: expr.type.tag === "list" && !expr.connection
			});
			const key = node.alias ?? node.field;
			forest.rootAlias.set(expr, key);
			forest.rootErrors.set(key, {
				field: expr.field,
				errors: expr.errors
			});
			return expr.connection ? [key, ...paintConnection(forest, node)] : [key];
		}
		case "Prop": {
			const parentPath = paintAbs(forest, expr.parent);
			const parentSel = selAt(forest.roots, parentPath);
			const node = ensureChild(forest, parentSel, expr.field.name, {
				args: expr.args,
				argTypes: expr.field.argTypes,
				isScalar: expr.field.kind === "scalar",
				isList: expr.field.kind === "list"
			});
			const path = [...parentPath, node.alias ?? node.field];
			return expr.field.kind === "connection" ? [...path, ...paintConnection(forest, node)] : path;
		}
		default: throw new GqlError(`paintAbs: ${expr._tag}`);
	}
};
const selAt = (roots, path) => {
	let current = roots;
	for (const segment of path) {
		if (segment === "*") continue;
		const child = [...current.children.values()].find((candidate) => (candidate.alias ?? candidate.field) === segment);
		if (!child) throw new GqlError(`internal: missing ${String(segment)}`);
		current = child;
	}
	return current;
};
const connectionNodeSel = (connection) => {
	const edges = [...connection.children.values()].find((c) => c.field === "edges");
	const node = edges ? [...edges.children.values()].find((c) => c.field === "node") : void 0;
	if (!node) throw new GqlError("internal: connection missing edges.node");
	return node;
};
const relSel = (expr, listSel) => {
	switch (expr._tag) {
		case "Item": return listSel;
		case "Prop": {
			const child = [...relSel(expr.parent, listSel).children.values()].find((c) => c.field === expr.field.name);
			if (!child) throw new GqlError(`missing ${expr.field.name} in list selection`);
			return expr.field.kind === "connection" ? connectionNodeSel(child) : child;
		}
		default: return listSel;
	}
};
const paintRel = (forest, expr, listSel) => {
	switch (expr._tag) {
		case "Item":
		case "Literal": return;
		case "Prop": {
			paintRel(forest, expr.parent, listSel);
			const child = ensureChild(forest, relSel(expr.parent, listSel), expr.field.name, {
				args: expr.args,
				argTypes: expr.field.argTypes,
				isScalar: expr.field.kind === "scalar",
				isList: expr.field.kind === "list"
			});
			if (expr.field.kind === "connection") paintConnection(forest, child);
			return;
		}
		case "MapValue":
		case "FlatMap":
			paintRel(forest, expr.parent, listSel);
			return;
		case "MapItems":
			paintRel(forest, expr.parent, listSel);
			visitRel(expr.mapped, forest, relSel(expr.parent, listSel));
			return;
		case "Filter":
			paintRel(forest, expr.parent, listSel);
			paintRel(forest, expr.predicate, relSel(expr.parent, listSel));
			return;
		case "Root": throw new GqlError("root inside list item");
	}
};
const visitExpr = (forest, expr) => {
	switch (expr._tag) {
		case "Root":
		case "Prop":
			paintAbs(forest, expr);
			return;
		case "Item": return;
		case "Literal": return;
		case "MapValue":
		case "FlatMap":
			visitExpr(forest, expr.parent);
			return;
		case "MapItems": {
			visitExpr(forest, expr.parent);
			const path = paintAbs(forest, graphqlBase(expr.parent));
			visitRel(expr.mapped, forest, selAt(forest.roots, path));
			return;
		}
		case "Filter": {
			visitExpr(forest, expr.parent);
			const path = paintAbs(forest, graphqlBase(expr.parent));
			paintRel(forest, expr.predicate, selAt(forest.roots, path));
			return;
		}
	}
};
const graphqlBase = (expr) => {
	switch (expr._tag) {
		case "Root":
		case "Prop":
		case "Item": return expr;
		case "MapValue":
		case "MapItems":
		case "Filter":
		case "FlatMap": return graphqlBase(expr.parent);
		case "Literal": throw new GqlError("literal has no graphql base");
	}
};
const visitRel = (plan, forest, listSel) => {
	if (isQuery(plan)) {
		paintRel(forest, plan.expr, listSel);
		return;
	}
	if (plan !== null && typeof plan === "object" && !Effect.isEffect(plan)) for (const nested of Object.values(plan)) visitRel(nested, forest, listSel);
};
const visitPlan = (plan, forest) => {
	if (isQuery(plan)) {
		printExpr(plan.expr);
		visitExpr(forest, plan.expr);
		return;
	}
	if (Effect.isEffect(plan)) return;
	if (plan !== null && typeof plan === "object" && !Array.isArray(plan)) for (const nested of Object.values(plan)) visitPlan(nested, forest);
};
const validate = (node) => {
	for (const child of node.children.values()) {
		if (!child.isScalar && child.children.size === 0) return `field "${child.field}" has no sub-selection`;
		const inner = validate(child);
		if (inner) return inner;
	}
};
const printChildren = (node, indent) => {
	const pad = "  ".repeat(indent);
	const lines = [];
	for (const child of node.children.values()) {
		let head = child.alias ? `${child.alias}: ${child.field}` : child.field;
		if (child.args && Object.keys(child.args).length > 0) {
			const printed = Object.entries(child.args).map(([argName, varName]) => `${argName}: $${varName}`).join(", ");
			head += `(${printed})`;
		}
		if (child.isScalar) lines.push(`${pad}${head}`);
		else {
			lines.push(`${pad}${head} {`);
			lines.push(printChildren(child, indent + 1));
			lines.push(`${pad}}`);
		}
	}
	return lines.join("\n");
};
const emptyForest = () => ({
	kind: void 0,
	roots: emptySel(""),
	vars: /* @__PURE__ */ new Map(),
	varI: 0,
	aliasI: 0,
	rootAlias: /* @__PURE__ */ new WeakMap(),
	rootErrors: /* @__PURE__ */ new Map()
});
const emit = (forest) => {
	const err = validate(forest.roots);
	if (err) throw new GqlError(err);
	const kind = forest.kind ?? "query";
	const varDefs = [...forest.vars.entries()].map(([name, binding]) => `$${name}: ${binding.type}`).join(", ");
	const header = varDefs.length > 0 ? `${kind} Gql(${varDefs})` : `${kind} Gql`;
	const variables = {};
	for (const [name, binding] of forest.vars) variables[name] = binding.value;
	return {
		document: `${header} {\n${printChildren(forest.roots, 1)}\n}`,
		operationName: "Gql",
		variables,
		kind,
		tree: forest.roots,
		rootAlias: forest.rootAlias,
		rootErrors: forest.rootErrors
	};
};
const nodesFromConnection = (value) => {
	if (value == null) return value;
	if (Array.isArray(value)) return value.map(nodesFromConnection);
	const edges = value.edges;
	if (!Array.isArray(edges)) return [];
	return edges.map((edge) => edge == null ? edge : edge.node);
};
const readField = (parent, name) => {
	if (parent == null) return parent;
	if (Array.isArray(parent)) return parent.map((item) => item == null ? item : item[name]);
	return parent[name];
};
const extractAbs = (expr, data, rootAlias) => {
	switch (expr._tag) {
		case "Root": {
			const raw = data[rootAlias.get(expr) ?? expr.field];
			return expr.connection ? nodesFromConnection(raw) : raw;
		}
		case "Prop": {
			const value = readField(extractAbs(expr.parent, data, rootAlias), expr.field.name);
			return expr.field.kind === "connection" ? nodesFromConnection(value) : value;
		}
		default: throw new GqlError(`extractAbs: ${expr._tag}`);
	}
};
const extractRel = (expr, item) => {
	switch (expr._tag) {
		case "Item": return item;
		case "Prop": {
			const value = readField(extractRel(expr.parent, item), expr.field.name);
			return expr.field.kind === "connection" ? nodesFromConnection(value) : value;
		}
		default: throw new GqlError(`extractRel: ${expr._tag}`);
	}
};
const inItem = (expr) => {
	switch (expr._tag) {
		case "Item": return true;
		case "Prop":
		case "MapValue":
		case "MapItems":
		case "Filter":
		case "FlatMap": return inItem(expr.parent);
		default: return false;
	}
};
const interpretExpr = (expr, data, rootAlias, item) => {
	switch (expr._tag) {
		case "Literal": return expr.value;
		case "Item": return item;
		case "Root":
		case "Prop": return inItem(expr) ? extractRel(expr, item) : extractAbs(expr, data, rootAlias);
		case "MapValue": return expr.mapFn(interpretExpr(expr.parent, data, rootAlias, item));
		case "Filter": {
			const list = interpretExpr(expr.parent, data, rootAlias, item);
			return (Array.isArray(list) ? list : []).filter((row) => Boolean(interpretExpr(expr.predicate, data, rootAlias, row)));
		}
		case "MapItems": {
			const list = interpretExpr(expr.parent, data, rootAlias, item);
			if (expr.single) return list == null ? null : interpretValueSync(expr.mapped, data, rootAlias, list);
			return (Array.isArray(list) ? list : []).map((row) => interpretValueSync(expr.mapped, data, rootAlias, row));
		}
		case "FlatMap": throw new GqlError("FlatMap must be interpreted as Effect");
	}
};
const interpretValueSync = (plan, data, rootAlias, item) => {
	if (isQuery(plan)) return interpretExpr(plan.expr, data, rootAlias, item);
	if (plan !== null && typeof plan === "object" && !Effect.isEffect(plan)) {
		const out = {};
		for (const [key, nested] of Object.entries(plan)) out[key] = interpretValueSync(nested, data, rootAlias, item);
		return out;
	}
	return plan;
};
const interpretPlan = (plan, data, rootAlias) => Effect.gen(function* () {
	if (isQuery(plan)) {
		const expr = plan.expr;
		if (expr._tag === "FlatMap") {
			const resolved = interpretExpr(expr.parent, data, rootAlias, void 0);
			const next = expr.flatMapFn(resolved);
			if (Effect.isEffect(next)) return yield* next;
			if (isQuery(next)) return yield* interpretPlan(next, data, rootAlias);
			return next;
		}
		return interpretExpr(expr, data, rootAlias, void 0);
	}
	if (Effect.isEffect(plan)) return yield* plan;
	if (plan !== null && typeof plan === "object" && !Array.isArray(plan)) {
		const out = {};
		for (const [key, nested] of Object.entries(plan)) out[key] = yield* interpretPlan(nested, data, rootAlias);
		return out;
	}
	return plan;
});
const evaluatePlan = (plan) => Effect.gen(function* () {
	const forest = emptyForest();
	visitPlan(plan, forest);
	let data = {};
	let rootAlias = /* @__PURE__ */ new WeakMap();
	if (forest.roots.children.size > 0) {
		const compiled = emit(forest);
		"" + compiled.document;
		data = yield* execute(compiled);
		rootAlias = compiled.rootAlias;
	}
	return yield* interpretPlan(plan, data, rootAlias);
});
const execute = (compiled) => {
	const once = Effect.gen(function* () {
		const response = yield* (yield* GqlTransport).execute(compiled);
		const raw = response.errors ?? [];
		if (raw.length === 0) return response.data;
		const [first, ...rest] = raw.map((error) => classify(compiled, error, response));
		return yield* Effect.fail(rest.every((issue) => issue._tag === first._tag) ? first : new GraphQLFailure({
			errors: [first, ...rest],
			data: response.data,
			status: response.status
		}));
	});
	return compiled.kind === "query" ? once.pipe(Effect.retry({
		while: (error) => isRetryable(compiled, error),
		times: 5,
		schedule: Schedule.exponential("200 millis")
	})) : once;
};
const isRetryable = (compiled, error) => {
	if (error instanceof GraphQLTransportError) return error.status === void 0 || error.status === 429 || error.status >= 500;
	const retryable = new Set([...compiled.rootErrors.values()].flatMap((root) => root.errors.filter((spec) => spec.retryable).map((spec) => spec.tag)));
	return error instanceof GraphQLFailure ? error.errors.every((issue) => retryable.has(issue._tag)) : retryable.has(error._tag);
};
const isRecord = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
const classify = (compiled, raw, response) => {
	const path = Array.isArray(raw.path) ? raw.path : void 0;
	const root = typeof path?.[0] === "string" ? compiled.rootErrors.get(path[0]) : void 0;
	const candidates = root ? root.errors : uniqueByTag([...compiled.rootErrors.values()].flatMap((entry) => entry.errors.filter((spec) => spec.global)));
	const extensions = isRecord(raw.extensions) ? raw.extensions : {};
	const code = typeof extensions.code === "string" ? extensions.code : typeof extensions.errorCode === "string" ? extensions.errorCode : void 0;
	const message = typeof raw.message === "string" ? raw.message : "";
	const retryHeader = response.headers?.["retry-after"];
	const props = {
		message,
		code,
		path,
		locations: raw.locations,
		extensions: raw.extensions,
		traceId: typeof extensions.traceId === "string" ? extensions.traceId : typeof raw.traceId === "string" ? raw.traceId : void 0,
		status: response.status,
		retryAfter: retryHeader && /^\d+(\.\d+)?$/.test(retryHeader) ? Number(retryHeader) : void 0
	};
	const matches = candidates.flatMap((spec) => spec.matchers.filter((matcher) => (matcher.code === void 0 || matcher.code === code) && (matcher.message === void 0 || matcher.message === message) && (matcher.messageIncludes === void 0 || message.includes(matcher.messageIncludes))).map((matcher) => ({
		spec,
		score: (matcher.code ? 1 : 0) + (matcher.message ? 4 : 0) + (matcher.messageIncludes ? 2 : 0)
	})));
	matches.sort((a, b) => b.score - a.score);
	const best = matches[0];
	if (best && !matches.some((match) => match.score === best.score && match.spec.tag !== best.spec.tag)) return best.spec.make(props);
	return new UnknownGraphQLError({
		...props,
		coordinate: root?.field
	});
};
const uniqueByTag = (specs) => [...new Map(specs.map((spec) => [spec.tag, spec])).values()];
const ofQuery = (value) => make$1({
	_tag: "Literal",
	value,
	type: { tag: "scalar" }
});
const filterImpl = (source, predicate) => {
	const predicateQuery = predicate(itemQuery(source));
	printExpr(predicateQuery.expr);
	return make$1({
		_tag: "Filter",
		parent: source.expr,
		predicate: predicateQuery.expr,
		type: source.expr.type
	});
};
function filterQuery(sourceOrPredicate, predicate) {
	if (predicate === void 0) return (source) => filterImpl(source, sourceOrPredicate);
	return filterImpl(sourceOrPredicate, predicate);
}
const mapImpl = (source, mapFn) => {
	if (source.expr.type.tag === "object") {
		const mapped = mapFn(new QueryNode({
			_tag: "Item",
			list: source.expr,
			type: source.expr.type
		}));
		printExpr(source.expr);
		return make$1({
			_tag: "MapItems",
			parent: source.expr,
			mapped,
			single: true,
			type: { tag: "scalar" }
		});
	}
	if (source.expr.type.tag === "list") {
		const mapped = mapFn(itemQuery(source));
		printExpr(source.expr);
		return make$1({
			_tag: "MapItems",
			parent: source.expr,
			mapped,
			type: source.expr.type
		});
	}
	printExpr(source.expr);
	return make$1({
		_tag: "MapValue",
		parent: source.expr,
		mapFn,
		type: { tag: "scalar" }
	});
};
function mapQuery(sourceOrMapFn, mapFn) {
	if (mapFn === void 0) return (source) => mapImpl(source, sourceOrMapFn);
	return mapImpl(sourceOrMapFn, mapFn);
}
const flatMapImpl = (source, flatMapFn) => {
	printExpr(source.expr);
	return make$1({
		_tag: "FlatMap",
		parent: source.expr,
		flatMapFn,
		type: { tag: "scalar" }
	});
};
function flatMapQuery(sourceOrFlatMapFn, flatMapFn) {
	if (flatMapFn === void 0) return (source) => flatMapImpl(source, sourceOrFlatMapFn);
	return flatMapImpl(sourceOrFlatMapFn, flatMapFn);
}
const queryFn = (build) => (...args) => {
	const plan = build(...args);
	return evaluatePlan(plan);
};
const connectionOf = (expr) => {
	const base = graphqlBase(expr);
	if (!(base._tag === "Root" && base.connection === true || base._tag === "Prop" && base.field.kind === "connection") || inItem(base)) throw new GqlError(`Query.pages needs a Relay connection, got ${printExpr(base)}`);
	const argTypes = base._tag === "Root" ? base.argTypes : base.field.argTypes;
	if (!argTypes || !("after" in argTypes)) throw new GqlError(`${printExpr(base)} takes no "after" cursor`);
	return base;
};
const withCursor = (expr, connection, after) => {
	if (expr === connection) {
		const current = expr;
		return {
			...current,
			args: {
				...current.args,
				after
			}
		};
	}
	switch (expr._tag) {
		case "MapItems":
		case "Filter":
		case "MapValue":
		case "FlatMap": return {
			...expr,
			parent: withCursor(expr.parent, connection, after)
		};
		default: throw new GqlError(`withCursor: ${expr._tag}`);
	}
};
const readPath = (data, path) => {
	let current = data;
	for (const segment of path) {
		if (current == null) return void 0;
		if (Array.isArray(current)) throw new GqlError("Query.pages cannot page a connection inside a list");
		current = current[segment];
	}
	return current;
};
const fetchPage = (query, connection, state) => Effect.gen(function* () {
	const pageExpr = withCursor(query.expr, connection, state.after);
	const forest = emptyForest();
	visitExpr(forest, pageExpr);
	const connectionPath = paintAbs(forest, withCursor(connection, connection, state.after)).slice(0, -2);
	const pageInfo = ensureChild(forest, selAt(forest.roots, connectionPath), "pageInfo", {});
	ensureChild(forest, pageInfo, "hasNextPage", { isScalar: true });
	ensureChild(forest, pageInfo, "endCursor", { isScalar: true });
	const compiled = emit(forest);
	"" + compiled.document;
	const data = yield* execute(compiled);
	const items = yield* interpretPlan(make$1(pageExpr), data, compiled.rootAlias);
	const info = readPath(data, [...connectionPath, "pageInfo"]);
	const cursor = info?.endCursor ?? null;
	if (info?.hasNextPage !== true) return [items ?? [], Option.none()];
	if (cursor === null || cursor === state.after || state.seen.has(cursor)) return yield* new GraphQLPaginationError({
		message: `${printExpr(connection)} returned a non-advancing cursor`,
		cursor
	});
	return [items ?? [], Option.some({
		after: cursor,
		seen: /* @__PURE__ */ new Set([...state.seen, cursor])
	})];
});
const pagesQuery = (query) => Stream.unwrap(Effect.sync(() => {
	const connection = connectionOf(query.expr);
	const after = connection.args?.after;
	return Stream.paginate({
		after: typeof after === "string" ? after : void 0,
		seen: /* @__PURE__ */ new Set()
	}, (state) => fetchPage(query, connection, state).pipe(Effect.map(([items, next]) => [[items], next])));
}));
const itemsQuery = (query) => pagesQuery(query).pipe(Stream.flatMap(Stream.fromIterable));

//#endregion
export { GqlError, GqlTransport, GraphQLFailure, GraphQLPaginationError, GraphQLTransportError, QueryNode, QuerySymbol, UnknownGraphQLError, connectionField, errorFields, errorSpec, filterQuery, flatMapQuery, isQuery, itemsQuery, listField, mapQuery, objectField, ofQuery, pagesQuery, queryFn, root, rootConnection, rootLeaf, rootList, scalarField, graphql_exports as t };