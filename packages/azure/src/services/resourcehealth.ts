/**
 * Azure Resourcehealth API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AvailabilityStatusesGetByResourceInput {
  resourceUri: string;
  $filter?: string;
  $expand?: string;
}
export const AvailabilityStatusesGetByResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ResourceHealth/availabilityStatuses/current",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<AvailabilityStatusesGetByResourceInput>;

// Output Schema
export interface AvailabilityStatusesGetByResourceOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
}
export const AvailabilityStatusesGetByResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AvailabilityStatusesGetByResourceOutput>;

// The operation
/**
 * Gets current availability status for a single resource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 * @param $expand - Setting $expand=recommendedactions in url query expands the recommendedactions in the response.
 */
export const AvailabilityStatusesGetByResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AvailabilityStatusesGetByResourceInput,
    outputSchema: AvailabilityStatusesGetByResourceOutput,
  }));
// Input Schema
export interface AvailabilityStatusesListInput {
  resourceUri: string;
  $filter?: string;
  $expand?: string;
}
export const AvailabilityStatusesListInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ResourceHealth/availabilityStatuses",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<AvailabilityStatusesListInput>;

// Output Schema
export interface AvailabilityStatusesListOutput {
  value: { id?: string; name?: string; type?: string; location?: string }[];
  nextLink?: string;
}
export const AvailabilityStatusesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AvailabilityStatusesListOutput>;

// The operation
/**
 * Lists all historical availability transitions and impacting events for a single resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 * @param $expand - Setting $expand=recommendedactions in url query expands the recommendedactions in the response.
 */
export const AvailabilityStatusesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: AvailabilityStatusesListInput,
  outputSchema: AvailabilityStatusesListOutput,
}));
// Input Schema
export interface AvailabilityStatusesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $expand?: string;
}
export const AvailabilityStatusesListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ResourceHealth/availabilityStatuses",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<AvailabilityStatusesListByResourceGroupInput>;

// Output Schema
export interface AvailabilityStatusesListByResourceGroupOutput {
  value: { id?: string; name?: string; type?: string; location?: string }[];
  nextLink?: string;
}
export const AvailabilityStatusesListByResourceGroupOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AvailabilityStatusesListByResourceGroupOutput>;

// The operation
/**
 * Lists the current availability status for all the resources in the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 * @param $expand - Setting $expand=recommendedactions in url query expands the recommendedactions in the response.
 */
export const AvailabilityStatusesListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AvailabilityStatusesListByResourceGroupInput,
    outputSchema: AvailabilityStatusesListByResourceGroupOutput,
  }));
// Input Schema
export interface AvailabilityStatusesListBySubscriptionIdInput {
  subscriptionId: string;
  $filter?: string;
  $expand?: string;
}
export const AvailabilityStatusesListBySubscriptionIdInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/availabilityStatuses",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<AvailabilityStatusesListBySubscriptionIdInput>;

// Output Schema
export interface AvailabilityStatusesListBySubscriptionIdOutput {
  value: { id?: string; name?: string; type?: string; location?: string }[];
  nextLink?: string;
}
export const AvailabilityStatusesListBySubscriptionIdOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AvailabilityStatusesListBySubscriptionIdOutput>;

// The operation
/**
 * Lists the current availability status for all the resources in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 * @param $expand - Setting $expand=recommendedactions in url query expands the recommendedactions in the response.
 */
export const AvailabilityStatusesListBySubscriptionId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: AvailabilityStatusesListBySubscriptionIdInput,
    outputSchema: AvailabilityStatusesListBySubscriptionIdOutput,
  }));
// Input Schema
export interface ChildAvailabilityStatusesGetByResourceInput {
  resourceUri: string;
  $filter?: string;
  $expand?: string;
}
export const ChildAvailabilityStatusesGetByResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ResourceHealth/childAvailabilityStatuses/current",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ChildAvailabilityStatusesGetByResourceInput>;

// Output Schema
export interface ChildAvailabilityStatusesGetByResourceOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
}
export const ChildAvailabilityStatusesGetByResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ChildAvailabilityStatusesGetByResourceOutput>;

