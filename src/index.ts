import { Sha256 } from "@aws-crypto/sha256-js";
import { fromEnv } from "@aws-sdk/credential-provider-env";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { SignatureV4 } from "@aws-sdk/signature-v4";
import type { AwsCredentialIdentity, Provider } from "@aws-sdk/types";
import type { SDK } from "./sdk.generated.js";

import { mappings } from "./mappings.js";
import {
  parseXml,
  XmlComment,
  XmlDocument,
  XmlElement,
  XmlText,
} from "@rgrove/parse-xml";

export interface ClientOptions {
  region?: string;
  endpoint?: string;
  credentials?: AwsCredentialIdentity | Provider<AwsCredentialIdentity>;
}

declare var fetch: typeof import("node-fetch").default;

var https: typeof import("https");
let httpAgent: import("https").Agent;

export const AWS: SDK = new Proxy({} as any, {
  get: (_, className: keyof SDK) => {
    return class {
      constructor(options?: ClientOptions) {
        const region = options?.region ?? process.env["AWS_REGION"];
        if (!region) {
          throw new Error(`Could not determine AWS_REGION`);
        }
        const endpoint =
          options?.endpoint ?? resolveEndpoint(className, region);
        // TODO: support other types of credential providers
        const credentials = options?.credentials ?? fromEnv();
        return new Proxy(
          {},
          {
            get: (_target, methodName: string) => {
              if (className === "S3") {
                return createS3Handler(methodName as any);
              }
              return createDefaultHandler(methodName);
            },
          }
        );

        function createDefaultHandler(methodName: string) {
          return async (input: any) => {
            const url = new URL(`https://${endpoint}`);

            const response = await sendRequest(url, {
              method: "POST",
              body: JSON.stringify(input),
              headers: {
                // host is required by AWS Signature V4: https://docs.aws.amazon.com/general/latest/gr/sigv4-create-canonical-request.html
                Host: url.host,
                "Accept-Encoding": "identity",
                "Content-Type": resolveContentType(className),
                "X-Amz-Target": resolveXAmzTarget(className, methodName),
                "User-Agent": "itty-aws",
              },
            });

            const isJson = getHeader(
              response.headers,
              "Content-Type"
            )?.startsWith("application/x-amz-json");

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
        }

        function createS3Handler(methodName: SDKMethods<"S3">) {
          return async function (input: SDKInputProperties<"S3">) {
            const bucket = input.Bucket;
            const key = input.Key;

            const headers = Object.fromEntries(
              (Object.keys(input) as (keyof typeof input)[]).flatMap((k) =>
                k in mappings ? [[s3HeaderMappings[k], input[k]]] : []
              )
            );

            const method =
              methodName === "createBucket"
                ? "PUT"
                : methodName.startsWith("get") || methodName.startsWith("list")
                ? "GET"
                : methodName.startsWith("put")
                ? "PUT"
                : methodName.startsWith("head")
                ? "HEAD"
                : methodName.startsWith("delete")
                ? "DELETE"
                : "POST";

            const url = new URL(
              `https://${bucket ? `${bucket}.` : ""}${endpoint}${
                typeof key === "string" ? `/${key}` : ""
              }${method === "GET" ? toQueryString() : ""}`
            );

            const response = await sendRequest(url, {
              headers: {
                ...headers,
                "Content-Type": "application/xml",
                "User-Agent": "itty-aws",
                "Accept-Encoding": "identity",
                Host: url.host,
              },
              method,
              body:
                methodName === "createBucket"
                  ? `<?xml version="1.0" encoding="UTF-8"?><CreateBucketConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><LocationConstraint>${region}</LocationConstraint></CreateBucketConfiguration>`
                  : methodName === "putObject"
                  ? typeof input.Body === "string"
                    ? input.Body
                    : Buffer.isBuffer(input.Body)
                    ? input.Body
                    : undefined
                  : undefined,
            });

            const responseText = await response.text();

            const parsedXml =
              responseText !== "" && methodName !== "getObject"
                ? parseXml(responseText)
                : undefined;
            if (response.status < 200 || response.status >= 300) {
              const errorXmlObject = (parsedXml?.children[0] as XmlElement)
                .children as XmlElement[];
              const errorCode = (
                errorXmlObject.find((child) => child.name === "Code")
                  ?.children[0] as XmlElement
              ).text;
              const errorMessage = (
                errorXmlObject.find((child) => child.name === "Message")
                  ?.children[0] as XmlElement
              ).text;

              if (errorCode) {
                throw new AWSError(errorMessage, errorCode);
              }
            } else {
              const c = (parsedXml?.children[0] as XmlDocument | undefined)
                ?.children;
              let output = c ? xmlToJson(c) : {} ?? {};
              if (methodName === "getObject") {
                output.Body = responseText;
              }
              if (typeof response.headers.forEach === "function") {
                response.headers.forEach((value, key) =>
                  reverseHeaders(key, value)
                );
              } else {
                Object.entries(response.headers).forEach(([key, value]) =>
                  reverseHeaders(key, value)
                );
              }
              output = Object.fromEntries(
                Object.entries(output).map(([k, v]) => [
                  k,
                  s3NumberFields.has(k) ? parseNumber(v as string) : v,
                ])
              );
              return output;

              function reverseHeaders(key: string, value: string) {
                const k = s3ReverseHeaderMappings[key];
                if (k) {
                  output[k] = value;
                }
              }
            }

            type Xml = XmlDocument | XmlElement | XmlComment | XmlText;
            function xmlToJson(
              xml: Xml[] | Xml | undefined,
              name?: string
            ): any {
              if (xml === undefined) {
                return [];
              } else if (xml instanceof XmlDocument) {
                return xml.document.children.flatMap((x) => xmlToJson(x, name));
              } else if (Array.isArray(xml)) {
                return xml
                  .flatMap((x) =>
                    x instanceof XmlElement ? [xmlToJson(x)] : []
                  )
                  .reduce(
                    (a, [k, v]) => ({
                      ...a,
                      [k]: s3ArrayFields.has(k)
                        ? k in a
                          ? [...a[k], v]
                          : [v]
                        : v,
                    }),
                    {}
                  );
              } else if (xml instanceof XmlElement) {
                return [
                  xml.name,
                  xml.children.length === 0
                    ? undefined
                    : xml.children.length === 1
                    ? xmlToJson(xml.children[0], xml.name)
                    : xmlToJson(xml.children, xml.name),
                ];
              } else if (xml instanceof XmlText) {
                if (name && s3NumberFields.has(name)) {
                  return parseNumber(xml.text);
                }
                if (xml.text.startsWith('"') && xml.text.startsWith('"')) {
                  // ETag is coming back quoted, wtf?
                  return xml.text.slice(1, xml.text.length - 1);
                }
                return xml.text === "true"
                  ? true
                  : xml.text === "false"
                  ? false
                  : xml.text;
              }
              return [];
            }

            function toQueryString() {
              const q = Object.entries(input)
                .flatMap(([k, v]) => {
                  if (k in s3HeaderMappings || k === "Bucket" || k === "Key") {
                    return [];
                  } else {
                    return [
                      [
                        `${
                          s3QueryStringMappings[
                            k as keyof typeof s3QueryStringMappings
                          ] ?? toKebabCase(k)
                        }=${v}`,
                      ],
                    ];
                  }
                })
                .join("&");
              return q ? `?${q}` : "";
            }
          };
        }

        async function sendRequest(
          url: URL,
          init: {
            method: string;
            body?: string | Buffer;
            headers: Record<string, string>;
          }
        ) {
          const request = new HttpRequest({
            hostname: url.hostname,
            path: url.pathname,
            protocol: url.protocol,
            ...init,
            headers: {
              ...init.headers,
              ...(typeof fetch === "undefined"
                ? {
                    // fetch automatically puts the Content-Length header, https does not
                    "Content-Length": init.body?.length.toString(10) ?? "0",
                  }
                : {}),
            },
          });

          const signer = new SignatureV4({
            credentials,
            service: resolveService(className),
            // TODO: Why ts thinks region may be undefined?
            region: region!,
            sha256: Sha256,
          });

          const signedRequest = await signer.sign(request);

          if (typeof fetch !== "undefined") {
            // we're probably
            return fetch(url.toString(), {
              headers: signedRequest.headers,
              body: signedRequest.body,
              method: signedRequest.method,
            });
          } else {
            const http = (https ??= await import("https"));
            const agent = (httpAgent ??= new http.Agent({
              keepAlive: true,
            }));

            return new Promise<HttpResponse>((resolve, reject) => {
              const request = http.request(
                url,
                {
                  headers: signedRequest.headers,
                  method: signedRequest.method,
                  agent,
                },
                (msg) => {
                  const chunks: Buffer[] | string[] = [];
                  let isBuffer: boolean;
                  msg.on("data", (chunk) => {
                    chunks.push(chunk);
                    if (Buffer.isBuffer(chunk)) {
                      isBuffer = true;
                    } else {
                      isBuffer = false;
                    }
                  });
                  msg.on("error", (err) => {
                    reject(err);
                  });
                  msg.on("close", () => {
                    const body = isBuffer
                      ? Buffer.concat(chunks as Buffer[])
                      : chunks.join("");
                    const text = () =>
                      typeof body === "string" ? body : body.toString("utf8");
                    resolve({
                      status: msg.statusCode!,
                      headers: msg.headers,
                      text: () => Promise.resolve(text()),
                      json: async () => JSON.parse(text()),
                    });
                  });
                }
              );

              if (signedRequest.body) {
                request.write(signedRequest.body);
              }
              request.end();
            });
          }
        }
      }
    };
  },
});

function parseNumber(num: string) {
  let i = parseInt(num, 10);
  if (isNaN(i)) {
    i = parseFloat(num);
  }
  if (isNaN(i)) {
    return num;
  }
  return i;
}

function getHeader(headers: any, key: string): string | undefined {
  if (typeof headers.get === "function") {
    return headers.get(key);
  } else {
    return headers[key] ?? headers[key.toLocaleLowerCase()];
  }
}

interface HttpResponse {
  status: number;
  headers: Record<string, string | string[] | undefined>;
  text(): Promise<string>;
  json(): Promise<any>;
}

const s3NumberFields = new Set([
  "ObjectSize",
  "Size",
  "MaxKeys",
  "KeyCount",
  "ContentLength",
]);

const s3ArrayFields = new Set([
  "Contents",
] satisfies (keyof SDKOutputProperties<"S3">)[]);

const s3QueryStringMappings: {
  [k in keyof SDKInputProperties<"S3">]?: string;
} = {
  PartNumber: "partNumber",
};

// todo: handle generally
const s3HeaderMappings: {
  [k in keyof SDKInputProperties<"S3">]?: string;
} = {
  BucketKeyEnabled: sse("bucket-key-enabled"),
  BypassGovernanceRetention: amz("bypass-governance-retention"),
  ChecksumCRC32: amz("checksum-crc32"),
  ChecksumCRC32C: amz("checksum-crc32c"),
  ChecksumSHA1: amz("checksum-sha1"),
  ChecksumSHA256: amz("checksum-sha256"),
  CopySource: copy("source"),
  CopySourceIfMatch: copy("source-if-match"),
  CopySourceIfModifiedSince: copy("source-if-modified-since"),
  CopySourceIfNoneMatch: copy("source-if-none-match"),
  CopySourceIfUnmodifiedSince: copy("source-if-unmodified-since"),
  ExpectedBucketOwner: amz("expected-bucket-owner"),
  Expires: "Expires",
  GrantFullControl: amz("grant-full-control"),
  GrantRead: amz("grant-read"),
  GrantReadACP: amz("grant-read-acp"),
  GrantWrite: amz("grant-write"),
  GrantWriteACP: amz("grant-write-acp"),
  MFA: amz("mfa"),
  ObjectLockLegalHoldStatus: amz("object-lock-legal-hold"),
  ObjectLockMode: amz("object-lock-mode"),
  ObjectLockRetainUntilDate: amz("object-lock-retain-until-date"),
  RequestPayer: amz("request-payer"),
  ServerSideEncryption: amz("sever-side-encryption"),
  SSECustomerAlgorithm: sse("customer-algorithm"),
  SSECustomerKey: sse("customer-key"),
  SSECustomerKeyMD5: sse("customer-key-MD5"),
  SSEKMSEncryptionContext: sse("context"),
  StorageClass: amz("storage-class"),
  Tagging: amz("tagging"),
  WebsiteRedirectLocation: amz("website-redirect-location"),
  ObjectLockEnabledForBucket: amz("bucket-object-lock-enabled"),
  ObjectOwnership: amz("object-ownership"),
  ContentDisposition: "Content-Disposition",
  ContentEncoding: "Content-Encoding",
  CacheControl: "Cache-Control",
  ContentLanguage: "Content-Language",
  ContentLength: "Content-Length",
  ContentType: "Content-Type",
  ACL: "x-amz-acl",
};

const s3ReverseHeaderMappings = Object.fromEntries(
  Object.entries(s3HeaderMappings).flatMap(([k, v]) => [
    [v, k],
    [v.toLocaleLowerCase(), k],
  ])
);

function toKebabCase(pascal: string) {
  return pascal.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()).slice(1);
}

