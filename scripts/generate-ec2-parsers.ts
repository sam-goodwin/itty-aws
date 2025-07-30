#!/usr/bin/env ts-node

/**
 * Code generator: from a Smithy/JSON model to concrete TypeScript XML parsers
 * for EC2 Query-style responses.
 *
 * Usage:
 *   bun run generate-ec2-parsers.ts --in ./ec2.json --out ./generated-ec2-parsers.ts
 *
 * Notes:
 * - Assumes the *interfaces* for shapes (e.g., `DescribeRegionsResult`, `Region`, …)
 *   already exist and are named exactly like the simple shape id (after '#').
 * - Generates a shared tiny runtime + a registry of only the shapes reachable from
 *   every operation's *output* shape, and a parse function per operation.
 */

import * as fs from "fs";
import * as path from "path";

type SmithyId = string;

type SmithyMember = {
  target: SmithyId;
  traits?: Record<string, any>;
};

type SmithyStructure = {
  type: "structure";
  members: Record<string, SmithyMember>;
  traits?: Record<string, any>;
};

type SmithyList = {
  type: "list";
  member: SmithyMember;
  traits?: Record<string, any>;
};

type SmithyPrimitive = {
  type:
    | "string"
    | "boolean"
    | "integer"
    | "short"
    | "long"
    | "byte"
    | "float"
    | "double"
    | "bigInteger"
    | "bigDecimal"
    | "timestamp"
    | "blob";
  traits?: Record<string, any>;
};

type SmithyOperation = {
  type: "operation";
  input?: { target: SmithyId };
  output?: { target: SmithyId };
  traits?: Record<string, any>;
};

type SmithyShape =
  | SmithyStructure
  | SmithyList
  | SmithyPrimitive
  | SmithyOperation;

type SmithyModel = Record<string, SmithyShape>;

/** ---- CLI args ---- */
const args = process.argv.slice(2);
const inIdx = args.indexOf("--in");
const outIdx = args.indexOf("--out");
if (inIdx === -1) {
  console.error("Usage: --in <model.json> [--out <output.ts>]");
  process.exit(1);
}
const inFile = args[inIdx + 1];
const outFile = outIdx !== -1 ? args[outIdx + 1] : "generated-ec2-parsers.ts";

/** ---- Load model ---- */
const raw = JSON.parse(fs.readFileSync(inFile, "utf8"));
const model: SmithyModel = unwrapModel(raw);

function unwrapModel(raw: any): SmithyModel {
  if (raw && typeof raw === "object" && raw.shapes && typeof raw.shapes === "object") {
    return raw.shapes as SmithyModel;
  }
  if (raw && typeof raw === "object") {
    // Fall back to legacy “flat” format
    return raw as SmithyModel;
  }
  throw new Error("Invalid Smithy JSON: expected an object with a 'shapes' property.");
}

/** ---- Helpers over model ---- */
function getShape(id: SmithyId): SmithyShape {
  const s = model[id];
  if (!s) throw new Error(`Unknown shape: ${id}`);
  return s;
}

function simpleName(id: SmithyId): string {
  return id.split("#").pop()!;
}

function xmlNameForMember(memberName: string, member: SmithyMember): string {
  const t = member.traits || {};
  return t["smithy.api#xmlName"] ?? memberName;
}

/** Collect all shapes reachable from an output structure */
const neededShapes = new Set<SmithyId>();
const primitiveKinds = new Map<SmithyId, SmithyPrimitive["type"]>();

function collectFrom(id: SmithyId) {
  if (neededShapes.has(id)) return;
  // Skip built-in Smithy types
  if (id.startsWith('smithy.api#')) return;
  const s = getShape(id);
  neededShapes.add(id);

  if ("type" in s) {
    if (s.type === "structure") {
      for (const [, m] of Object.entries(s.members)) {
        collectFrom(m.target);
      }
    } else if (s.type === "list") {
      collectFrom(s.member.target);
    } else if (
      s.type === "string" ||
      s.type === "boolean" ||
      s.type === "integer" ||
      s.type === "short" ||
      s.type === "long" ||
      s.type === "byte" ||
      s.type === "float" ||
      s.type === "double" ||
      s.type === "bigInteger" ||
      s.type === "bigDecimal" ||
      s.type === "timestamp" ||
      s.type === "blob"
    ) {
      primitiveKinds.set(id, s.type);
    }
  }
}

/** All operations present in the model */
const operations: Array<{
  id: SmithyId;
  name: string;
  outputId: SmithyId;
}> = [];

for (const [id, shape] of Object.entries(model)) {
  if (shape.type === "operation") {
    const outputId = shape.output?.target;
    if (!outputId) continue; // skip ops with no output
    operations.push({ id, name: simpleName(id), outputId });
  }
}

/** Collect reachable shapes for all operation outputs */
for (const op of operations) {
  collectFrom(op.outputId);
}

/** Build a minimal registry to embed in generated code */
type GenStructure = {
  kind: "structure";
  members: Array<{
    memberName: string;
    xmlName: string;
    target: SmithyId;
  }>;
};

type GenList = {
  kind: "list";
  memberTarget: SmithyId;
};

type GenPrimitive = {
  kind: "primitive";
  prim: SmithyPrimitive["type"];
};

const genRegistry: Record<
  SmithyId,
  GenStructure | GenList | GenPrimitive
> = {};

