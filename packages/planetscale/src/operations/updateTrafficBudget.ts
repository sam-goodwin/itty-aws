import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateTrafficBudgetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.Literals(["enforce", "warn", "off"])),
    capacity: Schema.optional(Schema.Number),
    rate: Schema.optional(Schema.Number),
    burst: Schema.optional(Schema.Number),
    concurrency: Schema.optional(Schema.Number),
    warning_threshold: Schema.optional(Schema.Number),
    rules: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/traffic/budgets/{id}",
    }),
  );
export type UpdateTrafficBudgetInput = typeof UpdateTrafficBudgetInput.Type;

// Output Schema
export const UpdateTrafficBudgetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    mode: Schema.Literals(["enforce", "warn", "off"]),
    capacity: Schema.optional(Schema.NullOr(Schema.Number)),
    rate: Schema.optional(Schema.NullOr(Schema.Number)),
    burst: Schema.optional(Schema.NullOr(Schema.Number)),
    concurrency: Schema.optional(Schema.NullOr(Schema.Number)),
    warning_threshold: Schema.optional(Schema.NullOr(Schema.Number)),
    actor: Schema.Struct({
      id: Schema.String,
      display_name: Schema.String,
      avatar_url: Schema.String,
    }),
    rules: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        kind: Schema.Literals(["match"]),
        tags: Schema.Array(
          Schema.Struct({
            key_id: Schema.String,
            key: Schema.String,
            value: Schema.String,
            source: Schema.Literals(["sql", "system"]),
          }),
        ),
        fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
        keyspace: Schema.optional(Schema.NullOr(Schema.String)),
        actor: Schema.Struct({
          id: Schema.String,
          display_name: Schema.String,
          avatar_url: Schema.String,
        }),
        syntax_highlighted_sql: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type UpdateTrafficBudgetOutput = typeof UpdateTrafficBudgetOutput.Type;

// The operation
/**
 * Update a traffic budget
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param id - The ID of the traffic budget
 * @param name - Name of the traffic budget
 * @param mode - The mode of the traffic budget
 * @param capacity - The maximum capacity that can be banked, measured as a percentage of seconds of full server usage (0-6000). Unlimited when not set.
 * @param rate - The rate at which capacity refills, as a percentage of server resources (0-100). Unlimited when not set.
 * @param burst - The maximum capacity a single query can consume, measured as a percentage of seconds of full server usage (0-6000). Unlimited when not set.
 * @param concurrency - The percentage of available worker processes this policy can use (0-100). Unlimited when not set.
 * @param warning_threshold - A percentage of capacity, burst, or concurrency thresholds to emit warnings for enforced budgets (0-100).
 * @param rules - Array of traffic rules to apply to the budget
 */
export const updateTrafficBudget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateTrafficBudgetInput,
  outputSchema: UpdateTrafficBudgetOutput,
  errors: [Forbidden, NotFound] as const,
}));
