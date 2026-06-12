import * as Schema from "effect/Schema";
import { SensitiveOutputString } from "../../sensitive.ts";

export const AnnotationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasets: Schema.Array(Schema.String),
  description: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.NullOr(Schema.String)),
  id: Schema.suspend(() => AnnotationIDSchema),
  time: Schema.String,
  title: Schema.optional(Schema.String),
  type: Schema.String,
  url: Schema.optional(Schema.String),
});
export const AnnotationIDSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const DatasetSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  canWrite: Schema.optional(Schema.Boolean),
  created: Schema.String,
  description: Schema.String,
  edgeDeployment: Schema.optional(Schema.String),
  id: Schema.String,
  kind: Schema.Literals([
    "otel:metrics:v1",
    "otel:traces:v1",
    "otel:logs:v1",
    "axiom:events:v1",
  ]),
  mapFields: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.String,
  retentionDays: Schema.optional(Schema.Number),
  sharedByOrg: Schema.optional(Schema.String),
  useRetentionPeriod: Schema.optional(Schema.Boolean),
  who: Schema.String,
});
export const DatasetFieldSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  hidden: Schema.optional(Schema.Boolean),
  name: Schema.String,
  type: Schema.String,
  unit: Schema.optional(Schema.String),
});
export const MonitorWithIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  alertOnNoData: Schema.optional(Schema.Boolean),
  aplQuery: Schema.optional(Schema.String),
  columnName: Schema.optional(Schema.String),
  compareDays: Schema.optional(Schema.Number),
  createdAt: Schema.optional(Schema.String),
  createdBy: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  disabled: Schema.optional(Schema.Boolean),
  disabledUntil: Schema.optional(Schema.NullOr(Schema.String)),
  intervalMinutes: Schema.optional(Schema.Number),
  mplQuery: Schema.optional(Schema.String),
  name: Schema.String,
  notifierIds: Schema.optional(Schema.Array(Schema.String)),
  notifyByGroup: Schema.optional(Schema.Boolean),
  notifyEveryRun: Schema.optional(Schema.Boolean),
  operator: Schema.optional(
    Schema.Literals([
      "Below",
      "BelowOrEqual",
      "Above",
      "AboveOrEqual",
      "AboveOrBelow",
    ]),
  ),
  rangeMinutes: Schema.optional(Schema.Number),
  resolvable: Schema.optional(Schema.Boolean),
  secondDelay: Schema.optional(Schema.Number),
  skipResolved: Schema.optional(Schema.Boolean),
  threshold: Schema.optional(Schema.Number),
  tolerance: Schema.optional(Schema.Number),
  triggerAfterNPositiveResults: Schema.optional(Schema.Number),
  triggerFromNRuns: Schema.optional(Schema.Number),
  type: Schema.Literals(["Threshold", "MatchEvent", "AnomalyDetection"]),
  id: Schema.String,
});
export const AlertHistorySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  checkId: Schema.String,
  name: Schema.String,
  state: Schema.Literals(["open", "closed"]),
  timestamp: Schema.String,
});
export const NotifierWithIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdAt: Schema.optional(Schema.String),
  createdBy: Schema.optional(Schema.String),
  disabledUntil: Schema.optional(Schema.String),
  name: Schema.String,
  properties: Schema.suspend(() => NotifierPropertiesSchema),
  id: Schema.optional(Schema.String),
});
export const NotifierPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customWebhook: Schema.optional(
      Schema.suspend(() => CustomNotifierConfigSchema),
    ),
    discord: Schema.optional(Schema.suspend(() => DiscordConfigSchema)),
    discordWebhook: Schema.optional(
      Schema.suspend(() => DiscordWebhookConfigSchema),
    ),
    email: Schema.optional(Schema.suspend(() => EmailConfigSchema)),
    microsoftTeams: Schema.optional(
      Schema.suspend(() => MicrosoftTeamsConfigSchema),
    ),
    opsgenie: Schema.optional(Schema.suspend(() => OpsGenieConfigSchema)),
    pagerduty: Schema.optional(Schema.suspend(() => PagerDutyConfigSchema)),
    slack: Schema.optional(Schema.suspend(() => SlackConfigSchema)),
    webhook: Schema.optional(Schema.suspend(() => WebhookConfigSchema)),
  });
export const CustomNotifierConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.String,
    headers: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    secretHeaders: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    url: Schema.String,
  });
export const DiscordConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  discordChannel: Schema.optional(Schema.String),
  discordToken: Schema.optional(Schema.String),
});
export const DiscordWebhookConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    discordWebhookUrl: Schema.optional(Schema.String),
  });
