import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const HostingChangeDatabasePasswordV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    password: SensitiveString,
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/hosting/v1/accounts/{username}/databases/{name}/change-password",
    }),
  );
export type HostingChangeDatabasePasswordV1Input =
  typeof HostingChangeDatabasePasswordV1Input.Type;

// Output Schema
export const HostingChangeDatabasePasswordV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type HostingChangeDatabasePasswordV1Output =
  typeof HostingChangeDatabasePasswordV1Output.Type;

// The operation
/**
 * Change database password
 *
 * Changes the password for the specified database user.
 * The database name must be the full name returned by the list databases endpoint.
 * The password must also be updated in any website configuration that uses this database.
 *
 * @param name - Full database name as returned by the list databases endpoint.
 */
export const hostingChangeDatabasePasswordV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingChangeDatabasePasswordV1Input,
    outputSchema: HostingChangeDatabasePasswordV1Output,
    errors: [UnprocessableEntity] as const,
  }));
