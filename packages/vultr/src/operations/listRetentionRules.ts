import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ListRetentionRulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/registry/{registryId}/retention/rules" }),
  );
export type ListRetentionRulesInput = typeof ListRetentionRulesInput.Type;

// Output Schema
export const ListRetentionRulesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retention_rules: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
                decoration: Schema.optional(
                  Schema.Literals(["matches", "excludes"]),
                ),
                extras: Schema.optional(Schema.Unknown),
                kind: Schema.optional(Schema.String),
                pattern: Schema.optional(Schema.String),
              }),
            ),
          ),
          template: Schema.optional(Schema.String),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
        links: Schema.optional(
          Schema.Struct({
            next: Schema.optional(Schema.String),
            prev: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  });
export type ListRetentionRulesOutput = typeof ListRetentionRulesOutput.Type;

// The operation
/**
 * List Retention Rules
 *
 * List all Retention Rules for a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 */
export const listRetentionRules = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListRetentionRulesInput,
  outputSchema: ListRetentionRulesOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
