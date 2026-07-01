/**
 * Azure Orbital API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AvailableGroundStationsListByCapabilityInput {
  subscriptionId: string;
  capability: "EarthObservation" | "Communication";
}
export const AvailableGroundStationsListByCapabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    capability: Schema.Literals(["EarthObservation", "Communication"]),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Orbital/availableGroundStations",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<AvailableGroundStationsListByCapabilityInput>;

// Output Schema
export interface AvailableGroundStationsListByCapabilityOutput {
  value?: {
    id?: string;
    name?: string;
    location?: string;
    type?: string;
    properties: {
      city?: string;
      providerName?: string;
      longitudeDegrees?: number;
      latitudeDegrees?: number;
      altitudeMeters?: number;
      releaseMode?: "Preview" | "GA";
    };
  }[];
  nextLink?: string;
}
export const AvailableGroundStationsListByCapabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          properties: Schema.Struct({
            city: Schema.optional(Schema.String),
            providerName: Schema.optional(Schema.String),
            longitudeDegrees: Schema.optional(Schema.Number),
            latitudeDegrees: Schema.optional(Schema.Number),
            altitudeMeters: Schema.optional(Schema.Number),
            releaseMode: Schema.optional(Schema.Literals(["Preview", "GA"])),
          }),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<AvailableGroundStationsListByCapabilityOutput>;

// The operation
/**
 * Returns list of available ground stations.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param capability - Ground Station Capability.
 */
export const AvailableGroundStationsListByCapability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailableGroundStationsListByCapabilityInput,
    outputSchema: AvailableGroundStationsListByCapabilityOutput,
  }));
// Input Schema
export interface ContactProfilesCreateOrUpdateInput {
  resourceGroupName: string;
  subscriptionId: string;
  contactProfileName: string;
  properties: {
    provisioningState?:
      | "creating"
      | "succeeded"
      | "failed"
      | "canceled"
      | "updating"
      | "deleting";
    minimumViableContactDuration?: string;
    minimumElevationDegrees?: number;
    autoTrackingConfiguration?: "disabled" | "xBand" | "sBand";
    eventHubUri?: string;
    networkConfiguration: { subnetId: string };
    thirdPartyConfigurations?: {
      providerName: string;
      missionConfiguration: string;
    }[];
    links: {
      name: string;
      polarization: "RHCP" | "LHCP" | "linearVertical" | "linearHorizontal";
      direction: "Uplink" | "Downlink";
      gainOverTemperature?: number;
      eirpdBW?: number;
      channels: {
        name: string;
        centerFrequencyMHz: number;
        bandwidthMHz: number;
        endPoint: {
          ipAddress: string;
          endPointName: string;
          port: string;
          protocol: "TCP" | "UDP";
        };
        modulationConfiguration?: string;
        demodulationConfiguration?: string;
        encodingConfiguration?: string;
        decodingConfiguration?: string;
      }[];
    }[];
  };
  tags?: Record<string, string>;
  location: string;
}
export const ContactProfilesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    contactProfileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "creating",
          "succeeded",
          "failed",
          "canceled",
          "updating",
          "deleting",
        ]),
      ),
      minimumViableContactDuration: Schema.optional(Schema.String),
      minimumElevationDegrees: Schema.optional(Schema.Number),
      autoTrackingConfiguration: Schema.optional(
        Schema.Literals(["disabled", "xBand", "sBand"]),
      ),
      eventHubUri: Schema.optional(Schema.String),
      networkConfiguration: Schema.Struct({
        subnetId: Schema.String,
      }),
      thirdPartyConfigurations: Schema.optional(
        Schema.Array(
          Schema.Struct({
            providerName: Schema.String,
            missionConfiguration: Schema.String,
          }),
        ),
      ),
      links: Schema.Array(
        Schema.Struct({
          name: Schema.String,
          polarization: Schema.Literals([
            "RHCP",
            "LHCP",
            "linearVertical",
            "linearHorizontal",
          ]),
          direction: Schema.Literals(["Uplink", "Downlink"]),
          gainOverTemperature: Schema.optional(Schema.Number),
          eirpdBW: Schema.optional(Schema.Number),
          channels: Schema.Array(
            Schema.Struct({
              name: Schema.String,
              centerFrequencyMHz: Schema.Number,
              bandwidthMHz: Schema.Number,
              endPoint: Schema.Struct({
                ipAddress: Schema.String,
                endPointName: Schema.String,
                port: Schema.String,
                protocol: Schema.Literals(["TCP", "UDP"]),
              }),
              modulationConfiguration: Schema.optional(Schema.String),
              demodulationConfiguration: Schema.optional(Schema.String),
              encodingConfiguration: Schema.optional(Schema.String),
              decodingConfiguration: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/contactProfiles/{contactProfileName}",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<ContactProfilesCreateOrUpdateInput>;

// Output Schema
export interface ContactProfilesCreateOrUpdateOutput {
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
export const ContactProfilesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ContactProfilesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a contact profile.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param contactProfileName - Contact Profile name.
 */
export const ContactProfilesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContactProfilesCreateOrUpdateInput,
    outputSchema: ContactProfilesCreateOrUpdateOutput,
  }));
// Input Schema
export interface ContactProfilesDeleteInput {
  resourceGroupName: string;
  subscriptionId: string;
  contactProfileName: string;
}
export const ContactProfilesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    contactProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/contactProfiles/{contactProfileName}",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<ContactProfilesDeleteInput>;

// Output Schema
export type ContactProfilesDeleteOutput = void;
export const ContactProfilesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ContactProfilesDeleteOutput>;

// The operation
/**
 * Deletes a specified contact profile resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param contactProfileName - Contact Profile name.
 */
export const ContactProfilesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContactProfilesDeleteInput,
    outputSchema: ContactProfilesDeleteOutput,
  }),
);
// Input Schema
export interface ContactProfilesGetInput {
  resourceGroupName: string;
  subscriptionId: string;
  contactProfileName: string;
}
export const ContactProfilesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    contactProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/contactProfiles/{contactProfileName}",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<ContactProfilesGetInput>;

// Output Schema
export interface ContactProfilesGetOutput {
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
export const ContactProfilesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ContactProfilesGetOutput>;

// The operation
/**
 * Gets the specified contact Profile in a specified resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param contactProfileName - Contact Profile name.
 */
export const ContactProfilesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContactProfilesGetInput,
  outputSchema: ContactProfilesGetOutput,
}));
// Input Schema
export interface ContactProfilesListInput {
  resourceGroupName: string;
  subscriptionId: string;
  $skiptoken?: string;
}
export const ContactProfilesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/contactProfiles",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<ContactProfilesListInput>;

