#!/usr/bin/env bun
/**
 * spec-to-smithy — convert the downloaded Cloudflare API markdown specs into
 * Smithy 2.0 JSON models.
 *
 * Input:  specs/api/resources/**\/methods/**\/index.md
 *         (the per-method markdown pages produced by download-api-docs.ts)
 * Output: .generated-specs/*.json  (one Smithy JSON model per top-level
 *         resource, plus a shared protocol model)
 *
 * ─── Thinking in protocols ──────────────────────────────────────────────────
 * Every Cloudflare response is wrapped in a v4 envelope:
 *
 *   { "success": true, "errors": [], "messages": [], "result": <payload>,
 *     "result_info": { ...pagination... } }
 *
 * `success` / `errors` / `messages` / `result_info` are NOT part of any
 * operation's response — they belong to the *protocol*. Only `result` is the
 * operation payload. So we model the envelope ONCE as a custom Smithy protocol
 * (`com.cloudflare.protocols#v4Json`) and give every operation an output shape
 * that describes the *unwrapped* `result` directly.
 *
 * ─── What gets tagged where ─────────────────────────────────────────────────
 * For each operation we emit an input/output structure whose members are tagged
 * so it's obvious where each field travels on the wire:
 *   • path params  → `smithy.api#httpLabel`  (+ required)
 *   • query params → `smithy.api#httpQuery`
 *   • header params→ `smithy.api#httpHeader`
 *   • body params  → plain members (serialized into the JSON request body)
 *   • response     → members of the output structure (the unwrapped `result`)
 * plus `smithy.api#required`, `smithy.api#jsonName`, and `smithy.api#documentation`.
 *
 * Usage:
 *   bun scripts/spec-to-smithy.ts
 *   bun scripts/spec-to-smithy.ts --resource ai          # one top-level resource
 *   bun scripts/spec-to-smithy.ts --limit 50             # first N operations
 *   bun scripts/spec-to-smithy.ts --specs specs/api/resources --out .generated-specs
 */

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import { Flag } from "effect/unstable/cli";
import { Command } from "effect/unstable/cli";

// ============================================================================
// Namespaces
// ============================================================================

const PROTOCOL_NS = "com.cloudflare.protocols";
const RESOURCE_NS = (top: string) => `com.cloudflare.${sanitizeNsSegment(top)}`;

// Smithy prelude shape ids we reference.
const PRELUDE = {
  Unit: "smithy.api#Unit",
  String: "smithy.api#String",
  Boolean: "smithy.api#Boolean",
  Double: "smithy.api#Double",
  Integer: "smithy.api#Integer",
  Timestamp: "smithy.api#Timestamp",
  Document: "smithy.api#Document",
} as const;

// ============================================================================
// String helpers
// ============================================================================

const sanitizeNsSegment = (s: string): string => {
  let out = s.toLowerCase().replace(/[^a-z0-9_]/g, "_");
  if (/^[0-9]/.test(out)) out = `_${out}`;
  return out || "_";
};

/** snake/kebab/space → PascalCase identifier. */
const pascal = (s: string): string => {
  const parts = s.split(/[^A-Za-z0-9]+/).filter(Boolean);
  let out = parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
  if (out === "") out = "Shape";
  if (/^[0-9]/.test(out)) out = `_${out}`;
  return out;
};

/** Keep a JSON field name if it's a valid Smithy member identifier, else sanitize. */
const memberIdent = (name: string): string => {
  let out = name.replace(/[^A-Za-z0-9_]/g, "_");
  if (/^[0-9]/.test(out)) out = `_${out}`;
  return out || "_";
};

const enumMemberName = (value: string): string => {
  let out = value
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  if (out === "") out = "VALUE";
  if (/^[0-9]/.test(out)) out = `_${out}`;
  return out;
};

// ============================================================================
// Markdown parsing
// ============================================================================

/** A node in the indented `- \`name: type\`` field tree. */
interface FieldNode {
  name: string;
  typeStr: string;
  doc?: string;
  binding?: "label" | "query" | "header" | "body";
  children: FieldNode[];
}

interface ParsedOp {
  title: string;
  method: string;
  uri: string;
  doc?: string;
  pathParams: FieldNode[];
  queryParams: FieldNode[];
  headerParams: FieldNode[];
  bodyParams: FieldNode[];
  returns: FieldNode[];
}

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"];

/** Split `optional <type>` into its parts. */
const stripOptional = (
  typeStr: string,
): { optional: boolean; core: string } => {
  const t = typeStr.trim();
  if (t.startsWith("optional ")) {
    return { optional: true, core: t.slice("optional ".length).trim() };
  }
  return { optional: false, core: t };
};

