import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetBareMetalUserdataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baremetalId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/bare-metals/{baremetalId}/user-data" }),
  );
export type GetBareMetalUserdataInput = typeof GetBareMetalUserdataInput.Type;

// Output Schema
export const GetBareMetalUserdataOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_data: Schema.optional(
      Schema.Struct({
        data: Schema.optional(Schema.String),
      }),
    ),
  });
export type GetBareMetalUserdataOutput = typeof GetBareMetalUserdataOutput.Type;

// The operation
/**
 * Get Bare Metal User Data
 *
 * Get the user-supplied, base64 encoded [user data](https://docs.vultr.com/manage-instance-user-data-with-the-vultr-metadata-api/) for a Bare Metal.
 *
 * @param baremetalId - The [Bare Metal id](#operation/list-baremetals).
 */
export const getBareMetalUserdata = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetBareMetalUserdataInput,
    outputSchema: GetBareMetalUserdataOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
