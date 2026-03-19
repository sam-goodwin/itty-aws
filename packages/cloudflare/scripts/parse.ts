import { NodeServices } from "@effect/platform-node";
import { Effect, FileSystem } from "effect";
import * as path from "node:path";
import { execSync } from "node:child_process";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import * as ts from "typescript";
import { parse as parseYaml } from "yaml";
import {
  type ErrorMatcherInfo,
  type OperationErrorInfo,
  type ParamInfo,
  type ParsedInterface,
  type ParsedOperation,
  type ParsedProperty,
  type ServiceInfo,
  type TypeInfo,
  type TypeRegistry,
  // Naming functions for computing operation metadata
  buildResourceName,
  computeOperationName,
  computeResources,
  normalizeOperations,
  resolveTypeReference,
} from "./model.ts";

interface ParseOptions {
  basePath: string;
  openapiBasePath?: string;
  serviceFilter?: string;
  /**
   * Force re-parsing even if a cached model exists
   * @default false
   */
  force?: boolean;
}

// =============================================================================
// Cache Serialization
// =============================================================================

interface SerializedTypeRegistry {
  types: Array<[string, ParsedInterface]>;
  typeAliases: Array<[string, TypeInfo]>;
}

interface SerializedOperation extends Omit<ParsedOperation, "registry"> {
  registry: SerializedTypeRegistry;
}

interface SerializedServiceInfo {
  name: string;
  operations: SerializedOperation[];
}

interface CacheData {
  version: number;
  hash: string;
  timestamp: number;
  services: SerializedServiceInfo[];
}

function serializeRegistry(registry: TypeRegistry): SerializedTypeRegistry {
  return {
    types: Array.from(registry.types.entries()),
    typeAliases: Array.from(registry.typeAliases.entries()),
  };
}

function deserializeRegistry(data: SerializedTypeRegistry): TypeRegistry {
  return {
    types: new Map(data.types),
    typeAliases: new Map(data.typeAliases),
  };
}

function serializeServices(services: ServiceInfo[]): SerializedServiceInfo[] {
  return services.map((service) => ({
    name: service.name,
    operations: service.operations.map((op) => ({
      ...op,
      registry: op.registry
        ? serializeRegistry(op.registry)
        : { types: [], typeAliases: [] },
    })),
  }));
}

function deserializeServices(data: SerializedServiceInfo[]): ServiceInfo[] {
  return data.map((service) => ({
    name: service.name,
    operations: service.operations.map((op) => ({
      ...op,
      registry: deserializeRegistry(op.registry),
    })),
  }));
}

// =============================================================================
// Git Hash & Caching
// =============================================================================

const CACHE_DIR = ".distilled/cache";
const CACHE_VERSION = 4;
const OPENAPI_SPEC_REGEX = /\.openapi\.(json|ya?ml)$/i;
const LOCAL_PARSE_INPUT_FILES = ["parse.ts", "model.ts"] as const;

interface OpenApiSpec {
  openapi?: string;
  info?: { title?: string; version?: string; description?: string };
  paths: Record<string, OpenApiPathItem>;
  components?: {
    schemas?: Record<string, OpenApiSchema>;
    parameters?: Record<string, OpenApiParameter>;
  };
  "x-distilled-service"?: string;
}

interface OpenApiPathItem {
  parameters?: OpenApiParameter[];
  get?: OpenApiOperation;
  post?: OpenApiOperation;
  put?: OpenApiOperation;
  patch?: OpenApiOperation;
  delete?: OpenApiOperation;
}

interface OpenApiOperation {
  operationId?: string;
  summary?: string;
  description?: string;
  parameters?: OpenApiParameter[];
  requestBody?: OpenApiRequestBody;
  responses: Record<string, OpenApiResponse>;
  "x-distilled-response-path"?: string;
  "x-distilled-pagination-class"?: string;
  "x-distilled-errors"?: Record<string, ErrorMatcherInfo[]>;
}

interface OpenApiRequestBody {
  required?: boolean;
  content?: Record<string, OpenApiMediaType>;
}

interface OpenApiResponse {
  description?: string;
  content?: Record<string, OpenApiMediaType>;
  $ref?: string;
}

interface OpenApiMediaType {
  schema?: OpenApiSchema;
}

interface OpenApiParameter {
  name?: string;
  in?: "path" | "query" | "header" | "cookie";
  required?: boolean;
  description?: string;
  schema?: OpenApiSchema;
  $ref?: string;
}

interface OpenApiSchema {
  type?: string | string[];
  $ref?: string;
  properties?: Record<string, OpenApiSchema>;
  items?: OpenApiSchema;
  required?: string[];
  enum?: Array<string | number | boolean>;
  additionalProperties?: boolean | OpenApiSchema;
  description?: string;
  nullable?: boolean;
  oneOf?: OpenApiSchema[];
  anyOf?: OpenApiSchema[];
  allOf?: OpenApiSchema[];
}

/**
 * Get the git commit hash of the cloudflare-typescript repo
 */
const getGitHash = (repoPath: string) =>
  Effect.sync(() => {
    try {
      return execSync("git rev-parse HEAD", { cwd: repoPath, encoding: "utf-8" }).trim();
    } catch {
      return "";
    }
  });

const hashString = (input: string): string =>
  createHash("sha1").update(input).digest("hex");

const collectFilesMatching = (
  fs: FileSystem.FileSystem,
  directory: string,
  predicate: (fullPath: string) => boolean,
): Effect.Effect<string[], unknown> =>
  Effect.gen(function* () {
    const exists = yield* fs.exists(directory).pipe(Effect.orDie);
    if (!exists) {
      return [];
    }

    const entries = yield* fs.readDirectory(directory).pipe(Effect.orDie);
    const nested = yield* Effect.forEach(
      entries,
      (entry) => {
        const fullPath = path.join(directory, entry);
        return fs.stat(fullPath).pipe(
          Effect.orDie,
          Effect.flatMap((stat) => {
            if (stat.type === "Directory") {
              return collectFilesMatching(fs, fullPath, predicate);
            }
            if (stat.type === "File" && predicate(fullPath)) {
              return Effect.succeed([fullPath]);
            }
            return Effect.succeed([]);
          }),
        );
      },
      { concurrency: "unbounded" },
    );

    return nested.flat().sort();
  });

const getOpenApiContentHash = (openapiBasePath?: string) =>
  Effect.gen(function* () {
    if (!openapiBasePath) return "";

    const fs = yield* FileSystem.FileSystem;
    const files = yield* collectFilesMatching(
      fs,
      openapiBasePath,
      (file) => OPENAPI_SPEC_REGEX.test(file),
    );

    if (files.length === 0) {
      return "";
    }

    const hash = createHash("sha1");
    for (const file of files) {
      const content = yield* fs.readFileString(file).pipe(Effect.orDie);
      hash.update(path.relative(openapiBasePath, file));
      hash.update("\0");
      hash.update(content);
      hash.update("\0");
    }

    return hash.digest("hex");
  });

const getLocalParserHash = () =>
  Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;
    const hash = createHash("sha1");
    const scriptsDir = path.dirname(fileURLToPath(import.meta.url));

    for (const file of LOCAL_PARSE_INPUT_FILES) {
      const filePath = path.join(scriptsDir, file);
      const content = yield* fs.readFileString(filePath).pipe(Effect.orDie);
      hash.update(file);
      hash.update("\0");
      hash.update(content);
      hash.update("\0");
    }

    return hash.digest("hex");
  });

