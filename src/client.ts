import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { AwsClient } from "aws4fetch";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
import { XMLParser } from "fast-xml-parser";
import { ec2Parsers } from "./ec2-parsers.ts";
import {
  AccessDeniedException,
  RequestTimeout,
  ServiceUnavailable,
  ThrottlingException,
  UnauthorizedException,
  ValidationException,
  type AwsErrorMeta,
} from "./error.ts";
import { serviceMetadata } from "./metadata.ts";

// Helper function to extract simple error name from AWS namespaced error type
function extractErrorName(awsErrorType: string): string {
  // AWS returns errors like "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException"
  // We need to extract "ResourceNotFoundException"
  const parts = awsErrorType.split("#");
  return parts.length > 1 ? parts[1] : awsErrorType;
}

// Helper to parse response based on protocol
export function parseAwsResponse(
  responseText: string,
  protocol: string,
  operationName?: string,
): any {
  if (!responseText) return {};

  if (protocol.includes("Json") || protocol === "restJson1") {
    return JSON.parse(responseText);
  }

  // Handle EC2 Query protocol with specialized parsers
  if (protocol === "ec2Query" && operationName && operationName in ec2Parsers) {
    const parser = ec2Parsers[operationName as keyof typeof ec2Parsers];
    return parser(responseText);
  }

  // Handle other XML protocols (awsQuery, restXml)
  if (protocol === "awsQuery" || protocol === "restXml") {
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      textNodeName: "_text",
      removeNSPrefix: true,
      parseAttributeValue: true,
    });
    return parser.parse(responseText);
  }

  // Fallback to JSON for unknown protocols
  try {
    return JSON.parse(responseText);
  } catch {
    return { data: responseText };
  }
}

// Helper to parse AWS error response
function parseAwsError(
  responseText: string,
  protocol: string,
  operationName?: string,
): any {
  try {
    return parseAwsResponse(responseText, protocol, operationName);
  } catch {
    return { message: responseText };
  }
}

// Helper to create service-specific error dynamically
function createServiceError(
  errorName: string,
  errorMeta: AwsErrorMeta & { message?: string },
) {
  // Create a tagged error dynamically with the correct error name
  const ErrorClass = Data.TaggedError(errorName)<
    AwsErrorMeta & { message?: string }
  >;
  return new ErrorClass(errorMeta);
}

// Types
export type AwsRegion = string;

export interface AwsCredentials {
  readonly accessKeyId: string;
  readonly secretAccessKey: string;
  readonly sessionToken?: string;
}

// Client configuration options
export interface AWSClientConfig {
  readonly region?: string;
  readonly credentials?: AwsCredentials;
  readonly endpoint?: string;
}

// Base AWS service class that all services extend
export abstract class AWSServiceClient {
  protected readonly config: Required<AWSClientConfig>;
  constructor(config?: AWSClientConfig) {
    this.config = {
      region: config?.region ?? "us-east-1",
      credentials: config?.credentials ?? (undefined as any), // Will be resolved later
      endpoint: config?.endpoint ?? (undefined as any), // Will be resolved per service
    };
  }
}

// Promise-based AWS client creator
async function createAwsClient(
  service: string,
  config: Required<AWSClientConfig>,
) {
  // Use provided credentials or fall back to AWS credential chain
  const credentials = config.credentials
    ? config.credentials
    : await fromNodeProviderChain()();

  return new AwsClient({
    accessKeyId: credentials.accessKeyId,
    secretAccessKey: credentials.secretAccessKey,
    sessionToken: credentials.sessionToken,
    service: service,
    region: config.region,
  });
}

