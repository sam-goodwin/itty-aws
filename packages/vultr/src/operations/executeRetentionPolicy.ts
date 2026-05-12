import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ExecuteRetentionPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryId: Schema.String.pipe(T.PathParam()),
    dry_run: Schema.Boolean,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/registry/{registryId}/retention/executions",
    }),
  );
export type ExecuteRetentionPolicyInput =
  typeof ExecuteRetentionPolicyInput.Type;

// Output Schema
export const ExecuteRetentionPolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dry_run: Schema.optional(Schema.Boolean),
    end_time: Schema.optional(Schema.String),
    start_time: Schema.optional(Schema.String),
    trigger: Schema.optional(Schema.String),
  });
export type ExecuteRetentionPolicyOutput =
  typeof ExecuteRetentionPolicyOutput.Type;

// The operation
/**
 * Trigger Retention Policy Execution
 *
 * Manually initiate the execution of a Retention Policy in a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 */
export const executeRetentionPolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ExecuteRetentionPolicyInput,
    outputSchema: ExecuteRetentionPolicyOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
