import * as Schema from "effect/Schema";
import {
  ComputeUnitSchema,
  EndpointPoolerModeSchema,
  EndpointSchema,
  EndpointSettingsDataSchema,
  EndpointTypeSchema,
  OperationSchema,
  ProvisionerSchema,
  SuspendTimeoutSecondsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, Conflict } from "../errors.ts";

// Input Schema
export const CreateProjectEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    endpoint: Schema.Struct({
      branch_id: Schema.String,
      region_id: Schema.optional(Schema.String),
      type: Schema.suspend(() => EndpointTypeSchema),
      settings: Schema.optional(
        Schema.suspend(() => EndpointSettingsDataSchema),
      ),
      autoscaling_limit_min_cu: Schema.optional(
        Schema.suspend(() => ComputeUnitSchema),
      ),
      autoscaling_limit_max_cu: Schema.optional(
        Schema.suspend(() => ComputeUnitSchema),
      ),
      provisioner: Schema.optional(Schema.suspend(() => ProvisionerSchema)),
      pooler_enabled: Schema.optional(Schema.Boolean),
      pooler_mode: Schema.optional(
        Schema.suspend(() => EndpointPoolerModeSchema),
      ),
      disabled: Schema.optional(Schema.Boolean),
      passwordless_access: Schema.optional(Schema.Boolean),
      suspend_timeout_seconds: Schema.optional(
        Schema.suspend(() => SuspendTimeoutSecondsSchema),
      ),
      name: Schema.optional(Schema.String),
    }),
  }).pipe(T.Http({ method: "POST", path: "/projects/{project_id}/endpoints" }));
export type CreateProjectEndpointInput = typeof CreateProjectEndpointInput.Type;

// Output Schema
export const CreateProjectEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoint: Schema.suspend(() => EndpointSchema),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type CreateProjectEndpointOutput =
  typeof CreateProjectEndpointOutput.Type;

// The operation
/**
 * Create compute endpoint
 *
 * Creates a compute endpoint for the specified branch.
 * An endpoint is a Neon compute instance.
 * There is a maximum of one read-write compute endpoint per branch.
 * If the specified branch already has a read-write compute endpoint, the operation fails.
 * A branch can have multiple read-only compute endpoints.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain `branch_id` by listing the project's branches.
 * A `branch_id` has a `br-` prefix.
 * For supported regions and `region_id` values, see [Regions](https://neon.tech/docs/introduction/regions/).
 * For more information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
 *
 * @param project_id - The Neon project ID
 */
export const createProjectEndpoint = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateProjectEndpointInput,
    outputSchema: CreateProjectEndpointOutput,
    errors: [NotFound, Conflict] as const,
  }),
);
