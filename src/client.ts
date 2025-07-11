import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { AwsClient } from "aws4fetch";
import * as Data from "effect/Data";
import * as Effect from "effect/Effect";
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
import type { DynamoDB } from "./services/dynamodb.ts";

// Helper function to extract simple error name from AWS namespaced error type
function extractErrorName(awsErrorType: string): string {
  // AWS returns errors like "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException"
  // We need to extract "ResourceNotFoundException"
  const parts = awsErrorType.split("#");
  return parts.length > 1 ? parts[1] : awsErrorType;
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

// Service client map
export interface ServiceClientMap {
  dynamodb: DynamoDB;
  // Add more services here as they're generated
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

            const headers: Record<string, string> = {
              "Content-Type": "application/x-amz-json-1.0",
              "X-Amz-Target": `${metadata.targetPrefix}.${action}`,
              "User-Agent": "itty-aws",
            };

            // Use custom endpoint or construct AWS endpoint
            const endpoint = resolvedConfig.endpoint
              ? resolvedConfig.endpoint
              : `https://${metadata.endpointPrefix}.${resolvedConfig.region}.amazonaws.com/`;

            const response = yield* Effect.promise(() =>
              client.fetch(endpoint, {
                method: "POST",
                headers,
                body: JSON.stringify(input),
              }),
            ).pipe(Effect.timeout("30 seconds"));

            const responseText = yield* Effect.promise(() => response.text());
            const statusCode = response.status;

            if (statusCode >= 200 && statusCode < 300) {
              // Success
              const data = responseText ? JSON.parse(responseText) : {};
              return data;
            } else {
              // Error handling
              let errorData;
              try {
                errorData = JSON.parse(responseText);
              } catch {
                errorData = { message: responseText };
              }

              const errorType =
                errorData.__type || errorData.code || "UnknownError";
              const errorMessage =
                errorData.message || errorData.Message || "Unknown error";
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
