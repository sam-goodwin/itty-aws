import * as Schema from "effect/Schema";
import { ThirdPartyAuthSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const V1ListProjectTpaIntegrationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/projects/{ref}/config/auth/third-party-auth",
    }),
  );
export type V1ListProjectTpaIntegrationsInput =
  typeof V1ListProjectTpaIntegrationsInput.Type;

// Output Schema
export const V1ListProjectTpaIntegrationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => ThirdPartyAuthSchema),
  );
export type V1ListProjectTpaIntegrationsOutput =
  typeof V1ListProjectTpaIntegrationsOutput.Type;

// The operation
/**
 * Lists all third-party auth integrations
 *
 * @param ref - Project ref
 */
export const v1ListProjectTpaIntegrations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1ListProjectTpaIntegrationsInput,
    outputSchema: V1ListProjectTpaIntegrationsOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