// The operation
/**
 * Gets current availability status for a single resource
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - undefined
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 * @param $expand - Setting $expand=recommendedactions in url query expands the recommendedactions in the response.
 */
export const ChildAvailabilityStatusesGetByResource =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ChildAvailabilityStatusesGetByResourceInput,
    outputSchema: ChildAvailabilityStatusesGetByResourceOutput,
  }));
// Input Schema
export interface ChildAvailabilityStatusesListInput {
  resourceUri: string;
  $filter?: string;
  $expand?: string;
}
export const ChildAvailabilityStatusesListInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ResourceHealth/childAvailabilityStatuses",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ChildAvailabilityStatusesListInput>;

// Output Schema
export interface ChildAvailabilityStatusesListOutput {
  value: { id?: string; name?: string; type?: string; location?: string }[];
  nextLink?: string;
}
export const ChildAvailabilityStatusesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ChildAvailabilityStatusesListOutput>;

// The operation
/**
 * Lists the historical availability statuses for a single child resource. Use the nextLink property in the response to get the next page of availability status
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - undefined
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 * @param $expand - Setting $expand=recommendedactions in url query expands the recommendedactions in the response.
 */
export const ChildAvailabilityStatusesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ChildAvailabilityStatusesListInput,
    outputSchema: ChildAvailabilityStatusesListOutput,
  }));
// Input Schema
export interface ChildResourcesListInput {
  resourceUri: string;
  $filter?: string;
  $expand?: string;
}
export const ChildResourcesListInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ResourceHealth/childResources",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ChildResourcesListInput>;

// Output Schema
export interface ChildResourcesListOutput {
  value: { id?: string; name?: string; type?: string; location?: string }[];
  nextLink?: string;
}
export const ChildResourcesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        location: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ChildResourcesListOutput>;

// The operation
/**
 * Lists the all the children and its current health status for a parent resource. Use the nextLink property in the response to get the next page of children current health
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 * @param $expand - Setting $expand=recommendedactions in url query expands the recommendedactions in the response.
 */
export const ChildResourcesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ChildResourcesListInput,
  outputSchema: ChildResourcesListOutput,
}));
// Input Schema
export interface EmergingIssuesGetInput {
  issueName: "default";
}
export const EmergingIssuesGetInput = /*@__PURE__*/ Schema.Struct({
  issueName: Schema.Literals(["default"]).pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ResourceHealth/emergingIssues/{issueName}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<EmergingIssuesGetInput>;

// Output Schema
export interface EmergingIssuesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const EmergingIssuesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<EmergingIssuesGetOutput>;

// The operation
/**
 * Gets Azure services' emerging issues.
 *
 * @param api-version - The API version to use for this operation.
 * @param issueName - The name of the emerging issue.
 */
export const EmergingIssuesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: EmergingIssuesGetInput,
  outputSchema: EmergingIssuesGetOutput,
}));
// Input Schema
export interface EmergingIssuesListInput {}
export const EmergingIssuesListInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ResourceHealth/emergingIssues",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<EmergingIssuesListInput>;

// Output Schema
export interface EmergingIssuesListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const EmergingIssuesListOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          systemData: Schema.optional(
            Schema.Struct({
              createdBy: Schema.optional(Schema.String),
              createdByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              createdAt: Schema.optional(Schema.String),
              lastModifiedBy: Schema.optional(Schema.String),
              lastModifiedByType: Schema.optional(
                Schema.Literals([
                  "User",
                  "Application",
                  "ManagedIdentity",
                  "Key",
                ]),
              ),
              lastModifiedAt: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EmergingIssuesListOutput>;

// The operation
/**
 * Lists Azure services' emerging issues.
 *
 * @param api-version - The API version to use for this operation.
 */
export const EmergingIssuesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: EmergingIssuesListInput,
  outputSchema: EmergingIssuesListOutput,
}));
// Input Schema
export interface EventFetchBilllingCommunicationDetailsBySubscriptionIdAndTrackingIdInput {
  subscriptionId: string;
  eventTrackingId: string;
}
export const EventFetchBilllingCommunicationDetailsBySubscriptionIdAndTrackingIdInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    eventTrackingId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/events/{eventTrackingId}/fetchBillingCommunicationDetails",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<EventFetchBilllingCommunicationDetailsBySubscriptionIdAndTrackingIdInput>;

