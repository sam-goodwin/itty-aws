import * as Data from "effect/Data";
import * as Effect from "effect/Effect";

export type XmlValue = string | XmlObject | XmlValue[];
export interface XmlObject {
  [name: string]: XmlValue;
}

export class XmlParseError
  extends /*@__PURE__*/ Data.TaggedError("XmlParseError")<{
    readonly message: string;
    /** UTF-16 offset in the original input; line and column are one-based. */
    readonly offset: number;
    readonly line: number;
    readonly column: number;
  }> {}

export interface XmlParseOptions {
  /** Maximum open elements, including the root. Defaults to 256. */
  readonly maxDepth?: number;
  /** Maximum input length in UTF-16 code units. Defaults to 64 Mi. */
  readonly maxLength?: number;
}

// XML 1.0 (Fifth Edition) NameStartChar / NameChar, including astral names.
const namePattern =
  // XML NameChar explicitly includes combining marks as individual code points.
  // eslint-disable-next-line no-misleading-character-class
  /[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}.\-0-9\u00B7\u0300-\u036F\u203F-\u2040]*/uy;
const invalidCharacter =
  // XML 1.0 forbids these literal controls and unpaired surrogates.
  // eslint-disable-next-line no-control-regex
  /[\u0000-\u0008\u000B\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/u;
const xmlSpace = /^[\t\n\r ]*$/;
const declarationPattern =
  /^xml[\t\n\r ]+version[\t\n\r ]*=[\t\n\r ]*(?:"1\.0"|'1\.0')(?:[\t\n\r ]+encoding[\t\n\r ]*=[\t\n\r ]*(?:"[A-Za-z][A-Za-z0-9._-]*"|'[A-Za-z][A-Za-z0-9._-]*'))?(?:[\t\n\r ]+standalone[\t\n\r ]*=[\t\n\r ]*(?:"(?:yes|no)"|'(?:yes|no)'))?[\t\n\r ]*$/;

/**
 * The prototype of every object the parser returns. It has no prototype
 * itself, so element names such as `__proto__` or `constructor` are plain
 * own keys, as with `Object.create(null)` -- but V8 keeps objects with a
 * non-null prototype in fast mode, which makes parsing about three times
 * faster.
 */
const nodeProto: object = /*@__PURE__*/ Object.create(null);
const newNode = (): XmlObject => Object.create(nodeProto);

interface Element {
  name: string;
  object: XmlObject;
  text: string[];
  hasChildren: boolean;
  hasAttributes: boolean;
  hasCdata: boolean;
}

/**
 * Parse DTD-free XML 1.0. Values remain strings;
 * repeated children become arrays, attributes use @_ and mixed text uses #text.
 * Names are preserved verbatim (no namespace resolution). Comments and PIs are
 * ignored. Text whitespace is preserved, except layout-only text in containers.
 * Empty HTTP bodies produce {}. This is not a DOM or a validating DTD processor.
 * Throws XmlParseError for malformed input or exceeded limits.
 * The iterative scanner allocates no Effects while traversing the document.
 */
export function parseXmlSync(xml: string, options: XmlParseOptions = {}): XmlObject {
  const maxDepth = options.maxDepth ?? 256;
  const maxLength = options.maxLength ?? 64 * 1024 * 1024;
  if (
    Number.isSafeInteger(maxDepth) &&
    maxDepth >= 1 &&
    Number.isSafeInteger(maxLength) &&
    xml.length <= maxLength
  ) {
    const fast = parsePlain(xml, maxDepth);
    if (fast !== undefined) return fast;
  }
  return parseXmlFull(xml, options);
}

//#region Plain documents

// Everything the full parser accepts, minus comments, CDATA, processing
// instructions (other than the XML declaration) and non-ASCII names: what
// AWS and most HTTP APIs send. `parsePlain` returns `undefined` for any
// other input, and for any input the full parser rejects, so the full
// parser decides those (and reports the error).

/** Characters that need the full parser's check: controls, surrogates, U+FFFE/F. */
const unusualCharacter = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/;

const isSpace = (c: number): boolean => c === 32 || c === 9 || c === 10 || c === 13;

/** ASCII NameStartChar. */
const isNameStart = (c: number): boolean =>
  (c >= 97 && c <= 122) || (c >= 65 && c <= 90) || c === 95 || c === 58;

/** ASCII NameChar. */
const isNameChar = (c: number): boolean =>
  isNameStart(c) || (c >= 48 && c <= 57) || c === 46 || c === 45;

/** The full parser's `decode`, returning `undefined` where it would fail. */
const decodePlain = (raw: string, attribute: boolean): string | undefined => {
  if (raw.indexOf("&") < 0) {
    if (attribute) {
      return /[\t\r\n]/.test(raw) ? raw.replace(/\r\n|[\t\r\n]/g, " ") : raw;
    }
    return raw.indexOf("\r") < 0 ? raw : raw.replace(/\r\n?/g, "\n");
  }
  let out = "";
  let from = 0;
  while (from < raw.length) {
    const amp = raw.indexOf("&", from);
    const end = amp < 0 ? raw.length : amp;
    const literal = raw.slice(from, end);
    out += attribute ? literal.replace(/\r\n|[\t\r\n]/g, " ") : literal.replace(/\r\n?/g, "\n");
    if (amp < 0) break;
    const semi = raw.indexOf(";", amp + 1);
    if (semi < 0) return undefined;
    const entity = raw.slice(amp + 1, semi);
    switch (entity) {
      case "amp":
        out += "&";
        break;
      case "lt":
        out += "<";
        break;
      case "gt":
        out += ">";
        break;
      case "quot":
        out += '"';
        break;
      case "apos":
        out += "'";
        break;
      default: {
        if (!/^#(?:[0-9]+|x[0-9a-fA-F]+)$/.test(entity)) return undefined;
        const code =
          entity[1] === "x"
            ? Number.parseInt(entity.slice(2), 16)
            : Number.parseInt(entity.slice(1), 10);
        if (
          !(
            code === 9 ||
            code === 10 ||
            code === 13 ||
            (code >= 0x20 && code <= 0xd7ff) ||
            (code >= 0xe000 && code <= 0xfffd) ||
            (code >= 0x10000 && code <= 0x10ffff)
          )
        ) {
          return undefined;
        }
        out += String.fromCodePoint(code);
      }
    }
    from = semi + 1;
  }
  return out;
};

const HAS_CHILDREN = 1;
const HAS_ATTRIBUTES = 2;

/**
 * Parse a plain document (see above) into the same value as the full
 * parser, or return `undefined` to hand the document to it.
 */
const parsePlain = (xml: string, maxDepth: number): XmlObject | undefined => {
  const length = xml.length;
  if (unusualCharacter.test(xml)) return undefined;
  let pos = xml.charCodeAt(0) === 0xfeff ? 1 : 0;
  if (xml.startsWith("<?", pos)) {
    const end = xml.indexOf("?>", pos + 2);
    if (end < 0 || !declarationPattern.test(xml.slice(pos + 2, end))) return undefined;
    pos = end + 2;
  }

  const document: XmlObject = newNode();
  // The open elements, one entry per depth.
  const names: string[] = [];
  const objects: XmlObject[] = [];
  const texts: string[] = [];
  const flags: number[] = [];
  let depth = 0;
  let hasRoot = false;

  /** Read an ASCII name at `pos`; `undefined` when it is not one. */
  const readName = (): string | undefined => {
    const start = pos;
    if (!isNameStart(xml.charCodeAt(pos))) return undefined;
    pos++;
    while (pos < length && isNameChar(xml.charCodeAt(pos))) pos++;
    // A non-ASCII character may continue the name: the full parser decides.
    if (pos < length && xml.charCodeAt(pos) >= 0x80) return undefined;
    return xml.slice(start, pos);
  };

  const add = (name: string, value: XmlValue): void => {
    let target = document;
    if (depth > 0) {
      target = objects[depth - 1]!;
      flags[depth - 1]! |= HAS_CHILDREN;
    }
    if (!Object.hasOwn(target, name)) target[name] = value;
    else {
      const previous = target[name];
      if (Array.isArray(previous)) previous.push(value);
      else target[name] = [previous!, value];
    }
  };

  /** The value of a finished element, as the full parser's `finish` makes it. */
  const valueOf = (object: XmlObject, text: string, elementFlags: number): XmlValue => {
    if (elementFlags === 0) return text;
    if (text && (!(elementFlags & HAS_CHILDREN) || !xmlSpace.test(text))) {
      object["#text"] = text;
    }
    return object;
  };

  while (pos < length) {
    if (xml.charCodeAt(pos) !== 60) {
      let next = xml.indexOf("<", pos);
      if (next < 0) next = length;
      if (depth === 0) {
        for (let i = pos; i < next; i++) if (!isSpace(xml.charCodeAt(i))) return undefined;
      } else {
        const raw = xml.slice(pos, next);
        if (raw.includes("]]>")) return undefined;
        const text = decodePlain(raw, false);
        if (text === undefined) return undefined;
        texts[depth - 1] += text;
      }
      pos = next;
      continue;
    }

    const second = xml.charCodeAt(pos + 1);
    if (second === 47) {
      // Closing tag
      pos += 2;
      const name = readName();
      if (name === undefined) return undefined;
      while (pos < length && isSpace(xml.charCodeAt(pos))) pos++;
      if (xml.charCodeAt(pos) !== 62) return undefined;
      pos++;
      if (depth === 0 || names[depth - 1] !== name) return undefined;
      depth--;
      add(name, valueOf(objects[depth]!, texts[depth]!, flags[depth]!));
      continue;
    }
    // Comments, CDATA, declarations and processing instructions.
    if (second === 33 || second === 63) return undefined;

    // Opening tag
    if (depth >= maxDepth) return undefined;
    if (depth === 0) {
      if (hasRoot) return undefined;
      hasRoot = true;
    }
    pos++;
    const name = readName();
    if (name === undefined) return undefined;
    const object: XmlObject = newNode();
    let elementFlags = 0;
    while (true) {
      const before = pos;
      while (pos < length && isSpace(xml.charCodeAt(pos))) pos++;
      const c = xml.charCodeAt(pos);
      if (c === 47 && xml.charCodeAt(pos + 1) === 62) {
        pos += 2;
        add(name, valueOf(object, "", elementFlags));
        break;
      }
      if (c === 62) {
        pos++;
        names[depth] = name;
        objects[depth] = object;
        texts[depth] = "";
        flags[depth] = elementFlags;
        depth++;
        break;
      }
      if (pos === before) return undefined;
      const attribute = readName();
      if (attribute === undefined) return undefined;
      const key = `@_${attribute}`;
      if (Object.hasOwn(object, key)) return undefined;
      while (pos < length && isSpace(xml.charCodeAt(pos))) pos++;
      if (xml.charCodeAt(pos) !== 61) return undefined;
      pos++;
      while (pos < length && isSpace(xml.charCodeAt(pos))) pos++;
      const quote = xml[pos];
      if (quote !== '"' && quote !== "'") return undefined;
      pos++;
      const end = xml.indexOf(quote, pos);
      if (end < 0) return undefined;
      const raw = xml.slice(pos, end);
      if (raw.includes("<")) return undefined;
      const value = decodePlain(raw, true);
      if (value === undefined) return undefined;
      object[key] = value;
      elementFlags |= HAS_ATTRIBUTES;
      pos = end + 1;
    }
  }
  if (depth !== 0 || !hasRoot) return undefined;
  return document;
};

//#endregion

/**
 * The complete parser behind {@link parseXmlSync}, without its fast path for
 * plain documents. Same results; exported for differential tests.
 */
export function parseXmlFull(xml: string, options: XmlParseOptions = {}): XmlObject {
  let pos = xml.charCodeAt(0) === 0xfeff ? 1 : 0;
  const start = pos;
  const maxDepth = options.maxDepth ?? 256;
  const maxLength = options.maxLength ?? 64 * 1024 * 1024;
  const stack: Element[] = [];
  const document: XmlObject = newNode();
  let hasRoot = false;

  function fail(message: string, offset = pos): never {
    offset = Math.min(offset, xml.length);
    const lines = xml.slice(0, offset).split(/\r\n|[\r\n]/);
    const line = lines.length;
    const column = lines[line - 1].length + 1;
    throw new XmlParseError({
      message: `${message} at ${line}:${column}`,
      offset,
      line,
      column,
    });
  }

  if (!Number.isSafeInteger(maxDepth) || maxDepth < 1) fail("Invalid maxDepth");
  if (!Number.isSafeInteger(maxLength) || maxLength < 0) fail("Invalid maxLength");
  if (xml.length > maxLength) fail("XML input length limit exceeded", 0);
  const invalid = invalidCharacter.exec(xml);
  if (invalid) fail("Invalid XML character", invalid.index);
  if (xmlSpace.test(xml.slice(start))) return document;

  function skipSpace(): boolean {
    const before = pos;
    while (pos < xml.length) {
      const c = xml.charCodeAt(pos);
      if (c !== 32 && c !== 9 && c !== 10 && c !== 13) break;
      pos++;
    }
    return pos !== before;
  }

  function readName(): string {
    namePattern.lastIndex = pos;
    const match = namePattern.exec(xml);
    if (!match) fail("Expected XML name");
    pos = namePattern.lastIndex;
    return match[0];
  }

  function decode(raw: string, offset: number, attribute = false): string {
    const parts: string[] = [];
    let from = 0;
    while (from < raw.length) {
      const amp = raw.indexOf("&", from);
      const end = amp < 0 ? raw.length : amp;
      const literal = raw.slice(from, end);
      parts.push(
        attribute ? literal.replace(/\r\n|[\t\r\n]/g, " ") : literal.replace(/\r\n?/g, "\n"),
      );
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
          parts.push('"');
          break;
        case "apos":
          parts.push("'");
          break;
        default: {
          if (!/^#(?:[0-9]+|x[0-9a-fA-F]+)$/.test(entity)) {
            fail("Unknown or invalid entity reference", offset + amp);
          }
          const code =
            entity[1] === "x"
              ? Number.parseInt(entity.slice(2), 16)
              : Number.parseInt(entity.slice(1), 10);
          if (
            !(
              code === 9 ||
              code === 10 ||
              code === 13 ||
              (code >= 0x20 && code <= 0xd7ff) ||
              (code >= 0xe000 && code <= 0xfffd) ||
              (code >= 0x10000 && code <= 0x10ffff)
            )
          ) {
            fail("Invalid character reference", offset + amp);
          }
          parts.push(String.fromCodePoint(code));
        }
      }
      from = semi + 1;
    }
    return parts.join("");
  }

  function finish(element: Element): void {
    const text = element.text.join("");
    let value: XmlValue;
    if (!element.hasChildren && !element.hasAttributes) {
      value = text;
    } else {
      if (text && (!element.hasChildren || element.hasCdata || !xmlSpace.test(text))) {
        element.object["#text"] = text;
      }
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
        if (offset !== start || !declarationPattern.test(xml.slice(offset + 2, end))) {
          fail("Invalid or misplaced XML declaration", offset);
        }
      }
      pos = end + 2;
    } else if (xml.startsWith("<!", pos)) {
      fail("DTDs and markup declarations are not supported");
    } else if (xml.startsWith("</", pos)) {
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
      const element: Element = {
        name: readName(),
        object: newNode(),
        text: [],
        hasChildren: false,
        hasAttributes: false,
        hasCdata: false,
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
        const name = readName();
        const key = `@_${name}`;
        if (Object.hasOwn(element.object, key)) fail("Duplicate attribute");
        skipSpace();
        if (xml[pos++] !== "=") fail("Expected attribute equals sign");
        skipSpace();
        const quote = xml[pos++];
        if (quote !== '"' && quote !== "'") fail("Expected quoted attribute");
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

/** Parse XML lazily, reporting malformed documents in the typed error channel. */
export const parseXml = (
  xml: string,
  options?: XmlParseOptions,
): Effect.Effect<XmlObject, XmlParseError> =>
  Effect.suspend(() => {
    try {
      return Effect.succeed(parseXmlSync(xml, options));
    } catch (error) {
      if (error instanceof XmlParseError) return Effect.fail(error);
      throw error;
    }
  });

const xmlEscapes: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

/**
 * Escape special XML characters in a string.
 */
export const escapeXml = (s: string): string => s.replace(/[&<>"']/g, (c) => xmlEscapes[c]);

// =============================================================================
// XML Tag Helpers
// =============================================================================

/**
 * Wrap content in an XML tag with optional xmlns attribute.
 */
export const wrapTag = (tag: string, content: string, xmlns?: string): string =>
  `<${tag}${xmlns ? ` xmlns="${escapeXml(xmlns)}"` : ""}>${content}</${tag}>`;
