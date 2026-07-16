/**
 * Azure Mariadb API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ServersStartInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const ServersStartInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/start",
    apiVersion: "2020-01-01",
  }),
) as unknown as Schema.Codec<ServersStartInput>;

// Output Schema
export type ServersStartOutput = void;
export const ServersStartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServersStartOutput>;

// The operation
/**
 * Starts a stopped server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersStart = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersStartInput,
  outputSchema: ServersStartOutput,
}));
// Input Schema
export interface ServersStopInput {
  subscriptionId: string;
  resourceGroupName: string;
  serverName: string;
}
export const ServersStopInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  serverName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/stop",
    apiVersion: "2020-01-01",
  }),
) as unknown as Schema.Codec<ServersStopInput>;

// Output Schema
export type ServersStopOutput = void;
export const ServersStopOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ServersStopOutput>;

// The operation
/**
 * Stops a running server.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param serverName - The name of the server.
 */
export const ServersStop = /*@__PURE__*/ API.make(() => ({
  inputSchema: ServersStopInput,
  outputSchema: ServersStopOutput,
}));
