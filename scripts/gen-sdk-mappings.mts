import fs from "fs/promises";
import path from "path";

const modelsDir = "aws-models";

await parseErrors(path.join(modelsDir, "dynamodb.json"));

const specifications = await Promise.all(
  (await fs.readdir(modelsDir))
    .map((file) => path.join(modelsDir, file))
    .map(loadSmithyFile)
);

function resolveServiceName(name: string) {
  return serviceNameMappings[name] ?? name;
}

const serviceNameMappings: Record<string, string> = {
  Events: "EventBridge",
  Savingsplans: "SavingsPlans",
  AWSGroundStation: "GroundStation",
  MSK: "Kafka",
  ApiGateway: "APIGateway",
  AmazonMQ: "MQ",
  ApplicationDiscoveryService: "Discovery",
  Cassandra: "Keyspaces",
  CertificateManager: "ACM",
  Codeartifact: "CodeArtifact",
  Cognito: "CognitoIdentity",
  Config: "ConfigService",
  CostandUsageReportService: "CUR",
  ElasticLoadBalancing: "ELB",
  ElasticLoadBalancingV2: "ELBv2",
  EventSchemas: "Schemas",
  Forecast: "ForecastService",
  Forecastquery: "ForecastQueryService",
  IVSChat: "Ivschat",
  IoT: "Iot",
  IoT1Click: "IoT1ClickProjects",
  IoTDataPlane: "IotData",
  KinesisFirehose: "Firehose",
  KinesisVideoSignaling: "KinesisVideoSignalingChannels",
  LexRuntimeService: "LexRuntime",
  Logs: "CloudWatchLogs",
  NimbleStudio: "Nimble",
  RefactorSpaces: "MigrationHubRefactorSpaces",
  SESv2: "SESV2",
  Transcribe: "TranscribeService",
  SageMakerEdge: "SagemakerEdge",
  WAFv2: "WAFV2",
};

type ServiceMapping = [version: number, json?: number];

const serviceMappings: Record<string, ServiceMapping> = Object.fromEntries(
  (await Promise.all(specifications.map(parseServiceMappings))).filter(
    (a): a is Exclude<typeof a, undefined> => a !== undefined
  )
);

await fs.writeFile(
  path.join("src", "mappings.ts"),
  `export const mappings = ${JSON.stringify(serviceMappings)} as const;`
);

async function parseServiceMappings(
  serviceSpec: SmithyFile
): Promise<[string, ServiceMapping] | undefined> {
  const service = findService(serviceSpec);

  const type = service?.traits?.["aws.protocols#awsJson1_0"]
    ? 1
    : service?.traits?.["aws.protocols#awsJson1_1"]
    ? 1.1
    : undefined;

  if (service?.traits?.["aws.api#service"]?.cloudFormationName) {
    const xAmzTarget = service.fqn.slice(service.fqn.indexOf("#") + 1);
    return [
      resolveServiceName(service.traits["aws.api#service"].cloudFormationName),
      (type
        ? [xAmzTarget, service.version, type]
        : [xAmzTarget, service.version]) as any,
    ];
  } else {
    return undefined;
  }
}

async function parseErrors(serviceFile: string) {
  const serviceSpec = preProcessSmithyFile(
    JSON.parse((await fs.readFile(serviceFile)).toString("utf-8"))
  );

  const service = findService(serviceSpec);

  for (const [shapeFQN, shape] of Object.entries(serviceSpec.shapes)) {
    if (shape.type === "structure" && shape.traits?.["smithy.api#error"]) {
      delete shape.traits["smithy.api#documentation"];
      // console.log(shape);
    }
  }
}

async function loadSmithyFile(file: string): Promise<SmithyFile> {
  return preProcessSmithyFile(
    JSON.parse((await fs.readFile(file)).toString("utf-8"))
  );
}

// adds the FQN onto each Shape
function preProcessSmithyFile(file: SmithyFile) {
  Object.entries(file.shapes).forEach(([fqn, shape]) => (shape.fqn = fqn));
  return file;
}

function findService(file: SmithyFile): ServiceShape | undefined {
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

interface SmithyFile {
  shapes: {
    [fqn: string]: Shape;
  };
}

type Shape =
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

interface HasTraits {
  traits?: Traits;
}

interface BaseShape extends HasTraits {
  fqn: string;
}

interface Traits {
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
}

interface ServiceShape extends BaseShape {
  type: "service";
  version: string;
}

interface OperationShape extends BaseShape {
  type: "operation";
}

interface StringShape extends BaseShape {
  type: "string";
}

interface BlobShape extends BaseShape {
  type: "blob";
}

interface IntegerShape extends BaseShape {
  type: "integer";
}

interface LongShape extends BaseShape {
  type: "long";
}

interface DoubleShape extends BaseShape {
  type: "double";
}

interface BooleanShape extends BaseShape {
  type: "boolean";
}

interface TimestampShape extends BaseShape {
  type: "timestamp";
}

interface EnumShape extends BaseShape {
  type: "enum";
}

interface StructureShape extends BaseShape {
  type: "structure";
  members: {
    [memberName: string]: Member;
  };
}

interface Member extends HasTraits {
  target: string;
}

interface ListShape extends BaseShape {
  type: "list";
  member: {
    target: string;
  };
}
interface MapShape extends BaseShape {
  type: "map";
  key: {
    target: string;
  };
  value: {
    target: string;
  };
}

interface UnionShape extends BaseShape {
  type: "union";
  members: {
    [memberName: string]: Member;
  };
}