export const EmailConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  emails: Schema.optional(Schema.Array(Schema.String)),
});
export const MicrosoftTeamsConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    microsoftTeamsUrl: Schema.optional(Schema.String),
  });
export const OpsGenieConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiKey: Schema.optional(SensitiveOutputString),
  isEU: Schema.optional(Schema.Boolean),
});
export const PagerDutyConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  routingKey: Schema.optional(Schema.String),
  token: Schema.optional(Schema.String),
});
export const SlackConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  slackUrl: Schema.optional(Schema.String),
});
export const WebhookConfigSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  url: Schema.optional(Schema.String),
});
export const OrgSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  defaultEdgeDeployment: Schema.optional(Schema.String),
  defaultRegion: Schema.optional(Schema.String),
  firstFailedPayment: Schema.optional(Schema.String),
  id: Schema.String,
  lastUsageSync: Schema.String,
  license: Schema.suspend(() => LicenseSchema),
  metaCreated: Schema.optional(Schema.String),
  metaModified: Schema.optional(Schema.String),
  metaVersion: Schema.optional(Schema.String),
  name: Schema.String,
  paymentStatus: Schema.Literals(["na", "failed", "success", "blocked"]),
  plan: Schema.Literals([
    "personal",
    "basicDirect",
    "teamMonthlyDirect",
    "teamMonthlyAws",
    "axiomCloud",
    "teamPlus",
    "enterprise",
    "comped",
  ]),
  planCreated: Schema.String,
  primaryEmail: Schema.String,
  role: Schema.optional(Schema.String),
});
export const LicenseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  apiRateLimitPerSecond: Schema.optional(Schema.Number),
  billingPeriodEnd: Schema.optional(Schema.String),
  billingPeriodStart: Schema.optional(Schema.String),
  defaultEdgeDeployment: Schema.optional(Schema.String),
  defaultRegion: Schema.optional(Schema.String),
  edgeDeployments: Schema.optional(Schema.Array(Schema.String)),
  expiresAt: Schema.optional(Schema.NullOr(Schema.String)),
  features: Schema.optional(Schema.Record(Schema.String, Schema.Boolean)),
  id: Schema.String,
  issuedAt: Schema.optional(Schema.String),
  issuedTo: Schema.optional(Schema.String),
  issuer: Schema.optional(Schema.String),
  maxAuditWindowSeconds: Schema.optional(Schema.Number),
  maxDatasets: Schema.optional(Schema.Number),
  maxEndpoints: Schema.optional(Schema.Number),
  maxFields: Schema.optional(Schema.Number),
  maxMonitors: Schema.optional(Schema.Number),
  maxQueryWindowSeconds: Schema.optional(Schema.Number),
  maxUsers: Schema.optional(Schema.Number),
  monthlyIngestGb: Schema.optional(Schema.Number),
  monthlyQueryGbHours: Schema.optional(Schema.Number),
  regions: Schema.optional(Schema.Array(Schema.String)),
  storageAllowanceGB: Schema.optional(Schema.Number),
  tier: Schema.Literals([
    "personal",
    "basicDirect",
    "teamMonthlyDirect",
    "teamMonthlyAws",
    "axiomCloud",
    "teamPlus",
    "enterprise",
    "comped",
  ]),
  validFrom: Schema.optional(Schema.String),
  withAuths: Schema.optional(Schema.Array(Schema.String)),
});
export const RoleWithIDSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasetCapabilities: Schema.optional(
    Schema.suspend(() => roleDatasetCapabilitiesSchema),
  ),
  description: Schema.optional(Schema.String),
  members: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.String,
  orgCapabilities: Schema.optional(
    Schema.suspend(() => roleOrgCapabilitiesSchema),
  ),
  viewCapabilities: Schema.optional(
    Schema.suspend(() => roleViewCapabilitiesSchema),
  ),
  id: Schema.String,
});
export const roleDatasetCapabilitiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Struct({
      data: Schema.optional(Schema.Array(Schema.Literals(["delete"]))),
      ingest: Schema.optional(Schema.Array(Schema.Literals(["create"]))),
      query: Schema.optional(Schema.Array(Schema.Literals(["read"]))),
      share: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "delete"])),
      ),
      starredQueries: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      trim: Schema.optional(Schema.Array(Schema.Literals(["update"]))),
      vacuum: Schema.optional(Schema.Array(Schema.Literals(["update"]))),
      virtualFields: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
    }),
  );
