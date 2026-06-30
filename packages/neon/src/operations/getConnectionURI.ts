import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface GetConnectionURIInput {
  project_id: string;
  branch_id?: string;
  endpoint_id?: string;
  database_name: string;
  role_name: string;
  pooled?: boolean;
}
export const GetConnectionURIInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  branch_id: Schema.optional(Schema.String),
  endpoint_id: Schema.optional(Schema.String),
  database_name: Schema.String,
  role_name: Schema.String,
  pooled: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "GET", path: "/projects/{project_id}/connection_uri" }),
) as unknown as Schema.Codec<GetConnectionURIInput>;

// Output Schema
export interface GetConnectionURIOutput {
  uri: string;
}
export const GetConnectionURIOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    uri: Schema.String,
  },
) as unknown as Schema.Codec<GetConnectionURIOutput>;

// The operation
/**
 * Retrieve connection URI
 *
 * Retrieves a connection URI for the specified database.
 * The URI uses the standard PostgreSQL connection string format. Set `pooled=true` to include the `-pooler` suffix for a connection pooler URI.
 *
 * @param project_id - The Neon project ID
 * @param branch_id - The branch ID. Defaults to your project's default `branch_id` if not specified.
 * @param endpoint_id - The endpoint ID. Defaults to the read-write `endpoint_id` associated with the `branch_id` if not specified.
 * @param database_name - The database name
 * @param role_name - The role name
 * @param pooled - Adds the `-pooler` option to the connection URI when set to `true`, creating a pooled connection URI.
 */
export const getConnectionURI = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetConnectionURIInput,
  outputSchema: GetConnectionURIOutput,
  errors: [NotFound] as const,
}));