// Output Schema
export interface ContactProfilesListOutput {
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
export const ContactProfilesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ContactProfilesListOutput>;

// The operation
/**
 * Returns list of contact profiles by Resource Group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param $skiptoken - An opaque string that the resource provider uses to skip over previously-returned results. This is used when a previous list operation call returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 */
export const ContactProfilesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContactProfilesListInput,
  outputSchema: ContactProfilesListOutput,
}));
// Input Schema
export interface ContactProfilesListBySubscriptionInput {
  subscriptionId: string;
  $skiptoken?: string;
}
export const ContactProfilesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Orbital/contactProfiles",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<ContactProfilesListBySubscriptionInput>;

// Output Schema
export interface ContactProfilesListBySubscriptionOutput {
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
export const ContactProfilesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ContactProfilesListBySubscriptionOutput>;

// The operation
/**
 * Returns list of contact profiles by Subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param $skiptoken - An opaque string that the resource provider uses to skip over previously-returned results. This is used when a previous list operation call returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 */
export const ContactProfilesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ContactProfilesListBySubscriptionInput,
    outputSchema: ContactProfilesListBySubscriptionOutput,
  }));
// Input Schema
export interface ContactProfilesUpdateTagsInput {
  resourceGroupName: string;
  subscriptionId: string;
  contactProfileName: string;
  tags?: Record<string, string>;
}
export const ContactProfilesUpdateTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    contactProfileName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/contactProfiles/{contactProfileName}",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<ContactProfilesUpdateTagsInput>;

// Output Schema
export interface ContactProfilesUpdateTagsOutput {
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
export const ContactProfilesUpdateTagsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<ContactProfilesUpdateTagsOutput>;

// The operation
/**
 * Updates the specified contact profile tags.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param contactProfileName - Contact Profile name.
 */
export const ContactProfilesUpdateTags = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ContactProfilesUpdateTagsInput,
    outputSchema: ContactProfilesUpdateTagsOutput,
  }),
);
// Input Schema
export interface ContactsCreateInput {
  resourceGroupName: string;
  subscriptionId: string;
  spacecraftName: string;
  contactName: string;
  properties: {
    provisioningState?:
      | "creating"
      | "succeeded"
      | "failed"
      | "canceled"
      | "updating"
      | "deleting";
    status?:
      | "scheduled"
      | "cancelled"
      | "succeeded"
      | "failed"
      | "providerCancelled";
    reservationStartTime: string;
    reservationEndTime: string;
    rxStartTime?: string;
    rxEndTime?: string;
    txStartTime?: string;
    txEndTime?: string;
    errorMessage?: string;
    maximumElevationDegrees?: number;
    startAzimuthDegrees?: number;
    endAzimuthDegrees?: number;
    groundStationName: string;
    startElevationDegrees?: number;
    endElevationDegrees?: number;
    antennaConfiguration?: { destinationIp?: string; sourceIps?: string[] };
    contactProfile: { id: string };
  };
}
export const ContactsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  spacecraftName: Schema.String.pipe(T.PathParam()),
  contactName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    provisioningState: Schema.optional(
      Schema.Literals([
        "creating",
        "succeeded",
        "failed",
        "canceled",
        "updating",
        "deleting",
      ]),
    ),
    status: Schema.optional(
      Schema.Literals([
        "scheduled",
        "cancelled",
        "succeeded",
        "failed",
        "providerCancelled",
      ]),
    ),
    reservationStartTime: Schema.String,
    reservationEndTime: Schema.String,
    rxStartTime: Schema.optional(Schema.String),
    rxEndTime: Schema.optional(Schema.String),
    txStartTime: Schema.optional(Schema.String),
    txEndTime: Schema.optional(Schema.String),
    errorMessage: Schema.optional(Schema.String),
    maximumElevationDegrees: Schema.optional(Schema.Number),
    startAzimuthDegrees: Schema.optional(Schema.Number),
    endAzimuthDegrees: Schema.optional(Schema.Number),
    groundStationName: Schema.String,
    startElevationDegrees: Schema.optional(Schema.Number),
    endElevationDegrees: Schema.optional(Schema.Number),
    antennaConfiguration: Schema.optional(
      Schema.Struct({
        destinationIp: Schema.optional(Schema.String),
        sourceIps: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    contactProfile: Schema.Struct({
      id: Schema.String,
    }),
  }),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}/contacts/{contactName}",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<ContactsCreateInput>;