/**
 * Parse the indented bullet list of a section (Path/Query/Body/Returns) into a
 * tree of FieldNodes. Items look like `- \`name: type\`` (or `- \`"literal"\``
 * for enum values, which we ignore — the inline `"a" or "b"` form is canonical).
 * Plain indented prose lines become the preceding item's documentation.
 */
const parseFieldTree = (lines: string[]): FieldNode[] => {
  const itemRe = /^(\s*)-\s+`([^`]+)`\s*$/;
  const roots: FieldNode[] = [];
  // stack of { indent, node }
  const stack: { indent: number; node: FieldNode }[] = [];

  for (const raw of lines) {
    const m = raw.match(itemRe);
    if (m) {
      const indent = m[1].length;
      const content = m[2].trim();
      // Skip bare enum-literal lines like `"asc"` (handled via inline parsing).
      if (/^"(?:[^"\\]|\\.)*"$/.test(content)) {
        continue;
      }
      const colon = content.indexOf(":");
      // Some shared defs use `Name = type`; method pages use `name: type`.
      let name: string;
      let typeStr: string;
      if (colon >= 0) {
        name = content.slice(0, colon).trim();
        typeStr = content.slice(colon + 1).trim();
      } else {
        const eq = content.indexOf("=");
        if (eq >= 0) {
          name = content.slice(0, eq).trim();
          typeStr = content.slice(eq + 1).trim();
        } else {
          name = content.trim();
          typeStr = "unknown";
        }
      }
      // Header/param names are frequently written quoted in the docs
      // (e.g. `"cf-r2-storage-class": ...`). The quotes are markdown emphasis
      // of the literal wire name, never part of the field name itself —
      // strip a single surrounding pair so the httpHeader trait and member
      // ident don't carry stray quote characters.
      if (name.length >= 2 && name.startsWith('"') && name.endsWith('"')) {
        name = name.slice(1, -1);
      }
      const node: FieldNode = { name, typeStr, children: [] };
      while (stack.length && stack[stack.length - 1].indent >= indent) {
        stack.pop();
      }
      if (stack.length) {
        stack[stack.length - 1].node.children.push(node);
      } else {
        roots.push(node);
      }
      stack.push({ indent, node });
      continue;
    }

    // Prose line → documentation for the current item.
    const text = raw.trim();
    if (text && !text.startsWith("```") && stack.length) {
      const node = stack[stack.length - 1].node;
      if (!node.doc) node.doc = text;
    }
  }

  return roots;
};

