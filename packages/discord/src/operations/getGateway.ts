import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGatewayInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/gateway" }));
export type GetGatewayInput = typeof GetGatewayInput.Type;

// Output Schema
export const GetGatewayOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.String,
});
export type GetGatewayOutput = typeof GetGatewayOutput.Type;

// The operation
export const getGateway = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetGatewayInput,
  outputSchema: GetGatewayOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
