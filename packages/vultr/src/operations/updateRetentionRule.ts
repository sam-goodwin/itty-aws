import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UpdateRetentionRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryId: Schema.String.pipe(T.PathParam()),
    retentionRuleId: Schema.Number.pipe(T.PathParam()),
    disabled: Schema.Boolean,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/registry/{registryId}/retention/rules/{retentionRuleId}",
    }),
  );
export type UpdateRetentionRuleInput = typeof UpdateRetentionRuleInput.Type;

// Output Schema
export const UpdateRetentionRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    disabled: Schema.optional(Schema.Boolean),
    action: Schema.optional(Schema.String),
    params: Schema.optional(
      Schema.Struct({
        additional_prop: Schema.optional(Schema.Number),
      }),
    ),
    scope_selectors: Schema.optional(
      Schema.Struct({
        repository: Schema.optional(
          Schema.Array(
            Schema.Struct({
              decoration: Schema.optional(
                Schema.Literals(["repoMatches", "repoExcludes"]),
              ),
              kind: Schema.optional(Schema.String),
              pattern: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tag_selectors: Schema.optional(
      Schema.Array(
        Schema.Struct({
          decoration: Schema.optional(Schema.Literals(["matches", "excludes"])),
          extras: Schema.optional(Schema.Unknown),
          kind: Schema.optional(Schema.String),
          pattern: Schema.optional(Schema.String),
        }),
      ),
    ),
    template: Schema.optional(Schema.String),
  });
export type UpdateRetentionRuleOutput = typeof UpdateRetentionRuleOutput.Type;

// The operation
/**
 * Update Retention Rule
 *
 * Update a Retention Rule in a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 * @param retentionRuleId - The [Retention Rule ID](#components/schemas/retention-rule/properties/id). Which can be found by [List Retention Rules](#operation/list-retention-rules).
 */
export const updateRetentionRule = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateRetentionRuleInput,
  outputSchema: UpdateRetentionRuleOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
