import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound, UnprocessableEntity } from "../../errors";

// Input Schema
export const UpdateRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
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
}).pipe(T.Http({ method: "PUT", path: "/v2/rbac/roles/{id}" }));
export type UpdateRoleInput = typeof UpdateRoleInput.Type;

// Output Schema
export const UpdateRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type UpdateRoleOutput = typeof UpdateRoleOutput.Type;

// The operation
/**
 * Update role
 *
 * Updates an existing role's configuration including its permissions and member assignments.
 *
 * @param id - Unique identifier of the role to update
 */
export const updateRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateRoleInput,
  outputSchema: UpdateRoleOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
