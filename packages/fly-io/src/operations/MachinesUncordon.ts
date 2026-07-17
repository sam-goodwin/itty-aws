import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface MachinesUncordonInput {
  app_name: string;
  machine_id: string;
}
export const MachinesUncordonInput = /*@__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  machine_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/apps/{app_name}/machines/{machine_id}/uncordon",
  }),
) as unknown as Schema.Codec<MachinesUncordonInput>;

// Output Schema
export type MachinesUncordonOutput = void;
export const MachinesUncordonOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MachinesUncordonOutput>;

// The operation
/**
 * Uncordon Machine
 *
 * “Cordoning” a Machine refers to disabling its services, so the Fly Proxy won’t route requests to it. In flyctl this is used by blue/green deployments; one set of Machines is started up with services disabled, and when they are all healthy, the services are enabled on the new Machines and disabled on the old ones.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 */
export const MachinesUncordon = /*@__PURE__*/ API.make(() => ({
  inputSchema: MachinesUncordonInput,
  outputSchema: MachinesUncordonOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
