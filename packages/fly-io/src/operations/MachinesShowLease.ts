import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface MachinesShowLeaseInput {
  app_name: string;
  machine_id: string;
}
export const MachinesShowLeaseInput = /*@__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  machine_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/apps/{app_name}/machines/{machine_id}/lease",
  }),
) as unknown as Schema.Codec<MachinesShowLeaseInput>;

// Output Schema
export interface MachinesShowLeaseOutput {
  description?: string;
  expires_at?: number;
  nonce?: string;
  owner?: string;
  version?: string;
}
export const MachinesShowLeaseOutput =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    expires_at: Schema.optional(Schema.Number),
    nonce: Schema.optional(Schema.String),
    owner: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MachinesShowLeaseOutput>;

// The operation
/**
 * Get Lease
 *
 * Retrieve the current lease of a specific Machine within an app. Machine leases can be used to obtain an exclusive lock on modifying a Machine.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 */
export const MachinesShowLease = /*@__PURE__*/ API.make(() => ({
  inputSchema: MachinesShowLeaseInput,
  outputSchema: MachinesShowLeaseOutput,
  errors: [Forbidden, NotFound] as const,
}));