const getCacheKey = (repoPath: string, openapiBasePath?: string) =>
  Effect.gen(function* () {
    const gitHash = yield* getGitHash(repoPath);
    const openapiHash = yield* getOpenApiContentHash(openapiBasePath);
    const parserHash = yield* getLocalParserHash();
    if (!gitHash && !openapiHash && !parserHash) {
      return "";
    }
    return hashString(`${CACHE_VERSION}:${gitHash}:${openapiHash}:${parserHash}`);
  });

/**
 * Try to load cached model for the given git hash
 */
const loadCache = (hash: string) =>
  Effect.gen(function* () {
    if (!hash) return undefined;

    const fs = yield* FileSystem.FileSystem;
    const cachePath = path.join(CACHE_DIR, `${hash}.json`);

    const exists = yield* fs.exists(cachePath);
    if (!exists) return undefined;

    const content = yield* fs.readFileString(cachePath);
    const data = JSON.parse(content) as CacheData;

    if (data.version !== CACHE_VERSION || data.hash !== hash) {
      return undefined;
    }

    return deserializeServices(data.services);
  }).pipe(Effect.catch(() => Effect.succeed(undefined)));

/**
 * Save parsed model to cache
 */
const saveCache = (hash: string, services: ServiceInfo[]) =>
  Effect.gen(function* () {
    if (!hash) return;

    const fs = yield* FileSystem.FileSystem;
    const cachePath = path.join(CACHE_DIR, `${hash}.json`);

    // Ensure cache directory exists
    yield* fs.makeDirectory(CACHE_DIR, { recursive: true });

    const data: CacheData = {
      version: CACHE_VERSION,
      hash,
      timestamp: Date.now(),
      services: serializeServices(services),
    };

    yield* fs.writeFileString(cachePath, JSON.stringify(data));
  }).pipe(Effect.catch((e) => Effect.logWarning(`Failed to save cache: ${e}`)));

/**
 * Create a type registry from a source file
 *
 * Two phases:
 * 1. First pass: collect all interface AST nodes with their qualified names
 * 2. Second pass: parse all interfaces without resolution (store primitives and type names)
 *
 * Resolution happens lazily during schema generation using resolveTypeInfoDeep()
 */
function createTypeRegistry(
  sourceFile: ts.SourceFile,
  checker: ts.TypeChecker,
): TypeRegistry {
  const types = new Map<string, ParsedInterface>();
  const typeAliases = new Map<string, TypeInfo>();
  const nodeMap = new Map<string, ts.InterfaceDeclaration>();

  // First pass: collect all interface declarations and type aliases with qualified names
  function collectInterface(
    node: ts.InterfaceDeclaration,
    prefix: string = "",
  ) {
    const name = node.name.getText();
    const qualifiedName = prefix ? `${prefix}.${name}` : name;
    nodeMap.set(qualifiedName, node);
  }

  function collectTypeAlias(
    node: ts.TypeAliasDeclaration,
    prefix: string = "",
  ) {
    const name = node.name.getText();
    const qualifiedName = prefix ? `${prefix}.${name}` : name;
    // Parse the type alias's type
    const typeInfo = typeNodeToTypeInfo(node.type, checker, undefined);
    typeAliases.set(qualifiedName, typeInfo);
  }

  function collectFromNamespace(
    node: ts.ModuleDeclaration,
    prefix: string = "",
  ) {
    const name = node.name.getText();
    const qualifiedName = prefix ? `${prefix}.${name}` : name;

    if (node.body && ts.isModuleBlock(node.body)) {
      for (const stmt of node.body.statements) {
        if (ts.isInterfaceDeclaration(stmt)) {
          collectInterface(stmt, qualifiedName);
        } else if (ts.isTypeAliasDeclaration(stmt)) {
          collectTypeAlias(stmt, qualifiedName);
        } else if (ts.isModuleDeclaration(stmt)) {
          collectFromNamespace(stmt, qualifiedName);
        }
      }
    }
  }

  function collectAll(node: ts.Node) {
    if (ts.isInterfaceDeclaration(node)) {
      collectInterface(node);
    } else if (ts.isTypeAliasDeclaration(node)) {
      collectTypeAlias(node);
    } else if (ts.isModuleDeclaration(node)) {
      collectFromNamespace(node);
    }
    ts.forEachChild(node, collectAll);
  }

  collectAll(sourceFile);

  // Create the registry object
  const registry: TypeRegistry = { types, typeAliases };

  // Second pass: parse all interfaces (without resolution - just capture type names)
  for (const [qualifiedName, node] of nodeMap) {
    // Parse without registry to avoid resolution
    const parsed = parseInterface(node, checker, undefined);
    types.set(qualifiedName, parsed);
  }

  return registry;
}

function createProgram(files: string[]): ts.Program {
  const options: ts.CompilerOptions = {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
    skipLibCheck: true,
    strict: true,
  };

  return ts.createProgram(files, options);
}

/**
 * Extract JSDoc comment text from a node
 */
