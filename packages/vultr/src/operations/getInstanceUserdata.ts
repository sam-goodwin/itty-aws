import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetInstanceUserdataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/instances/{instanceId}/user-data" }));
export type GetInstanceUserdataInput = typeof GetInstanceUserdataInput.Type;

// Output Schema
export const GetInstanceUserdataOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_data: Schema.optional(
      Schema.Struct({
        data: Schema.optional(Schema.String),
      }),
    ),
  });
export type GetInstanceUserdataOutput = typeof GetInstanceUserdataOutput.Type;

// The operation
/**
 * Get Instance User Data
 *
 * Get the user-supplied, base64 encoded [user data](https://docs.vultr.com/manage-instance-user-data-with-the-vultr-metadata-api/) for an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const getInstanceUserdata = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInstanceUserdataInput,
  outputSchema: GetInstanceUserdataOutput,
}));
