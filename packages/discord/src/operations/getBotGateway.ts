import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetBotGatewayInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/gateway/bot" }));
export type GetBotGatewayInput = typeof GetBotGatewayInput.Type;

// Output Schema
export const GetBotGatewayOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.String,
  session_start_limit: Schema.Struct({
    max_concurrency: Schema.Number,
    remaining: Schema.Number,
    reset_after: Schema.Number,
    total: Schema.Number,
  }),
  shards: Schema.Number,
});
export type GetBotGatewayOutput = typeof GetBotGatewayOutput.Type;

// The operation
export const getBotGateway = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBotGatewayInput,
  outputSchema: GetBotGatewayOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
