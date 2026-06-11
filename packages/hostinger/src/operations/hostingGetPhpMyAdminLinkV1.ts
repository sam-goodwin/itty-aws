import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HostingGetPhpMyAdminLinkV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/hosting/v1/accounts/{username}/databases/{name}/phpmyadmin-link",
    }),
  );
export type HostingGetPhpMyAdminLinkV1Input =
  typeof HostingGetPhpMyAdminLinkV1Input.Type;

// Output Schema
export const HostingGetPhpMyAdminLinkV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    link: Schema.String,
  });
export type HostingGetPhpMyAdminLinkV1Output =
  typeof HostingGetPhpMyAdminLinkV1Output.Type;

// The operation
/**
 * Get phpMyAdmin link
 *
 * Returns a direct sign-on link to phpMyAdmin for the specified database.
 * Use this when a visual database interface is needed for SQL queries, imports, exports, or table management.
 * The database name must be the full name returned by the list databases endpoint.
 *
 * @param name - Full database name as returned by the list databases endpoint.
 */
export const hostingGetPhpMyAdminLinkV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HostingGetPhpMyAdminLinkV1Input,
    outputSchema: HostingGetPhpMyAdminLinkV1Output,
  }),
);