// Output Schema
export interface ContactsCreateOutput {
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
export const ContactsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ContactsCreateOutput>;

// The operation
/**
 * Creates a contact.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param spacecraftName - Spacecraft ID.
 * @param contactName - Contact name.
 */
export const ContactsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContactsCreateInput,
  outputSchema: ContactsCreateOutput,
}));
// Input Schema
export interface ContactsDeleteInput {
  resourceGroupName: string;
  subscriptionId: string;
  spacecraftName: string;
  contactName: string;
}
export const ContactsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  spacecraftName: Schema.String.pipe(T.PathParam()),
  contactName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}/contacts/{contactName}",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<ContactsDeleteInput>;

// Output Schema
export type ContactsDeleteOutput = void;
export const ContactsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ContactsDeleteOutput>;

// The operation
/**
 * Deletes a specified contact.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param spacecraftName - Spacecraft ID.
 * @param contactName - Contact name.
 */
export const ContactsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContactsDeleteInput,
  outputSchema: ContactsDeleteOutput,
}));
// Input Schema
export interface ContactsGetInput {
  resourceGroupName: string;
  subscriptionId: string;
  spacecraftName: string;
  contactName: string;
}
export const ContactsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  spacecraftName: Schema.String.pipe(T.PathParam()),
  contactName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}/contacts/{contactName}",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<ContactsGetInput>;

// Output Schema
export interface ContactsGetOutput {
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
export const ContactsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ContactsGetOutput>;

// The operation
/**
 * Gets the specified contact in a specified resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param spacecraftName - Spacecraft ID.
 * @param contactName - Contact name.
 */
export const ContactsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContactsGetInput,
  outputSchema: ContactsGetOutput,
}));
// Input Schema
export interface ContactsListInput {
  resourceGroupName: string;
  subscriptionId: string;
  spacecraftName: string;
  $skiptoken?: string;
}
export const ContactsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  spacecraftName: Schema.String.pipe(T.PathParam()),
  $skiptoken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}/contacts",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<ContactsListInput>;

// Output Schema
export interface ContactsListOutput {
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
export const ContactsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ContactsListOutput>;

// The operation
/**
 * Returns list of contacts by spacecraftName.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param spacecraftName - Spacecraft ID.
 * @param $skiptoken - An opaque string that the resource provider uses to skip over previously-returned results. This is used when a previous list operation call returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 */
export const ContactsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ContactsListInput,
  outputSchema: ContactsListOutput,
}));
// Input Schema
export interface EdgeSitesCreateOrUpdateInput {
  resourceGroupName: string;
  subscriptionId: string;
  edgeSiteName: string;
  properties: { globalCommunicationsSite: { id: string } };
  tags?: Record<string, string>;
  location: string;
}
export const EdgeSitesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    edgeSiteName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      globalCommunicationsSite: Schema.Struct({
        id: Schema.String,
      }),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/edgeSites/{edgeSiteName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<EdgeSitesCreateOrUpdateInput>;

// Output Schema
export interface EdgeSitesCreateOrUpdateOutput {
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
export const EdgeSitesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<EdgeSitesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an edge site.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param edgeSiteName - Edge site name.
 */
export const EdgeSitesCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EdgeSitesCreateOrUpdateInput,
    outputSchema: EdgeSitesCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface EdgeSitesDeleteInput {
  resourceGroupName: string;
  subscriptionId: string;
  edgeSiteName: string;
}
export const EdgeSitesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  edgeSiteName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/edgeSites/{edgeSiteName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<EdgeSitesDeleteInput>;

// Output Schema
export type EdgeSitesDeleteOutput = void;
export const EdgeSitesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<EdgeSitesDeleteOutput>;

// The operation
/**
 * Deletes a specified edge site resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param edgeSiteName - Edge site name.
 */
export const EdgeSitesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EdgeSitesDeleteInput,
  outputSchema: EdgeSitesDeleteOutput,
}));
// Input Schema
export interface EdgeSitesGetInput {
  resourceGroupName: string;
  subscriptionId: string;
  edgeSiteName: string;
}
export const EdgeSitesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  edgeSiteName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/edgeSites/{edgeSiteName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<EdgeSitesGetInput>;

// Output Schema
export interface EdgeSitesGetOutput {
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
export const EdgeSitesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EdgeSitesGetOutput>;

// The operation
/**
 * Gets the specified edge site in a specified resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param edgeSiteName - Edge site name.
 */
export const EdgeSitesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EdgeSitesGetInput,
  outputSchema: EdgeSitesGetOutput,
}));
// Input Schema
export interface EdgeSitesListInput {
  subscriptionId: string;
  resourceGroupName: string;
  $skiptoken?: string;
}
export const EdgeSitesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  $skiptoken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/edgeSites",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<EdgeSitesListInput>;

