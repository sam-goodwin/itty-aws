import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const OrganizationAccessTokensdeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/organization-access-tokens/{id}" }),
  );
export type OrganizationAccessTokensdeleteInput =
  typeof OrganizationAccessTokensdeleteInput.Type;

// Output Schema
export const OrganizationAccessTokensdeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OrganizationAccessTokensdeleteOutput =
  typeof OrganizationAccessTokensdeleteOutput.Type;

// The operation
/**
 * Delete
 *
 * **Scopes**: `organization_access_tokens:write`
 */
export const organizationAccessTokensdelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationAccessTokensdeleteInput,
    outputSchema: OrganizationAccessTokensdeleteOutput,
    errors: [UnprocessableEntity] as const,
  }));