// Output Schema
export interface EventFetchBilllingCommunicationDetailsBySubscriptionIdAndTrackingIdOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const EventFetchBilllingCommunicationDetailsBySubscriptionIdAndTrackingIdOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<EventFetchBilllingCommunicationDetailsBySubscriptionIdAndTrackingIdOutput>;

// The operation
/**
 * Service health event details specific in the subscription by event tracking id. This can be used to fetch sensitive properties for Billing event type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param eventTrackingId - Event Id which uniquely identifies ServiceHealth event.
 */
export const EventFetchBilllingCommunicationDetailsBySubscriptionIdAndTrackingId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      EventFetchBilllingCommunicationDetailsBySubscriptionIdAndTrackingIdInput,
    outputSchema:
      EventFetchBilllingCommunicationDetailsBySubscriptionIdAndTrackingIdOutput,
  }));
// Input Schema
export interface EventFetchDetailsBySubscriptionIdAndTrackingIdInput {
  subscriptionId: string;
  eventTrackingId: string;
}
export const EventFetchDetailsBySubscriptionIdAndTrackingIdInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    eventTrackingId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/events/{eventTrackingId}/fetchEventDetails",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<EventFetchDetailsBySubscriptionIdAndTrackingIdInput>;

// Output Schema
export interface EventFetchDetailsBySubscriptionIdAndTrackingIdOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const EventFetchDetailsBySubscriptionIdAndTrackingIdOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<EventFetchDetailsBySubscriptionIdAndTrackingIdOutput>;

// The operation
/**
 * Service health event details in the subscription by event tracking id. This can be used to fetch sensitive properties for Security Advisory events. Please see https://learn.microsoft.com/en-us/azure/service-health/security-advisories-elevated-access
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param eventTrackingId - Event Id which uniquely identifies ServiceHealth event.
 */
export const EventFetchDetailsBySubscriptionIdAndTrackingId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EventFetchDetailsBySubscriptionIdAndTrackingIdInput,
    outputSchema: EventFetchDetailsBySubscriptionIdAndTrackingIdOutput,
  }));
// Input Schema
export interface EventFetchDetailsByTenantIdAndTrackingIdInput {
  eventTrackingId: string;
}
export const EventFetchDetailsByTenantIdAndTrackingIdInput =
  /*@__PURE__*/ Schema.Struct({
    eventTrackingId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.ResourceHealth/events/{eventTrackingId}/fetchEventDetails",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<EventFetchDetailsByTenantIdAndTrackingIdInput>;

// Output Schema
export interface EventFetchDetailsByTenantIdAndTrackingIdOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const EventFetchDetailsByTenantIdAndTrackingIdOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<EventFetchDetailsByTenantIdAndTrackingIdOutput>;

// The operation
/**
 * Service health event details in the tenant by event tracking id. This can be used to fetch sensitive properties for Security Advisory events. Please see https://learn.microsoft.com/en-us/azure/service-health/security-advisories-elevated-access
 *
 * @param api-version - The API version to use for this operation.
 * @param eventTrackingId - Event Id which uniquely identifies ServiceHealth event.
 */
export const EventFetchDetailsByTenantIdAndTrackingId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EventFetchDetailsByTenantIdAndTrackingIdInput,
    outputSchema: EventFetchDetailsByTenantIdAndTrackingIdOutput,
  }));
// Input Schema
export interface EventGetBySubscriptionIdAndTrackingIdInput {
  subscriptionId: string;
  eventTrackingId: string;
  $filter?: string;
  queryStartTime?: string;
}
export const EventGetBySubscriptionIdAndTrackingIdInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    eventTrackingId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    queryStartTime: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/events/{eventTrackingId}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<EventGetBySubscriptionIdAndTrackingIdInput>;

