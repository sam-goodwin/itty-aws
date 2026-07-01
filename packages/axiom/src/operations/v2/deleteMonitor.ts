import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export interface DeleteMonitorInput {
  id: string;
}
export const DeleteMonitorInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/v2/monitors/{id}" }),
) as unknown as Schema.Codec<DeleteMonitorInput>;

// Output Schema
export type DeleteMonitorOutput = void;
export const DeleteMonitorOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteMonitorOutput>;

// The operation
/**
 * Delete monitor
 */
export const deleteMonitor = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteMonitorInput,
  outputSchema: DeleteMonitorOutput,
  errors: [NotFound] as const,
}));
