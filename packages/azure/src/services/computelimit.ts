/**
 * Azure Computelimit API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface FeaturesDisableInput {
  subscriptionId: string;
  location: string;
  featureName: string;
}
export const FeaturesDisableInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  featureName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/features/{featureName}/disable",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<FeaturesDisableInput>;

// Output Schema
export interface FeaturesDisableOutput {
  id?: string;
  resourceId?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: unknown[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const FeaturesDisableOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  resourceId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  status: Schema.String,
  percentComplete: Schema.optional(Schema.Number),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  operations: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        status: Schema.String,
        percentComplete: Schema.optional(Schema.Number),
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.String),
        operations: Schema.optional(Schema.Array(Schema.Unknown)),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            details: Schema.optional(Schema.Array(Schema.Unknown)),
            additionalInfo: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  type: Schema.optional(Schema.String),
                  info: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  ),
  error: Schema.optional(
    Schema.Struct({
      code: Schema.optional(Schema.String),
      message: Schema.optional(Schema.String),
      target: Schema.optional(Schema.String),
      details: Schema.optional(Schema.Array(Schema.Unknown)),
      additionalInfo: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            info: Schema.optional(Schema.Unknown),
          }),
        ),
      ),
    }),
  ),
}) as unknown as Schema.Codec<FeaturesDisableOutput>;

// The operation
/**
 * Disables a compute limit feature for the subscription at the specified location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param featureName - The name of the Feature
 */
export const FeaturesDisable = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FeaturesDisableInput,
  outputSchema: FeaturesDisableOutput,
}));
// Input Schema
export interface FeaturesEnableInput {
  subscriptionId: string;
  location: string;
  featureName: string;
  serviceTreeId?: string;
}
export const FeaturesEnableInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  featureName: Schema.String.pipe(T.PathParam()),
  serviceTreeId: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/features/{featureName}/enable",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<FeaturesEnableInput>;

// Output Schema
export interface FeaturesEnableOutput {
  id?: string;
  resourceId?: string;
  name?: string;
  status: string;
  percentComplete?: number;
  startTime?: string;
  endTime?: string;
  operations?: {
    id?: string;
    resourceId?: string;
    name?: string;
    status: string;
    percentComplete?: number;
    startTime?: string;
    endTime?: string;
    operations?: unknown[];
    error?: {
      code?: string;
      message?: string;
      target?: string;
      details?: unknown[];
      additionalInfo?: { type?: string; info?: unknown }[];
    };
  }[];
  error?: {
    code?: string;
    message?: string;
    target?: string;
    details?: unknown[];
    additionalInfo?: { type?: string; info?: unknown }[];
  };
}
export const FeaturesEnableOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  resourceId: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  status: Schema.String,
  percentComplete: Schema.optional(Schema.Number),
  startTime: Schema.optional(Schema.String),
  endTime: Schema.optional(Schema.String),
  operations: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        resourceId: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        status: Schema.String,
        percentComplete: Schema.optional(Schema.Number),
        startTime: Schema.optional(Schema.String),
        endTime: Schema.optional(Schema.String),
        operations: Schema.optional(Schema.Array(Schema.Unknown)),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            details: Schema.optional(Schema.Array(Schema.Unknown)),
            additionalInfo: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  type: Schema.optional(Schema.String),
                  info: Schema.optional(Schema.Unknown),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  ),
  error: Schema.optional(
    Schema.Struct({
      code: Schema.optional(Schema.String),
      message: Schema.optional(Schema.String),
      target: Schema.optional(Schema.String),
      details: Schema.optional(Schema.Array(Schema.Unknown)),
      additionalInfo: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.optional(Schema.String),
            info: Schema.optional(Schema.Unknown),
          }),
        ),
      ),
    }),
  ),
}) as unknown as Schema.Codec<FeaturesEnableOutput>;

// The operation
/**
 * Enables a compute limit feature for the subscription at the specified location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param featureName - The name of the Feature
 */
export const FeaturesEnable = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FeaturesEnableInput,
  outputSchema: FeaturesEnableOutput,
}));
// Input Schema
export interface FeaturesGetInput {
  subscriptionId: string;
  location: string;
  featureName: string;
}
export const FeaturesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  featureName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/features/{featureName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<FeaturesGetInput>;

// Output Schema
export interface FeaturesGetOutput {
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
export const FeaturesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<FeaturesGetOutput>;

// The operation
/**
 * Gets the properties of a compute limit feature.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param featureName - The name of the Feature
 */
export const FeaturesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FeaturesGetInput,
  outputSchema: FeaturesGetOutput,
}));
// Input Schema
export interface FeaturesListBySubscriptionLocationResourceInput {
  subscriptionId: string;
  location: string;
}
export const FeaturesListBySubscriptionLocationResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/features",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<FeaturesListBySubscriptionLocationResourceInput>;

