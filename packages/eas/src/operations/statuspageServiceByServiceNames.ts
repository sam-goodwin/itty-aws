import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query statuspageServiceByServiceNames($serviceNames: [StatuspageServiceName!]!) {\n  statuspageService {\n    byServiceNames(serviceNames: $serviceNames) {\n      description\n      id\n      incidents {\n        createdAt\n        id\n        impact\n        name\n        resolvedAt\n        shortlink\n        status\n        updatedAt\n        updates {\n          body\n          createdAt\n          id\n          status\n        }\n      }\n      name\n      status\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const StatuspageServiceByServiceNamesInput = Schema.Struct({
  serviceNames: Schema.Array(
    Schema.Literals([
      "EAS_BUILD",
      "EAS_SUBMIT",
      "EAS_UPDATE",
      "EAS_WORKFLOWS",
      "GITHUB_API_REQUESTS",
      "GITHUB_WEBHOOKS",
    ]),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "statuspageServiceByServiceNames",
    type: "query",
  }),
);
export type StatuspageServiceByServiceNamesInput =
  typeof StatuspageServiceByServiceNamesInput.Type;

// Output Schema (GraphQL selection set)
export const StatuspageServiceByServiceNamesOutput = Schema.Array(
  Schema.Struct({
    description: Schema.NullOr(Schema.String),
    id: Schema.String,
    incidents: Schema.Array(
      Schema.Struct({
        createdAt: Schema.String,
        id: Schema.String,
        impact: Schema.Literals([
          "CRITICAL",
          "MAINTENANCE",
          "MAJOR",
          "MINOR",
          "NONE",
        ]),
        name: Schema.String,
        resolvedAt: Schema.NullOr(Schema.String),
        shortlink: Schema.String,
        status: Schema.Literals([
          "COMPLETED",
          "IDENTIFIED",
          "INVESTIGATING",
          "IN_PROGRESS",
          "MONITORING",
          "RESOLVED",
          "SCHEDULED",
          "VERIFYING",
        ]),
        updatedAt: Schema.String,
        updates: Schema.Array(
          Schema.Struct({
            body: Schema.String,
            createdAt: Schema.String,
            id: Schema.String,
            status: Schema.Literals([
              "COMPLETED",
              "IDENTIFIED",
              "INVESTIGATING",
              "IN_PROGRESS",
              "MONITORING",
              "RESOLVED",
              "SCHEDULED",
              "VERIFYING",
            ]),
          }),
        ),
      }),
    ),
    name: Schema.Literals([
      "EAS_BUILD",
      "EAS_SUBMIT",
      "EAS_UPDATE",
      "EAS_WORKFLOWS",
      "GITHUB_API_REQUESTS",
      "GITHUB_WEBHOOKS",
    ]),
    status: Schema.Literals([
      "DEGRADED_PERFORMANCE",
      "MAJOR_OUTAGE",
      "OPERATIONAL",
      "PARTIAL_OUTAGE",
      "UNDER_MAINTENANCE",
    ]),
  }),
).pipe(T.ResponsePath("statuspageService.byServiceNames"));
export type StatuspageServiceByServiceNamesOutput =
  typeof StatuspageServiceByServiceNamesOutput.Type;

export const statuspageServiceByServiceNames = API.make(() => ({
  inputSchema: StatuspageServiceByServiceNamesInput,
  outputSchema: StatuspageServiceByServiceNamesOutput,
}));