const parseMarkdown = (md: string): ParsedOp | null => {
  const lines = md.split(/\r?\n/);

  let title = "";
  let method = "";
  let uri = "";
  const descLines: string[] = [];
  const sections = new Map<string, string[]>();

  let i = 0;
  // Title: first ## (or #) heading.
  for (; i < lines.length; i++) {
    const h = lines[i].match(/^#{1,3}\s+(.+?)\s*$/);
    if (h) {
      title = h[1];
      i++;
      break;
    }
  }

  // Method + URI, then description until the first ### section.
  for (; i < lines.length; i++) {
    const line = lines[i];
    if (/^###\s+/.test(line)) break;
    const mm = line.match(/^\*\*(get|post|put|patch|delete)\*\*\s+`([^`]+)`/i);
    if (mm) {
      method = mm[1].toUpperCase();
      uri = mm[2].trim();
      continue;
    }
    if (method && line.trim()) descLines.push(line.trim());
  }

  if (!method || !uri) return null;

  // Collect ### sections (stop content at the next ###/##).
  let current: string | null = null;
  for (; i < lines.length; i++) {
    const line = lines[i];
    const h3 = line.match(/^###\s+(.+?)\s*$/);
    if (h3) {
      current = h3[1];
      if (!sections.has(current)) sections.set(current, []);
      continue;
    }
    if (/^##\s+/.test(line) || /^#\s+/.test(line)) {
      current = null;
      continue;
    }
    if (current) sections.get(current)!.push(line);
  }

  const section = (name: string): FieldNode[] => {
    const l = sections.get(name);
    return l ? parseFieldTree(l) : [];
  };

  return {
    title,
    method,
    uri: uri.split(/[?#]/)[0],
    doc: descLines.join(" ").trim() || undefined,
    pathParams: section("Path Parameters"),
    queryParams: section("Query Parameters"),
    headerParams: section("Header Parameters"),
    bodyParams: section("Body Parameters"),
    returns: section("Returns"),
  };
};

// ============================================================================
// Smithy shape construction
// ============================================================================

interface Bag {
  namespace: string;
  shapes: Record<string, any>;
  names: Set<string>;
}

const newBag = (namespace: string): Bag => ({
  namespace,
  shapes: {},
  names: new Set(),
});

/** Add a shape under a unique PascalCase name; returns its absolute shape id. */
const addShape = (bag: Bag, base: string, def: any): string => {
  const want = pascal(base);
  let name = want;
  let n = 2;
  while (bag.names.has(name)) name = `${want}${n++}`;
  bag.names.add(name);
  const id = `${bag.namespace}#${name}`;
  bag.shapes[id] = def;
  return id;
};

/** Resolve a type descriptor (with `optional ` already stripped) to a shape id. */
const parseTypeCore = (
  core: string,
  node: FieldNode,
  bag: Bag,
  hint: string,
): string => {
  const t = core.trim();

  // Enum: "a" or "b" or "c"
  if (t.startsWith('"')) {
    const literals = Array.from(t.matchAll(/"((?:[^"\\]|\\.)*)"/g)).map(
      (m) => m[1],
    );
    if (literals.length === 0) return PRELUDE.String;
    const members: Record<string, any> = {};
    const used = new Set<string>();
    for (const lit of literals) {
      let mn = enumMemberName(lit);
      let k = 2;
      while (used.has(mn)) mn = `${enumMemberName(lit)}_${k++}`;
      used.add(mn);
      members[mn] = {
        target: PRELUDE.Unit,
        traits: { "smithy.api#enumValue": lit },
      };
    }
    return addShape(bag, hint || "Enum", { type: "enum", members });
  }

  // Object: real fields are the indented children.
  if (t.startsWith("object")) {
    if (!node.children.length) return PRELUDE.Document;
    // Discriminated union of object cases (`object { a } or object { b }`):
    // the docs render each case as a named child. Build a real union so
    // consumers can pattern-match; flattening would merge all cases'
    // discriminant keys into one struct and break `"key" in value` checks.
    if (node.children.length > 1 && node.children.every(isUnionCase)) {
      const caseMembers: Record<string, any> = {};
      const usedCases = new Set<string>();
      node.children.forEach((c, idx) => {
        let cname = pascal(c.name.replace(/\s+object.*$/, "")) || `Case${idx}`;
        while (usedCases.has(cname)) cname = `${cname}_`;
        usedCases.add(cname);
        caseMembers[cname] = {
          target: addShape(bag, `${hint}${cname}`, {
            type: "structure",
            members: buildMembers(bag, c.children, `${hint}${cname}`, "nested"),
          }),
        };
      });
      return addShape(bag, hint, { type: "union", members: caseMembers });
    }
    const members = buildMembers(bag, node.children, hint, "nested");
    return addShape(bag, hint, { type: "structure", members });
  }

  // Array: `array of <subtype>` (or `array <subtype>`).
  if (t.startsWith("array")) {
    const sub = t
      .replace(/^array\s+of\s+/, "")
      .replace(/^array\s+/, "")
      .trim();
    let itemTarget: string;
    if (sub === "") {
      itemTarget = PRELUDE.Document;
    } else if (sub.startsWith("object")) {
      itemTarget = node.children.length
        ? addShape(bag, `${hint}Item`, {
            type: "structure",
            members: buildMembers(bag, node.children, `${hint}Item`, "nested"),
          })
        : PRELUDE.Document;
    } else {
      itemTarget = parseTypeCore(sub, node, bag, `${hint}Item`);
    }
    return addShape(bag, `${hint}List`, {
      type: "list",
      member: { target: itemTarget },
    });
  }

  // Map: map[string]<value>
  if (t.startsWith("map[")) {
    const m = t.match(/^map\[[^\]]*\](.*)$/s);
    const valueStr = (m ? m[1] : "").trim();
    let valueTarget: string;
    if (valueStr === "" || valueStr.includes(" or ")) {
      valueTarget = PRELUDE.Document;
    } else if (valueStr.startsWith("object")) {
      valueTarget = node.children.length
        ? addShape(bag, `${hint}Value`, {
            type: "structure",
            members: buildMembers(bag, node.children, `${hint}Value`, "nested"),
          })
        : PRELUDE.Document;
    } else {
      valueTarget = parseTypeCore(valueStr, node, bag, `${hint}Value`);
    }
    return addShape(bag, `${hint}Map`, {
      type: "map",
      key: { target: PRELUDE.String },
      value: { target: valueTarget },
    });
  }

  // Scalars.
  switch (t) {
    case "string":
      return PRELUDE.String;
    case "boolean":
    case "true":
    case "false":
      return PRELUDE.Boolean;
    case "number":
      return PRELUDE.Double;
    case "integer":
    case "int":
      return PRELUDE.Integer;
    case "unknown":
    case "any":
      return PRELUDE.Document;
    default:
      // Named shared type (e.g. `Namespace`, `ResponseInfo`). The docs inline
      // the full field tree as indented children, so build a structure from
      // them; only a bare name with no children is truly opaque.
      if (node.children.length) {
        const members = buildMembers(bag, node.children, hint, "nested");
        return addShape(bag, hint, { type: "structure", members });
      }
      return PRELUDE.Document;
  }
};