// Output Schema
export interface FeaturesListBySubscriptionLocationResourceOutput {
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
export const FeaturesListBySubscriptionLocationResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<FeaturesListBySubscriptionLocationResourceOutput>;

// The operation
/**
 * Lists all compute limit features for the subscription at the specified location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const FeaturesListBySubscriptionLocationResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FeaturesListBySubscriptionLocationResourceInput,
    outputSchema: FeaturesListBySubscriptionLocationResourceOutput,
  }));
// Input Schema
export interface GuestSubscriptionsCreateInput {
  subscriptionId: string;
  location: string;
  guestSubscriptionId: string;
  properties?: { provisioningState?: "Succeeded" | "Failed" | "Canceled" };
}
export const GuestSubscriptionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    guestSubscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/guestSubscriptions/{guestSubscriptionId}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<GuestSubscriptionsCreateInput>;

// Output Schema
export interface GuestSubscriptionsCreateOutput {
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
export const GuestSubscriptionsCreateOutput =
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
  }) as unknown as Schema.Codec<GuestSubscriptionsCreateOutput>;

// The operation
/**
 * Adds a subscription as a guest to consume the compute limits shared by the host subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param guestSubscriptionId - The name of the GuestSubscription
 */
export const GuestSubscriptionsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GuestSubscriptionsCreateInput,
    outputSchema: GuestSubscriptionsCreateOutput,
  }),
);
// Input Schema
export interface GuestSubscriptionsDeleteInput {
  subscriptionId: string;
  location: string;
  guestSubscriptionId: string;
}
export const GuestSubscriptionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    guestSubscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/guestSubscriptions/{guestSubscriptionId}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<GuestSubscriptionsDeleteInput>;

// Output Schema
export type GuestSubscriptionsDeleteOutput = void;
export const GuestSubscriptionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<GuestSubscriptionsDeleteOutput>;

// The operation
/**
 * Deletes a subscription as a guest to stop consuming the compute limits shared by the host subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param guestSubscriptionId - The name of the GuestSubscription
 */
export const GuestSubscriptionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GuestSubscriptionsDeleteInput,
    outputSchema: GuestSubscriptionsDeleteOutput,
  }),
);
// Input Schema
export interface GuestSubscriptionsGetInput {
  subscriptionId: string;
  location: string;
  guestSubscriptionId: string;
}
export const GuestSubscriptionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    guestSubscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/guestSubscriptions/{guestSubscriptionId}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<GuestSubscriptionsGetInput>;

// Output Schema
export interface GuestSubscriptionsGetOutput {
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
export const GuestSubscriptionsGetOutput =
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
  }) as unknown as Schema.Codec<GuestSubscriptionsGetOutput>;

// The operation
/**
 * Gets the properties of a guest subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param guestSubscriptionId - The name of the GuestSubscription
 */
export const GuestSubscriptionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GuestSubscriptionsGetInput,
    outputSchema: GuestSubscriptionsGetOutput,
  }),
);
// Input Schema
export interface GuestSubscriptionsListBySubscriptionLocationResourceInput {
  subscriptionId: string;
  location: string;
}
export const GuestSubscriptionsListBySubscriptionLocationResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/guestSubscriptions",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<GuestSubscriptionsListBySubscriptionLocationResourceInput>;

// Output Schema
export interface GuestSubscriptionsListBySubscriptionLocationResourceOutput {
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
export const GuestSubscriptionsListBySubscriptionLocationResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GuestSubscriptionsListBySubscriptionLocationResourceOutput>;

// The operation
/**
 * Lists all guest subscriptions in a location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const GuestSubscriptionsListBySubscriptionLocationResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GuestSubscriptionsListBySubscriptionLocationResourceInput,
    outputSchema: GuestSubscriptionsListBySubscriptionLocationResourceOutput,
  }));
// Input Schema
export interface MemberCapOverridesCreateOrUpdateInput {
  subscriptionId: string;
  location: string;
  vmFamilyName: string;
  memberSubscriptionId: string;
  properties?: {
    cap: number;
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
  };
}
export const MemberCapOverridesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    vmFamilyName: Schema.String.pipe(T.PathParam()),
    memberSubscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        cap: Schema.Number,
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimitCaps/{vmFamilyName}/memberCapOverrides/{memberSubscriptionId}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<MemberCapOverridesCreateOrUpdateInput>;

// Output Schema
export interface MemberCapOverridesCreateOrUpdateOutput {
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
export const MemberCapOverridesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<MemberCapOverridesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or replaces the cap override for a single member subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param vmFamilyName - The name of the SharedLimitCap
 * @param memberSubscriptionId - The name of the MemberCapOverride
 */
export const MemberCapOverridesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MemberCapOverridesCreateOrUpdateInput,
    outputSchema: MemberCapOverridesCreateOrUpdateOutput,
  }));
