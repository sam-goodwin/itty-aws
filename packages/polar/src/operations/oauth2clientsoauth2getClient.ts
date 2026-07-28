import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface Oauth2clientsoauth2getClientInput {
  client_id: string;
}
export const Oauth2clientsoauth2getClientInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/oauth2/register/{client_id}" }),
  ) as unknown as Schema.Codec<Oauth2clientsoauth2getClientInput>;

// Output Schema
export type Oauth2clientsoauth2getClientOutput = unknown;
export const Oauth2clientsoauth2getClientOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown as unknown as Schema.Codec<Oauth2clientsoauth2getClientOutput>;

// The operation
/**
 * Get Client
 *
 * Get an OAuth2 client by Client ID.
 */
export const oauth2clientsoauth2getClient =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: Oauth2clientsoauth2getClientInput,
    outputSchema: Oauth2clientsoauth2getClientOutput,
  }));
