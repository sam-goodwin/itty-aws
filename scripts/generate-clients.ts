import { FileSystem } from "@effect/platform";
import { NodeFileSystem } from "@effect/platform-node";
import { Effect } from "effect";
import type { Manifest, Shape } from "./manifest.ts";

// Configuration flags
const INCLUDE_DOCUMENTATION = false; // Set to false to disable JSDoc comments

// Fields that should support streaming in addition to regular blob types
const STREAMING_FIELDS = new Set([
  "Body", // S3 GetObject response
  "body", // Bedrock and other services use lowercase
  "StreamingBody", // Some AWS services use this name
  "BlobStream", // Some services use this pattern
  "ReadSetPartStreamingBlob", // Omics service
  "ReadSetStreamingBlob", // Omics service  
  "ReferenceStreamingBlob", // Omics service
  "ResponseStream", // Bedrock and other services
  "InvokeArgs", // Lambda service
  "inputStream", // Lex services
  "audioStream", // Lex services
  "payload", // Omics service
]);

// Helper to extract service name from shape ID
const extractShapeName = (shapeId: string): string => {
  const parts = shapeId.split("#");
  return parts[1] || "";
};

// Helper to convert shape name to TypeScript identifier
const toTypescriptIdentifier = (name: string): string => {
  // Remove any special characters and ensure valid TS identifier
  return name.replace(/[^a-zA-Z0-9]/g, "");
};

// Helper to check if a type name conflicts with built-in TypeScript types
const getTypescriptSafeName = (shapeName: string, servicePrefix: string): string => {
  // List of names that conflict with global TypeScript types and reserved words
  const conflictingNames = new Set([
    // Capitalized built-in types
    "Date", "String", "Number", "Boolean", "Record", "Array", "Object", 
    "Promise", "Function", "Error", "RegExp", "Map", "Set", "Symbol",
    "Uint8Array", "DataView", "ArrayBuffer", "JSON", "Math", "Console",
    // Lowercase primitive types and reserved words
    "string", "number", "boolean", "object", "undefined", "null", "void",
    "any", "unknown", "never", "bigint", "symbol",
    // TypeScript keywords
    "type", "interface", "enum", "class", "function", "var", "let", "const",
    "import", "export", "default", "namespace", "module", "declare",
    "abstract", "async", "await", "break", "case", "catch", "continue",
    "debugger", "delete", "do", "else", "finally", "for", "if", "in",
    "instanceof", "new", "return", "super", "switch", "this", "throw",
    "try", "typeof", "while", "with", "yield",
    // Browser/Node globals that could conflict
    "document", "window", "global", "process", "Buffer", "console"
  ]);
  
  if (conflictingNames.has(shapeName)) {
    // Prefix with service name to avoid conflicts
    return `${servicePrefix}${shapeName}`;
  }
  
  return shapeName;
};

// Helper to convert to lowerCamelCase
const toLowerCamelCase = (name: string): string => {
  return name.charAt(0).toLowerCase() + name.slice(1);
};

// Helper to check if a field is required
const isRequired = (traits: Record<string, any> | undefined): boolean => {
  return !!(traits && "smithy.api#required" in traits);
};

// Type generation options
interface TypeGenOptions {
  manifest: Manifest;
  crossServiceImports?: Set<string>;
  typeNameMapping?: Map<string, string>;
  responseErrorTypeName?: string;
  inputShapes?: Set<string>;
  outputShapes?: Set<string>;
}

// Helper to determine if a field should support streaming
const shouldSupportStreaming = (memberName: string, shapeName: string): boolean => {
  return STREAMING_FIELDS.has(memberName) || STREAMING_FIELDS.has(shapeName);
};