// Input Schema
export interface MemberCapOverridesDeleteInput {
  subscriptionId: string;
  location: string;
  vmFamilyName: string;
  memberSubscriptionId: string;
}
export const MemberCapOverridesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    vmFamilyName: Schema.String.pipe(T.PathParam()),
    memberSubscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimitCaps/{vmFamilyName}/memberCapOverrides/{memberSubscriptionId}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<MemberCapOverridesDeleteInput>;

// Output Schema
export type MemberCapOverridesDeleteOutput = void;
export const MemberCapOverridesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<MemberCapOverridesDeleteOutput>;

// The operation
/**
 * Removes the per-member cap override for a member subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param vmFamilyName - The name of the SharedLimitCap
 * @param memberSubscriptionId - The name of the MemberCapOverride
 */
export const MemberCapOverridesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MemberCapOverridesDeleteInput,
    outputSchema: MemberCapOverridesDeleteOutput,
  }),
);
// Input Schema
export interface MemberCapOverridesGetInput {
  subscriptionId: string;
  location: string;
  vmFamilyName: string;
  memberSubscriptionId: string;
}
export const MemberCapOverridesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    vmFamilyName: Schema.String.pipe(T.PathParam()),
    memberSubscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimitCaps/{vmFamilyName}/memberCapOverrides/{memberSubscriptionId}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<MemberCapOverridesGetInput>;

// Output Schema
export interface MemberCapOverridesGetOutput {
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
export const MemberCapOverridesGetOutput =
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
  }) as unknown as Schema.Codec<MemberCapOverridesGetOutput>;

// The operation
/**
 * Gets the cap override configured for a single member subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param vmFamilyName - The name of the SharedLimitCap
 * @param memberSubscriptionId - The name of the MemberCapOverride
 */
export const MemberCapOverridesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MemberCapOverridesGetInput,
    outputSchema: MemberCapOverridesGetOutput,
  }),
);
// Input Schema
export interface MemberCapOverridesListByParentInput {
  subscriptionId: string;
  location: string;
  vmFamilyName: string;
}
export const MemberCapOverridesListByParentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    vmFamilyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimitCaps/{vmFamilyName}/memberCapOverrides",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<MemberCapOverridesListByParentInput>;

// Output Schema
export interface MemberCapOverridesListByParentOutput {
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
export const MemberCapOverridesListByParentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<MemberCapOverridesListByParentOutput>;

// The operation
/**
 * Lists all per-member cap overrides configured under a SharedLimitCap.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param vmFamilyName - The name of the SharedLimitCap
 */
export const MemberCapOverridesListByParent =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MemberCapOverridesListByParentInput,
    outputSchema: MemberCapOverridesListByParentOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ComputeLimit/operations",
    apiVersion: "2026-07-01",
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
 * List the operations for the provider
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface SharedLimitCapsCreateOrUpdateInput {
  subscriptionId: string;
  location: string;
  vmFamilyName: string;
  properties?: {
    defaultMemberCap?: number;
    isBoundedCap: boolean;
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
  };
}
export const SharedLimitCapsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    vmFamilyName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        defaultMemberCap: Schema.optional(Schema.Number),
        isBoundedCap: Schema.Boolean,
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimitCaps/{vmFamilyName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<SharedLimitCapsCreateOrUpdateInput>;

// Output Schema
export interface SharedLimitCapsCreateOrUpdateOutput {
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
export const SharedLimitCapsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SharedLimitCapsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or replaces the shared limit cap configuration for a VM family.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param vmFamilyName - The name of the SharedLimitCap
 */
export const SharedLimitCapsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SharedLimitCapsCreateOrUpdateInput,
    outputSchema: SharedLimitCapsCreateOrUpdateOutput,
  }));