function getJsDocComment(node: ts.Node): string | undefined {
  const comments: string[] = [];

  // Get the leading comment
  const fullText = node.getSourceFile().getFullText();
  const nodeStart = node.getFullStart();
  const leadingComments = ts.getLeadingCommentRanges(fullText, nodeStart);

  if (leadingComments) {
    for (const comment of leadingComments) {
      const text = fullText.slice(comment.pos, comment.end);
      // Extract JSDoc content
      const match = text.match(/\/\*\*\s*([\s\S]*?)\s*\*\//);
      if (match) {
        comments.push(match[1].replace(/\s*\*\s*/g, " ").trim());
      }
    }
  }

  return comments.length > 0 ? comments.join(" ") : undefined;
}

/**
 * Parse parameter location from JSDoc comment.
 * SDK JSDoc format: "Path param: ...", "Body param: ...", "Query param: ...", "Header param: ..."
 * We match the prefix pattern (word boundary after "param") to avoid false positives
 * like "body param: ...path parameter templates..." matching as "path".
 */
function parseParamLocation(
  comment: string | undefined,
): "path" | "query" | "body" | "header" | undefined {
  if (!comment) return undefined;

  const normalized = comment.toLowerCase();
  // Match "Xxx param:" or "Xxx param," at the start (the location prefix pattern)
  const prefixMatch = normalized.match(/^(path|query|body|header)\s+param\b/);
  if (prefixMatch) {
    return prefixMatch[1] as "path" | "query" | "body" | "header";
  }

  return undefined;
}

function typeCacheKey(type: ts.Type, checker: ts.TypeChecker): string {
  const symbol = type.aliasSymbol ?? type.getSymbol();
  const declaration = symbol?.declarations?.[0];
  return declaration
    ? `${declaration.getSourceFile().fileName}:${declaration.pos}:${declaration.end}`
    : checker.typeToString(type);
}

function tsTypeToTypeInfo(
  type: ts.Type,
  checker: ts.TypeChecker,
  depth: number = 0,
  seen: Set<string> = new Set(),
): TypeInfo {
  if (depth > 10) {
    return { kind: "unknown" };
  }

  if (type.isStringLiteral()) {
    return { kind: "literal", value: type.value };
  }

  if (type.isNumberLiteral()) {
    return { kind: "literal", value: String(type.value) };
  }

  const flags = type.getFlags();

  if (flags & ts.TypeFlags.BooleanLiteral) {
    return { kind: "literal", value: checker.typeToString(type) };
  }
  if (flags & ts.TypeFlags.Null) {
    return { kind: "null" };
  }
  if (flags & ts.TypeFlags.Undefined) {
    return { kind: "unknown" };
  }
  if (flags & ts.TypeFlags.StringLike) {
    return { kind: "primitive", value: "string" };
  }
  if (flags & ts.TypeFlags.NumberLike) {
    return { kind: "primitive", value: "number" };
  }
  if (flags & ts.TypeFlags.BooleanLike) {
    return { kind: "primitive", value: "boolean" };
  }
  if (flags & (ts.TypeFlags.Any | ts.TypeFlags.Unknown)) {
    return { kind: "unknown" };
  }

  if (type.isUnion()) {
    const values = type.types
      .filter((member) => !(member.getFlags() & ts.TypeFlags.Undefined))
      .map((member) => tsTypeToTypeInfo(member, checker, depth + 1, seen));

    const knownValues = values.filter((value) => value.kind !== "unknown");
    const candidates = knownValues.length > 0 ? knownValues : values;
    const deduped = candidates.filter((value, index) => {
      const key = JSON.stringify(value);
      return index === candidates.findIndex((other) => JSON.stringify(other) === key);
    });

    if (deduped.length === 0) {
      return { kind: "unknown" };
    }
    if (deduped.length === 1) {
      return deduped[0];
    }
    return { kind: "union", values: deduped };
  }

  if (checker.isArrayType(type)) {
    const typeRef = type as ts.TypeReference;
    const [elementType] = checker.getTypeArguments(typeRef);
    return {
      kind: "array",
      elementType: elementType
        ? tsTypeToTypeInfo(elementType, checker, depth + 1, seen)
        : { kind: "unknown" },
    };
  }

  if (checker.isTupleType(type)) {
    const tupleRef = type as ts.TypeReference;
    const elementTypes = checker.getTypeArguments(tupleRef);
    const tupleElementType =
      elementTypes.length === 0
        ? { kind: "unknown" as const }
        : elementTypes.length === 1
          ? tsTypeToTypeInfo(elementTypes[0], checker, depth + 1, seen)
          : ({
              kind: "union" as const,
              values: elementTypes.map((elementType) =>
                tsTypeToTypeInfo(elementType, checker, depth + 1, seen),
              ),
            } satisfies TypeInfo);
    return { kind: "array", elementType: tupleElementType };
  }

  const key = typeCacheKey(type, checker);
  if (seen.has(key)) {
    return { kind: "object", name: checker.typeToString(type) };
  }

  const properties = checker.getPropertiesOfType(type);
  if (properties.length > 0) {
    const nextSeen = new Set(seen);
    nextSeen.add(key);

    return {
      kind: "object",
      name: checker.typeToString(type),
      properties: properties.map((property) => {
        const declaration = property.valueDeclaration ?? property.declarations?.[0];
        const propertyType = declaration
          ? checker.getTypeOfSymbolAtLocation(property, declaration)
          : checker.getTypeOfSymbol(property);
        const description = declaration ? getJsDocComment(declaration) : undefined;

        return {
          name: property.getName(),
          type: tsTypeToTypeInfo(propertyType, checker, depth + 1, nextSeen),
          required: (property.flags & ts.SymbolFlags.Optional) === 0,
          description,
        };
      }),
    };
  }

  return { kind: "object", name: checker.typeToString(type) };
}

/**
 * Convert TypeScript type node to TypeInfo
 */
function typeNodeToTypeInfo(
  typeNode: ts.TypeNode | undefined,
  checker: ts.TypeChecker,
  registry?: TypeRegistry,
  seenTypeRefs: Set<string> = new Set(),
): TypeInfo {
  if (!typeNode) {
    return { kind: "unknown" };
  }

  // String
  if (ts.isToken(typeNode) && typeNode.kind === ts.SyntaxKind.StringKeyword) {
    return { kind: "primitive", value: "string" };
  }

  // Number
  if (ts.isToken(typeNode) && typeNode.kind === ts.SyntaxKind.NumberKeyword) {
    return { kind: "primitive", value: "number" };
  }

  // Boolean
  if (ts.isToken(typeNode) && typeNode.kind === ts.SyntaxKind.BooleanKeyword) {
    return { kind: "primitive", value: "boolean" };
  }

  // Null keyword
  if (ts.isToken(typeNode) && typeNode.kind === ts.SyntaxKind.NullKeyword) {
    return { kind: "null" };
  }

  // Literal type (string literal, number literal, etc.)
  if (ts.isLiteralTypeNode(typeNode)) {
    if (ts.isStringLiteral(typeNode.literal)) {
      return { kind: "literal", value: typeNode.literal.text };
    }
    if (ts.isNumericLiteral(typeNode.literal)) {
      return { kind: "literal", value: typeNode.literal.text };
    }
    if (typeNode.literal.kind === ts.SyntaxKind.TrueKeyword) {
      return { kind: "literal", value: "true" };
    }
    if (typeNode.literal.kind === ts.SyntaxKind.FalseKeyword) {
      return { kind: "literal", value: "false" };
    }
    if (typeNode.literal.kind === ts.SyntaxKind.NullKeyword) {
      return { kind: "null" };
    }
  }

  // Union type
  if (ts.isUnionTypeNode(typeNode)) {
    const values = typeNode.types.map((t) =>
      typeNodeToTypeInfo(t, checker, registry, seenTypeRefs),
    );

    // De-duplicate and simplify unions
    // Filter out unknown types if there are known types
    const knownValues = values.filter((v) => v.kind !== "unknown");
    if (knownValues.length > 0) {
      // If we have known types, use only those (deduplicated)
      const seen = new Set<string>();
      const dedupedValues = knownValues.filter((v) => {
        const key = JSON.stringify(v);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      if (dedupedValues.length === 1) {
        return dedupedValues[0];
      }
      return { kind: "union", values: dedupedValues };
    }

    // All unknowns - collapse to single unknown
    if (values.every((v) => v.kind === "unknown")) {
      return { kind: "unknown" };
    }

    return { kind: "union", values };
  }

  // Array type
  if (ts.isArrayTypeNode(typeNode)) {
    return {
      kind: "array",
      elementType: typeNodeToTypeInfo(
        typeNode.elementType,
        checker,
        registry,
        seenTypeRefs,
      ),
    };
  }

  // Type reference (named types, Array<T>, etc.)
  if (ts.isTypeReferenceNode(typeNode)) {
    const typeName = typeNode.typeName.getText();

    // Handle Array<T>
    if (typeName === "Array" && typeNode.typeArguments?.[0]) {
      return {
        kind: "array",
        elementType: typeNodeToTypeInfo(
          typeNode.typeArguments[0],
          checker,
          registry,
          seenTypeRefs,
        ),
      };
    }

    // Handle Core.Uploadable - file uploads for multipart form-data
    if (typeName === "Core.Uploadable" || typeName === "Uploadable") {
      return { kind: "file" };
    }

    // Handle Record<K, V>
    if (typeName === "Record") {
      return { kind: "object", name: "Record" };
    }

    // Try to resolve from registry if available
    if (registry) {
      const resolved = resolveTypeReference(typeName, registry);
      if (resolved) {
        return resolved;
      }
    }

    const symbolAtLocation = checker.getSymbolAtLocation(typeNode.typeName);
    const resolvedSymbol =
      symbolAtLocation && symbolAtLocation.flags & ts.SymbolFlags.Alias
        ? checker.getAliasedSymbol(symbolAtLocation)
        : symbolAtLocation;
    const declarations = resolvedSymbol?.declarations ?? [];
    const refDeclaration = declarations[0];
    const refKey = refDeclaration
      ? `${refDeclaration.getSourceFile().fileName}:${refDeclaration.pos}:${refDeclaration.end}`
      : typeName;
    if (seenTypeRefs.has(refKey)) {
      return { kind: "object", name: typeName };
    }
    const nextSeenTypeRefs = new Set(seenTypeRefs);
    nextSeenTypeRefs.add(refKey);

    const interfaceDeclaration = declarations.find(ts.isInterfaceDeclaration);
    if (interfaceDeclaration) {
      const parsed = parseInterface(
        interfaceDeclaration,
        checker,
        registry,
        nextSeenTypeRefs,
      );
      return {
        kind: "object",
        name: interfaceDeclaration.name.text,
        properties: parsed.properties,
      };
    }

    const typeAliasDeclaration = declarations.find(ts.isTypeAliasDeclaration);
    if (typeAliasDeclaration) {
      return typeNodeToTypeInfo(
        typeAliasDeclaration.type,
        checker,
        registry,
        nextSeenTypeRefs,
      );
    }

    // Use TypeChecker to resolve imported interfaces/type aliases and literal unions.
    const type = checker.getTypeAtLocation(typeNode);
    if (type) {
      const resolvedFromChecker = tsTypeToTypeInfo(type, checker);
      if (
        resolvedFromChecker.kind !== "unknown" &&
        !(resolvedFromChecker.kind === "object" && resolvedFromChecker.name === "Record")
      ) {
        return resolvedFromChecker;
      }
    }

    // Named type reference (will be resolved later)
    return { kind: "object", name: typeName };
  }

  // Type literal (inline object type)
  if (ts.isTypeLiteralNode(typeNode)) {
    const properties: ParsedProperty[] = [];

    for (const member of typeNode.members) {
      if (ts.isPropertySignature(member) && member.name) {
        const rawName = member.name.getText();
        const name = rawName.replace(/^["']|["']$/g, "");
        const type = typeNodeToTypeInfo(member.type, checker, registry, seenTypeRefs);
        const required = !member.questionToken;
        const comment = getJsDocComment(member);

        properties.push({ name, type, required, description: comment });
      }
    }

    return { kind: "object", properties };
  }

  // Fallback
  return { kind: "unknown" };
}

/**
 * Extract HTTP method from method body
 */
function extractHttpMethod(
  methodBody: ts.Block,
): "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | undefined {
  let httpMethod: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | undefined;

  function visit(node: ts.Node) {
    if (ts.isCallExpression(node)) {
      const expr = node.expression;

      // Look for this._client.get/post/put/patch/delete
      if (
        ts.isPropertyAccessExpression(expr) &&
        ts.isPropertyAccessExpression(expr.expression)
      ) {
        const methodName = expr.name.getText().toUpperCase();
        if (["GET", "POST", "PUT", "PATCH", "DELETE"].includes(methodName)) {
          httpMethod = methodName as typeof httpMethod;
        }
        // Also handle getAPIList (paginated GET) and postAPIList (paginated POST)
        if (methodName === "GETAPILIST") {
          httpMethod = "GET";
          // Check for { method: 'post' } override in the options argument
          // Pattern: this._client.getAPIList(url, PageClass, { body, method: 'post', ...options })
          const optionsArg = node.arguments[2]; // 3rd argument is the options object
          if (optionsArg && ts.isObjectLiteralExpression(optionsArg)) {
            for (const prop of optionsArg.properties) {
              if (
                ts.isPropertyAssignment(prop) &&
                prop.name.getText() === "method" &&
                ts.isStringLiteral(prop.initializer)
              ) {
                const override = prop.initializer.text.toUpperCase();
                if (["GET", "POST", "PUT", "PATCH", "DELETE"].includes(override)) {
                  httpMethod = override as typeof httpMethod;
                }
              }
            }
          }
        } else if (methodName === "POSTAPILIST") {
          httpMethod = "POST";
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(methodBody);
  return httpMethod;
}

/**
 * Detect if a method body uses Core.multipartFormRequestOptions
 */
function detectMultipart(methodBody: ts.Block): boolean {
  let isMultipart = false;

  function visit(node: ts.Node) {
    if (ts.isCallExpression(node)) {
      const expr = node.expression;
      // Look for Core.multipartFormRequestOptions(...) or multipartFormRequestOptions(...)
      if (ts.isPropertyAccessExpression(expr)) {
        if (expr.name.getText() === "multipartFormRequestOptions") {
          isMultipart = true;
          return;
        }
      } else if (ts.isIdentifier(expr)) {
        if (expr.text === "multipartFormRequestOptions") {
          isMultipart = true;
          return;
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(methodBody);
  return isMultipart;
}

/**
 * Detect pagination type from the page class used in getAPIList/postAPIList calls.
 * Returns "items" for V4PagePagination (result.items wrapper), "array" for V4PagePaginationArray/SinglePage (bare array).
 */
function detectPaginationType(methodBody: ts.Block): "items" | "array" | undefined {
  let paginationType: "items" | "array" | undefined;

  function visit(node: ts.Node) {
    if (ts.isCallExpression(node)) {
      const expr = node.expression;
      if (
        ts.isPropertyAccessExpression(expr) &&
        ts.isPropertyAccessExpression(expr.expression)
      ) {
        const methodName = expr.name.getText().toUpperCase();
        if (methodName === "GETAPILIST" || methodName === "POSTAPILIST") {
          // 2nd argument is the page class reference
          const pageClassArg = node.arguments[1];
          if (pageClassArg) {
            const pageClassName = pageClassArg.getText();
            // V4PagePagination uses result.items wrapper
            // V4PagePaginationArray and SinglePage use result directly as array
            if (pageClassName.includes("V4PagePagination") && !pageClassName.includes("V4PagePaginationArray")) {
              paginationType = "items";
            } else {
              paginationType = "array";
            }
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(methodBody);
  return paginationType;
}

function detectResponsePath(methodBody: ts.Block): string | undefined {
  let responsePath: string | undefined;

  const propertyAccessPath = (
    node: ts.Node,
    rootName: string,
  ): string | undefined => {
    if (ts.isIdentifier(node)) {
      return node.text === rootName ? "" : undefined;
    }
    if (ts.isPropertyAccessExpression(node)) {
      const prefix = propertyAccessPath(node.expression, rootName);
      if (prefix === undefined) return undefined;
      return prefix ? `${prefix}.${node.name.text}` : node.name.text;
    }
    return undefined;
  };

  function visit(node: ts.Node) {
    if (
      ts.isCallExpression(node) &&
      ts.isPropertyAccessExpression(node.expression) &&
      node.expression.name.text === "_thenUnwrap"
    ) {
      const fn = node.arguments[0];
      if (fn && ts.isArrowFunction(fn) && fn.parameters.length >= 1) {
        const param = fn.parameters[0]?.name;
        if (param && ts.isIdentifier(param) && fn.body) {
          const path = propertyAccessPath(fn.body, param.text);
          if (path) {
            responsePath = path;
            return;
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(methodBody);
  return responsePath;
}

function detectPaginationClassName(methodBody: ts.Block): string | undefined {
  let className: string | undefined;

  function visit(node: ts.Node) {
    if (ts.isCallExpression(node)) {
      const expr = node.expression;
      if (
        ts.isPropertyAccessExpression(expr) &&
        ts.isPropertyAccessExpression(expr.expression)
      ) {
        const methodName = expr.name.getText().toUpperCase();
        if (methodName === "GETAPILIST" || methodName === "POSTAPILIST") {
          const pageClassArg = node.arguments[1];
          if (
            pageClassArg &&
            (ts.isIdentifier(pageClassArg) || ts.isPropertyAccessExpression(pageClassArg))
          ) {
            className = pageClassArg.getText().split(".").pop();
          }
        }
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(methodBody);
  return className;
}

/**
 * Extract URL template from method body
 */
function extractUrlTemplate(methodBody: ts.Block): string | undefined {
  let urlTemplate: string | undefined;

  function visit(node: ts.Node) {
    if (ts.isCallExpression(node)) {
      const expr = node.expression;

      // Look for this._client.get/post/put/patch/delete/getAPIList/postAPIList calls
      if (ts.isPropertyAccessExpression(expr)) {
        const methodName = expr.name.getText().toLowerCase();
        if (
          [
            "get",
            "post",
            "put",
            "patch",
            "delete",
            "getapilist",
            "postapilist",
          ].includes(methodName)
        ) {
          // First argument is the URL
          const urlArg = node.arguments[0];
          if (urlArg) {
            if (ts.isTemplateExpression(urlArg)) {
              // Template literal: `/accounts/${account_id}/r2/buckets`
              urlTemplate = reconstructTemplateString(urlArg);
            } else if (ts.isStringLiteral(urlArg)) {
              // Simple string literal
              urlTemplate = urlArg.text;
            }
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(methodBody);
  return urlTemplate;
}

/**
 * Reconstruct a template string from a template expression
 */
function reconstructTemplateString(template: ts.TemplateExpression): string {
  let result = template.head.text;

  for (const span of template.templateSpans) {
    // Get the variable name from the span
    const varName = span.expression.getText();
    result += `{${varName}}`;
    result += span.literal.text;
  }

  return result;
}

/**
 * Extract path parameters from URL template
 */
function extractPathParamsFromUrl(urlTemplate: string): string[] {
  const params: string[] = [];
  const regex = /\{(\w+)\}/g;
  let match;

  while ((match = regex.exec(urlTemplate)) !== null) {
    params.push(match[1]);
  }

  return params;
}

/**
 * Extract custom header name from method body
 */
function extractHeaderNames(methodBody: ts.Block): Map<string, string> {
  const headerMap = new Map<string, string>();

  function visit(node: ts.Node) {
    // Look for object literals with header assignments
    if (ts.isObjectLiteralExpression(node)) {
      for (const prop of node.properties) {
        if (ts.isPropertyAssignment(prop)) {
          const name = prop.name;
          if (ts.isStringLiteral(name)) {
            // Found a header like 'cf-r2-jurisdiction': value
            const headerName = name.text;

            // Try to find the variable being assigned
            const init = prop.initializer;
            if (ts.isPropertyAccessExpression(init)) {
              // jurisdiction?.toString()
              const varName = init.expression.getText().replace(/\?$/, "");
              headerMap.set(varName, headerName);
            } else if (ts.isCallExpression(init)) {
              // jurisdiction?.toString()
              const callExpr = init.expression;
              if (ts.isPropertyAccessExpression(callExpr)) {
                const varName = callExpr.expression
                  .getText()
                  .replace(/\?$/, "");
                headerMap.set(varName, headerName);
              }
            }
          }
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(methodBody);
  return headerMap;
}

/**
 * Parse an interface declaration to extract properties and their metadata
 */
function parseInterface(
  node: ts.InterfaceDeclaration,
  checker: ts.TypeChecker,
  registry?: TypeRegistry,
  seenTypeRefs: Set<string> = new Set(),
): ParsedInterface {
  const name = node.name.getText();
  const properties: ParsedProperty[] = [];

  for (const member of node.members) {
    if (ts.isPropertySignature(member) && member.name) {
      // getText() includes surrounding quotes for string literal property names
      // e.g., '"CF-WORKER-BODY-PART"' — strip them to get the raw name
      const rawText = member.name.getText();
      const propName = rawText.replace(/^["']|["']$/g, "");
      const type = typeNodeToTypeInfo(member.type, checker, registry, seenTypeRefs);
      const required = !member.questionToken;
      const comment = getJsDocComment(member);
      const location = parseParamLocation(comment);

      properties.push({
        name: propName,
        type,
        location,
        required,
        description: comment,
      });
    }
  }

  return { name, properties };
}

/**
 * Find and parse a params interface by name in a source file
 */
function findParamsInterface(
  sourceFile: ts.SourceFile,
  paramsTypeName: string,
  checker: ts.TypeChecker,
  registry: TypeRegistry,
): ParsedInterface | undefined {
  // First try to get from registry
  const fromRegistry = registry.types.get(paramsTypeName);
  if (fromRegistry) {
    return fromRegistry;
  }

  let result: ParsedInterface | undefined;

  function visit(node: ts.Node) {
    if (
      ts.isInterfaceDeclaration(node) &&
      node.name.getText() === paramsTypeName
    ) {
      result = parseInterface(node, checker, registry);
    }

    // Handle type aliases that are unions (e.g., `type FooParams = FooParams.A | FooParams.B`)
    // Resolve by finding the first variant's interface in the namespace
    if (
      !result &&
      ts.isTypeAliasDeclaration(node) &&
      node.name.getText() === paramsTypeName &&
      ts.isUnionTypeNode(node.type)
    ) {
      // Get the first variant's type name (e.g., "AbuseReportCreateParams.AbuseReportsDmcaReport")
      for (const member of node.type.types) {
        if (ts.isTypeReferenceNode(member)) {
          const variantName = member.typeName.getText();
          // Try to find this variant interface in the registry
          const variantInterface = registry.types.get(variantName);
          if (variantInterface) {
            result = variantInterface;
            return;
          }
        }
      }
    }

    // Also check module declarations (for nested namespaces)
    if (ts.isModuleDeclaration(node)) {
      ts.forEachChild(node, visit);
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return result;
}

/**
 * Parse a class method declaration to extract operation info
 */
function parseMethod(
  method: ts.MethodDeclaration,
  className: string,
  resourcePath: string[],
  sourceFile: ts.SourceFile,
  checker: ts.TypeChecker,
  registry: TypeRegistry,
): ParsedOperation | undefined {
  const methodName = method.name.getText();
  const methodComment = getJsDocComment(method);

  // Skip getters and private methods
  if (
    method.modifiers?.some((m) => m.kind === ts.SyntaxKind.PrivateKeyword) ||
    methodName.startsWith("_")
  ) {
    return undefined;
  }

  // Get method body
  const body = method.body;
  if (!body) {
    return undefined;
  }

  // Extract HTTP method
  const httpMethod = extractHttpMethod(body);
  if (!httpMethod) {
    return undefined;
  }

  // Extract URL template
  const urlTemplate = extractUrlTemplate(body);
  if (!urlTemplate) {
    return undefined;
  }

  // Extract path params from URL
  const urlPathParams = extractPathParamsFromUrl(urlTemplate);

  // Extract header name mappings
  const headerNames = extractHeaderNames(body);

  // Detect multipart form request options
  const isMultipart = detectMultipart(body);

  // Detect pagination type (items wrapper vs bare array)
  const paginationType = detectPaginationType(body);
  const paginationClassName = detectPaginationClassName(body);
  const responsePath = detectResponsePath(body);

  // Find the params type from method signature
  // Also extract leading positional parameters (like `bucketName: string`)
  let paramsTypeName: string | undefined;
  let responseTypeName: string | undefined;
  let responseType: TypeInfo = { kind: "unknown" };
  const leadingPathParams: ParamInfo[] = [];

  for (const param of method.parameters) {
    const paramName = param.name.getText();
    const paramType = param.type;

    if (paramType && ts.isTypeReferenceNode(paramType)) {
      const typeName = paramType.typeName.getText();
      if (typeName.endsWith("Params")) {
        paramsTypeName = typeName;
      }
    } else if (paramType) {
      // This is a positional parameter like `bucketName: string`
      // Check if it's used in the URL template
      if (urlPathParams.includes(paramName)) {
        leadingPathParams.push({
          name: paramName,
          type: typeNodeToTypeInfo(paramType, checker, registry),
          location: "path",
          required: !param.questionToken,
        });
      }
    }
  }

  // Get return type
  const returnType = method.type;
  if (returnType && ts.isTypeReferenceNode(returnType)) {
    const returnTypeName = returnType.typeName.getText();

    // Handle Core.PagePromise<PaginationType, ItemType> — use the item type (2nd arg)
    if (
      (returnTypeName === "Core.PagePromise" ||
        returnTypeName.endsWith(".PagePromise")) &&
      returnType.typeArguments &&
      returnType.typeArguments.length >= 2
    ) {
      const itemType = returnType.typeArguments[1];
      responseType = typeNodeToTypeInfo(itemType, checker, registry);
      if (ts.isTypeReferenceNode(itemType)) {
        responseTypeName = itemType.typeName.getText();
      }
    }
    // Handle Core.APIPromise<T>
    else if (returnType.typeArguments?.[0]) {
      const innerType = returnType.typeArguments[0];
      responseType = typeNodeToTypeInfo(innerType, checker, registry);
      if (ts.isTypeReferenceNode(innerType)) {
        responseTypeName = innerType.typeName.getText();
      } else if (ts.isUnionTypeNode(innerType)) {
        // Handle Core.APIPromise<T | null> — extract the non-null type reference
        const nonNullTypes = innerType.types.filter(
          (t) =>
            !(
              ts.isLiteralTypeNode(t) &&
              t.literal.kind === ts.SyntaxKind.NullKeyword
            ),
        );
        if (
          nonNullTypes.length === 1 &&
          ts.isTypeReferenceNode(nonNullTypes[0])
        ) {
          responseTypeName = nonNullTypes[0].typeName.getText();
        }
      }
    }
  }

  // Parse params interface
  const pathParams: ParamInfo[] = [...leadingPathParams];
  const queryParams: ParamInfo[] = [];
  const headerParams: ParamInfo[] = [];
  const bodyParams: ParamInfo[] = [];

  // Track which path params we've already added from leading params
  const addedPathParams = new Set(leadingPathParams.map((p) => p.name));

  if (paramsTypeName) {
    const paramsInterface = findParamsInterface(
      sourceFile,
      paramsTypeName,
      checker,
      registry,
    );

    if (paramsInterface) {
      for (const prop of paramsInterface.properties) {
        const paramInfo: ParamInfo = {
          name: prop.name,
          type: prop.type,
          location: prop.location || "body", // Default to body if not specified
          required: prop.required,
          description: prop.description,
        };

        // Check if this is a path param from URL
        if (urlPathParams.includes(prop.name)) {
          paramInfo.location = "path";
        }

        // Add header name if found
        if (headerNames.has(prop.name)) {
          paramInfo.headerName = headerNames.get(prop.name);
        }

        // Skip if already added as a leading param
        if (addedPathParams.has(prop.name)) {
          continue;
        }

        switch (paramInfo.location) {
          case "path":
            pathParams.push(paramInfo);
            break;
          case "query":
            queryParams.push(paramInfo);
            break;
          case "header":
            headerParams.push(paramInfo);
            break;
          case "body":
          default:
            bodyParams.push(paramInfo);
            break;
        }
      }
    }
  }

  // Compute derived identifiers
  const operationName = computeOperationName(
    methodName,
    httpMethod,
    resourcePath,
    className,
  );
  const resourceName = buildResourceName(resourcePath, className);
  const resources = computeResources(pathParams);

  return {
    source: "ast",
    // Computed identifiers
    operationName,
    resourceName,
    resources,
    // Raw parsed data
    methodName,
    resourcePath,
    className,
    httpMethod,
    urlTemplate,
    urlPathParams,
    pathParams,
    queryParams,
    headerParams,
    bodyParams,
    responseType,
    responseTypeName,
    responsePath,
    sourceFile: sourceFile.fileName,
    registry,
    isMultipart: isMultipart || undefined,
    paginationType,
    paginationClassName,
    description: methodComment,
  };
}

/**
 * Parse an APIResource class to extract all operations
 */
function parseApiResourceClass(
  classDecl: ts.ClassDeclaration,
  resourcePath: string[],
  sourceFile: ts.SourceFile,
  checker: ts.TypeChecker,
): ParsedOperation[] {
  const operations: ParsedOperation[] = [];
  const className = classDecl.name?.getText() || "Unknown";

  // Check if it extends APIResource
  if (!classDecl.heritageClauses) {
    return operations;
  }

  const extendsApiResource = classDecl.heritageClauses.some(
    (clause) =>
      clause.token === ts.SyntaxKind.ExtendsKeyword &&
      clause.types.some((t) => t.expression.getText() === "APIResource"),
  );

  if (!extendsApiResource) {
    return operations;
  }

  // Create type registry for this source file
  const registry = createTypeRegistry(sourceFile, checker);

  // Parse all methods
  for (const member of classDecl.members) {
    if (ts.isMethodDeclaration(member)) {
      const operation = parseMethod(
        member,
        className,
        resourcePath,
        sourceFile,
        checker,
        registry,
      );
      if (operation) {
        operations.push(operation);
      }
    }
  }

  return operations;
}

/**
 * Discover the resource path from a file path
 * e.g., "r2/buckets/lifecycle.ts" -> ["r2", "buckets", "lifecycle"]
 */
function getResourcePath(filePath: string, basePath: string): string[] {
  const relative = path.relative(basePath, filePath);
  const parts = relative.replace(/\.ts$/, "").split(path.sep);

  // Filter out "index" files
  return parts.filter((p) => p !== "index");
}

/**
 * Get the service name from a resource path
 */
function getServiceName(resourcePath: string[]): string {
  return resourcePath[0];
}

/**
 * Parse all TypeScript files in a directory
 */
const collectTypeScriptFiles = (
  fs: FileSystem.FileSystem,
  directory: string,
): Effect.Effect<string[], unknown> =>
  collectFilesMatching(fs, directory, (fullPath) => fullPath.endsWith(".ts"));

const parseServiceFilesCore = (basePath: string, serviceFilter?: string) =>
  Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;
    // Find all TypeScript files
    const searchRoot = serviceFilter
      ? path.join(basePath, serviceFilter)
      : basePath;
    const files = yield* collectTypeScriptFiles(fs, searchRoot);

    // Filter out index files and test files
    const sourceFiles = files.filter(
      (f) =>
        !f.endsWith("/index.ts") &&
        !f.includes(".test.") &&
        !f.includes(".spec."),
    );

    if (sourceFiles.length === 0) {
      return [] as ServiceInfo[];
    }
    // Create TypeScript program
    const program = createProgram(sourceFiles);
    const checker = program.getTypeChecker();

    // Group operations by service
    const serviceMap = new Map<string, ParsedOperation[]>();

    for (const file of sourceFiles) {
      const sourceFile = program.getSourceFile(file);
      if (!sourceFile) continue;

      const resourcePath = getResourcePath(file, basePath);
      if (resourcePath.length === 0) continue;

      const serviceName = getServiceName(resourcePath);

      // Parse all class declarations
      ts.forEachChild(sourceFile, (node) => {
        if (ts.isClassDeclaration(node)) {
          const operations = parseApiResourceClass(
            node,
            resourcePath,
            sourceFile,
            checker,
          );

          for (const op of operations) {
            const existing = serviceMap.get(serviceName) || [];
            existing.push(op);
            serviceMap.set(serviceName, existing);
          }
        }
      });
    }

    // Convert to ServiceInfo array, applying normalization
    const services: ServiceInfo[] = [];
    for (const [name, operations] of serviceMap) {
      // Normalize operations (update -> put renaming, etc.)
      const normalizedOps = normalizeOperations(operations);
      services.push({ name, operations: normalizedOps });
    }

    return services;
  });

function openApiPointer<T>(ref: string, spec: OpenApiSpec): T | undefined {
  if (!ref.startsWith("#/")) {
    return undefined;
  }

  let current: unknown = spec;
  for (const segment of ref.slice(2).split("/")) {
    if (typeof current !== "object" || current === null) {
      return undefined;
    }
    current = (current as Record<string, unknown>)[segment];
  }

  return current as T | undefined;
}

function resolveOpenApiParameter(
  parameter: OpenApiParameter,
  spec: OpenApiSpec,
): OpenApiParameter | undefined {
  if (!parameter.$ref) {
    return parameter;
  }
  return openApiPointer<OpenApiParameter>(parameter.$ref, spec);
}

function resolveOpenApiResponse(
  response: OpenApiResponse,
  spec: OpenApiSpec,
): OpenApiResponse | undefined {
  if (!response.$ref) {
    return response;
  }
  return openApiPointer<OpenApiResponse>(response.$ref, spec);
}

function buildLiteralTypeInfo(
  values: Array<string | number | boolean>,
): TypeInfo {
  if (values.length === 1) {
    return { kind: "literal", value: String(values[0]) };
  }

  return {
    kind: "union",
    values: values.map((value) => ({ kind: "literal", value: String(value) })),
  };
}

function makeNullable(type: TypeInfo): TypeInfo {
  if (type.kind === "null") {
    return type;
  }
  if (type.kind === "union" && type.values?.some((value) => value.kind === "null")) {
    return type;
  }
  return {
    kind: "union",
    values: [type, { kind: "null" }],
  };
}

function schemaObjectToTypeInfo(
  schema: OpenApiSchema | undefined,
  spec: OpenApiSpec,
  seenRefs: Set<string> = new Set(),
): TypeInfo {
  if (!schema) {
    return { kind: "unknown" };
  }

  if (schema.$ref) {
    if (seenRefs.has(schema.$ref)) {
      return { kind: "unknown" };
    }
    const resolved = openApiPointer<OpenApiSchema>(schema.$ref, spec);
    if (!resolved) {
      return { kind: "unknown" };
    }
    return schemaObjectToTypeInfo(resolved, spec, new Set([...seenRefs, schema.$ref]));
  }

  if (schema.enum && schema.enum.length > 0) {
    const enumType = buildLiteralTypeInfo(schema.enum);
    return schema.nullable ? makeNullable(enumType) : enumType;
  }

  const unionSchemas = schema.oneOf ?? schema.anyOf;
  if (unionSchemas && unionSchemas.length > 0) {
    const values = unionSchemas.map((value) =>
      schemaObjectToTypeInfo(value, spec, seenRefs),
    );
    const unionType: TypeInfo = { kind: "union", values };
    return schema.nullable ? makeNullable(unionType) : unionType;
  }

  if (schema.allOf && schema.allOf.length > 0) {
    const resolvedParts = schema.allOf.map((part) =>
      schemaObjectToTypeInfo(part, spec, seenRefs),
    );
    const objectParts = resolvedParts.filter(
      (part): part is TypeInfo & { kind: "object"; properties: NonNullable<TypeInfo["properties"]> } =>
        part.kind === "object" && !!part.properties,
    );
    if (objectParts.length > 0) {
      const merged: TypeInfo = {
        kind: "object",
        properties: objectParts.flatMap((part) => part.properties ?? []),
      };
      return schema.nullable ? makeNullable(merged) : merged;
    }
  }

  const rawType = Array.isArray(schema.type)
    ? schema.type.find((value) => value !== "null")
    : schema.type;
  const isNullable =
    schema.nullable ||
    (Array.isArray(schema.type) && schema.type.includes("null"));

  let typeInfo: TypeInfo;
  switch (rawType) {
    case "string":
      typeInfo = { kind: "primitive", value: "string" };
      break;
    case "integer":
    case "number":
      typeInfo = { kind: "primitive", value: "number" };
      break;
    case "boolean":
      typeInfo = { kind: "primitive", value: "boolean" };
      break;
    case "array":
      typeInfo = {
        kind: "array",
        elementType: schemaObjectToTypeInfo(schema.items, spec, seenRefs),
      };
      break;
    case "object":
      if (schema.properties && Object.keys(schema.properties).length > 0) {
        const required = new Set(schema.required ?? []);
        typeInfo = {
          kind: "object",
          properties: Object.entries(schema.properties).map(([name, propertySchema]) => ({
            name,
            type: schemaObjectToTypeInfo(propertySchema, spec, seenRefs),
            required: required.has(name),
            description: propertySchema.description,
          })),
        };
      } else if (schema.additionalProperties) {
        typeInfo = { kind: "unknown" };
      } else {
        typeInfo = { kind: "object", properties: [] };
      }
      break;
    default:
      if (schema.properties && Object.keys(schema.properties).length > 0) {
        const required = new Set(schema.required ?? []);
        typeInfo = {
          kind: "object",
          properties: Object.entries(schema.properties).map(([name, propertySchema]) => ({
            name,
            type: schemaObjectToTypeInfo(propertySchema, spec, seenRefs),
            required: required.has(name),
            description: propertySchema.description,
          })),
        };
      } else {
        typeInfo = { kind: "unknown" };
      }
      break;
  }

  return isNullable ? makeNullable(typeInfo) : typeInfo;
}

function requestBodyToParams(
  requestBody: OpenApiRequestBody | undefined,
  spec: OpenApiSpec,
): ParamInfo[] {
  if (!requestBody?.content) {
    return [];
  }

  const mediaType =
    requestBody.content["application/json"] ??
    Object.values(requestBody.content)[0];
  const schema = mediaType?.schema;
  if (!schema) {
    return [];
  }

  const type = schemaObjectToTypeInfo(schema, spec);
  if (type.kind === "object" && type.properties && type.properties.length > 0) {
    return type.properties.map((property) => ({
      name: property.name,
      type: property.type,
      location: "body",
      required: property.required,
      description: property.description,
    }));
  }

  return [
    {
      name: "body",
      type,
      location: "body",
      required: requestBody.required ?? true,
    },
  ];
}

function getOperationMethodName(operationName: string): string {
  const match = operationName.match(/^[a-z]+/);
  return match?.[0] ?? operationName;
}

function getOperationResourceName(operationName: string, methodName: string): string {
  const resource = operationName.slice(methodName.length);
  return resource || "Operation";
}

function buildOpenApiOperation(
  serviceName: string,
  specFile: string,
  pathTemplate: string,
  httpMethod: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  operation: OpenApiOperation,
  pathItem: OpenApiPathItem,
  spec: OpenApiSpec,
): ParsedOperation | undefined {
  if (!operation.operationId) {
    return undefined;
  }

  const urlPathParams = extractPathParamsFromUrl(pathTemplate);
  const combinedParameters = [...(pathItem.parameters ?? []), ...(operation.parameters ?? [])];
  const deduped = new Map<string, OpenApiParameter>();
  for (const parameter of combinedParameters) {
    const resolved = resolveOpenApiParameter(parameter, spec);
    if (!resolved?.name || !resolved.in || resolved.in === "cookie") {
      continue;
    }
    deduped.set(`${resolved.in}:${resolved.name}`, resolved);
  }

  const pathParams: ParamInfo[] = [];
  const queryParams: ParamInfo[] = [];
  const headerParams: ParamInfo[] = [];
  for (const parameter of deduped.values()) {
    const paramInfo: ParamInfo = {
      name: parameter.name!,
      type: schemaObjectToTypeInfo(parameter.schema, spec),
      location: parameter.in as "path" | "query" | "header",
      required: parameter.required ?? parameter.in === "path",
      description: parameter.description,
    };

    if (urlPathParams.includes(paramInfo.name)) {
      paramInfo.location = "path";
    }

    switch (paramInfo.location) {
      case "path":
        pathParams.push(paramInfo);
        break;
      case "query":
        queryParams.push(paramInfo);
        break;
      case "header":
        headerParams.push(paramInfo);
        break;
    }
  }

  const bodyParams = requestBodyToParams(operation.requestBody, spec);
  const successResponseKey = Object.keys(operation.responses)
    .filter((status) => /^2\d\d$/.test(status))
    .sort()[0];
  const successResponse = successResponseKey
    ? resolveOpenApiResponse(operation.responses[successResponseKey], spec)
    : undefined;
  const mediaType =
    successResponse?.content?.["application/json"] ??
    (successResponse?.content ? Object.values(successResponse.content)[0] : undefined);
  const requestContentTypes = Object.keys(operation.requestBody?.content ?? {});
  const isMultipart = requestContentTypes.some((type) =>
    type.includes("multipart/form-data"),
  );
  const responseType = schemaObjectToTypeInfo(mediaType?.schema, spec);
  const methodName = getOperationMethodName(operation.operationId);
  const resourceName = getOperationResourceName(operation.operationId, methodName);
  const errors: OperationErrorInfo[] = Object.entries(
    operation["x-distilled-errors"] ?? {},
  ).map(([tag, matchers]) => ({ tag, matchers }));

  return {
    source: "openapi",
    operationName: operation.operationId,
    resourceName,
    resources: computeResources(pathParams),
    methodName,
    resourcePath: [serviceName],
    className: resourceName,
    httpMethod,
    urlTemplate: pathTemplate,
    urlPathParams,
    pathParams,
    queryParams,
    headerParams,
    bodyParams,
    responseType,
    responsePath: operation["x-distilled-response-path"],
    isMultipart: isMultipart || undefined,
    paginationClassName: operation["x-distilled-pagination-class"],
    summary: operation.summary,
    description: operation.description,
    successStatus: successResponseKey,
    successDescription: successResponse?.description,
    errors: errors.length > 0 ? errors : undefined,
    sourceFile: specFile,
  };
}

const parseOpenApiFiles = (
  openapiBasePath: string | undefined,
  serviceFilter?: string,
) =>
  Effect.gen(function* () {
    if (!openapiBasePath) {
      return [] as ServiceInfo[];
    }

    const fs = yield* FileSystem.FileSystem;
    const files = yield* collectFilesMatching(
      fs,
      openapiBasePath,
      (file) => OPENAPI_SPEC_REGEX.test(file),
    );

    const services: ServiceInfo[] = [];
    for (const file of files) {
      const content = yield* fs.readFileString(file).pipe(Effect.orDie);
      const parsed = file.endsWith(".json")
        ? (JSON.parse(content) as OpenApiSpec)
        : (parseYaml(content) as OpenApiSpec);
      const serviceName =
        parsed["x-distilled-service"] ??
        path.basename(file).replace(/\.openapi\.(json|ya?ml)$/i, "");

      if (serviceFilter && serviceFilter !== serviceName) {
        continue;
      }

      const operations: ParsedOperation[] = [];
      for (const [pathTemplate, pathItem] of Object.entries(parsed.paths ?? {})) {
        for (const method of ["get", "post", "put", "patch", "delete"] as const) {
          const operation = pathItem[method];
          if (!operation) continue;

          const parsedOperation = buildOpenApiOperation(
            serviceName,
            file,
            pathTemplate,
            method.toUpperCase() as ParsedOperation["httpMethod"],
            operation,
            pathItem,
            parsed,
          );
          if (parsedOperation) {
            operations.push(parsedOperation);
          }
        }
      }

      services.push({
        name: serviceName,
        title: parsed.info?.title,
        version: parsed.info?.version,
        description: parsed.info?.description,
        operations,
      });
    }

    return services;
  });

function mergeServices(...serviceGroups: ServiceInfo[][]): ServiceInfo[] {
  const merged = new Map<string, ServiceInfo>();

  for (const services of serviceGroups) {
    for (const service of services) {
      const existing = merged.get(service.name);
      if (existing) {
        existing.operations.push(...service.operations);
        existing.title ??= service.title;
        existing.version ??= service.version;
        existing.description ??= service.description;
      } else {
        merged.set(service.name, {
          name: service.name,
          title: service.title,
          version: service.version,
          description: service.description,
          operations: [...service.operations],
        });
      }
    }
  }

  return [...merged.values()]
    .sort((a, b) => a.name.localeCompare(b.name));
}

const parseServiceFiles = (
  basePath: string,
  openapiBasePath?: string,
  serviceFilter?: string,
  force?: boolean,
) =>
  Effect.gen(function* () {
    // Resolve the repo root (basePath is like "./cloudflare-typescript/src/resources")
    const repoRoot = path.resolve(basePath, "./");

    // Get cache key for upstream SDK + local OpenAPI inputs
    const hash = yield* getCacheKey(repoRoot, openapiBasePath);

    // Try to load from cache (unless force is true or filtering by service)
    if (!force && !serviceFilter && hash) {
      const cached = yield* loadCache(hash);
      if (cached) {
        return cached;
      }
    }

    const astServices = yield* parseServiceFilesCore(basePath, serviceFilter);
    const openapiServices = yield* parseOpenApiFiles(openapiBasePath, serviceFilter);
    const services = mergeServices(astServices, openapiServices);

    // Save to cache (only if not filtering by service)
    if (!serviceFilter && hash) {
      yield* saveCache(hash, services);
    }

    return services;
  });

export const parseCode = (options: ParseOptions) => {
  const { basePath, openapiBasePath, serviceFilter, force } = options;
  return parseServiceFiles(basePath, openapiBasePath, serviceFilter, force);
};

export const parseOpenApiCode = (options: {
  openapiBasePath: string;
  serviceFilter?: string;
}) => parseOpenApiFiles(options.openapiBasePath, options.serviceFilter);

export const loadModel = (options: ParseOptions) =>
  parseCode(options).pipe(
    Effect.provide(NodeServices.layer),
    Effect.runPromise,
  );
