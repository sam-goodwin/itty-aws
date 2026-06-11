import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation observabilityDashboardCreate($input: ObservabilityDashboardCreateInput!) {\n  observabilityDashboardCreate(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const CreateObservabilityDashboardInput = Schema.Struct({
  input: Schema.Struct({
    environmentId: Schema.String,
    items: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            dashboardItem: Schema.Struct({
              config: Schema.Struct({
                logsFilter: Schema.optional(Schema.NullOr(Schema.String)),
                measurements: Schema.optional(
                  Schema.NullOr(
                    Schema.Array(
                      Schema.Literals([
                        "BACKUP_USAGE_GB",
                        "CPU_LIMIT",
                        "CPU_USAGE",
                        "CPU_USAGE_2",
                        "DISK_USAGE_GB",
                        "EPHEMERAL_DISK_USAGE_GB",
                        "MEASUREMENT_UNSPECIFIED",
                        "MEMORY_LIMIT_GB",
                        "MEMORY_USAGE_GB",
                        "NETWORK_RX_GB",
                        "NETWORK_TX_GB",
                        "UNRECOGNIZED",
                      ]),
                    ),
                  ),
                ),
                projectUsageProperties: Schema.optional(
                  Schema.NullOr(
                    Schema.Array(
                      Schema.Literals([
                        "BACKUP_USAGE",
                        "CPU_USAGE",
                        "CURRENT_USAGE",
                        "DISK_USAGE",
                        "ESTIMATED_USAGE",
                        "MEMORY_USAGE",
                        "NETWORK_USAGE",
                      ]),
                    ),
                  ),
                ),
                resourceIds: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.String)),
                ),
              }),
              description: Schema.optional(Schema.NullOr(Schema.String)),
              id: Schema.String,
              name: Schema.String,
              type: Schema.Literals([
                "PROJECT_USAGE_ITEM",
                "SERVICE_LOGS_ITEM",
                "SERVICE_METRICS_ITEM",
                "VOLUME_METRICS_ITEM",
              ]),
            }),
            displayConfig: Schema.Unknown,
            id: Schema.String,
          }),
        ),
      ),
    ),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "observabilityDashboardCreate",
    type: "mutation",
  }),
);
export type CreateObservabilityDashboardInput =
  typeof CreateObservabilityDashboardInput.Type;

// Output Schema (GraphQL selection set)
export const CreateObservabilityDashboardOutput = Schema.Boolean.pipe(
  T.ResponsePath("observabilityDashboardCreate"),
);
export type CreateObservabilityDashboardOutput =
  typeof CreateObservabilityDashboardOutput.Type;

/**
 * Create an observability dashboard
 */
export const createObservabilityDashboard = API.make(() => ({
  inputSchema: CreateObservabilityDashboardInput,
  outputSchema: CreateObservabilityDashboardOutput,
}));