export const roleOrgCapabilitiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    annotations: Schema.optional(
      Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
    ),
    apiTokens: Schema.optional(
      Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
    ),
    auditLog: Schema.optional(Schema.Array(Schema.Literals(["read"]))),
    billing: Schema.optional(Schema.Array(Schema.Literals(["read", "update"]))),
    dashboards: Schema.optional(
      Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
    ),
    datasets: Schema.optional(
      Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
    ),
    endpoints: Schema.optional(
      Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
    ),
    flows: Schema.optional(
      Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
    ),
    integrations: Schema.optional(
      Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
    ),
    monitors: Schema.optional(
      Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
    ),
    notifiers: Schema.optional(
      Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
    ),
    rbac: Schema.optional(
      Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
    ),
    sharedAccessKeys: Schema.optional(
      Schema.Array(Schema.Literals(["read", "update"])),
    ),
    users: Schema.optional(
      Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
    ),
    views: Schema.optional(
      Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
    ),
  });
export const roleViewCapabilitiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Struct({
      query: Schema.optional(Schema.Array(Schema.Literals(["read"]))),
      share: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "delete"])),
      ),
    }),
  );
export const GroupWithIDSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  isManaged: Schema.optional(Schema.Boolean),
  members: Schema.optional(Schema.Array(Schema.String)),
  name: Schema.String,
  roles: Schema.optional(Schema.Array(Schema.String)),
  id: Schema.String,
});
export const StarredQueryWithIdSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.optional(Schema.String),
    kind: Schema.Literals(["apl"]),
    metadata: Schema.Record(Schema.String, Schema.String),
    name: Schema.String,
    query: Schema.suspend(() => APLRequestWithOptionsSchema),
    who: Schema.String,
    id: Schema.String,
  });
export const APLRequestWithOptionsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apl: Schema.String,
    cursor: Schema.optional(Schema.String),
    defaultLimit: Schema.optional(Schema.Number),
    defaultOrder: Schema.optional(
      Schema.Array(
        Schema.suspend(() => APLRequestWithOptionsDefaultOrderSchema),
      ),
    ),
    endTime: Schema.optional(Schema.String),
    includeCursor: Schema.optional(Schema.Boolean),
    includeCursorField: Schema.optional(Schema.Boolean),
    libraries: Schema.optional(Schema.Array(Schema.String)),
    queryOptions: Schema.optional(Schema.suspend(() => QueryOptionsSchema)),
    startTime: Schema.optional(Schema.String),
    variables: Schema.optional(Schema.Unknown),
  });
export const APLRequestWithOptionsDefaultOrderSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    desc: Schema.optional(Schema.Boolean),
    field: Schema.optional(Schema.String),
  });
export const QueryOptionsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  disableCache: Schema.optional(Schema.Boolean),
  disableStats: Schema.optional(Schema.Boolean),
  disableTrace: Schema.optional(Schema.Boolean),
  maxDataPoints: Schema.optional(Schema.Number),
  maxSeries: Schema.optional(Schema.Number),
  noAggregation: Schema.optional(Schema.Boolean),
  noFill: Schema.optional(Schema.Boolean),
  noInterpolation: Schema.optional(Schema.Boolean),
  priority: Schema.optional(Schema.Literals(["low", "medium", "high"])),
  resolution: Schema.optional(Schema.String),
  displayNull: Schema.optional(
    Schema.Literals(["auto", "null", "span", "zero", ""]),
  ),
  overlayCharts: Schema.optional(Schema.suspend(() => BooleanStringSchema)),
  shownColumns: Schema.optional(Schema.String),
  timeSeriesVariant: Schema.optional(
    Schema.Literals(["area", "bars", "line", "lines", ""]),
  ),
  timeSeriesView: Schema.optional(
    Schema.Literals(["charts", "resultsTable", "charts|resultsTable", ""]),
  ),
});
export const BooleanStringSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "true",
  "false",
  "",
]);
export const APITokenSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasetCapabilities: Schema.suspend(() => datasetCapabilitiesSchema),
  description: Schema.optional(Schema.String),
  expiresAt: Schema.optional(Schema.NullOr(Schema.String)),
  id: Schema.String,
  name: Schema.String,
  orgCapabilities: Schema.suspend(() => orgCapabilitiesSchema),
  samlAuthenticated: Schema.optional(Schema.Boolean),
  viewCapabilities: Schema.optional(
    Schema.suspend(() => viewCapabilitiesSchema),
  ),
});
export const datasetCapabilitiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Struct({
      data: Schema.optional(Schema.Array(Schema.Literals(["delete"]))),
      ingest: Schema.optional(Schema.Array(Schema.Literals(["create"]))),
      query: Schema.optional(Schema.Array(Schema.Literals(["read"]))),
      share: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "delete"])),
      ),
      starredQueries: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      trim: Schema.optional(Schema.Array(Schema.Literals(["update"]))),
      vacuum: Schema.optional(Schema.Array(Schema.Literals(["update"]))),
      virtualFields: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
    }),
  );
