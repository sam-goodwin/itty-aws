import * as Schema from "effect/Schema";

export const MCPServerInstallationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    template_id: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.optional(Schema.String),
    icon_key: Schema.optional(Schema.String),
    display_name: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    auth_type: Schema.optional(Schema.suspend(() => MCPAuthTypeEnumSchema)),
    is_enabled: Schema.optional(Schema.Boolean),
    needs_reauth: Schema.optional(Schema.Boolean),
    pending_oauth: Schema.optional(Schema.Boolean),
    proxy_url: Schema.optional(Schema.String),
    tool_count: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const MCPAuthTypeEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["api_key", "oauth"]);
export const MCPServerInstallationToolSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    tool_name: Schema.optional(Schema.String),
    display_name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    input_schema: Schema.optional(Schema.Unknown),
    approval_state: Schema.optional(
      Schema.suspend(() => MCPServerInstallationToolApprovalStateEnumSchema),
    ),
    last_seen_at: Schema.optional(Schema.String),
    removed_at: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const MCPServerInstallationToolApprovalStateEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "approved",
    "needs_approval",
    "do_not_use",
  ]);
export const ToolApprovalUpdateApprovalStateEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "approved",
    "needs_approval",
    "do_not_use",
  ]);
export const InstallCustomAuthTypeEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["api_key", "oauth"]);
export const MCPServerTemplateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    docs_url: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    auth_type: Schema.optional(Schema.suspend(() => MCPAuthTypeEnumSchema)),
    icon_key: Schema.optional(Schema.String),
    category: Schema.optional(Schema.suspend(() => CategoryEnumSchema)),
  });
export const CategoryEnumSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "business",
  "data",
  "design",
  "dev",
  "infra",
  "productivity",
]);