// Helper to map Smithy types to TypeScript
const mapSmithyTypeToTypeScript = (
  shape: Shape, 
  shapeName: string, 
  memberName?: string, 
  contextShapeName?: string, 
  options: TypeGenOptions = {} as TypeGenOptions
): string => {
  const { responseErrorTypeName = "ResponseError", inputShapes, outputShapes } = options;
  
  switch (shape.type) {
    case "string":
      return "string";
    case "integer":
    case "long":
    case "float":
    case "double":
      return "number";
    case "boolean":
      return "boolean";
    case "timestamp":
      return "Date | string";
    case "blob":
      // Check if this blob should support streaming
      if (memberName && shouldSupportStreaming(memberName, shapeName)) {
        if (contextShapeName && inputShapes && outputShapes) {
          if (outputShapes.has(contextShapeName)) {
            // Output types: only Stream with ResponseError
            return `Stream.Stream<Uint8Array, ${responseErrorTypeName}>`;
          } else if (inputShapes.has(contextShapeName)) {
            // Input types: union with Buffer support and flexible Stream error type
            return `Uint8Array | string | Buffer | Stream.Stream<Uint8Array>`;
          }
        }
        // Default fallback for unknown context
        return `Uint8Array | string | Stream.Stream<Uint8Array>`;
      }
      return "Uint8Array | string";
    case "document":
      return "unknown";
    default:
      return `_opaque_${shapeName}`;
  }
};

// Helper to generate type reference from shape target
const generateTypeReference = (
  target: string, 
  memberName?: string, 
  contextShapeName?: string, 
  options: TypeGenOptions = {} as TypeGenOptions
): string => {
  const { 
    manifest, 
    crossServiceImports, 
    typeNameMapping, 
    responseErrorTypeName = "ResponseError",
    inputShapes,
    outputShapes
  } = options;
  
  // Handle special Smithy built-in types
  if (target === "smithy.api#Unit") {
    return "{}";
  }
  
  // Handle common Smithy built-in primitive types
  if (target === "smithy.api#String") {
    return "string";
  }
  if (target === "smithy.api#Boolean" || target === "smithy.api#PrimitiveBoolean") {
    return "boolean";
  }
  if (target === "smithy.api#Integer" || target === "smithy.api#Long" || target === "smithy.api#PrimitiveLong" ||
      target === "smithy.api#Float" || target === "smithy.api#Double") {
    return "number";
  }
  if (target === "smithy.api#Timestamp") {
    return "Date | string";
  }
  if (target === "smithy.api#Blob") {
    // Check if this blob should support streaming
    if (memberName && shouldSupportStreaming(memberName, "")) {
      if (contextShapeName && inputShapes && outputShapes) {
        if (outputShapes.has(contextShapeName)) {
          // Output types: only Stream with ResponseError
          return `Stream.Stream<Uint8Array, ${responseErrorTypeName}>`;
        } else if (inputShapes.has(contextShapeName)) {
          // Input types: union with Buffer support and flexible Stream error type
          return `Uint8Array | string | Buffer | Stream.Stream<Uint8Array>`;
        }
      }
      // Default fallback for unknown context
      return `Uint8Array | string | Stream.Stream<Uint8Array>`;
    }
    return "Uint8Array | string";
  }
  if (target === "smithy.api#Document") {
    return "unknown";
  }
  
  // Check if target exists in manifest shapes
  const targetShape = manifest.shapes[target];
  if (!targetShape) {
    // Check if it's a cross-service reference
    if (target.startsWith("com.amazonaws.") && target.includes("#")) {
      const [serviceNamespace, typeName] = target.split("#");
      const serviceName = serviceNamespace.replace("com.amazonaws.", "");
      
      // Add to cross-service imports if provided
      if (crossServiceImports) {
        crossServiceImports.add(serviceName);
      }
      
      return typeName;
    }
    
    // If shape doesn't exist and it's not a recognized cross-service reference, this is an error
    throw new Error(`Cannot resolve type reference: ${target}`);
  }

  const shapeName = extractShapeName(target);
  
  // Check if we have a renamed version of this type
  const finalTypeName = typeNameMapping?.get(shapeName) || shapeName;
  
  switch (targetShape.type) {
    case "string":
    case "integer": 
    case "long":
    case "float":
    case "double":
    case "boolean":
    case "timestamp":
    case "blob":
    case "document":
      return mapSmithyTypeToTypeScript(targetShape, shapeName, memberName, contextShapeName, options);
    case "list":
      if (targetShape.member) {
        const memberType = generateTypeReference(targetShape.member.target, memberName, contextShapeName, options);
        return `Array<${memberType}>`;
      }
      return `Array<unknown>`;
    case "map":
      if (targetShape.key && targetShape.value) {
        const keyType = generateTypeReference(targetShape.key.target, undefined, contextShapeName, options);
        const valueType = generateTypeReference(targetShape.value.target, undefined, contextShapeName, options);
        return `Record<${keyType}, ${valueType}>`;
      }
      return `Record<string, unknown>`;
    case "structure":
    case "union":
    case "enum":
      return finalTypeName;
    default:
      return finalTypeName;
  }
};