// Output Schema
export interface EventGetBySubscriptionIdAndTrackingIdOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const EventGetBySubscriptionIdAndTrackingIdOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<EventGetBySubscriptionIdAndTrackingIdOutput>;

// The operation
/**
 * Service health event in the subscription by event tracking id
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param eventTrackingId - Event Id which uniquely identifies ServiceHealth event.
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 * @param queryStartTime - Specifies from when to return events (default is 3 days), based on the lastUpdateTime property. For example, queryStartTime = 7/24/2020 OR queryStartTime=7%2F24%2F2020
 */
export const EventGetBySubscriptionIdAndTrackingId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EventGetBySubscriptionIdAndTrackingIdInput,
    outputSchema: EventGetBySubscriptionIdAndTrackingIdOutput,
  }));
// Input Schema
export interface EventGetByTenantIdAndTrackingIdInput {
  eventTrackingId: string;
  $filter?: string;
  queryStartTime?: string;
}
export const EventGetByTenantIdAndTrackingIdInput =
  /*@__PURE__*/ Schema.Struct({
    eventTrackingId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    queryStartTime: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ResourceHealth/events/{eventTrackingId}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<EventGetByTenantIdAndTrackingIdInput>;

// Output Schema
export interface EventGetByTenantIdAndTrackingIdOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const EventGetByTenantIdAndTrackingIdOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<EventGetByTenantIdAndTrackingIdOutput>;

// The operation
/**
 * Service health event in the tenant by event tracking id
 *
 * @param api-version - The API version to use for this operation.
 * @param eventTrackingId - Event Id which uniquely identifies ServiceHealth event.
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 * @param queryStartTime - Specifies from when to return events (default is 3 days), based on the lastUpdateTime property. For example, queryStartTime = 7/24/2020 OR queryStartTime=7%2F24%2F2020
 */
export const EventGetByTenantIdAndTrackingId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EventGetByTenantIdAndTrackingIdInput,
    outputSchema: EventGetByTenantIdAndTrackingIdOutput,
  }));
// Input Schema
export interface EventsListBySingleResourceInput {
  resourceUri: string;
  $filter?: string;
}
export const EventsListBySingleResourceInput =
  /*@__PURE__*/ Schema.Struct({
    resourceUri: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{resourceUri}/providers/Microsoft.ResourceHealth/events",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<EventsListBySingleResourceInput>;

// Output Schema
export interface EventsListBySingleResourceOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const EventsListBySingleResourceOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventsListBySingleResourceOutput>;

// The operation
/**
 * Lists current service health events for given resource.
 *
 * @param api-version - The API version to use for this operation.
 * @param resourceUri - The fully qualified Azure Resource manager identifier of the resource.
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 */
export const EventsListBySingleResource = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventsListBySingleResourceInput,
  outputSchema: EventsListBySingleResourceOutput,
}));
// Input Schema
export interface EventsListBySubscriptionIdInput {
  subscriptionId: string;
  $filter?: string;
  queryStartTime?: string;
}
export const EventsListBySubscriptionIdInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    queryStartTime: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/events",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<EventsListBySubscriptionIdInput>;

// Output Schema
export interface EventsListBySubscriptionIdOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const EventsListBySubscriptionIdOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventsListBySubscriptionIdOutput>;

// The operation
/**
 * Lists service health events in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 * @param queryStartTime - Specifies from when to return events (default is 3 days), based on the lastUpdateTime property. For example, queryStartTime = 7/24/2020 OR queryStartTime=7%2F24%2F2020
 */
