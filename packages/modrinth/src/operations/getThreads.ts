import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetThreadsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ids: Schema.String,
}).pipe(T.Http({ method: "GET", path: "/threads" }));
export type GetThreadsInput = typeof GetThreadsInput.Type;

// Output Schema
export const GetThreadsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    id: Schema.String,
    type: Schema.Literals(["project", "report", "direct_message"]),
    project_id: Schema.optional(Schema.NullOr(Schema.String)),
    report_id: Schema.optional(Schema.NullOr(Schema.String)),
    messages: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        author_id: Schema.optional(Schema.NullOr(Schema.String)),
        body: Schema.Struct({
          type: Schema.Literals([
            "status_change",
            "text",
            "thread_closure",
            "deleted",
          ]),
          body: Schema.optional(Schema.String),
          private: Schema.optional(Schema.Boolean),
          replying_to: Schema.optional(Schema.NullOr(Schema.String)),
          old_status: Schema.optional(
            Schema.Literals([
              "approved",
              "archived",
              "rejected",
              "draft",
              "unlisted",
              "processing",
              "withheld",
              "scheduled",
              "private",
              "unknown",
            ]),
          ),
          new_status: Schema.optional(
            Schema.Literals([
              "approved",
              "archived",
              "rejected",
              "draft",
              "unlisted",
              "processing",
              "withheld",
              "scheduled",
              "private",
              "unknown",
            ]),
          ),
        }),
        created: Schema.String,
      }),
    ),
    members: Schema.Array(
      Schema.Struct({
        username: Schema.String,
        name: Schema.optional(Schema.NullOr(Schema.String)),
        email: Schema.optional(Schema.NullOr(Schema.String)),
        bio: Schema.optional(Schema.String),
        payout_data: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              balance: Schema.optional(Schema.Number),
              payout_wallet: Schema.optional(
                Schema.Literals(["paypal", "venmo"]),
              ),
              payout_wallet_type: Schema.optional(
                Schema.Literals(["email", "phone", "user_handle"]),
              ),
              payout_address: Schema.optional(Schema.String),
            }),
          ),
        ),
        id: Schema.String,
        avatar_url: Schema.String,
        created: Schema.String,
        role: Schema.Literals(["admin", "moderator", "developer"]),
        badges: Schema.optional(Schema.Number),
        auth_providers: Schema.optional(
          Schema.NullOr(Schema.Array(Schema.String)),
        ),
        email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        has_password: Schema.optional(Schema.NullOr(Schema.Boolean)),
        has_totp: Schema.optional(Schema.NullOr(Schema.Boolean)),
        github_id: Schema.optional(Schema.NullOr(Schema.Number)),
      }),
    ),
  }),
);
export type GetThreadsOutput = typeof GetThreadsOutput.Type;

// The operation
/**
 * Get multiple threads
 *
 * @param ids - The IDs of the threads
 */
export const getThreads = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetThreadsInput,
  outputSchema: GetThreadsOutput,
  errors: [BadRequest, NotFound] as const,
}));