// Helper to get documentation from traits
const getDocumentation = (traits: Record<string, any> | undefined): string | undefined => {
  if (!INCLUDE_DOCUMENTATION || !traits) return undefined;
  
  const docTrait = traits["smithy.api#documentation"];
  if (!docTrait || typeof docTrait !== "string") return undefined;
  
  // Clean up the documentation: remove HTML tags and fix indentation
  const cleanDoc = docTrait
    .replace(/<\/?p>/g, '') // Remove <p> and </p> tags
    .replace(/<\/?[^>]+>/g, '') // Remove other HTML tags
    .replace(/^\s+/gm, '') // Remove leading whitespace from each line
    .replace(/\n\s*\n/g, '\n') // Remove empty lines
    .trim();
  
  if (!cleanDoc) return undefined;
  
  return `/**\n * ${cleanDoc.split('\n').join('\n * ')}\n */`;
};

// Helper to generate error class (declare class extending EffectData.TaggedError)
const generateErrorInterface = (shapeName: string, shape: any, options: TypeGenOptions): string => {
  const doc = getDocumentation(shape.traits);
  let code = "";
  
  if (doc) {
    code += `${doc}\n`;
  }
  
  code += `export declare class ${shapeName} extends EffectData.TaggedError(\n`;
  code += `  "${shapeName}",\n`;
  code += `)<{\n`;
  
  // Add members if any
  if (shape.members) {
    for (const [memberName, member] of Object.entries(shape.members)) {
      const memberInfo = member as any;
      const fieldType = generateTypeReference(memberInfo.target, memberName, shapeName, options);
      const optional = !isRequired(memberInfo.traits);
      const memberDoc = getDocumentation(memberInfo.traits);
      
      if (memberDoc) {
        code += `  ${memberDoc.split('\n').map(line => `  ${line}`).join('\n')}\n`;
      }
      
      code += `  readonly ${memberName}${optional ? "?" : ""}: ${fieldType};\n`;
    }
  }
  
  code += "}> {}";
  return code;
};

// Helper to generate structure interface
const generateStructureInterface = (name: string, shape: Extract<Shape, { type: "structure" }>, options: TypeGenOptions): string => {
  const doc = getDocumentation(shape.traits);
  let code = doc ? `${doc}\n` : "";
  
  // Generate regular interface
  code += `export interface ${name} {\n`;
  if (shape.members) {
    for (const [memberName, member] of Object.entries(shape.members)) {
      const memberDoc = getDocumentation(member.traits);
      if (memberDoc) {
        code += `  ${memberDoc.split('\n').map(line => line.replace(/^\s*\*/, '  *')).join('\n')}\n`;
      }
      const isRequiredField = isRequired(member.traits);
      const questionMark = isRequiredField ? "" : "?";
      const fieldType = generateTypeReference(member.target, memberName, name, options);
      code += `  ${memberName}${questionMark}: ${fieldType};\n`;
    }
  }
  code += `}`;
  
  return code;
};

// Helper to generate union type
const generateUnionType = (name: string, shape: Extract<Shape, { type: "union" }>, options: TypeGenOptions): string => {
  const doc = getDocumentation(shape.traits);
  let code = doc ? `${doc}\n` : "";
  
  if (shape.members) {
    const baseName = `_${name}`;
    
    // Generate base interface with all properties as optional
    code += `interface ${baseName} {\n`;
    for (const [memberName, member] of Object.entries(shape.members)) {
      const memberType = generateTypeReference(member.target, memberName, baseName, options);
      const memberDoc = getDocumentation(member.traits);
      
      if (memberDoc) {
        code += `  ${memberDoc.split('\n').map(line => line.replace(/^\s*\*/, '  *')).join('\n')}\n`;
      }
      
      code += `  ${memberName}?: ${memberType};\n`;
    }
    code += `}\n\n`;
    
    // Generate union type using intersection with base interface
    const variants = Object.entries(shape.members).map(([memberName, member]) => {
      const memberType = generateTypeReference(member.target, memberName, baseName, options);
      return `(${baseName} & { ${memberName}: ${memberType} })`;
    });
    
    code += `export type ${name} = ${variants.join(" | ")};`;
  } else {
    code += `export type ${name} = never;`;
  }
  
  return code;
};

