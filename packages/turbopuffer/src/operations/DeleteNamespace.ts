import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DeleteNamespaceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  namespace: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/namespaces/{namespace}" }));
export type DeleteNamespaceInput = typeof DeleteNamespaceInput.Type;

// Output Schema
export const DeleteNamespaceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.Unknown,
});
export type DeleteNamespaceOutput = typeof DeleteNamespaceOutput.Type;

// The operation
/**
 * Delete namespace.
 *
 * @param namespace - The name of the namespace.
 */
export const DeleteNamespace = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteNamespaceInput,
  outputSchema: DeleteNamespaceOutput,
}));
