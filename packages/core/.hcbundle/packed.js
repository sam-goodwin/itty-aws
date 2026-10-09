import { lazyFrom } from "./schema.js";

//#region lib/packed.js
const isNameStart = (c) => c >= 65 && c <= 90 || c >= 97 && c <= 122 || c === 95 || c === 36;
const isNameChar = (c) => isNameStart(c) || c >= 48 && c <= 57;
const evaluate = (text, args, scope) => {
	let i = 0;
	let scopeValue;
	const lookup = (name) => {
		switch (name) {
			case "true": return true;
			case "false": return false;
			case "null": return null;
			case "undefined": return;
		}
		const sc = scopeValue ??= scope();
		if (!(name in sc)) throw new Error(`packed schema: unknown name ${name}`);
		return sc[name];
	};
	const name = () => {
		const start = i;
		while (i < text.length && isNameChar(text.charCodeAt(i))) i++;
		return text.slice(start, i);
	};
	const string = () => {
		const start = i;
		i++;
		while (text[i] !== "\"") i += text[i] === "\\" ? 2 : 1;
		i++;
		return JSON.parse(text.slice(start, i));
	};
	const list = (close) => {
		const out = [];
		if (text[i] === close) {
			i++;
			return out;
		}
		for (;;) {
			out.push(expr());
			const c = text[i++];
			if (c === close) return out;
			if (c !== ",") throw new Error(`packed schema: expected , or ${close} at ${i - 1}`);
		}
	};
	const primary = () => {
		const c = text[i];
		const code = text.charCodeAt(i);
		if (c === "\"") return string();
		if (c === "#") {
			i++;
			const start = i;
			while (i < text.length && text.charCodeAt(i) >= 48 && text.charCodeAt(i) <= 57) i++;
			return args[Number(text.slice(start, i))];
		}
		if (c === ">") {
			i++;
			const start = i;
			skip();
			const body = text.slice(start, i);
			return () => evaluate(body, args, () => scopeValue ??= scope());
		}
		if (c === "{") {
			i++;
			const out = {};
			if (text[i] === "}") {
				i++;
				return out;
			}
			for (;;) {
				const key = text[i] === "\"" ? string() : name();
				if (text[i++] !== ":") throw new Error(`packed schema: expected : at ${i - 1}`);
				out[key] = expr();
				const d = text[i++];
				if (d === "}") return out;
				if (d !== ",") throw new Error(`packed schema: expected , or } at ${i - 1}`);
			}
		}
		if (c === "[") {
			i++;
			return list("]");
		}
		if (c === "-" || code >= 48 && code <= 57) {
			const start = i;
			i++;
			while (i < text.length && /[0-9.eE+\-]/.test(text[i])) i++;
			return Number(text.slice(start, i));
		}
		if (isNameStart(code)) return lookup(name());
		throw new Error(`packed schema: unexpected ${c} at ${i}`);
	};
	const skip = () => {
		let depth = 0;
		for (; i < text.length; i++) {
			const c = text[i];
			if (c === "\"") {
				i++;
				while (text[i] !== "\"") i += text[i] === "\\" ? 2 : 1;
			} else if (c === "(" || c === "{" || c === "[") depth++;
			else if (c === ")" || c === "}" || c === "]") {
				if (depth === 0) return;
				depth--;
			} else if (c === "," && depth === 0) return;
		}
	};
	const expr = () => {
		let value = primary();
		let receiver = void 0;
		for (;;) {
			const c = text[i];
			if (c === ".") {
				i++;
				receiver = value;
				value = value[name()];
			} else if (c === "(") {
				i++;
				const a = list(")");
				value = value.apply(receiver, a);
				receiver = void 0;
			} else return value;
		}
	};
	const result = expr();
	if (i !== text.length) throw new Error(`packed schema: trailing input at ${i}`);
	return result;
};
const packer = (scope) => {
	let scopeValue;
	const getScope = () => scopeValue ??= scope();
	const builder = { build: (data) => {
		const d = data;
		return typeof d === "string" ? evaluate(d, [], getScope) : evaluate(d[0], d.slice(1), getScope);
	} };
	return (text, ...args) => lazyFrom(builder, args.length ? [text, ...args] : text);
};

//#endregion
export { evaluate, packer };