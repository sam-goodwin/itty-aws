import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateDnsDomainRecordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsDomain: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.String,
    data: Schema.String,
    ttl: Schema.optional(Schema.Number),
    priority: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "POST", path: "/domains/{dnsDomain}/records" }));
export type CreateDnsDomainRecordInput = typeof CreateDnsDomainRecordInput.Type;

// Output Schema
export const CreateDnsDomainRecordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    record: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        data: Schema.optional(Schema.String),
        priority: Schema.optional(Schema.Number),
        ttl: Schema.optional(Schema.Number),
      }),
    ),
  });
export type CreateDnsDomainRecordOutput =
  typeof CreateDnsDomainRecordOutput.Type;

// The operation
/**
 * Create Record
 *
 * Create a DNS record.
 *
 * @param dnsDomain - The [DNS Domain](#operation/list-dns-domains).
 */
export const createDnsDomainRecord = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateDnsDomainRecordInput,
    outputSchema: CreateDnsDomainRecordOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
