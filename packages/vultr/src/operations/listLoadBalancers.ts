import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListLoadBalancersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "GET", path: "/load-balancers" }));
export type ListLoadBalancersInput = typeof ListLoadBalancersInput.Type;

// Output Schema
export const ListLoadBalancersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    load_balancers: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          date_created: Schema.optional(Schema.String),
          region: Schema.optional(Schema.String),
          label: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          ipv4: Schema.optional(Schema.String),
          ipv6: Schema.optional(Schema.String),
          generic_info: Schema.optional(
            Schema.Struct({
              balancing_algorithm: Schema.optional(Schema.String),
              ssl_redirect: Schema.optional(Schema.Boolean),
              sticky_sessions: Schema.optional(
                Schema.Struct({
                  cookie_name: Schema.optional(Schema.String),
                }),
              ),
              proxy_protocol: Schema.optional(Schema.Boolean),
              private_network: Schema.optional(Schema.String),
              vpc: Schema.optional(Schema.String),
            }),
          ),
          health_check: Schema.optional(
            Schema.Struct({
              protocol: Schema.optional(Schema.String),
              port: Schema.optional(Schema.Number),
              path: Schema.optional(Schema.String),
              check_interval: Schema.optional(Schema.Number),
              response_timeout: Schema.optional(Schema.Number),
              unhealthy_threshold: Schema.optional(Schema.Number),
              healthy_threshold: Schema.optional(Schema.Number),
            }),
          ),
          has_ssl: Schema.optional(Schema.Boolean),
          http2: Schema.optional(Schema.Boolean),
          nodes: Schema.optional(Schema.Number),
          forward_rules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                frontend_protocol: Schema.optional(Schema.String),
                frontend_port: Schema.optional(Schema.Number),
                backend_portocol: Schema.optional(Schema.String),
                backend_port: Schema.optional(Schema.Number),
              }),
            ),
          ),
          instances: Schema.optional(Schema.Array(Schema.String)),
          firewall_rules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                port: Schema.optional(Schema.Number),
                source: Schema.optional(Schema.String),
                ip_type: Schema.optional(Schema.String),
              }),
            ),
          ),
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
export type ListLoadBalancersOutput = typeof ListLoadBalancersOutput.Type;

// The operation
/**
 * List Load Balancers
 *
 * List the Load Balancers in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.

 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listLoadBalancers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListLoadBalancersInput,
  outputSchema: ListLoadBalancersOutput,
  errors: [BadRequest, NotFound] as const,
}));
