import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteRetentionRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryId: Schema.String.pipe(T.PathParam()),
    retentionRuleId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/registry/{registryId}/retention/rules/{retentionRuleId}",
    }),
  );
export type DeleteRetentionRuleInput = typeof DeleteRetentionRuleInput.Type;

// Output Schema
export const DeleteRetentionRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteRetentionRuleOutput = typeof DeleteRetentionRuleOutput.Type;

// The operation
/**
 * Delete Retention Rule
 *
 * Deletes a Retention Rule from a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 * @param retentionRuleId - The [Retention Rule ID](#components/schemas/retention-rule/properties/id). Which can be found by [List Retention Rules](#operation/list-retention-rules).
 */
export const deleteRetentionRule = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteRetentionRuleInput,
  outputSchema: DeleteRetentionRuleOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
