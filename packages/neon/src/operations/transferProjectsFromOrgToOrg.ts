import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface TransferProjectsFromOrgToOrgInput {
  source_org_id: string;
  destination_org_id: string;
  project_ids: string[];
}
export const TransferProjectsFromOrgToOrgInput =
  /*@__PURE__*/ Schema.Struct({
    source_org_id: Schema.String.pipe(T.PathParam()),
    destination_org_id: Schema.String,
    project_ids: Schema.Array(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{source_org_id}/projects/transfer",
    }),
  ) as unknown as Schema.Codec<TransferProjectsFromOrgToOrgInput>;

// Output Schema
export interface TransferProjectsFromOrgToOrgOutput {}
export const TransferProjectsFromOrgToOrgOutput =
  /*@__PURE__*/ Schema.Struct(
    {},
  ) as unknown as Schema.Codec<TransferProjectsFromOrgToOrgOutput>;

// The operation
/**
 * Transfer projects between organizations
 *
 * Transfers selected projects, identified by their IDs, from your organization to another specified organization.
 *
 * @param source_org_id - The Neon organization ID (source org, which currently owns the project)
 */
export const transferProjectsFromOrgToOrg =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: TransferProjectsFromOrgToOrgInput,
    outputSchema: TransferProjectsFromOrgToOrgOutput,
    errors: [UnprocessableEntity] as const,
  }));
