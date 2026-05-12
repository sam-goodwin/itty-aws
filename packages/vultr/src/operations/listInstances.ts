import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ListInstancesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
  tag: Schema.optional(Schema.String),
  label: Schema.optional(Schema.String),
  main_ip: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/instances" }));
export type ListInstancesInput = typeof ListInstancesInput.Type;

// Output Schema
export const ListInstancesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  instances: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        os: Schema.optional(Schema.String),
        ram: Schema.optional(Schema.Number),
        disk: Schema.optional(Schema.Number),
        main_ip: Schema.optional(Schema.String),
        vcpu_count: Schema.optional(Schema.Number),
        region: Schema.optional(Schema.String),
        default_password: Schema.optional(SensitiveString),
        date_created: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        power_status: Schema.optional(Schema.String),
        server_status: Schema.optional(Schema.String),
        allowed_bandwidth: Schema.optional(Schema.Number),
        netmask_v4: Schema.optional(Schema.String),
        gateway_v4: Schema.optional(Schema.String),
        v6_networks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              network: Schema.optional(Schema.String),
              main_ip: Schema.optional(Schema.String),
              network_size: Schema.optional(Schema.Number),
            }),
          ),
        ),
        hostname: Schema.optional(Schema.String),
        label: Schema.optional(Schema.String),
        tag: Schema.optional(Schema.String),
        internal_ip: Schema.optional(Schema.String),
        kvm: Schema.optional(Schema.String),
        os_id: Schema.optional(Schema.Number),
        app_id: Schema.optional(Schema.Number),
        image_id: Schema.optional(Schema.String),
        firewall_group_id: Schema.optional(Schema.String),
        features: Schema.optional(Schema.Array(Schema.String)),
        plan: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Array(Schema.String)),
        user_scheme: Schema.optional(Schema.String),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
      links: Schema.optional(
        Schema.Struct({
          next: Schema.optional(Schema.String),
          prev: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type ListInstancesOutput = typeof ListInstancesOutput.Type;

// The operation
/**
 * List Instances
 *
 * List all VPS instances in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 * @param tag - Filter by specific tag.
 * @param label - Filter by label.
 * @param main_ip - Filter by main ip address.
 * @param region - Filter by [Region id](#operation/list-regions).
 */
export const listInstances = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListInstancesInput,
  outputSchema: ListInstancesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