// Helper to generate enum type
const generateEnumType = (name: string, shape: Extract<Shape, { type: "enum" }>, options: TypeGenOptions): string => {
  const doc = getDocumentation(shape.traits);
  let code = doc ? `${doc}\n` : "";
  
  if (shape.members) {
    const enumValues = Object.keys(shape.members).map(key => `"${key}"`);
    code += `export type ${name} = ${enumValues.join(" | ")};`;
  } else {
    code += `export type ${name} = never;`;
  }
  
  return code;
};

// Helper to generate list type
const generateListType = (name: string, shape: Extract<Shape, { type: "list" }>, options: TypeGenOptions): string => {
  const doc = getDocumentation(shape.traits);
  let code = doc ? `${doc}\n` : "";
  
  if (shape.member) {
    const memberType = generateTypeReference(shape.member.target, undefined, name, options);
    code += `export type ${name} = Array<${memberType}>;`;
  } else {
    code += `export type ${name} = Array<unknown>;`;
  }
  
  return code;
};

// Helper to generate map type
const generateMapType = (name: string, shape: Extract<Shape, { type: "map" }>, options: TypeGenOptions): string => {
  const doc = getDocumentation(shape.traits);
  let code = doc ? `${doc}\n` : "";
  
  if (shape.key && shape.value) {
    const keyType = generateTypeReference(shape.key.target, undefined, name, options);
    const valueType = generateTypeReference(shape.value.target, undefined, name, options);
    code += `export type ${name} = Record<${keyType}, ${valueType}>;`;
  } else {
    code += `export type ${name} = Record<string, unknown>;`;
  }
  
  return code;
};