for (const id of neededShapes) {
  const s = getShape(id);
  if (s.type === "structure") {
    const members: GenStructure["members"] = [];
    for (const [mName, m] of Object.entries(s.members)) {
      members.push({
        memberName: mName,
        xmlName: xmlNameForMember(mName, m),
        target: m.target,
      });
    }
    genRegistry[id] = { kind: "structure", members };
  } else if (s.type === "list") {
    genRegistry[id] = { kind: "list", memberTarget: s.member.target };
  } else if (
    s.type === "string" ||
    s.type === "boolean" ||
    s.type === "integer" ||
    s.type === "short" ||
    s.type === "long" ||
    s.type === "byte" ||
    s.type === "float" ||
    s.type === "double" ||
    s.type === "bigInteger" ||
    s.type === "bigDecimal" ||
    s.type === "timestamp" ||
    s.type === "blob"
  ) {
    genRegistry[id] = { kind: "primitive", prim: s.type };
  } else {
    // Unhandled kinds (e.g., unions, maps) can be added as needed
  }
}

/** Emit TypeScript source */
const header = `/* Auto-generated by generate-ec2-parsers.ts from ${path.basename(
  inFile
)}. DO NOT EDIT BY HAND. */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { XMLParser } from "fast-xml-parser";
import type * as ec2 from "./services/ec2";

/**
 * Shared runtime helpers
 */
const xmlParser = new XMLParser({
  ignoreAttributes: true,
  attributeNamePrefix: "",
  parseTagValue: true,
  isArray: () => false, // we'll normalize lists manually
});

function asArray<T>(v: T | T[] | undefined): T[] {
  if (v === undefined) return [];
  return Array.isArray(v) ? v : [v];
}

function coercePrimitive(value: any, kind:
  | "string" | "boolean"
  | "integer" | "short" | "long" | "byte"
  | "float" | "double" | "bigInteger" | "bigDecimal"
  | "timestamp" | "blob"
): any {
  if (kind === "boolean") {
    if (typeof value === "boolean") return value;
    const s = String(value).trim().toLowerCase();
    return s === "true" || s === "1";
  }
  if (
    kind === "integer" || kind === "short" || kind === "long" || kind === "byte" ||
    kind === "float" || kind === "double" || kind === "bigInteger" || kind === "bigDecimal"
  ) {
    const n = Number(value);
    return Number.isNaN(n) ? undefined : n;
  }
  if (kind === "timestamp") {
    // EC2 Query timestamps are usually strings; choose your preferred representation.
    // Here we return the raw string; adapt to Date if you prefer.
    return value == null ? "" : String(value);
  }
  if (kind === "blob") {
    // Return base64 string as-is
    return value == null ? "" : String(value);
  }
  return value == null ? "" : String(value);
}

/**
 * Generated shape registry (only shapes reachable from operation outputs)
 */
const REGISTRY = ${JSON.stringify(genRegistry, null, 2)} as const;

type ShapeId = keyof typeof REGISTRY;

function parseByShape(node: any, shapeId: ShapeId): any {
  const shape = REGISTRY[shapeId] as any;
  if (!shape) return node;

  if (shape.kind === "structure") {
    const out: Record<string, any> = {};
    for (const m of shape.members) {
      const child = node?.[m.xmlName];
      const targetShape = REGISTRY[m.target as ShapeId];

      if (!targetShape) {
        // Unknown target: pass through as-is rather than stringifying
        if (child !== undefined) out[m.memberName] = child;
        continue;
      }

      if (targetShape.kind === "list") {
        if (child === undefined) continue;
        // EC2 Query lists: <container><item>...</item></container>
        const itemNodes = asArray(child?.item ?? child?.member);
        out[m.memberName] = itemNodes.map((n: any) =>
          parseByShape(n, targetShape.memberTarget as ShapeId)
        );
      } else if (targetShape.kind === "structure") {
        if (child !== undefined) {
          out[m.memberName] = parseByShape(child, m.target as ShapeId);
        }
      } else if (targetShape.kind === "primitive") {
        if (child !== undefined) {
          out[m.memberName] = coercePrimitive(child, targetShape.prim);
        }
      }
    }
    return out;
  }

  if (shape.kind === "list") {
    const nodes = asArray(node?.item ?? node?.member ?? node);
    return nodes.map((n: any) => parseByShape(n, shape.memberTarget as ShapeId));
  }

  if (shape.kind === "primitive") {
    return coercePrimitive(node, shape.prim);
  }

  return node;
}

/** Resolve a response node for an operation name (tolerate default XML namespace) */
function pickResponseNode(root: any, opName: string): any {
  const expected = \`\${opName}Response\`;
  if (root[expected]) return root[expected];
  // Fallback: pick first top-level element
  const firstKey = Object.keys(root)[0];
  return root[firstKey];
}
`;

/** Per-operation parser functions */
const perOperationFns: string[] = [];

for (const op of operations) {
  const opName = op.name; // e.g., DescribeRegions
  const outputSimple = simpleName(op.outputId); // e.g., DescribeRegionsResult

  // Skip generating function for Unit output (no actual output from service)
  if (outputSimple === "Unit") {
    continue;
  }

  const fn = `
export function parse${opName}(xml: string): ec2.${outputSimple} {
  const root = xmlParser.parse(xml);
  const response = pickResponseNode(root, "${opName}");
  const result = parseByShape(response, "${op.outputId}" as any);
  return result as ec2.${outputSimple};
}
`;
  perOperationFns.push(fn);
}

/** Optional: index of available parsers */
const indexExport = `
/** All generated parser functions (by operation name) */
export const ec2Parsers = {
${operations
  .filter((op) => simpleName(op.outputId) !== "Unit")
  .map((op) => `  "${op.name}": parse${op.name}`)
  .join(",\n")}
} as const;
`;

const source = header + perOperationFns.join("\n") + indexExport + "\n";

/** Write output */
fs.writeFileSync(outFile, source, "utf8");
console.log(`Wrote ${outFile} with ${operations.length} parser(s).`);
