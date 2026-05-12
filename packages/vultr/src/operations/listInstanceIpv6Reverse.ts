import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListInstanceIpv6ReverseInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/instances/{instanceId}/ipv6/reverse" }),
  );
export type ListInstanceIpv6ReverseInput =
  typeof ListInstanceIpv6ReverseInput.Type;

// Output Schema
export const ListInstanceIpv6ReverseOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reverse_ipv6s: Schema.optional(
      Schema.Array(
        Schema.Struct({
          reverse: Schema.optional(Schema.String),
          ip: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ListInstanceIpv6ReverseOutput =
  typeof ListInstanceIpv6ReverseOutput.Type;

// The operation
/**
 * List Instance IPv6 Reverse
 *
 * List the reverse IPv6 information for an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const listInstanceIpv6Reverse = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListInstanceIpv6ReverseInput,
    outputSchema: ListInstanceIpv6ReverseOutput,
  }),
);
