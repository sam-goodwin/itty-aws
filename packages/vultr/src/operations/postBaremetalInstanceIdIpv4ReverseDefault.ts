import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const PostBaremetalInstanceIdIpv4ReverseDefaultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baremetalId: Schema.String.pipe(T.PathParam()),
    ip: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/bare-metals/{baremetalId}/ipv4/reverse/default",
    }),
  );
export type PostBaremetalInstanceIdIpv4ReverseDefaultInput =
  typeof PostBaremetalInstanceIdIpv4ReverseDefaultInput.Type;

// Output Schema
export const PostBaremetalInstanceIdIpv4ReverseDefaultOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PostBaremetalInstanceIdIpv4ReverseDefaultOutput =
  typeof PostBaremetalInstanceIdIpv4ReverseDefaultOutput.Type;

// The operation
/**
 * Set Default Reverse DNS Entry
 *
 * Set a reverse DNS entry for an IPv4 address
 *
 * @param baremetalId - The [Bare Metal ID](#operation/list-baremetals).
 */
export const postBaremetalInstanceIdIpv4ReverseDefault =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostBaremetalInstanceIdIpv4ReverseDefaultInput,
    outputSchema: PostBaremetalInstanceIdIpv4ReverseDefaultOutput,
    errors: [BadRequest, NotFound] as const,
  }));