// Input Schema
export interface SharedLimitCapsDeleteInput {
  subscriptionId: string;
  location: string;
  vmFamilyName: string;
}
export const SharedLimitCapsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    vmFamilyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimitCaps/{vmFamilyName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<SharedLimitCapsDeleteInput>;

// Output Schema
export type SharedLimitCapsDeleteOutput = void;
export const SharedLimitCapsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SharedLimitCapsDeleteOutput>;

// The operation
/**
 * Deletes the shared limit cap configuration for a VM family. The caller's subscription is treated as the host subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param vmFamilyName - The name of the SharedLimitCap
 */
export const SharedLimitCapsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SharedLimitCapsDeleteInput,
    outputSchema: SharedLimitCapsDeleteOutput,
  }),
);
// Input Schema
export interface SharedLimitCapsGetInput {
  subscriptionId: string;
  location: string;
  vmFamilyName: string;
}
export const SharedLimitCapsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    vmFamilyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimitCaps/{vmFamilyName}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<SharedLimitCapsGetInput>;

// Output Schema
export interface SharedLimitCapsGetOutput {
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
export const SharedLimitCapsGetOutput =
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
  }) as unknown as Schema.Codec<SharedLimitCapsGetOutput>;

// The operation
/**
 * Gets the shared limit cap configuration for a VM family, as visible to the caller's subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param vmFamilyName - The name of the SharedLimitCap
 */
export const SharedLimitCapsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SharedLimitCapsGetInput,
  outputSchema: SharedLimitCapsGetOutput,
}));
// Input Schema
export interface SharedLimitCapsListBySubscriptionLocationResourceInput {
  subscriptionId: string;
  location: string;
}
export const SharedLimitCapsListBySubscriptionLocationResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimitCaps",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<SharedLimitCapsListBySubscriptionLocationResourceInput>;

// Output Schema
export interface SharedLimitCapsListBySubscriptionLocationResourceOutput {
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
export const SharedLimitCapsListBySubscriptionLocationResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SharedLimitCapsListBySubscriptionLocationResourceOutput>;

// The operation
/**
 * Lists all shared limit cap configurations visible to the caller's subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const SharedLimitCapsListBySubscriptionLocationResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SharedLimitCapsListBySubscriptionLocationResourceInput,
    outputSchema: SharedLimitCapsListBySubscriptionLocationResourceOutput,
  }));
// Input Schema
export interface SharedLimitCapsSetMemberCapOverridesInput {
  subscriptionId: string;
  location: string;
  vmFamilyName: string;
  memberCapOverrides: { subscriptionId: string; cap: number }[];
}
export const SharedLimitCapsSetMemberCapOverridesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    vmFamilyName: Schema.String.pipe(T.PathParam()),
    memberCapOverrides: Schema.Array(
      Schema.Struct({
        subscriptionId: Schema.String,
        cap: Schema.Number,
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimitCaps/{vmFamilyName}/setMemberCapOverrides",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<SharedLimitCapsSetMemberCapOverridesInput>;

// Output Schema
export interface SharedLimitCapsSetMemberCapOverridesOutput {
  memberCapOverrides: { subscriptionId: string; cap: number }[];
}
export const SharedLimitCapsSetMemberCapOverridesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    memberCapOverrides: Schema.Array(
      Schema.Struct({
        subscriptionId: Schema.String,
        cap: Schema.Number,
      }),
    ),
  }) as unknown as Schema.Codec<SharedLimitCapsSetMemberCapOverridesOutput>;

// The operation
/**
 * Replaces the full set of per-member cap overrides for this shared limit
 * cap. The supplied array becomes the new complete set of overrides;
 * supplying an empty array clears all existing overrides.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param vmFamilyName - The name of the SharedLimitCap
 */
export const SharedLimitCapsSetMemberCapOverrides =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SharedLimitCapsSetMemberCapOverridesInput,
    outputSchema: SharedLimitCapsSetMemberCapOverridesOutput,
  }));
// Input Schema
export interface SharedLimitsCreateInput {
  subscriptionId: string;
  location: string;
  name: string;
  properties?: {
    resourceName?: { value: string; localizedValue?: string };
    limit?: number;
    unit?: string;
    provisioningState?: "Succeeded" | "Failed" | "Canceled";
  };
}
export const SharedLimitsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        resourceName: Schema.optional(
          Schema.Struct({
            value: Schema.String,
            localizedValue: Schema.optional(Schema.String),
          }),
        ),
        limit: Schema.optional(Schema.Number),
        unit: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals(["Succeeded", "Failed", "Canceled"]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimits/{name}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<SharedLimitsCreateInput>;

// Output Schema
export interface SharedLimitsCreateOutput {
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
export const SharedLimitsCreateOutput =
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
  }) as unknown as Schema.Codec<SharedLimitsCreateOutput>;

