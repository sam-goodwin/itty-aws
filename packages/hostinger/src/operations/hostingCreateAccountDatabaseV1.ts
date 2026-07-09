import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const HostingCreateAccountDatabaseV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    user: Schema.String,
    password: SensitiveString,
    website_domain: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/hosting/v1/accounts/{username}/databases",
    }),
  );
export type HostingCreateAccountDatabaseV1Input =
  typeof HostingCreateAccountDatabaseV1Input.Type;

// Output Schema
export const HostingCreateAccountDatabaseV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type HostingCreateAccountDatabaseV1Output =
  typeof HostingCreateAccountDatabaseV1Output.Type;

// The operation
/**
 * Create account database
 *
 * Creates a database with a database user and password for the specified account.
 * The database name and user are automatically prefixed with the account username when needed.
 */
export const hostingCreateAccountDatabaseV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingCreateAccountDatabaseV1Input,
    outputSchema: HostingCreateAccountDatabaseV1Output,
    errors: [UnprocessableEntity] as const,
  }));
