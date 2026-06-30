/**
 * Azure Eventgrid API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CaCertificatesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  caCertificateName: string;
  properties?: {
    description?: string;
    encodedCertificate?: string;
    issueTimeInUtc?: string;
    expiryTimeInUtc?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "Deleted";
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const CaCertificatesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    caCertificateName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        encodedCertificate: Schema.optional(Schema.String),
        issueTimeInUtc: Schema.optional(Schema.String),
        expiryTimeInUtc: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "Deleted",
          ]),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/caCertificates/{caCertificateName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<CaCertificatesCreateOrUpdateInput>;

// Output Schema
export interface CaCertificatesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const CaCertificatesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CaCertificatesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a CA certificate.
 *
 * Create or update a CA certificate with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param caCertificateName - The CA certificate name.
 * @param api-version - Version of the API to be used with the client request.
 */
export const CaCertificatesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CaCertificatesCreateOrUpdateInput,
    outputSchema: CaCertificatesCreateOrUpdateOutput,
  }));
// Input Schema
export interface CaCertificatesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  caCertificateName: string;
}
export const CaCertificatesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    caCertificateName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/caCertificates/{caCertificateName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<CaCertificatesDeleteInput>;

// Output Schema
export type CaCertificatesDeleteOutput = void;
export const CaCertificatesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CaCertificatesDeleteOutput>;

// The operation
/**
 * Delete a CA certificate.
 *
 * Delete an existing CA certificate.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param caCertificateName - Name of the CA certificate.
 * @param api-version - Version of the API to be used with the client request.
 */
export const CaCertificatesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CaCertificatesDeleteInput,
    outputSchema: CaCertificatesDeleteOutput,
  }),
);
// Input Schema
export interface CaCertificatesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  caCertificateName: string;
}
export const CaCertificatesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    caCertificateName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/caCertificates/{caCertificateName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<CaCertificatesGetInput>;

// Output Schema
export interface CaCertificatesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const CaCertificatesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CaCertificatesGetOutput>;

// The operation
/**
 * Get a CA certificate.
 *
 * Get properties of a CA certificate.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param caCertificateName - Name of the CA certificate.
 * @param api-version - Version of the API to be used with the client request.
 */
export const CaCertificatesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CaCertificatesGetInput,
  outputSchema: CaCertificatesGetOutput,
}));
// Input Schema
export interface CaCertificatesListByNamespaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  $filter?: string;
  $top?: number;
}
export const CaCertificatesListByNamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/caCertificates",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<CaCertificatesListByNamespaceInput>;

// Output Schema
export interface CaCertificatesListByNamespaceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const CaCertificatesListByNamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CaCertificatesListByNamespaceOutput>;

