import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CreateRetentionRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryId: Schema.String.pipe(T.PathParam()),
    rule_type: Schema.String,
    count: Schema.optional(Schema.Number),
    repository_action: Schema.Literals(["matches", "excludes"]),
    repository_match: Schema.String,
    tag_action: Schema.Literals(["matches", "excludes"]),
    tag_match: Schema.String,
    untagged: Schema.Boolean,
  }).pipe(
    T.Http({ method: "POST", path: "/registry/{registryId}/retention/rules" }),
  );
export type CreateRetentionRuleInput = typeof CreateRetentionRuleInput.Type;

// Output Schema
export const CreateRetentionRuleOutput =
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
export type CreateRetentionRuleOutput = typeof CreateRetentionRuleOutput.Type;

// The operation
/**
 * Create Retention Rule
 *
 * Create a new Retention Rule for a Container Regsitry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 */
export const createRetentionRule = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateRetentionRuleInput,
  outputSchema: CreateRetentionRuleOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