// Output Schema
export interface EdgeSitesListOutput {
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
export const EdgeSitesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<EdgeSitesListOutput>;

// The operation
/**
 * Returns a list of edge sites for a resource group.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $skiptoken - An opaque string that the resource provider uses to skip over previously-returned results. This is used when a previous list operation call returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 */
export const EdgeSitesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EdgeSitesListInput,
  outputSchema: EdgeSitesListOutput,
}));
// Input Schema
export interface EdgeSitesListBySubscriptionInput {
  subscriptionId: string;
  $skiptoken?: string;
}
export const EdgeSitesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Orbital/edgeSites",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<EdgeSitesListBySubscriptionInput>;

// Output Schema
export interface EdgeSitesListBySubscriptionOutput {
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
export const EdgeSitesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<EdgeSitesListBySubscriptionOutput>;

// The operation
/**
 * Returns a list of edge sites for a subscription.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param $skiptoken - An opaque string that the resource provider uses to skip over previously-returned results. This is used when a previous list operation call returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 */
export const EdgeSitesListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EdgeSitesListBySubscriptionInput,
    outputSchema: EdgeSitesListBySubscriptionOutput,
  }),
);
// Input Schema
export interface EdgeSitesListL2ConnectionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  edgeSiteName: string;
}
export const EdgeSitesListL2ConnectionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    edgeSiteName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/edgeSites/{edgeSiteName}/listL2Connections",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<EdgeSitesListL2ConnectionsInput>;

// Output Schema
export interface EdgeSitesListL2ConnectionsOutput {
  value?: { id?: string }[];
  nextLink?: string;
}
export const EdgeSitesListL2ConnectionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<EdgeSitesListL2ConnectionsOutput>;

// The operation
/**
 * Returns a list of L2 Connections attached to an edge site.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param edgeSiteName - Edge site name.
 */
export const EdgeSitesListL2Connections = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EdgeSitesListL2ConnectionsInput,
    outputSchema: EdgeSitesListL2ConnectionsOutput,
  }),
);
// Input Schema
export interface EdgeSitesUpdateTagsInput {
  resourceGroupName: string;
  subscriptionId: string;
  edgeSiteName: string;
  tags?: Record<string, string>;
}
export const EdgeSitesUpdateTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    edgeSiteName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/edgeSites/{edgeSiteName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<EdgeSitesUpdateTagsInput>;

// Output Schema
export interface EdgeSitesUpdateTagsOutput {
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
export const EdgeSitesUpdateTagsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<EdgeSitesUpdateTagsOutput>;

// The operation
/**
 * Updates the specified edge site's tags.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param edgeSiteName - Edge site name.
 */
export const EdgeSitesUpdateTags = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EdgeSitesUpdateTagsInput,
  outputSchema: EdgeSitesUpdateTagsOutput,
}));
// Input Schema
export interface GlobalCommunicationsSitesListBySubscriptionInput {
  subscriptionId: string;
}
export const GlobalCommunicationsSitesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Orbital/globalCommunicationsSites",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<GlobalCommunicationsSitesListBySubscriptionInput>;

// Output Schema
export interface GlobalCommunicationsSitesListBySubscriptionOutput {
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
export const GlobalCommunicationsSitesListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GlobalCommunicationsSitesListBySubscriptionOutput>;

// The operation
/**
 * Returns a list of the global communications sites that a subscription is authorized to use.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 */
export const GlobalCommunicationsSitesListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GlobalCommunicationsSitesListBySubscriptionInput,
    outputSchema: GlobalCommunicationsSitesListBySubscriptionOutput,
  }));