// The operation
/**
 * List all CA certificates under a namespace.
 *
 * Get all the CA certificates under a namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const CaCertificatesListByNamespace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CaCertificatesListByNamespaceInput,
    outputSchema: CaCertificatesListByNamespaceOutput,
  }));
// Input Schema
export interface ChannelsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerNamespaceName: string;
  channelName: string;
  properties?: {
    channelType?: "PartnerTopic";
    partnerTopicInfo?: {
      azureSubscriptionId?: string;
      resourceGroupName?: string;
      name?: string;
      eventTypeInfo?: {
        kind?: "Inline";
        inlineEventTypes?: Record<
          string,
          {
            description?: string;
            displayName?: string;
            documentationUrl?: string;
            dataSchemaUrl?: string;
          }
        >;
      };
      source?: string;
    };
    messageForActivation?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "IdleDueToMirroredPartnerTopicDeletion";
    readinessState?: "NeverActivated" | "Activated";
    expirationTimeIfNotActivatedUtc?: string;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const ChannelsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerNamespaceName: Schema.String.pipe(T.PathParam()),
    channelName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        channelType: Schema.optional(Schema.Literals(["PartnerTopic"])),
        partnerTopicInfo: Schema.optional(
          Schema.Struct({
            azureSubscriptionId: Schema.optional(Schema.String),
            resourceGroupName: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            eventTypeInfo: Schema.optional(
              Schema.Struct({
                kind: Schema.optional(Schema.Literals(["Inline"])),
                inlineEventTypes: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      description: Schema.optional(Schema.String),
                      displayName: Schema.optional(Schema.String),
                      documentationUrl: Schema.optional(Schema.String),
                      dataSchemaUrl: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
            source: Schema.optional(Schema.String),
          }),
        ),
        messageForActivation: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "IdleDueToMirroredPartnerTopicDeletion",
          ]),
        ),
        readinessState: Schema.optional(
          Schema.Literals(["NeverActivated", "Activated"]),
        ),
        expirationTimeIfNotActivatedUtc: Schema.optional(Schema.String),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}/channels/{channelName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<ChannelsCreateOrUpdateInput>;

// Output Schema
export interface ChannelsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ChannelsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ChannelsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a channel.
 *
 * Synchronously creates or updates a new channel with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the partners subscription.
 * @param partnerNamespaceName - Name of the partner namespace.
 * @param channelName - Name of the channel.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ChannelsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ChannelsCreateOrUpdateInput,
    outputSchema: ChannelsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ChannelsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerNamespaceName: string;
  channelName: string;
}
export const ChannelsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  partnerNamespaceName: Schema.String.pipe(T.PathParam()),
  channelName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}/channels/{channelName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<ChannelsDeleteInput>;

// Output Schema
export type ChannelsDeleteOutput = void;
export const ChannelsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ChannelsDeleteOutput>;

// The operation
/**
 * Delete a channel.
 *
 * Delete an existing channel.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the partners subscription.
 * @param partnerNamespaceName - Name of the partner namespace.
 * @param channelName - Name of the channel.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ChannelsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ChannelsDeleteInput,
  outputSchema: ChannelsDeleteOutput,
}));
// Input Schema
export interface ChannelsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerNamespaceName: string;
  channelName: string;
}
export const ChannelsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  partnerNamespaceName: Schema.String.pipe(T.PathParam()),
  channelName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}/channels/{channelName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<ChannelsGetInput>;

// Output Schema
export interface ChannelsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ChannelsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ChannelsGetOutput>;

// The operation
/**
 * Get a channel.
 *
 * Get properties of a channel.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the partners subscription.
 * @param partnerNamespaceName - Name of the partner namespace.
 * @param channelName - Name of the channel.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ChannelsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ChannelsGetInput,
  outputSchema: ChannelsGetOutput,
}));
// Input Schema
export interface ChannelsGetFullUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerNamespaceName: string;
  channelName: string;
}
export const ChannelsGetFullUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerNamespaceName: Schema.String.pipe(T.PathParam()),
    channelName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}/channels/{channelName}/getFullUrl",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<ChannelsGetFullUrlInput>;

// Output Schema
export interface ChannelsGetFullUrlOutput {
  endpointUrl?: string;
}
export const ChannelsGetFullUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointUrl: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ChannelsGetFullUrlOutput>;

// The operation
/**
 * Get full URL of partner destination channel.
 *
 * Get the full endpoint URL of a partner destination channel.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the partners subscription.
 * @param partnerNamespaceName - Name of the partner namespace.
 * @param channelName - Name of the Channel.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ChannelsGetFullUrl = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ChannelsGetFullUrlInput,
  outputSchema: ChannelsGetFullUrlOutput,
}));
// Input Schema
export interface ChannelsListByPartnerNamespaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerNamespaceName: string;
  $filter?: string;
  $top?: number;
}
export const ChannelsListByPartnerNamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerNamespaceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}/channels",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<ChannelsListByPartnerNamespaceInput>;

// Output Schema
export interface ChannelsListByPartnerNamespaceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ChannelsListByPartnerNamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ChannelsListByPartnerNamespaceOutput>;

// The operation
/**
 * List channels.
 *
 * List all the channels in a partner namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the partners subscription.
 * @param partnerNamespaceName - Name of the partner namespace.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const ChannelsListByPartnerNamespace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ChannelsListByPartnerNamespaceInput,
    outputSchema: ChannelsListByPartnerNamespaceOutput,
  }));
// Input Schema
export interface ChannelsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerNamespaceName: string;
  channelName: string;
  properties?: {
    expirationTimeIfNotActivatedUtc?: string;
    partnerTopicInfo?: {
      eventTypeInfo?: {
        kind?: "Inline";
        inlineEventTypes?: Record<
          string,
          {
            description?: string;
            displayName?: string;
            documentationUrl?: string;
            dataSchemaUrl?: string;
          }
        >;
      };
    };
  };
}
export const ChannelsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  partnerNamespaceName: Schema.String.pipe(T.PathParam()),
  channelName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      expirationTimeIfNotActivatedUtc: Schema.optional(Schema.String),
      partnerTopicInfo: Schema.optional(
        Schema.Struct({
          eventTypeInfo: Schema.optional(
            Schema.Struct({
              kind: Schema.optional(Schema.Literals(["Inline"])),
              inlineEventTypes: Schema.optional(
                Schema.Record(
                  Schema.String,
                  Schema.Struct({
                    description: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    documentationUrl: Schema.optional(Schema.String),
                    dataSchemaUrl: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}/channels/{channelName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<ChannelsUpdateInput>;

// Output Schema
export type ChannelsUpdateOutput = void;
export const ChannelsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ChannelsUpdateOutput>;

// The operation
/**
 * Update a Channel.
 *
 * Synchronously updates a channel with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the partners subscription.
 * @param partnerNamespaceName - Name of the partner namespace.
 * @param channelName - Name of the channel.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ChannelsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ChannelsUpdateInput,
  outputSchema: ChannelsUpdateOutput,
}));
// Input Schema
export interface ClientGroupsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  clientGroupName: string;
  properties?: {
    description?: string;
    query?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "Deleted";
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const ClientGroupsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    clientGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        query: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "Deleted",
          ]),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/clientGroups/{clientGroupName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<ClientGroupsCreateOrUpdateInput>;

// Output Schema
export interface ClientGroupsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ClientGroupsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClientGroupsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a client group.
 *
 * Create or update a client group with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param clientGroupName - The client group name.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ClientGroupsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClientGroupsCreateOrUpdateInput,
    outputSchema: ClientGroupsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ClientGroupsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  clientGroupName: string;
}
export const ClientGroupsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    clientGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/clientGroups/{clientGroupName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<ClientGroupsDeleteInput>;

// Output Schema
export type ClientGroupsDeleteOutput = void;
export const ClientGroupsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClientGroupsDeleteOutput>;

// The operation
/**
 * Delete a client group.
 *
 * Delete an existing client group.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param clientGroupName - Name of the client group.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ClientGroupsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClientGroupsDeleteInput,
  outputSchema: ClientGroupsDeleteOutput,
}));
// Input Schema
export interface ClientGroupsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  clientGroupName: string;
}
export const ClientGroupsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  clientGroupName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/clientGroups/{clientGroupName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<ClientGroupsGetInput>;

// Output Schema
export interface ClientGroupsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ClientGroupsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ClientGroupsGetOutput>;

// The operation
/**
 * Get a client group.
 *
 * Get properties of a client group.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param clientGroupName - Name of the client group.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ClientGroupsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClientGroupsGetInput,
  outputSchema: ClientGroupsGetOutput,
}));
// Input Schema
export interface ClientGroupsListByNamespaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  $filter?: string;
  $top?: number;
}
export const ClientGroupsListByNamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/clientGroups",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<ClientGroupsListByNamespaceInput>;

// Output Schema
export interface ClientGroupsListByNamespaceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ClientGroupsListByNamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClientGroupsListByNamespaceOutput>;

// The operation
/**
 * List all client groups under a namespace.
 *
 * Get all the client groups under a namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const ClientGroupsListByNamespace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClientGroupsListByNamespaceInput,
    outputSchema: ClientGroupsListByNamespaceOutput,
  }),
);
// Input Schema
export interface ClientsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  clientName: string;
  properties?: {
    description?: string;
    authenticationName?: string;
    clientCertificateAuthentication?: {
      validationScheme?:
        | "SubjectMatchesAuthenticationName"
        | "DnsMatchesAuthenticationName"
        | "UriMatchesAuthenticationName"
        | "IpMatchesAuthenticationName"
        | "EmailMatchesAuthenticationName"
        | "ThumbprintMatch";
      allowedThumbprints?: string[];
    };
    state?: "Enabled" | "Disabled";
    attributes?: Record<string, unknown>;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "Deleted";
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const ClientsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    clientName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        authenticationName: Schema.optional(Schema.String),
        clientCertificateAuthentication: Schema.optional(
          Schema.Struct({
            validationScheme: Schema.optional(
              Schema.Literals([
                "SubjectMatchesAuthenticationName",
                "DnsMatchesAuthenticationName",
                "UriMatchesAuthenticationName",
                "IpMatchesAuthenticationName",
                "EmailMatchesAuthenticationName",
                "ThumbprintMatch",
              ]),
            ),
            allowedThumbprints: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        state: Schema.optional(Schema.Literals(["Enabled", "Disabled"])),
        attributes: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "Deleted",
          ]),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/clients/{clientName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<ClientsCreateOrUpdateInput>;

// Output Schema
export interface ClientsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ClientsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClientsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a client.
 *
 * Create or update a client with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param clientName - The client name.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ClientsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClientsCreateOrUpdateInput,
    outputSchema: ClientsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ClientsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  clientName: string;
}
export const ClientsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  clientName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/clients/{clientName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<ClientsDeleteInput>;

// Output Schema
export type ClientsDeleteOutput = void;
export const ClientsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ClientsDeleteOutput>;

// The operation
/**
 * Delete a client.
 *
 * Delete an existing client.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param clientName - Name of the client.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ClientsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClientsDeleteInput,
  outputSchema: ClientsDeleteOutput,
}));
// Input Schema
export interface ClientsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  clientName: string;
}
export const ClientsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  clientName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/clients/{clientName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<ClientsGetInput>;

// Output Schema
export interface ClientsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ClientsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ClientsGetOutput>;

// The operation
/**
 * Get a client.
 *
 * Get properties of a client.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param clientName - Name of the client.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ClientsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ClientsGetInput,
  outputSchema: ClientsGetOutput,
}));
// Input Schema
export interface ClientsListByNamespaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  $filter?: string;
  $top?: number;
}
export const ClientsListByNamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/clients",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<ClientsListByNamespaceInput>;

// Output Schema
export interface ClientsListByNamespaceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const ClientsListByNamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ClientsListByNamespaceOutput>;

// The operation
/**
 * List all permission bindings under a namespace.
 *
 * Get all the permission bindings under a namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const ClientsListByNamespace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ClientsListByNamespaceInput,
    outputSchema: ClientsListByNamespaceOutput,
  }),
);
// Input Schema
export interface DomainEventSubscriptionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  eventSubscriptionName: string;
  properties?: {
    topic?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "AwaitingManualAction";
    destination?: {
      endpointType:
        | "WebHook"
        | "EventHub"
        | "StorageQueue"
        | "HybridConnection"
        | "ServiceBusQueue"
        | "ServiceBusTopic"
        | "AzureFunction"
        | "MonitorAlert"
        | "NamespaceTopic";
    };
    deliveryWithResourceIdentity?: {
      identity?: {
        type?: "SystemAssigned" | "UserAssigned";
        userAssignedIdentity?: string;
      };
      destination?: {
        endpointType:
          | "WebHook"
          | "EventHub"
          | "StorageQueue"
          | "HybridConnection"
          | "ServiceBusQueue"
          | "ServiceBusTopic"
          | "AzureFunction"
          | "MonitorAlert"
          | "NamespaceTopic";
      };
    };
    filter?: {
      subjectBeginsWith?: string;
      subjectEndsWith?: string;
      includedEventTypes?: string[];
      isSubjectCaseSensitive?: boolean;
      enableAdvancedFilteringOnArrays?: boolean;
      advancedFilters?: {
        operatorType:
          | "NumberIn"
          | "NumberNotIn"
          | "NumberLessThan"
          | "NumberGreaterThan"
          | "NumberLessThanOrEquals"
          | "NumberGreaterThanOrEquals"
          | "BoolEquals"
          | "StringIn"
          | "StringNotIn"
          | "StringBeginsWith"
          | "StringEndsWith"
          | "StringContains"
          | "NumberInRange"
          | "NumberNotInRange"
          | "StringNotBeginsWith"
          | "StringNotEndsWith"
          | "StringNotContains"
          | "IsNullOrUndefined"
          | "IsNotNull";
        key?: string;
      }[];
    };
    labels?: string[];
    expirationTimeUtc?: string;
    eventDeliverySchema?:
      | "EventGridSchema"
      | "CustomInputSchema"
      | "CloudEventSchemaV1_0";
    retryPolicy?: {
      maxDeliveryAttempts?: number;
      eventTimeToLiveInMinutes?: number;
    };
    deadLetterDestination?: { endpointType: "StorageBlob" };
    deadLetterWithResourceIdentity?: {
      identity?: {
        type?: "SystemAssigned" | "UserAssigned";
        userAssignedIdentity?: string;
      };
      deadLetterDestination?: { endpointType: "StorageBlob" };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const DomainEventSubscriptionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        topic: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "AwaitingManualAction",
          ]),
        ),
        destination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals([
              "WebHook",
              "EventHub",
              "StorageQueue",
              "HybridConnection",
              "ServiceBusQueue",
              "ServiceBusTopic",
              "AzureFunction",
              "MonitorAlert",
              "NamespaceTopic",
            ]),
          }),
        ),
        deliveryWithResourceIdentity: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["SystemAssigned", "UserAssigned"]),
                ),
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
            destination: Schema.optional(
              Schema.Struct({
                endpointType: Schema.Literals([
                  "WebHook",
                  "EventHub",
                  "StorageQueue",
                  "HybridConnection",
                  "ServiceBusQueue",
                  "ServiceBusTopic",
                  "AzureFunction",
                  "MonitorAlert",
                  "NamespaceTopic",
                ]),
              }),
            ),
          }),
        ),
        filter: Schema.optional(
          Schema.Struct({
            subjectBeginsWith: Schema.optional(Schema.String),
            subjectEndsWith: Schema.optional(Schema.String),
            includedEventTypes: Schema.optional(Schema.Array(Schema.String)),
            isSubjectCaseSensitive: Schema.optional(Schema.Boolean),
            enableAdvancedFilteringOnArrays: Schema.optional(Schema.Boolean),
            advancedFilters: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  operatorType: Schema.Literals([
                    "NumberIn",
                    "NumberNotIn",
                    "NumberLessThan",
                    "NumberGreaterThan",
                    "NumberLessThanOrEquals",
                    "NumberGreaterThanOrEquals",
                    "BoolEquals",
                    "StringIn",
                    "StringNotIn",
                    "StringBeginsWith",
                    "StringEndsWith",
                    "StringContains",
                    "NumberInRange",
                    "NumberNotInRange",
                    "StringNotBeginsWith",
                    "StringNotEndsWith",
                    "StringNotContains",
                    "IsNullOrUndefined",
                    "IsNotNull",
                  ]),
                  key: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        labels: Schema.optional(Schema.Array(Schema.String)),
        expirationTimeUtc: Schema.optional(Schema.String),
        eventDeliverySchema: Schema.optional(
          Schema.Literals([
            "EventGridSchema",
            "CustomInputSchema",
            "CloudEventSchemaV1_0",
          ]),
        ),
        retryPolicy: Schema.optional(
          Schema.Struct({
            maxDeliveryAttempts: Schema.optional(Schema.Number),
            eventTimeToLiveInMinutes: Schema.optional(Schema.Number),
          }),
        ),
        deadLetterDestination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals(["StorageBlob"]),
          }),
        ),
        deadLetterWithResourceIdentity: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["SystemAssigned", "UserAssigned"]),
                ),
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
            deadLetterDestination: Schema.optional(
              Schema.Struct({
                endpointType: Schema.Literals(["StorageBlob"]),
              }),
            ),
          }),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainEventSubscriptionsCreateOrUpdateInput>;

// Output Schema
export interface DomainEventSubscriptionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DomainEventSubscriptionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainEventSubscriptionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an event subscription to a domain.
 *
 * Asynchronously creates a new event subscription or updates an existing event subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain topic.
 * @param eventSubscriptionName - Name of the event subscription to be created. Event subscription names must be between 3 and 64 characters in length and use alphanumeric letters only.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainEventSubscriptionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainEventSubscriptionsCreateOrUpdateInput,
    outputSchema: DomainEventSubscriptionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DomainEventSubscriptionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  eventSubscriptionName: string;
}
export const DomainEventSubscriptionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainEventSubscriptionsDeleteInput>;

// Output Schema
export type DomainEventSubscriptionsDeleteOutput = void;
export const DomainEventSubscriptionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainEventSubscriptionsDeleteOutput>;

// The operation
/**
 * Delete an event subscription for a domain.
 *
 * Delete an existing event subscription for a domain.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param eventSubscriptionName - Name of the event subscription to be deleted.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainEventSubscriptionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainEventSubscriptionsDeleteInput,
    outputSchema: DomainEventSubscriptionsDeleteOutput,
  }));
// Input Schema
export interface DomainEventSubscriptionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  eventSubscriptionName: string;
}
export const DomainEventSubscriptionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainEventSubscriptionsGetInput>;

// Output Schema
export interface DomainEventSubscriptionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DomainEventSubscriptionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainEventSubscriptionsGetOutput>;

// The operation
/**
 * Get an event subscription of a domain.
 *
 * Get properties of an event subscription of a domain.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param eventSubscriptionName - Name of the event subscription to be found.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainEventSubscriptionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainEventSubscriptionsGetInput,
    outputSchema: DomainEventSubscriptionsGetOutput,
  }),
);
// Input Schema
export interface DomainEventSubscriptionsGetDeliveryAttributesInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  eventSubscriptionName: string;
}
export const DomainEventSubscriptionsGetDeliveryAttributesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/eventSubscriptions/{eventSubscriptionName}/getDeliveryAttributes",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainEventSubscriptionsGetDeliveryAttributesInput>;

// Output Schema
export interface DomainEventSubscriptionsGetDeliveryAttributesOutput {
  value?: { name?: string; type: "Static" | "Dynamic" }[];
}
export const DomainEventSubscriptionsGetDeliveryAttributesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.Literals(["Static", "Dynamic"]),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DomainEventSubscriptionsGetDeliveryAttributesOutput>;

// The operation
/**
 * Get delivery attributes for an event subscription for domain.
 *
 * Get all delivery attributes for an event subscription for domain.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param eventSubscriptionName - Name of the event subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainEventSubscriptionsGetDeliveryAttributes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainEventSubscriptionsGetDeliveryAttributesInput,
    outputSchema: DomainEventSubscriptionsGetDeliveryAttributesOutput,
  }));
// Input Schema
export interface DomainEventSubscriptionsGetFullUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  eventSubscriptionName: string;
}
export const DomainEventSubscriptionsGetFullUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/eventSubscriptions/{eventSubscriptionName}/getFullUrl",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainEventSubscriptionsGetFullUrlInput>;

// Output Schema
export interface DomainEventSubscriptionsGetFullUrlOutput {
  endpointUrl?: string;
}
export const DomainEventSubscriptionsGetFullUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointUrl: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainEventSubscriptionsGetFullUrlOutput>;

// The operation
/**
 * Get full URL of an event subscription for domain.
 *
 * Get the full endpoint URL for an event subscription for domain.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain topic.
 * @param eventSubscriptionName - Name of the event subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainEventSubscriptionsGetFullUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainEventSubscriptionsGetFullUrlInput,
    outputSchema: DomainEventSubscriptionsGetFullUrlOutput,
  }));
// Input Schema
export interface DomainEventSubscriptionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  $filter?: string;
  $top?: number;
}
export const DomainEventSubscriptionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainEventSubscriptionsListInput>;

// Output Schema
export interface DomainEventSubscriptionsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const DomainEventSubscriptionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainEventSubscriptionsListOutput>;

// The operation
/**
 * List all event subscriptions for a specific domain.
 *
 * List all event subscriptions that have been created for a specific topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const DomainEventSubscriptionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainEventSubscriptionsListInput,
    outputSchema: DomainEventSubscriptionsListOutput,
  }));
// Input Schema
export interface DomainEventSubscriptionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  eventSubscriptionName: string;
  destination?: {
    endpointType:
      | "WebHook"
      | "EventHub"
      | "StorageQueue"
      | "HybridConnection"
      | "ServiceBusQueue"
      | "ServiceBusTopic"
      | "AzureFunction"
      | "MonitorAlert"
      | "NamespaceTopic";
  };
  deliveryWithResourceIdentity?: {
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string;
    };
    destination?: {
      endpointType:
        | "WebHook"
        | "EventHub"
        | "StorageQueue"
        | "HybridConnection"
        | "ServiceBusQueue"
        | "ServiceBusTopic"
        | "AzureFunction"
        | "MonitorAlert"
        | "NamespaceTopic";
    };
  };
  filter?: {
    subjectBeginsWith?: string;
    subjectEndsWith?: string;
    includedEventTypes?: string[];
    isSubjectCaseSensitive?: boolean;
    enableAdvancedFilteringOnArrays?: boolean;
    advancedFilters?: {
      operatorType:
        | "NumberIn"
        | "NumberNotIn"
        | "NumberLessThan"
        | "NumberGreaterThan"
        | "NumberLessThanOrEquals"
        | "NumberGreaterThanOrEquals"
        | "BoolEquals"
        | "StringIn"
        | "StringNotIn"
        | "StringBeginsWith"
        | "StringEndsWith"
        | "StringContains"
        | "NumberInRange"
        | "NumberNotInRange"
        | "StringNotBeginsWith"
        | "StringNotEndsWith"
        | "StringNotContains"
        | "IsNullOrUndefined"
        | "IsNotNull";
      key?: string;
    }[];
  };
  labels?: string[];
  expirationTimeUtc?: string;
  eventDeliverySchema?:
    | "EventGridSchema"
    | "CustomInputSchema"
    | "CloudEventSchemaV1_0";
  retryPolicy?: {
    maxDeliveryAttempts?: number;
    eventTimeToLiveInMinutes?: number;
  };
  deadLetterDestination?: { endpointType: "StorageBlob" };
  deadLetterWithResourceIdentity?: {
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string;
    };
    deadLetterDestination?: { endpointType: "StorageBlob" };
  };
}
export const DomainEventSubscriptionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
    destination: Schema.optional(
      Schema.Struct({
        endpointType: Schema.Literals([
          "WebHook",
          "EventHub",
          "StorageQueue",
          "HybridConnection",
          "ServiceBusQueue",
          "ServiceBusTopic",
          "AzureFunction",
          "MonitorAlert",
          "NamespaceTopic",
        ]),
      }),
    ),
    deliveryWithResourceIdentity: Schema.optional(
      Schema.Struct({
        identity: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentity: Schema.optional(Schema.String),
          }),
        ),
        destination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals([
              "WebHook",
              "EventHub",
              "StorageQueue",
              "HybridConnection",
              "ServiceBusQueue",
              "ServiceBusTopic",
              "AzureFunction",
              "MonitorAlert",
              "NamespaceTopic",
            ]),
          }),
        ),
      }),
    ),
    filter: Schema.optional(
      Schema.Struct({
        subjectBeginsWith: Schema.optional(Schema.String),
        subjectEndsWith: Schema.optional(Schema.String),
        includedEventTypes: Schema.optional(Schema.Array(Schema.String)),
        isSubjectCaseSensitive: Schema.optional(Schema.Boolean),
        enableAdvancedFilteringOnArrays: Schema.optional(Schema.Boolean),
        advancedFilters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              operatorType: Schema.Literals([
                "NumberIn",
                "NumberNotIn",
                "NumberLessThan",
                "NumberGreaterThan",
                "NumberLessThanOrEquals",
                "NumberGreaterThanOrEquals",
                "BoolEquals",
                "StringIn",
                "StringNotIn",
                "StringBeginsWith",
                "StringEndsWith",
                "StringContains",
                "NumberInRange",
                "NumberNotInRange",
                "StringNotBeginsWith",
                "StringNotEndsWith",
                "StringNotContains",
                "IsNullOrUndefined",
                "IsNotNull",
              ]),
              key: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    labels: Schema.optional(Schema.Array(Schema.String)),
    expirationTimeUtc: Schema.optional(Schema.String),
    eventDeliverySchema: Schema.optional(
      Schema.Literals([
        "EventGridSchema",
        "CustomInputSchema",
        "CloudEventSchemaV1_0",
      ]),
    ),
    retryPolicy: Schema.optional(
      Schema.Struct({
        maxDeliveryAttempts: Schema.optional(Schema.Number),
        eventTimeToLiveInMinutes: Schema.optional(Schema.Number),
      }),
    ),
    deadLetterDestination: Schema.optional(
      Schema.Struct({
        endpointType: Schema.Literals(["StorageBlob"]),
      }),
    ),
    deadLetterWithResourceIdentity: Schema.optional(
      Schema.Struct({
        identity: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentity: Schema.optional(Schema.String),
          }),
        ),
        deadLetterDestination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals(["StorageBlob"]),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainEventSubscriptionsUpdateInput>;

// Output Schema
export interface DomainEventSubscriptionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DomainEventSubscriptionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainEventSubscriptionsUpdateOutput>;

// The operation
/**
 * Update an event subscription for a domain.
 *
 * Update an existing event subscription for a topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param eventSubscriptionName - Name of the event subscription to be updated.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainEventSubscriptionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainEventSubscriptionsUpdateInput,
    outputSchema: DomainEventSubscriptionsUpdateOutput,
  }));
// Input Schema
export interface DomainsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  properties?: {
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
    }[];
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed";
    minimumTlsVersionAllowed?: "1.0" | "1.1" | "1.2";
    endpoint?: string;
    inputSchema?:
      | "EventGridSchema"
      | "CustomEventSchema"
      | "CloudEventSchemaV1_0";
    eventTypeInfo?: {
      kind?: "Inline";
      inlineEventTypes?: Record<
        string,
        {
          description?: string;
          displayName?: string;
          documentationUrl?: string;
          dataSchemaUrl?: string;
        }
      >;
    };
    inputSchemaMapping?: { inputSchemaMappingType: "Json" };
    metricResourceId?: string;
    publicNetworkAccess?: "Enabled" | "Disabled";
    inboundIpRules?: { ipMask?: string; action?: "Allow" }[];
    disableLocalAuth?: boolean;
    autoCreateTopicWithFirstSubscription?: boolean;
    autoDeleteTopicWithLastSubscription?: boolean;
    dataResidencyBoundary?: "WithinGeopair" | "WithinRegion";
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  location: string;
  tags?: Record<string, string>;
}
export const DomainsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
          ]),
        ),
        minimumTlsVersionAllowed: Schema.optional(
          Schema.Literals(["1.0", "1.1", "1.2"]),
        ),
        endpoint: Schema.optional(Schema.String),
        inputSchema: Schema.optional(
          Schema.Literals([
            "EventGridSchema",
            "CustomEventSchema",
            "CloudEventSchemaV1_0",
          ]),
        ),
        eventTypeInfo: Schema.optional(
          Schema.Struct({
            kind: Schema.optional(Schema.Literals(["Inline"])),
            inlineEventTypes: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  description: Schema.optional(Schema.String),
                  displayName: Schema.optional(Schema.String),
                  documentationUrl: Schema.optional(Schema.String),
                  dataSchemaUrl: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        inputSchemaMapping: Schema.optional(
          Schema.Struct({
            inputSchemaMappingType: Schema.Literals(["Json"]),
          }),
        ),
        metricResourceId: Schema.optional(Schema.String),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        inboundIpRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipMask: Schema.optional(Schema.String),
              action: Schema.optional(Schema.Literals(["Allow"])),
            }),
          ),
        ),
        disableLocalAuth: Schema.optional(Schema.Boolean),
        autoCreateTopicWithFirstSubscription: Schema.optional(Schema.Boolean),
        autoDeleteTopicWithLastSubscription: Schema.optional(Schema.Boolean),
        dataResidencyBoundary: Schema.optional(
          Schema.Literals(["WithinGeopair", "WithinRegion"]),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
          ]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainsCreateOrUpdateInput>;

// Output Schema
export interface DomainsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DomainsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a domain.
 *
 * Asynchronously creates or updates a new domain with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsCreateOrUpdateInput,
    outputSchema: DomainsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface DomainsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
}
export const DomainsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  domainName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<DomainsDeleteInput>;

// Output Schema
export type DomainsDeleteOutput = void;
export const DomainsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainsDeleteOutput>;

// The operation
/**
 * Delete a domain.
 *
 * Delete existing domain.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainsDeleteInput,
  outputSchema: DomainsDeleteOutput,
}));
// Input Schema
export interface DomainsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
}
export const DomainsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  domainName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<DomainsGetInput>;

// Output Schema
export interface DomainsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DomainsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<DomainsGetOutput>;

// The operation
/**
 * Get a domain.
 *
 * Get properties of a domain.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainsGetInput,
  outputSchema: DomainsGetOutput,
}));
// Input Schema
export interface DomainsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $top?: number;
}
export const DomainsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainsListByResourceGroupInput>;

// Output Schema
export interface DomainsListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const DomainsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainsListByResourceGroupOutput>;

// The operation
/**
 * List domains under a resource group.
 *
 * List all the domains under a resource group.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const DomainsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsListByResourceGroupInput,
    outputSchema: DomainsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface DomainsListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  $top?: number;
}
export const DomainsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/domains",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainsListBySubscriptionInput>;

// Output Schema
export interface DomainsListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const DomainsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainsListBySubscriptionOutput>;

// The operation
/**
 * List domains under an Azure subscription.
 *
 * List all the domains under an Azure subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const DomainsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsListBySubscriptionInput,
    outputSchema: DomainsListBySubscriptionOutput,
  }),
);
// Input Schema
export interface DomainsListSharedAccessKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
}
export const DomainsListSharedAccessKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/listKeys",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainsListSharedAccessKeysInput>;

// Output Schema
export interface DomainsListSharedAccessKeysOutput {
  key1?: string;
  key2?: string;
}
export const DomainsListSharedAccessKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainsListSharedAccessKeysOutput>;

// The operation
/**
 * List keys for a domain.
 *
 * List the two keys used to publish to a domain.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainsListSharedAccessKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsListSharedAccessKeysInput,
    outputSchema: DomainsListSharedAccessKeysOutput,
  }),
);
// Input Schema
export interface DomainsRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  keyName: string;
}
export const DomainsRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/regenerateKey",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainsRegenerateKeyInput>;

// Output Schema
export interface DomainsRegenerateKeyOutput {
  key1?: string;
  key2?: string;
}
export const DomainsRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainsRegenerateKeyOutput>;

// The operation
/**
 * Regenerate key for a domain.
 *
 * Regenerate a shared access key for a domain.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainsRegenerateKey = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsRegenerateKeyInput,
    outputSchema: DomainsRegenerateKeyOutput,
  }),
);
// Input Schema
export interface DomainsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  tags?: Record<string, string>;
  properties?: {
    publicNetworkAccess?: "Enabled" | "Disabled";
    inboundIpRules?: { ipMask?: string; action?: "Allow" }[];
    minimumTlsVersionAllowed?: "1.0" | "1.1" | "1.2";
    disableLocalAuth?: boolean;
    autoCreateTopicWithFirstSubscription?: boolean;
    autoDeleteTopicWithLastSubscription?: boolean;
    dataResidencyBoundary?: "WithinGeopair" | "WithinRegion";
    eventTypeInfo?: {
      kind?: "Inline";
      inlineEventTypes?: Record<
        string,
        {
          description?: string;
          displayName?: string;
          documentationUrl?: string;
          dataSchemaUrl?: string;
        }
      >;
    };
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const DomainsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  domainName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      inboundIpRules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipMask: Schema.optional(Schema.String),
            action: Schema.optional(Schema.Literals(["Allow"])),
          }),
        ),
      ),
      minimumTlsVersionAllowed: Schema.optional(
        Schema.Literals(["1.0", "1.1", "1.2"]),
      ),
      disableLocalAuth: Schema.optional(Schema.Boolean),
      autoCreateTopicWithFirstSubscription: Schema.optional(Schema.Boolean),
      autoDeleteTopicWithLastSubscription: Schema.optional(Schema.Boolean),
      dataResidencyBoundary: Schema.optional(
        Schema.Literals(["WithinGeopair", "WithinRegion"]),
      ),
      eventTypeInfo: Schema.optional(
        Schema.Struct({
          kind: Schema.optional(Schema.Literals(["Inline"])),
          inlineEventTypes: Schema.optional(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                description: Schema.optional(Schema.String),
                displayName: Schema.optional(Schema.String),
                documentationUrl: Schema.optional(Schema.String),
                dataSchemaUrl: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    }),
  ),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(
        Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned, UserAssigned",
        ]),
      ),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<DomainsUpdateInput>;

// Output Schema
export type DomainsUpdateOutput = void;
export const DomainsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainsUpdateOutput>;

// The operation
/**
 * Update a domain.
 *
 * Asynchronously updates a domain with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainsUpdateInput,
  outputSchema: DomainsUpdateOutput,
}));
// Input Schema
export interface DomainTopicEventSubscriptionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  topicName: string;
  eventSubscriptionName: string;
  properties?: {
    topic?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "AwaitingManualAction";
    destination?: {
      endpointType:
        | "WebHook"
        | "EventHub"
        | "StorageQueue"
        | "HybridConnection"
        | "ServiceBusQueue"
        | "ServiceBusTopic"
        | "AzureFunction"
        | "MonitorAlert"
        | "NamespaceTopic";
    };
    deliveryWithResourceIdentity?: {
      identity?: {
        type?: "SystemAssigned" | "UserAssigned";
        userAssignedIdentity?: string;
      };
      destination?: {
        endpointType:
          | "WebHook"
          | "EventHub"
          | "StorageQueue"
          | "HybridConnection"
          | "ServiceBusQueue"
          | "ServiceBusTopic"
          | "AzureFunction"
          | "MonitorAlert"
          | "NamespaceTopic";
      };
    };
    filter?: {
      subjectBeginsWith?: string;
      subjectEndsWith?: string;
      includedEventTypes?: string[];
      isSubjectCaseSensitive?: boolean;
      enableAdvancedFilteringOnArrays?: boolean;
      advancedFilters?: {
        operatorType:
          | "NumberIn"
          | "NumberNotIn"
          | "NumberLessThan"
          | "NumberGreaterThan"
          | "NumberLessThanOrEquals"
          | "NumberGreaterThanOrEquals"
          | "BoolEquals"
          | "StringIn"
          | "StringNotIn"
          | "StringBeginsWith"
          | "StringEndsWith"
          | "StringContains"
          | "NumberInRange"
          | "NumberNotInRange"
          | "StringNotBeginsWith"
          | "StringNotEndsWith"
          | "StringNotContains"
          | "IsNullOrUndefined"
          | "IsNotNull";
        key?: string;
      }[];
    };
    labels?: string[];
    expirationTimeUtc?: string;
    eventDeliverySchema?:
      | "EventGridSchema"
      | "CustomInputSchema"
      | "CloudEventSchemaV1_0";
    retryPolicy?: {
      maxDeliveryAttempts?: number;
      eventTimeToLiveInMinutes?: number;
    };
    deadLetterDestination?: { endpointType: "StorageBlob" };
    deadLetterWithResourceIdentity?: {
      identity?: {
        type?: "SystemAssigned" | "UserAssigned";
        userAssignedIdentity?: string;
      };
      deadLetterDestination?: { endpointType: "StorageBlob" };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const DomainTopicEventSubscriptionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        topic: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "AwaitingManualAction",
          ]),
        ),
        destination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals([
              "WebHook",
              "EventHub",
              "StorageQueue",
              "HybridConnection",
              "ServiceBusQueue",
              "ServiceBusTopic",
              "AzureFunction",
              "MonitorAlert",
              "NamespaceTopic",
            ]),
          }),
        ),
        deliveryWithResourceIdentity: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["SystemAssigned", "UserAssigned"]),
                ),
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
            destination: Schema.optional(
              Schema.Struct({
                endpointType: Schema.Literals([
                  "WebHook",
                  "EventHub",
                  "StorageQueue",
                  "HybridConnection",
                  "ServiceBusQueue",
                  "ServiceBusTopic",
                  "AzureFunction",
                  "MonitorAlert",
                  "NamespaceTopic",
                ]),
              }),
            ),
          }),
        ),
        filter: Schema.optional(
          Schema.Struct({
            subjectBeginsWith: Schema.optional(Schema.String),
            subjectEndsWith: Schema.optional(Schema.String),
            includedEventTypes: Schema.optional(Schema.Array(Schema.String)),
            isSubjectCaseSensitive: Schema.optional(Schema.Boolean),
            enableAdvancedFilteringOnArrays: Schema.optional(Schema.Boolean),
            advancedFilters: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  operatorType: Schema.Literals([
                    "NumberIn",
                    "NumberNotIn",
                    "NumberLessThan",
                    "NumberGreaterThan",
                    "NumberLessThanOrEquals",
                    "NumberGreaterThanOrEquals",
                    "BoolEquals",
                    "StringIn",
                    "StringNotIn",
                    "StringBeginsWith",
                    "StringEndsWith",
                    "StringContains",
                    "NumberInRange",
                    "NumberNotInRange",
                    "StringNotBeginsWith",
                    "StringNotEndsWith",
                    "StringNotContains",
                    "IsNullOrUndefined",
                    "IsNotNull",
                  ]),
                  key: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        labels: Schema.optional(Schema.Array(Schema.String)),
        expirationTimeUtc: Schema.optional(Schema.String),
        eventDeliverySchema: Schema.optional(
          Schema.Literals([
            "EventGridSchema",
            "CustomInputSchema",
            "CloudEventSchemaV1_0",
          ]),
        ),
        retryPolicy: Schema.optional(
          Schema.Struct({
            maxDeliveryAttempts: Schema.optional(Schema.Number),
            eventTimeToLiveInMinutes: Schema.optional(Schema.Number),
          }),
        ),
        deadLetterDestination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals(["StorageBlob"]),
          }),
        ),
        deadLetterWithResourceIdentity: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["SystemAssigned", "UserAssigned"]),
                ),
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
            deadLetterDestination: Schema.optional(
              Schema.Struct({
                endpointType: Schema.Literals(["StorageBlob"]),
              }),
            ),
          }),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainTopicEventSubscriptionsCreateOrUpdateInput>;

// Output Schema
export interface DomainTopicEventSubscriptionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DomainTopicEventSubscriptionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainTopicEventSubscriptionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a nested event subscription to a domain topic.
 *
 * Asynchronously creates a new event subscription or updates an existing event subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the top level domain.
 * @param topicName - Name of the domain topic.
 * @param eventSubscriptionName - Name of the event subscription to be created. Event subscription names must be between 3 and 64 characters in length and use alphanumeric letters only.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainTopicEventSubscriptionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainTopicEventSubscriptionsCreateOrUpdateInput,
    outputSchema: DomainTopicEventSubscriptionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DomainTopicEventSubscriptionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  topicName: string;
  eventSubscriptionName: string;
}
export const DomainTopicEventSubscriptionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainTopicEventSubscriptionsDeleteInput>;

// Output Schema
export type DomainTopicEventSubscriptionsDeleteOutput = void;
export const DomainTopicEventSubscriptionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainTopicEventSubscriptionsDeleteOutput>;

// The operation
/**
 * Delete a nested event subscription for a domain topic.
 *
 * Delete a nested existing event subscription for a domain topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the top level domain.
 * @param topicName - Name of the domain topic.
 * @param eventSubscriptionName - Name of the event subscription to be deleted.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainTopicEventSubscriptionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainTopicEventSubscriptionsDeleteInput,
    outputSchema: DomainTopicEventSubscriptionsDeleteOutput,
  }));
// Input Schema
export interface DomainTopicEventSubscriptionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  topicName: string;
  eventSubscriptionName: string;
}
export const DomainTopicEventSubscriptionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainTopicEventSubscriptionsGetInput>;

// Output Schema
export interface DomainTopicEventSubscriptionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DomainTopicEventSubscriptionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainTopicEventSubscriptionsGetOutput>;

// The operation
/**
 * Get a nested event subscription for domain topic.
 *
 * Get properties of a nested event subscription for a domain topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the top level domain.
 * @param topicName - Name of the domain topic.
 * @param eventSubscriptionName - Name of the event subscription to be found.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainTopicEventSubscriptionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainTopicEventSubscriptionsGetInput,
    outputSchema: DomainTopicEventSubscriptionsGetOutput,
  }));
// Input Schema
export interface DomainTopicEventSubscriptionsGetDeliveryAttributesInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  topicName: string;
  eventSubscriptionName: string;
}
export const DomainTopicEventSubscriptionsGetDeliveryAttributesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}/getDeliveryAttributes",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainTopicEventSubscriptionsGetDeliveryAttributesInput>;

// Output Schema
export interface DomainTopicEventSubscriptionsGetDeliveryAttributesOutput {
  value?: { name?: string; type: "Static" | "Dynamic" }[];
}
export const DomainTopicEventSubscriptionsGetDeliveryAttributesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.Literals(["Static", "Dynamic"]),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<DomainTopicEventSubscriptionsGetDeliveryAttributesOutput>;

// The operation
/**
 * Get delivery attributes for an event subscription for domain topic.
 *
 * Get all delivery attributes for an event subscription for domain topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the top level domain.
 * @param topicName - Name of the domain topic.
 * @param eventSubscriptionName - Name of the event subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainTopicEventSubscriptionsGetDeliveryAttributes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainTopicEventSubscriptionsGetDeliveryAttributesInput,
    outputSchema: DomainTopicEventSubscriptionsGetDeliveryAttributesOutput,
  }));
// Input Schema
export interface DomainTopicEventSubscriptionsGetFullUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  topicName: string;
  eventSubscriptionName: string;
}
export const DomainTopicEventSubscriptionsGetFullUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}/getFullUrl",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainTopicEventSubscriptionsGetFullUrlInput>;

// Output Schema
export interface DomainTopicEventSubscriptionsGetFullUrlOutput {
  endpointUrl?: string;
}
export const DomainTopicEventSubscriptionsGetFullUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointUrl: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainTopicEventSubscriptionsGetFullUrlOutput>;

// The operation
/**
 * Get full URL of a nested event subscription for domain topic.
 *
 * Get the full endpoint URL for a nested event subscription for domain topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the top level domain.
 * @param topicName - Name of the domain topic.
 * @param eventSubscriptionName - Name of the event subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainTopicEventSubscriptionsGetFullUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainTopicEventSubscriptionsGetFullUrlInput,
    outputSchema: DomainTopicEventSubscriptionsGetFullUrlOutput,
  }));
// Input Schema
export interface DomainTopicEventSubscriptionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  topicName: string;
  $filter?: string;
  $top?: number;
}
export const DomainTopicEventSubscriptionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{topicName}/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainTopicEventSubscriptionsListInput>;

// Output Schema
export interface DomainTopicEventSubscriptionsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const DomainTopicEventSubscriptionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainTopicEventSubscriptionsListOutput>;

// The operation
/**
 * List all nested event subscriptions for a specific domain topic.
 *
 * List all event subscriptions that have been created for a specific domain topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the top level domain.
 * @param topicName - Name of the domain topic.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const DomainTopicEventSubscriptionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainTopicEventSubscriptionsListInput,
    outputSchema: DomainTopicEventSubscriptionsListOutput,
  }));
// Input Schema
export interface DomainTopicEventSubscriptionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  topicName: string;
  eventSubscriptionName: string;
  destination?: {
    endpointType:
      | "WebHook"
      | "EventHub"
      | "StorageQueue"
      | "HybridConnection"
      | "ServiceBusQueue"
      | "ServiceBusTopic"
      | "AzureFunction"
      | "MonitorAlert"
      | "NamespaceTopic";
  };
  deliveryWithResourceIdentity?: {
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string;
    };
    destination?: {
      endpointType:
        | "WebHook"
        | "EventHub"
        | "StorageQueue"
        | "HybridConnection"
        | "ServiceBusQueue"
        | "ServiceBusTopic"
        | "AzureFunction"
        | "MonitorAlert"
        | "NamespaceTopic";
    };
  };
  filter?: {
    subjectBeginsWith?: string;
    subjectEndsWith?: string;
    includedEventTypes?: string[];
    isSubjectCaseSensitive?: boolean;
    enableAdvancedFilteringOnArrays?: boolean;
    advancedFilters?: {
      operatorType:
        | "NumberIn"
        | "NumberNotIn"
        | "NumberLessThan"
        | "NumberGreaterThan"
        | "NumberLessThanOrEquals"
        | "NumberGreaterThanOrEquals"
        | "BoolEquals"
        | "StringIn"
        | "StringNotIn"
        | "StringBeginsWith"
        | "StringEndsWith"
        | "StringContains"
        | "NumberInRange"
        | "NumberNotInRange"
        | "StringNotBeginsWith"
        | "StringNotEndsWith"
        | "StringNotContains"
        | "IsNullOrUndefined"
        | "IsNotNull";
      key?: string;
    }[];
  };
  labels?: string[];
  expirationTimeUtc?: string;
  eventDeliverySchema?:
    | "EventGridSchema"
    | "CustomInputSchema"
    | "CloudEventSchemaV1_0";
  retryPolicy?: {
    maxDeliveryAttempts?: number;
    eventTimeToLiveInMinutes?: number;
  };
  deadLetterDestination?: { endpointType: "StorageBlob" };
  deadLetterWithResourceIdentity?: {
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string;
    };
    deadLetterDestination?: { endpointType: "StorageBlob" };
  };
}
export const DomainTopicEventSubscriptionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
    destination: Schema.optional(
      Schema.Struct({
        endpointType: Schema.Literals([
          "WebHook",
          "EventHub",
          "StorageQueue",
          "HybridConnection",
          "ServiceBusQueue",
          "ServiceBusTopic",
          "AzureFunction",
          "MonitorAlert",
          "NamespaceTopic",
        ]),
      }),
    ),
    deliveryWithResourceIdentity: Schema.optional(
      Schema.Struct({
        identity: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentity: Schema.optional(Schema.String),
          }),
        ),
        destination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals([
              "WebHook",
              "EventHub",
              "StorageQueue",
              "HybridConnection",
              "ServiceBusQueue",
              "ServiceBusTopic",
              "AzureFunction",
              "MonitorAlert",
              "NamespaceTopic",
            ]),
          }),
        ),
      }),
    ),
    filter: Schema.optional(
      Schema.Struct({
        subjectBeginsWith: Schema.optional(Schema.String),
        subjectEndsWith: Schema.optional(Schema.String),
        includedEventTypes: Schema.optional(Schema.Array(Schema.String)),
        isSubjectCaseSensitive: Schema.optional(Schema.Boolean),
        enableAdvancedFilteringOnArrays: Schema.optional(Schema.Boolean),
        advancedFilters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              operatorType: Schema.Literals([
                "NumberIn",
                "NumberNotIn",
                "NumberLessThan",
                "NumberGreaterThan",
                "NumberLessThanOrEquals",
                "NumberGreaterThanOrEquals",
                "BoolEquals",
                "StringIn",
                "StringNotIn",
                "StringBeginsWith",
                "StringEndsWith",
                "StringContains",
                "NumberInRange",
                "NumberNotInRange",
                "StringNotBeginsWith",
                "StringNotEndsWith",
                "StringNotContains",
                "IsNullOrUndefined",
                "IsNotNull",
              ]),
              key: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    labels: Schema.optional(Schema.Array(Schema.String)),
    expirationTimeUtc: Schema.optional(Schema.String),
    eventDeliverySchema: Schema.optional(
      Schema.Literals([
        "EventGridSchema",
        "CustomInputSchema",
        "CloudEventSchemaV1_0",
      ]),
    ),
    retryPolicy: Schema.optional(
      Schema.Struct({
        maxDeliveryAttempts: Schema.optional(Schema.Number),
        eventTimeToLiveInMinutes: Schema.optional(Schema.Number),
      }),
    ),
    deadLetterDestination: Schema.optional(
      Schema.Struct({
        endpointType: Schema.Literals(["StorageBlob"]),
      }),
    ),
    deadLetterWithResourceIdentity: Schema.optional(
      Schema.Struct({
        identity: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentity: Schema.optional(Schema.String),
          }),
        ),
        deadLetterDestination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals(["StorageBlob"]),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainTopicEventSubscriptionsUpdateInput>;

// Output Schema
export interface DomainTopicEventSubscriptionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DomainTopicEventSubscriptionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainTopicEventSubscriptionsUpdateOutput>;

// The operation
/**
 * Update a nested event subscription for a domain topic.
 *
 * Update an existing event subscription for a domain topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param topicName - Name of the topic.
 * @param eventSubscriptionName - Name of the event subscription to be updated.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainTopicEventSubscriptionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainTopicEventSubscriptionsUpdateInput,
    outputSchema: DomainTopicEventSubscriptionsUpdateOutput,
  }));
// Input Schema
export interface DomainTopicsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  domainTopicName: string;
}
export const DomainTopicsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    domainTopicName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{domainTopicName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainTopicsCreateOrUpdateInput>;

// Output Schema
export interface DomainTopicsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DomainTopicsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainTopicsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a domain topic.
 *
 * Asynchronously creates or updates a new domain topic with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param domainTopicName - Name of the domain topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainTopicsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainTopicsCreateOrUpdateInput,
    outputSchema: DomainTopicsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface DomainTopicsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  domainTopicName: string;
}
export const DomainTopicsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    domainTopicName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{domainTopicName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainTopicsDeleteInput>;

// Output Schema
export type DomainTopicsDeleteOutput = void;
export const DomainTopicsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DomainTopicsDeleteOutput>;

// The operation
/**
 * Delete a domain topic.
 *
 * Delete existing domain topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param domainTopicName - Name of the domain topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainTopicsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainTopicsDeleteInput,
  outputSchema: DomainTopicsDeleteOutput,
}));
// Input Schema
export interface DomainTopicsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  domainTopicName: string;
}
export const DomainTopicsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  domainName: Schema.String.pipe(T.PathParam()),
  domainTopicName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{domainTopicName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<DomainTopicsGetInput>;

// Output Schema
export interface DomainTopicsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const DomainTopicsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<DomainTopicsGetOutput>;

// The operation
/**
 * Get a domain topic.
 *
 * Get properties of a domain topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the domain.
 * @param domainTopicName - Name of the topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const DomainTopicsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DomainTopicsGetInput,
  outputSchema: DomainTopicsGetOutput,
}));
// Input Schema
export interface DomainTopicsListByDomainInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  $filter?: string;
  $top?: number;
}
export const DomainTopicsListByDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<DomainTopicsListByDomainInput>;

// Output Schema
export interface DomainTopicsListByDomainOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const DomainTopicsListByDomainOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DomainTopicsListByDomainOutput>;

// The operation
/**
 * List domain topics.
 *
 * List all the topics in a domain.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Domain name.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const DomainTopicsListByDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainTopicsListByDomainInput,
    outputSchema: DomainTopicsListByDomainOutput,
  }),
);
// Input Schema
export interface EventSubscriptionsCreateOrUpdateInput {
  scope: string;
  eventSubscriptionName: string;
  properties?: {
    topic?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "AwaitingManualAction";
    destination?: {
      endpointType:
        | "WebHook"
        | "EventHub"
        | "StorageQueue"
        | "HybridConnection"
        | "ServiceBusQueue"
        | "ServiceBusTopic"
        | "AzureFunction"
        | "MonitorAlert"
        | "NamespaceTopic";
    };
    deliveryWithResourceIdentity?: {
      identity?: {
        type?: "SystemAssigned" | "UserAssigned";
        userAssignedIdentity?: string;
      };
      destination?: {
        endpointType:
          | "WebHook"
          | "EventHub"
          | "StorageQueue"
          | "HybridConnection"
          | "ServiceBusQueue"
          | "ServiceBusTopic"
          | "AzureFunction"
          | "MonitorAlert"
          | "NamespaceTopic";
      };
    };
    filter?: {
      subjectBeginsWith?: string;
      subjectEndsWith?: string;
      includedEventTypes?: string[];
      isSubjectCaseSensitive?: boolean;
      enableAdvancedFilteringOnArrays?: boolean;
      advancedFilters?: {
        operatorType:
          | "NumberIn"
          | "NumberNotIn"
          | "NumberLessThan"
          | "NumberGreaterThan"
          | "NumberLessThanOrEquals"
          | "NumberGreaterThanOrEquals"
          | "BoolEquals"
          | "StringIn"
          | "StringNotIn"
          | "StringBeginsWith"
          | "StringEndsWith"
          | "StringContains"
          | "NumberInRange"
          | "NumberNotInRange"
          | "StringNotBeginsWith"
          | "StringNotEndsWith"
          | "StringNotContains"
          | "IsNullOrUndefined"
          | "IsNotNull";
        key?: string;
      }[];
    };
    labels?: string[];
    expirationTimeUtc?: string;
    eventDeliverySchema?:
      | "EventGridSchema"
      | "CustomInputSchema"
      | "CloudEventSchemaV1_0";
    retryPolicy?: {
      maxDeliveryAttempts?: number;
      eventTimeToLiveInMinutes?: number;
    };
    deadLetterDestination?: { endpointType: "StorageBlob" };
    deadLetterWithResourceIdentity?: {
      identity?: {
        type?: "SystemAssigned" | "UserAssigned";
        userAssignedIdentity?: string;
      };
      deadLetterDestination?: { endpointType: "StorageBlob" };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const EventSubscriptionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        topic: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "AwaitingManualAction",
          ]),
        ),
        destination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals([
              "WebHook",
              "EventHub",
              "StorageQueue",
              "HybridConnection",
              "ServiceBusQueue",
              "ServiceBusTopic",
              "AzureFunction",
              "MonitorAlert",
              "NamespaceTopic",
            ]),
          }),
        ),
        deliveryWithResourceIdentity: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["SystemAssigned", "UserAssigned"]),
                ),
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
            destination: Schema.optional(
              Schema.Struct({
                endpointType: Schema.Literals([
                  "WebHook",
                  "EventHub",
                  "StorageQueue",
                  "HybridConnection",
                  "ServiceBusQueue",
                  "ServiceBusTopic",
                  "AzureFunction",
                  "MonitorAlert",
                  "NamespaceTopic",
                ]),
              }),
            ),
          }),
        ),
        filter: Schema.optional(
          Schema.Struct({
            subjectBeginsWith: Schema.optional(Schema.String),
            subjectEndsWith: Schema.optional(Schema.String),
            includedEventTypes: Schema.optional(Schema.Array(Schema.String)),
            isSubjectCaseSensitive: Schema.optional(Schema.Boolean),
            enableAdvancedFilteringOnArrays: Schema.optional(Schema.Boolean),
            advancedFilters: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  operatorType: Schema.Literals([
                    "NumberIn",
                    "NumberNotIn",
                    "NumberLessThan",
                    "NumberGreaterThan",
                    "NumberLessThanOrEquals",
                    "NumberGreaterThanOrEquals",
                    "BoolEquals",
                    "StringIn",
                    "StringNotIn",
                    "StringBeginsWith",
                    "StringEndsWith",
                    "StringContains",
                    "NumberInRange",
                    "NumberNotInRange",
                    "StringNotBeginsWith",
                    "StringNotEndsWith",
                    "StringNotContains",
                    "IsNullOrUndefined",
                    "IsNotNull",
                  ]),
                  key: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        labels: Schema.optional(Schema.Array(Schema.String)),
        expirationTimeUtc: Schema.optional(Schema.String),
        eventDeliverySchema: Schema.optional(
          Schema.Literals([
            "EventGridSchema",
            "CustomInputSchema",
            "CloudEventSchemaV1_0",
          ]),
        ),
        retryPolicy: Schema.optional(
          Schema.Struct({
            maxDeliveryAttempts: Schema.optional(Schema.Number),
            eventTimeToLiveInMinutes: Schema.optional(Schema.Number),
          }),
        ),
        deadLetterDestination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals(["StorageBlob"]),
          }),
        ),
        deadLetterWithResourceIdentity: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["SystemAssigned", "UserAssigned"]),
                ),
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
            deadLetterDestination: Schema.optional(
              Schema.Struct({
                endpointType: Schema.Literals(["StorageBlob"]),
              }),
            ),
          }),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsCreateOrUpdateInput>;

// Output Schema
export interface EventSubscriptionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const EventSubscriptionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSubscriptionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an event subscription.
 *
 * Asynchronously creates a new event subscription or updates an existing event subscription based on the specified scope.
 *
 * @param scope - The identifier of the resource to which the event subscription needs to be created or updated. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
 * @param eventSubscriptionName - Name of the event subscription to be created. Event subscription names must be between 3 and 64 characters in length and should use alphanumeric letters only.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EventSubscriptionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventSubscriptionsCreateOrUpdateInput,
    outputSchema: EventSubscriptionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface EventSubscriptionsDeleteInput {
  scope: string;
  eventSubscriptionName: string;
}
export const EventSubscriptionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsDeleteInput>;

// Output Schema
export type EventSubscriptionsDeleteOutput = void;
export const EventSubscriptionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<EventSubscriptionsDeleteOutput>;

// The operation
/**
 * Delete an event subscription.
 *
 * Delete an existing event subscription.
 *
 * @param scope - The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
 * @param eventSubscriptionName - Name of the event subscription to be deleted.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EventSubscriptionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EventSubscriptionsDeleteInput,
    outputSchema: EventSubscriptionsDeleteOutput,
  }),
);
// Input Schema
export interface EventSubscriptionsGetInput {
  scope: string;
  eventSubscriptionName: string;
}
export const EventSubscriptionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsGetInput>;

// Output Schema
export interface EventSubscriptionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const EventSubscriptionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSubscriptionsGetOutput>;

// The operation
/**
 * Get an event subscription.
 *
 * Get properties of an event subscription.
 *
 * @param scope - The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
 * @param eventSubscriptionName - Name of the event subscription to be found.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EventSubscriptionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EventSubscriptionsGetInput,
    outputSchema: EventSubscriptionsGetOutput,
  }),
);
// Input Schema
export interface EventSubscriptionsGetDeliveryAttributesInput {
  scope: string;
  eventSubscriptionName: string;
}
export const EventSubscriptionsGetDeliveryAttributesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName}/getDeliveryAttributes",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsGetDeliveryAttributesInput>;

// Output Schema
export interface EventSubscriptionsGetDeliveryAttributesOutput {
  value?: { name?: string; type: "Static" | "Dynamic" }[];
}
export const EventSubscriptionsGetDeliveryAttributesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.Literals(["Static", "Dynamic"]),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<EventSubscriptionsGetDeliveryAttributesOutput>;

// The operation
/**
 * Get delivery attributes for an event subscription.
 *
 * Get all delivery attributes for an event subscription.
 *
 * @param scope - The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
 * @param eventSubscriptionName - Name of the event subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EventSubscriptionsGetDeliveryAttributes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventSubscriptionsGetDeliveryAttributesInput,
    outputSchema: EventSubscriptionsGetDeliveryAttributesOutput,
  }));
// Input Schema
export interface EventSubscriptionsGetFullUrlInput {
  scope: string;
  eventSubscriptionName: string;
}
export const EventSubscriptionsGetFullUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/{scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName}/getFullUrl",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsGetFullUrlInput>;

// Output Schema
export interface EventSubscriptionsGetFullUrlOutput {
  endpointUrl?: string;
}
export const EventSubscriptionsGetFullUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointUrl: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSubscriptionsGetFullUrlOutput>;

// The operation
/**
 * Get full URL of an event subscription.
 *
 * Get the full endpoint URL for an event subscription.
 *
 * @param scope - The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
 * @param eventSubscriptionName - Name of the event subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EventSubscriptionsGetFullUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventSubscriptionsGetFullUrlInput,
    outputSchema: EventSubscriptionsGetFullUrlOutput,
  }));
// Input Schema
export interface EventSubscriptionsListByDomainTopicInput {
  subscriptionId: string;
  resourceGroupName: string;
  domainName: string;
  topicName: string;
  $filter?: string;
  $top?: number;
}
export const EventSubscriptionsListByDomainTopicInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    domainName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/topics/{topicName}/providers/Microsoft.EventGrid/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsListByDomainTopicInput>;

// Output Schema
export interface EventSubscriptionsListByDomainTopicOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const EventSubscriptionsListByDomainTopicOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSubscriptionsListByDomainTopicOutput>;

// The operation
/**
 * List all event subscriptions for a specific domain topic.
 *
 * List all event subscriptions that have been created for a specific domain topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param domainName - Name of the top level domain.
 * @param topicName - Name of the domain topic.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const EventSubscriptionsListByDomainTopic =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventSubscriptionsListByDomainTopicInput,
    outputSchema: EventSubscriptionsListByDomainTopicOutput,
  }));
// Input Schema
export interface EventSubscriptionsListByResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerNamespace: string;
  resourceTypeName: string;
  resourceName: string;
  $filter?: string;
  $top?: number;
}
export const EventSubscriptionsListByResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceTypeName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{providerNamespace}/{resourceTypeName}/{resourceName}/providers/Microsoft.EventGrid/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsListByResourceInput>;

// Output Schema
export interface EventSubscriptionsListByResourceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const EventSubscriptionsListByResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSubscriptionsListByResourceOutput>;

// The operation
/**
 * List all event subscriptions.
 *
 * List all event subscriptions that have been created for a specific resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param providerNamespace - Namespace of the provider of the topic.
 * @param resourceTypeName - Name of the resource type.
 * @param resourceName - Name of the resource.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const EventSubscriptionsListByResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventSubscriptionsListByResourceInput,
    outputSchema: EventSubscriptionsListByResourceOutput,
  }));
// Input Schema
export interface EventSubscriptionsListGlobalByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $top?: number;
}
export const EventSubscriptionsListGlobalByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsListGlobalByResourceGroupInput>;

// Output Schema
export interface EventSubscriptionsListGlobalByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const EventSubscriptionsListGlobalByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSubscriptionsListGlobalByResourceGroupOutput>;

// The operation
/**
 * List all global event subscriptions under an Azure subscription and resource group.
 *
 * List all global event subscriptions under a specific Azure subscription and resource group.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const EventSubscriptionsListGlobalByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventSubscriptionsListGlobalByResourceGroupInput,
    outputSchema: EventSubscriptionsListGlobalByResourceGroupOutput,
  }));
// Input Schema
export interface EventSubscriptionsListGlobalByResourceGroupForTopicTypeInput {
  subscriptionId: string;
  resourceGroupName: string;
  topicTypeName: string;
  $filter?: string;
  $top?: number;
}
export const EventSubscriptionsListGlobalByResourceGroupForTopicTypeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    topicTypeName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topicTypes/{topicTypeName}/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsListGlobalByResourceGroupForTopicTypeInput>;

// Output Schema
export interface EventSubscriptionsListGlobalByResourceGroupForTopicTypeOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const EventSubscriptionsListGlobalByResourceGroupForTopicTypeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSubscriptionsListGlobalByResourceGroupForTopicTypeOutput>;

// The operation
/**
 * List all global event subscriptions under a resource group for a topic type.
 *
 * List all global event subscriptions under a resource group for a specific topic type.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param topicTypeName - Name of the topic type.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const EventSubscriptionsListGlobalByResourceGroupForTopicType =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventSubscriptionsListGlobalByResourceGroupForTopicTypeInput,
    outputSchema: EventSubscriptionsListGlobalByResourceGroupForTopicTypeOutput,
  }));
// Input Schema
export interface EventSubscriptionsListGlobalBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  $top?: number;
}
export const EventSubscriptionsListGlobalBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsListGlobalBySubscriptionInput>;

// Output Schema
export interface EventSubscriptionsListGlobalBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const EventSubscriptionsListGlobalBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSubscriptionsListGlobalBySubscriptionOutput>;

// The operation
/**
 * Get an aggregated list of all global event subscriptions under an Azure subscription.
 *
 * List all aggregated global event subscriptions under a specific Azure subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const EventSubscriptionsListGlobalBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventSubscriptionsListGlobalBySubscriptionInput,
    outputSchema: EventSubscriptionsListGlobalBySubscriptionOutput,
  }));
// Input Schema
export interface EventSubscriptionsListGlobalBySubscriptionForTopicTypeInput {
  subscriptionId: string;
  topicTypeName: string;
  $filter?: string;
  $top?: number;
}
export const EventSubscriptionsListGlobalBySubscriptionForTopicTypeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    topicTypeName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/topicTypes/{topicTypeName}/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsListGlobalBySubscriptionForTopicTypeInput>;

// Output Schema
export interface EventSubscriptionsListGlobalBySubscriptionForTopicTypeOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const EventSubscriptionsListGlobalBySubscriptionForTopicTypeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSubscriptionsListGlobalBySubscriptionForTopicTypeOutput>;

// The operation
/**
 * List all global event subscriptions for a topic type.
 *
 * List all global event subscriptions under an Azure subscription for a topic type.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param topicTypeName - Name of the topic type.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const EventSubscriptionsListGlobalBySubscriptionForTopicType =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventSubscriptionsListGlobalBySubscriptionForTopicTypeInput,
    outputSchema: EventSubscriptionsListGlobalBySubscriptionForTopicTypeOutput,
  }));
// Input Schema
export interface EventSubscriptionsListRegionalByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  $filter?: string;
  $top?: number;
}
export const EventSubscriptionsListRegionalByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/locations/{location}/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsListRegionalByResourceGroupInput>;

// Output Schema
export interface EventSubscriptionsListRegionalByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const EventSubscriptionsListRegionalByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSubscriptionsListRegionalByResourceGroupOutput>;

// The operation
/**
 * List all regional event subscriptions under an Azure subscription and resource group.
 *
 * List all event subscriptions from the given location under a specific Azure subscription and resource group.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param location - Name of the location.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const EventSubscriptionsListRegionalByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventSubscriptionsListRegionalByResourceGroupInput,
    outputSchema: EventSubscriptionsListRegionalByResourceGroupOutput,
  }));
// Input Schema
export interface EventSubscriptionsListRegionalByResourceGroupForTopicTypeInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  topicTypeName: string;
  $filter?: string;
  $top?: number;
}
export const EventSubscriptionsListRegionalByResourceGroupForTopicTypeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    topicTypeName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/locations/{location}/topicTypes/{topicTypeName}/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsListRegionalByResourceGroupForTopicTypeInput>;

// Output Schema
export interface EventSubscriptionsListRegionalByResourceGroupForTopicTypeOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const EventSubscriptionsListRegionalByResourceGroupForTopicTypeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSubscriptionsListRegionalByResourceGroupForTopicTypeOutput>;

// The operation
/**
 * List all regional event subscriptions under an Azure subscription and resource group for a topic type.
 *
 * List all event subscriptions from the given location under a specific Azure subscription and resource group and topic type.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param location - Name of the location.
 * @param topicTypeName - Name of the topic type.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const EventSubscriptionsListRegionalByResourceGroupForTopicType =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventSubscriptionsListRegionalByResourceGroupForTopicTypeInput,
    outputSchema:
      EventSubscriptionsListRegionalByResourceGroupForTopicTypeOutput,
  }));
// Input Schema
export interface EventSubscriptionsListRegionalBySubscriptionInput {
  subscriptionId: string;
  location: string;
  $filter?: string;
  $top?: number;
}
export const EventSubscriptionsListRegionalBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/locations/{location}/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsListRegionalBySubscriptionInput>;

// Output Schema
export interface EventSubscriptionsListRegionalBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const EventSubscriptionsListRegionalBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSubscriptionsListRegionalBySubscriptionOutput>;

// The operation
/**
 * List all regional event subscriptions under an Azure subscription.
 *
 * List all event subscriptions from the given location under a specific Azure subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - Name of the location.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const EventSubscriptionsListRegionalBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventSubscriptionsListRegionalBySubscriptionInput,
    outputSchema: EventSubscriptionsListRegionalBySubscriptionOutput,
  }));
// Input Schema
export interface EventSubscriptionsListRegionalBySubscriptionForTopicTypeInput {
  subscriptionId: string;
  location: string;
  topicTypeName: string;
  $filter?: string;
  $top?: number;
}
export const EventSubscriptionsListRegionalBySubscriptionForTopicTypeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    topicTypeName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/locations/{location}/topicTypes/{topicTypeName}/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsListRegionalBySubscriptionForTopicTypeInput>;

// Output Schema
export interface EventSubscriptionsListRegionalBySubscriptionForTopicTypeOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const EventSubscriptionsListRegionalBySubscriptionForTopicTypeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSubscriptionsListRegionalBySubscriptionForTopicTypeOutput>;

// The operation
/**
 * List all regional event subscriptions under an Azure subscription for a topic type.
 *
 * List all event subscriptions from the given location under a specific Azure subscription and topic type.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param location - Name of the location.
 * @param topicTypeName - Name of the topic type.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const EventSubscriptionsListRegionalBySubscriptionForTopicType =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventSubscriptionsListRegionalBySubscriptionForTopicTypeInput,
    outputSchema:
      EventSubscriptionsListRegionalBySubscriptionForTopicTypeOutput,
  }));
// Input Schema
export interface EventSubscriptionsUpdateInput {
  scope: string;
  eventSubscriptionName: string;
  destination?: {
    endpointType:
      | "WebHook"
      | "EventHub"
      | "StorageQueue"
      | "HybridConnection"
      | "ServiceBusQueue"
      | "ServiceBusTopic"
      | "AzureFunction"
      | "MonitorAlert"
      | "NamespaceTopic";
  };
  deliveryWithResourceIdentity?: {
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string;
    };
    destination?: {
      endpointType:
        | "WebHook"
        | "EventHub"
        | "StorageQueue"
        | "HybridConnection"
        | "ServiceBusQueue"
        | "ServiceBusTopic"
        | "AzureFunction"
        | "MonitorAlert"
        | "NamespaceTopic";
    };
  };
  filter?: {
    subjectBeginsWith?: string;
    subjectEndsWith?: string;
    includedEventTypes?: string[];
    isSubjectCaseSensitive?: boolean;
    enableAdvancedFilteringOnArrays?: boolean;
    advancedFilters?: {
      operatorType:
        | "NumberIn"
        | "NumberNotIn"
        | "NumberLessThan"
        | "NumberGreaterThan"
        | "NumberLessThanOrEquals"
        | "NumberGreaterThanOrEquals"
        | "BoolEquals"
        | "StringIn"
        | "StringNotIn"
        | "StringBeginsWith"
        | "StringEndsWith"
        | "StringContains"
        | "NumberInRange"
        | "NumberNotInRange"
        | "StringNotBeginsWith"
        | "StringNotEndsWith"
        | "StringNotContains"
        | "IsNullOrUndefined"
        | "IsNotNull";
      key?: string;
    }[];
  };
  labels?: string[];
  expirationTimeUtc?: string;
  eventDeliverySchema?:
    | "EventGridSchema"
    | "CustomInputSchema"
    | "CloudEventSchemaV1_0";
  retryPolicy?: {
    maxDeliveryAttempts?: number;
    eventTimeToLiveInMinutes?: number;
  };
  deadLetterDestination?: { endpointType: "StorageBlob" };
  deadLetterWithResourceIdentity?: {
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string;
    };
    deadLetterDestination?: { endpointType: "StorageBlob" };
  };
}
export const EventSubscriptionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
    destination: Schema.optional(
      Schema.Struct({
        endpointType: Schema.Literals([
          "WebHook",
          "EventHub",
          "StorageQueue",
          "HybridConnection",
          "ServiceBusQueue",
          "ServiceBusTopic",
          "AzureFunction",
          "MonitorAlert",
          "NamespaceTopic",
        ]),
      }),
    ),
    deliveryWithResourceIdentity: Schema.optional(
      Schema.Struct({
        identity: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentity: Schema.optional(Schema.String),
          }),
        ),
        destination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals([
              "WebHook",
              "EventHub",
              "StorageQueue",
              "HybridConnection",
              "ServiceBusQueue",
              "ServiceBusTopic",
              "AzureFunction",
              "MonitorAlert",
              "NamespaceTopic",
            ]),
          }),
        ),
      }),
    ),
    filter: Schema.optional(
      Schema.Struct({
        subjectBeginsWith: Schema.optional(Schema.String),
        subjectEndsWith: Schema.optional(Schema.String),
        includedEventTypes: Schema.optional(Schema.Array(Schema.String)),
        isSubjectCaseSensitive: Schema.optional(Schema.Boolean),
        enableAdvancedFilteringOnArrays: Schema.optional(Schema.Boolean),
        advancedFilters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              operatorType: Schema.Literals([
                "NumberIn",
                "NumberNotIn",
                "NumberLessThan",
                "NumberGreaterThan",
                "NumberLessThanOrEquals",
                "NumberGreaterThanOrEquals",
                "BoolEquals",
                "StringIn",
                "StringNotIn",
                "StringBeginsWith",
                "StringEndsWith",
                "StringContains",
                "NumberInRange",
                "NumberNotInRange",
                "StringNotBeginsWith",
                "StringNotEndsWith",
                "StringNotContains",
                "IsNullOrUndefined",
                "IsNotNull",
              ]),
              key: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    labels: Schema.optional(Schema.Array(Schema.String)),
    expirationTimeUtc: Schema.optional(Schema.String),
    eventDeliverySchema: Schema.optional(
      Schema.Literals([
        "EventGridSchema",
        "CustomInputSchema",
        "CloudEventSchemaV1_0",
      ]),
    ),
    retryPolicy: Schema.optional(
      Schema.Struct({
        maxDeliveryAttempts: Schema.optional(Schema.Number),
        eventTimeToLiveInMinutes: Schema.optional(Schema.Number),
      }),
    ),
    deadLetterDestination: Schema.optional(
      Schema.Struct({
        endpointType: Schema.Literals(["StorageBlob"]),
      }),
    ),
    deadLetterWithResourceIdentity: Schema.optional(
      Schema.Struct({
        identity: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentity: Schema.optional(Schema.String),
          }),
        ),
        deadLetterDestination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals(["StorageBlob"]),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/{scope}/providers/Microsoft.EventGrid/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<EventSubscriptionsUpdateInput>;

// Output Schema
export interface EventSubscriptionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const EventSubscriptionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventSubscriptionsUpdateOutput>;

// The operation
/**
 * Update an event subscription.
 *
 * Asynchronously updates an existing event subscription.
 *
 * @param scope - The scope of existing event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
 * @param eventSubscriptionName - Name of the event subscription to be updated.
 * @param api-version - Version of the API to be used with the client request.
 */
