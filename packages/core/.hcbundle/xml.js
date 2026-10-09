import * as Effect from "effect/Effect";
import * as Data from "effect/Data";

//#region lib/xml.js
var XmlParseError = class extends Data.TaggedError("XmlParseError") {};
const namePattern = /[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}.\-0-9\u00B7\u0300-\u036F\u203F-\u2040]*/uy;
const invalidCharacter = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/u;
const xmlSpace = /^[\t\n\r ]*$/;
const declarationPattern = /^xml[\t\n\r ]+version[\t\n\r ]*=[\t\n\r ]*(?:"1\.0"|'1\.0')(?:[\t\n\r ]+encoding[\t\n\r ]*=[\t\n\r ]*(?:"[A-Za-z][A-Za-z0-9._-]*"|'[A-Za-z][A-Za-z0-9._-]*'))?(?:[\t\n\r ]+standalone[\t\n\r ]*=[\t\n\r ]*(?:"(?:yes|no)"|'(?:yes|no)'))?[\t\n\r ]*$/;
function parseXmlSync(xml, options = {}) {
	let pos = xml.charCodeAt(0) === 65279 ? 1 : 0;
	const start = pos;
	const maxDepth = options.maxDepth ?? 256;
	const maxLength = options.maxLength ?? 67108864;
	const stack = [];
	const document = Object.create(null);
	let hasRoot = false;
	function fail(message, offset = pos) {
		offset = Math.min(offset, xml.length);
		const lines = xml.slice(0, offset).split(/\r\n|[\r\n]/);
		const line = lines.length;
		const column = lines[line - 1].length + 1;
		throw new XmlParseError({
			message: `${message} at ${line}:${column}`,
			offset,
			line,
			column
		});
	}
	if (!Number.isSafeInteger(maxDepth) || maxDepth < 1) fail("Invalid maxDepth");
	if (!Number.isSafeInteger(maxLength) || maxLength < 0) fail("Invalid maxLength");
	if (xml.length > maxLength) fail("XML input length limit exceeded", 0);
	const invalid = invalidCharacter.exec(xml);
	if (invalid) fail("Invalid XML character", invalid.index);
	if (xmlSpace.test(xml.slice(start))) return document;
	function skipSpace() {
		const before = pos;
		while (pos < xml.length) {
			const c = xml.charCodeAt(pos);
			if (c !== 32 && c !== 9 && c !== 10 && c !== 13) break;
			pos++;
		}
		return pos !== before;
	}
	function readName() {
		namePattern.lastIndex = pos;
		const match = namePattern.exec(xml);
		if (!match) fail("Expected XML name");
		pos = namePattern.lastIndex;
		return match[0];
	}
	function decode(raw, offset, attribute = false) {
		const parts = [];
		let from = 0;
		while (from < raw.length) {
			const amp = raw.indexOf("&", from);
			const end = amp < 0 ? raw.length : amp;
			const literal = raw.slice(from, end);
			parts.push(attribute ? literal.replace(/\r\n|[\t\r\n]/g, " ") : literal.replace(/\r\n?/g, "\n"));
			if (amp < 0) break;
			const semi = raw.indexOf(";", amp + 1);
			if (semi < 0) fail("Unterminated entity reference", offset + amp);
			const entity = raw.slice(amp + 1, semi);
			switch (entity) {
				case "amp":
					parts.push("&");
					break;
				case "lt":
					parts.push("<");
					break;
				case "gt":
					parts.push(">");
					break;
				case "quot":
					parts.push("\"");
					break;
				case "apos":
					parts.push("'");
					break;
				default: {
					if (!/^#(?:[0-9]+|x[0-9a-fA-F]+)$/.test(entity)) fail("Unknown or invalid entity reference", offset + amp);
					const code = entity[1] === "x" ? Number.parseInt(entity.slice(2), 16) : Number.parseInt(entity.slice(1), 10);
					if (!(code === 9 || code === 10 || code === 13 || code >= 32 && code <= 55295 || code >= 57344 && code <= 65533 || code >= 65536 && code <= 1114111)) fail("Invalid character reference", offset + amp);
					parts.push(String.fromCodePoint(code));
				}
			}
			from = semi + 1;
		}
		return parts.join("");
	}
	function finish(element) {
		const text = element.text.join("");
		let value;
		if (!element.hasChildren && !element.hasAttributes) value = text;
		else {
			if (text && (!element.hasChildren || element.hasCdata || !xmlSpace.test(text))) element.object["#text"] = text;
			value = element.object;
		}
		const parent = stack[stack.length - 1];
		const target = parent ? parent.object : document;
		if (parent) parent.hasChildren = true;
		if (!Object.hasOwn(target, element.name)) target[element.name] = value;
		else {
			const previous = target[element.name];
			if (Array.isArray(previous)) previous.push(value);
			else target[element.name] = [previous, value];
		}
	}
	while (pos < xml.length) {
		if (xml[pos] !== "<") {
			const offset = pos;
			const next = xml.indexOf("<", pos);
			pos = next < 0 ? xml.length : next;
			const raw = xml.slice(offset, pos);
			const element = stack[stack.length - 1];
			if (!element) {
				if (!xmlSpace.test(raw)) fail("Text outside root element", offset);
			} else {
				const cdataEnd = raw.indexOf("]]>");
				if (cdataEnd >= 0) fail("Unexpected CDATA terminator", offset + cdataEnd);
				element.text.push(decode(raw, offset));
			}
			continue;
		}
		if (xml.startsWith("<!--", pos)) {
			const end = xml.indexOf("-->", pos + 4);
			if (end < 0) fail("Unterminated comment");
			const comment = xml.slice(pos + 4, end);
			if (comment.includes("--") || comment.endsWith("-")) fail("Invalid comment");
			pos = end + 3;
		} else if (xml.startsWith("<![CDATA[", pos)) {
			const element = stack[stack.length - 1];
			if (!element) fail("CDATA outside root element");
			const end = xml.indexOf("]]>", pos + 9);
			if (end < 0) fail("Unterminated CDATA");
			element.text.push(xml.slice(pos + 9, end).replace(/\r\n?/g, "\n"));
			element.hasCdata = true;
			pos = end + 3;
		} else if (xml.startsWith("<?", pos)) {
			const offset = pos;
			pos += 2;
			const target = readName();
			if (!xml.startsWith("?>", pos) && !skipSpace()) fail("Expected PI whitespace");
			const end = xml.indexOf("?>", pos);
			if (end < 0) fail("Unterminated processing instruction", offset);
			if (target.toLowerCase() === "xml") {
				if (offset !== start || !declarationPattern.test(xml.slice(offset + 2, end))) fail("Invalid or misplaced XML declaration", offset);
			}
			pos = end + 2;
		} else if (xml.startsWith("<!", pos)) fail("DTDs and markup declarations are not supported");
		else if (xml.startsWith("</", pos)) {
			pos += 2;
			const name = readName();
			skipSpace();
			if (xml[pos] !== ">") fail("Expected closing tag terminator");
			const element = stack.pop();
			if (!element || element.name !== name) fail("Mismatched closing tag");
			pos++;
			finish(element);
		} else {
			if (stack.length >= maxDepth) fail("XML depth limit exceeded");
			if (stack.length === 0) {
				if (hasRoot) fail("Multiple root elements");
				hasRoot = true;
			}
			pos++;
			const element = {
				name: readName(),
				object: Object.create(null),
				text: [],
				hasChildren: false,
				hasAttributes: false,
				hasCdata: false
			};
			while (true) {
				const spaced = skipSpace();
				if (xml.startsWith("/>", pos)) {
					pos += 2;
					finish(element);
					break;
				}
				if (xml[pos] === ">") {
					pos++;
					stack.push(element);
					break;
				}
				if (!spaced) fail("Expected whitespace or tag terminator");
				const key = `@_${readName()}`;
				if (Object.hasOwn(element.object, key)) fail("Duplicate attribute");
				skipSpace();
				if (xml[pos++] !== "=") fail("Expected attribute equals sign");
				skipSpace();
				const quote = xml[pos++];
				if (quote !== "\"" && quote !== "'") fail("Expected quoted attribute");
				const end = xml.indexOf(quote, pos);
				if (end < 0) fail("Unterminated attribute");
				const raw = xml.slice(pos, end);
				if (raw.includes("<")) fail("Unescaped '<' in attribute");
				element.object[key] = decode(raw, pos, true);
				element.hasAttributes = true;
				pos = end + 1;
			}
		}
	}
	if (stack.length) fail("Unclosed element");
	if (!hasRoot) fail("Missing root element");
	return document;
}
const parseXml = (xml, options) => Effect.suspend(() => {
	try {
		return Effect.succeed(parseXmlSync(xml, options));
	} catch (error) {
		if (error instanceof XmlParseError) return Effect.fail(error);
		throw error;
	}
});
const xmlEscapes = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&apos;"
};
const escapeXml = (s) => s.replace(/[&<>"']/g, (c) => xmlEscapes[c]);
const wrapTag = (tag, content, xmlns) => `<${tag}${xmlns ? ` xmlns="${escapeXml(xmlns)}"` : ""}>${content}</${tag}>`;

//#endregion
export { XmlParseError, escapeXml, parseXml, parseXmlSync, wrapTag };