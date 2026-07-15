import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListParametersInput {
  organization: string;
  database: string;
  branch: string;
}
export const ListParametersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/parameters",
  }),
) as unknown as Schema.Codec<ListParametersInput>;

// Output Schema
export type ListParametersOutput = ReadonlyArray<{
  id: string;
  name: string;
  display_name: string;
  namespace: "patroni" | "pgconf" | "pgbouncer";
  category: string;
  description: string;
  extension: boolean;
  immutable: boolean;
  parameter_type:
    | "array"
    | "boolean"
    | "bytes"
    | "float"
    | "integer"
    | "seconds"
    | "select"
    | "string"
    | "time";
  default_value: string;
  value: string;
  required: boolean;
  created_at: string;
  updated_at: string;
  restart: boolean;
  max: number;
  min: number;
  step: number;
  url: string;
  options: ReadonlyArray<string>;
  actor: { id: string; display_name: string; avatar_url: string };
}>;
export const ListParametersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    display_name: Schema.String,
    namespace: Schema.Literals(["patroni", "pgconf", "pgbouncer"]),
    category: Schema.String,
    description: Schema.String,
    extension: Schema.Boolean,
    immutable: Schema.Boolean,
    parameter_type: Schema.Literals([
      "array",
      "boolean",
      "bytes",
      "float",
      "integer",
      "seconds",
      "select",
      "string",
      "time",
    ]),
    default_value: Schema.String,
    value: Schema.String,
    required: Schema.Boolean,
    created_at: Schema.String,
    updated_at: Schema.String,
    restart: Schema.Boolean,
    max: Schema.Number,
    min: Schema.Number,
    step: Schema.Number,
    url: Schema.String,
    options: Schema.Array(Schema.String),
    actor: Schema.Struct({
      id: Schema.String,
      display_name: Schema.String,
      avatar_url: Schema.String,
    }),
  }),
) as unknown as Schema.Codec<ListParametersOutput>;

// The operation
/**
 * List cluster parameters
 *
 * Returns the parameters for a branch. To update the parameters, use the "update_branch_change_request" endpoint.
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 */
export const listParameters = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListParametersInput,
  outputSchema: ListParametersOutput,
  errors: [Forbidden, NotFound] as const,
}));