export const EventsListBySubscriptionId = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventsListBySubscriptionIdInput,
  outputSchema: EventsListBySubscriptionIdOutput,
}));
// Input Schema
export interface EventsListByTenantIdInput {
  $filter?: string;
  queryStartTime?: string;
}
export const EventsListByTenantIdInput =
  /*@__PURE__*/ Schema.Struct({
    $filter: Schema.optional(Schema.String),
    queryStartTime: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ResourceHealth/events",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<EventsListByTenantIdInput>;

// Output Schema
export interface EventsListByTenantIdOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const EventsListByTenantIdOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EventsListByTenantIdOutput>;

// The operation
/**
 * Lists current service health events in the tenant.
 *
 * @param api-version - The API version to use for this operation.
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 * @param queryStartTime - Specifies from when to return events (default is 3 days), based on the lastUpdateTime property. For example, queryStartTime = 7/24/2020 OR queryStartTime=7%2F24%2F2020
 */
export const EventsListByTenantId = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventsListByTenantIdInput,
  outputSchema: EventsListByTenantIdOutput,
}));
// Input Schema
export interface ImpactedResourcesGetInput {
  subscriptionId: string;
  eventTrackingId: string;
  impactedResourceName: string;
}
export const ImpactedResourcesGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    eventTrackingId: Schema.String.pipe(T.PathParam()),
    impactedResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/events/{eventTrackingId}/impactedResources/{impactedResourceName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ImpactedResourcesGetInput>;

// Output Schema
export interface ImpactedResourcesGetOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ImpactedResourcesGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<ImpactedResourcesGetOutput>;

// The operation
/**
 * Gets the specific impacted resource in the subscription by an event.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param eventTrackingId - Event Id which uniquely identifies ServiceHealth event.
 * @param impactedResourceName - Name of the Impacted Resource.
 */
export const ImpactedResourcesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ImpactedResourcesGetInput,
  outputSchema: ImpactedResourcesGetOutput,
}));
// Input Schema
export interface ImpactedResourcesGetByTenantIdInput {
  eventTrackingId: string;
  impactedResourceName: string;
}
export const ImpactedResourcesGetByTenantIdInput =
  /*@__PURE__*/ Schema.Struct({
    eventTrackingId: Schema.String.pipe(T.PathParam()),
    impactedResourceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ResourceHealth/events/{eventTrackingId}/impactedResources/{impactedResourceName}",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ImpactedResourcesGetByTenantIdInput>;

// Output Schema
export interface ImpactedResourcesGetByTenantIdOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const ImpactedResourcesGetByTenantIdOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<ImpactedResourcesGetByTenantIdOutput>;

// The operation
/**
 * Gets the specific impacted resource in the tenant by an event.
 *
 * @param api-version - The API version to use for this operation.
 * @param eventTrackingId - Event Id which uniquely identifies ServiceHealth event.
 * @param impactedResourceName - Name of the Impacted Resource.
 */
export const ImpactedResourcesGetByTenantId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ImpactedResourcesGetByTenantIdInput,
    outputSchema: ImpactedResourcesGetByTenantIdOutput,
  }));
// Input Schema
export interface ImpactedResourcesListBySubscriptionIdAndEventIdInput {
  subscriptionId: string;
  eventTrackingId: string;
  $filter?: string;
}
export const ImpactedResourcesListBySubscriptionIdAndEventIdInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    eventTrackingId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/events/{eventTrackingId}/impactedResources",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ImpactedResourcesListBySubscriptionIdAndEventIdInput>;

// Output Schema
export interface ImpactedResourcesListBySubscriptionIdAndEventIdOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const ImpactedResourcesListBySubscriptionIdAndEventIdOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ImpactedResourcesListBySubscriptionIdAndEventIdOutput>;

// The operation
/**
 * Lists impacted resources in the subscription by an event.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param eventTrackingId - Event Id which uniquely identifies ServiceHealth event.
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 */
export const ImpactedResourcesListBySubscriptionIdAndEventId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ImpactedResourcesListBySubscriptionIdAndEventIdInput,
    outputSchema: ImpactedResourcesListBySubscriptionIdAndEventIdOutput,
  }));
// Input Schema
export interface ImpactedResourcesListByTenantIdAndEventIdInput {
  eventTrackingId: string;
  $filter?: string;
}
export const ImpactedResourcesListByTenantIdAndEventIdInput =
  /*@__PURE__*/ Schema.Struct({
    eventTrackingId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ResourceHealth/events/{eventTrackingId}/impactedResources",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<ImpactedResourcesListByTenantIdAndEventIdInput>;

// Output Schema
export interface ImpactedResourcesListByTenantIdAndEventIdOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const ImpactedResourcesListByTenantIdAndEventIdOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ImpactedResourcesListByTenantIdAndEventIdOutput>;

// The operation
/**
 * Lists impacted resources in the tenant by an event.
 *
 * @param api-version - The API version to use for this operation.
 * @param eventTrackingId - Event Id which uniquely identifies ServiceHealth event.
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 */
export const ImpactedResourcesListByTenantIdAndEventId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ImpactedResourcesListByTenantIdAndEventIdInput,
    outputSchema: ImpactedResourcesListByTenantIdAndEventIdOutput,
  }));
