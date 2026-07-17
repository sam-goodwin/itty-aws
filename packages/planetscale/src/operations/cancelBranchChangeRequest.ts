import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface CancelBranchChangeRequestInput {
  organization: string;
  database: string;
  branch: string;
}
export const CancelBranchChangeRequestInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/resizes",
    }),
  ) as unknown as Schema.Codec<CancelBranchChangeRequestInput>;

// Output Schema
export type CancelBranchChangeRequestOutput = void;
export const CancelBranchChangeRequestOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CancelBranchChangeRequestOutput>;

// The operation
/**
 * Cancel a change request
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 */
export const cancelBranchChangeRequest = /*@__PURE__*/ API.make(() => ({
  inputSchema: CancelBranchChangeRequestInput,
  outputSchema: CancelBranchChangeRequestOutput,
  errors: [Forbidden, NotFound] as const,
}));