/**
 * Resolve a target for an HTTP-bound member (httpLabel/httpQuery/httpHeader),
 * which Smithy restricts to simple types (or, for query/header, lists of simple
 * types). Object/map/document descriptors are coerced to String — these are
 * Cloudflare's bracket-serialized filter params whose exact wire form varies.
 */
const boundTarget = (
  core: string,
  node: FieldNode,
  bag: Bag,
  hint: string,
  allowList: boolean,
): string => {
  const t = core.trim();
  if (t.startsWith('"')) return parseTypeCore(t, node, bag, hint); // enum is simple
  if (t.startsWith("array")) {
    if (!allowList) return PRELUDE.String;
    const sub = t
      .replace(/^array\s+of\s+/, "")
      .replace(/^array\s+/, "")
      .trim();
    const subTarget =
      sub === "" ||
      sub.startsWith("object") ||
      sub.startsWith("map[") ||
      sub.startsWith("array")
        ? PRELUDE.String
        : boundTarget(sub, node, bag, hint, false);
    return addShape(bag, `${hint}List`, {
      type: "list",
      member: { target: subTarget },
    });
  }
  if (t.startsWith("object") || t.startsWith("map[")) return PRELUDE.String;
  switch (t) {
    case "boolean":
    case "true":
    case "false":
      return PRELUDE.Boolean;
    case "number":
      return PRELUDE.Double;
    case "integer":
    case "int":
      return PRELUDE.Integer;
    default:
      return PRELUDE.String; // string + unknown → String (Document is invalid here)
  }
};

type Role = "input" | "output" | "nested";

/** Build a structure's `members` map from a list of field nodes. */
/**
 * A docs union case: a nameless variant line like
 * `Worker object { consumer_id, created_on, ... }` whose children are that
 * case's fields (the docs render `A | B` object unions this way).
 */
const isUnionCase = (f: FieldNode): boolean =>
  f.typeStr === "unknown" &&
  f.children.length > 0 &&
  /\bobject(\s*\{[^}]*\})?$/.test(f.name);

/**
 * Flatten union-case nodes into their parent's member list: every case's
 * fields merge into one open structure (first occurrence wins), forced
 * optional since presence depends on the variant. Mirrors how the SDK's
 * union types read at runtime — any variant's field may be present.
 */
const expandUnionCases = (fields: FieldNode[]): FieldNode[] => {
  let current = fields;
  while (current.some(isUnionCase)) {
    const out: FieldNode[] = [];
    const seen = new Set<string>();
    for (const f of current) {
      const expanded = isUnionCase(f) ? f.children : [f];
      for (const c of expanded) {
        if (seen.has(c.name)) continue;
        seen.add(c.name);
        out.push(
          isUnionCase(f) && !c.typeStr.startsWith("optional")
            ? { ...c, typeStr: `optional ${c.typeStr}` }
            : c,
        );
      }
    }
    current = out;
  }
  return current;
};

