import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HostingDeleteAccountDatabaseV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/hosting/v1/accounts/{username}/databases/{name}",
    }),
  );
export type HostingDeleteAccountDatabaseV1Input =
  typeof HostingDeleteAccountDatabaseV1Input.Type;

// Output Schema
export const HostingDeleteAccountDatabaseV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type HostingDeleteAccountDatabaseV1Output =
  typeof HostingDeleteAccountDatabaseV1Output.Type;

// The operation
/**
 * Delete account database
 *
 * Permanently deletes a database and its remote connections.
 * The database name must be the full name returned by the list databases endpoint.
 *
 * @param name - Full database name as returned by the list databases endpoint.
 */
export const hostingDeleteAccountDatabaseV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingDeleteAccountDatabaseV1Input,
    outputSchema: HostingDeleteAccountDatabaseV1Output,
  }));
