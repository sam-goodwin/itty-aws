import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface CreateTrafficBudgetInput {
  organization: string;
  database: string;
  branch: string;
  name?: string;
  mode?: "enforce" | "warn" | "off";
  capacity?: number;
  rate?: number;
  burst?: number;
  concurrency?: number;
  warning_threshold?: number;
  rules?: ReadonlyArray<string>;
}
export const CreateTrafficBudgetInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
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
      method: "POST",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/traffic/budgets",
    }),
  ) as unknown as Schema.Codec<CreateTrafficBudgetInput>;

// Output Schema
export interface CreateTrafficBudgetOutput {
  id: string;
  name: string;
  mode: "enforce" | "warn" | "off";
  capacity?: number | null;
  rate?: number | null;
  burst?: number | null;
  concurrency?: number | null;
  warning_threshold?: number | null;
  actor: { id: string; display_name: string; avatar_url: string };
  rules: ReadonlyArray<{
    id: string;
    kind: "match" | "each";
    tags: ReadonlyArray<{
      key_id: string;
      key: string;
      value: string;
      source: "sql" | "system";
    }>;
    fingerprint?: string | null;
    keyspace?: string | null;
    actor: { id: string; display_name: string; avatar_url: string };
    syntax_highlighted_sql: string;
    created_at: string;
    updated_at: string;
  }>;
  created_at: string;
  updated_at: string;
}
export const CreateTrafficBudgetOutput =
  /*@__PURE__*/ Schema.Struct({
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
        kind: Schema.Literals(["match", "each"]),
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
  }) as unknown as Schema.Codec<CreateTrafficBudgetOutput>;

// The operation
/**
 * Create a traffic budget
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param name - Name of the traffic budget
 * @param mode - The mode of the traffic budget
 * @param capacity - The maximum capacity that can be banked, measured as a percentage of seconds of full server usage (0-6000). Unlimited when not set.
 * @param rate - The rate at which capacity refills, as a percentage of server resources (0-100). Unlimited when not set.
 * @param burst - The maximum capacity a single query can consume, measured as a percentage of seconds of full server usage (0-6000). Unlimited when not set.
 * @param concurrency - The percentage of available worker processes this policy can use (0-100). Unlimited when not set.
 * @param warning_threshold - A percentage of capacity, burst, or concurrency thresholds to emit warnings for enforced budgets (0-100).
 * @param rules - Array of traffic rules to apply to the budget
 */
export const createTrafficBudget = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateTrafficBudgetInput,
  outputSchema: CreateTrafficBudgetOutput,
  errors: [Forbidden, NotFound] as const,
}));
