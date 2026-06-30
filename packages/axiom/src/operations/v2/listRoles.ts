import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ListRolesInput {}
export const ListRolesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "/v2/rbac/roles" }),
) as unknown as Schema.Codec<ListRolesInput>;

// Output Schema
export type ListRolesOutput = {
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
  members?: string[];
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
  id: string;
}[];
export const ListRolesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
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
            Schema.Array(
              Schema.Literals(["create", "read", "update", "delete"]),
            ),
          ),
          trim: Schema.optional(Schema.Array(Schema.Literals(["update"]))),
          vacuum: Schema.optional(Schema.Array(Schema.Literals(["update"]))),
          virtualFields: Schema.optional(
            Schema.Array(
              Schema.Literals(["create", "read", "update", "delete"]),
            ),
          ),
        }),
      ),
    ),
    description: Schema.optional(Schema.String),
    members: Schema.optional(Schema.Array(Schema.String)),
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
    id: Schema.String,
  }),
) as unknown as Schema.Codec<ListRolesOutput>;

// The operation
/**
 * List all roles
 *
 * Retrieves all roles in the organization with their associated permissions and members.
 */
export const listRoles = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListRolesInput,
  outputSchema: ListRolesOutput,
}));
