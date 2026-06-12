import * as Schema from "effect/Schema";
import {
  ComputeUnitSchema,
  EndpointPoolerModeSchema,
  EndpointSchema,
  EndpointSettingsDataSchema,
  OperationSchema,
  ProvisionerSchema,
  SuspendTimeoutSecondsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const UpdateProjectEndpointInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    endpoint_id: Schema.String.pipe(T.PathParam()),
    endpoint: Schema.Struct({
      branch_id: Schema.optional(Schema.String),
      autoscaling_limit_min_cu: Schema.optional(
        Schema.suspend(() => ComputeUnitSchema),
      ),
      autoscaling_limit_max_cu: Schema.optional(
        Schema.suspend(() => ComputeUnitSchema),
      ),
      provisioner: Schema.optional(Schema.suspend(() => ProvisionerSchema)),
      settings: Schema.optional(
        Schema.suspend(() => EndpointSettingsDataSchema),
      ),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/projects/{project_id}/endpoints/{endpoint_id}",
    }),
  );
export type UpdateProjectEndpointInput = typeof UpdateProjectEndpointInput.Type;

// Output Schema
export const UpdateProjectEndpointOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpoint: Schema.suspend(() => EndpointSchema),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  });
export type UpdateProjectEndpointOutput =
  typeof UpdateProjectEndpointOutput.Type;

// The operation
/**
 * Update compute endpoint
 *
 * Updates the specified compute endpoint.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 * You can obtain an `endpoint_id` and `branch_id` by listing your project's compute endpoints.
 * An `endpoint_id` has an `ep-` prefix. A `branch_id` has a `br-` prefix.
 * For more information about compute endpoints, see [Manage computes](https://neon.tech/docs/manage/endpoints/).
 * If the returned list of operations is not empty, the compute endpoint is not ready to use.
 * The client must wait for the last operation to finish before using the compute endpoint.
 * If the compute endpoint was idle before the update, it becomes active for a short period of time,
 * and the control plane suspends it again after the update.
 *
 * @param project_id - The Neon project ID
 * @param endpoint_id - The endpoint ID
 */
export const updateProjectEndpoint = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateProjectEndpointInput,
    outputSchema: UpdateProjectEndpointOutput,
    errors: [NotFound] as const,
  }),
);