function sse(s: string) {
  return `x-amz-server-side-encryption-${s}`;
}

function amz(s: string) {
  return `x-amz-${s}`;
}

function copy(s: string) {
  return `x-amz-copy-${s}`;
}

type SDKMethods<Service extends keyof SDK> = keyof InstanceType<SDK[Service]>;

type SDKInputProperties<Service extends keyof SDK> = UnionToIntersection<
  {
    [k in keyof InstanceType<SDK[Service]>]: InstanceType<
      SDK[Service]
    >[k] extends {
      (input: infer I): any;
    }
      ? I // Exclude<I, (...args: any[]) => any>
      : never;
  }[keyof InstanceType<SDK[Service]>]
>;

type SDKOutputProperties<Service extends keyof SDK> = UnionToIntersection<
  {
    [k in keyof InstanceType<SDK[Service]>]: InstanceType<
      SDK[Service]
    >[k] extends {
      (input: any): Promise<infer I>;
    }
      ? I // Exclude<I, (...args: any[]) => any>
      : never;
  }[keyof InstanceType<SDK[Service]>]
>;

type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (
  x: infer R
) => any
  ? R
  : never;

export class AWSError extends Error {
  readonly type?: string;
  constructor(error: any, type?: string) {
    super(
      typeof error?.message === "string" ? error.message : type ?? error.__type
    );
    this.type = type ?? error.__type;
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
