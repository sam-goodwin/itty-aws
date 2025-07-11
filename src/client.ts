import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import { AwsClient } from "aws4fetch";
import { Data, Effect } from "effect";
import {
  AccessDeniedException,
  RequestTimeout,
  ServiceUnavailable,
  ThrottlingException,
  UnauthorizedException,
  UnknownError,
  ValidationException,
  type AwsErrorMeta,
  type CommonAwsError,
} from "./error.ts";
import type { DynamoDB } from "./services/dynamodb.ts";
import { serviceMetadata } from "./services/metadata.ts";

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

// Service client map
export interface ServiceClientMap {
  dynamodb: DynamoDB;
  // Add more services here as they're generated
}

// Main AWS client class
export class AWSClient {
  private readonly config: Required<AWSClientConfig>;

  constructor(config: AWSClientConfig = {}) {
    this.config = {
      region: config.region ?? "us-east-1",
      credentials: config.credentials ?? (undefined as any), // Will be resolved later
      endpoint: config.endpoint ?? (undefined as any), // Will be resolved per service
    };
  }

  // Effect-based AWS client creator
  private createAwsClient(service: string) {
    const config = this.config;
    return Effect.gen(function* () {
      // Use provided credentials or fall back to AWS credential chain
      const credentials = config.credentials
        ? config.credentials
        : yield* Effect.promise(() => fromNodeProviderChain()());

      return new AwsClient({
        accessKeyId: credentials.accessKeyId,
        secretAccessKey: credentials.secretAccessKey,
        sessionToken: credentials.sessionToken,
        service: service,
        region: config.region,
      });
    });
  }

  // Create service proxy for a specific service
  private createServiceProxy<T>(
    serviceName: string,
  ): Effect.Effect<T, CommonAwsError, never> {
    const config = this.config;
    const createAwsClient = this.createAwsClient.bind(this);

    return Effect.gen(function* () {
      const client = yield* createAwsClient(serviceName);
      const metadata =
        serviceMetadata[serviceName as keyof typeof serviceMetadata];

      if (!metadata) {
        yield* Effect.fail(
          new UnknownError({
            statusCode: 500,
            requestId: undefined,
            message: `Unknown service: ${serviceName}`,
          }),
        );
      }

      return new Proxy(
        {},
        {
          get(_, methodName: string | symbol) {
            if (typeof methodName !== "string") {
              return undefined;
            }

            return (input: unknown) =>
              Effect.gen(function* () {
                // Convert camelCase method to PascalCase action
                const action =
                  methodName.charAt(0).toUpperCase() + methodName.slice(1);

                const headers: Record<string, string> = {
                  "Content-Type": "application/x-amz-json-1.0",
                  "X-Amz-Target": `${metadata.targetPrefix}.${action}`,
                  "User-Agent": "itty-aws",
                };

                // Use custom endpoint or construct AWS endpoint
                const endpoint = config.endpoint
                  ? config.endpoint
                  : `https://${metadata.endpointPrefix}.${config.region}.amazonaws.com/`;

                const response = yield* Effect.promise(() =>
                  client.fetch(endpoint, {
                    method: "POST",
                    headers,
                    body: JSON.stringify(input),
                  }),
                ).pipe(Effect.timeout("30 seconds"));

                const responseText = yield* Effect.promise(() =>
                  response.text(),
                );
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
    });
  }

  // Service accessors using proxies
  get dynamodb(): DynamoDB {
    const createServiceProxy = this.createServiceProxy.bind(this);

    return new Proxy(
      {},
      {
        get: (_, methodName: string | symbol) => {
          if (typeof methodName !== "string") {
            return undefined;
          }

          // Ignore "then" so the proxy is NOT treated as a Promise
          if (methodName === "then") {
            return undefined;
          }

          return (input: unknown) =>
            createServiceProxy("dynamodb").pipe(
              Effect.flatMap((service: any) => service[methodName](input)),
            );
        },
      },
    ) as DynamoDB;
  }

  // Add more service getters here as they're generated
}

// Legacy function for backward compatibility (can be removed later)
export const aws = (region = "us-east-1"): ServiceClientMap => {
  const client = new AWSClient({ region });
  return {
    dynamodb: client.dynamodb,
    // Add more services here as they're generated
  };
};