export const EventSubscriptionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EventSubscriptionsUpdateInput,
    outputSchema: EventSubscriptionsUpdateOutput,
  }),
);
// Input Schema
export interface ExtensionTopicsGetInput {
  scope: string;
}
export const ExtensionTopicsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.EventGrid/extensionTopics/default",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<ExtensionTopicsGetInput>;

// Output Schema
export interface ExtensionTopicsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const ExtensionTopicsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ExtensionTopicsGetOutput>;

// The operation
/**
 * Get properties of an extension topic.
 *
 * Get the properties of an extension topic.
 *
 * @param scope - The identifier of the resource to which extension topic is queried. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for Azure resource.
 * @param api-version - Version of the API to be used with the client request.
 */
export const ExtensionTopicsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExtensionTopicsGetInput,
  outputSchema: ExtensionTopicsGetOutput,
}));
// Input Schema
export interface NamespacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  properties?: {
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
    }[];
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "Deleted"
      | "DeleteFailed"
      | "CreateFailed"
      | "UpdatedFailed";
    topicsConfiguration?: {
      hostname?: string;
      customDomains?: {
        fullyQualifiedDomainName: string;
        validationState?: "Pending" | "Approved" | "ErrorRetrievingDnsRecord";
        identity?: {
          type?: "SystemAssigned" | "UserAssigned";
          userAssignedIdentity?: string;
        };
        certificateUrl?: string;
        expectedTxtRecordName?: string;
        expectedTxtRecordValue?: string;
      }[];
    };
    topicSpacesConfiguration?: {
      state?: "Disabled" | "Enabled";
      routeTopicResourceId?: string;
      hostname?: string;
      routingEnrichments?: {
        static?: { key?: string; valueType: "String" }[];
        dynamic?: { key?: string; value?: string }[];
      };
      maximumSessionExpiryInHours?: number;
      maximumClientSessionsPerAuthenticationName?: number;
      routingIdentityInfo?: {
        type?: "None" | "SystemAssigned" | "UserAssigned";
        userAssignedIdentity?: string;
      };
      customDomains?: {
        fullyQualifiedDomainName: string;
        validationState?: "Pending" | "Approved" | "ErrorRetrievingDnsRecord";
        identity?: {
          type?: "SystemAssigned" | "UserAssigned";
          userAssignedIdentity?: string;
        };
        certificateUrl?: string;
        expectedTxtRecordName?: string;
        expectedTxtRecordValue?: string;
      }[];
    };
    isZoneRedundant?: boolean;
    publicNetworkAccess?: "Enabled" | "Disabled";
    inboundIpRules?: { ipMask?: string; action?: "Allow" }[];
    minimumTlsVersionAllowed?: "1.0" | "1.1" | "1.2";
  };
  sku?: { name?: "Standard"; capacity?: number };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  location: string;
  tags?: Record<string, string>;
}
export const NamespacesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "Deleted",
            "DeleteFailed",
            "CreateFailed",
            "UpdatedFailed",
          ]),
        ),
        topicsConfiguration: Schema.optional(
          Schema.Struct({
            hostname: Schema.optional(Schema.String),
            customDomains: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  fullyQualifiedDomainName: Schema.String,
                  validationState: Schema.optional(
                    Schema.Literals([
                      "Pending",
                      "Approved",
                      "ErrorRetrievingDnsRecord",
                    ]),
                  ),
                  identity: Schema.optional(
                    Schema.Struct({
                      type: Schema.optional(
                        Schema.Literals(["SystemAssigned", "UserAssigned"]),
                      ),
                      userAssignedIdentity: Schema.optional(Schema.String),
                    }),
                  ),
                  certificateUrl: Schema.optional(Schema.String),
                  expectedTxtRecordName: Schema.optional(Schema.String),
                  expectedTxtRecordValue: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        topicSpacesConfiguration: Schema.optional(
          Schema.Struct({
            state: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
            routeTopicResourceId: Schema.optional(Schema.String),
            hostname: Schema.optional(Schema.String),
            routingEnrichments: Schema.optional(
              Schema.Struct({
                static: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      key: Schema.optional(Schema.String),
                      valueType: Schema.Literals(["String"]),
                    }),
                  ),
                ),
                dynamic: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      key: Schema.optional(Schema.String),
                      value: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
            maximumSessionExpiryInHours: Schema.optional(Schema.Number),
            maximumClientSessionsPerAuthenticationName: Schema.optional(
              Schema.Number,
            ),
            routingIdentityInfo: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
                ),
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
            customDomains: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  fullyQualifiedDomainName: Schema.String,
                  validationState: Schema.optional(
                    Schema.Literals([
                      "Pending",
                      "Approved",
                      "ErrorRetrievingDnsRecord",
                    ]),
                  ),
                  identity: Schema.optional(
                    Schema.Struct({
                      type: Schema.optional(
                        Schema.Literals(["SystemAssigned", "UserAssigned"]),
                      ),
                      userAssignedIdentity: Schema.optional(Schema.String),
                    }),
                  ),
                  certificateUrl: Schema.optional(Schema.String),
                  expectedTxtRecordName: Schema.optional(Schema.String),
                  expectedTxtRecordValue: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        isZoneRedundant: Schema.optional(Schema.Boolean),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        inboundIpRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipMask: Schema.optional(Schema.String),
              action: Schema.optional(Schema.Literals(["Allow"])),
            }),
          ),
        ),
        minimumTlsVersionAllowed: Schema.optional(
          Schema.Literals(["1.0", "1.1", "1.2"]),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.Literals(["Standard"])),
        capacity: Schema.optional(Schema.Number),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
          ]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespacesCreateOrUpdateInput>;

// Output Schema
export interface NamespacesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const NamespacesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespacesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a namespace.
 *
 * Asynchronously creates or updates a new namespace with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespacesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NamespacesCreateOrUpdateInput,
    outputSchema: NamespacesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface NamespacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<NamespacesDeleteInput>;

// Output Schema
export type NamespacesDeleteOutput = void;
export const NamespacesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespacesDeleteOutput>;

// The operation
/**
 * Delete a namespace.
 *
 * Delete existing namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespacesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NamespacesDeleteInput,
  outputSchema: NamespacesDeleteOutput,
}));
// Input Schema
export interface NamespacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<NamespacesGetInput>;

// Output Schema
export interface NamespacesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const NamespacesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<NamespacesGetOutput>;

// The operation
/**
 * Get a namespace.
 *
 * Get properties of a namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NamespacesGetInput,
  outputSchema: NamespacesGetOutput,
}));
// Input Schema
export interface NamespacesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $top?: number;
}
export const NamespacesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespacesListByResourceGroupInput>;

// Output Schema
export interface NamespacesListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const NamespacesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespacesListByResourceGroupOutput>;

// The operation
/**
 * List namespaces under a resource group.
 *
 * List all the namespaces under a resource group.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const NamespacesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespacesListByResourceGroupInput,
    outputSchema: NamespacesListByResourceGroupOutput,
  }));
// Input Schema
export interface NamespacesListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  $top?: number;
}
export const NamespacesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/namespaces",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespacesListBySubscriptionInput>;

// Output Schema
export interface NamespacesListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const NamespacesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespacesListBySubscriptionOutput>;

// The operation
/**
 * List namespaces under an Azure subscription.
 *
 * List all the namespaces under an Azure subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const NamespacesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespacesListBySubscriptionInput,
    outputSchema: NamespacesListBySubscriptionOutput,
  }));
// Input Schema
export interface NamespacesListSharedAccessKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesListSharedAccessKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/listKeys",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespacesListSharedAccessKeysInput>;

// Output Schema
export interface NamespacesListSharedAccessKeysOutput {
  key1?: string;
  key2?: string;
}
export const NamespacesListSharedAccessKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespacesListSharedAccessKeysOutput>;

// The operation
/**
 * List keys for a namespace.
 *
 * List the two keys used to publish to a namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespacesListSharedAccessKeys =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespacesListSharedAccessKeysInput,
    outputSchema: NamespacesListSharedAccessKeysOutput,
  }));
// Input Schema
export interface NamespacesRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  keyName: string;
}
export const NamespacesRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/regenerateKey",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespacesRegenerateKeyInput>;

// Output Schema
export interface NamespacesRegenerateKeyOutput {
  key1?: string;
  key2?: string;
}
export const NamespacesRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespacesRegenerateKeyOutput>;

// The operation
/**
 * Regenerate key for a namespace.
 *
 * Regenerate a shared access key for a namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the Namespace.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespacesRegenerateKey = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NamespacesRegenerateKeyInput,
    outputSchema: NamespacesRegenerateKeyOutput,
  }),
);
// Input Schema
export interface NamespacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  tags?: Record<string, string>;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  sku?: { name?: "Standard"; capacity?: number };
  properties?: {
    topicSpacesConfiguration?: {
      state?: "Disabled" | "Enabled";
      routeTopicResourceId?: string;
      routingEnrichments?: {
        static?: { key?: string; valueType: "String" }[];
        dynamic?: { key?: string; value?: string }[];
      };
      maximumSessionExpiryInHours?: number;
      maximumClientSessionsPerAuthenticationName?: number;
      routingIdentityInfo?: {
        type?: "None" | "SystemAssigned" | "UserAssigned";
        userAssignedIdentity?: string;
      };
      customDomains?: {
        fullyQualifiedDomainName: string;
        validationState?: "Pending" | "Approved" | "ErrorRetrievingDnsRecord";
        identity?: {
          type?: "SystemAssigned" | "UserAssigned";
          userAssignedIdentity?: string;
        };
        certificateUrl?: string;
        expectedTxtRecordName?: string;
        expectedTxtRecordValue?: string;
      }[];
    };
    topicsConfiguration?: {
      customDomains?: {
        fullyQualifiedDomainName: string;
        validationState?: "Pending" | "Approved" | "ErrorRetrievingDnsRecord";
        identity?: {
          type?: "SystemAssigned" | "UserAssigned";
          userAssignedIdentity?: string;
        };
        certificateUrl?: string;
        expectedTxtRecordName?: string;
        expectedTxtRecordValue?: string;
      }[];
    };
    publicNetworkAccess?: "Enabled" | "Disabled";
    inboundIpRules?: { ipMask?: string; action?: "Allow" }[];
  };
}
export const NamespacesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(
        Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned, UserAssigned",
        ]),
      ),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
  sku: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.Literals(["Standard"])),
      capacity: Schema.optional(Schema.Number),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      topicSpacesConfiguration: Schema.optional(
        Schema.Struct({
          state: Schema.optional(Schema.Literals(["Disabled", "Enabled"])),
          routeTopicResourceId: Schema.optional(Schema.String),
          routingEnrichments: Schema.optional(
            Schema.Struct({
              static: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    key: Schema.optional(Schema.String),
                    valueType: Schema.Literals(["String"]),
                  }),
                ),
              ),
              dynamic: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    key: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
          maximumSessionExpiryInHours: Schema.optional(Schema.Number),
          maximumClientSessionsPerAuthenticationName: Schema.optional(
            Schema.Number,
          ),
          routingIdentityInfo: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["None", "SystemAssigned", "UserAssigned"]),
              ),
              userAssignedIdentity: Schema.optional(Schema.String),
            }),
          ),
          customDomains: Schema.optional(
            Schema.Array(
              Schema.Struct({
                fullyQualifiedDomainName: Schema.String,
                validationState: Schema.optional(
                  Schema.Literals([
                    "Pending",
                    "Approved",
                    "ErrorRetrievingDnsRecord",
                  ]),
                ),
                identity: Schema.optional(
                  Schema.Struct({
                    type: Schema.optional(
                      Schema.Literals(["SystemAssigned", "UserAssigned"]),
                    ),
                    userAssignedIdentity: Schema.optional(Schema.String),
                  }),
                ),
                certificateUrl: Schema.optional(Schema.String),
                expectedTxtRecordName: Schema.optional(Schema.String),
                expectedTxtRecordValue: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      topicsConfiguration: Schema.optional(
        Schema.Struct({
          customDomains: Schema.optional(
            Schema.Array(
              Schema.Struct({
                fullyQualifiedDomainName: Schema.String,
                validationState: Schema.optional(
                  Schema.Literals([
                    "Pending",
                    "Approved",
                    "ErrorRetrievingDnsRecord",
                  ]),
                ),
                identity: Schema.optional(
                  Schema.Struct({
                    type: Schema.optional(
                      Schema.Literals(["SystemAssigned", "UserAssigned"]),
                    ),
                    userAssignedIdentity: Schema.optional(Schema.String),
                  }),
                ),
                certificateUrl: Schema.optional(Schema.String),
                expectedTxtRecordName: Schema.optional(Schema.String),
                expectedTxtRecordValue: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      inboundIpRules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipMask: Schema.optional(Schema.String),
            action: Schema.optional(Schema.Literals(["Allow"])),
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<NamespacesUpdateInput>;

// Output Schema
export interface NamespacesUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const NamespacesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<NamespacesUpdateOutput>;

// The operation
/**
 * Update a namespace.
 *
 * Asynchronously updates a namespace with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespacesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NamespacesUpdateInput,
  outputSchema: NamespacesUpdateOutput,
}));
// Input Schema
export interface NamespacesValidateCustomDomainOwnershipInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
}
export const NamespacesValidateCustomDomainOwnershipInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/validateCustomDomainOwnership",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespacesValidateCustomDomainOwnershipInput>;

// Output Schema
export interface NamespacesValidateCustomDomainOwnershipOutput {
  customDomainsForTopicsConfiguration?: {
    fullyQualifiedDomainName: string;
    validationState?: "Pending" | "Approved" | "ErrorRetrievingDnsRecord";
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string;
    };
    certificateUrl?: string;
    expectedTxtRecordName?: string;
    expectedTxtRecordValue?: string;
  }[];
  customDomainsForTopicSpacesConfiguration?: {
    fullyQualifiedDomainName: string;
    validationState?: "Pending" | "Approved" | "ErrorRetrievingDnsRecord";
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string;
    };
    certificateUrl?: string;
    expectedTxtRecordName?: string;
    expectedTxtRecordValue?: string;
  }[];
}
export const NamespacesValidateCustomDomainOwnershipOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    customDomainsForTopicsConfiguration: Schema.optional(
      Schema.Array(
        Schema.Struct({
          fullyQualifiedDomainName: Schema.String,
          validationState: Schema.optional(
            Schema.Literals([
              "Pending",
              "Approved",
              "ErrorRetrievingDnsRecord",
            ]),
          ),
          identity: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["SystemAssigned", "UserAssigned"]),
              ),
              userAssignedIdentity: Schema.optional(Schema.String),
            }),
          ),
          certificateUrl: Schema.optional(Schema.String),
          expectedTxtRecordName: Schema.optional(Schema.String),
          expectedTxtRecordValue: Schema.optional(Schema.String),
        }),
      ),
    ),
    customDomainsForTopicSpacesConfiguration: Schema.optional(
      Schema.Array(
        Schema.Struct({
          fullyQualifiedDomainName: Schema.String,
          validationState: Schema.optional(
            Schema.Literals([
              "Pending",
              "Approved",
              "ErrorRetrievingDnsRecord",
            ]),
          ),
          identity: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals(["SystemAssigned", "UserAssigned"]),
              ),
              userAssignedIdentity: Schema.optional(Schema.String),
            }),
          ),
          certificateUrl: Schema.optional(Schema.String),
          expectedTxtRecordName: Schema.optional(Schema.String),
          expectedTxtRecordValue: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<NamespacesValidateCustomDomainOwnershipOutput>;

// The operation
/**
 * Validate ownership for all custom domains in a namespace.
 *
 * Performs ownership validation via checking TXT records for all custom domains in a namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the Namespace.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespacesValidateCustomDomainOwnership =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespacesValidateCustomDomainOwnershipInput,
    outputSchema: NamespacesValidateCustomDomainOwnershipOutput,
  }));
// Input Schema
export interface NamespaceTopicEventSubscriptionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  eventSubscriptionName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "AwaitingManualAction"
      | "Deleted"
      | "DeleteFailed"
      | "CreateFailed"
      | "UpdatedFailed";
    deliveryConfiguration?: {
      deliveryMode?: "Queue" | "Push";
      queue?: {
        receiveLockDurationInSeconds?: number;
        maxDeliveryCount?: number;
        deadLetterDestinationWithResourceIdentity?: {
          identity?: {
            type?: "SystemAssigned" | "UserAssigned";
            userAssignedIdentity?: string;
          };
          deadLetterDestination?: { endpointType: "StorageBlob" };
        };
        eventTimeToLive?: string;
      };
      push?: {
        maxDeliveryCount?: number;
        eventTimeToLive?: string;
        deadLetterDestinationWithResourceIdentity?: {
          identity?: {
            type?: "SystemAssigned" | "UserAssigned";
            userAssignedIdentity?: string;
          };
          deadLetterDestination?: { endpointType: "StorageBlob" };
        };
        deliveryWithResourceIdentity?: {
          identity?: {
            type?: "SystemAssigned" | "UserAssigned";
            userAssignedIdentity?: string;
          };
          destination?: {
            endpointType:
              | "WebHook"
              | "EventHub"
              | "StorageQueue"
              | "HybridConnection"
              | "ServiceBusQueue"
              | "ServiceBusTopic"
              | "AzureFunction"
              | "MonitorAlert"
              | "NamespaceTopic";
          };
        };
        destination?: {
          endpointType:
            | "WebHook"
            | "EventHub"
            | "StorageQueue"
            | "HybridConnection"
            | "ServiceBusQueue"
            | "ServiceBusTopic"
            | "AzureFunction"
            | "MonitorAlert"
            | "NamespaceTopic";
        };
      };
    };
    eventDeliverySchema?: "CloudEventSchemaV1_0";
    filtersConfiguration?: {
      includedEventTypes?: string[];
      filters?: {
        operatorType:
          | "NumberIn"
          | "NumberNotIn"
          | "NumberLessThan"
          | "NumberGreaterThan"
          | "NumberLessThanOrEquals"
          | "NumberGreaterThanOrEquals"
          | "BoolEquals"
          | "StringIn"
          | "StringNotIn"
          | "StringBeginsWith"
          | "StringEndsWith"
          | "StringContains"
          | "NumberInRange"
          | "NumberNotInRange"
          | "StringNotBeginsWith"
          | "StringNotEndsWith"
          | "StringNotContains"
          | "IsNullOrUndefined"
          | "IsNotNull";
        key?: string;
      }[];
    };
    expirationTimeUtc?: string;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const NamespaceTopicEventSubscriptionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "AwaitingManualAction",
            "Deleted",
            "DeleteFailed",
            "CreateFailed",
            "UpdatedFailed",
          ]),
        ),
        deliveryConfiguration: Schema.optional(
          Schema.Struct({
            deliveryMode: Schema.optional(Schema.Literals(["Queue", "Push"])),
            queue: Schema.optional(
              Schema.Struct({
                receiveLockDurationInSeconds: Schema.optional(Schema.Number),
                maxDeliveryCount: Schema.optional(Schema.Number),
                deadLetterDestinationWithResourceIdentity: Schema.optional(
                  Schema.Struct({
                    identity: Schema.optional(
                      Schema.Struct({
                        type: Schema.optional(
                          Schema.Literals(["SystemAssigned", "UserAssigned"]),
                        ),
                        userAssignedIdentity: Schema.optional(Schema.String),
                      }),
                    ),
                    deadLetterDestination: Schema.optional(
                      Schema.Struct({
                        endpointType: Schema.Literals(["StorageBlob"]),
                      }),
                    ),
                  }),
                ),
                eventTimeToLive: Schema.optional(Schema.String),
              }),
            ),
            push: Schema.optional(
              Schema.Struct({
                maxDeliveryCount: Schema.optional(Schema.Number),
                eventTimeToLive: Schema.optional(Schema.String),
                deadLetterDestinationWithResourceIdentity: Schema.optional(
                  Schema.Struct({
                    identity: Schema.optional(
                      Schema.Struct({
                        type: Schema.optional(
                          Schema.Literals(["SystemAssigned", "UserAssigned"]),
                        ),
                        userAssignedIdentity: Schema.optional(Schema.String),
                      }),
                    ),
                    deadLetterDestination: Schema.optional(
                      Schema.Struct({
                        endpointType: Schema.Literals(["StorageBlob"]),
                      }),
                    ),
                  }),
                ),
                deliveryWithResourceIdentity: Schema.optional(
                  Schema.Struct({
                    identity: Schema.optional(
                      Schema.Struct({
                        type: Schema.optional(
                          Schema.Literals(["SystemAssigned", "UserAssigned"]),
                        ),
                        userAssignedIdentity: Schema.optional(Schema.String),
                      }),
                    ),
                    destination: Schema.optional(
                      Schema.Struct({
                        endpointType: Schema.Literals([
                          "WebHook",
                          "EventHub",
                          "StorageQueue",
                          "HybridConnection",
                          "ServiceBusQueue",
                          "ServiceBusTopic",
                          "AzureFunction",
                          "MonitorAlert",
                          "NamespaceTopic",
                        ]),
                      }),
                    ),
                  }),
                ),
                destination: Schema.optional(
                  Schema.Struct({
                    endpointType: Schema.Literals([
                      "WebHook",
                      "EventHub",
                      "StorageQueue",
                      "HybridConnection",
                      "ServiceBusQueue",
                      "ServiceBusTopic",
                      "AzureFunction",
                      "MonitorAlert",
                      "NamespaceTopic",
                    ]),
                  }),
                ),
              }),
            ),
          }),
        ),
        eventDeliverySchema: Schema.optional(
          Schema.Literals(["CloudEventSchemaV1_0"]),
        ),
        filtersConfiguration: Schema.optional(
          Schema.Struct({
            includedEventTypes: Schema.optional(Schema.Array(Schema.String)),
            filters: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  operatorType: Schema.Literals([
                    "NumberIn",
                    "NumberNotIn",
                    "NumberLessThan",
                    "NumberGreaterThan",
                    "NumberLessThanOrEquals",
                    "NumberGreaterThanOrEquals",
                    "BoolEquals",
                    "StringIn",
                    "StringNotIn",
                    "StringBeginsWith",
                    "StringEndsWith",
                    "StringContains",
                    "NumberInRange",
                    "NumberNotInRange",
                    "StringNotBeginsWith",
                    "StringNotEndsWith",
                    "StringNotContains",
                    "IsNullOrUndefined",
                    "IsNotNull",
                  ]),
                  key: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        expirationTimeUtc: Schema.optional(Schema.String),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespaceTopicEventSubscriptionsCreateOrUpdateInput>;

// Output Schema
export interface NamespaceTopicEventSubscriptionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const NamespaceTopicEventSubscriptionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespaceTopicEventSubscriptionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an event subscription of a namespace topic.
 *
 * Asynchronously creates or updates an event subscription of a namespace topic with the specified parameters. Existing event subscriptions will be updated with this API.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicName - Name of the namespace topic.
 * @param eventSubscriptionName - Name of the event subscription to be created. Event subscription names must be between 3 and 50 characters in length and use alphanumeric letters only.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespaceTopicEventSubscriptionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceTopicEventSubscriptionsCreateOrUpdateInput,
    outputSchema: NamespaceTopicEventSubscriptionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface NamespaceTopicEventSubscriptionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  eventSubscriptionName: string;
}
export const NamespaceTopicEventSubscriptionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespaceTopicEventSubscriptionsDeleteInput>;

// Output Schema
export type NamespaceTopicEventSubscriptionsDeleteOutput = void;
export const NamespaceTopicEventSubscriptionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespaceTopicEventSubscriptionsDeleteOutput>;

// The operation
/**
 * Delete an event subscription of a namespace topic.
 *
 * Delete an existing event subscription of a namespace topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicName - Name of the namespace topic.
 * @param eventSubscriptionName - Name of the event subscription to be deleted.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespaceTopicEventSubscriptionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceTopicEventSubscriptionsDeleteInput,
    outputSchema: NamespaceTopicEventSubscriptionsDeleteOutput,
  }));
// Input Schema
export interface NamespaceTopicEventSubscriptionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  eventSubscriptionName: string;
}
export const NamespaceTopicEventSubscriptionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespaceTopicEventSubscriptionsGetInput>;

// Output Schema
export interface NamespaceTopicEventSubscriptionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const NamespaceTopicEventSubscriptionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespaceTopicEventSubscriptionsGetOutput>;

// The operation
/**
 * Get an event subscription of a namespace topic.
 *
 * Get properties of an event subscription of a namespace topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicName - Name of the namespace topic.
 * @param eventSubscriptionName - Name of the event subscription to be found.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespaceTopicEventSubscriptionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceTopicEventSubscriptionsGetInput,
    outputSchema: NamespaceTopicEventSubscriptionsGetOutput,
  }));
// Input Schema
export interface NamespaceTopicEventSubscriptionsGetDeliveryAttributesInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  eventSubscriptionName: string;
}
export const NamespaceTopicEventSubscriptionsGetDeliveryAttributesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}/getDeliveryAttributes",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespaceTopicEventSubscriptionsGetDeliveryAttributesInput>;

// Output Schema
export interface NamespaceTopicEventSubscriptionsGetDeliveryAttributesOutput {
  value?: { name?: string; type: "Static" | "Dynamic" }[];
}
export const NamespaceTopicEventSubscriptionsGetDeliveryAttributesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.Literals(["Static", "Dynamic"]),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<NamespaceTopicEventSubscriptionsGetDeliveryAttributesOutput>;

// The operation
/**
 * Get delivery attributes for an event subscription of a namespace topic.
 *
 * Get all delivery attributes for an event subscription of a namespace topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicName - Name of the namespace topic.
 * @param eventSubscriptionName - Name of the event subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespaceTopicEventSubscriptionsGetDeliveryAttributes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceTopicEventSubscriptionsGetDeliveryAttributesInput,
    outputSchema: NamespaceTopicEventSubscriptionsGetDeliveryAttributesOutput,
  }));
// Input Schema
export interface NamespaceTopicEventSubscriptionsGetFullUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  eventSubscriptionName: string;
}
export const NamespaceTopicEventSubscriptionsGetFullUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}/getFullUrl",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespaceTopicEventSubscriptionsGetFullUrlInput>;

// Output Schema
export interface NamespaceTopicEventSubscriptionsGetFullUrlOutput {
  endpointUrl?: string;
}
export const NamespaceTopicEventSubscriptionsGetFullUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointUrl: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespaceTopicEventSubscriptionsGetFullUrlOutput>;

// The operation
/**
 * Get full URL of an event subscription of a namespace topic.
 *
 * Get the full endpoint URL for an event subscription of a namespace topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicName - Name of the namespace topic.
 * @param eventSubscriptionName - Name of the event subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespaceTopicEventSubscriptionsGetFullUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceTopicEventSubscriptionsGetFullUrlInput,
    outputSchema: NamespaceTopicEventSubscriptionsGetFullUrlOutput,
  }));
// Input Schema
export interface NamespaceTopicEventSubscriptionsListByNamespaceTopicInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  $filter?: string;
  $top?: number;
}
export const NamespaceTopicEventSubscriptionsListByNamespaceTopicInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespaceTopicEventSubscriptionsListByNamespaceTopicInput>;

// Output Schema
export interface NamespaceTopicEventSubscriptionsListByNamespaceTopicOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const NamespaceTopicEventSubscriptionsListByNamespaceTopicOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespaceTopicEventSubscriptionsListByNamespaceTopicOutput>;

// The operation
/**
 * List event subscriptions of a namespace topic.
 *
 * List event subscriptions that belong to a specific namespace topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicName - Name of the namespace topic.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const NamespaceTopicEventSubscriptionsListByNamespaceTopic =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceTopicEventSubscriptionsListByNamespaceTopicInput,
    outputSchema: NamespaceTopicEventSubscriptionsListByNamespaceTopicOutput,
  }));
// Input Schema
export interface NamespaceTopicEventSubscriptionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  eventSubscriptionName: string;
  properties?: {
    deliveryConfiguration?: {
      deliveryMode?: "Queue" | "Push";
      queue?: {
        receiveLockDurationInSeconds?: number;
        maxDeliveryCount?: number;
        deadLetterDestinationWithResourceIdentity?: {
          identity?: {
            type?: "SystemAssigned" | "UserAssigned";
            userAssignedIdentity?: string;
          };
          deadLetterDestination?: { endpointType: "StorageBlob" };
        };
        eventTimeToLive?: string;
      };
      push?: {
        maxDeliveryCount?: number;
        eventTimeToLive?: string;
        deadLetterDestinationWithResourceIdentity?: {
          identity?: {
            type?: "SystemAssigned" | "UserAssigned";
            userAssignedIdentity?: string;
          };
          deadLetterDestination?: { endpointType: "StorageBlob" };
        };
        deliveryWithResourceIdentity?: {
          identity?: {
            type?: "SystemAssigned" | "UserAssigned";
            userAssignedIdentity?: string;
          };
          destination?: {
            endpointType:
              | "WebHook"
              | "EventHub"
              | "StorageQueue"
              | "HybridConnection"
              | "ServiceBusQueue"
              | "ServiceBusTopic"
              | "AzureFunction"
              | "MonitorAlert"
              | "NamespaceTopic";
          };
        };
        destination?: {
          endpointType:
            | "WebHook"
            | "EventHub"
            | "StorageQueue"
            | "HybridConnection"
            | "ServiceBusQueue"
            | "ServiceBusTopic"
            | "AzureFunction"
            | "MonitorAlert"
            | "NamespaceTopic";
        };
      };
    };
    eventDeliverySchema?: "CloudEventSchemaV1_0";
    filtersConfiguration?: {
      includedEventTypes?: string[];
      filters?: {
        operatorType:
          | "NumberIn"
          | "NumberNotIn"
          | "NumberLessThan"
          | "NumberGreaterThan"
          | "NumberLessThanOrEquals"
          | "NumberGreaterThanOrEquals"
          | "BoolEquals"
          | "StringIn"
          | "StringNotIn"
          | "StringBeginsWith"
          | "StringEndsWith"
          | "StringContains"
          | "NumberInRange"
          | "NumberNotInRange"
          | "StringNotBeginsWith"
          | "StringNotEndsWith"
          | "StringNotContains"
          | "IsNullOrUndefined"
          | "IsNotNull";
        key?: string;
      }[];
    };
    expirationTimeUtc?: string;
  };
}
export const NamespaceTopicEventSubscriptionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        deliveryConfiguration: Schema.optional(
          Schema.Struct({
            deliveryMode: Schema.optional(Schema.Literals(["Queue", "Push"])),
            queue: Schema.optional(
              Schema.Struct({
                receiveLockDurationInSeconds: Schema.optional(Schema.Number),
                maxDeliveryCount: Schema.optional(Schema.Number),
                deadLetterDestinationWithResourceIdentity: Schema.optional(
                  Schema.Struct({
                    identity: Schema.optional(
                      Schema.Struct({
                        type: Schema.optional(
                          Schema.Literals(["SystemAssigned", "UserAssigned"]),
                        ),
                        userAssignedIdentity: Schema.optional(Schema.String),
                      }),
                    ),
                    deadLetterDestination: Schema.optional(
                      Schema.Struct({
                        endpointType: Schema.Literals(["StorageBlob"]),
                      }),
                    ),
                  }),
                ),
                eventTimeToLive: Schema.optional(Schema.String),
              }),
            ),
            push: Schema.optional(
              Schema.Struct({
                maxDeliveryCount: Schema.optional(Schema.Number),
                eventTimeToLive: Schema.optional(Schema.String),
                deadLetterDestinationWithResourceIdentity: Schema.optional(
                  Schema.Struct({
                    identity: Schema.optional(
                      Schema.Struct({
                        type: Schema.optional(
                          Schema.Literals(["SystemAssigned", "UserAssigned"]),
                        ),
                        userAssignedIdentity: Schema.optional(Schema.String),
                      }),
                    ),
                    deadLetterDestination: Schema.optional(
                      Schema.Struct({
                        endpointType: Schema.Literals(["StorageBlob"]),
                      }),
                    ),
                  }),
                ),
                deliveryWithResourceIdentity: Schema.optional(
                  Schema.Struct({
                    identity: Schema.optional(
                      Schema.Struct({
                        type: Schema.optional(
                          Schema.Literals(["SystemAssigned", "UserAssigned"]),
                        ),
                        userAssignedIdentity: Schema.optional(Schema.String),
                      }),
                    ),
                    destination: Schema.optional(
                      Schema.Struct({
                        endpointType: Schema.Literals([
                          "WebHook",
                          "EventHub",
                          "StorageQueue",
                          "HybridConnection",
                          "ServiceBusQueue",
                          "ServiceBusTopic",
                          "AzureFunction",
                          "MonitorAlert",
                          "NamespaceTopic",
                        ]),
                      }),
                    ),
                  }),
                ),
                destination: Schema.optional(
                  Schema.Struct({
                    endpointType: Schema.Literals([
                      "WebHook",
                      "EventHub",
                      "StorageQueue",
                      "HybridConnection",
                      "ServiceBusQueue",
                      "ServiceBusTopic",
                      "AzureFunction",
                      "MonitorAlert",
                      "NamespaceTopic",
                    ]),
                  }),
                ),
              }),
            ),
          }),
        ),
        eventDeliverySchema: Schema.optional(
          Schema.Literals(["CloudEventSchemaV1_0"]),
        ),
        filtersConfiguration: Schema.optional(
          Schema.Struct({
            includedEventTypes: Schema.optional(Schema.Array(Schema.String)),
            filters: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  operatorType: Schema.Literals([
                    "NumberIn",
                    "NumberNotIn",
                    "NumberLessThan",
                    "NumberGreaterThan",
                    "NumberLessThanOrEquals",
                    "NumberGreaterThanOrEquals",
                    "BoolEquals",
                    "StringIn",
                    "StringNotIn",
                    "StringBeginsWith",
                    "StringEndsWith",
                    "StringContains",
                    "NumberInRange",
                    "NumberNotInRange",
                    "StringNotBeginsWith",
                    "StringNotEndsWith",
                    "StringNotContains",
                    "IsNullOrUndefined",
                    "IsNotNull",
                  ]),
                  key: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        expirationTimeUtc: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespaceTopicEventSubscriptionsUpdateInput>;

// Output Schema
export interface NamespaceTopicEventSubscriptionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const NamespaceTopicEventSubscriptionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespaceTopicEventSubscriptionsUpdateOutput>;

// The operation
/**
 * Update event subscription of a namespace topic.
 *
 * Update an existing event subscription of a namespace topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicName - Name of the namespace topic.
 * @param eventSubscriptionName - Name of the event subscription to be updated.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespaceTopicEventSubscriptionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceTopicEventSubscriptionsUpdateInput,
    outputSchema: NamespaceTopicEventSubscriptionsUpdateOutput,
  }));
// Input Schema
export interface NamespaceTopicsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "Deleted"
      | "DeleteFailed"
      | "CreateFailed"
      | "UpdatedFailed";
    publisherType?: "Custom";
    inputSchema?: "CloudEventSchemaV1_0";
    eventRetentionInDays?: number;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const NamespaceTopicsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "Deleted",
            "DeleteFailed",
            "CreateFailed",
            "UpdatedFailed",
          ]),
        ),
        publisherType: Schema.optional(Schema.Literals(["Custom"])),
        inputSchema: Schema.optional(Schema.Literals(["CloudEventSchemaV1_0"])),
        eventRetentionInDays: Schema.optional(Schema.Number),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespaceTopicsCreateOrUpdateInput>;

// Output Schema
export interface NamespaceTopicsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const NamespaceTopicsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespaceTopicsCreateOrUpdateOutput>;

// The operation
/**
 * Create a namespace topic.
 *
 * Asynchronously creates a new namespace topic with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicName - Name of the namespace topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespaceTopicsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceTopicsCreateOrUpdateInput,
    outputSchema: NamespaceTopicsCreateOrUpdateOutput,
  }));
// Input Schema
export interface NamespaceTopicsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
}
export const NamespaceTopicsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespaceTopicsDeleteInput>;

// Output Schema
export type NamespaceTopicsDeleteOutput = void;
export const NamespaceTopicsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NamespaceTopicsDeleteOutput>;

// The operation
/**
 * Delete a namespace topic.
 *
 * Delete existing namespace topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicName - Name of the topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespaceTopicsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NamespaceTopicsDeleteInput,
    outputSchema: NamespaceTopicsDeleteOutput,
  }),
);
// Input Schema
export interface NamespaceTopicsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
}
export const NamespaceTopicsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespaceTopicsGetInput>;

// Output Schema
export interface NamespaceTopicsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const NamespaceTopicsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespaceTopicsGetOutput>;

// The operation
/**
 * Get a namespace topic.
 *
 * Get properties of a namespace topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicName - Name of the namespace topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespaceTopicsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: NamespaceTopicsGetInput,
  outputSchema: NamespaceTopicsGetOutput,
}));
// Input Schema
export interface NamespaceTopicsListByNamespaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  $filter?: string;
  $top?: number;
}
export const NamespaceTopicsListByNamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespaceTopicsListByNamespaceInput>;

// Output Schema
export interface NamespaceTopicsListByNamespaceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const NamespaceTopicsListByNamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespaceTopicsListByNamespaceOutput>;

// The operation
/**
 * List namespace topics under a namespace.
 *
 * List all the namespace topics under a namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const NamespaceTopicsListByNamespace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceTopicsListByNamespaceInput,
    outputSchema: NamespaceTopicsListByNamespaceOutput,
  }));
// Input Schema
export interface NamespaceTopicsListSharedAccessKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
}
export const NamespaceTopicsListSharedAccessKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/listKeys",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespaceTopicsListSharedAccessKeysInput>;

// Output Schema
export interface NamespaceTopicsListSharedAccessKeysOutput {
  key1?: string;
  key2?: string;
}
export const NamespaceTopicsListSharedAccessKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespaceTopicsListSharedAccessKeysOutput>;

// The operation
/**
 * List keys for a namespace topic.
 *
 * List the two keys used to publish to a namespace topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicName - Name of the topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespaceTopicsListSharedAccessKeys =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceTopicsListSharedAccessKeysInput,
    outputSchema: NamespaceTopicsListSharedAccessKeysOutput,
  }));
// Input Schema
export interface NamespaceTopicsRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  keyName: string;
}
export const NamespaceTopicsRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/regenerateKey",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespaceTopicsRegenerateKeyInput>;

// Output Schema
export interface NamespaceTopicsRegenerateKeyOutput {
  key1?: string;
  key2?: string;
}
export const NamespaceTopicsRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespaceTopicsRegenerateKeyOutput>;

// The operation
/**
 * Regenerate key for a namespace topic.
 *
 * Regenerate a shared access key for a namespace topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicName - Name of the topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespaceTopicsRegenerateKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NamespaceTopicsRegenerateKeyInput,
    outputSchema: NamespaceTopicsRegenerateKeyOutput,
  }));
// Input Schema
export interface NamespaceTopicsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicName: string;
  properties?: { eventRetentionInDays?: number };
}
export const NamespaceTopicsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        eventRetentionInDays: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<NamespaceTopicsUpdateInput>;

// Output Schema
export interface NamespaceTopicsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const NamespaceTopicsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<NamespaceTopicsUpdateOutput>;

// The operation
/**
 * Update a namespace topic.
 *
 * Asynchronously updates a namespace topic with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicName - Name of the namespace topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const NamespaceTopicsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NamespaceTopicsUpdateInput,
    outputSchema: NamespaceTopicsUpdateOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.EventGrid/operations",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
    isDataAction?: boolean;
    properties?: unknown;
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        origin: Schema.optional(Schema.String),
        isDataAction: Schema.optional(Schema.Boolean),
        properties: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * List available operations.
 *
 * List the available operations supported by the Microsoft.EventGrid resource provider.
 *
 * @param api-version - Version of the API to be used with the client request.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PartnerConfigurationsAuthorizePartnerInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerRegistrationImmutableId?: string;
  partnerName?: string;
  authorizationExpirationTimeInUtc?: string;
}
export const PartnerConfigurationsAuthorizePartnerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerRegistrationImmutableId: Schema.optional(Schema.String),
    partnerName: Schema.optional(Schema.String),
    authorizationExpirationTimeInUtc: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerConfigurations/default/authorizePartner",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerConfigurationsAuthorizePartnerInput>;

// Output Schema
export interface PartnerConfigurationsAuthorizePartnerOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerConfigurationsAuthorizePartnerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerConfigurationsAuthorizePartnerOutput>;

// The operation
/**
 * Authorize a partner.
 *
 * Authorize a single partner either by partner registration immutable Id or by partner name.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerConfigurationsAuthorizePartner =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerConfigurationsAuthorizePartnerInput,
    outputSchema: PartnerConfigurationsAuthorizePartnerOutput,
  }));
// Input Schema
export interface PartnerConfigurationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  properties?: {
    partnerAuthorization?: {
      defaultMaximumExpirationTimeInDays?: number;
      authorizedPartnersList?: {
        partnerRegistrationImmutableId?: string;
        partnerName?: string;
        authorizationExpirationTimeInUtc?: string;
      }[];
    };
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed";
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  location?: string;
  tags?: Record<string, string>;
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerConfigurationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        partnerAuthorization: Schema.optional(
          Schema.Struct({
            defaultMaximumExpirationTimeInDays: Schema.optional(Schema.Number),
            authorizedPartnersList: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  partnerRegistrationImmutableId: Schema.optional(
                    Schema.String,
                  ),
                  partnerName: Schema.optional(Schema.String),
                  authorizationExpirationTimeInUtc: Schema.optional(
                    Schema.String,
                  ),
                }),
              ),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
          ]),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerConfigurations/default",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerConfigurationsCreateOrUpdateInput>;

// Output Schema
export interface PartnerConfigurationsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerConfigurationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerConfigurationsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a partner configuration.
 *
 * Synchronously creates or updates a partner configuration with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerConfigurationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerConfigurationsCreateOrUpdateInput,
    outputSchema: PartnerConfigurationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PartnerConfigurationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PartnerConfigurationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerConfigurations/default",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerConfigurationsDeleteInput>;

// Output Schema
export type PartnerConfigurationsDeleteOutput = void;
export const PartnerConfigurationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PartnerConfigurationsDeleteOutput>;

// The operation
/**
 * Delete a partner configuration.
 *
 * Delete existing partner configuration.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerConfigurationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerConfigurationsDeleteInput,
    outputSchema: PartnerConfigurationsDeleteOutput,
  }),
);
// Input Schema
export interface PartnerConfigurationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PartnerConfigurationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerConfigurations/default",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerConfigurationsGetInput>;

// Output Schema
export interface PartnerConfigurationsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerConfigurationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerConfigurationsGetOutput>;

// The operation
/**
 * Get a partner configuration.
 *
 * Get properties of a partner configuration.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerConfigurationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerConfigurationsGetInput,
    outputSchema: PartnerConfigurationsGetOutput,
  }),
);
// Input Schema
export interface PartnerConfigurationsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const PartnerConfigurationsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerConfigurations",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerConfigurationsListByResourceGroupInput>;

// Output Schema
export interface PartnerConfigurationsListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PartnerConfigurationsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerConfigurationsListByResourceGroupOutput>;

// The operation
/**
 * List partner configurations under a resource group.
 *
 * List all the partner configurations under a resource group.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerConfigurationsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerConfigurationsListByResourceGroupInput,
    outputSchema: PartnerConfigurationsListByResourceGroupOutput,
  }));
// Input Schema
export interface PartnerConfigurationsListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  $top?: number;
}
export const PartnerConfigurationsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/partnerConfigurations",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerConfigurationsListBySubscriptionInput>;

// Output Schema
export interface PartnerConfigurationsListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PartnerConfigurationsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerConfigurationsListBySubscriptionOutput>;

// The operation
/**
 * List partner configurations under an Azure subscription.
 *
 * List all the partner configurations under an Azure subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const PartnerConfigurationsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerConfigurationsListBySubscriptionInput,
    outputSchema: PartnerConfigurationsListBySubscriptionOutput,
  }));
// Input Schema
export interface PartnerConfigurationsUnauthorizePartnerInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerRegistrationImmutableId?: string;
  partnerName?: string;
  authorizationExpirationTimeInUtc?: string;
}
export const PartnerConfigurationsUnauthorizePartnerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerRegistrationImmutableId: Schema.optional(Schema.String),
    partnerName: Schema.optional(Schema.String),
    authorizationExpirationTimeInUtc: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerConfigurations/default/unauthorizePartner",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerConfigurationsUnauthorizePartnerInput>;

// Output Schema
export interface PartnerConfigurationsUnauthorizePartnerOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerConfigurationsUnauthorizePartnerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerConfigurationsUnauthorizePartnerOutput>;

// The operation
/**
 * Unauthorize a partner.
 *
 * Unauthorize a single partner either by partner registration immutable Id or by partner name.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerConfigurationsUnauthorizePartner =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerConfigurationsUnauthorizePartnerInput,
    outputSchema: PartnerConfigurationsUnauthorizePartnerOutput,
  }));
// Input Schema
export interface PartnerConfigurationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  tags?: Record<string, string>;
  properties?: { defaultMaximumExpirationTimeInDays?: number };
}
export const PartnerConfigurationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        defaultMaximumExpirationTimeInDays: Schema.optional(Schema.Number),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerConfigurations/default",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerConfigurationsUpdateInput>;

// Output Schema
export interface PartnerConfigurationsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerConfigurationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerConfigurationsUpdateOutput>;

// The operation
/**
 * Update a partner configuration.
 *
 * Synchronously updates a partner configuration with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerConfigurationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerConfigurationsUpdateInput,
    outputSchema: PartnerConfigurationsUpdateOutput,
  }),
);
// Input Schema
export interface PartnerNamespacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerNamespaceName: string;
  properties?: {
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
    }[];
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed";
    partnerRegistrationFullyQualifiedId?: string;
    minimumTlsVersionAllowed?: "1.0" | "1.1" | "1.2";
    endpoint?: string;
    publicNetworkAccess?: "Enabled" | "Disabled";
    inboundIpRules?: { ipMask?: string; action?: "Allow" }[];
    disableLocalAuth?: boolean;
    partnerTopicRoutingMode?: "SourceEventAttribute" | "ChannelNameHeader";
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  location: string;
  tags?: Record<string, string>;
}
export const PartnerNamespacesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerNamespaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
          ]),
        ),
        partnerRegistrationFullyQualifiedId: Schema.optional(Schema.String),
        minimumTlsVersionAllowed: Schema.optional(
          Schema.Literals(["1.0", "1.1", "1.2"]),
        ),
        endpoint: Schema.optional(Schema.String),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        inboundIpRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipMask: Schema.optional(Schema.String),
              action: Schema.optional(Schema.Literals(["Allow"])),
            }),
          ),
        ),
        disableLocalAuth: Schema.optional(Schema.Boolean),
        partnerTopicRoutingMode: Schema.optional(
          Schema.Literals(["SourceEventAttribute", "ChannelNameHeader"]),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerNamespacesCreateOrUpdateInput>;

// Output Schema
export interface PartnerNamespacesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerNamespacesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerNamespacesCreateOrUpdateOutput>;

// The operation
/**
 * Create a partner namespace.
 *
 * Asynchronously creates a new partner namespace with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerNamespaceName - Name of the partner namespace.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerNamespacesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerNamespacesCreateOrUpdateInput,
    outputSchema: PartnerNamespacesCreateOrUpdateOutput,
  }));
// Input Schema
export interface PartnerNamespacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerNamespaceName: string;
}
export const PartnerNamespacesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerNamespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerNamespacesDeleteInput>;

// Output Schema
export type PartnerNamespacesDeleteOutput = void;
export const PartnerNamespacesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PartnerNamespacesDeleteOutput>;

// The operation
/**
 * Delete a partner namespace.
 *
 * Delete existing partner namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerNamespaceName - Name of the partner namespace.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerNamespacesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerNamespacesDeleteInput,
    outputSchema: PartnerNamespacesDeleteOutput,
  }),
);
// Input Schema
export interface PartnerNamespacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerNamespaceName: string;
}
export const PartnerNamespacesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerNamespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerNamespacesGetInput>;

// Output Schema
export interface PartnerNamespacesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerNamespacesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerNamespacesGetOutput>;

// The operation
/**
 * Get a partner namespace.
 *
 * Get properties of a partner namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerNamespaceName - Name of the partner namespace.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerNamespacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerNamespacesGetInput,
    outputSchema: PartnerNamespacesGetOutput,
  }),
);
// Input Schema
export interface PartnerNamespacesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $top?: number;
}
export const PartnerNamespacesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerNamespacesListByResourceGroupInput>;

// Output Schema
export interface PartnerNamespacesListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PartnerNamespacesListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerNamespacesListByResourceGroupOutput>;

// The operation
/**
 * List partner namespaces under a resource group.
 *
 * List all the partner namespaces under a resource group.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const PartnerNamespacesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerNamespacesListByResourceGroupInput,
    outputSchema: PartnerNamespacesListByResourceGroupOutput,
  }));
// Input Schema
export interface PartnerNamespacesListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  $top?: number;
}
export const PartnerNamespacesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/partnerNamespaces",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerNamespacesListBySubscriptionInput>;

// Output Schema
export interface PartnerNamespacesListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PartnerNamespacesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerNamespacesListBySubscriptionOutput>;

// The operation
/**
 * List partner namespaces under an Azure subscription.
 *
 * List all the partner namespaces under an Azure subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const PartnerNamespacesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerNamespacesListBySubscriptionInput,
    outputSchema: PartnerNamespacesListBySubscriptionOutput,
  }));
// Input Schema
export interface PartnerNamespacesListSharedAccessKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerNamespaceName: string;
}
export const PartnerNamespacesListSharedAccessKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerNamespaceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}/listKeys",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerNamespacesListSharedAccessKeysInput>;

// Output Schema
export interface PartnerNamespacesListSharedAccessKeysOutput {
  key1?: string;
  key2?: string;
}
export const PartnerNamespacesListSharedAccessKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerNamespacesListSharedAccessKeysOutput>;

// The operation
/**
 * List keys for a partner namespace.
 *
 * List the two keys used to publish to a partner namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerNamespaceName - Name of the partner namespace.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerNamespacesListSharedAccessKeys =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerNamespacesListSharedAccessKeysInput,
    outputSchema: PartnerNamespacesListSharedAccessKeysOutput,
  }));
// Input Schema
export interface PartnerNamespacesRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerNamespaceName: string;
  keyName: string;
}
export const PartnerNamespacesRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerNamespaceName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}/regenerateKey",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerNamespacesRegenerateKeyInput>;

// Output Schema
export interface PartnerNamespacesRegenerateKeyOutput {
  key1?: string;
  key2?: string;
}
export const PartnerNamespacesRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerNamespacesRegenerateKeyOutput>;

// The operation
/**
 * Regenerate key for a partner namespace.
 *
 * Regenerate a shared access key for a partner namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerNamespaceName - Name of the partner namespace.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerNamespacesRegenerateKey =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerNamespacesRegenerateKeyInput,
    outputSchema: PartnerNamespacesRegenerateKeyOutput,
  }));
// Input Schema
export interface PartnerNamespacesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerNamespaceName: string;
  tags?: Record<string, string>;
  properties?: {
    publicNetworkAccess?: "Enabled" | "Disabled";
    inboundIpRules?: { ipMask?: string; action?: "Allow" }[];
    minimumTlsVersionAllowed?: "1.0" | "1.1" | "1.2";
    disableLocalAuth?: boolean;
  };
}
export const PartnerNamespacesUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerNamespaceName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        inboundIpRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipMask: Schema.optional(Schema.String),
              action: Schema.optional(Schema.Literals(["Allow"])),
            }),
          ),
        ),
        minimumTlsVersionAllowed: Schema.optional(
          Schema.Literals(["1.0", "1.1", "1.2"]),
        ),
        disableLocalAuth: Schema.optional(Schema.Boolean),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerNamespaces/{partnerNamespaceName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerNamespacesUpdateInput>;

// Output Schema
export type PartnerNamespacesUpdateOutput = void;
export const PartnerNamespacesUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PartnerNamespacesUpdateOutput>;

// The operation
/**
 * Update a partner namespace.
 *
 * Asynchronously updates a partner namespace with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerNamespaceName - Name of the partner namespace.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerNamespacesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerNamespacesUpdateInput,
    outputSchema: PartnerNamespacesUpdateOutput,
  }),
);
// Input Schema
export interface PartnerRegistrationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerRegistrationName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed";
    partnerRegistrationImmutableId?: string;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  location: string;
  tags?: Record<string, string>;
}
export const PartnerRegistrationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerRegistrationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
          ]),
        ),
        partnerRegistrationImmutableId: Schema.optional(Schema.String),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations/{partnerRegistrationName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerRegistrationsCreateOrUpdateInput>;

// Output Schema
export interface PartnerRegistrationsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerRegistrationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerRegistrationsCreateOrUpdateOutput>;

// The operation
/**
 * Create a partner registration.
 *
 * Creates a new partner registration with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerRegistrationName - Name of the partner registration.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerRegistrationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerRegistrationsCreateOrUpdateInput,
    outputSchema: PartnerRegistrationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PartnerRegistrationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerRegistrationName: string;
}
export const PartnerRegistrationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerRegistrationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations/{partnerRegistrationName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerRegistrationsDeleteInput>;

// Output Schema
export type PartnerRegistrationsDeleteOutput = void;
export const PartnerRegistrationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PartnerRegistrationsDeleteOutput>;

// The operation
/**
 * Delete a partner registration.
 *
 * Deletes a partner registration with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerRegistrationName - Name of the partner registration.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerRegistrationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerRegistrationsDeleteInput,
    outputSchema: PartnerRegistrationsDeleteOutput,
  }),
);
// Input Schema
export interface PartnerRegistrationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerRegistrationName: string;
}
export const PartnerRegistrationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerRegistrationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations/{partnerRegistrationName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerRegistrationsGetInput>;

// Output Schema
export interface PartnerRegistrationsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerRegistrationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerRegistrationsGetOutput>;

// The operation
/**
 * Get a partner registration.
 *
 * Gets a partner registration with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerRegistrationName - Name of the partner registration.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerRegistrationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerRegistrationsGetInput,
    outputSchema: PartnerRegistrationsGetOutput,
  }),
);
// Input Schema
export interface PartnerRegistrationsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $top?: number;
}
export const PartnerRegistrationsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerRegistrationsListByResourceGroupInput>;

// Output Schema
export interface PartnerRegistrationsListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PartnerRegistrationsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerRegistrationsListByResourceGroupOutput>;

// The operation
/**
 * List partner registrations under a resource group.
 *
 * List all the partner registrations under a resource group.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const PartnerRegistrationsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerRegistrationsListByResourceGroupInput,
    outputSchema: PartnerRegistrationsListByResourceGroupOutput,
  }));
// Input Schema
export interface PartnerRegistrationsListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  $top?: number;
}
export const PartnerRegistrationsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/partnerRegistrations",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerRegistrationsListBySubscriptionInput>;

// Output Schema
export interface PartnerRegistrationsListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PartnerRegistrationsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerRegistrationsListBySubscriptionOutput>;

// The operation
/**
 * List partner registrations under an Azure subscription.
 *
 * List all the partner registrations under an Azure subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const PartnerRegistrationsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerRegistrationsListBySubscriptionInput,
    outputSchema: PartnerRegistrationsListBySubscriptionOutput,
  }));
// Input Schema
export interface PartnerRegistrationsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerRegistrationName: string;
  tags?: Record<string, string>;
}
export const PartnerRegistrationsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerRegistrationName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerRegistrations/{partnerRegistrationName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerRegistrationsUpdateInput>;

// Output Schema
export type PartnerRegistrationsUpdateOutput = void;
export const PartnerRegistrationsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PartnerRegistrationsUpdateOutput>;

// The operation
/**
 * Update a partner registration.
 *
 * Updates a partner registration with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerRegistrationName - Name of the partner registration.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerRegistrationsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerRegistrationsUpdateInput,
    outputSchema: PartnerRegistrationsUpdateOutput,
  }),
);
// Input Schema
export interface PartnerTopicEventSubscriptionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerTopicName: string;
  eventSubscriptionName: string;
  properties?: {
    topic?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "AwaitingManualAction";
    destination?: {
      endpointType:
        | "WebHook"
        | "EventHub"
        | "StorageQueue"
        | "HybridConnection"
        | "ServiceBusQueue"
        | "ServiceBusTopic"
        | "AzureFunction"
        | "MonitorAlert"
        | "NamespaceTopic";
    };
    deliveryWithResourceIdentity?: {
      identity?: {
        type?: "SystemAssigned" | "UserAssigned";
        userAssignedIdentity?: string;
      };
      destination?: {
        endpointType:
          | "WebHook"
          | "EventHub"
          | "StorageQueue"
          | "HybridConnection"
          | "ServiceBusQueue"
          | "ServiceBusTopic"
          | "AzureFunction"
          | "MonitorAlert"
          | "NamespaceTopic";
      };
    };
    filter?: {
      subjectBeginsWith?: string;
      subjectEndsWith?: string;
      includedEventTypes?: string[];
      isSubjectCaseSensitive?: boolean;
      enableAdvancedFilteringOnArrays?: boolean;
      advancedFilters?: {
        operatorType:
          | "NumberIn"
          | "NumberNotIn"
          | "NumberLessThan"
          | "NumberGreaterThan"
          | "NumberLessThanOrEquals"
          | "NumberGreaterThanOrEquals"
          | "BoolEquals"
          | "StringIn"
          | "StringNotIn"
          | "StringBeginsWith"
          | "StringEndsWith"
          | "StringContains"
          | "NumberInRange"
          | "NumberNotInRange"
          | "StringNotBeginsWith"
          | "StringNotEndsWith"
          | "StringNotContains"
          | "IsNullOrUndefined"
          | "IsNotNull";
        key?: string;
      }[];
    };
    labels?: string[];
    expirationTimeUtc?: string;
    eventDeliverySchema?:
      | "EventGridSchema"
      | "CustomInputSchema"
      | "CloudEventSchemaV1_0";
    retryPolicy?: {
      maxDeliveryAttempts?: number;
      eventTimeToLiveInMinutes?: number;
    };
    deadLetterDestination?: { endpointType: "StorageBlob" };
    deadLetterWithResourceIdentity?: {
      identity?: {
        type?: "SystemAssigned" | "UserAssigned";
        userAssignedIdentity?: string;
      };
      deadLetterDestination?: { endpointType: "StorageBlob" };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerTopicEventSubscriptionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerTopicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        topic: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "AwaitingManualAction",
          ]),
        ),
        destination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals([
              "WebHook",
              "EventHub",
              "StorageQueue",
              "HybridConnection",
              "ServiceBusQueue",
              "ServiceBusTopic",
              "AzureFunction",
              "MonitorAlert",
              "NamespaceTopic",
            ]),
          }),
        ),
        deliveryWithResourceIdentity: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["SystemAssigned", "UserAssigned"]),
                ),
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
            destination: Schema.optional(
              Schema.Struct({
                endpointType: Schema.Literals([
                  "WebHook",
                  "EventHub",
                  "StorageQueue",
                  "HybridConnection",
                  "ServiceBusQueue",
                  "ServiceBusTopic",
                  "AzureFunction",
                  "MonitorAlert",
                  "NamespaceTopic",
                ]),
              }),
            ),
          }),
        ),
        filter: Schema.optional(
          Schema.Struct({
            subjectBeginsWith: Schema.optional(Schema.String),
            subjectEndsWith: Schema.optional(Schema.String),
            includedEventTypes: Schema.optional(Schema.Array(Schema.String)),
            isSubjectCaseSensitive: Schema.optional(Schema.Boolean),
            enableAdvancedFilteringOnArrays: Schema.optional(Schema.Boolean),
            advancedFilters: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  operatorType: Schema.Literals([
                    "NumberIn",
                    "NumberNotIn",
                    "NumberLessThan",
                    "NumberGreaterThan",
                    "NumberLessThanOrEquals",
                    "NumberGreaterThanOrEquals",
                    "BoolEquals",
                    "StringIn",
                    "StringNotIn",
                    "StringBeginsWith",
                    "StringEndsWith",
                    "StringContains",
                    "NumberInRange",
                    "NumberNotInRange",
                    "StringNotBeginsWith",
                    "StringNotEndsWith",
                    "StringNotContains",
                    "IsNullOrUndefined",
                    "IsNotNull",
                  ]),
                  key: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        labels: Schema.optional(Schema.Array(Schema.String)),
        expirationTimeUtc: Schema.optional(Schema.String),
        eventDeliverySchema: Schema.optional(
          Schema.Literals([
            "EventGridSchema",
            "CustomInputSchema",
            "CloudEventSchemaV1_0",
          ]),
        ),
        retryPolicy: Schema.optional(
          Schema.Struct({
            maxDeliveryAttempts: Schema.optional(Schema.Number),
            eventTimeToLiveInMinutes: Schema.optional(Schema.Number),
          }),
        ),
        deadLetterDestination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals(["StorageBlob"]),
          }),
        ),
        deadLetterWithResourceIdentity: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["SystemAssigned", "UserAssigned"]),
                ),
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
            deadLetterDestination: Schema.optional(
              Schema.Struct({
                endpointType: Schema.Literals(["StorageBlob"]),
              }),
            ),
          }),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerTopics/{partnerTopicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerTopicEventSubscriptionsCreateOrUpdateInput>;

// Output Schema
export interface PartnerTopicEventSubscriptionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerTopicEventSubscriptionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerTopicEventSubscriptionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an event subscription of a partner topic.
 *
 * Asynchronously creates or updates an event subscription of a partner topic with the specified parameters. Existing event subscriptions will be updated with this API.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerTopicName - Name of the partner topic.
 * @param eventSubscriptionName - Name of the event subscription to be created. Event subscription names must be between 3 and 64 characters in length and use alphanumeric letters only.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerTopicEventSubscriptionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerTopicEventSubscriptionsCreateOrUpdateInput,
    outputSchema: PartnerTopicEventSubscriptionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PartnerTopicEventSubscriptionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerTopicName: string;
  eventSubscriptionName: string;
}
export const PartnerTopicEventSubscriptionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerTopicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerTopics/{partnerTopicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerTopicEventSubscriptionsDeleteInput>;

// Output Schema
export type PartnerTopicEventSubscriptionsDeleteOutput = void;
export const PartnerTopicEventSubscriptionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PartnerTopicEventSubscriptionsDeleteOutput>;

// The operation
/**
 * Delete an event subscription of a partner topic.
 *
 * Delete an existing event subscription of a partner topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerTopicName - Name of the partner topic.
 * @param eventSubscriptionName - Name of the event subscription to be deleted.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerTopicEventSubscriptionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerTopicEventSubscriptionsDeleteInput,
    outputSchema: PartnerTopicEventSubscriptionsDeleteOutput,
  }));
// Input Schema
export interface PartnerTopicEventSubscriptionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerTopicName: string;
  eventSubscriptionName: string;
}
export const PartnerTopicEventSubscriptionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerTopicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerTopics/{partnerTopicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerTopicEventSubscriptionsGetInput>;

// Output Schema
export interface PartnerTopicEventSubscriptionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerTopicEventSubscriptionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerTopicEventSubscriptionsGetOutput>;

// The operation
/**
 * Get an event subscription of a partner topic.
 *
 * Get properties of an event subscription of a partner topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerTopicName - Name of the partner topic.
 * @param eventSubscriptionName - Name of the event subscription to be found.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerTopicEventSubscriptionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerTopicEventSubscriptionsGetInput,
    outputSchema: PartnerTopicEventSubscriptionsGetOutput,
  }));
// Input Schema
export interface PartnerTopicEventSubscriptionsGetDeliveryAttributesInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerTopicName: string;
  eventSubscriptionName: string;
}
export const PartnerTopicEventSubscriptionsGetDeliveryAttributesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerTopicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerTopics/{partnerTopicName}/eventSubscriptions/{eventSubscriptionName}/getDeliveryAttributes",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerTopicEventSubscriptionsGetDeliveryAttributesInput>;

// Output Schema
export interface PartnerTopicEventSubscriptionsGetDeliveryAttributesOutput {
  value?: { name?: string; type: "Static" | "Dynamic" }[];
}
export const PartnerTopicEventSubscriptionsGetDeliveryAttributesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.Literals(["Static", "Dynamic"]),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<PartnerTopicEventSubscriptionsGetDeliveryAttributesOutput>;

// The operation
/**
 * Get delivery attributes for an event subscription of a partner topic.
 *
 * Get all delivery attributes for an event subscription of a partner topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerTopicName - Name of the partner topic.
 * @param eventSubscriptionName - Name of the event subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerTopicEventSubscriptionsGetDeliveryAttributes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerTopicEventSubscriptionsGetDeliveryAttributesInput,
    outputSchema: PartnerTopicEventSubscriptionsGetDeliveryAttributesOutput,
  }));
// Input Schema
export interface PartnerTopicEventSubscriptionsGetFullUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerTopicName: string;
  eventSubscriptionName: string;
}
export const PartnerTopicEventSubscriptionsGetFullUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerTopicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerTopics/{partnerTopicName}/eventSubscriptions/{eventSubscriptionName}/getFullUrl",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerTopicEventSubscriptionsGetFullUrlInput>;

// Output Schema
export interface PartnerTopicEventSubscriptionsGetFullUrlOutput {
  endpointUrl?: string;
}
export const PartnerTopicEventSubscriptionsGetFullUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointUrl: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerTopicEventSubscriptionsGetFullUrlOutput>;

// The operation
/**
 * Get full URL of an event subscription of a partner topic.
 *
 * Get the full endpoint URL for an event subscription of a partner topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerTopicName - Name of the partner topic.
 * @param eventSubscriptionName - Name of the event subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerTopicEventSubscriptionsGetFullUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerTopicEventSubscriptionsGetFullUrlInput,
    outputSchema: PartnerTopicEventSubscriptionsGetFullUrlOutput,
  }));
// Input Schema
export interface PartnerTopicEventSubscriptionsListByPartnerTopicInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerTopicName: string;
  $filter?: string;
  $top?: number;
}
export const PartnerTopicEventSubscriptionsListByPartnerTopicInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerTopicName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerTopics/{partnerTopicName}/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerTopicEventSubscriptionsListByPartnerTopicInput>;

// Output Schema
export interface PartnerTopicEventSubscriptionsListByPartnerTopicOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PartnerTopicEventSubscriptionsListByPartnerTopicOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerTopicEventSubscriptionsListByPartnerTopicOutput>;

// The operation
/**
 * List event subscriptions of a partner topic.
 *
 * List event subscriptions that belong to a specific partner topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerTopicName - Name of the partner topic.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const PartnerTopicEventSubscriptionsListByPartnerTopic =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerTopicEventSubscriptionsListByPartnerTopicInput,
    outputSchema: PartnerTopicEventSubscriptionsListByPartnerTopicOutput,
  }));
// Input Schema
export interface PartnerTopicEventSubscriptionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerTopicName: string;
  eventSubscriptionName: string;
  destination?: {
    endpointType:
      | "WebHook"
      | "EventHub"
      | "StorageQueue"
      | "HybridConnection"
      | "ServiceBusQueue"
      | "ServiceBusTopic"
      | "AzureFunction"
      | "MonitorAlert"
      | "NamespaceTopic";
  };
  deliveryWithResourceIdentity?: {
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string;
    };
    destination?: {
      endpointType:
        | "WebHook"
        | "EventHub"
        | "StorageQueue"
        | "HybridConnection"
        | "ServiceBusQueue"
        | "ServiceBusTopic"
        | "AzureFunction"
        | "MonitorAlert"
        | "NamespaceTopic";
    };
  };
  filter?: {
    subjectBeginsWith?: string;
    subjectEndsWith?: string;
    includedEventTypes?: string[];
    isSubjectCaseSensitive?: boolean;
    enableAdvancedFilteringOnArrays?: boolean;
    advancedFilters?: {
      operatorType:
        | "NumberIn"
        | "NumberNotIn"
        | "NumberLessThan"
        | "NumberGreaterThan"
        | "NumberLessThanOrEquals"
        | "NumberGreaterThanOrEquals"
        | "BoolEquals"
        | "StringIn"
        | "StringNotIn"
        | "StringBeginsWith"
        | "StringEndsWith"
        | "StringContains"
        | "NumberInRange"
        | "NumberNotInRange"
        | "StringNotBeginsWith"
        | "StringNotEndsWith"
        | "StringNotContains"
        | "IsNullOrUndefined"
        | "IsNotNull";
      key?: string;
    }[];
  };
  labels?: string[];
  expirationTimeUtc?: string;
  eventDeliverySchema?:
    | "EventGridSchema"
    | "CustomInputSchema"
    | "CloudEventSchemaV1_0";
  retryPolicy?: {
    maxDeliveryAttempts?: number;
    eventTimeToLiveInMinutes?: number;
  };
  deadLetterDestination?: { endpointType: "StorageBlob" };
  deadLetterWithResourceIdentity?: {
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string;
    };
    deadLetterDestination?: { endpointType: "StorageBlob" };
  };
}
export const PartnerTopicEventSubscriptionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerTopicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
    destination: Schema.optional(
      Schema.Struct({
        endpointType: Schema.Literals([
          "WebHook",
          "EventHub",
          "StorageQueue",
          "HybridConnection",
          "ServiceBusQueue",
          "ServiceBusTopic",
          "AzureFunction",
          "MonitorAlert",
          "NamespaceTopic",
        ]),
      }),
    ),
    deliveryWithResourceIdentity: Schema.optional(
      Schema.Struct({
        identity: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentity: Schema.optional(Schema.String),
          }),
        ),
        destination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals([
              "WebHook",
              "EventHub",
              "StorageQueue",
              "HybridConnection",
              "ServiceBusQueue",
              "ServiceBusTopic",
              "AzureFunction",
              "MonitorAlert",
              "NamespaceTopic",
            ]),
          }),
        ),
      }),
    ),
    filter: Schema.optional(
      Schema.Struct({
        subjectBeginsWith: Schema.optional(Schema.String),
        subjectEndsWith: Schema.optional(Schema.String),
        includedEventTypes: Schema.optional(Schema.Array(Schema.String)),
        isSubjectCaseSensitive: Schema.optional(Schema.Boolean),
        enableAdvancedFilteringOnArrays: Schema.optional(Schema.Boolean),
        advancedFilters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              operatorType: Schema.Literals([
                "NumberIn",
                "NumberNotIn",
                "NumberLessThan",
                "NumberGreaterThan",
                "NumberLessThanOrEquals",
                "NumberGreaterThanOrEquals",
                "BoolEquals",
                "StringIn",
                "StringNotIn",
                "StringBeginsWith",
                "StringEndsWith",
                "StringContains",
                "NumberInRange",
                "NumberNotInRange",
                "StringNotBeginsWith",
                "StringNotEndsWith",
                "StringNotContains",
                "IsNullOrUndefined",
                "IsNotNull",
              ]),
              key: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    labels: Schema.optional(Schema.Array(Schema.String)),
    expirationTimeUtc: Schema.optional(Schema.String),
    eventDeliverySchema: Schema.optional(
      Schema.Literals([
        "EventGridSchema",
        "CustomInputSchema",
        "CloudEventSchemaV1_0",
      ]),
    ),
    retryPolicy: Schema.optional(
      Schema.Struct({
        maxDeliveryAttempts: Schema.optional(Schema.Number),
        eventTimeToLiveInMinutes: Schema.optional(Schema.Number),
      }),
    ),
    deadLetterDestination: Schema.optional(
      Schema.Struct({
        endpointType: Schema.Literals(["StorageBlob"]),
      }),
    ),
    deadLetterWithResourceIdentity: Schema.optional(
      Schema.Struct({
        identity: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentity: Schema.optional(Schema.String),
          }),
        ),
        deadLetterDestination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals(["StorageBlob"]),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerTopics/{partnerTopicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerTopicEventSubscriptionsUpdateInput>;

// Output Schema
export interface PartnerTopicEventSubscriptionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerTopicEventSubscriptionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerTopicEventSubscriptionsUpdateOutput>;

// The operation
/**
 * Update event subscription of a partner topic.
 *
 * Update an existing event subscription of a partner topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerTopicName - Name of the partner topic.
 * @param eventSubscriptionName - Name of the event subscription to be updated.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerTopicEventSubscriptionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerTopicEventSubscriptionsUpdateInput,
    outputSchema: PartnerTopicEventSubscriptionsUpdateOutput,
  }));
// Input Schema
export interface PartnerTopicsActivateInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerTopicName: string;
}
export const PartnerTopicsActivateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerTopicName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerTopics/{partnerTopicName}/activate",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerTopicsActivateInput>;

// Output Schema
export interface PartnerTopicsActivateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerTopicsActivateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerTopicsActivateOutput>;

// The operation
/**
 * Activate a partner topic.
 *
 * Activate a newly created partner topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerTopicName - Name of the partner topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerTopicsActivate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerTopicsActivateInput,
    outputSchema: PartnerTopicsActivateOutput,
  }),
);
// Input Schema
export interface PartnerTopicsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerTopicName: string;
  properties?: {
    partnerRegistrationImmutableId?: string;
    source?: string;
    eventTypeInfo?: {
      kind?: "Inline";
      inlineEventTypes?: Record<
        string,
        {
          description?: string;
          displayName?: string;
          documentationUrl?: string;
          dataSchemaUrl?: string;
        }
      >;
    };
    expirationTimeIfNotActivatedUtc?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "IdleDueToMirroredChannelResourceDeletion";
    activationState?: "NeverActivated" | "Activated" | "Deactivated";
    partnerTopicFriendlyDescription?: string;
    messageForActivation?: string;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  location: string;
  tags?: Record<string, string>;
}
export const PartnerTopicsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerTopicName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        partnerRegistrationImmutableId: Schema.optional(Schema.String),
        source: Schema.optional(Schema.String),
        eventTypeInfo: Schema.optional(
          Schema.Struct({
            kind: Schema.optional(Schema.Literals(["Inline"])),
            inlineEventTypes: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  description: Schema.optional(Schema.String),
                  displayName: Schema.optional(Schema.String),
                  documentationUrl: Schema.optional(Schema.String),
                  dataSchemaUrl: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        expirationTimeIfNotActivatedUtc: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "IdleDueToMirroredChannelResourceDeletion",
          ]),
        ),
        activationState: Schema.optional(
          Schema.Literals(["NeverActivated", "Activated", "Deactivated"]),
        ),
        partnerTopicFriendlyDescription: Schema.optional(Schema.String),
        messageForActivation: Schema.optional(Schema.String),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
          ]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerTopics/{partnerTopicName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerTopicsCreateOrUpdateInput>;

// Output Schema
export interface PartnerTopicsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerTopicsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerTopicsCreateOrUpdateOutput>;

// The operation
/**
 * Create a partner topic.
 *
 * Asynchronously creates a new partner topic with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerTopicName - Name of the partner topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerTopicsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerTopicsCreateOrUpdateInput,
    outputSchema: PartnerTopicsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface PartnerTopicsDeactivateInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerTopicName: string;
}
export const PartnerTopicsDeactivateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerTopicName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerTopics/{partnerTopicName}/deactivate",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerTopicsDeactivateInput>;

// Output Schema
export interface PartnerTopicsDeactivateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerTopicsDeactivateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerTopicsDeactivateOutput>;

// The operation
/**
 * Deactivate a partner topic.
 *
 * Deactivate specific partner topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerTopicName - Name of the partner topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerTopicsDeactivate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerTopicsDeactivateInput,
    outputSchema: PartnerTopicsDeactivateOutput,
  }),
);
// Input Schema
export interface PartnerTopicsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerTopicName: string;
}
export const PartnerTopicsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerTopicName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerTopics/{partnerTopicName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerTopicsDeleteInput>;

// Output Schema
export type PartnerTopicsDeleteOutput = void;
export const PartnerTopicsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PartnerTopicsDeleteOutput>;

// The operation
/**
 * Delete a partner topic.
 *
 * Delete existing partner topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerTopicName - Name of the partner topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerTopicsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PartnerTopicsDeleteInput,
  outputSchema: PartnerTopicsDeleteOutput,
}));
// Input Schema
export interface PartnerTopicsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerTopicName: string;
}
export const PartnerTopicsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  partnerTopicName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerTopics/{partnerTopicName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<PartnerTopicsGetInput>;

// Output Schema
export interface PartnerTopicsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PartnerTopicsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  },
) as unknown as Schema.Codec<PartnerTopicsGetOutput>;

// The operation
/**
 * Get a partner topic.
 *
 * Get properties of a partner topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerTopicName - Name of the partner topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerTopicsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PartnerTopicsGetInput,
  outputSchema: PartnerTopicsGetOutput,
}));
// Input Schema
export interface PartnerTopicsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $top?: number;
}
export const PartnerTopicsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerTopics",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerTopicsListByResourceGroupInput>;

// Output Schema
export interface PartnerTopicsListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PartnerTopicsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerTopicsListByResourceGroupOutput>;

// The operation
/**
 * List partner topics under a resource group.
 *
 * List all the partner topics under a resource group.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const PartnerTopicsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerTopicsListByResourceGroupInput,
    outputSchema: PartnerTopicsListByResourceGroupOutput,
  }));
// Input Schema
export interface PartnerTopicsListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  $top?: number;
}
export const PartnerTopicsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/partnerTopics",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerTopicsListBySubscriptionInput>;

// Output Schema
export interface PartnerTopicsListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PartnerTopicsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PartnerTopicsListBySubscriptionOutput>;

// The operation
/**
 * List partner topics under an Azure subscription.
 *
 * List all the partner topics under an Azure subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const PartnerTopicsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerTopicsListBySubscriptionInput,
    outputSchema: PartnerTopicsListBySubscriptionOutput,
  }));
// Input Schema
export interface PartnerTopicsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  partnerTopicName: string;
  tags?: Record<string, string>;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const PartnerTopicsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    partnerTopicName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
          ]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/partnerTopics/{partnerTopicName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PartnerTopicsUpdateInput>;

// Output Schema
export type PartnerTopicsUpdateOutput = void;
export const PartnerTopicsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PartnerTopicsUpdateOutput>;

// The operation
/**
 * Update a partner topic.
 *
 * Asynchronously updates a partner topic with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param partnerTopicName - Name of the partner topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PartnerTopicsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PartnerTopicsUpdateInput,
  outputSchema: PartnerTopicsUpdateOutput,
}));
// Input Schema
export interface PermissionBindingsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  permissionBindingName: string;
  properties?: {
    description?: string;
    topicSpaceName?: string;
    permission?: "Publisher" | "Subscriber";
    clientGroupName?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "Deleted";
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const PermissionBindingsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    permissionBindingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        topicSpaceName: Schema.optional(Schema.String),
        permission: Schema.optional(
          Schema.Literals(["Publisher", "Subscriber"]),
        ),
        clientGroupName: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "Deleted",
          ]),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/permissionBindings/{permissionBindingName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PermissionBindingsCreateOrUpdateInput>;

// Output Schema
export interface PermissionBindingsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PermissionBindingsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PermissionBindingsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a permission binding.
 *
 * Create or update a permission binding with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param permissionBindingName - The permission binding name.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PermissionBindingsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PermissionBindingsCreateOrUpdateInput,
    outputSchema: PermissionBindingsCreateOrUpdateOutput,
  }));
// Input Schema
export interface PermissionBindingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  permissionBindingName: string;
}
export const PermissionBindingsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    permissionBindingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/permissionBindings/{permissionBindingName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PermissionBindingsDeleteInput>;

// Output Schema
export type PermissionBindingsDeleteOutput = void;
export const PermissionBindingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PermissionBindingsDeleteOutput>;

// The operation
/**
 * Delete a permission binding.
 *
 * Delete an existing permission binding.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param permissionBindingName - Name of the permission binding.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PermissionBindingsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PermissionBindingsDeleteInput,
    outputSchema: PermissionBindingsDeleteOutput,
  }),
);
// Input Schema
export interface PermissionBindingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  permissionBindingName: string;
}
export const PermissionBindingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    permissionBindingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/permissionBindings/{permissionBindingName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PermissionBindingsGetInput>;

// Output Schema
export interface PermissionBindingsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PermissionBindingsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PermissionBindingsGetOutput>;

// The operation
/**
 * Get a permission binding.
 *
 * Get properties of a permission binding.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param permissionBindingName - Name of the permission binding.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PermissionBindingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PermissionBindingsGetInput,
    outputSchema: PermissionBindingsGetOutput,
  }),
);
// Input Schema
export interface PermissionBindingsListByNamespaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  $filter?: string;
  $top?: number;
}
export const PermissionBindingsListByNamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/permissionBindings",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PermissionBindingsListByNamespaceInput>;

// Output Schema
export interface PermissionBindingsListByNamespaceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PermissionBindingsListByNamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PermissionBindingsListByNamespaceOutput>;

// The operation
/**
 * List all permission bindings under a namespace.
 *
 * Get all the permission bindings under a namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const PermissionBindingsListByNamespace =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PermissionBindingsListByNamespaceInput,
    outputSchema: PermissionBindingsListByNamespaceOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  parentType: "topics" | "domains" | "partnerNamespaces" | "namespaces";
  parentName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    parentType: Schema.Literals([
      "topics",
      "domains",
      "partnerNamespaces",
      "namespaces",
    ]).pipe(T.PathParam()),
    parentName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/{parentType}/{parentName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export type PrivateEndpointConnectionsDeleteOutput = void;
export const PrivateEndpointConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Delete a specific private endpoint connection.
 *
 * Delete a specific private endpoint connection under a topic, domain, or partner namespace or namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param parentType - The type of the parent resource. This can be either \\'topics\\', \\'domains\\', or \\'partnerNamespaces\\' or \\'namespaces\\'.
 * @param parentName - The name of the parent resource (namely, either, the topic name, domain name, or partner namespace name or namespace name).
 * @param privateEndpointConnectionName - The name of the private endpoint connection connection.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  parentType: "topics" | "domains" | "partnerNamespaces" | "namespaces";
  parentName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    parentType: Schema.Literals([
      "topics",
      "domains",
      "partnerNamespaces",
      "namespaces",
    ]).pipe(T.PathParam()),
    parentName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/{parentType}/{parentName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Get a specific private endpoint connection.
 *
 * Get a specific private endpoint connection under a topic, domain, or partner namespace or namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param parentType - The type of the parent resource. This can be either \\'topics\\', \\'domains\\', or \\'partnerNamespaces\\' or \\'namespaces\\'.
 * @param parentName - The name of the parent resource (namely, either, the topic name, domain name, or partner namespace name or namespace name).
 * @param privateEndpointConnectionName - The name of the private endpoint connection connection.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  parentType: "topics" | "domains" | "partnerNamespaces" | "namespaces";
  parentName: string;
  $filter?: string;
  $top?: number;
}
export const PrivateEndpointConnectionsListByResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    parentType: Schema.Literals([
      "topics",
      "domains",
      "partnerNamespaces",
      "namespaces",
    ]).pipe(T.PathParam()),
    parentName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/{parentType}/{parentName}/privateEndpointConnections",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByResourceInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByResourceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const PrivateEndpointConnectionsListByResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByResourceOutput>;

// The operation
/**
 * Lists all private endpoint connections under a resource.
 *
 * Get all private endpoint connections under a topic, domain, or partner namespace or namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param parentType - The type of the parent resource. This can be either \\'topics\\', \\'domains\\', or \\'partnerNamespaces\\' or \\'namespaces\\'.
 * @param parentName - The name of the parent resource (namely, either, the topic name, domain name, or partner namespace name or namespace name).
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const PrivateEndpointConnectionsListByResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByResourceInput,
    outputSchema: PrivateEndpointConnectionsListByResourceOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  parentType: "topics" | "domains" | "partnerNamespaces" | "namespaces";
  parentName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    groupIds?: string[];
    privateLinkServiceConnectionState?: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: string;
    };
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed";
  };
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    parentType: Schema.Literals([
      "topics",
      "domains",
      "partnerNamespaces",
      "namespaces",
    ]).pipe(T.PathParam()),
    parentName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        groupIds: Schema.optional(Schema.Array(Schema.String)),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Literals([
                "Pending",
                "Approved",
                "Rejected",
                "Disconnected",
              ]),
            ),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.String),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
          ]),
        ),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/{parentType}/{parentName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateInput>;

// Output Schema
export interface PrivateEndpointConnectionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateEndpointConnectionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsUpdateOutput>;

// The operation
/**
 * Update a specific private endpoint connection.
 *
 * Update a specific private endpoint connection under a topic, domain or partner namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param parentType - The type of the parent resource. This can be either \\'topics\\', \\'domains\\', or \\'partnerNamespaces\\' or \\'namespaces\\'.
 * @param parentName - The name of the parent resource (namely, either, the topic name, domain name, or partner namespace name or namespace name).
 * @param privateEndpointConnectionName - The name of the private endpoint connection connection.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PrivateEndpointConnectionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsUpdateInput,
    outputSchema: PrivateEndpointConnectionsUpdateOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  parentType: string;
  parentName: string;
  privateLinkResourceName: string;
}
export const PrivateLinkResourcesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    parentType: Schema.String.pipe(T.PathParam()),
    parentName: Schema.String.pipe(T.PathParam()),
    privateLinkResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/{parentType}/{parentName}/privateLinkResources/{privateLinkResourceName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesGetInput>;

// Output Schema
export interface PrivateLinkResourcesGetOutput {
  properties?: {
    groupId?: string;
    displayName?: string;
    requiredMembers?: string[];
    requiredZoneNames?: string[];
  };
  id?: string;
  name?: string;
  type?: string;
}
export const PrivateLinkResourcesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        groupId: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        requiredMembers: Schema.optional(Schema.Array(Schema.String)),
        requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesGetOutput>;

// The operation
/**
 * Get a private link resource.
 *
 * Get properties of a private link resource.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param parentType - The type of the parent resource. This can be either \\'topics\\', \\'domains\\', or \\'partnerNamespaces\\' or \\'namespaces\\'.
 * @param parentName - The name of the parent resource (namely, either, the topic name, domain name, or partner namespace name or namespace name).
 * @param privateLinkResourceName - The name of private link resource will be either topic, domain, partnerNamespace or namespace.
 * @param api-version - Version of the API to be used with the client request.
 */