const buildMembers = (
  bag: Bag,
  rawFields: FieldNode[],
  hint: string,
  role: Role,
): Record<string, any> => {
  const members: Record<string, any> = {};
  const used = new Set<string>();
  const fields = expandUnionCases(rawFields);

  for (const f of fields) {
    const { optional, core } = stripOptional(f.typeStr);
    let mname = memberIdent(f.name);
    let k = 2;
    while (used.has(mname)) mname = `${memberIdent(f.name)}_${k++}`;
    used.add(mname);

    const memberHint = `${hint}${pascal(f.name)}`;
    const target =
      f.binding === "label"
        ? boundTarget(core, f, bag, memberHint, false)
        : f.binding === "query" || f.binding === "header"
          ? boundTarget(core, f, bag, memberHint, true)
          : parseTypeCore(core, f, bag, memberHint);
    const traits: Record<string, any> = {};
    if (f.doc) traits["smithy.api#documentation"] = f.doc;

    switch (f.binding) {
      case "label":
        traits["smithy.api#httpLabel"] = {};
        traits["smithy.api#required"] = {};
        break;
      case "query":
        traits["smithy.api#httpQuery"] = f.name;
        if (!optional) traits["smithy.api#required"] = {};
        break;
      case "header":
        traits["smithy.api#httpHeader"] = f.name;
        if (!optional) traits["smithy.api#required"] = {};
        break;
      default:
        // body member or response/nested member → JSON body field.
        if (!optional) traits["smithy.api#required"] = {};
        if (mname !== f.name) traits["smithy.api#jsonName"] = f.name;
    }

    members[mname] = {
      target,
      ...(Object.keys(traits).length ? { traits } : {}),
    };
  }

  return members;
};

const ENVELOPE_KEYS = new Set(["success", "errors", "messages", "result_info"]);

/** Build one operation (plus its input/output shapes) into the bag. */
/**
 * Split a dual-scope operation (docs write `/{accounts_or_zones}/
 * {account_or_zone_id}/…` for endpoints that exist under both accounts and
 * zones) into two concrete operations, `<Name>ForAccount` and `<Name>ForZone`.
 * A single parameterized op would force callers to pass the scope segment
 * explicitly and can never line up with the per-scope operations other
 * Cloudflare tooling exposes.
 */
const splitDualScope = (
  opName: string,
  parsed: ParsedOp,
): Array<{ opName: string; parsed: ParsedOp }> => {
  if (!parsed.uri.includes("{accounts_or_zones}")) {
    return [{ opName, parsed }];
  }
  const scoped = (
    scope: "accounts" | "zones",
    idName: string,
    suffix: string,
  ): { opName: string; parsed: ParsedOp } => ({
    opName: `${opName}${suffix}`,
    parsed: {
      ...parsed,
      uri: parsed.uri
        .replace("{accounts_or_zones}", scope)
        .replace("{account_or_zone_id}", `{${idName}}`),
      pathParams: [
        {
          name: idName,
          typeStr: "string",
          doc: "Identifier.",
          children: [],
        } as FieldNode,
        ...parsed.pathParams.filter(
          (p) =>
            p.name !== "accounts_or_zones" && p.name !== "account_or_zone_id",
        ),
      ],
    },
  });
  return [
    scoped("accounts", "account_id", "ForAccount"),
    scoped("zones", "zone_id", "ForZone"),
  ];
};