// Standalone service proxy creator function
export function createServiceProxy<T>(
  serviceName: string,
  config: AWSClientConfig = {},
): T {
  const resolvedConfig: Required<AWSClientConfig> = {
    region: config.region ?? "us-east-1",
    credentials: config.credentials ?? (undefined as any), // Will be resolved later
    endpoint: config.endpoint ?? (undefined as any), // Will be resolved per service
  };

  const normalizedServiceName = serviceName.toLowerCase();
  const metadata =
    serviceMetadata[normalizedServiceName as keyof typeof serviceMetadata];

  if (!metadata) {
    throw new Error(`Unknown service: ${serviceName}`);
  }

  const _client: Promise<AwsClient> = createAwsClient(
    normalizedServiceName,
    resolvedConfig,
  );

  return new Proxy(
    {},
    {
      get(_, methodName: string | symbol) {
        if (typeof methodName !== "string") {
          return undefined;
        }

        return (input: unknown) =>
          Effect.gen(function* () {
            const client = yield* Effect.promise(() => _client);

            // Convert camelCase method to PascalCase action
            const action =
              methodName.charAt(0).toUpperCase() + methodName.slice(1);

            // Determine Content-Type based on protocol
            let contentType = "application/json"; // default
            switch (metadata.protocol) {
              case "awsJson1_0":
                contentType = "application/x-amz-json-1.0";
                break;
              case "awsJson1_1":
                contentType = "application/x-amz-json-1.1";
                break;
              case "restJson1":
                contentType = "application/json";
                break;
              case "awsQuery":
              case "ec2Query":
                contentType = "application/x-www-form-urlencoded";
                break;
              case "restXml":
                contentType = "application/xml";
                break;
            }

            const headers: Record<string, string> = {
              "Content-Type": contentType,
              "X-Amz-Target": `${metadata.targetPrefix}.${action}`,
              "User-Agent": "itty-aws",
            };

            // Use custom endpoint or construct AWS endpoint
            const endpoint = resolvedConfig.endpoint
              ? resolvedConfig.endpoint
              : `https://${metadata.endpointPrefix}.${resolvedConfig.region}.amazonaws.com/`;

            // Prepare request body based on protocol
            let body: string;
            if (
              metadata.protocol === "ec2Query" ||
              metadata.protocol === "awsQuery"
            ) {
              // For Query protocols, format as form data
              const params = new URLSearchParams();
              params.append("Action", action);
              params.append("Version", "2016-11-15"); // EC2 API version

              // Flatten the input object into query parameters
              const flattenObject = (obj: any, prefix = "") => {
                for (const key in obj) {
                  if (Object.hasOwn(obj, key)) {
                    const value = obj[key];
                    const paramKey = prefix ? `${prefix}.${key}` : key;

                    if (value !== null && value !== undefined) {
                      if (Array.isArray(value)) {
                        value.forEach((item, index) => {
                          if (typeof item === "object") {
                            flattenObject(item, `${paramKey}.${index + 1}`);
                          } else {
                            params.append(
                              `${paramKey}.${index + 1}`,
                              String(item),
                            );
                          }
                        });
                      } else if (typeof value === "object") {
                        flattenObject(value, paramKey);
                      } else {
                        params.append(paramKey, String(value));
                      }
                    }
                  }
                }
              };

              if (input && typeof input === "object") {
                flattenObject(input);
              }

              body = params.toString();
            } else {
              // For JSON protocols, stringify the input
              body = JSON.stringify(input);
            }

            const response = yield* Effect.promise(() =>
              client.fetch(endpoint, {
                method: "POST",
                headers,
                body,
              }),
            ).pipe(Effect.timeout("30 seconds"));

            const responseText = yield* Effect.promise(() => response.text());
            const statusCode = response.status;

            if (statusCode >= 200 && statusCode < 300) {
              // Success
              const data = parseAwsResponse(
                responseText,
                metadata.protocol,
                action,
              );
              return data;
            } else {
              // Error handling
              const errorData = parseAwsError(
                responseText,
                metadata.protocol,
                action,
              );

              // Extract error info from different response formats
              let errorType = "UnknownError";
              let errorMessage = "Unknown error";

              if (
                metadata.protocol === "ec2Query" ||
                metadata.protocol === "awsQuery"
              ) {
                // EC2 XML error format: <Response><Errors><Error><Code>...</Code><Message>...</Message></Error></Errors></Response>
                const error =
                  errorData?.Response?.Errors?.Error || errorData?.Error;
                if (error) {
                  errorType = error.Code || "UnknownError";
                  errorMessage = error.Message || "Unknown error";
                }
              } else {
                // JSON error format
                errorType =
                  errorData.__type || errorData.code || "UnknownError";
                errorMessage =
                  errorData.message || errorData.Message || "Unknown error";
              }
              const requestId =
                response.headers.get("x-amzn-requestid") ||
                response.headers.get("x-amz-request-id");

              const errorMeta: AwsErrorMeta = {
                statusCode,
                requestId: requestId || undefined,
              };

              // Extract simple error name from AWS namespaced error type
              const simpleErrorName = extractErrorName(errorType);

              // Map to specific error types
              switch (simpleErrorName) {
                case "ThrottlingException":
                case "TooManyRequestsException":
                  yield* Effect.fail(new ThrottlingException(errorMeta));
                  break;
                case "ServiceUnavailable":
                  yield* Effect.fail(new ServiceUnavailable(errorMeta));
                  break;
                case "RequestTimeout":
                  yield* Effect.fail(new RequestTimeout(errorMeta));
                  break;
                case "AccessDeniedException":
                  yield* Effect.fail(new AccessDeniedException(errorMeta));
                  break;
                case "UnauthorizedException":
                  yield* Effect.fail(new UnauthorizedException(errorMeta));
                  break;
                case "ValidationException":
                  yield* Effect.fail(new ValidationException(errorMeta));
                  break;
                default:
                  // All service-specific errors - create dynamically with correct _tag
                  yield* Effect.fail(
                    createServiceError(simpleErrorName, {
                      ...errorMeta,
                      message: errorMessage,
                    }),
                  );
              }
            }
          });
      },
    },
  ) as T;
}
