import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface Oauth2clientsoauth2deleteClientInput {
  client_id: string;
}
export const Oauth2clientsoauth2deleteClientInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/oauth2/register/{client_id}" }),
  ) as unknown as Schema.Codec<Oauth2clientsoauth2deleteClientInput>;

// Output Schema
export type Oauth2clientsoauth2deleteClientOutput = unknown;
export const Oauth2clientsoauth2deleteClientOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<Oauth2clientsoauth2deleteClientOutput>;

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
  }));
