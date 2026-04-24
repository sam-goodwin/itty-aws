import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";

// Input Schema
export const ListRolesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v2/rbac/roles" }));
export type ListRolesInput = typeof ListRolesInput.Type;

// Output Schema
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
);
export type ListRolesOutput = typeof ListRolesOutput.Type;

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
