import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetKubernetesVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/kubernetes/versions" }),
  );
export type GetKubernetesVersionsInput = typeof GetKubernetesVersionsInput.Type;

// Output Schema
export const GetKubernetesVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    versions: Schema.optional(Schema.Array(Schema.String)),
  });
export type GetKubernetesVersionsOutput =
  typeof GetKubernetesVersionsOutput.Type;

// The operation
/**
 * Get Kubernetes Versions
 *
 * Get a list of supported Kubernetes versions
 */
export const getKubernetesVersions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetKubernetesVersionsInput,
    outputSchema: GetKubernetesVersionsOutput,
    errors: [NotFound] as const,
  }),
);
