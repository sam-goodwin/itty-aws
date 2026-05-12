import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const PostInstancesInstanceIdIpv4ReverseDefaultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
    ip: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/instances/{instanceId}/ipv4/reverse/default",
    }),
  );
export type PostInstancesInstanceIdIpv4ReverseDefaultInput =
  typeof PostInstancesInstanceIdIpv4ReverseDefaultInput.Type;

// Output Schema
export const PostInstancesInstanceIdIpv4ReverseDefaultOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PostInstancesInstanceIdIpv4ReverseDefaultOutput =
  typeof PostInstancesInstanceIdIpv4ReverseDefaultOutput.Type;

// The operation
/**
 * Set Default Reverse DNS Entry
 *
 * Set a reverse DNS entry for an IPv4 address
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const postInstancesInstanceIdIpv4ReverseDefault =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostInstancesInstanceIdIpv4ReverseDefaultInput,
    outputSchema: PostInstancesInstanceIdIpv4ReverseDefaultOutput,
    errors: [BadRequest, NotFound] as const,
  }));
