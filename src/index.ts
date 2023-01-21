import { Sha256 } from "@aws-crypto/sha256-js";
import { fromEnv } from "@aws-sdk/credential-provider-env";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import type { AwsCredentialIdentity, Provider } from "@aws-sdk/types";
import type { SDK } from "./sdk.generated.js";

import { mappings } from "./mappings.js";

export interface ClientOptions {
  endpoint?: string;
  credentials?: AwsCredentialIdentity | Provider<AwsCredentialIdentity>;
}

declare const fetch: typeof import("node-fetch").default;

export const AWS: SDK = new Proxy({} as any, {
  get: (_, className: keyof SDK) => {
    const region = process.env.AWS_REGION!;
    if (!region) {
      throw new Error(`Could not determine AWS_REGION`);
    }

    return class {
      constructor(options?: ClientOptions) {
        const endpoint =
          options?.endpoint ?? resolveEndpoint(className, region);
        // TODO: support other types of credential providers
        const credentials = options?.credentials ?? fromEnv();
        return new Proxy(
          {},
          {
            get: (_target, methodName: string) => {
              return async (input: any) => {
                const url = new URL(`https://${endpoint}`);

                // See: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.LowLevelAPI.html

                const request = new HttpRequest({
                  hostname: url.hostname,
                  path: url.pathname,
                  protocol: url.protocol,
                  method: "POST",
                  body: JSON.stringify(input),
                  headers: {
                    // host is required by AWS Signature V4: https://docs.aws.amazon.com/general/latest/gr/sigv4-create-canonical-request.html
                    host: url.host,
                    "Accept-Encoding": "identity",
                    "Content-Type": resolveContentType(className),
                    "X-Amz-Target": resolveXAmzTarget(className, methodName),
                    "User-Agent": "itty-aws",
                  },
                });

                const signer = new SignatureV4({
                  credentials,
                  service: resolveService(className),
                  region,
                  sha256: Sha256,
                });

                const signedRequest = await signer.sign(request);

                const response = await fetch(url.toString(), {
                  headers: signedRequest.headers,
                  body: signedRequest.body,
                  method: signedRequest.method,
                });

                const isJson = response.headers
                  .get("content-type")
                  ?.startsWith("application/x-amz-json");

                if (response.status === 200) {
                  return isJson ? response.json() : response.text();
                } else {
                  // see: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html
                  // for now we'll just throw the error as a json object
                  // TODO: throw something that is easy to branch on and check instanceof - this may increase bundle size though
                  throw isJson
                    ? new AWSError(await response.json())
                    : new Error(await response.text());
                }
              };
            },
          }
        );
      }
    };
  },
});

export class AWSError extends Error {
  readonly type?: string;
  constructor(error: any) {
    super(typeof error?.message === "string" ? error.message : error.__type);
    this.type = error.__type;
  }
}

function resolveContentType(className: keyof SDK) {
  const j = ((mappings as any)[className] as any)?.[2];
  return `application/x-amz-json-${j === 1 ? "1.0" : "1.1"}`;
}

function resolveXAmzTarget(className: keyof SDK, methodName: string) {
  const serviceName = (mappings as any)[className]?.[0];
  if (serviceName) {
    return `${serviceName}.${resolveAction(methodName)}`;
  } else {
    throw new Error(`unsupported service: ${className}`);
  }
}

const serviceMappings: Partial<Record<keyof SDK, string>> = {
  EventBridge: "events",
};

function resolveService(className: keyof SDK): string {
  return serviceMappings[className] ?? className.toLocaleLowerCase();
}

// see: https://docs.aws.amazon.com/general/latest/gr/ddb.html
function resolveEndpoint(serviceName: keyof SDK, region: string) {
  // TODO: this doesn't work in all cases ...

  return `${resolveService(
    serviceName
  ).toLocaleLowerCase()}.${region}.amazonaws.com`;
}

// see: https://stackoverflow.com/questions/36490756/aws-rest-api-without-sdk
// see: https://docs.aws.amazon.com/general/latest/gr/create-signed-request.html#create-canonical-request
function resolveAction(methodName: string) {
  return `${methodName.charAt(0).toUpperCase()}${methodName.substring(1)}`;
}
