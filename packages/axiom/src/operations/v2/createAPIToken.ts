import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export interface CreateAPITokenInput {
  datasetCapabilities?: Record<
    string,
    {
      data?: "delete"[];
      ingest?: "create"[];
      query?: "read"[];
      share?: ("create" | "read" | "delete")[];
      starredQueries?: ("create" | "read" | "update" | "delete")[];
      trim?: "update"[];
      vacuum?: "update"[];
      virtualFields?: ("create" | "read" | "update" | "delete")[];
    }
  >;
  description?: string;
  expiresAt?: string | null;
  name: string;
  orgCapabilities?: {
    annotations?: ("create" | "read" | "update" | "delete")[];
    apiTokens?: ("create" | "read" | "update" | "delete")[];
    auditLog?: "read"[];
    billing?: ("read" | "update")[];
    dashboards?: ("create" | "read" | "update" | "delete")[];
    datasets?: ("create" | "read" | "update" | "delete")[];
    endpoints?: ("create" | "read" | "update" | "delete")[];
    flows?: ("create" | "read" | "update" | "delete")[];
    integrations?: ("create" | "read" | "update" | "delete")[];
    monitors?: ("create" | "read" | "update" | "delete")[];
    notifiers?: ("create" | "read" | "update" | "delete")[];
    rbac?: ("create" | "read" | "update" | "delete")[];
    sharedAccessKeys?: ("read" | "update")[];
    users?: ("create" | "read" | "update" | "delete")[];
    views?: ("create" | "read" | "update" | "delete")[];
  };
  viewCapabilities?: Record<
    string,
    { query?: "read"[]; share?: ("create" | "read" | "delete")[] }
  >;
}
export const CreateAPITokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasetCapabilities: Schema.optional(
    Schema.Record(
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
    ),
  ),
  description: Schema.optional(Schema.String),
  expiresAt: Schema.optional(Schema.NullOr(Schema.String)),
  name: Schema.String,
  orgCapabilities: Schema.optional(
    Schema.Struct({
      annotations: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      apiTokens: Schema.optional(
        Schema.Array(Schema.Literals(["create", "read", "update", "delete"])),
      ),
      auditLog: Schema.optional(Schema.Array(Schema.Literals(["read"]))),
      billing: Schema.optional(
        Schema.Array(Schema.Literals(["read", "update"])),
      ),
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
    }),
  ),
  viewCapabilities: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.Struct({
        query: Schema.optional(Schema.Array(Schema.Literals(["read"]))),
        share: Schema.optional(
          Schema.Array(Schema.Literals(["create", "read", "delete"])),
        ),
      }),
    ),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/v2/tokens" }),
) as unknown as Schema.Codec<CreateAPITokenInput>;

// Output Schema
export interface CreateAPITokenOutput {
  datasetCapabilities: Record<
    string,
    {
      data?: "delete"[];
      ingest?: "create"[];
      query?: "read"[];
      share?: ("create" | "read" | "delete")[];
      starredQueries?: ("create" | "read" | "update" | "delete")[];
      trim?: "update"[];
      vacuum?: "update"[];
      virtualFields?: ("create" | "read" | "update" | "delete")[];
    }
  >;
  description?: string;
  expiresAt?: string | null;
  id: string;
  name: string;
  orgCapabilities: {
    annotations?: ("create" | "read" | "update" | "delete")[];
    apiTokens?: ("create" | "read" | "update" | "delete")[];
    auditLog?: "read"[];
    billing?: ("read" | "update")[];
    dashboards?: ("create" | "read" | "update" | "delete")[];
    datasets?: ("create" | "read" | "update" | "delete")[];
    endpoints?: ("create" | "read" | "update" | "delete")[];
    flows?: ("create" | "read" | "update" | "delete")[];
    integrations?: ("create" | "read" | "update" | "delete")[];
    monitors?: ("create" | "read" | "update" | "delete")[];
    notifiers?: ("create" | "read" | "update" | "delete")[];
    rbac?: ("create" | "read" | "update" | "delete")[];
    sharedAccessKeys?: ("read" | "update")[];
    users?: ("create" | "read" | "update" | "delete")[];
    views?: ("create" | "read" | "update" | "delete")[];
  };
  samlAuthenticated?: boolean;
  viewCapabilities?: Record<
    string,
    { query?: "read"[]; share?: ("create" | "read" | "delete")[] }
  >;
  token?: string;
}
export const CreateAPITokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasetCapabilities: Schema.Record(
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
  ),
  description: Schema.optional(Schema.String),
  expiresAt: Schema.optional(Schema.NullOr(Schema.String)),
  id: Schema.String,
  name: Schema.String,
  orgCapabilities: Schema.Struct({
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
  }),
  samlAuthenticated: Schema.optional(Schema.Boolean),
  viewCapabilities: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.Struct({
        query: Schema.optional(Schema.Array(Schema.Literals(["read"]))),
        share: Schema.optional(
          Schema.Array(Schema.Literals(["create", "read", "delete"])),
        ),
      }),
    ),
  ),
  token: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<CreateAPITokenOutput>;

// The operation
/**
 * Create API token
 */
export const createAPIToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateAPITokenInput,
  outputSchema: CreateAPITokenOutput,
  errors: [UnprocessableEntity] as const,
}));