// Input Schema
export interface GroundStationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  groundStationName: string;
  properties?: {
    city?: string;
    capabilities: ("EarthObservation" | "Communication")[];
    providerName?: string;
    longitudeDegrees?: number;
    latitudeDegrees?: number;
    altitudeMeters?: number;
    releaseMode?: "Preview" | "GA";
    globalCommunicationsSite: { id: string };
  };
  tags?: Record<string, string>;
  location: string;
}
export const GroundStationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    groundStationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        city: Schema.optional(Schema.String),
        capabilities: Schema.Array(
          Schema.Literals(["EarthObservation", "Communication"]),
        ),
        providerName: Schema.optional(Schema.String),
        longitudeDegrees: Schema.optional(Schema.Number),
        latitudeDegrees: Schema.optional(Schema.Number),
        altitudeMeters: Schema.optional(Schema.Number),
        releaseMode: Schema.optional(Schema.Literals(["Preview", "GA"])),
        globalCommunicationsSite: Schema.Struct({
          id: Schema.String,
        }),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/groundStations/{groundStationName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<GroundStationsCreateOrUpdateInput>;

// Output Schema
export interface GroundStationsCreateOrUpdateOutput {
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
export const GroundStationsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GroundStationsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a ground station resource.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param groundStationName - Ground Station name.
 */
export const GroundStationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GroundStationsCreateOrUpdateInput,
    outputSchema: GroundStationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface GroundStationsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  groundStationName: string;
}
export const GroundStationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    groundStationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/groundStations/{groundStationName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<GroundStationsDeleteInput>;

// Output Schema
export type GroundStationsDeleteOutput = void;
export const GroundStationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GroundStationsDeleteOutput>;

// The operation
/**
 * Deletes a specified ground station resource.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param groundStationName - Ground Station name.
 * @param api-version - The API version to use for this operation.
 */
export const GroundStationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GroundStationsDeleteInput,
    outputSchema: GroundStationsDeleteOutput,
  }),
);
// Input Schema
export interface GroundStationsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  groundStationName: string;
}
export const GroundStationsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    groundStationName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/groundStations/{groundStationName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<GroundStationsGetInput>;

// Output Schema
export interface GroundStationsGetOutput {
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
export const GroundStationsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GroundStationsGetOutput>;

// The operation
/**
 * Gets the specified ground station in a specified resource group.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param groundStationName - Ground Station name.
 * @param api-version - The API version to use for this operation.
 */
export const GroundStationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GroundStationsGetInput,
  outputSchema: GroundStationsGetOutput,
}));
// Input Schema
export interface GroundStationsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  $skiptoken?: string;
}
export const GroundStationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/groundStations",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<GroundStationsListInput>;

// Output Schema
export interface GroundStationsListOutput {
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
export const GroundStationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GroundStationsListOutput>;

// The operation
/**
 * Return list of ground stations.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param api-version - The API version to use for this operation.
 * @param $skiptoken - An opaque string that the resource provider uses to skip over previously-returned results. This is used when a previous list operation call returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 */
export const GroundStationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GroundStationsListInput,
  outputSchema: GroundStationsListOutput,
}));
// Input Schema
export interface GroundStationsListBySubscriptionInput {
  subscriptionId: string;
  $skiptoken?: string;
}
export const GroundStationsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Orbital/groundStations",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<GroundStationsListBySubscriptionInput>;

// Output Schema
export interface GroundStationsListBySubscriptionOutput {
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
export const GroundStationsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GroundStationsListBySubscriptionOutput>;

// The operation
/**
 * Return list of ground stations.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param $skiptoken - An opaque string that the resource provider uses to skip over previously-returned results. This is used when a previous list operation call returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 */
export const GroundStationsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GroundStationsListBySubscriptionInput,
    outputSchema: GroundStationsListBySubscriptionOutput,
  }));
// Input Schema
export interface GroundStationsListL2ConnectionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  groundStationName: string;
}
export const GroundStationsListL2ConnectionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    groundStationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/groundStations/{groundStationName}/listL2Connections",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<GroundStationsListL2ConnectionsInput>;

// Output Schema
export interface GroundStationsListL2ConnectionsOutput {
  value?: { id?: string }[];
  nextLink?: string;
}
export const GroundStationsListL2ConnectionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<GroundStationsListL2ConnectionsOutput>;

// The operation
/**
 * Returns a list of L2 Connections attached to an ground station.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param groundStationName - Ground Station name.
 */
export const GroundStationsListL2Connections =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GroundStationsListL2ConnectionsInput,
    outputSchema: GroundStationsListL2ConnectionsOutput,
  }));
