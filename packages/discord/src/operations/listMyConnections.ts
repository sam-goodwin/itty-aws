import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListMyConnectionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/users/@me/connections" }));
export type ListMyConnectionsInput = typeof ListMyConnectionsInput.Type;

// Output Schema
export const ListMyConnectionsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    id: Schema.String,
    name: Schema.NullOr(Schema.String),
    type: Schema.Unknown,
    friend_sync: Schema.Boolean,
    integrations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.String,
          type: Schema.Unknown,
          account: Schema.Struct({
            id: Schema.String,
            name: Schema.NullOr(Schema.String),
          }),
          guild: Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            icon: Schema.NullOr(Schema.String),
          }),
        }),
      ),
    ),
    show_activity: Schema.Boolean,
    two_way_link: Schema.Boolean,
    verified: Schema.Boolean,
    visibility: Schema.Unknown,
    revoked: Schema.optional(Schema.Boolean),
  }),
);
export type ListMyConnectionsOutput = typeof ListMyConnectionsOutput.Type;

// The operation
export const listMyConnections = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListMyConnectionsInput,
  outputSchema: ListMyConnectionsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