const buildOperation = (bag: Bag, opName: string, parsed: ParsedOp): string => {
  // ---- Input ----
  const pathMap = new Map<string, FieldNode>();
  for (const p of parsed.pathParams) pathMap.set(p.name, p);

  // Sanitize URI labels that aren't valid Smithy identifiers (e.g.
  // `{livestream-session-id}`), rewriting the template so the placeholder name
  // matches its httpLabel member. The placeholder name is positional, so the
  // serialized path is unchanged.
  let uri = parsed.uri;
  const rawLabels = Array.from(parsed.uri.matchAll(/\{([^}]+)\}/g)).map(
    (m) => m[1],
  );
  const inputFields: FieldNode[] = [];
  for (const raw of rawLabels) {
    const san = memberIdent(raw);
    if (san !== raw) uri = uri.split(`{${raw}}`).join(`{${san}}`);
    const pn = pathMap.get(raw);
    inputFields.push({
      name: san,
      typeStr: pn ? pn.typeStr : "string",
      doc: pn?.doc,
      children: pn?.children ?? [],
      binding: "label",
    });
  }
  for (const q of parsed.queryParams)
    inputFields.push({ ...q, binding: "query" });
  for (const h of parsed.headerParams)
    inputFields.push({ ...h, binding: "header" });
  for (const b of parsed.bodyParams)
    inputFields.push({ ...b, binding: "body" });

  let inputTarget: string = PRELUDE.Unit;
  if (inputFields.length) {
    const members = buildMembers(bag, inputFields, `${opName}Request`, "input");
    // Docs convention for raw (non-object) request bodies: a single body
    // param literally named `body` (e.g. alerting silences POST an array,
    // KV bulk delete POSTs an array of keys). Mark it httpPayload so the
    // protocol sends the member's value AS the body instead of wrapping it.
    const bodyMembers = Object.entries(members).filter(
      ([, m]: [string, any]) =>
        !m.traits?.["smithy.api#httpLabel"] &&
        !m.traits?.["smithy.api#httpQuery"] &&
        !m.traits?.["smithy.api#httpHeader"],
    );
    if (bodyMembers.length === 1 && bodyMembers[0]![0] === "body") {
      const m = bodyMembers[0]![1] as any;
      m.traits = { ...m.traits, "smithy.api#httpPayload": {} };
    }
    inputTarget = addShape(bag, `${opName}Request`, {
      type: "structure",
      members,
      traits: { "smithy.api#input": {} },
    });
  }

  // ---- Output: the UNWRAPPED `result` payload ----
  let outputTarget: string = PRELUDE.Unit;
  const resultNode = parsed.returns.find((n) => n.name === "result");
  if (resultNode) {
    const { core } = stripOptional(resultNode.typeStr);
    // A named shared type (e.g. `Namespace`) inlines its field tree as
    // children, exactly like `object` — treat both as an object result.
    const objectLike =
      core.startsWith("object") ||
      (resultNode.children.length > 0 &&
        !core.startsWith("array") &&
        !core.startsWith("map[") &&
        !core.startsWith('"') &&
        !/^(string|boolean|true|false|number|integer|int|unknown|any)$/.test(
          core.trim(),
        ));
    if (objectLike && resultNode.children.length) {
      const members = buildMembers(
        bag,
        resultNode.children,
        `${opName}Response`,
        "output",
      );
      outputTarget = addShape(bag, `${opName}Response`, {
        type: "structure",
        members,
        traits: {
          "smithy.api#output": {},
          "smithy.api#documentation":
            "Unwrapped `result` payload of the Cloudflare v4 response envelope.",
        },
      });
    } else if (!objectLike) {
      // Non-object result (array/scalar): one member carries the payload,
      // tagged so it's clear this IS the envelope's `result`.
      const payloadTarget = parseTypeCore(
        core,
        resultNode,
        bag,
        `${opName}Result`,
      );
      outputTarget = addShape(bag, `${opName}Response`, {
        type: "structure",
        members: {
          result: {
            target: payloadTarget,
            traits: {
              [`${PROTOCOL_NS}#envelopePayload`]: {},
              "smithy.api#documentation":
                "The unwrapped `result` payload of the v4 response envelope.",
            },
          },
        },
        traits: { "smithy.api#output": {} },
      });
    }
  } else {
    // Non-standard envelope: keep any non-envelope top-level fields as output.
    const rest = parsed.returns.filter((n) => !ENVELOPE_KEYS.has(n.name));
    if (rest.length) {
      const members = buildMembers(bag, rest, `${opName}Response`, "output");
      outputTarget = addShape(bag, `${opName}Response`, {
        type: "structure",
        members,
        traits: {
          "smithy.api#output": {},
          "smithy.api#documentation":
            "Raw response payload (operation does not use the standard v4 result envelope).",
        },
      });
    }
  }

  // ---- Operation ----
  const traits: Record<string, any> = {
    "smithy.api#http": {
      method: parsed.method,
      uri,
      code: 200,
    },
  };
  if (parsed.doc) traits["smithy.api#documentation"] = parsed.doc;
  if (!parsed.method.match(/^(POST|PATCH|PUT|DELETE)$/)) {
    traits["smithy.api#readonly"] = {};
  } else if (parsed.method === "PUT" || parsed.method === "DELETE") {
    traits["smithy.api#idempotent"] = {};
  }

  return addShape(bag, opName, {
    type: "operation",
    input: { target: inputTarget },
    output: { target: outputTarget },
    traits,
  });
};

// ============================================================================
// Protocol model (the v4 envelope, modeled once)
// ============================================================================