// Input Schema
export interface GroundStationsUpdateTagsInput {
  resourceGroupName: string;
  subscriptionId: string;
  groundStationName: string;
  tags?: Record<string, string>;
}
export const GroundStationsUpdateTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    groundStationName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/groundStations/{groundStationName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<GroundStationsUpdateTagsInput>;

// Output Schema
export interface GroundStationsUpdateTagsOutput {
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
export const GroundStationsUpdateTagsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GroundStationsUpdateTagsOutput>;

// The operation
/**
 * Updates the specified ground station tags.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param groundStationName - Ground Station name.
 */
export const GroundStationsUpdateTags = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GroundStationsUpdateTagsInput,
    outputSchema: GroundStationsUpdateTagsOutput,
  }),
);
// Input Schema
export interface L2ConnectionsCreateOrUpdateInput {
  resourceGroupName: string;
  subscriptionId: string;
  l2ConnectionName: string;
  properties: {
    provisioningState?:
      | "Creating"
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Updating"
      | "Deleting";
    circuitId?: string;
    edgeSite: { id: string };
    edgeSitePartnerRouter: { name: string };
    groundStation: { id: string };
    groundStationPartnerRouter: { name: string };
    vlanId: number;
  };
  tags?: Record<string, string>;
  location: string;
}
export const L2ConnectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    l2ConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Creating",
          "Succeeded",
          "Failed",
          "Canceled",
          "Updating",
          "Deleting",
        ]),
      ),
      circuitId: Schema.optional(Schema.String),
      edgeSite: Schema.Struct({
        id: Schema.String,
      }),
      edgeSitePartnerRouter: Schema.Struct({
        name: Schema.String,
      }),
      groundStation: Schema.Struct({
        id: Schema.String,
      }),
      groundStationPartnerRouter: Schema.Struct({
        name: Schema.String,
      }),
      vlanId: Schema.Number,
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/l2Connections/{l2ConnectionName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<L2ConnectionsCreateOrUpdateInput>;

// Output Schema
export interface L2ConnectionsCreateOrUpdateOutput {
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
export const L2ConnectionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<L2ConnectionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an L2 Connection.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param l2ConnectionName - L2 Connection name.
 */
export const L2ConnectionsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: L2ConnectionsCreateOrUpdateInput,
    outputSchema: L2ConnectionsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface L2ConnectionsDeleteInput {
  resourceGroupName: string;
  subscriptionId: string;
  l2ConnectionName: string;
}
export const L2ConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    l2ConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/l2Connections/{l2ConnectionName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<L2ConnectionsDeleteInput>;

// Output Schema
export type L2ConnectionsDeleteOutput = void;
export const L2ConnectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<L2ConnectionsDeleteOutput>;

// The operation
/**
 * Deletes a specified L2 Connection resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param l2ConnectionName - L2 Connection name.
 */
export const L2ConnectionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: L2ConnectionsDeleteInput,
  outputSchema: L2ConnectionsDeleteOutput,
}));
// Input Schema
export interface L2ConnectionsGetInput {
  resourceGroupName: string;
  subscriptionId: string;
  l2ConnectionName: string;
}
export const L2ConnectionsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  l2ConnectionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/l2Connections/{l2ConnectionName}",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<L2ConnectionsGetInput>;

// Output Schema
export interface L2ConnectionsGetOutput {
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
export const L2ConnectionsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<L2ConnectionsGetOutput>;

// The operation
/**
 * Gets the specified L2 connection in a specified resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param l2ConnectionName - L2 Connection name.
 */
export const L2ConnectionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: L2ConnectionsGetInput,
  outputSchema: L2ConnectionsGetOutput,
}));
// Input Schema
export interface L2ConnectionsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  $skiptoken?: string;
}
export const L2ConnectionsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $skiptoken: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/l2Connections",
    apiVersion: "2024-03-01",
  }),
) as unknown as Schema.Codec<L2ConnectionsListInput>;

// Output Schema
export interface L2ConnectionsListOutput {
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
export const L2ConnectionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<L2ConnectionsListOutput>;

// The operation
/**
 * Returns a list of L2 Connections attached to an orbital gateway.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $skiptoken - An opaque string that the resource provider uses to skip over previously-returned results. This is used when a previous list operation call returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 */
export const L2ConnectionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: L2ConnectionsListInput,
  outputSchema: L2ConnectionsListOutput,
}));
// Input Schema
export interface L2ConnectionsListBySubscriptionInput {
  subscriptionId: string;
  $skiptoken?: string;
}
export const L2ConnectionsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Orbital/l2Connections",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<L2ConnectionsListBySubscriptionInput>;

// Output Schema
export interface L2ConnectionsListBySubscriptionOutput {
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
export const L2ConnectionsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<L2ConnectionsListBySubscriptionOutput>;

// The operation
/**
 * Returns a list of L2 Connections attached to a subscription.
 *
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param $skiptoken - An opaque string that the resource provider uses to skip over previously-returned results. This is used when a previous list operation call returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 */
export const L2ConnectionsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: L2ConnectionsListBySubscriptionInput,
    outputSchema: L2ConnectionsListBySubscriptionOutput,
  }));
// Input Schema
export interface L2ConnectionsUpdateTagsInput {
  resourceGroupName: string;
  subscriptionId: string;
  l2ConnectionName: string;
  tags?: Record<string, string>;
}
export const L2ConnectionsUpdateTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    l2ConnectionName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/l2Connections/{l2ConnectionName}",
      apiVersion: "2024-03-01",
    }),
  ) as unknown as Schema.Codec<L2ConnectionsUpdateTagsInput>;