export const orgCapabilitiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  annotations: Schema.optional(
    Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
  ),
  apiTokens: Schema.optional(
    Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
  ),
  auditLog: Schema.optional(Schema.Array(Schema.Literals(["read"]))),
  billing: Schema.optional(Schema.Array(Schema.Literals(["read", "update"]))),
  dashboards: Schema.optional(
    Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
  ),
  datasets: Schema.optional(
    Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
  ),
  endpoints: Schema.optional(
    Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
  ),
  flows: Schema.optional(
    Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
  ),
  integrations: Schema.optional(
    Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
  ),
  monitors: Schema.optional(
    Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
  ),
  notifiers: Schema.optional(
    Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
  ),
  rbac: Schema.optional(
    Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
  ),
  sharedAccessKeys: Schema.optional(
    Schema.Array(Schema.Literals(["read", "update"])),
  ),
  users: Schema.optional(
    Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
  ),
  views: Schema.optional(
    Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
  ),
});
export const viewCapabilitiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.Struct({
    query: Schema.optional(Schema.Array(Schema.Literals(["read"]))),
    share: Schema.optional(
      Schema.Array(Schema.Literals(["create", "read", "delete"])),
    ),
  }),
);
export const CreateAPITokenSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasetCapabilities: Schema.optional(
    Schema.suspend(() => datasetCapabilitiesSchema),
  ),
  description: Schema.optional(Schema.String),
  expiresAt: Schema.optional(Schema.NullOr(Schema.String)),
  name: Schema.String,
  orgCapabilities: Schema.optional(Schema.suspend(() => orgCapabilitiesSchema)),
  viewCapabilities: Schema.optional(
    Schema.suspend(() => viewCapabilitiesSchema),
  ),
});
export const UserDetailsRoleSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  name: Schema.String,
});
export const UserSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.String,
  id: Schema.String,
  name: Schema.String,
  role: Schema.optional(Schema.suspend(() => UserDetailsRoleSchema)),
});
export const VirtualFieldWithIdSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dataset: Schema.String,
    description: Schema.optional(Schema.String),
    expression: Schema.String,
    name: Schema.String,
    type: Schema.optional(Schema.String),
    unit: Schema.optional(Schema.String),
    id: Schema.String,
  });
export const ViewSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  aplQuery: Schema.String,
  datasets: Schema.optional(Schema.Array(Schema.String)),
  description: Schema.optional(Schema.String),
  name: Schema.String,
  sharedByOrg: Schema.optional(Schema.String),
  sharedByOrgName: Schema.optional(Schema.String),
});
export const DashboardResourceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    createdAt: Schema.String,
    createdBy: Schema.String,
    dashboard: Schema.suspend(() => DashboardDocumentSchema),
    id: Schema.String,
    uid: Schema.String,
    updatedAt: Schema.String,
    updatedBy: Schema.String,
    version: Schema.Unknown,
  });
export const DashboardDocumentSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() => DashboardSchema);
export const DashboardSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  owner: Schema.suspend(() => OwnerSchema),
  description: Schema.optional(Schema.String),
  charts: Schema.Array(Schema.suspend(() => ChartSchema)),
  layout: Schema.Array(Schema.suspend(() => LayoutItemSchema)),
  refreshTime: Schema.Literals([15, 60, 300]),
  schemaVersion: Schema.suspend(() => SchemaVersionSchema),
  against: Schema.optional(
    Schema.Literals([
      "-1h",
      "-3h",
      "-6h",
      "-12h",
      "-1d",
      "-3d",
      "-7d",
      "-1w",
      "-2w",
      "-3w",
      "-30d",
      "-60d",
      "-90d",
    ]),
  ),
  againstTimestamp: Schema.optional(Schema.suspend(() => DatetimeStringSchema)),
  timeWindowStart: Schema.suspend(() => TimeWindowStartSchema),
  timeWindowEnd: Schema.suspend(() => TimeWindowEndSchema),
  uid: Schema.optional(Schema.suspend(() => DashboardUIDSchema)),
});
export const OwnerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const ChartSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export const LayoutItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  i: Schema.suspend(() => ChartIdSchema),
  x: Schema.Number,
  y: Schema.NullOr(Schema.Number),
  w: Schema.Number,
  h: Schema.Number,
  minW: Schema.optional(Schema.Number),
  minH: Schema.optional(Schema.Number),
  maxW: Schema.optional(Schema.Number),
  maxH: Schema.optional(Schema.Number),
  static: Schema.optional(Schema.Boolean),
});
export const ChartIdSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const SchemaVersionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  2,
]);
export const DatetimeStringSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const TimeWindowStartSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const TimeWindowEndSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
export const DashboardUIDSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.String;