const buildProtocolModel = (): any => ({
  smithy: "2.0",
  metadata: {
    suppressions: [{ id: "UnreferencedShape", namespace: "*" }],
  },
  shapes: {
    // The protocol trait itself — applied to every Cloudflare service.
    [`${PROTOCOL_NS}#v4Json`]: {
      type: "structure",
      members: {},
      traits: {
        "smithy.api#trait": { selector: "service" },
        "smithy.api#protocolDefinition": {
          traits: [
            "smithy.api#http",
            "smithy.api#httpLabel",
            "smithy.api#httpQuery",
            "smithy.api#httpHeader",
            "smithy.api#httpPayload",
            "smithy.api#jsonName",
            `${PROTOCOL_NS}#envelopePayload`,
          ],
        },
        "smithy.api#documentation":
          "Cloudflare client-v4 JSON protocol. Every response is wrapped in a " +
          "`{ success, errors, messages, result, result_info }` envelope. " +
          "`success`/`errors`/`messages`/`result_info` are protocol metadata " +
          "handled by the client; an operation's output shape describes only " +
          "the unwrapped `result` payload.",
      },
    },
    // Marks the envelope member that carries the operation payload.
    [`${PROTOCOL_NS}#envelopePayload`]: {
      type: "structure",
      members: {},
      traits: {
        "smithy.api#trait": { selector: "structure > member" },
        "smithy.api#documentation":
          "Marks the member that carries the operation-specific payload inside " +
          "the v4 envelope's `result` field.",
      },
    },
    // Documentation-only shapes describing the wire envelope.
    [`${PROTOCOL_NS}#ResponseEnvelope`]: {
      type: "structure",
      members: {
        success: {
          target: PRELUDE.Boolean,
          traits: {
            "smithy.api#required": {},
            "smithy.api#documentation":
              "Whether the API call succeeded. Protocol metadata — not part of any operation output.",
          },
        },
        errors: {
          target: `${PROTOCOL_NS}#Messages`,
          traits: {
            "smithy.api#documentation": "Protocol metadata: error list.",
          },
        },
        messages: {
          target: `${PROTOCOL_NS}#Messages`,
          traits: {
            "smithy.api#documentation":
              "Protocol metadata: informational messages.",
          },
        },
        result_info: {
          target: `${PROTOCOL_NS}#ResultInfo`,
          traits: {
            "smithy.api#documentation": "Protocol metadata: pagination info.",
          },
        },
        result: {
          target: PRELUDE.Document,
          traits: {
            [`${PROTOCOL_NS}#envelopePayload`]: {},
            "smithy.api#documentation":
              "The operation payload. Each operation's output shape describes the contents of this field.",
          },
        },
      },
      traits: {
        "smithy.api#documentation":
          "The wire envelope wrapping every Cloudflare v4 response. Modeled here " +
          "for reference; operations bind only to `result`.",
      },
    },
    [`${PROTOCOL_NS}#Message`]: {
      type: "structure",
      members: {
        code: { target: PRELUDE.Integer },
        message: { target: PRELUDE.String },
        documentation_url: { target: PRELUDE.String },
      },
    },
    [`${PROTOCOL_NS}#Messages`]: {
      type: "list",
      member: { target: `${PROTOCOL_NS}#Message` },
    },
    [`${PROTOCOL_NS}#ResultInfo`]: {
      type: "structure",
      members: {
        page: { target: PRELUDE.Double },
        per_page: { target: PRELUDE.Double },
        count: { target: PRELUDE.Double },
        total_count: { target: PRELUDE.Double },
      },
    },
  },
});

// ============================================================================
// Filesystem walk
// ============================================================================

const walkMarkdown = (
  dir: string,
): Effect.Effect<string[], any, FileSystem.FileSystem | Path.Path> =>
  Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;
    const path = yield* Path.Path;
    const out: string[] = [];
    const recurse = (cur: string): Effect.Effect<void, any, never> =>
      Effect.gen(function* () {
        const entries = yield* fs.readDirectory(cur);
        for (const entry of entries) {
          const full = path.join(cur, entry);
          const stat = yield* fs.stat(full);
          if (stat.type === "Directory") {
            yield* recurse(full);
          } else if (
            entry === "index.md" &&
            full.replace(/\\/g, "/").includes("/methods/")
          ) {
            out.push(full);
          }
        }
      });
    yield* recurse(dir);
    return out.sort();
  });

// ============================================================================
// Operation naming from file path
// ============================================================================

/**
 * Given a method page's path relative to the specs root, return
 * { top, opName }. e.g.
 *   ai/subresources/finetunes/methods/list/index.md → { top: "ai", op: "FinetunesList" }
 *   accounts/methods/create/index.md                → { top: "accounts", op: "Create" }
 */
const opIdentity = (relPath: string): { top: string; opName: string } => {
  const segs = relPath
    .replace(/\\/g, "/")
    .replace(/\/index\.md$/, "")
    .split("/")
    .filter(Boolean);
  const top = segs[0];
  const rest = segs
    .slice(1)
    .filter((s) => s !== "subresources" && s !== "methods");
  return { top, opName: pascal(rest.join("_")) };
};

// ============================================================================
// CLI command
// ============================================================================

