import fs from "fs/promises";

export async function loadSmithyFile(file: string): Promise<SmithyFile> {
  return preProcessSmithyFile(
    JSON.parse((await fs.readFile(file)).toString("utf-8"))
  );
}

// adds the FQN onto each Shape
export function preProcessSmithyFile(file: SmithyFile) {
  Object.entries(file.shapes).forEach(([fqn, shape]) => (shape.fqn = fqn));
  return file;
}

export function findService(file: SmithyFile): ServiceShape | undefined {
  const services = Object.values(file.shapes).filter(
    (shape): shape is ServiceShape => shape.type === "service"
  );
  if (services.length === 0) {
    return undefined;
  } else if (services.length > 1) {
    throw new Error(`could not resolve a single service for the file`);
  } else {
    return services[0]!;
  }
}

export interface SmithyFile {
  shapes: {
    [fqn: string]: Shape;
  };
}

export type Shape =
  | BlobShape
  | BooleanShape
  | DoubleShape
  | EnumShape
  | IntegerShape
  | ListShape
  | LongShape
  | MapShape
  | OperationShape
  | ServiceShape
  | StringShape
  | StructureShape
  | TimestampShape
  | UnionShape;

export interface HasTraits {
  traits?: Traits;
}

export interface BaseShape extends HasTraits {
  fqn: string;
}

export interface Traits {
  [traitFqn: string]: any;
  "smithy.api#error"?: "server" | "client";
  "smithy.api#documentation"?: string;
  "aws.api#service"?: {
    sdkId: string;
    arnNamespace: string;
    cloudFormationName: string;
    cloudTrailEventSource: string;
    endpointPrefix: string;
  };
  "aws.auth#sigv4"?: {
    name: string;
  };
  "smithy.api#title"?: string;
  "smithy.api#xmlNamespace"?: {
    uri: string;
  };
  "aws.protocols#awsJson1_0"?: {};
  "aws.protocols#awsJson1_1"?: {};
  "smithy.api#httpHeader"?: string;
}

export interface ServiceShape extends BaseShape {
  type: "service";
  version: string;
}

export interface OperationShape extends BaseShape {
  type: "operation";
}

export interface StringShape extends BaseShape {
  type: "string";
}

export interface BlobShape extends BaseShape {
  type: "blob";
}

export interface IntegerShape extends BaseShape {
  type: "integer";
}

export interface LongShape extends BaseShape {
  type: "long";
}

export interface DoubleShape extends BaseShape {
  type: "double";
}

export interface BooleanShape extends BaseShape {
  type: "boolean";
}

export interface TimestampShape extends BaseShape {
  type: "timestamp";
}

export interface EnumShape extends BaseShape {
  type: "enum";
}

export interface StructureShape extends BaseShape {
  type: "structure";
  members: {
    [memberName: string]: Member;
  };
}

export interface Member extends HasTraits {
  target: string;
}

export interface ListShape extends BaseShape {
  type: "list";
  member: {
    target: string;
  };
}
export interface MapShape extends BaseShape {
  type: "map";
  key: {
    target: string;
  };
  value: {
    target: string;
  };
}

export interface UnionShape extends BaseShape {
  type: "union";
  members: {
    [memberName: string]: Member;
  };
}
