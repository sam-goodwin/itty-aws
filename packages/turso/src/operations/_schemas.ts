import * as Schema from "effect/Schema";

export const DatabaseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  Name: Schema.optional(Schema.String),
  DbId: Schema.optional(Schema.String),
  Hostname: Schema.optional(Schema.String),
  block_reads: Schema.optional(Schema.Boolean),
  block_writes: Schema.optional(Schema.Boolean),
  regions: Schema.optional(Schema.Array(Schema.String)),
  primaryRegion: Schema.optional(Schema.String),
  group: Schema.optional(Schema.String),
  delete_protection: Schema.optional(Schema.Boolean),
  parent: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        branched_at: Schema.optional(Schema.String),
      }),
    ),
  ),
});
export const CreateDatabaseOutputSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    DbId: Schema.optional(Schema.suspend(() => DbIdSchema)),
    Hostname: Schema.optional(Schema.suspend(() => HostnameSchema)),
    Name: Schema.optional(Schema.suspend(() => NameSchema)),
  });
export const DbIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const HostnameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const NameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const InstanceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uuid: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Literals(["primary", "replica"])),
  region: Schema.optional(Schema.String),
  hostname: Schema.optional(Schema.String),
});
export const DatabaseUsageOutputSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.optional(Schema.suspend(() => DbIdSchema)),
    instances: Schema.optional(
      Schema.Array(
        Schema.Struct({
          uuid: Schema.optional(Schema.String),
          usage: Schema.optional(
            Schema.suspend(() => DatabaseUsageObjectSchema),
          ),
        }),
      ),
    ),
    total: Schema.optional(Schema.suspend(() => DatabaseUsageObjectSchema)),
  });
export const DatabaseUsageObjectSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rows_read: Schema.optional(Schema.Number),
    rows_written: Schema.optional(Schema.Number),
    storage_bytes: Schema.optional(Schema.Number),
    bytes_synced: Schema.optional(Schema.Number),
  });
export const DatabaseStatsOutputSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    query: Schema.optional(Schema.String),
    rows_read: Schema.optional(Schema.Number),
    rows_written: Schema.optional(Schema.Number),
  });
export const GroupSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  version: Schema.optional(Schema.String),
  uuid: Schema.optional(Schema.String),
  locations: Schema.optional(Schema.Array(Schema.String)),
  primary: Schema.optional(Schema.String),
  delete_protection: Schema.optional(Schema.Boolean),
});
export const ExtensionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const OrganizationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  slug: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Literals(["personal", "team"])),
  overages: Schema.optional(Schema.Boolean),
  blocked_reads: Schema.optional(Schema.Boolean),
  blocked_writes: Schema.optional(Schema.Boolean),
  plan_id: Schema.optional(Schema.String),
  plan_timeline: Schema.optional(Schema.String),
  platform: Schema.optional(Schema.String),
});
export const OrganizationPlanSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.optional(Schema.String),
    price: Schema.optional(Schema.String),
    prices: Schema.optional(
      Schema.Array(Schema.suspend(() => PlanPriceSchema)),
    ),
    quotas: Schema.optional(Schema.suspend(() => PlanQuotasSchema)),
  },
);
export const PlanPriceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.String),
  timeline: Schema.optional(Schema.String),
});
export const PlanQuotasSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rowsRead: Schema.optional(Schema.Number),
  rowsWritten: Schema.optional(Schema.Number),
  databases: Schema.optional(Schema.NullOr(Schema.Number)),
  locations: Schema.optional(Schema.Number),
  storage: Schema.optional(Schema.Number),
  groups: Schema.optional(Schema.Number),
  bytesSynced: Schema.optional(Schema.Number),
});
export const MemberSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  username: Schema.optional(Schema.String),
  role: Schema.optional(
    Schema.Literals(["owner", "admin", "member", "viewer"]),
  ),
  email: Schema.optional(Schema.String),
});
export const usernameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const roleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "owner",
  "admin",
  "member",
  "viewer",
]);
export const InviteSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ID: Schema.optional(Schema.Number),
  CreatedAt: Schema.optional(Schema.String),
  UpdatedAt: Schema.optional(Schema.String),
  DeletedAt: Schema.optional(Schema.String),
  Role: Schema.optional(Schema.Literals(["admin", "member", "viewer"])),
  Email: Schema.optional(Schema.String),
  OrganizationID: Schema.optional(Schema.Number),
  Token: Schema.optional(Schema.String),
  Organization: Schema.optional(Schema.suspend(() => OrganizationSchema)),
  Accepted: Schema.optional(Schema.Boolean),
});
export const APITokenSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  organization: Schema.optional(Schema.String),
});
export const nameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const idSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const AuditLogSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(
    Schema.Literals([
      "user-signup",
      "db-create",
      "db-delete",
      "db-protect",
      "db-unprotect",
      "db-token-create",
      "group-token-create",
      "user-token-create",
      "instance-create",
      "instance-delete",
      "org-create",
      "org-delete",
      "org-member-add",
      "org-member-rm",
      "org-member-leave",
      "org-plan-update",
      "org-set-overages",
      "group-create",
      "group-delete",
      "group-unarchive",
      "group-protect",
      "group-unprotect",
      "db-aunrchive",
      "user-delete",
    ]),
  ),
  message: Schema.optional(Schema.String),
  origin: Schema.optional(Schema.String),
  author: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
  data: Schema.optional(Schema.Unknown),
});
export const InviteV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Number),
  email: Schema.optional(Schema.String),
  role: Schema.optional(Schema.Literals(["admin", "member", "viewer"])),
  token: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
});
export const InviteCreatedV2Schema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.optional(Schema.String),
  role: Schema.optional(Schema.Literals(["admin", "member", "viewer"])),
  organization: Schema.optional(Schema.String),
  token: Schema.optional(Schema.String),
});