// The operation
/**
 * Enables sharing of a compute limit by the host subscription with its guest subscriptions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param name - The name of the SharedLimit
 */
export const SharedLimitsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SharedLimitsCreateInput,
  outputSchema: SharedLimitsCreateOutput,
}));
// Input Schema
export interface SharedLimitsDeleteInput {
  subscriptionId: string;
  location: string;
  name: string;
}
export const SharedLimitsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimits/{name}",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<SharedLimitsDeleteInput>;

// Output Schema
export type SharedLimitsDeleteOutput = void;
export const SharedLimitsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SharedLimitsDeleteOutput>;

// The operation
/**
 * Disables sharing of a compute limit by the host subscription with its guest subscriptions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param name - The name of the SharedLimit
 */
export const SharedLimitsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SharedLimitsDeleteInput,
  outputSchema: SharedLimitsDeleteOutput,
}));
// Input Schema
export interface SharedLimitsGetInput {
  subscriptionId: string;
  location: string;
  name: string;
}
export const SharedLimitsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimits/{name}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<SharedLimitsGetInput>;

// Output Schema
export interface SharedLimitsGetOutput {
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
export const SharedLimitsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SharedLimitsGetOutput>;

// The operation
/**
 * Gets the properties of a compute limit shared by the host subscription with its guest subscriptions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param name - The name of the SharedLimit
 */
export const SharedLimitsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SharedLimitsGetInput,
  outputSchema: SharedLimitsGetOutput,
}));
// Input Schema
export interface SharedLimitsListBySubscriptionLocationResourceInput {
  subscriptionId: string;
  location: string;
}
export const SharedLimitsListBySubscriptionLocationResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimits",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<SharedLimitsListBySubscriptionLocationResourceInput>;

// Output Schema
export interface SharedLimitsListBySubscriptionLocationResourceOutput {
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
export const SharedLimitsListBySubscriptionLocationResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<SharedLimitsListBySubscriptionLocationResourceOutput>;

// The operation
/**
 * Lists all compute limits shared by the host subscription with its guest subscriptions.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 */
export const SharedLimitsListBySubscriptionLocationResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SharedLimitsListBySubscriptionLocationResourceInput,
    outputSchema: SharedLimitsListBySubscriptionLocationResourceOutput,
  }));
// Input Schema
export interface VmFamiliesGetInput {
  subscriptionId: string;
  location: string;
  vmFamilyName: string;
}
export const VmFamiliesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  vmFamilyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/vmFamilies/{vmFamilyName}",
    apiVersion: "2026-07-01",
  }),
) as unknown as Schema.Codec<VmFamiliesGetInput>;

// Output Schema
export interface VmFamiliesGetOutput {
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
export const VmFamiliesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VmFamiliesGetOutput>;

// The operation
/**
 * Gets the properties of a VM family.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param vmFamilyName - The name of the VmFamily
 */
export const VmFamiliesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VmFamiliesGetInput,
  outputSchema: VmFamiliesGetOutput,
}));
// Input Schema
export interface VmFamiliesListBySubscriptionLocationResourceInput {
  subscriptionId: string;
  location: string;
  $filter?: string;
}
export const VmFamiliesListBySubscriptionLocationResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/vmFamilies",
      apiVersion: "2026-07-01",
    }),
  ) as unknown as Schema.Codec<VmFamiliesListBySubscriptionLocationResourceInput>;

// Output Schema
export interface VmFamiliesListBySubscriptionLocationResourceOutput {
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
export const VmFamiliesListBySubscriptionLocationResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<VmFamiliesListBySubscriptionLocationResourceOutput>;

// The operation
/**
 * Lists all VM families for the subscription at the specified location.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param $filter - The filter to apply to the list operation. Filter can be applied to the 'category' property. Example: $filter=category eq 'generalPurposeCategory'.
 */
export const VmFamiliesListBySubscriptionLocationResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VmFamiliesListBySubscriptionLocationResourceInput,
    outputSchema: VmFamiliesListBySubscriptionLocationResourceOutput,
  }));