export const PrivateLinkResourcesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PrivateLinkResourcesGetInput,
    outputSchema: PrivateLinkResourcesGetOutput,
  }),
);
// Input Schema
export interface PrivateLinkResourcesListByResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  parentType: string;
  parentName: string;
  $filter?: string;
  $top?: number;
}
export const PrivateLinkResourcesListByResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    parentType: Schema.String.pipe(T.PathParam()),
    parentName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/{parentType}/{parentName}/privateLinkResources",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByResourceInput>;

// Output Schema
export interface PrivateLinkResourcesListByResourceOutput {
  value?: {
    properties?: {
      groupId?: string;
      displayName?: string;
      requiredMembers?: string[];
      requiredZoneNames?: string[];
    };
    id?: string;
    name?: string;
    type?: string;
  }[];
  nextLink?: string;
}
export const PrivateLinkResourcesListByResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              groupId: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
              requiredMembers: Schema.optional(Schema.Array(Schema.String)),
              requiredZoneNames: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByResourceOutput>;

// The operation
/**
 * List private link resources under specific topic, domain, or partner namespace or namespace.
 *
 * List all the private link resources under a topic, domain, or partner namespace or namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param parentType - The type of the parent resource. This can be either \\'topics\\', \\'domains\\', or \\'partnerNamespaces\\' or \\'namespaces\\'.
 * @param parentName - The name of the parent resource (namely, either, the topic name, domain name, or partner namespace or namespace name).
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const PrivateLinkResourcesListByResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByResourceInput,
    outputSchema: PrivateLinkResourcesListByResourceOutput,
  }));
// Input Schema
export interface SystemTopicEventSubscriptionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  systemTopicName: string;
  eventSubscriptionName: string;
  properties?: {
    topic?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "AwaitingManualAction";
    destination?: {
      endpointType:
        | "WebHook"
        | "EventHub"
        | "StorageQueue"
        | "HybridConnection"
        | "ServiceBusQueue"
        | "ServiceBusTopic"
        | "AzureFunction"
        | "MonitorAlert"
        | "NamespaceTopic";
    };
    deliveryWithResourceIdentity?: {
      identity?: {
        type?: "SystemAssigned" | "UserAssigned";
        userAssignedIdentity?: string;
      };
      destination?: {
        endpointType:
          | "WebHook"
          | "EventHub"
          | "StorageQueue"
          | "HybridConnection"
          | "ServiceBusQueue"
          | "ServiceBusTopic"
          | "AzureFunction"
          | "MonitorAlert"
          | "NamespaceTopic";
      };
    };
    filter?: {
      subjectBeginsWith?: string;
      subjectEndsWith?: string;
      includedEventTypes?: string[];
      isSubjectCaseSensitive?: boolean;
      enableAdvancedFilteringOnArrays?: boolean;
      advancedFilters?: {
        operatorType:
          | "NumberIn"
          | "NumberNotIn"
          | "NumberLessThan"
          | "NumberGreaterThan"
          | "NumberLessThanOrEquals"
          | "NumberGreaterThanOrEquals"
          | "BoolEquals"
          | "StringIn"
          | "StringNotIn"
          | "StringBeginsWith"
          | "StringEndsWith"
          | "StringContains"
          | "NumberInRange"
          | "NumberNotInRange"
          | "StringNotBeginsWith"
          | "StringNotEndsWith"
          | "StringNotContains"
          | "IsNullOrUndefined"
          | "IsNotNull";
        key?: string;
      }[];
    };
    labels?: string[];
    expirationTimeUtc?: string;
    eventDeliverySchema?:
      | "EventGridSchema"
      | "CustomInputSchema"
      | "CloudEventSchemaV1_0";
    retryPolicy?: {
      maxDeliveryAttempts?: number;
      eventTimeToLiveInMinutes?: number;
    };
    deadLetterDestination?: { endpointType: "StorageBlob" };
    deadLetterWithResourceIdentity?: {
      identity?: {
        type?: "SystemAssigned" | "UserAssigned";
        userAssignedIdentity?: string;
      };
      deadLetterDestination?: { endpointType: "StorageBlob" };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const SystemTopicEventSubscriptionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    systemTopicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        topic: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "AwaitingManualAction",
          ]),
        ),
        destination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals([
              "WebHook",
              "EventHub",
              "StorageQueue",
              "HybridConnection",
              "ServiceBusQueue",
              "ServiceBusTopic",
              "AzureFunction",
              "MonitorAlert",
              "NamespaceTopic",
            ]),
          }),
        ),
        deliveryWithResourceIdentity: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["SystemAssigned", "UserAssigned"]),
                ),
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
            destination: Schema.optional(
              Schema.Struct({
                endpointType: Schema.Literals([
                  "WebHook",
                  "EventHub",
                  "StorageQueue",
                  "HybridConnection",
                  "ServiceBusQueue",
                  "ServiceBusTopic",
                  "AzureFunction",
                  "MonitorAlert",
                  "NamespaceTopic",
                ]),
              }),
            ),
          }),
        ),
        filter: Schema.optional(
          Schema.Struct({
            subjectBeginsWith: Schema.optional(Schema.String),
            subjectEndsWith: Schema.optional(Schema.String),
            includedEventTypes: Schema.optional(Schema.Array(Schema.String)),
            isSubjectCaseSensitive: Schema.optional(Schema.Boolean),
            enableAdvancedFilteringOnArrays: Schema.optional(Schema.Boolean),
            advancedFilters: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  operatorType: Schema.Literals([
                    "NumberIn",
                    "NumberNotIn",
                    "NumberLessThan",
                    "NumberGreaterThan",
                    "NumberLessThanOrEquals",
                    "NumberGreaterThanOrEquals",
                    "BoolEquals",
                    "StringIn",
                    "StringNotIn",
                    "StringBeginsWith",
                    "StringEndsWith",
                    "StringContains",
                    "NumberInRange",
                    "NumberNotInRange",
                    "StringNotBeginsWith",
                    "StringNotEndsWith",
                    "StringNotContains",
                    "IsNullOrUndefined",
                    "IsNotNull",
                  ]),
                  key: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        labels: Schema.optional(Schema.Array(Schema.String)),
        expirationTimeUtc: Schema.optional(Schema.String),
        eventDeliverySchema: Schema.optional(
          Schema.Literals([
            "EventGridSchema",
            "CustomInputSchema",
            "CloudEventSchemaV1_0",
          ]),
        ),
        retryPolicy: Schema.optional(
          Schema.Struct({
            maxDeliveryAttempts: Schema.optional(Schema.Number),
            eventTimeToLiveInMinutes: Schema.optional(Schema.Number),
          }),
        ),
        deadLetterDestination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals(["StorageBlob"]),
          }),
        ),
        deadLetterWithResourceIdentity: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["SystemAssigned", "UserAssigned"]),
                ),
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
            deadLetterDestination: Schema.optional(
              Schema.Struct({
                endpointType: Schema.Literals(["StorageBlob"]),
              }),
            ),
          }),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<SystemTopicEventSubscriptionsCreateOrUpdateInput>;

// Output Schema
export interface SystemTopicEventSubscriptionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SystemTopicEventSubscriptionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SystemTopicEventSubscriptionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an event subscription for a system topic.
 *
 * Asynchronously creates or updates an event subscription with the specified parameters. Existing event subscriptions will be updated with this API.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param systemTopicName - Name of the system topic.
 * @param eventSubscriptionName - Name of the event subscription to be created. Event subscription names must be between 3 and 64 characters in length and use alphanumeric letters only.
 * @param api-version - Version of the API to be used with the client request.
 */
export const SystemTopicEventSubscriptionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SystemTopicEventSubscriptionsCreateOrUpdateInput,
    outputSchema: SystemTopicEventSubscriptionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SystemTopicEventSubscriptionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  systemTopicName: string;
  eventSubscriptionName: string;
}
export const SystemTopicEventSubscriptionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    systemTopicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<SystemTopicEventSubscriptionsDeleteInput>;

// Output Schema
export type SystemTopicEventSubscriptionsDeleteOutput = void;
export const SystemTopicEventSubscriptionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SystemTopicEventSubscriptionsDeleteOutput>;

// The operation
/**
 * Delete an event subscription of a system topic.
 *
 * Delete an existing event subscription of a system topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param systemTopicName - Name of the system topic.
 * @param eventSubscriptionName - Name of the event subscription to be deleted.
 * @param api-version - Version of the API to be used with the client request.
 */
export const SystemTopicEventSubscriptionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SystemTopicEventSubscriptionsDeleteInput,
    outputSchema: SystemTopicEventSubscriptionsDeleteOutput,
  }));
// Input Schema
export interface SystemTopicEventSubscriptionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  systemTopicName: string;
  eventSubscriptionName: string;
}
export const SystemTopicEventSubscriptionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    systemTopicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<SystemTopicEventSubscriptionsGetInput>;

// Output Schema
export interface SystemTopicEventSubscriptionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SystemTopicEventSubscriptionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SystemTopicEventSubscriptionsGetOutput>;

