import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetClusterMetricsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    clusterId: Schema.String.pipe(T.PathParam()),
    period: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "GET", path: "/clusters/{clusterId}/metrics" }));
export type GetClusterMetricsInput = typeof GetClusterMetricsInput.Type;

// Output Schema
export const GetClusterMetricsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metrics: Schema.optional(
      Schema.Struct({
        instances: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              gpu: Schema.optional(
                Schema.Struct({
                  temperature: Schema.optional(
                    Schema.Struct({
                      gpu: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            target: Schema.optional(Schema.String),
                            datapoints: Schema.optional(
                              Schema.Array(Schema.Array(Schema.Unknown)),
                            ),
                            tags: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                              }),
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                  utilization: Schema.optional(
                    Schema.Struct({
                      gpu: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            target: Schema.optional(Schema.String),
                            datapoints: Schema.optional(
                              Schema.Array(Schema.Array(Schema.Unknown)),
                            ),
                            tags: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                              }),
                            ),
                          }),
                        ),
                      ),
                      memory: Schema.optional(
                        Schema.Struct({
                          total: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                target: Schema.optional(Schema.String),
                                datapoints: Schema.optional(
                                  Schema.Array(Schema.Array(Schema.Unknown)),
                                ),
                                tags: Schema.optional(
                                  Schema.Struct({
                                    name: Schema.optional(Schema.String),
                                  }),
                                ),
                              }),
                            ),
                          ),
                          free: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                target: Schema.optional(Schema.String),
                                datapoints: Schema.optional(
                                  Schema.Array(Schema.Array(Schema.Unknown)),
                                ),
                                tags: Schema.optional(
                                  Schema.Struct({
                                    name: Schema.optional(Schema.String),
                                  }),
                                ),
                              }),
                            ),
                          ),
                          used: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                target: Schema.optional(Schema.String),
                                datapoints: Schema.optional(
                                  Schema.Array(Schema.Array(Schema.Unknown)),
                                ),
                                tags: Schema.optional(
                                  Schema.Struct({
                                    name: Schema.optional(Schema.String),
                                  }),
                                ),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                  power: Schema.optional(
                    Schema.Struct({
                      used: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            target: Schema.optional(Schema.String),
                            datapoints: Schema.optional(
                              Schema.Array(Schema.Array(Schema.Unknown)),
                            ),
                            tags: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                              }),
                            ),
                          }),
                        ),
                      ),
                      max: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            target: Schema.optional(Schema.String),
                            datapoints: Schema.optional(
                              Schema.Array(Schema.Array(Schema.Unknown)),
                            ),
                            tags: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                              }),
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
              fabric: Schema.optional(
                Schema.Struct({
                  raw_throughput: Schema.optional(
                    Schema.Struct({
                      tx: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            target: Schema.optional(Schema.String),
                            datapoints: Schema.optional(
                              Schema.Array(Schema.Array(Schema.Unknown)),
                            ),
                            tags: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                              }),
                            ),
                          }),
                        ),
                      ),
                      rx: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            target: Schema.optional(Schema.String),
                            datapoints: Schema.optional(
                              Schema.Array(Schema.Array(Schema.Unknown)),
                            ),
                            tags: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                              }),
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                  retries: Schema.optional(
                    Schema.Struct({
                      tx: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            target: Schema.optional(Schema.String),
                            datapoints: Schema.optional(
                              Schema.Array(Schema.Array(Schema.Unknown)),
                            ),
                            tags: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                              }),
                            ),
                          }),
                        ),
                      ),
                      rx: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            target: Schema.optional(Schema.String),
                            datapoints: Schema.optional(
                              Schema.Array(Schema.Array(Schema.Unknown)),
                            ),
                            tags: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                              }),
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                  optical_power_strength: Schema.optional(
                    Schema.Struct({
                      tx: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            target: Schema.optional(Schema.String),
                            datapoints: Schema.optional(
                              Schema.Array(Schema.Array(Schema.Unknown)),
                            ),
                            tags: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                              }),
                            ),
                          }),
                        ),
                      ),
                      rx: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            target: Schema.optional(Schema.String),
                            datapoints: Schema.optional(
                              Schema.Array(Schema.Array(Schema.Unknown)),
                            ),
                            tags: Schema.optional(
                              Schema.Struct({
                                name: Schema.optional(Schema.String),
                              }),
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  });
export type GetClusterMetricsOutput = typeof GetClusterMetricsOutput.Type;

// The operation
/**
 * Get Cluster Metrics
 *
 * Retrieve GPU and fabric metrics for all instances in a cluster.
 *
 * @param clusterId - The [Cluster ID](#operation/list-clusters).
 * @param period - Time period for metrics. Defaults to `-1days`.
 */
export const getClusterMetrics = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetClusterMetricsInput,
  outputSchema: GetClusterMetricsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
