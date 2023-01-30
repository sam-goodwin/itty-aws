import fs from "fs/promises";
import path from "path";
import { findService, loadSmithyFile, SmithyFile } from "./smithy.js";

const modelsDir = "aws-models";

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

const s3 = await loadSmithyFile(path.join(modelsDir, "s3.json"));

const s3Headers = Object.values(s3.shapes)
  .flatMap((shape) =>
    shape.type === "structure"
      ? Object.entries(shape.members).flatMap(([memberName, member]) =>
          member.traits?.["smithy.api#httpHeader"]
            ? [[memberName, member.traits["smithy.api#httpHeader"]] as const]
            : []
        )
      : []
  )
  .reduce((map: any, [k, v]) => {
    if (k in map && map[k] !== v) {
      console.log(k, v, map[k]);
    }
    map[k] = v;
    return map;
  }, {});
