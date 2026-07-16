import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface DataWarehouseWarehouseStatusRetrieveInput {
  project_id: string;
}
export const DataWarehouseWarehouseStatusRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/data_warehouse/warehouse_status/",
    }),
  ) as unknown as Schema.Codec<DataWarehouseWarehouseStatusRetrieveInput>;

// Output Schema
export interface DataWarehouseWarehouseStatusRetrieveOutput {
  org_id: string;
  state:
    | "pending"
    | "provisioning"
    | "ready"
    | "failed"
    | "deleting"
    | "deleted";
  status_message: string;
  s3_state: string;
  metadata_store_state: string;
  identity_state: string;
  secrets_state: string;
  ready_at: string | null;
  failed_at: string | null;
  connection?: {
    host: string;
    port: number;
    database: string;
    username: string;
  } | null;
  has_backfill: boolean;
  table_suffix: string | null;
}
export const DataWarehouseWarehouseStatusRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    org_id: Schema.String,
    state: Schema.Literals([
      "pending",
      "provisioning",
      "ready",
      "failed",
      "deleting",
      "deleted",
    ]),
    status_message: Schema.String,
    s3_state: Schema.String,
    metadata_store_state: Schema.String,
    identity_state: Schema.String,
    secrets_state: Schema.String,
    ready_at: Schema.NullOr(Schema.String),
    failed_at: Schema.NullOr(Schema.String),
    connection: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          host: Schema.String,
          port: Schema.Number,
          database: Schema.String,
          username: Schema.String,
        }),
      ),
    ),
    has_backfill: Schema.Boolean,
    table_suffix: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<DataWarehouseWarehouseStatusRetrieveOutput>;

// The operation
/**
 * Get the current provisioning status of the managed warehouse, with this project's backfill state.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dataWarehouseWarehouseStatusRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: DataWarehouseWarehouseStatusRetrieveInput,
    outputSchema: DataWarehouseWarehouseStatusRetrieveOutput,
  }));
