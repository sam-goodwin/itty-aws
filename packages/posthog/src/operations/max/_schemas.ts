import * as Schema from "effect/Schema";

export const ConversationMinimalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["idle", "in_progress", "canceling"]),
    ),
    title: Schema.optional(Schema.NullOr(Schema.String)),
    user: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.NullOr(Schema.String)),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    type: Schema.optional(
      Schema.Literals(["assistant", "tool_call", "deep_research", "slack"]),
    ),
    is_internal: Schema.optional(Schema.NullOr(Schema.Boolean)),
    slack_thread_key: Schema.optional(Schema.NullOr(Schema.String)),
    slack_workspace_domain: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const AgentModeEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "product_analytics",
  "sql",
  "session_replay",
  "error_tracking",
  "plan",
  "execution",
  "survey",
  "research",
  "flags",
  "llm_analytics",
  "sandbox",
]);