const command = Command.make(
  "spec-to-smithy",
  {
    specs: Flag.string("specs").pipe(
      Flag.withDefault("specs/api/resources"),
      Flag.withDescription("Directory of downloaded markdown specs"),
    ),
    out: Flag.string("out").pipe(
      Flag.withDefault(".generated-specs"),
      Flag.withDescription("Output directory for Smithy JSON models"),
    ),
    resource: Flag.string("resource").pipe(
      Flag.withDefault(""),
      Flag.withDescription("Only convert this top-level resource (e.g. ai)"),
    ),
    limit: Flag.integer("limit").pipe(
      Flag.withDefault(0),
      Flag.withDescription("Only convert the first N operations (0 = all)"),
    ),
  },
  (config) =>
    Effect.gen(function* () {
      const fs = yield* FileSystem.FileSystem;
      const path = yield* Path.Path;
      const root = path.resolve(import.meta.dir, "..");
      const specsDir = path.resolve(root, config.specs);
      const outDir = path.resolve(root, config.out);

      yield* Console.log("🛠️  spec-to-smithy");
      yield* Console.log(`   Specs:  ${specsDir}`);
      yield* Console.log(`   Output: ${outDir}`);

      const files = yield* walkMarkdown(specsDir);
      yield* Console.log(`\n📄 Found ${files.length} method pages.`);

      // Group operations per top-level resource into one Bag each.
      const bags = new Map<string, Bag>();
      const serviceOps = new Map<string, { target: string }[]>();
      let converted = 0;
      let skipped = 0;

      for (const file of files) {
        if (config.limit > 0 && converted >= config.limit) break;
        const rel = file.slice(specsDir.length + 1);
        const { top, opName } = opIdentity(rel);
        if (config.resource && top !== config.resource) continue;

        const md = yield* fs.readFileString(file);
        const parsed = parseMarkdown(md);
        if (!parsed) {
          skipped++;
          yield* Console.warn(`⚠️  Could not parse ${rel} — skipping`);
          continue;
        }

        const ns = RESOURCE_NS(top);
        let bag = bags.get(top);
        if (!bag) {
          bag = newBag(ns);
          bags.set(top, bag);
          serviceOps.set(top, []);
        }

        try {
          for (const variant of splitDualScope(opName, parsed)) {
            const opId = buildOperation(bag, variant.opName, variant.parsed);
            serviceOps.get(top)!.push({ target: opId });
          }
          converted++;
        } catch (err) {
          skipped++;
          yield* Console.warn(
            `⚠️  Failed to convert ${rel}: ${err} — skipping`,
          );
        }
      }

      // Add a service shape (carrying the protocol) to each resource bag.
      for (const [top, bag] of bags) {
        const serviceName = pascal(top);
        const serviceId = `${bag.namespace}#${serviceName}`;
        bag.shapes[serviceId] = {
          type: "service",
          version: "4.0",
          operations: serviceOps.get(top),
          traits: {
            [`${PROTOCOL_NS}#v4Json`]: {},
            "smithy.api#title": `Cloudflare ${serviceName}`,
            "smithy.api#documentation":
              `Cloudflare API — ${top} resource. Speaks the v4 JSON envelope protocol; ` +
              "operation outputs describe the unwrapped `result` payload.",
          },
        };
      }

      // Write output.
      yield* fs.makeDirectory(outDir, { recursive: true });

      const protocolPath = path.join(outDir, "cloudflare.protocols.json");
      yield* fs.writeFileString(
        protocolPath,
        JSON.stringify(buildProtocolModel(), null, 2),
      );

      const suppressions = {
        suppressions: [
          { id: "HttpUriConflict", namespace: "*" },
          { id: "HttpMethodSemantics", namespace: "*" },
          { id: "UnreferencedShape", namespace: "*" },
        ],
      };

      for (const [top, bag] of bags) {
        const model = {
          smithy: "2.0",
          metadata: suppressions,
          shapes: bag.shapes,
        };
        const fp = path.join(outDir, `${sanitizeNsSegment(top)}.json`);
        yield* fs.writeFileString(fp, JSON.stringify(model, null, 2));
      }

      yield* Console.log(
        `\n✅ Done. ${converted} operations across ${bags.size} resources` +
          `${skipped ? `, ⚠️  ${skipped} skipped` : ""}.`,
      );
      yield* Console.log(`   Protocol model: ${protocolPath}`);
      yield* Console.log(`   Resource models: ${outDir}\\<resource>.json`);
    }),
).pipe(
  Command.withDescription(
    "Convert Cloudflare markdown API specs into Smithy 2.0 JSON models",
  ),
);

const program = Command.run(command, { version: "1.0.0" });

BunRuntime.runMain(Effect.provide(program, BunServices.layer));