// Input Schema
export interface MetadataGetEntityInput {
  name: string;
}
export const MetadataGetEntityInput = /*@__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ResourceHealth/metadata/{name}",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<MetadataGetEntityInput>;

// Output Schema
export interface MetadataGetEntityOutput {
  id?: string;
  name?: string;
  type?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const MetadataGetEntityOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<MetadataGetEntityOutput>;

// The operation
/**
 * Gets the list of metadata entities.
 *
 * @param api-version - The API version to use for this operation.
 * @param name - Name of metadata entity.
 */
export const MetadataGetEntity = /*@__PURE__*/ API.make(() => ({
  inputSchema: MetadataGetEntityInput,
  outputSchema: MetadataGetEntityOutput,
}));
// Input Schema
export interface MetadataListInput {}
export const MetadataListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ResourceHealth/metadata",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<MetadataListInput>;

// Output Schema
export interface MetadataListOutput {
  value?: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const MetadataListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<MetadataListOutput>;

// The operation
/**
 * Gets the list of metadata entities.
 *
 * @param api-version - The API version to use for this operation.
 */
export const MetadataList = /*@__PURE__*/ API.make(() => ({
  inputSchema: MetadataListInput,
  outputSchema: MetadataListOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ResourceHealth/operations",
    apiVersion: "2025-05-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
  }[];
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
  value: Schema.Array(
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
    }),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists available operations for the resourcehealth resource provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdInput {
  subscriptionId: string;
  eventTrackingId: string;
  $filter?: string;
}
export const SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    eventTrackingId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/events/{eventTrackingId}/listSecurityAdvisoryImpactedResources",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdInput>;

// Output Schema
export interface SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdOutput>;

// The operation
/**
 * Lists impacted resources in the subscription by an event (Security Advisory).
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription.
 * @param eventTrackingId - Event Id which uniquely identifies ServiceHealth event.
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 */
export const SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema:
      SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdInput,
    outputSchema:
      SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdOutput,
  }));
// Input Schema
export interface SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdInput {
  eventTrackingId: string;
  $filter?: string;
}
export const SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdInput =
  /*@__PURE__*/ Schema.Struct({
    eventTrackingId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.ResourceHealth/events/{eventTrackingId}/listSecurityAdvisoryImpactedResources",
      apiVersion: "2025-05-01",
    }),
  ) as unknown as Schema.Codec<SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdInput>;

// Output Schema
export interface SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdOutput {
  value: {
    id?: string;
    name?: string;
    type?: string;
    systemData?: {
      createdBy?: string;
      createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      createdAt?: string;
      lastModifiedBy?: string;
      lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
      lastModifiedAt?: string;
    };
  }[];
  nextLink?: string;
}
export const SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        systemData: Schema.optional(
          Schema.Struct({
            createdBy: Schema.optional(Schema.String),
            createdByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            createdAt: Schema.optional(Schema.String),
            lastModifiedBy: Schema.optional(Schema.String),
            lastModifiedByType: Schema.optional(
              Schema.Literals([
                "User",
                "Application",
                "ManagedIdentity",
                "Key",
              ]),
            ),
            lastModifiedAt: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdOutput>;

// The operation
/**
 * Lists impacted resources in the tenant by an event (Security Advisory).
 *
 * @param api-version - The API version to use for this operation.
 * @param eventTrackingId - Event Id which uniquely identifies ServiceHealth event.
 * @param $filter - The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
 */
export const SecurityAdvisoryImpactedResourcesListByTenantIdAndEventId =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdInput,
    outputSchema:
      SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdOutput,
  }));
