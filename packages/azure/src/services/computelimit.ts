/**
 * Azure Computelimit API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const FeaturesDisableInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  featureName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/features/{featureName}/disable",
  }),
);
export type FeaturesDisableInput = typeof FeaturesDisableInput.Type;

// Output Schema
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
});
export type FeaturesDisableOutput = typeof FeaturesDisableOutput.Type;

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
export const FeaturesEnableInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  featureName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/features/{featureName}/enable",
  }),
);
export type FeaturesEnableInput = typeof FeaturesEnableInput.Type;

// Output Schema
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
});
export type FeaturesEnableOutput = typeof FeaturesEnableOutput.Type;

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
export const FeaturesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  featureName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/features/{featureName}",
  }),
);
export type FeaturesGetInput = typeof FeaturesGetInput.Type;

// Output Schema
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
});
export type FeaturesGetOutput = typeof FeaturesGetOutput.Type;

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
export const FeaturesListBySubscriptionLocationResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/features",
    }),
  );
export type FeaturesListBySubscriptionLocationResourceInput =
  typeof FeaturesListBySubscriptionLocationResourceInput.Type;

// Output Schema
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
  });
export type FeaturesListBySubscriptionLocationResourceOutput =
  typeof FeaturesListBySubscriptionLocationResourceOutput.Type;

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
export const GuestSubscriptionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    guestSubscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/guestSubscriptions/{guestSubscriptionId}",
    }),
  );
export type GuestSubscriptionsCreateInput =
  typeof GuestSubscriptionsCreateInput.Type;

// Output Schema
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
  });
export type GuestSubscriptionsCreateOutput =
  typeof GuestSubscriptionsCreateOutput.Type;

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
export const GuestSubscriptionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    guestSubscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/guestSubscriptions/{guestSubscriptionId}",
    }),
  );
export type GuestSubscriptionsDeleteInput =
  typeof GuestSubscriptionsDeleteInput.Type;

// Output Schema
export const GuestSubscriptionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GuestSubscriptionsDeleteOutput =
  typeof GuestSubscriptionsDeleteOutput.Type;

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
export const GuestSubscriptionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    guestSubscriptionId: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/guestSubscriptions/{guestSubscriptionId}",
    }),
  );
export type GuestSubscriptionsGetInput = typeof GuestSubscriptionsGetInput.Type;

// Output Schema
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
  });
export type GuestSubscriptionsGetOutput =
  typeof GuestSubscriptionsGetOutput.Type;

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
export const GuestSubscriptionsListBySubscriptionLocationResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/guestSubscriptions",
    }),
  );
export type GuestSubscriptionsListBySubscriptionLocationResourceInput =
  typeof GuestSubscriptionsListBySubscriptionLocationResourceInput.Type;

// Output Schema
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
  });
export type GuestSubscriptionsListBySubscriptionLocationResourceOutput =
  typeof GuestSubscriptionsListBySubscriptionLocationResourceOutput.Type;

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
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ComputeLimit/operations",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
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
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

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
export const SharedLimitsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimits/{name}",
    }),
  );
export type SharedLimitsCreateInput = typeof SharedLimitsCreateInput.Type;

// Output Schema
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
  });
export type SharedLimitsCreateOutput = typeof SharedLimitsCreateOutput.Type;

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
export const SharedLimitsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimits/{name}",
    }),
  );
export type SharedLimitsDeleteInput = typeof SharedLimitsDeleteInput.Type;

// Output Schema
export const SharedLimitsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SharedLimitsDeleteOutput = typeof SharedLimitsDeleteOutput.Type;

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
export const SharedLimitsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimits/{name}",
  }),
);
export type SharedLimitsGetInput = typeof SharedLimitsGetInput.Type;

// Output Schema
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
});
export type SharedLimitsGetOutput = typeof SharedLimitsGetOutput.Type;

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
export const SharedLimitsListBySubscriptionLocationResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/sharedLimits",
    }),
  );
export type SharedLimitsListBySubscriptionLocationResourceInput =
  typeof SharedLimitsListBySubscriptionLocationResourceInput.Type;

// Output Schema
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
  });
export type SharedLimitsListBySubscriptionLocationResourceOutput =
  typeof SharedLimitsListBySubscriptionLocationResourceOutput.Type;

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
export const VmFamiliesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  vmFamilyName: Schema.String.pipe(T.PathParam()),
  "api-version": Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/vmFamilies/{vmFamilyName}",
  }),
);
export type VmFamiliesGetInput = typeof VmFamiliesGetInput.Type;

// Output Schema
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
});
export type VmFamiliesGetOutput = typeof VmFamiliesGetOutput.Type;

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
export const VmFamiliesListBySubscriptionLocationResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    "api-version": Schema.String,
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ComputeLimit/locations/{location}/vmFamilies",
    }),
  );
export type VmFamiliesListBySubscriptionLocationResourceInput =
  typeof VmFamiliesListBySubscriptionLocationResourceInput.Type;

// Output Schema
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
  });
export type VmFamiliesListBySubscriptionLocationResourceOutput =
  typeof VmFamiliesListBySubscriptionLocationResourceOutput.Type;

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