const generateServiceCode = (serviceName: string, manifest: Manifest) =>
  Effect.gen(function* () {

    // Helper to determine if we need void type
    let needsVoid = false;
    
    // Check if we need Data import (only if there are error classes)
    let needsDataImport = false;
    
    // Track cross-service imports needed
    const crossServiceImports = new Set<string>();

    // Check if there's a ResponseError conflict
    const hasResponseErrorConflict = Object.entries(manifest.shapes).some(([shapeId, shape]) => {
      if (shapeId.includes('#')) {
        const shapeName = extractShapeName(shapeId);
        return shapeName === "ResponseError";
      }
      return false;
    });

    // Determine the ResponseError import name and type name
    const responseErrorImportName = hasResponseErrorConflict ? "EffectResponseError" : "ResponseError";
    const responseErrorTypeName = hasResponseErrorConflict ? "EffectResponseError" : "ResponseError";

    // Create type name mapping for conflicting types
    const typeNameMapping = new Map<string, string>();
    const servicePrefix = serviceName.split('-').map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join('');

    // Find service shape and extract metadata
    const serviceShapeEntry = Object.entries(manifest.shapes).find(([, shape]) => shape.type === "service");
    if (!serviceShapeEntry) {
      return yield* Effect.fail(new Error(`No service shape found in ${serviceName} manifest`));
    }

    const [serviceShapeId, serviceShape] = serviceShapeEntry;
    const serviceShapeName = extractShapeName(serviceShapeId);

    // Extract service metadata
    const serviceTraits = serviceShape.traits || {};
    const serviceInfo = (serviceTraits["aws.api#service"] as any) || {};
    const sdkId = serviceInfo.sdkId || "";
    const arnNamespace = serviceInfo.arnNamespace || "";
    const cloudFormationName = serviceInfo.cloudFormationName || "";
    const endpointPrefix = serviceInfo.endpointPrefix || "";
    
    // Determine protocol
    let protocol = "unknown";
    if (serviceTraits["aws.protocols#awsJson1_0"]) {
      protocol = "json";
    } else if (serviceTraits["aws.protocols#awsJson1_1"]) {
      protocol = "json";
    } else if (serviceTraits["aws.protocols#restJson1"]) {
      protocol = "rest-json";
    }
    
    // For AWS JSON protocols, the targetPrefix is the service name itself
    const targetPrefix = protocol === "json" ? serviceShapeName : "";

    // Find operations using the new Smithy 2.0 format
    let operations: Array<{ name: string; shape: any }> = [];
    
    if (serviceShape.type === "service" && serviceShape.operations) {
      // Smithy 2.0 format: operations are referenced in service.operations array
      operations = serviceShape.operations
        .map(opRef => {
          const operationShape = manifest.shapes[opRef.target];
          if (operationShape && operationShape.type === "operation") {
            return {
              name: extractShapeName(opRef.target),
              shape: operationShape
            };
          }
          return null;
        })
        .filter(op => op !== null);
    } else {
      // Fallback: look for operations as separate shapes (old format)
      operations = Object.entries(manifest.shapes)
        .filter(([, shape]) => shape.type === "operation")
        .map(([shapeId, shape]) => ({
          name: extractShapeName(shapeId),
          shape: shape as any
        }));
    }

    // Build maps of input and output shapes from operations
    const inputShapes = new Set<string>();
    const outputShapes = new Set<string>();
    
    for (const operation of operations) {
      if (operation.shape.input) {
        const inputShapeName = extractShapeName(operation.shape.input.target);
        inputShapes.add(inputShapeName);
      }
      if (operation.shape.output) {
        const outputShapeName = extractShapeName(operation.shape.output.target);
        outputShapes.add(outputShapeName);
      }
    }

    // Create the base options object for type generation
    const createTypeGenOptions = (overrides: Partial<TypeGenOptions> = {}): TypeGenOptions => ({
      manifest,
      crossServiceImports,
      typeNameMapping,
      responseErrorTypeName,
      inputShapes,
      outputShapes,
      ...overrides
    });

    // Check if we need Data import by looking for error shapes
    for (const [shapeId, shape] of Object.entries(manifest.shapes)) {
      if (shape.type === "structure" && shape.traits && "smithy.api#error" in shape.traits) {
        needsDataImport = true;
        break;
      }
    }

    // Check if we need Stream import and Buffer support by looking for streaming fields
    let needsStreamImport = false;
    let needsBufferSupport = false;
    for (const [shapeId, shape] of Object.entries(manifest.shapes)) {
      if (shape.type === "structure" && shape.members) {
        const shapeName = extractShapeName(shapeId);
        for (const [memberName, member] of Object.entries(shape.members)) {
          const targetShape = manifest.shapes[member.target];
          // Check both custom blob shapes and primitive blob types
          if (shouldSupportStreaming(memberName, shapeName)) {
            if (targetShape && targetShape.type === "blob") {
              needsStreamImport = true;
              // Check if this is an input shape that needs Buffer support
              if (inputShapes.has(shapeName)) {
                needsBufferSupport = true;
              }
              break;
            }
            // Also check for primitive blob types
            if (member.target === "smithy.api#Blob") {
              needsStreamImport = true;
              // Check if this is an input shape that needs Buffer support
              if (inputShapes.has(shapeName)) {
                needsBufferSupport = true;
              }
              break;
            }
          }
        }
        if (needsStreamImport && needsBufferSupport) break;
      }
    }

    // Generate imports
    let code = `import type { Effect${needsStreamImport ? ", Stream" : ""}${needsDataImport ? ", Data as EffectData" : ""} } from "effect";\n`;
    if (needsStreamImport) {
      code += `import type { ${responseErrorImportName} } from "@effect/platform/HttpClientError";\n`;
    }
    if (needsBufferSupport) {
      code += `import type { Buffer } from "node:buffer";\n`;
    }
    code += `import type { CommonAwsError } from "../error.ts";\n`;
    code += `import { AWSServiceClient } from "../client.ts";\n\n`;

    // First pass: Build type name mapping for conflicting types and track all type names
    const allShapes = Object.entries(manifest.shapes)
      .filter(([shapeId]) => shapeId.includes(`#`))
      .sort(([a], [b]) => {
        const aName = extractShapeName(a);
        const bName = extractShapeName(b);
        return aName.localeCompare(bName);
      });

    // Track all shape names to detect duplicates
    const shapeNameCounts = new Map<string, number>();
    
    for (const [shapeId, shape] of allShapes) {
      const shapeName = extractShapeName(shapeId);
      
      // Note: We no longer skip service-specific "Unit" types. Only smithy.api#Unit is mapped to `{}` at reference time.
      
      const currentCount = shapeNameCounts.get(shapeName) || 0;
      shapeNameCounts.set(shapeName, currentCount + 1);
      
      const safeTypeName = getTypescriptSafeName(shapeName, servicePrefix);
      if (safeTypeName !== shapeName) {
        typeNameMapping.set(shapeName, safeTypeName);
      }
    }

    // For duplicates, create unique names
    const processedShapes = new Map<string, string>(); // shapeName -> first shapeId that uses it
    
    for (const [shapeId, shape] of allShapes) {
      const shapeName = extractShapeName(shapeId);
      
      if (shapeName === "Unit") {
        continue;
      }
      
      if (shapeNameCounts.get(shapeName)! > 1) {
        // This is a duplicate name, check if we've already processed one with this name
        if (processedShapes.has(shapeName)) {
          // Skip subsequent duplicates
          continue;
        } else {
          // Mark this as the first one we're processing
          processedShapes.set(shapeName, shapeId);
        }
      }
    }

    // Generate service interface first at the top - use consistent naming based on sdkId  
    let consistentInterfaceName = sdkId.replace(/\s+/g, ''); // Remove spaces to make valid TS identifier
    
    // Check if the interface name conflicts with any existing type names in the manifest
    const conflictsWithExistingType = Object.entries(manifest.shapes).some(([shapeId, shape]) => {
      if (shapeId.includes('#')) {
        const shapeName = extractShapeName(shapeId);
        return shapeName === consistentInterfaceName && shape.type !== 'service';
      }
      return false;
    });
    
    // If there's a conflict, append "Client" to the interface name
    if (conflictsWithExistingType) {
      consistentInterfaceName = `${consistentInterfaceName}Client`;
    }
    
    code += `export declare class ${consistentInterfaceName} extends AWSServiceClient {\n`;
    
    for (const operation of operations) {
      const methodName = toLowerCamelCase(operation.name);
      
      // Get input and output types
      const inputType = operation.shape.input ? 
        (operation.shape.input.target === "smithy.api#Unit" ? "{}" : typeNameMapping.get(extractShapeName(operation.shape.input.target)) || extractShapeName(operation.shape.input.target)) : "{}";
      const outputType = operation.shape.output ? 
        (operation.shape.output.target === "smithy.api#Unit" ? "{}" : typeNameMapping.get(extractShapeName(operation.shape.output.target)) || extractShapeName(operation.shape.output.target)) : "{}";
      
      // Check if output is void
      if (!operation.shape.output || operation.shape.output.target === "smithy.api#Unit") {
        needsVoid = true;
      }
      
      // Generate error union type
      const errors = operation.shape.errors || [];
      const errorTypes = errors.map(error => typeNameMapping.get(extractShapeName(error.target)) || extractShapeName(error.target));
      errorTypes.push("CommonAwsError");
      
      const errorUnion = errorTypes.length > 1 ? errorTypes.join(" | ") : errorTypes[0];
      const effectOutputType = !operation.shape.output || operation.shape.output.target === "smithy.api#Unit" ? "{}" : outputType;

      code += `  ${methodName}(\n`;
      code += `    input: ${inputType},\n`;
      code += `  ): Effect.Effect<\n`;
      code += `    ${effectOutputType},\n`;
      code += `    ${errorUnion}\n`;
      code += `  >;\n`;
    }
    
    code += "}\n\n";

    // Add simplified service interface alias for easier use (only if different from consistent interface name)
    const simpleServiceName = serviceName === "dynamodb" ? "DynamoDB" : 
      serviceName.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
    if (
      simpleServiceName !== consistentInterfaceName &&
      !shapeNameCounts.has(simpleServiceName)
    ) {
      code += `export declare class ${simpleServiceName} extends ${consistentInterfaceName} {}\n\n`;
    }

    // Track generated type names to avoid duplicates
    const generatedTypes = new Set<string>();

    // Generate type aliases, enums, and interfaces
    for (const [shapeId, shape] of allShapes) {
      const shapeName = extractShapeName(shapeId);
      const finalTypeName = typeNameMapping.get(shapeName) || shapeName;
      
      // We allow service-specific "Unit" types; built-in smithy.api#Unit is handled at reference level.
      
      // Skip duplicates - only process if this is the first occurrence we marked
      if (shapeNameCounts.get(shapeName)! > 1 && processedShapes.get(shapeName) !== shapeId) {
        continue;
      }
      
      // Skip if already generated
      if (generatedTypes.has(finalTypeName)) {
        continue;
      }
      
      generatedTypes.add(finalTypeName);
      
      switch (shape.type) {
        case "structure":
          // Check if it's an exception/error
          if (shape.traits && "smithy.api#error" in shape.traits) {
            code += generateErrorInterface(finalTypeName, shape, createTypeGenOptions());
          } else {
            code += generateStructureInterface(finalTypeName, shape, createTypeGenOptions());
          }
          code += "\n";
          break;
        case "union":
          code += generateUnionType(finalTypeName, shape, createTypeGenOptions());
          code += "\n";
          break;
        case "enum":
          code += generateEnumType(finalTypeName, shape, createTypeGenOptions());
          code += "\n";
          break;
        case "list":
          code += generateListType(finalTypeName, shape, createTypeGenOptions());
          code += "\n";
          break;
        case "map":
          code += generateMapType(finalTypeName, shape, createTypeGenOptions());
          code += "\n";
          break;
        case "string":
        case "integer":
        case "long":
        case "float":
        case "double":
        case "boolean":
        case "timestamp":
        case "blob":
        case "document":
          // Generate type alias for simple types that might have traits/constraints
          const baseType = mapSmithyTypeToTypeScript(shape, shapeName, undefined, finalTypeName, createTypeGenOptions());
          const doc = getDocumentation(shape.traits);
          if (doc) {
            code += `${doc}\n`;
          }
          code += `export type ${finalTypeName} = ${baseType};\n\n`;
          break;
      }
    }

    // Generate operation namespaces for error types
    for (const operation of operations) {
      // Get input and output types
      const inputType = operation.shape.input ? 
        (operation.shape.input.target === "smithy.api#Unit" ? "{}" : typeNameMapping.get(extractShapeName(operation.shape.input.target)) || extractShapeName(operation.shape.input.target)) : "{}";
      const outputType = operation.shape.output ? 
        (operation.shape.output.target === "smithy.api#Unit" ? "{}" : typeNameMapping.get(extractShapeName(operation.shape.output.target)) || extractShapeName(operation.shape.output.target)) : "{}";
      
      // Generate error union type
      const errors = operation.shape.errors || [];
      const errorTypes = errors.map(error => typeNameMapping.get(extractShapeName(error.target)) || extractShapeName(error.target));
      errorTypes.push("CommonAwsError");
      
      const errorUnion = errorTypes.map(type => `    | ${type}`).join("\n");
      const effectOutputType = !operation.shape.output || operation.shape.output.target === "smithy.api#Unit" ? "{}" : outputType;

      code += `export declare namespace ${operation.name} {\n`;
      code += `  export type Input = ${inputType};\n`;
      code += `  export type Output = ${effectOutputType};\n`;
      code += `  export type Error =\n`;
      code += errorUnion;
      code += ";\n";
      code += "}\n\n";
    }

    // Store metadata for the service
    const metadata = {
      sdkId,
      arnNamespace,
      cloudFormationName,
      endpointPrefix,
      protocol,
      targetPrefix,
    };

    return { code, metadata };
  });

