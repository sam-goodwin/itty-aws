import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HostingListAccountDatabasesV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
    domain: Schema.optional(Schema.String),
    is_assigned: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/hosting/v1/accounts/{username}/databases",
    }),
  );
export type HostingListAccountDatabasesV1Input =
  typeof HostingListAccountDatabasesV1Input.Type;

// Output Schema
export const HostingListAccountDatabasesV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          user: Schema.optional(Schema.String),
          domain: Schema.optional(Schema.NullOr(Schema.String)),
          permissions: Schema.optional(Schema.Unknown),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
          disk_usage_mb: Schema.optional(Schema.NullOr(Schema.Number)),
          max_size_mb: Schema.optional(Schema.Number),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        current_page: Schema.optional(Schema.Number),
        per_page: Schema.optional(Schema.Number),
        total: Schema.optional(Schema.Number),
      }),
    ),
  });
export type HostingListAccountDatabasesV1Output =
  typeof HostingListAccountDatabasesV1Output.Type;

// The operation
/**
 * List account databases
 *
 * Returns a paginated list of databases for the specified account.
 * Use the domain and is_assigned filters to find databases assigned to a specific domain.
 *
 * @param page - Page number
 * @param per_page - Number of items per page
 * @param domain - Filter by domain name (exact match)
 * @param is_assigned - When used with domain, return only databases assigned to that domain.
 * @param search - Search databases by name, user, or creation date.
 */
export const hostingListAccountDatabasesV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingListAccountDatabasesV1Input,
    outputSchema: HostingListAccountDatabasesV1Output,
  }));
