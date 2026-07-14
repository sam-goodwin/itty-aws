import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetV1MeInput {}
export const GetV1MeInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/v1/me" }),
) as unknown as Schema.Codec<GetV1MeInput>;

// Output Schema
export interface GetV1MeOutput {
  data: {
    user: { id: string; email: string; name: string | null } | null;
    workspace: { id: string; name: string } | null;
    credential: {
      type: "oauth" | "service_token" | "management_token";
      id: string | null;
      name: string | null;
    };
  };
}
export const GetV1MeOutput = /*@__PURE__*/ Schema.Struct({
  data: Schema.Struct({
    user: Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
        email: Schema.String,
        name: Schema.NullOr(Schema.String),
      }),
    ),
    workspace: Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
      }),
    ),
    credential: Schema.Struct({
      type: Schema.Literals(["oauth", "service_token", "management_token"]),
      id: Schema.NullOr(Schema.String),
      name: Schema.NullOr(Schema.String),
    }),
  }),
}) as unknown as Schema.Codec<GetV1MeOutput>;

// The operation
/**
 * Get current authenticated principal
 *
 * Returns the user, workspace, and credential represented by the current token.
 */
export const getV1Me = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetV1MeInput,
  outputSchema: GetV1MeOutput,
}));
