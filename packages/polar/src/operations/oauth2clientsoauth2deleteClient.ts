import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const Oauth2clientsoauth2deleteClientInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/oauth2/register/{client_id}" }),
  );
export type Oauth2clientsoauth2deleteClientInput =
  typeof Oauth2clientsoauth2deleteClientInput.Type;

// Output Schema
export const Oauth2clientsoauth2deleteClientOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type Oauth2clientsoauth2deleteClientOutput =
  typeof Oauth2clientsoauth2deleteClientOutput.Type;

// The operation
/**
 * Delete Client
 *
 * Delete an OAuth2 client.
 */
export const oauth2clientsoauth2deleteClient =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: Oauth2clientsoauth2deleteClientInput,
    outputSchema: Oauth2clientsoauth2deleteClientOutput,
    errors: [UnprocessableEntity] as const,
  }));