// The operation
/**
 * Get an event subscription of a system topic.
 *
 * Get an event subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param systemTopicName - Name of the system topic.
 * @param eventSubscriptionName - Name of the event subscription to be found.
 * @param api-version - Version of the API to be used with the client request.
 */
export const SystemTopicEventSubscriptionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SystemTopicEventSubscriptionsGetInput,
    outputSchema: SystemTopicEventSubscriptionsGetOutput,
  }));
// Input Schema
export interface SystemTopicEventSubscriptionsGetDeliveryAttributesInput {
  subscriptionId: string;
  resourceGroupName: string;
  systemTopicName: string;
  eventSubscriptionName: string;
}
export const SystemTopicEventSubscriptionsGetDeliveryAttributesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    systemTopicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}/eventSubscriptions/{eventSubscriptionName}/getDeliveryAttributes",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<SystemTopicEventSubscriptionsGetDeliveryAttributesInput>;

// Output Schema
export interface SystemTopicEventSubscriptionsGetDeliveryAttributesOutput {
  value?: { name?: string; type: "Static" | "Dynamic" }[];
}
export const SystemTopicEventSubscriptionsGetDeliveryAttributesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.Literals(["Static", "Dynamic"]),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SystemTopicEventSubscriptionsGetDeliveryAttributesOutput>;

// The operation
/**
 * Get delivery attributes for an event subscription.
 *
 * Get all delivery attributes for an event subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param systemTopicName - Name of the system topic.
 * @param eventSubscriptionName - Name of the event subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const SystemTopicEventSubscriptionsGetDeliveryAttributes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SystemTopicEventSubscriptionsGetDeliveryAttributesInput,
    outputSchema: SystemTopicEventSubscriptionsGetDeliveryAttributesOutput,
  }));
// Input Schema
export interface SystemTopicEventSubscriptionsGetFullUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  systemTopicName: string;
  eventSubscriptionName: string;
}
export const SystemTopicEventSubscriptionsGetFullUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    systemTopicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}/eventSubscriptions/{eventSubscriptionName}/getFullUrl",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<SystemTopicEventSubscriptionsGetFullUrlInput>;

// Output Schema
export interface SystemTopicEventSubscriptionsGetFullUrlOutput {
  endpointUrl?: string;
}
export const SystemTopicEventSubscriptionsGetFullUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointUrl: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SystemTopicEventSubscriptionsGetFullUrlOutput>;

// The operation
/**
 * Get full URL of an event subscription of a system topic.
 *
 * Get the full endpoint URL for an event subscription of a system topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param systemTopicName - Name of the system topic.
 * @param eventSubscriptionName - Name of the event subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const SystemTopicEventSubscriptionsGetFullUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SystemTopicEventSubscriptionsGetFullUrlInput,
    outputSchema: SystemTopicEventSubscriptionsGetFullUrlOutput,
  }));
// Input Schema
export interface SystemTopicEventSubscriptionsListBySystemTopicInput {
  subscriptionId: string;
  resourceGroupName: string;
  systemTopicName: string;
  $filter?: string;
  $top?: number;
}
export const SystemTopicEventSubscriptionsListBySystemTopicInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    systemTopicName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<SystemTopicEventSubscriptionsListBySystemTopicInput>;

// Output Schema
export interface SystemTopicEventSubscriptionsListBySystemTopicOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SystemTopicEventSubscriptionsListBySystemTopicOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SystemTopicEventSubscriptionsListBySystemTopicOutput>;

// The operation
/**
 * List event subscriptions of a system topic.
 *
 * List event subscriptions that belong to a specific system topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param systemTopicName - Name of the system topic.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const SystemTopicEventSubscriptionsListBySystemTopic =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SystemTopicEventSubscriptionsListBySystemTopicInput,
    outputSchema: SystemTopicEventSubscriptionsListBySystemTopicOutput,
  }));
// Input Schema
export interface SystemTopicEventSubscriptionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  systemTopicName: string;
  eventSubscriptionName: string;
  destination?: {
    endpointType:
      | "WebHook"
      | "EventHub"
      | "StorageQueue"
      | "HybridConnection"
      | "ServiceBusQueue"
      | "ServiceBusTopic"
      | "AzureFunction"
      | "MonitorAlert"
      | "NamespaceTopic";
  };
  deliveryWithResourceIdentity?: {
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string;
    };
    destination?: {
      endpointType:
        | "WebHook"
        | "EventHub"
        | "StorageQueue"
        | "HybridConnection"
        | "ServiceBusQueue"
        | "ServiceBusTopic"
        | "AzureFunction"
        | "MonitorAlert"
        | "NamespaceTopic";
    };
  };
  filter?: {
    subjectBeginsWith?: string;
    subjectEndsWith?: string;
    includedEventTypes?: string[];
    isSubjectCaseSensitive?: boolean;
    enableAdvancedFilteringOnArrays?: boolean;
    advancedFilters?: {
      operatorType:
        | "NumberIn"
        | "NumberNotIn"
        | "NumberLessThan"
        | "NumberGreaterThan"
        | "NumberLessThanOrEquals"
        | "NumberGreaterThanOrEquals"
        | "BoolEquals"
        | "StringIn"
        | "StringNotIn"
        | "StringBeginsWith"
        | "StringEndsWith"
        | "StringContains"
        | "NumberInRange"
        | "NumberNotInRange"
        | "StringNotBeginsWith"
        | "StringNotEndsWith"
        | "StringNotContains"
        | "IsNullOrUndefined"
        | "IsNotNull";
      key?: string;
    }[];
  };
  labels?: string[];
  expirationTimeUtc?: string;
  eventDeliverySchema?:
    | "EventGridSchema"
    | "CustomInputSchema"
    | "CloudEventSchemaV1_0";
  retryPolicy?: {
    maxDeliveryAttempts?: number;
    eventTimeToLiveInMinutes?: number;
  };
  deadLetterDestination?: { endpointType: "StorageBlob" };
  deadLetterWithResourceIdentity?: {
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string;
    };
    deadLetterDestination?: { endpointType: "StorageBlob" };
  };
}
export const SystemTopicEventSubscriptionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    systemTopicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
    destination: Schema.optional(
      Schema.Struct({
        endpointType: Schema.Literals([
          "WebHook",
          "EventHub",
          "StorageQueue",
          "HybridConnection",
          "ServiceBusQueue",
          "ServiceBusTopic",
          "AzureFunction",
          "MonitorAlert",
          "NamespaceTopic",
        ]),
      }),
    ),
    deliveryWithResourceIdentity: Schema.optional(
      Schema.Struct({
        identity: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentity: Schema.optional(Schema.String),
          }),
        ),
        destination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals([
              "WebHook",
              "EventHub",
              "StorageQueue",
              "HybridConnection",
              "ServiceBusQueue",
              "ServiceBusTopic",
              "AzureFunction",
              "MonitorAlert",
              "NamespaceTopic",
            ]),
          }),
        ),
      }),
    ),
    filter: Schema.optional(
      Schema.Struct({
        subjectBeginsWith: Schema.optional(Schema.String),
        subjectEndsWith: Schema.optional(Schema.String),
        includedEventTypes: Schema.optional(Schema.Array(Schema.String)),
        isSubjectCaseSensitive: Schema.optional(Schema.Boolean),
        enableAdvancedFilteringOnArrays: Schema.optional(Schema.Boolean),
        advancedFilters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              operatorType: Schema.Literals([
                "NumberIn",
                "NumberNotIn",
                "NumberLessThan",
                "NumberGreaterThan",
                "NumberLessThanOrEquals",
                "NumberGreaterThanOrEquals",
                "BoolEquals",
                "StringIn",
                "StringNotIn",
                "StringBeginsWith",
                "StringEndsWith",
                "StringContains",
                "NumberInRange",
                "NumberNotInRange",
                "StringNotBeginsWith",
                "StringNotEndsWith",
                "StringNotContains",
                "IsNullOrUndefined",
                "IsNotNull",
              ]),
              key: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    labels: Schema.optional(Schema.Array(Schema.String)),
    expirationTimeUtc: Schema.optional(Schema.String),
    eventDeliverySchema: Schema.optional(
      Schema.Literals([
        "EventGridSchema",
        "CustomInputSchema",
        "CloudEventSchemaV1_0",
      ]),
    ),
    retryPolicy: Schema.optional(
      Schema.Struct({
        maxDeliveryAttempts: Schema.optional(Schema.Number),
        eventTimeToLiveInMinutes: Schema.optional(Schema.Number),
      }),
    ),
    deadLetterDestination: Schema.optional(
      Schema.Struct({
        endpointType: Schema.Literals(["StorageBlob"]),
      }),
    ),
    deadLetterWithResourceIdentity: Schema.optional(
      Schema.Struct({
        identity: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentity: Schema.optional(Schema.String),
          }),
        ),
        deadLetterDestination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals(["StorageBlob"]),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<SystemTopicEventSubscriptionsUpdateInput>;

// Output Schema
export interface SystemTopicEventSubscriptionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SystemTopicEventSubscriptionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SystemTopicEventSubscriptionsUpdateOutput>;

// The operation
/**
 * Update event subscription of a system topic.
 *
 * Update an existing event subscription of a system topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param systemTopicName - Name of the system topic.
 * @param eventSubscriptionName - Name of the event subscription to be updated.
 * @param api-version - Version of the API to be used with the client request.
 */
export const SystemTopicEventSubscriptionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SystemTopicEventSubscriptionsUpdateInput,
    outputSchema: SystemTopicEventSubscriptionsUpdateOutput,
  }));
// Input Schema
export interface SystemTopicsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  systemTopicName: string;
  properties?: {
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed";
    source?: string;
    topicType?: string;
    metricResourceId?: string;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  location: string;
  tags?: Record<string, string>;
}
export const SystemTopicsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    systemTopicName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
          ]),
        ),
        source: Schema.optional(Schema.String),
        topicType: Schema.optional(Schema.String),
        metricResourceId: Schema.optional(Schema.String),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
          ]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<SystemTopicsCreateOrUpdateInput>;

// Output Schema
export interface SystemTopicsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SystemTopicsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SystemTopicsCreateOrUpdateOutput>;