// Output Schema
export interface L2ConnectionsUpdateTagsOutput {
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
export const L2ConnectionsUpdateTagsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<L2ConnectionsUpdateTagsOutput>;

// The operation
/**
 * Updates the specified L2 Connection's tags.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param api-version - The API version to use for this operation.
 * @param l2ConnectionName - L2 Connection name.
 */
export const L2ConnectionsUpdateTags = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: L2ConnectionsUpdateTagsInput,
    outputSchema: L2ConnectionsUpdateTagsOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Orbital/operations",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: "user" | "system" | "user,system";
    actionType?: "Internal";
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        isDataAction: Schema.optional(Schema.Boolean),
        display: Schema.optional(
          Schema.Struct({
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        origin: Schema.optional(
          Schema.Literals(["user", "system", "user,system"]),
        ),
        actionType: Schema.optional(Schema.Literals(["Internal"])),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Lists all of the available Orbital Rest API operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OperationsResultsGetInput {
  subscriptionId: string;
  location: string;
  operationId: string;
}
export const OperationsResultsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    operationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Orbital/locations/{location}/operationResults/{operationId}",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<OperationsResultsGetInput>;

// Output Schema
export interface OperationsResultsGetOutput {
  id?: string;
  name?: string;
  status?: "Succeeded" | "Canceled" | "Failed" | "Running";
  startTime?: string;
  endTime?: string;
  percentComplete?: number;
  value?: {}[];
  nextLink?: string;
  properties?: {};
  error?: { code?: string; message?: string };
}
export const OperationsResultsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["Succeeded", "Canceled", "Failed", "Running"]),
    ),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    percentComplete: Schema.optional(Schema.Number),
    value: Schema.optional(Schema.Array(Schema.Struct({}))),
    nextLink: Schema.optional(Schema.String),
    properties: Schema.optional(Schema.Struct({})),
    error: Schema.optional(
      Schema.Struct({
        code: Schema.optional(Schema.String),
        message: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<OperationsResultsGetOutput>;

// The operation
/**
 * Returns operation results.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param location - The name of Azure region.
 * @param operationId - The ID of an ongoing async operation.
 */
export const OperationsResultsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OperationsResultsGetInput,
    outputSchema: OperationsResultsGetOutput,
  }),
);
// Input Schema
export interface SpacecraftsCreateOrUpdateInput {
  resourceGroupName: string;
  subscriptionId: string;
  spacecraftName: string;
  properties: {
    provisioningState?:
      | "creating"
      | "succeeded"
      | "failed"
      | "canceled"
      | "updating"
      | "deleting";
    noradId?: string;
    titleLine: string;
    tleLine1: string;
    tleLine2: string;
    links: {
      name: string;
      centerFrequencyMHz: number;
      bandwidthMHz: number;
      direction: "Uplink" | "Downlink";
      polarization: "RHCP" | "LHCP" | "linearVertical" | "linearHorizontal";
      authorizations?: { groundStation: string; expirationDate: string }[];
    }[];
  };
  tags?: Record<string, string>;
  location: string;
}
export const SpacecraftsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    spacecraftName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "creating",
          "succeeded",
          "failed",
          "canceled",
          "updating",
          "deleting",
        ]),
      ),
      noradId: Schema.optional(Schema.String),
      titleLine: Schema.String,
      tleLine1: Schema.String,
      tleLine2: Schema.String,
      links: Schema.Array(
        Schema.Struct({
          name: Schema.String,
          centerFrequencyMHz: Schema.Number,
          bandwidthMHz: Schema.Number,
          direction: Schema.Literals(["Uplink", "Downlink"]),
          polarization: Schema.Literals([
            "RHCP",
            "LHCP",
            "linearVertical",
            "linearHorizontal",
          ]),
          authorizations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                groundStation: Schema.String,
                expirationDate: Schema.String,
              }),
            ),
          ),
        }),
      ),
    }),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<SpacecraftsCreateOrUpdateInput>;

// Output Schema
export interface SpacecraftsCreateOrUpdateOutput {
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
export const SpacecraftsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SpacecraftsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a spacecraft resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param spacecraftName - Spacecraft ID.
 */
export const SpacecraftsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SpacecraftsCreateOrUpdateInput,
    outputSchema: SpacecraftsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface SpacecraftsDeleteInput {
  resourceGroupName: string;
  subscriptionId: string;
  spacecraftName: string;
}
export const SpacecraftsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    spacecraftName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<SpacecraftsDeleteInput>;

// Output Schema
export type SpacecraftsDeleteOutput = void;
export const SpacecraftsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SpacecraftsDeleteOutput>;

// The operation
/**
 * Deletes a specified spacecraft resource.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param spacecraftName - Spacecraft ID.
 */
export const SpacecraftsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SpacecraftsDeleteInput,
  outputSchema: SpacecraftsDeleteOutput,
}));
// Input Schema
export interface SpacecraftsGetInput {
  resourceGroupName: string;
  subscriptionId: string;
  spacecraftName: string;
}
export const SpacecraftsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  spacecraftName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<SpacecraftsGetInput>;

// Output Schema
export interface SpacecraftsGetOutput {
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
export const SpacecraftsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SpacecraftsGetOutput>;

// The operation
/**
 * Gets the specified spacecraft in a specified resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param spacecraftName - Spacecraft ID.
 */
export const SpacecraftsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SpacecraftsGetInput,
  outputSchema: SpacecraftsGetOutput,
}));
// Input Schema
export interface SpacecraftsListInput {
  resourceGroupName: string;
  subscriptionId: string;
  $skiptoken?: string;
}
export const SpacecraftsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  subscriptionId: Schema.String.pipe(T.PathParam()),
  $skiptoken: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts",
    apiVersion: "2022-11-01",
  }),
) as unknown as Schema.Codec<SpacecraftsListInput>;

