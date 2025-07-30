import { XMLParser } from "fast-xml-parser";

type RenameMap = Record<string, string>;

interface Rules {
  responseSuffix: string;           // e.g. "Response"
  ignoreElementNames: Set<string>;  // e.g. new Set(["requestId"])
  arrayItemKey: string;             // e.g. "item"
  renameContainers: RenameMap;      // e.g. { vpcSet: "Vpcs" }
  capitalizeFirst: (s: string) => string;
  convertPrimitives: boolean;       // convert "true"/"false" → boolean
  keepAsStringFields: Set<string>;  // fields to keep as strings even if they look like numbers
}

const defaultRules: Rules = {
  responseSuffix: "Response",
  ignoreElementNames: new Set(["requestId"]),
  arrayItemKey: "item",
  // Customize as you like; this gets your example exactly:
  renameContainers: {
    vpcSet: "Vpcs",
  },
  capitalizeFirst: (s: string) => (s.length ? s[0].toUpperCase() + s.slice(1) : s),
  convertPrimitives: true,
  keepAsStringFields: new Set(["ownerId", "OwnerId", "accountId", "AccountId"]),
};

const parser = new XMLParser({
  ignoreAttributes: true,        // drop xmlns, etc.
  trimValues: true,
  parseTagValue: true,
});

/** Entry point: parse XML and transform per rules. */
export function transformXmlToJson(xml: string, rules: Partial<Rules> = {}): any {
  const opts = { ...defaultRules, ...rules };
  const doc = parser.parse(xml);
  const responseNode = findFirstResponseNode(doc, opts.responseSuffix);
  if (!responseNode || typeof responseNode !== "object") {
    // Fallback to whole doc if no "*Response" node found
    return transformObject(doc, opts, true);
  }
  // Only transform contents (children) of the *Response element - this is the top level
  return transformObject(responseNode, opts, true);
}

/** DFS search for the first key ending with "*Response". */
function findFirstResponseNode(obj: any, suffix: string): any | undefined {
  if (!obj || typeof obj !== "object") return undefined;
  for (const k of Object.keys(obj)) {
    if (k.endsWith(suffix)) return obj[k];
  }
  // Recurse into children (depth-first)
  for (const k of Object.keys(obj)) {
    const child = obj[k];
    if (child && typeof child === "object") {
      const found = findFirstResponseNode(child, suffix);
      if (found !== undefined) return found;
    }
  }
  return undefined;
}

/** Transform any JS value (object/array/primitive) per rules. */
function transformAny(value: any, opts: Rules, currentKey?: string, isTopLevel = false, originalKey?: string): any {
  if (Array.isArray(value)) {
    return value.map((v) => transformAny(v, opts));
  }
  if (isPlainObject(value)) {
    return transformObject(value, opts, isTopLevel);
  }
  return transformLeaf(value, opts, currentKey, originalKey);
}

/** Transform an object: rename keys, handle sets/items, ignore names. */
function transformObject(input: Record<string, any>, opts: Rules, isTopLevel = false): any {
  // Special case: { item: ... } → array
  if (isItemContainer(input, opts.arrayItemKey)) {
    const arr = toArray(input[opts.arrayItemKey]);
    return arr.map((v) => transformAny(v, opts));
  }

  const out: Record<string, any> = {};
  for (const [rawKey, rawVal] of Object.entries(input)) {
    if (opts.ignoreElementNames.has(rawKey)) continue;

    // If this value is an { item: ... } container, flatten it to an array
    const isArrayContainer = isItemContainer(rawVal, opts.arrayItemKey);

    // Determine output key name - only use pluralization for Set suffixes at top level
    const renamed = opts.renameContainers[rawKey] ?? 
      (isArrayContainer 
        ? (isTopLevel ? pluralizeSetName(rawKey) : opts.capitalizeFirst(rawKey))
        : (rawKey.endsWith("Set") && isTopLevel)
          ? pluralizeSetName(rawKey)
          : opts.capitalizeFirst(rawKey));

    // Transform value (not top level anymore for nested objects)
    const transformedValue = isArrayContainer
      ? toArray((rawVal as any)[opts.arrayItemKey]).map((v) => transformAny(v, opts, undefined, false))
      : transformAny(rawVal, opts, renamed, false, rawKey);

    out[renamed] = transformedValue;
  }
  return out;
}

/** Transform a leaf value (string/number/boolean/null) per rules. */
function transformLeaf(v: any, opts: Rules, currentKey?: string, originalKey?: string): any {
  if (!opts.convertPrimitives || typeof v !== "string") return v;
  const s = v.trim();

  // Keep certain fields as strings even if they look like numbers
  // Check both the original key and the transformed key
  if ((currentKey && opts.keepAsStringFields.has(currentKey)) || 
      (originalKey && opts.keepAsStringFields.has(originalKey))) {
    return s;
  }

  // booleans
  if (s === "true") return true;
  if (s === "false") return false;

  // numbers (optional; comment out if you want strings preserved)
  if (/^[+-]?\d+(\.\d+)?$/.test(s)) {
    const n = Number(s);
    if (!Number.isNaN(n)) return n;
  }

  return s;
}

function isPlainObject(v: any): v is Record<string, any> {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

function isItemContainer(v: any, itemKey: string): boolean {
  return isPlainObject(v) && Object.keys(v).length === 1 && Object.prototype.hasOwnProperty.call(v, itemKey);
}

function toArray<T>(v: T | T[]): T[] {
  return Array.isArray(v) ? v : [v];
}

/** Convert "Set" suffix to plural form with capitalized first letter */
function pluralizeSetName(name: string): string {
  if (name.endsWith("Set")) {
    const base = name.slice(0, -3); // Remove "Set"
    // Simple pluralization: add "s" 
    const plural = base + "s";
    return plural.charAt(0).toUpperCase() + plural.slice(1);
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
}