// Generate metadata file
const generateMetadataFile = (servicesMetadata: Record<string, any>) => {
  let code = `// Auto-generated service metadata
export const serviceMetadata = {\n`;

  Object.entries(servicesMetadata).forEach(([service, meta]) => {
    code += `  "${service}": {\n`;
    code += `    sdkId: "${meta.sdkId}",\n`;
    code += `    endpointPrefix: "${meta.endpointPrefix}",\n`;
    code += `    protocol: "${meta.protocol}",\n`;
    code += `    targetPrefix: "${meta.targetPrefix}",\n`;
    code += "  },\n";
  });

  code += "} as const;\n";
  return code;
};

// Generate index file that exports all services
const generateIndexFile = (serviceExports: Array<{ serviceName: string, sdkId: string }>) => {
  let code = `// Auto-generated service exports\n\n`;

  // Sort exports alphabetically by export name
  const sortedExports = serviceExports
    .map(({ serviceName, sdkId }) => ({
      serviceName,
      sdkId,
      exportName: sdkId.replace(/\s+/g, '')
    }))
    .sort((a, b) => a.exportName.localeCompare(b.exportName));

  // Export all services as namespaces using AWS's official naming
  sortedExports.forEach(({ serviceName, exportName }) => {
    code += `export * as ${exportName} from "./${serviceName}.ts";\n`;
  });

  return code;
};