// Output Schema
export interface SpacecraftsListOutput {
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
export const SpacecraftsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SpacecraftsListOutput>;

// The operation
/**
 * Returns list of spacecrafts by resource group.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param $skiptoken - An opaque string that the resource provider uses to skip over previously-returned results. This is used when a previous list operation call returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 */
export const SpacecraftsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SpacecraftsListInput,
  outputSchema: SpacecraftsListOutput,
}));
// Input Schema
export interface SpacecraftsListAvailableContactsInput {
  resourceGroupName: string;
  subscriptionId: string;
  spacecraftName: string;
  contactProfile: { id: string };
  groundStationName: string;
  startTime: string;
  endTime: string;
}
export const SpacecraftsListAvailableContactsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    spacecraftName: Schema.String.pipe(T.PathParam()),
    contactProfile: Schema.Struct({
      id: Schema.String,
    }),
    groundStationName: Schema.String,
    startTime: Schema.String,
    endTime: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}/listAvailableContacts",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<SpacecraftsListAvailableContactsInput>;

// Output Schema
export interface SpacecraftsListAvailableContactsOutput {
  value?: {
    spacecraft?: { id: string };
    groundStationName?: string;
    properties?: {
      maximumElevationDegrees?: number;
      txStartTime?: string;
      txEndTime?: string;
      rxStartTime?: string;
      rxEndTime?: string;
      startAzimuthDegrees?: number;
      endAzimuthDegrees?: number;
      startElevationDegrees?: number;
      endElevationDegrees?: number;
    };
  }[];
  nextLink?: string;
}
export const SpacecraftsListAvailableContactsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          spacecraft: Schema.optional(
            Schema.Struct({
              id: Schema.String,
            }),
          ),
          groundStationName: Schema.optional(Schema.String),
          properties: Schema.optional(
            Schema.Struct({
              maximumElevationDegrees: Schema.optional(Schema.Number),
              txStartTime: Schema.optional(Schema.String),
              txEndTime: Schema.optional(Schema.String),
              rxStartTime: Schema.optional(Schema.String),
              rxEndTime: Schema.optional(Schema.String),
              startAzimuthDegrees: Schema.optional(Schema.Number),
              endAzimuthDegrees: Schema.optional(Schema.Number),
              startElevationDegrees: Schema.optional(Schema.Number),
              endElevationDegrees: Schema.optional(Schema.Number),
            }),
          ),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SpacecraftsListAvailableContactsOutput>;

// The operation
/**
 * Returns list of available contacts. A contact is available if the spacecraft is visible from the ground station for more than the minimum viable contact duration provided in the contact profile.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param spacecraftName - Spacecraft ID.
 */
export const SpacecraftsListAvailableContacts =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SpacecraftsListAvailableContactsInput,
    outputSchema: SpacecraftsListAvailableContactsOutput,
  }));
// Input Schema
export interface SpacecraftsListBySubscriptionInput {
  subscriptionId: string;
  $skiptoken?: string;
}
export const SpacecraftsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $skiptoken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Orbital/spacecrafts",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<SpacecraftsListBySubscriptionInput>;

// Output Schema
export interface SpacecraftsListBySubscriptionOutput {
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
export const SpacecraftsListBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SpacecraftsListBySubscriptionOutput>;

// The operation
/**
 * Returns list of spacecrafts by subscription.
 *
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param $skiptoken - An opaque string that the resource provider uses to skip over previously-returned results. This is used when a previous list operation call returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls.
 */
export const SpacecraftsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SpacecraftsListBySubscriptionInput,
    outputSchema: SpacecraftsListBySubscriptionOutput,
  }));
// Input Schema
export interface SpacecraftsUpdateTagsInput {
  resourceGroupName: string;
  subscriptionId: string;
  spacecraftName: string;
  tags?: Record<string, string>;
}
export const SpacecraftsUpdateTagsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    subscriptionId: Schema.String.pipe(T.PathParam()),
    spacecraftName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Orbital/spacecrafts/{spacecraftName}",
      apiVersion: "2022-11-01",
    }),
  ) as unknown as Schema.Codec<SpacecraftsUpdateTagsInput>;

// Output Schema
export interface SpacecraftsUpdateTagsOutput {
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
export const SpacecraftsUpdateTagsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SpacecraftsUpdateTagsOutput>;

// The operation
/**
 * Updates the specified spacecraft tags.
 *
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param subscriptionId - The ID of the target subscription.
 * @param api-version - The API version to use for this operation.
 * @param spacecraftName - Spacecraft ID.
 */
export const SpacecraftsUpdateTags = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SpacecraftsUpdateTagsInput,
    outputSchema: SpacecraftsUpdateTagsOutput,
  }),
);
