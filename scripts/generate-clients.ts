import { FileSystem } from "@effect/platform";
import { NodeFileSystem } from "@effect/platform-node";
import { Console, Effect } from "effect";
import type { Manifest, Shape } from "./manifest.ts";

// Configuration flags
const INCLUDE_DOCUMENTATION = false; // Set to false to disable JSDoc comments

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

// Helper to convert to lowerCamelCase
const toLowerCamelCase = (name: string): string => {
  return name.charAt(0).toLowerCase() + name.slice(1);
};

// Helper to check if a field is required
const isRequired = (traits: Record<string, any> | undefined): boolean => {
  return !!(traits && "smithy.api#required" in traits);
};

// Helper to map Smithy types to TypeScript
const mapSmithyTypeToTypeScript = (shape: Shape, shapeName: string): string => {
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
      return "Uint8Array | string";
    default:
      return `_opaque_${shapeName}`;
  }
};

// Helper to generate type reference from shape target
const generateTypeReference = (target: string, manifest: Manifest): string => {
  // Handle special Smithy built-in types
  if (target === "smithy.api#Unit") {
    return "{}";
  }
  
  // Check if target exists in manifest shapes
  const targetShape = manifest.shapes[target];
  if (!targetShape) {
    // If shape doesn't exist, return opaque type
    return `_opaque_${extractShapeName(target)}`;
  }

  const shapeName = extractShapeName(target);
  
  switch (targetShape.type) {
    case "string":
    case "integer": 
    case "long":
    case "float":
    case "double":
    case "boolean":
    case "timestamp":
    case "blob":
      return mapSmithyTypeToTypeScript(targetShape, shapeName);
    case "list":
      if (targetShape.member) {
        const memberType = generateTypeReference(targetShape.member.target, manifest);
        return `Array<${memberType}>`;
      }
      return `Array<unknown>`;
    case "map":
      if (targetShape.key && targetShape.value) {
        const keyType = generateTypeReference(targetShape.key.target, manifest);
        const valueType = generateTypeReference(targetShape.value.target, manifest);
        return `Record<${keyType}, ${valueType}>`;
      }
      return `Record<string, unknown>`;
    case "structure":
    case "union":
    case "enum":
      return shapeName;
    default:
      return shapeName;
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

// Helper to generate error class (declare class extending Data.TaggedError)
const generateErrorInterface = (shapeName: string, shape: any, manifest: Manifest): string => {
  const doc = getDocumentation(shape.traits);
  let code = "";
  
  if (doc) {
    code += `${doc}\n`;
  }
  
  code += `export declare class ${shapeName} extends Data.TaggedError(\n`;
  code += `  "${shapeName}",\n`;
  code += `)<{\n`;
  
  // Add members if any
  if (shape.members) {
    for (const [memberName, member] of Object.entries(shape.members)) {
      const memberInfo = member as any;
      const fieldType = generateTypeReference(memberInfo.target, manifest);
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
const generateStructureInterface = (name: string, shape: Extract<Shape, { type: "structure" }>, manifest: Manifest): string => {
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
      const fieldType = generateTypeReference(member.target, manifest);
      code += `  ${memberName}${questionMark}: ${fieldType};\n`;
    }
  }
  code += `}`;
  
  return code;
};

// Helper to generate union type
const generateUnionType = (name: string, shape: Extract<Shape, { type: "union" }>, manifest: Manifest): string => {
  const doc = getDocumentation(shape.traits);
  let code = doc ? `${doc}\n` : "";
  
  if (shape.members) {
    const variants = Object.entries(shape.members).map(([memberName, member]) => {
      const memberType = generateTypeReference(member.target, manifest);
      return `{ ${memberName}: ${memberType} }`;
    });
    code += `export type ${name} = ${variants.join(" | ")};`;
  } else {
    code += `export type ${name} = never;`;
  }
  
  return code;
};

// Helper to generate enum type
const generateEnumType = (name: string, shape: Extract<Shape, { type: "enum" }>, manifest: Manifest): string => {
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
const generateListType = (name: string, shape: Extract<Shape, { type: "list" }>, manifest: Manifest): string => {
  const doc = getDocumentation(shape.traits);
  let code = doc ? `${doc}\n` : "";
  
  if (shape.member) {
    const memberType = generateTypeReference(shape.member.target, manifest);
    code += `export type ${name} = Array<${memberType}>;`;
  } else {
    code += `export type ${name} = Array<unknown>;`;
  }
  
  return code;
};

// Helper to generate map type
const generateMapType = (name: string, shape: Extract<Shape, { type: "map" }>, manifest: Manifest): string => {
  const doc = getDocumentation(shape.traits);
  let code = doc ? `${doc}\n` : "";
  
  if (shape.key && shape.value) {
    const keyType = generateTypeReference(shape.key.target, manifest);
    const valueType = generateTypeReference(shape.value.target, manifest);
    code += `export type ${name} = Record<${keyType}, ${valueType}>;`;
  } else {
    code += `export type ${name} = Record<string, unknown>;`;
  }
  
  return code;
};

const generateServiceCode = (serviceName: string, manifest: Manifest) =>
  Effect.gen(function* () {
    yield* Console.log(`📝 Generating code for ${serviceName}...`);

    let code = `import type { Effect, Data } from "effect";\n`;
    code += `import type { CommonAwsError } from "../client.ts";\n\n`;

    // Helper to determine if we need void type
    let needsVoid = false;

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
    
    const awsJson1_0 = (serviceTraits["aws.protocols#awsJson1_0"] as any) || {};
    const awsJson1_1 = (serviceTraits["aws.protocols#awsJson1_1"] as any) || {};
    const restJson1 = (serviceTraits["aws.protocols#restJson1"] as any) || {};
    
    const protocol = awsJson1_0.target || awsJson1_1.target || restJson1.name || "unknown";
    const targetPrefix = awsJson1_0.targetPrefix || awsJson1_1.targetPrefix || "";

    // Find operations (they are separate shapes with type "operation")
    const operations = Object.entries(manifest.shapes)
      .filter(([, shape]) => shape.type === "operation")
      .map(([shapeId, shape]) => ({
        name: extractShapeName(shapeId),
        shape: shape as any
      }));

    // Generate service interface first at the top
    code += `export interface ${serviceShapeName} {\n`;
    
    for (const operation of operations) {
      const methodName = toLowerCamelCase(operation.name);
      
      // Get input and output types
      const inputType = operation.shape.input ? extractShapeName(operation.shape.input.target) : "{}";
      const outputType = operation.shape.output ? extractShapeName(operation.shape.output.target) : "void";
      
      // Check if output is void and we need Unit
      if (outputType === "void" || !operation.shape.output) {
        needsVoid = true;
      }
      
      // Generate error union type
      const errors = operation.shape.errors || [];
      const errorTypes = errors.map(error => extractShapeName(error.target));
      errorTypes.push("CommonAwsError");
      
      const errorUnion = errorTypes.length > 1 ? errorTypes.join(" | ") : errorTypes[0];
      const effectOutputType = (outputType === "void" || outputType === "Unit" || !operation.shape.output) ? "{}" : outputType;

      code += `  ${methodName}(\n`;
      code += `    input: ${inputType},\n`;
      code += `  ): Effect.Effect<\n`;
      code += `    ${effectOutputType},\n`;
      code += `    ${errorUnion}\n`;
      code += `  >;\n`;
    }
    
    code += "}\n\n";

    // Add simplified service interface alias for easier use
    const simpleServiceName = serviceName === "dynamodb" ? "DynamoDB" : serviceName.charAt(0).toUpperCase() + serviceName.slice(1);
    code += `export type ${simpleServiceName} = ${serviceShapeName};\n\n`;

    // Sort shapes by type for better organization
    const allShapes = Object.entries(manifest.shapes)
      .filter(([shapeId]) => shapeId.includes(`#`))
      .sort(([a], [b]) => {
        const aName = extractShapeName(a);
        const bName = extractShapeName(b);
        return aName.localeCompare(bName);
      });

    // Generate type aliases, enums, and interfaces
    for (const [shapeId, shape] of allShapes) {
      const shapeName = extractShapeName(shapeId);
      
      switch (shape.type) {
        case "structure":
          // Check if it's an exception/error
          if (shape.traits && "smithy.api#error" in shape.traits) {
            code += generateErrorInterface(shapeName, shape, manifest);
          } else {
            code += generateStructureInterface(shapeName, shape, manifest);
          }
          code += "\n";
          break;
        case "union":
          code += generateUnionType(shapeName, shape, manifest);
          code += "\n";
          break;
        case "enum":
          code += generateEnumType(shapeName, shape, manifest);
          code += "\n";
          break;
        case "list":
          code += generateListType(shapeName, shape, manifest);
          code += "\n";
          break;
        case "map":
          code += generateMapType(shapeName, shape, manifest);
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
          // Generate type alias for simple types that might have traits/constraints
          // Skip generating aliases for types that conflict with global types
          if (shapeName === "Date" || shapeName === "String" || shapeName === "Number" || shapeName === "Boolean") {
            // Skip generating these to avoid conflicts with global types
            break;
          }
          const baseType = mapSmithyTypeToTypeScript(shape, shapeName);
          const doc = getDocumentation(shape.traits);
          if (doc) {
            code += `${doc}\n`;
          }
          code += `export type ${shapeName} = ${baseType};\n\n`;
          break;
      }
    }

    // Generate operation namespaces for error types
    for (const operation of operations) {
      // Get input and output types
      const inputType = operation.shape.input ? extractShapeName(operation.shape.input.target) : "{}";
      const outputType = operation.shape.output ? extractShapeName(operation.shape.output.target) : "void";
      
      // Generate error union type
      const errors = operation.shape.errors || [];
      const errorTypes = errors.map(error => extractShapeName(error.target));
      errorTypes.push("CommonAwsError");
      
      const errorUnion = errorTypes.map(type => `    | ${type}`).join("\n");
      const effectOutputType = (outputType === "void" || outputType === "Unit" || !operation.shape.output) ? "{}" : outputType;

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

// Main program
const program = Effect.gen(function* () {
  yield* Console.log("🚀 Starting AWS Client Generator...");

  const fs = yield* FileSystem.FileSystem;
  const servicesMetadata: Record<string, any> = {};

  // For now, just process DynamoDB
  const serviceName = "dynamodb";
  const manifestPath = `manifests/${serviceName}.json`;

  yield* Console.log(`📖 Reading manifest for ${serviceName}...`);

  const manifestContent = yield* fs.readFileString(manifestPath);
  const manifest = JSON.parse(manifestContent) as Manifest;

  // Generate the code
  const { code, metadata } = yield* generateServiceCode(serviceName, manifest);
  servicesMetadata[serviceName] = metadata;

  // Create services directory
  yield* fs.makeDirectory("src/services", { recursive: true });

  // Write the generated file
  const outputPath = `src/services/${serviceName}.ts`;
  yield* fs.writeFileString(outputPath, code);

  yield* Console.log(`✅ Generated ${outputPath}`);

  // Generate metadata file
  const metadataCode = generateMetadataFile(servicesMetadata);
  yield* fs.writeFileString("src/services/metadata.ts", metadataCode);
  yield* Console.log("✅ Generated src/services/metadata.ts");

  yield* Console.log("✨ Done!");
});

// Run the program
const runnable = program.pipe(Effect.provide(NodeFileSystem.layer));

Effect.runPromise(runnable).then(
  () => console.log("✅ Client generation complete"),
  (error) => console.error("❌ Error:", error),
);