// Generate AWS services type file
const generateAwsFile = (serviceExports: Array<{ serviceName: string, serviceInterfaceName: string, friendlyName: string }>) => {
  let code = `// Auto-generated AWS services re-exports\n\n`;

  // Sort services alphabetically by friendly name
  const sortedServices = serviceExports
    .sort((a, b) => a.friendlyName.localeCompare(b.friendlyName));

  // Re-export each service class directly using friendly names
  sortedServices.forEach(({ serviceName, serviceInterfaceName, friendlyName }) => {
    // Remove spaces and make it a valid TypeScript export name
    const exportName = friendlyName.replace(/\s+/g, '');
    
    // If the friendly name differs from the interface name, alias it
    if (exportName !== serviceInterfaceName) {
      code += `export { ${serviceInterfaceName} as ${exportName} } from "./services/${serviceName}.ts";\n`;
    } else {
      code += `export { ${serviceInterfaceName} } from "./services/${serviceName}.ts";\n`;
    }
  });

  return code;
};

// Main program
const program = Effect.gen(function* () {
  const fs = yield* FileSystem.FileSystem;
  const servicesMetadata: Record<string, any> = {};
  const serviceExports: Array<{ serviceName: string, sdkId: string }> = [];
  const awsServiceExports: Array<{ serviceName: string, serviceInterfaceName: string, friendlyName: string }> = [];

  // Read all manifest files from the manifests directory
  const manifestFiles = yield* fs.readDirectory("manifests");
  
  // Filter for .json files only
  const jsonFiles = manifestFiles.filter(file => file.endsWith('.json'));

  // Create services directory
  yield* fs.makeDirectory("src/services", { recursive: true });

  // Process each manifest file
  for (const manifestFile of jsonFiles) {
    const serviceName = manifestFile.replace('.json', '');
    const manifestPath = `manifests/${manifestFile}`;

    try {
      const manifestContent = yield* fs.readFileString(manifestPath);
      const manifest = JSON.parse(manifestContent) as Manifest;

      // Find service shape to get the sdkId and service interface name
      const serviceShapeEntry = Object.entries(manifest.shapes).find(([, shape]) => shape.type === "service");
      if (!serviceShapeEntry) {
        continue;
      }
      
      const [serviceShapeId, serviceShape] = serviceShapeEntry;
      const serviceShapeName = extractShapeName(serviceShapeId);
      const serviceTraits = serviceShape.traits || {};
      const serviceInfo = (serviceTraits["aws.api#service"] as any) || {};
      const sdkId = serviceInfo.sdkId || serviceName;

      // Generate the code
      const { code, metadata } = yield* generateServiceCode(serviceName, manifest);
      servicesMetadata[serviceName] = metadata;

      // Store export info with sdkId
      serviceExports.push({
        serviceName,
        sdkId
      });

      // Store AWS service interface info - use consistent naming based on sdkId
      let awsInterfaceName = sdkId.replace(/\s+/g, ''); // Remove spaces to make valid TS identifier
      
      // Check if the interface name conflicts with any existing type names in the manifest
      const conflictsWithExistingType = Object.entries(manifest.shapes).some(([shapeId, shape]) => {
        if (shapeId.includes('#')) {
          const shapeName = extractShapeName(shapeId);
          return shapeName === awsInterfaceName && shape.type !== 'service';
        }
        return false;
      });
      
      // If there's a conflict, append "Client" to the interface name
      if (conflictsWithExistingType) {
        awsInterfaceName = `${awsInterfaceName}Client`;
      }
      
      awsServiceExports.push({
        serviceName,
        serviceInterfaceName: awsInterfaceName,
        friendlyName: sdkId
      });

      // Write the generated file
      const outputPath = `src/services/${serviceName}.ts`;
      yield* fs.writeFileString(outputPath, code);
    } catch (error) {
      // Continue with other services instead of failing completely
    }
  }

  // Generate metadata file
  const metadataCode = generateMetadataFile(servicesMetadata);
  yield* fs.writeFileString("src/metadata.ts", metadataCode);

  // Generate index file
  const indexCode = generateIndexFile(serviceExports);
  yield* fs.writeFileString("src/services/index.ts", indexCode);

  // Generate AWS services type file
  const awsCode = generateAwsFile(awsServiceExports);
  yield* fs.writeFileString("src/aws.ts", awsCode);
});

// Run the program
const runnable = program.pipe(Effect.provide(NodeFileSystem.layer));

await Effect.runPromise(runnable)
