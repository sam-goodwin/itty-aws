import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HostingRepairDatabaseV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/hosting/v1/accounts/{username}/databases/{name}/repair",
    }),
  );
export type HostingRepairDatabaseV1Input =
  typeof HostingRepairDatabaseV1Input.Type;

// Output Schema
export const HostingRepairDatabaseV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type HostingRepairDatabaseV1Output =
  typeof HostingRepairDatabaseV1Output.Type;

// The operation
/**
 * Repair database
 *
 * Repairs corrupted database tables asynchronously.
 * Use when database errors, crashes, or corruption are reported.
 * The database name must be the full name returned by the list databases endpoint.
 *
 * @param name - Full database name as returned by the list databases endpoint.
 */
export const hostingRepairDatabaseV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HostingRepairDatabaseV1Input,
    outputSchema: HostingRepairDatabaseV1Output,
  }),
);