// The operation
/**
 * Create a system topic.
 *
 * Asynchronously creates a new system topic with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param systemTopicName - Name of the system topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const SystemTopicsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SystemTopicsCreateOrUpdateInput,
    outputSchema: SystemTopicsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface SystemTopicsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  systemTopicName: string;
}
export const SystemTopicsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    systemTopicName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<SystemTopicsDeleteInput>;

// Output Schema
export type SystemTopicsDeleteOutput = void;
export const SystemTopicsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SystemTopicsDeleteOutput>;

// The operation
/**
 * Delete a system topic.
 *
 * Delete existing system topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param systemTopicName - Name of the system topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const SystemTopicsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SystemTopicsDeleteInput,
  outputSchema: SystemTopicsDeleteOutput,
}));
// Input Schema
export interface SystemTopicsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  systemTopicName: string;
}
export const SystemTopicsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  systemTopicName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<SystemTopicsGetInput>;

// Output Schema
export interface SystemTopicsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SystemTopicsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<SystemTopicsGetOutput>;

// The operation
/**
 * Get a system topic.
 *
 * Get properties of a system topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param systemTopicName - Name of the system topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const SystemTopicsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SystemTopicsGetInput,
  outputSchema: SystemTopicsGetOutput,
}));
// Input Schema
export interface SystemTopicsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $top?: number;
}
export const SystemTopicsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<SystemTopicsListByResourceGroupInput>;

// Output Schema
export interface SystemTopicsListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SystemTopicsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SystemTopicsListByResourceGroupOutput>;

// The operation
/**
 * List system topics under a resource group.
 *
 * List all the system topics under a resource group.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const SystemTopicsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SystemTopicsListByResourceGroupInput,
    outputSchema: SystemTopicsListByResourceGroupOutput,
  }));
// Input Schema
export interface SystemTopicsListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  $top?: number;
}
export const SystemTopicsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/systemTopics",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<SystemTopicsListBySubscriptionInput>;

// Output Schema
export interface SystemTopicsListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const SystemTopicsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SystemTopicsListBySubscriptionOutput>;

// The operation
/**
 * List system topics under an Azure subscription.
 *
 * List all the system topics under an Azure subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const SystemTopicsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SystemTopicsListBySubscriptionInput,
    outputSchema: SystemTopicsListBySubscriptionOutput,
  }));
// Input Schema
export interface SystemTopicsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  systemTopicName: string;
  tags?: Record<string, string>;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const SystemTopicsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    systemTopicName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
          ]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/systemTopics/{systemTopicName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<SystemTopicsUpdateInput>;

// Output Schema
export interface SystemTopicsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const SystemTopicsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SystemTopicsUpdateOutput>;

// The operation
/**
 * Update a system topic.
 *
 * Asynchronously updates a system topic with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param systemTopicName - Name of the system topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const SystemTopicsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SystemTopicsUpdateInput,
  outputSchema: SystemTopicsUpdateOutput,
}));
// Input Schema
export interface TopicEventSubscriptionsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  topicName: string;
  eventSubscriptionName: string;
  properties?: {
    topic?: string;
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "AwaitingManualAction";
    destination?: {
      endpointType:
        | "WebHook"
        | "EventHub"
        | "StorageQueue"
        | "HybridConnection"
        | "ServiceBusQueue"
        | "ServiceBusTopic"
        | "AzureFunction"
        | "MonitorAlert"
        | "NamespaceTopic";
    };
    deliveryWithResourceIdentity?: {
      identity?: {
        type?: "SystemAssigned" | "UserAssigned";
        userAssignedIdentity?: string;
      };
      destination?: {
        endpointType:
          | "WebHook"
          | "EventHub"
          | "StorageQueue"
          | "HybridConnection"
          | "ServiceBusQueue"
          | "ServiceBusTopic"
          | "AzureFunction"
          | "MonitorAlert"
          | "NamespaceTopic";
      };
    };
    filter?: {
      subjectBeginsWith?: string;
      subjectEndsWith?: string;
      includedEventTypes?: string[];
      isSubjectCaseSensitive?: boolean;
      enableAdvancedFilteringOnArrays?: boolean;
      advancedFilters?: {
        operatorType:
          | "NumberIn"
          | "NumberNotIn"
          | "NumberLessThan"
          | "NumberGreaterThan"
          | "NumberLessThanOrEquals"
          | "NumberGreaterThanOrEquals"
          | "BoolEquals"
          | "StringIn"
          | "StringNotIn"
          | "StringBeginsWith"
          | "StringEndsWith"
          | "StringContains"
          | "NumberInRange"
          | "NumberNotInRange"
          | "StringNotBeginsWith"
          | "StringNotEndsWith"
          | "StringNotContains"
          | "IsNullOrUndefined"
          | "IsNotNull";
        key?: string;
      }[];
    };
    labels?: string[];
    expirationTimeUtc?: string;
    eventDeliverySchema?:
      | "EventGridSchema"
      | "CustomInputSchema"
      | "CloudEventSchemaV1_0";
    retryPolicy?: {
      maxDeliveryAttempts?: number;
      eventTimeToLiveInMinutes?: number;
    };
    deadLetterDestination?: { endpointType: "StorageBlob" };
    deadLetterWithResourceIdentity?: {
      identity?: {
        type?: "SystemAssigned" | "UserAssigned";
        userAssignedIdentity?: string;
      };
      deadLetterDestination?: { endpointType: "StorageBlob" };
    };
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const TopicEventSubscriptionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        topic: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "AwaitingManualAction",
          ]),
        ),
        destination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals([
              "WebHook",
              "EventHub",
              "StorageQueue",
              "HybridConnection",
              "ServiceBusQueue",
              "ServiceBusTopic",
              "AzureFunction",
              "MonitorAlert",
              "NamespaceTopic",
            ]),
          }),
        ),
        deliveryWithResourceIdentity: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["SystemAssigned", "UserAssigned"]),
                ),
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
            destination: Schema.optional(
              Schema.Struct({
                endpointType: Schema.Literals([
                  "WebHook",
                  "EventHub",
                  "StorageQueue",
                  "HybridConnection",
                  "ServiceBusQueue",
                  "ServiceBusTopic",
                  "AzureFunction",
                  "MonitorAlert",
                  "NamespaceTopic",
                ]),
              }),
            ),
          }),
        ),
        filter: Schema.optional(
          Schema.Struct({
            subjectBeginsWith: Schema.optional(Schema.String),
            subjectEndsWith: Schema.optional(Schema.String),
            includedEventTypes: Schema.optional(Schema.Array(Schema.String)),
            isSubjectCaseSensitive: Schema.optional(Schema.Boolean),
            enableAdvancedFilteringOnArrays: Schema.optional(Schema.Boolean),
            advancedFilters: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  operatorType: Schema.Literals([
                    "NumberIn",
                    "NumberNotIn",
                    "NumberLessThan",
                    "NumberGreaterThan",
                    "NumberLessThanOrEquals",
                    "NumberGreaterThanOrEquals",
                    "BoolEquals",
                    "StringIn",
                    "StringNotIn",
                    "StringBeginsWith",
                    "StringEndsWith",
                    "StringContains",
                    "NumberInRange",
                    "NumberNotInRange",
                    "StringNotBeginsWith",
                    "StringNotEndsWith",
                    "StringNotContains",
                    "IsNullOrUndefined",
                    "IsNotNull",
                  ]),
                  key: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        labels: Schema.optional(Schema.Array(Schema.String)),
        expirationTimeUtc: Schema.optional(Schema.String),
        eventDeliverySchema: Schema.optional(
          Schema.Literals([
            "EventGridSchema",
            "CustomInputSchema",
            "CloudEventSchemaV1_0",
          ]),
        ),
        retryPolicy: Schema.optional(
          Schema.Struct({
            maxDeliveryAttempts: Schema.optional(Schema.Number),
            eventTimeToLiveInMinutes: Schema.optional(Schema.Number),
          }),
        ),
        deadLetterDestination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals(["StorageBlob"]),
          }),
        ),
        deadLetterWithResourceIdentity: Schema.optional(
          Schema.Struct({
            identity: Schema.optional(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals(["SystemAssigned", "UserAssigned"]),
                ),
                userAssignedIdentity: Schema.optional(Schema.String),
              }),
            ),
            deadLetterDestination: Schema.optional(
              Schema.Struct({
                endpointType: Schema.Literals(["StorageBlob"]),
              }),
            ),
          }),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicEventSubscriptionsCreateOrUpdateInput>;

// Output Schema
export interface TopicEventSubscriptionsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TopicEventSubscriptionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TopicEventSubscriptionsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an event subscription to a topic.
 *
 * Asynchronously creates a new event subscription or updates an existing event subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param topicName - Name of the domain topic.
 * @param eventSubscriptionName - Name of the event subscription to be created. Event subscription names must be between 3 and 64 characters in length and use alphanumeric letters only.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicEventSubscriptionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TopicEventSubscriptionsCreateOrUpdateInput,
    outputSchema: TopicEventSubscriptionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface TopicEventSubscriptionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  topicName: string;
  eventSubscriptionName: string;
}
export const TopicEventSubscriptionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicEventSubscriptionsDeleteInput>;

// Output Schema
export type TopicEventSubscriptionsDeleteOutput = void;
export const TopicEventSubscriptionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TopicEventSubscriptionsDeleteOutput>;

// The operation
/**
 * Delete an event subscription for a topic.
 *
 * Delete an existing event subscription for a topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param topicName - Name of the topic.
 * @param eventSubscriptionName - Name of the event subscription to be deleted.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicEventSubscriptionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TopicEventSubscriptionsDeleteInput,
    outputSchema: TopicEventSubscriptionsDeleteOutput,
  }));
// Input Schema
export interface TopicEventSubscriptionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  topicName: string;
  eventSubscriptionName: string;
}
export const TopicEventSubscriptionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicEventSubscriptionsGetInput>;

// Output Schema
export interface TopicEventSubscriptionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TopicEventSubscriptionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TopicEventSubscriptionsGetOutput>;

// The operation
/**
 * Get an event subscription of a topic.
 *
 * Get properties of an event subscription of a topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param topicName - Name of the topic.
 * @param eventSubscriptionName - Name of the event subscription to be found.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicEventSubscriptionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TopicEventSubscriptionsGetInput,
    outputSchema: TopicEventSubscriptionsGetOutput,
  }),
);
// Input Schema
export interface TopicEventSubscriptionsGetDeliveryAttributesInput {
  subscriptionId: string;
  resourceGroupName: string;
  topicName: string;
  eventSubscriptionName: string;
}
export const TopicEventSubscriptionsGetDeliveryAttributesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}/getDeliveryAttributes",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicEventSubscriptionsGetDeliveryAttributesInput>;

// Output Schema
export interface TopicEventSubscriptionsGetDeliveryAttributesOutput {
  value?: { name?: string; type: "Static" | "Dynamic" }[];
}
export const TopicEventSubscriptionsGetDeliveryAttributesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.Literals(["Static", "Dynamic"]),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<TopicEventSubscriptionsGetDeliveryAttributesOutput>;

// The operation
/**
 * Get delivery attributes for an event subscription for topic.
 *
 * Get all delivery attributes for an event subscription for topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param topicName - Name of the topic.
 * @param eventSubscriptionName - Name of the event subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicEventSubscriptionsGetDeliveryAttributes =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TopicEventSubscriptionsGetDeliveryAttributesInput,
    outputSchema: TopicEventSubscriptionsGetDeliveryAttributesOutput,
  }));
// Input Schema
export interface TopicEventSubscriptionsGetFullUrlInput {
  subscriptionId: string;
  resourceGroupName: string;
  topicName: string;
  eventSubscriptionName: string;
}
export const TopicEventSubscriptionsGetFullUrlInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}/getFullUrl",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicEventSubscriptionsGetFullUrlInput>;

// Output Schema
export interface TopicEventSubscriptionsGetFullUrlOutput {
  endpointUrl?: string;
}
export const TopicEventSubscriptionsGetFullUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endpointUrl: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TopicEventSubscriptionsGetFullUrlOutput>;

// The operation
/**
 * Get full URL of an event subscription for topic.
 *
 * Get the full endpoint URL for an event subscription for topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param topicName - Name of the domain topic.
 * @param eventSubscriptionName - Name of the event subscription.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicEventSubscriptionsGetFullUrl =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TopicEventSubscriptionsGetFullUrlInput,
    outputSchema: TopicEventSubscriptionsGetFullUrlOutput,
  }));
// Input Schema
export interface TopicEventSubscriptionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  topicName: string;
  $filter?: string;
  $top?: number;
}
export const TopicEventSubscriptionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/eventSubscriptions",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicEventSubscriptionsListInput>;

// Output Schema
export interface TopicEventSubscriptionsListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const TopicEventSubscriptionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TopicEventSubscriptionsListOutput>;

// The operation
/**
 * List all event subscriptions for a specific topic.
 *
 * List all event subscriptions that have been created for a specific topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param topicName - Name of the topic.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const TopicEventSubscriptionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TopicEventSubscriptionsListInput,
    outputSchema: TopicEventSubscriptionsListOutput,
  }),
);
// Input Schema
export interface TopicEventSubscriptionsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  topicName: string;
  eventSubscriptionName: string;
  destination?: {
    endpointType:
      | "WebHook"
      | "EventHub"
      | "StorageQueue"
      | "HybridConnection"
      | "ServiceBusQueue"
      | "ServiceBusTopic"
      | "AzureFunction"
      | "MonitorAlert"
      | "NamespaceTopic";
  };
  deliveryWithResourceIdentity?: {
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string;
    };
    destination?: {
      endpointType:
        | "WebHook"
        | "EventHub"
        | "StorageQueue"
        | "HybridConnection"
        | "ServiceBusQueue"
        | "ServiceBusTopic"
        | "AzureFunction"
        | "MonitorAlert"
        | "NamespaceTopic";
    };
  };
  filter?: {
    subjectBeginsWith?: string;
    subjectEndsWith?: string;
    includedEventTypes?: string[];
    isSubjectCaseSensitive?: boolean;
    enableAdvancedFilteringOnArrays?: boolean;
    advancedFilters?: {
      operatorType:
        | "NumberIn"
        | "NumberNotIn"
        | "NumberLessThan"
        | "NumberGreaterThan"
        | "NumberLessThanOrEquals"
        | "NumberGreaterThanOrEquals"
        | "BoolEquals"
        | "StringIn"
        | "StringNotIn"
        | "StringBeginsWith"
        | "StringEndsWith"
        | "StringContains"
        | "NumberInRange"
        | "NumberNotInRange"
        | "StringNotBeginsWith"
        | "StringNotEndsWith"
        | "StringNotContains"
        | "IsNullOrUndefined"
        | "IsNotNull";
      key?: string;
    }[];
  };
  labels?: string[];
  expirationTimeUtc?: string;
  eventDeliverySchema?:
    | "EventGridSchema"
    | "CustomInputSchema"
    | "CloudEventSchemaV1_0";
  retryPolicy?: {
    maxDeliveryAttempts?: number;
    eventTimeToLiveInMinutes?: number;
  };
  deadLetterDestination?: { endpointType: "StorageBlob" };
  deadLetterWithResourceIdentity?: {
    identity?: {
      type?: "SystemAssigned" | "UserAssigned";
      userAssignedIdentity?: string;
    };
    deadLetterDestination?: { endpointType: "StorageBlob" };
  };
}
export const TopicEventSubscriptionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    eventSubscriptionName: Schema.String.pipe(T.PathParam()),
    destination: Schema.optional(
      Schema.Struct({
        endpointType: Schema.Literals([
          "WebHook",
          "EventHub",
          "StorageQueue",
          "HybridConnection",
          "ServiceBusQueue",
          "ServiceBusTopic",
          "AzureFunction",
          "MonitorAlert",
          "NamespaceTopic",
        ]),
      }),
    ),
    deliveryWithResourceIdentity: Schema.optional(
      Schema.Struct({
        identity: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentity: Schema.optional(Schema.String),
          }),
        ),
        destination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals([
              "WebHook",
              "EventHub",
              "StorageQueue",
              "HybridConnection",
              "ServiceBusQueue",
              "ServiceBusTopic",
              "AzureFunction",
              "MonitorAlert",
              "NamespaceTopic",
            ]),
          }),
        ),
      }),
    ),
    filter: Schema.optional(
      Schema.Struct({
        subjectBeginsWith: Schema.optional(Schema.String),
        subjectEndsWith: Schema.optional(Schema.String),
        includedEventTypes: Schema.optional(Schema.Array(Schema.String)),
        isSubjectCaseSensitive: Schema.optional(Schema.Boolean),
        enableAdvancedFilteringOnArrays: Schema.optional(Schema.Boolean),
        advancedFilters: Schema.optional(
          Schema.Array(
            Schema.Struct({
              operatorType: Schema.Literals([
                "NumberIn",
                "NumberNotIn",
                "NumberLessThan",
                "NumberGreaterThan",
                "NumberLessThanOrEquals",
                "NumberGreaterThanOrEquals",
                "BoolEquals",
                "StringIn",
                "StringNotIn",
                "StringBeginsWith",
                "StringEndsWith",
                "StringContains",
                "NumberInRange",
                "NumberNotInRange",
                "StringNotBeginsWith",
                "StringNotEndsWith",
                "StringNotContains",
                "IsNullOrUndefined",
                "IsNotNull",
              ]),
              key: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    labels: Schema.optional(Schema.Array(Schema.String)),
    expirationTimeUtc: Schema.optional(Schema.String),
    eventDeliverySchema: Schema.optional(
      Schema.Literals([
        "EventGridSchema",
        "CustomInputSchema",
        "CloudEventSchemaV1_0",
      ]),
    ),
    retryPolicy: Schema.optional(
      Schema.Struct({
        maxDeliveryAttempts: Schema.optional(Schema.Number),
        eventTimeToLiveInMinutes: Schema.optional(Schema.Number),
      }),
    ),
    deadLetterDestination: Schema.optional(
      Schema.Struct({
        endpointType: Schema.Literals(["StorageBlob"]),
      }),
    ),
    deadLetterWithResourceIdentity: Schema.optional(
      Schema.Struct({
        identity: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals(["SystemAssigned", "UserAssigned"]),
            ),
            userAssignedIdentity: Schema.optional(Schema.String),
          }),
        ),
        deadLetterDestination: Schema.optional(
          Schema.Struct({
            endpointType: Schema.Literals(["StorageBlob"]),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/eventSubscriptions/{eventSubscriptionName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicEventSubscriptionsUpdateInput>;

// Output Schema
export interface TopicEventSubscriptionsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TopicEventSubscriptionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TopicEventSubscriptionsUpdateOutput>;

// The operation
/**
 * Update an event subscription for a topic.
 *
 * Update an existing event subscription for a topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param topicName - Name of the domain.
 * @param eventSubscriptionName - Name of the event subscription to be updated.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicEventSubscriptionsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TopicEventSubscriptionsUpdateInput,
    outputSchema: TopicEventSubscriptionsUpdateOutput,
  }));
// Input Schema
export interface TopicsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  topicName: string;
  properties?: {
    privateEndpointConnections?: {
      id?: string;
      name?: string;
      type?: string;
    }[];
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed";
    endpoint?: string;
    eventTypeInfo?: {
      kind?: "Inline";
      inlineEventTypes?: Record<
        string,
        {
          description?: string;
          displayName?: string;
          documentationUrl?: string;
          dataSchemaUrl?: string;
        }
      >;
    };
    minimumTlsVersionAllowed?: "1.0" | "1.1" | "1.2";
    inputSchema?:
      | "EventGridSchema"
      | "CustomEventSchema"
      | "CloudEventSchemaV1_0";
    inputSchemaMapping?: { inputSchemaMappingType: "Json" };
    metricResourceId?: string;
    publicNetworkAccess?: "Enabled" | "Disabled";
    inboundIpRules?: { ipMask?: string; action?: "Allow" }[];
    disableLocalAuth?: boolean;
    dataResidencyBoundary?: "WithinGeopair" | "WithinRegion";
  };
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  location: string;
  tags?: Record<string, string>;
}
export const TopicsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
          ]),
        ),
        endpoint: Schema.optional(Schema.String),
        eventTypeInfo: Schema.optional(
          Schema.Struct({
            kind: Schema.optional(Schema.Literals(["Inline"])),
            inlineEventTypes: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  description: Schema.optional(Schema.String),
                  displayName: Schema.optional(Schema.String),
                  documentationUrl: Schema.optional(Schema.String),
                  dataSchemaUrl: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        minimumTlsVersionAllowed: Schema.optional(
          Schema.Literals(["1.0", "1.1", "1.2"]),
        ),
        inputSchema: Schema.optional(
          Schema.Literals([
            "EventGridSchema",
            "CustomEventSchema",
            "CloudEventSchemaV1_0",
          ]),
        ),
        inputSchemaMapping: Schema.optional(
          Schema.Struct({
            inputSchemaMappingType: Schema.Literals(["Json"]),
          }),
        ),
        metricResourceId: Schema.optional(Schema.String),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        inboundIpRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              ipMask: Schema.optional(Schema.String),
              action: Schema.optional(Schema.Literals(["Allow"])),
            }),
          ),
        ),
        disableLocalAuth: Schema.optional(Schema.Boolean),
        dataResidencyBoundary: Schema.optional(
          Schema.Literals(["WithinGeopair", "WithinRegion"]),
        ),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        type: Schema.optional(
          Schema.Literals([
            "None",
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
          ]),
        ),
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        userAssignedIdentities: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              principalId: Schema.optional(Schema.String),
              clientId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicsCreateOrUpdateInput>;

// Output Schema
export interface TopicsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TopicsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TopicsCreateOrUpdateOutput>;

// The operation
/**
 * Create a topic.
 *
 * Asynchronously creates a new topic with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param topicName - Name of the topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TopicsCreateOrUpdateInput,
    outputSchema: TopicsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface TopicsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  topicName: string;
}
export const TopicsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  topicName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<TopicsDeleteInput>;

// Output Schema
export type TopicsDeleteOutput = void;
export const TopicsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TopicsDeleteOutput>;

// The operation
/**
 * Delete a topic.
 *
 * Delete existing topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param topicName - Name of the topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TopicsDeleteInput,
  outputSchema: TopicsDeleteOutput,
}));
// Input Schema
export interface TopicsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  topicName: string;
}
export const TopicsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  topicName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<TopicsGetInput>;

// Output Schema
export interface TopicsGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TopicsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<TopicsGetOutput>;

// The operation
/**
 * Get a topic.
 *
 * Get properties of a topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param topicName - Name of the topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TopicsGetInput,
  outputSchema: TopicsGetOutput,
}));
// Input Schema
export interface TopicsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $top?: number;
}
export const TopicsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicsListByResourceGroupInput>;

// Output Schema
export interface TopicsListByResourceGroupOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const TopicsListByResourceGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TopicsListByResourceGroupOutput>;

// The operation
/**
 * List topics under a resource group.
 *
 * List all the topics under a resource group.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const TopicsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TopicsListByResourceGroupInput,
    outputSchema: TopicsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface TopicsListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  $top?: number;
}
export const TopicsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/topics",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicsListBySubscriptionInput>;

// Output Schema
export interface TopicsListBySubscriptionOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const TopicsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TopicsListBySubscriptionOutput>;

// The operation
/**
 * List topics under an Azure subscription.
 *
 * List all the topics under an Azure subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const TopicsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TopicsListBySubscriptionInput,
    outputSchema: TopicsListBySubscriptionOutput,
  }),
);
// Input Schema
export interface TopicsListEventTypesInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerNamespace: string;
  resourceTypeName: string;
  resourceName: string;
}
export const TopicsListEventTypesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceTypeName: Schema.String.pipe(T.PathParam()),
    resourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{providerNamespace}/{resourceTypeName}/{resourceName}/providers/Microsoft.EventGrid/eventTypes",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicsListEventTypesInput>;

// Output Schema
export interface TopicsListEventTypesOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const TopicsListEventTypesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<TopicsListEventTypesOutput>;

// The operation
/**
 * List topic event types.
 *
 * List event types for a topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param providerNamespace - Namespace of the provider of the topic.
 * @param resourceTypeName - Name of the topic type.
 * @param resourceName - Name of the topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicsListEventTypes = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TopicsListEventTypesInput,
    outputSchema: TopicsListEventTypesOutput,
  }),
);
// Input Schema
export interface TopicsListSharedAccessKeysInput {
  subscriptionId: string;
  resourceGroupName: string;
  topicName: string;
}
export const TopicsListSharedAccessKeysInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/listKeys",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicsListSharedAccessKeysInput>;

// Output Schema
export interface TopicsListSharedAccessKeysOutput {
  key1?: string;
  key2?: string;
}
export const TopicsListSharedAccessKeysOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TopicsListSharedAccessKeysOutput>;

// The operation
/**
 * List keys for a topic.
 *
 * List the two keys used to publish to a topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param topicName - Name of the topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicsListSharedAccessKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TopicsListSharedAccessKeysInput,
    outputSchema: TopicsListSharedAccessKeysOutput,
  }),
);
// Input Schema
export interface TopicSpacesCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicSpaceName: string;
  properties?: {
    description?: string;
    topicTemplates?: string[];
    provisioningState?:
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "Deleted";
  };
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
  id?: string;
  name?: string;
  type?: string;
}
export const TopicSpacesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicSpaceName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        topicTemplates: Schema.optional(Schema.Array(Schema.String)),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Creating",
            "Updating",
            "Deleting",
            "Succeeded",
            "Canceled",
            "Failed",
            "Deleted",
          ]),
        ),
      }),
    ),
    systemData: Schema.optional(
      Schema.Struct({
        createdBy: Schema.optional(Schema.String),
        createdByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        createdAt: Schema.optional(Schema.String),
        lastModifiedBy: Schema.optional(Schema.String),
        lastModifiedByType: Schema.optional(
          Schema.Literals(["User", "Application", "ManagedIdentity", "Key"]),
        ),
        lastModifiedAt: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topicSpaces/{topicSpaceName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicSpacesCreateOrUpdateInput>;

// Output Schema
export interface TopicSpacesCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TopicSpacesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TopicSpacesCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a topic space.
 *
 * Create or update a topic space with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicSpaceName - The topic space name.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicSpacesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TopicSpacesCreateOrUpdateInput,
    outputSchema: TopicSpacesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface TopicSpacesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicSpaceName: string;
}
export const TopicSpacesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    topicSpaceName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topicSpaces/{topicSpaceName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<TopicSpacesDeleteInput>;

// Output Schema
export type TopicSpacesDeleteOutput = void;
export const TopicSpacesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TopicSpacesDeleteOutput>;

// The operation
/**
 * Delete a topic space.
 *
 * Delete an existing topic space.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicSpaceName - Name of the Topic space.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicSpacesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TopicSpacesDeleteInput,
  outputSchema: TopicSpacesDeleteOutput,
}));
// Input Schema
export interface TopicSpacesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  topicSpaceName: string;
}
export const TopicSpacesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  namespaceName: Schema.String.pipe(T.PathParam()),
  topicSpaceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topicSpaces/{topicSpaceName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<TopicSpacesGetInput>;

// Output Schema
export interface TopicSpacesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TopicSpacesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<TopicSpacesGetOutput>;

// The operation
/**
 * Get a topic space.
 *
 * Get properties of a topic space.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param topicSpaceName - Name of the Topic space.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicSpacesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TopicSpacesGetInput,
  outputSchema: TopicSpacesGetOutput,
}));
// Input Schema
export interface TopicSpacesListByNamespaceInput {
  subscriptionId: string;
  resourceGroupName: string;
  namespaceName: string;
  $filter?: string;
  $top?: number;
}
export const TopicSpacesListByNamespaceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    namespaceName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topicSpaces",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicSpacesListByNamespaceInput>;

// Output Schema
export interface TopicSpacesListByNamespaceOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const TopicSpacesListByNamespaceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TopicSpacesListByNamespaceOutput>;

// The operation
/**
 * List all topic spaces under a namespace.
 *
 * Get all the topic spaces under a namespace.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param namespaceName - Name of the namespace.
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const TopicSpacesListByNamespace = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TopicSpacesListByNamespaceInput,
    outputSchema: TopicSpacesListByNamespaceOutput,
  }),
);
// Input Schema
export interface TopicsRegenerateKeyInput {
  subscriptionId: string;
  resourceGroupName: string;
  topicName: string;
  keyName: string;
}
export const TopicsRegenerateKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    topicName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/regenerateKey",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicsRegenerateKeyInput>;

// Output Schema
export interface TopicsRegenerateKeyOutput {
  key1?: string;
  key2?: string;
}
export const TopicsRegenerateKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key1: Schema.optional(Schema.String),
    key2: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TopicsRegenerateKeyOutput>;

// The operation
/**
 * Regenerate key for a topic.
 *
 * Regenerate a shared access key for a topic.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param topicName - Name of the topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicsRegenerateKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TopicsRegenerateKeyInput,
  outputSchema: TopicsRegenerateKeyOutput,
}));
// Input Schema
export interface TopicsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  topicName: string;
  tags?: Record<string, string>;
  identity?: {
    type?:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned, UserAssigned";
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  properties?: {
    publicNetworkAccess?: "Enabled" | "Disabled";
    inboundIpRules?: { ipMask?: string; action?: "Allow" }[];
    minimumTlsVersionAllowed?: "1.0" | "1.1" | "1.2";
    disableLocalAuth?: boolean;
    dataResidencyBoundary?: "WithinGeopair" | "WithinRegion";
    eventTypeInfo?: {
      kind?: "Inline";
      inlineEventTypes?: Record<
        string,
        {
          description?: string;
          displayName?: string;
          documentationUrl?: string;
          dataSchemaUrl?: string;
        }
      >;
    };
  };
}
export const TopicsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  topicName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(
        Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned, UserAssigned",
        ]),
      ),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      publicNetworkAccess: Schema.optional(
        Schema.Literals(["Enabled", "Disabled"]),
      ),
      inboundIpRules: Schema.optional(
        Schema.Array(
          Schema.Struct({
            ipMask: Schema.optional(Schema.String),
            action: Schema.optional(Schema.Literals(["Allow"])),
          }),
        ),
      ),
      minimumTlsVersionAllowed: Schema.optional(
        Schema.Literals(["1.0", "1.1", "1.2"]),
      ),
      disableLocalAuth: Schema.optional(Schema.Boolean),
      dataResidencyBoundary: Schema.optional(
        Schema.Literals(["WithinGeopair", "WithinRegion"]),
      ),
      eventTypeInfo: Schema.optional(
        Schema.Struct({
          kind: Schema.optional(Schema.Literals(["Inline"])),
          inlineEventTypes: Schema.optional(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                description: Schema.optional(Schema.String),
                displayName: Schema.optional(Schema.String),
                documentationUrl: Schema.optional(Schema.String),
                dataSchemaUrl: Schema.optional(Schema.String),
              }),
            ),
          ),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<TopicsUpdateInput>;

// Output Schema
export type TopicsUpdateOutput = void;
export const TopicsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<TopicsUpdateOutput>;

// The operation
/**
 * Update a topic.
 *
 * Asynchronously updates a topic with the specified parameters.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroupName - The name of the resource group within the user's subscription.
 * @param topicName - Name of the topic.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TopicsUpdateInput,
  outputSchema: TopicsUpdateOutput,
}));
// Input Schema
export interface TopicTypesGetInput {
  topicTypeName: string;
}
export const TopicTypesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  topicTypeName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.EventGrid/topicTypes/{topicTypeName}",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<TopicTypesGetInput>;

// Output Schema
export interface TopicTypesGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const TopicTypesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<TopicTypesGetOutput>;

// The operation
/**
 * Get a topic type.
 *
 * Get information about a topic type.
 *
 * @param topicTypeName - Name of the topic type.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicTypesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TopicTypesGetInput,
  outputSchema: TopicTypesGetOutput,
}));
// Input Schema
export interface TopicTypesListInput {}
export const TopicTypesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.EventGrid/topicTypes",
    apiVersion: "2025-02-15",
  }),
) as unknown as Schema.Codec<TopicTypesListInput>;

// Output Schema
export interface TopicTypesListOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const TopicTypesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
}) as unknown as Schema.Codec<TopicTypesListOutput>;

// The operation
/**
 * List topic types.
 *
 * List all registered topic types.
 *
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicTypesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TopicTypesListInput,
  outputSchema: TopicTypesListOutput,
}));
// Input Schema
export interface TopicTypesListEventTypesInput {
  topicTypeName: string;
}
export const TopicTypesListEventTypesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    topicTypeName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.EventGrid/topicTypes/{topicTypeName}/eventTypes",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<TopicTypesListEventTypesInput>;

// Output Schema
export interface TopicTypesListEventTypesOutput {
  value?: { id?: string; name?: string; type?: string }[];
}
export const TopicTypesListEventTypesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<TopicTypesListEventTypesOutput>;

// The operation
/**
 * List event types.
 *
 * List event types for a topic type.
 *
 * @param topicTypeName - Name of the topic type.
 * @param api-version - Version of the API to be used with the client request.
 */
export const TopicTypesListEventTypes = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TopicTypesListEventTypesInput,
    outputSchema: TopicTypesListEventTypesOutput,
  }),
);
// Input Schema
export interface VerifiedPartnersGetInput {
  verifiedPartnerName: string;
}
export const VerifiedPartnersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    verifiedPartnerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.EventGrid/verifiedPartners/{verifiedPartnerName}",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<VerifiedPartnersGetInput>;

// Output Schema
export interface VerifiedPartnersGetOutput {
  id?: string;
  name?: string;
  type?: string;
}
export const VerifiedPartnersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VerifiedPartnersGetOutput>;

// The operation
/**
 * Get a verified partner.
 *
 * Get properties of a verified partner.
 *
 * @param verifiedPartnerName - Name of the verified partner.
 * @param api-version - Version of the API to be used with the client request.
 */
export const VerifiedPartnersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VerifiedPartnersGetInput,
  outputSchema: VerifiedPartnersGetOutput,
}));
// Input Schema
export interface VerifiedPartnersListInput {
  $filter?: string;
  $top?: number;
}
export const VerifiedPartnersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    $filter: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.EventGrid/verifiedPartners",
      apiVersion: "2025-02-15",
    }),
  ) as unknown as Schema.Codec<VerifiedPartnersListInput>;

// Output Schema
export interface VerifiedPartnersListOutput {
  value?: { id?: string; name?: string; type?: string }[];
  nextLink?: string;
}
export const VerifiedPartnersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VerifiedPartnersListOutput>;

// The operation
/**
 * List all verified partners.
 *
 * Get a list of all verified partners.
 *
 * @param api-version - Version of the API to be used with the client request.
 * @param $filter - The query used to filter the search results using OData syntax. Filtering is permitted on the 'name' property only and with limited number of OData operations. These operations are: the 'contains' function as well as the following logical operations: not, and, or, eq (for equal), and ne (for not equal). No arithmetic operations are supported. The following is a valid filter example: $filter=contains(namE, 'PATTERN') and name ne 'PATTERN-1'. The following is not a valid filter example: $filter=location eq 'westus'.
 * @param $top - The number of results to return per page for the list operation. Valid range for top parameter is 1 to 100. If not specified, the default number of results to be returned is 20 items per page.
 */
export const VerifiedPartnersList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VerifiedPartnersListInput,
    outputSchema: VerifiedPartnersListOutput,
  }),
);
