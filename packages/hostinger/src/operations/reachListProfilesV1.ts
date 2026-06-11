import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ReachListProfilesV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/reach/v1/profiles" }),
  );
export type ReachListProfilesV1Input = typeof ReachListProfilesV1Input.Type;

// Output Schema
export const ReachListProfilesV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      limits: Schema.optional(
        Schema.Struct({
          ai_messages_limit: Schema.optional(Schema.Number),
          subscribers_limit: Schema.optional(Schema.Number),
          emails_monthly_limit: Schema.optional(Schema.Number),
          ai_messages_additional: Schema.optional(Schema.Number),
        }),
      ),
      is_trial: Schema.optional(Schema.Boolean),
      expires_at: Schema.optional(Schema.String),
      resource_id: Schema.optional(Schema.Number),
      status: Schema.optional(Schema.String),
      profiles: Schema.optional(
        Schema.Array(
          Schema.Struct({
            uuid: Schema.optional(Schema.String),
            domain: Schema.optional(Schema.String),
            created_at: Schema.optional(Schema.String),
            updated_at: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  );
export type ReachListProfilesV1Output = typeof ReachListProfilesV1Output.Type;

// The operation
/**
 * List Profiles
 *
 * This endpoint returns all profiles available to the client, including their basic information.
 */
export const reachListProfilesV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReachListProfilesV1Input,
  outputSchema: ReachListProfilesV1Output,
}));
