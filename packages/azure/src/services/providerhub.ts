/**
 * Azure Providerhub API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AuthorizedApplicationsCreateOrUpdateInput {
  subscriptionId: string;
  providerNamespace: string;
  applicationId: string;
  properties?: {
    providerAuthorization?: {
      roleDefinitionId?: string;
      managedByRoleDefinitionId?: string;
    };
    dataAuthorizations?: {
      role: "ServiceOwner" | "LimitedOwner";
      resourceTypes?: string[];
    }[];
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "MovingResources"
      | "TransientFailure"
      | "RolloutInProgress";
  };
}
export const AuthorizedApplicationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    applicationId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        providerAuthorization: Schema.optional(
          Schema.Struct({
            roleDefinitionId: Schema.optional(Schema.String),
            managedByRoleDefinitionId: Schema.optional(Schema.String),
          }),
        ),
        dataAuthorizations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              role: Schema.Literals(["ServiceOwner", "LimitedOwner"]),
              resourceTypes: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "MovingResources",
            "TransientFailure",
            "RolloutInProgress",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/authorizedApplications/{applicationId}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<AuthorizedApplicationsCreateOrUpdateInput>;

// Output Schema
export interface AuthorizedApplicationsCreateOrUpdateOutput {
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
export const AuthorizedApplicationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AuthorizedApplicationsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the authorized application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param applicationId - The application ID.
 */
export const AuthorizedApplicationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizedApplicationsCreateOrUpdateInput,
    outputSchema: AuthorizedApplicationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AuthorizedApplicationsDeleteInput {
  subscriptionId: string;
  providerNamespace: string;
  applicationId: string;
}
export const AuthorizedApplicationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    applicationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/authorizedApplications/{applicationId}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<AuthorizedApplicationsDeleteInput>;

// Output Schema
export type AuthorizedApplicationsDeleteOutput = void;
export const AuthorizedApplicationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AuthorizedApplicationsDeleteOutput>;

// The operation
/**
 * Deletes an authorized application.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param applicationId - The application ID.
 */
export const AuthorizedApplicationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthorizedApplicationsDeleteInput,
    outputSchema: AuthorizedApplicationsDeleteOutput,
  }));
// Input Schema
export interface AuthorizedApplicationsGetInput {
  subscriptionId: string;
  providerNamespace: string;
  applicationId: string;
}
export const AuthorizedApplicationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    applicationId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/authorizedApplications/{applicationId}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<AuthorizedApplicationsGetInput>;

// Output Schema
export interface AuthorizedApplicationsGetOutput {
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
export const AuthorizedApplicationsGetOutput =
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
  }) as unknown as Schema.Codec<AuthorizedApplicationsGetOutput>;

// The operation
/**
 * Gets the authorized application details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param applicationId - The application ID.
 */
export const AuthorizedApplicationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AuthorizedApplicationsGetInput,
    outputSchema: AuthorizedApplicationsGetOutput,
  }),
);
// Input Schema
export interface AuthorizedApplicationsListInput {
  subscriptionId: string;
  providerNamespace: string;
}
export const AuthorizedApplicationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/authorizedApplications",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<AuthorizedApplicationsListInput>;

// Output Schema
export interface AuthorizedApplicationsListOutput {
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
export const AuthorizedApplicationsListOutput =
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
  }) as unknown as Schema.Codec<AuthorizedApplicationsListOutput>;

// The operation
/**
 * Gets the list of the authorized applications in the provider namespace.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const AuthorizedApplicationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AuthorizedApplicationsListInput,
    outputSchema: AuthorizedApplicationsListOutput,
  }),
);
// Input Schema
export interface CheckinManifestInput {
  subscriptionId: string;
  providerNamespace: string;
  environment: string;
  baselineArmManifestLocation: string;
}
export const CheckinManifestInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  providerNamespace: Schema.String.pipe(T.PathParam()),
  environment: Schema.String,
  baselineArmManifestLocation: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/checkinManifest",
    apiVersion: "2024-09-01",
  }),
) as unknown as Schema.Codec<CheckinManifestInput>;

// Output Schema
export interface CheckinManifestOutput {
  isCheckedIn: boolean;
  statusMessage: string;
  pullRequest?: string;
  commitId?: string;
}
export const CheckinManifestOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isCheckedIn: Schema.Boolean,
  statusMessage: Schema.String,
  pullRequest: Schema.optional(Schema.String),
  commitId: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<CheckinManifestOutput>;

// The operation
/**
 * Checkin the manifest.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const CheckinManifest = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CheckinManifestInput,
  outputSchema: CheckinManifestOutput,
}));
// Input Schema
export interface CustomRolloutsCreateOrUpdateInput {
  subscriptionId: string;
  providerNamespace: string;
  rolloutName: string;
  properties: {
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "MovingResources"
      | "TransientFailure"
      | "RolloutInProgress";
    specification: {
      autoProvisionConfig?: { storage?: boolean; resourceGraph?: boolean };
      canary?: { regions?: string[] };
      releaseScopes?: string[];
      refreshSubscriptionRegistration?: boolean;
      skipReleaseScopeValidation?: boolean;
      providerRegistration?: {
        id?: string;
        name?: string;
        type?: string;
        systemData?: {
          createdBy?: string;
          createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
          createdAt?: string;
          lastModifiedBy?: string;
          lastModifiedByType?:
            | "User"
            | "Application"
            | "ManagedIdentity"
            | "Key";
          lastModifiedAt?: string;
        };
      };
      resourceTypeRegistrations?: {
        id?: string;
        name?: string;
        type?: string;
        systemData?: {
          createdBy?: string;
          createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
          createdAt?: string;
          lastModifiedBy?: string;
          lastModifiedByType?:
            | "User"
            | "Application"
            | "ManagedIdentity"
            | "Key";
          lastModifiedAt?: string;
        };
      }[];
    };
    status?: {
      completedRegions?: string[];
      failedOrSkippedRegions?: Record<
        string,
        {
          code?: string;
          target?: string;
          message?: string;
          details?: unknown[];
          additionalInfo?: { type: string; info?: unknown }[];
        }
      >;
      manifestCheckinStatus?: {
        isCheckedIn: boolean;
        statusMessage: string;
        pullRequest?: string;
        commitId?: string;
      };
    };
  };
}
export const CustomRolloutsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "NotSpecified",
          "Accepted",
          "Running",
          "Creating",
          "Created",
          "Deleting",
          "Deleted",
          "Canceled",
          "Failed",
          "Succeeded",
          "MovingResources",
          "TransientFailure",
          "RolloutInProgress",
        ]),
      ),
      specification: Schema.Struct({
        autoProvisionConfig: Schema.optional(
          Schema.Struct({
            storage: Schema.optional(Schema.Boolean),
            resourceGraph: Schema.optional(Schema.Boolean),
          }),
        ),
        canary: Schema.optional(
          Schema.Struct({
            regions: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        releaseScopes: Schema.optional(Schema.Array(Schema.String)),
        refreshSubscriptionRegistration: Schema.optional(Schema.Boolean),
        skipReleaseScopeValidation: Schema.optional(Schema.Boolean),
        providerRegistration: Schema.optional(
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
        resourceTypeRegistrations: Schema.optional(
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
      }),
      status: Schema.optional(
        Schema.Struct({
          completedRegions: Schema.optional(Schema.Array(Schema.String)),
          failedOrSkippedRegions: Schema.optional(
            Schema.Record(
              Schema.String,
              Schema.Struct({
                code: Schema.optional(Schema.String),
                target: Schema.optional(Schema.String),
                message: Schema.optional(Schema.String),
                details: Schema.optional(Schema.Array(Schema.Unknown)),
                additionalInfo: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      type: Schema.String,
                      info: Schema.optional(Schema.Unknown),
                    }),
                  ),
                ),
              }),
            ),
          ),
          manifestCheckinStatus: Schema.optional(
            Schema.Struct({
              isCheckedIn: Schema.Boolean,
              statusMessage: Schema.String,
              pullRequest: Schema.optional(Schema.String),
              commitId: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/customRollouts/{rolloutName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<CustomRolloutsCreateOrUpdateInput>;

// Output Schema
export interface CustomRolloutsCreateOrUpdateOutput {
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
export const CustomRolloutsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<CustomRolloutsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the rollout details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const CustomRolloutsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomRolloutsCreateOrUpdateInput,
    outputSchema: CustomRolloutsCreateOrUpdateOutput,
  }));
// Input Schema
export interface CustomRolloutsDeleteInput {
  subscriptionId: string;
  providerNamespace: string;
  rolloutName: string;
}
export const CustomRolloutsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/customRollouts/{rolloutName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<CustomRolloutsDeleteInput>;

// Output Schema
export type CustomRolloutsDeleteOutput = void;
export const CustomRolloutsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomRolloutsDeleteOutput>;

// The operation
/**
 * Deletes the custom rollout resource. Custom rollout must be in terminal state.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const CustomRolloutsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomRolloutsDeleteInput,
    outputSchema: CustomRolloutsDeleteOutput,
  }),
);
// Input Schema
export interface CustomRolloutsGetInput {
  subscriptionId: string;
  providerNamespace: string;
  rolloutName: string;
}
export const CustomRolloutsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/customRollouts/{rolloutName}",
    apiVersion: "2024-09-01",
  }),
) as unknown as Schema.Codec<CustomRolloutsGetInput>;

// Output Schema
export interface CustomRolloutsGetOutput {
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
export const CustomRolloutsGetOutput =
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
  }) as unknown as Schema.Codec<CustomRolloutsGetOutput>;

// The operation
/**
 * Gets the custom rollout details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const CustomRolloutsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomRolloutsGetInput,
  outputSchema: CustomRolloutsGetOutput,
}));
// Input Schema
export interface CustomRolloutsListByProviderRegistrationInput {
  subscriptionId: string;
  providerNamespace: string;
}
export const CustomRolloutsListByProviderRegistrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/customRollouts",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<CustomRolloutsListByProviderRegistrationInput>;

// Output Schema
export interface CustomRolloutsListByProviderRegistrationOutput {
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
export const CustomRolloutsListByProviderRegistrationOutput =
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
  }) as unknown as Schema.Codec<CustomRolloutsListByProviderRegistrationOutput>;

// The operation
/**
 * Gets the list of the custom rollouts for the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const CustomRolloutsListByProviderRegistration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomRolloutsListByProviderRegistrationInput,
    outputSchema: CustomRolloutsListByProviderRegistrationOutput,
  }));
// Input Schema
export interface CustomRolloutsStopInput {
  subscriptionId: string;
  providerNamespace: string;
  rolloutName: string;
}
export const CustomRolloutsStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/customRollouts/{rolloutName}/stop",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<CustomRolloutsStopInput>;

// Output Schema
export type CustomRolloutsStopOutput = void;
export const CustomRolloutsStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomRolloutsStopOutput>;

// The operation
/**
 * Stops or cancels the custom rollout, if in progress.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const CustomRolloutsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomRolloutsStopInput,
  outputSchema: CustomRolloutsStopOutput,
}));
// Input Schema
export interface DefaultRolloutsCreateOrUpdateInput {
  subscriptionId: string;
  providerNamespace: string;
  rolloutName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "MovingResources"
      | "TransientFailure"
      | "RolloutInProgress";
    specification?: {
      expeditedRollout?: { enabled?: boolean };
      canary?: { skipRegions?: string[]; regions?: string[] };
      lowTraffic?: { regions?: string[] };
      mediumTraffic?: { regions?: string[] };
      highTraffic?: { regions?: string[] };
      restOfTheWorldGroupOne?: { regions?: string[] };
      restOfTheWorldGroupTwo?: { regions?: string[] };
      providerRegistration?: {
        id?: string;
        name?: string;
        type?: string;
        systemData?: {
          createdBy?: string;
          createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
          createdAt?: string;
          lastModifiedBy?: string;
          lastModifiedByType?:
            | "User"
            | "Application"
            | "ManagedIdentity"
            | "Key";
          lastModifiedAt?: string;
        };
      };
      resourceTypeRegistrations?: {
        id?: string;
        name?: string;
        type?: string;
        systemData?: {
          createdBy?: string;
          createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
          createdAt?: string;
          lastModifiedBy?: string;
          lastModifiedByType?:
            | "User"
            | "Application"
            | "ManagedIdentity"
            | "Key";
          lastModifiedAt?: string;
        };
      }[];
      autoProvisionConfig?: { storage?: boolean; resourceGraph?: boolean };
    };
    status?: {
      completedRegions?: string[];
      failedOrSkippedRegions?: Record<
        string,
        {
          code?: string;
          target?: string;
          message?: string;
          details?: unknown[];
          additionalInfo?: { type: string; info?: unknown }[];
        }
      >;
    };
  };
}
export const DefaultRolloutsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "MovingResources",
            "TransientFailure",
            "RolloutInProgress",
          ]),
        ),
        specification: Schema.optional(
          Schema.Struct({
            expeditedRollout: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
              }),
            ),
            canary: Schema.optional(
              Schema.Struct({
                skipRegions: Schema.optional(Schema.Array(Schema.String)),
                regions: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            lowTraffic: Schema.optional(
              Schema.Struct({
                regions: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            mediumTraffic: Schema.optional(
              Schema.Struct({
                regions: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            highTraffic: Schema.optional(
              Schema.Struct({
                regions: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            restOfTheWorldGroupOne: Schema.optional(
              Schema.Struct({
                regions: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            restOfTheWorldGroupTwo: Schema.optional(
              Schema.Struct({
                regions: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            providerRegistration: Schema.optional(
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
            resourceTypeRegistrations: Schema.optional(
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
            autoProvisionConfig: Schema.optional(
              Schema.Struct({
                storage: Schema.optional(Schema.Boolean),
                resourceGraph: Schema.optional(Schema.Boolean),
              }),
            ),
          }),
        ),
        status: Schema.optional(
          Schema.Struct({
            completedRegions: Schema.optional(Schema.Array(Schema.String)),
            failedOrSkippedRegions: Schema.optional(
              Schema.Record(
                Schema.String,
                Schema.Struct({
                  code: Schema.optional(Schema.String),
                  target: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                  details: Schema.optional(Schema.Array(Schema.Unknown)),
                  additionalInfo: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        type: Schema.String,
                        info: Schema.optional(Schema.Unknown),
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/defaultRollouts/{rolloutName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<DefaultRolloutsCreateOrUpdateInput>;

// Output Schema
export interface DefaultRolloutsCreateOrUpdateOutput {
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
export const DefaultRolloutsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<DefaultRolloutsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the rollout details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const DefaultRolloutsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DefaultRolloutsCreateOrUpdateInput,
    outputSchema: DefaultRolloutsCreateOrUpdateOutput,
  }));
// Input Schema
export interface DefaultRolloutsDeleteInput {
  subscriptionId: string;
  providerNamespace: string;
  rolloutName: string;
}
export const DefaultRolloutsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/defaultRollouts/{rolloutName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<DefaultRolloutsDeleteInput>;

// Output Schema
export type DefaultRolloutsDeleteOutput = void;
export const DefaultRolloutsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DefaultRolloutsDeleteOutput>;

// The operation
/**
 * Deletes the rollout resource. Rollout must be in terminal state.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const DefaultRolloutsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DefaultRolloutsDeleteInput,
    outputSchema: DefaultRolloutsDeleteOutput,
  }),
);
// Input Schema
export interface DefaultRolloutsGetInput {
  subscriptionId: string;
  providerNamespace: string;
  rolloutName: string;
}
export const DefaultRolloutsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/defaultRollouts/{rolloutName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<DefaultRolloutsGetInput>;

// Output Schema
export interface DefaultRolloutsGetOutput {
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
export const DefaultRolloutsGetOutput =
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
  }) as unknown as Schema.Codec<DefaultRolloutsGetOutput>;

// The operation
/**
 * Gets the default rollout details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const DefaultRolloutsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DefaultRolloutsGetInput,
  outputSchema: DefaultRolloutsGetOutput,
}));
// Input Schema
export interface DefaultRolloutsListByProviderRegistrationInput {
  subscriptionId: string;
  providerNamespace: string;
}
export const DefaultRolloutsListByProviderRegistrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/defaultRollouts",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<DefaultRolloutsListByProviderRegistrationInput>;

// Output Schema
export interface DefaultRolloutsListByProviderRegistrationOutput {
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
export const DefaultRolloutsListByProviderRegistrationOutput =
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
  }) as unknown as Schema.Codec<DefaultRolloutsListByProviderRegistrationOutput>;

// The operation
/**
 * Gets the list of the rollouts for the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const DefaultRolloutsListByProviderRegistration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DefaultRolloutsListByProviderRegistrationInput,
    outputSchema: DefaultRolloutsListByProviderRegistrationOutput,
  }));
// Input Schema
export interface DefaultRolloutsStopInput {
  subscriptionId: string;
  providerNamespace: string;
  rolloutName: string;
}
export const DefaultRolloutsStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    rolloutName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/defaultRollouts/{rolloutName}/stop",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<DefaultRolloutsStopInput>;

// Output Schema
export type DefaultRolloutsStopOutput = void;
export const DefaultRolloutsStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<DefaultRolloutsStopOutput>;

// The operation
/**
 * Stops or cancels the rollout, if in progress.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param rolloutName - The rollout name.
 */
export const DefaultRolloutsStop = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DefaultRolloutsStopInput,
  outputSchema: DefaultRolloutsStopOutput,
}));
// Input Schema
export interface GenerateManifestInput {
  subscriptionId: string;
  providerNamespace: string;
}
export const GenerateManifestInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  providerNamespace: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/generateManifest",
    apiVersion: "2024-09-01",
  }),
) as unknown as Schema.Codec<GenerateManifestInput>;

// Output Schema
export interface GenerateManifestOutput {
  providerAuthentication?: { allowedAudiences: string[] };
  providerAuthorizations?: {
    applicationId?: string;
    roleDefinitionId?: string;
    managedByRoleDefinitionId?: string;
    managedByAuthorization?: {
      additionalAuthorizations?: {
        applicationId?: string;
        roleDefinitionId?: string;
      }[];
      managedByResourceRoleDefinitionId?: string;
      allowManagedByInheritance?: boolean;
    };
    allowedThirdPartyExtensions?: { name?: string }[];
    groupingTag?: string;
  }[];
  namespace?: string;
  services?: { serviceName?: string; status?: "Active" | "Inactive" }[];
  serviceName?: string;
  providerVersion?: string;
  providerType?:
    | "NotSpecified"
    | "Internal"
    | "External"
    | "Hidden"
    | "RegistrationFree"
    | "LegacyRegistrationRequired"
    | "TenantOnly"
    | "AuthorizationFree";
  requiredFeatures?: string[];
  featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
  requestHeaderOptions?: {
    optInHeaders?:
      | "NotSpecified"
      | "SignedUserToken"
      | "ClientGroupMembership"
      | "SignedAuxiliaryTokens"
      | "UnboundedClientGroupMembership"
      | "PrivateLinkId"
      | "PrivateLinkResourceId"
      | "ManagementGroupAncestorsEncoded"
      | "PrivateLinkVnetTrafficTag"
      | "ResourceGroupLocation"
      | "ClientPrincipalNameEncoded"
      | "MSIResourceIdEncoded";
    optOutHeaders?: "NotSpecified" | "SystemDataCreatedByLastModifiedBy";
  };
  resourceTypes?: {
    name?: string;
    routingType?:
      | "Default"
      | "ProxyOnly"
      | "HostBased"
      | "Extension"
      | "Tenant"
      | "Fanout"
      | "LocationBased"
      | "Failover"
      | "CascadeExtension"
      | "ChildFanout"
      | "CascadeAuthorizedExtension"
      | "BypassEndpointSelectionOptimization"
      | "LocationMapping"
      | "ServiceFanout";
    additionalOptions?:
      | "ProtectedAsyncOperationPolling"
      | "ProtectedAsyncOperationPollingAuditOnly";
    crossTenantTokenValidation?:
      | "EnsureSecureValidation"
      | "PassthroughInsecureToken";
    resourceValidation?: "NotSpecified" | "ReservedWords" | "ProfaneWords";
    allowedUnauthorizedActions?: string[];
    allowedUnauthorizedActionsExtensions?: {
      action?: string;
      intent?:
        | "NOT_SPECIFIED"
        | "LOW_PRIVILEGE"
        | "DEFERRED_ACCESS_CHECK"
        | "RP_CONTRACT";
    }[];
    authorizationActionMappings?: { original?: string; desired?: string }[];
    linkedAccessChecks?: {
      actionName?: string;
      linkedProperty?: string;
      linkedAction?: string;
      linkedActionVerb?: string;
      linkedType?: string;
    }[];
    defaultApiVersion?: string;
    loggingRules?: {
      action: string;
      direction: "None" | "Request" | "Response";
      detailLevel: "None" | "Body";
      hiddenPropertyPaths?: {
        hiddenPathsOnRequest?: string[];
        hiddenPathsOnResponse?: string[];
      };
    }[];
    throttlingRules?: {
      action: string;
      metrics: {
        type: "NotSpecified" | "NumberOfRequests" | "NumberOfResources";
        limit: number;
        interval?: string;
      }[];
      requiredFeatures?: string[];
      applicationId?: string[];
    }[];
    endpoints?: {
      enabled?: boolean;
      apiVersions?: string[];
      endpointUri?: string;
      locations?: string[];
      requiredFeatures?: string[];
      featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
      timeout?: string;
      endpointType?:
        | "NotSpecified"
        | "Canary"
        | "Production"
        | "TestInProduction";
      skuLink?: string;
    }[];
    marketplaceType?: "NotSpecified" | "AddOn" | "Bypass" | "Store";
    identityManagement?: {
      type?:
        | "NotSpecified"
        | "SystemAssigned"
        | "UserAssigned"
        | "Actor"
        | "DelegatedResourceIdentity";
    };
    metadata?: unknown;
    requiredFeatures?: string[];
    featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
    subscriptionStateRules?: {
      state?:
        | "NotDefined"
        | "Enabled"
        | "Warned"
        | "PastDue"
        | "Disabled"
        | "Deleted";
      allowedActions?: string[];
    }[];
    serviceTreeInfos?: {
      serviceId?: string;
      componentId?: string;
      readiness?:
        | "ClosingDown"
        | "Deprecated"
        | "GA"
        | "InDevelopment"
        | "InternalOnly"
        | "PrivatePreview"
        | "PublicPreview"
        | "RemovedFromARM"
        | "Retired";
    }[];
    requestHeaderOptions?: {
      optInHeaders?:
        | "NotSpecified"
        | "SignedUserToken"
        | "ClientGroupMembership"
        | "SignedAuxiliaryTokens"
        | "UnboundedClientGroupMembership"
        | "PrivateLinkId"
        | "PrivateLinkResourceId"
        | "ManagementGroupAncestorsEncoded"
        | "PrivateLinkVnetTrafficTag"
        | "ResourceGroupLocation"
        | "ClientPrincipalNameEncoded"
        | "MSIResourceIdEncoded";
      optOutHeaders?: "NotSpecified" | "SystemDataCreatedByLastModifiedBy";
    };
    skuLink?: string;
    disallowedActionVerbs?: string[];
    templateDeploymentPolicy?: {
      capabilities: "Default" | "Preflight";
      preflightOptions:
        | "None"
        | "ValidationRequests"
        | "DeploymentRequests"
        | "TestOnly"
        | "RegisteredOnly";
      preflightNotifications?: "None" | "UnregisteredSubscriptions";
    };
    extendedLocations?: {
      type?: "NotSpecified" | "CustomLocation" | "EdgeZone" | "ArcZone";
      supportedPolicy?: "NotSpecified" | "All";
    }[];
    linkedOperationRules?: {
      linkedOperation:
        | "None"
        | "CrossResourceGroupResourceMove"
        | "CrossSubscriptionResourceMove";
      linkedAction: "NotSpecified" | "Blocked" | "Validate" | "Enabled";
      dependsOnTypes?: string[];
    }[];
    resourceDeletionPolicy?: "NotSpecified" | "Cascade" | "Force";
    quotaRule?: {
      quotaPolicy?: "Default" | "None" | "Restricted";
      locationRules?: {
        policy?: "Default" | "None" | "Restricted";
        quotaId?: string;
        location?: string;
      }[];
      requiredFeatures?: string[];
    };
    notifications?: {
      notificationType?: "Unspecified" | "SubscriptionNotification";
      skipNotifications?: "Unspecified" | "Enabled" | "Disabled";
    }[];
    linkedNotificationRules?: {
      actions?: string[];
      actionsOnFailedOperation?: string[];
      fastPathActions?: string[];
      fastPathActionsOnFailedOperation?: string[];
      linkedNotificationTimeout?: string;
    }[];
    resourceProviderAuthorizationRules?: {
      asyncOperationPollingRules?: {
        authorizationActions?: string[];
        additionalOptions?:
          | "ProtectedAsyncOperationPolling"
          | "ProtectedAsyncOperationPollingAuditOnly";
      };
    };
  }[];
  management?: {
    schemaOwners?: string[];
    manifestOwners?: string[];
    authorizationOwners?: string[];
    incidentRoutingService?: string;
    incidentRoutingTeam?: string;
    incidentContactEmail?: string;
    serviceTreeInfos?: {
      serviceId?: string;
      componentId?: string;
      readiness?:
        | "ClosingDown"
        | "Deprecated"
        | "GA"
        | "InDevelopment"
        | "InternalOnly"
        | "PrivatePreview"
        | "PublicPreview"
        | "RemovedFromARM"
        | "Retired";
    }[];
    resourceAccessPolicy?:
      | "NotSpecified"
      | "AcisReadAllowed"
      | "AcisActionAllowed";
    resourceAccessRoles?: {
      allowedGroupClaims?: string[];
      actions?: string[];
    }[];
    expeditedRolloutSubmitters?: string[];
    errorResponseMessageOptions?: {
      serverFailureResponseMessageType?: "NotSpecified" | "OutageReporting";
    };
    expeditedRolloutMetadata?: {
      enabled?: boolean;
      expeditedRolloutIntent?: "NotSpecified" | "Hotfix";
    };
    canaryManifestOwners?: string[];
    pcCode?: string;
    profitCenterProgramId?: string;
  };
  capabilities?: {
    quotaId: string;
    effect: "NotSpecified" | "Allow" | "Disallow";
    requiredFeatures?: string[];
  }[];
  crossTenantTokenValidation?:
    | "EnsureSecureValidation"
    | "PassthroughInsecureToken";
  metadata?: unknown;
  globalNotificationEndpoints?: {
    enabled?: boolean;
    apiVersions?: string[];
    endpointUri?: string;
    locations?: string[];
    requiredFeatures?: string[];
    featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
    timeout?: string;
    endpointType?:
      | "NotSpecified"
      | "Canary"
      | "Production"
      | "TestInProduction";
    skuLink?: string;
  }[];
  reRegisterSubscriptionMetadata?: {
    enabled: boolean;
    concurrencyLimit?: number;
  };
  enableTenantLinkedNotification?: boolean | null;
  notifications?: {
    notificationType?: "Unspecified" | "SubscriptionNotification";
    skipNotifications?: "Unspecified" | "Enabled" | "Disabled";
  }[];
  linkedNotificationRules?: {
    tokenAuthConfiguration?: {
      authenticationScheme?: "PoP" | "Bearer";
      signedRequestScope?: "ResourceUri" | "Endpoint";
      disableCertificateAuthenticationFallback?: boolean;
    };
    actions?: string[];
    endpoints?: {
      enabled?: boolean;
      apiVersions?: string[];
      endpointUri?: string;
      locations?: string[];
      requiredFeatures?: string[];
      featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
      timeout?: string;
      endpointType?:
        | "NotSpecified"
        | "Canary"
        | "Production"
        | "TestInProduction";
      skuLink?: string;
    }[];
    dstsConfiguration?: { serviceName: string; serviceDnsName?: string };
  }[];
  resourceProviderAuthorizationRules?: {
    asyncOperationPollingRules?: {
      authorizationActions?: string[];
      additionalOptions?:
        | "ProtectedAsyncOperationPolling"
        | "ProtectedAsyncOperationPollingAuditOnly";
    };
  };
}
export const GenerateManifestOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    providerAuthentication: Schema.optional(
      Schema.Struct({
        allowedAudiences: Schema.Array(Schema.String),
      }),
    ),
    providerAuthorizations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          applicationId: Schema.optional(Schema.String),
          roleDefinitionId: Schema.optional(Schema.String),
          managedByRoleDefinitionId: Schema.optional(Schema.String),
          managedByAuthorization: Schema.optional(
            Schema.Struct({
              additionalAuthorizations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    applicationId: Schema.optional(Schema.String),
                    roleDefinitionId: Schema.optional(Schema.String),
                  }),
                ),
              ),
              managedByResourceRoleDefinitionId: Schema.optional(Schema.String),
              allowManagedByInheritance: Schema.optional(Schema.Boolean),
            }),
          ),
          allowedThirdPartyExtensions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
              }),
            ),
          ),
          groupingTag: Schema.optional(Schema.String),
        }),
      ),
    ),
    namespace: Schema.optional(Schema.String),
    services: Schema.optional(
      Schema.Array(
        Schema.Struct({
          serviceName: Schema.optional(Schema.String),
          status: Schema.optional(Schema.Literals(["Active", "Inactive"])),
        }),
      ),
    ),
    serviceName: Schema.optional(Schema.String),
    providerVersion: Schema.optional(Schema.String),
    providerType: Schema.optional(
      Schema.Literals([
        "NotSpecified",
        "Internal",
        "External",
        "Hidden",
        "RegistrationFree",
        "LegacyRegistrationRequired",
        "TenantOnly",
        "AuthorizationFree",
      ]),
    ),
    requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
    featuresRule: Schema.optional(
      Schema.Struct({
        requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
      }),
    ),
    requestHeaderOptions: Schema.optional(
      Schema.Struct({
        optInHeaders: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "SignedUserToken",
            "ClientGroupMembership",
            "SignedAuxiliaryTokens",
            "UnboundedClientGroupMembership",
            "PrivateLinkId",
            "PrivateLinkResourceId",
            "ManagementGroupAncestorsEncoded",
            "PrivateLinkVnetTrafficTag",
            "ResourceGroupLocation",
            "ClientPrincipalNameEncoded",
            "MSIResourceIdEncoded",
          ]),
        ),
        optOutHeaders: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "SystemDataCreatedByLastModifiedBy",
          ]),
        ),
      }),
    ),
    resourceTypes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          routingType: Schema.optional(
            Schema.Literals([
              "Default",
              "ProxyOnly",
              "HostBased",
              "Extension",
              "Tenant",
              "Fanout",
              "LocationBased",
              "Failover",
              "CascadeExtension",
              "ChildFanout",
              "CascadeAuthorizedExtension",
              "BypassEndpointSelectionOptimization",
              "LocationMapping",
              "ServiceFanout",
            ]),
          ),
          additionalOptions: Schema.optional(
            Schema.Literals([
              "ProtectedAsyncOperationPolling",
              "ProtectedAsyncOperationPollingAuditOnly",
            ]),
          ),
          crossTenantTokenValidation: Schema.optional(
            Schema.Literals([
              "EnsureSecureValidation",
              "PassthroughInsecureToken",
            ]),
          ),
          resourceValidation: Schema.optional(
            Schema.Literals(["NotSpecified", "ReservedWords", "ProfaneWords"]),
          ),
          allowedUnauthorizedActions: Schema.optional(
            Schema.Array(Schema.String),
          ),
          allowedUnauthorizedActionsExtensions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                action: Schema.optional(Schema.String),
                intent: Schema.optional(
                  Schema.Literals([
                    "NOT_SPECIFIED",
                    "LOW_PRIVILEGE",
                    "DEFERRED_ACCESS_CHECK",
                    "RP_CONTRACT",
                  ]),
                ),
              }),
            ),
          ),
          authorizationActionMappings: Schema.optional(
            Schema.Array(
              Schema.Struct({
                original: Schema.optional(Schema.String),
                desired: Schema.optional(Schema.String),
              }),
            ),
          ),
          linkedAccessChecks: Schema.optional(
            Schema.Array(
              Schema.Struct({
                actionName: Schema.optional(Schema.String),
                linkedProperty: Schema.optional(Schema.String),
                linkedAction: Schema.optional(Schema.String),
                linkedActionVerb: Schema.optional(Schema.String),
                linkedType: Schema.optional(Schema.String),
              }),
            ),
          ),
          defaultApiVersion: Schema.optional(Schema.String),
          loggingRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                action: Schema.String,
                direction: Schema.Literals(["None", "Request", "Response"]),
                detailLevel: Schema.Literals(["None", "Body"]),
                hiddenPropertyPaths: Schema.optional(
                  Schema.Struct({
                    hiddenPathsOnRequest: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    hiddenPathsOnResponse: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                  }),
                ),
              }),
            ),
          ),
          throttlingRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                action: Schema.String,
                metrics: Schema.Array(
                  Schema.Struct({
                    type: Schema.Literals([
                      "NotSpecified",
                      "NumberOfRequests",
                      "NumberOfResources",
                    ]),
                    limit: Schema.Number,
                    interval: Schema.optional(Schema.String),
                  }),
                ),
                requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
                applicationId: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
          ),
          endpoints: Schema.optional(
            Schema.Array(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                apiVersions: Schema.optional(Schema.Array(Schema.String)),
                endpointUri: Schema.optional(Schema.String),
                locations: Schema.optional(Schema.Array(Schema.String)),
                requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
                featuresRule: Schema.optional(
                  Schema.Struct({
                    requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
                  }),
                ),
                timeout: Schema.optional(Schema.String),
                endpointType: Schema.optional(
                  Schema.Literals([
                    "NotSpecified",
                    "Canary",
                    "Production",
                    "TestInProduction",
                  ]),
                ),
                skuLink: Schema.optional(Schema.String),
              }),
            ),
          ),
          marketplaceType: Schema.optional(
            Schema.Literals(["NotSpecified", "AddOn", "Bypass", "Store"]),
          ),
          identityManagement: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "SystemAssigned",
                  "UserAssigned",
                  "Actor",
                  "DelegatedResourceIdentity",
                ]),
              ),
            }),
          ),
          metadata: Schema.optional(Schema.Unknown),
          requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
          featuresRule: Schema.optional(
            Schema.Struct({
              requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
            }),
          ),
          subscriptionStateRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals([
                    "NotDefined",
                    "Enabled",
                    "Warned",
                    "PastDue",
                    "Disabled",
                    "Deleted",
                  ]),
                ),
                allowedActions: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
          ),
          serviceTreeInfos: Schema.optional(
            Schema.Array(
              Schema.Struct({
                serviceId: Schema.optional(Schema.String),
                componentId: Schema.optional(Schema.String),
                readiness: Schema.optional(
                  Schema.Literals([
                    "ClosingDown",
                    "Deprecated",
                    "GA",
                    "InDevelopment",
                    "InternalOnly",
                    "PrivatePreview",
                    "PublicPreview",
                    "RemovedFromARM",
                    "Retired",
                  ]),
                ),
              }),
            ),
          ),
          requestHeaderOptions: Schema.optional(
            Schema.Struct({
              optInHeaders: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "SignedUserToken",
                  "ClientGroupMembership",
                  "SignedAuxiliaryTokens",
                  "UnboundedClientGroupMembership",
                  "PrivateLinkId",
                  "PrivateLinkResourceId",
                  "ManagementGroupAncestorsEncoded",
                  "PrivateLinkVnetTrafficTag",
                  "ResourceGroupLocation",
                  "ClientPrincipalNameEncoded",
                  "MSIResourceIdEncoded",
                ]),
              ),
              optOutHeaders: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "SystemDataCreatedByLastModifiedBy",
                ]),
              ),
            }),
          ),
          skuLink: Schema.optional(Schema.String),
          disallowedActionVerbs: Schema.optional(Schema.Array(Schema.String)),
          templateDeploymentPolicy: Schema.optional(
            Schema.Struct({
              capabilities: Schema.Literals(["Default", "Preflight"]),
              preflightOptions: Schema.Literals([
                "None",
                "ValidationRequests",
                "DeploymentRequests",
                "TestOnly",
                "RegisteredOnly",
              ]),
              preflightNotifications: Schema.optional(
                Schema.Literals(["None", "UnregisteredSubscriptions"]),
              ),
            }),
          ),
          extendedLocations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals([
                    "NotSpecified",
                    "CustomLocation",
                    "EdgeZone",
                    "ArcZone",
                  ]),
                ),
                supportedPolicy: Schema.optional(
                  Schema.Literals(["NotSpecified", "All"]),
                ),
              }),
            ),
          ),
          linkedOperationRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                linkedOperation: Schema.Literals([
                  "None",
                  "CrossResourceGroupResourceMove",
                  "CrossSubscriptionResourceMove",
                ]),
                linkedAction: Schema.Literals([
                  "NotSpecified",
                  "Blocked",
                  "Validate",
                  "Enabled",
                ]),
                dependsOnTypes: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
          ),
          resourceDeletionPolicy: Schema.optional(
            Schema.Literals(["NotSpecified", "Cascade", "Force"]),
          ),
          quotaRule: Schema.optional(
            Schema.Struct({
              quotaPolicy: Schema.optional(
                Schema.Literals(["Default", "None", "Restricted"]),
              ),
              locationRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    policy: Schema.optional(
                      Schema.Literals(["Default", "None", "Restricted"]),
                    ),
                    quotaId: Schema.optional(Schema.String),
                    location: Schema.optional(Schema.String),
                  }),
                ),
              ),
              requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
          notifications: Schema.optional(
            Schema.Array(
              Schema.Struct({
                notificationType: Schema.optional(
                  Schema.Literals(["Unspecified", "SubscriptionNotification"]),
                ),
                skipNotifications: Schema.optional(
                  Schema.Literals(["Unspecified", "Enabled", "Disabled"]),
                ),
              }),
            ),
          ),
          linkedNotificationRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                actions: Schema.optional(Schema.Array(Schema.String)),
                actionsOnFailedOperation: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                fastPathActions: Schema.optional(Schema.Array(Schema.String)),
                fastPathActionsOnFailedOperation: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                linkedNotificationTimeout: Schema.optional(Schema.String),
              }),
            ),
          ),
          resourceProviderAuthorizationRules: Schema.optional(
            Schema.Struct({
              asyncOperationPollingRules: Schema.optional(
                Schema.Struct({
                  authorizationActions: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  additionalOptions: Schema.optional(
                    Schema.Literals([
                      "ProtectedAsyncOperationPolling",
                      "ProtectedAsyncOperationPollingAuditOnly",
                    ]),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
    management: Schema.optional(
      Schema.Struct({
        schemaOwners: Schema.optional(Schema.Array(Schema.String)),
        manifestOwners: Schema.optional(Schema.Array(Schema.String)),
        authorizationOwners: Schema.optional(Schema.Array(Schema.String)),
        incidentRoutingService: Schema.optional(Schema.String),
        incidentRoutingTeam: Schema.optional(Schema.String),
        incidentContactEmail: Schema.optional(Schema.String),
        serviceTreeInfos: Schema.optional(
          Schema.Array(
            Schema.Struct({
              serviceId: Schema.optional(Schema.String),
              componentId: Schema.optional(Schema.String),
              readiness: Schema.optional(
                Schema.Literals([
                  "ClosingDown",
                  "Deprecated",
                  "GA",
                  "InDevelopment",
                  "InternalOnly",
                  "PrivatePreview",
                  "PublicPreview",
                  "RemovedFromARM",
                  "Retired",
                ]),
              ),
            }),
          ),
        ),
        resourceAccessPolicy: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "AcisReadAllowed",
            "AcisActionAllowed",
          ]),
        ),
        resourceAccessRoles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              allowedGroupClaims: Schema.optional(Schema.Array(Schema.String)),
              actions: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        expeditedRolloutSubmitters: Schema.optional(
          Schema.Array(Schema.String),
        ),
        errorResponseMessageOptions: Schema.optional(
          Schema.Struct({
            serverFailureResponseMessageType: Schema.optional(
              Schema.Literals(["NotSpecified", "OutageReporting"]),
            ),
          }),
        ),
        expeditedRolloutMetadata: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            expeditedRolloutIntent: Schema.optional(
              Schema.Literals(["NotSpecified", "Hotfix"]),
            ),
          }),
        ),
        canaryManifestOwners: Schema.optional(Schema.Array(Schema.String)),
        pcCode: Schema.optional(Schema.String),
        profitCenterProgramId: Schema.optional(Schema.String),
      }),
    ),
    capabilities: Schema.optional(
      Schema.Array(
        Schema.Struct({
          quotaId: Schema.String,
          effect: Schema.Literals(["NotSpecified", "Allow", "Disallow"]),
          requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    crossTenantTokenValidation: Schema.optional(
      Schema.Literals(["EnsureSecureValidation", "PassthroughInsecureToken"]),
    ),
    metadata: Schema.optional(Schema.Unknown),
    globalNotificationEndpoints: Schema.optional(
      Schema.Array(
        Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
          apiVersions: Schema.optional(Schema.Array(Schema.String)),
          endpointUri: Schema.optional(Schema.String),
          locations: Schema.optional(Schema.Array(Schema.String)),
          requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
          featuresRule: Schema.optional(
            Schema.Struct({
              requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
            }),
          ),
          timeout: Schema.optional(Schema.String),
          endpointType: Schema.optional(
            Schema.Literals([
              "NotSpecified",
              "Canary",
              "Production",
              "TestInProduction",
            ]),
          ),
          skuLink: Schema.optional(Schema.String),
        }),
      ),
    ),
    reRegisterSubscriptionMetadata: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
        concurrencyLimit: Schema.optional(Schema.Number),
      }),
    ),
    enableTenantLinkedNotification: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    notifications: Schema.optional(
      Schema.Array(
        Schema.Struct({
          notificationType: Schema.optional(
            Schema.Literals(["Unspecified", "SubscriptionNotification"]),
          ),
          skipNotifications: Schema.optional(
            Schema.Literals(["Unspecified", "Enabled", "Disabled"]),
          ),
        }),
      ),
    ),
    linkedNotificationRules: Schema.optional(
      Schema.Array(
        Schema.Struct({
          tokenAuthConfiguration: Schema.optional(
            Schema.Struct({
              authenticationScheme: Schema.optional(
                Schema.Literals(["PoP", "Bearer"]),
              ),
              signedRequestScope: Schema.optional(
                Schema.Literals(["ResourceUri", "Endpoint"]),
              ),
              disableCertificateAuthenticationFallback: Schema.optional(
                Schema.Boolean,
              ),
            }),
          ),
          actions: Schema.optional(Schema.Array(Schema.String)),
          endpoints: Schema.optional(
            Schema.Array(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                apiVersions: Schema.optional(Schema.Array(Schema.String)),
                endpointUri: Schema.optional(Schema.String),
                locations: Schema.optional(Schema.Array(Schema.String)),
                requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
                featuresRule: Schema.optional(
                  Schema.Struct({
                    requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
                  }),
                ),
                timeout: Schema.optional(Schema.String),
                endpointType: Schema.optional(
                  Schema.Literals([
                    "NotSpecified",
                    "Canary",
                    "Production",
                    "TestInProduction",
                  ]),
                ),
                skuLink: Schema.optional(Schema.String),
              }),
            ),
          ),
          dstsConfiguration: Schema.optional(
            Schema.Struct({
              serviceName: Schema.String,
              serviceDnsName: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    resourceProviderAuthorizationRules: Schema.optional(
      Schema.Struct({
        asyncOperationPollingRules: Schema.optional(
          Schema.Struct({
            authorizationActions: Schema.optional(Schema.Array(Schema.String)),
            additionalOptions: Schema.optional(
              Schema.Literals([
                "ProtectedAsyncOperationPolling",
                "ProtectedAsyncOperationPollingAuditOnly",
              ]),
            ),
          }),
        ),
      }),
    ),
  },
) as unknown as Schema.Codec<GenerateManifestOutput>;

// The operation
/**
 * Generates the manifest for the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const GenerateManifest = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GenerateManifestInput,
  outputSchema: GenerateManifestOutput,
}));
// Input Schema
export interface NewRegionFrontloadReleaseCreateOrUpdateInput {
  subscriptionId: string;
  providerNamespace: string;
  releaseName: string;
  properties: {
    operationType: string;
    providerNamespace: string;
    frontloadLocation: string;
    copyFromLocation: string;
    environmentType:
      | "NotSpecified"
      | "Canary"
      | "Prod"
      | "All"
      | "Mooncake"
      | "Fairfax";
    serviceFeatureFlag: "DoNotCreate" | "Create";
    includeResourceTypes: string[];
    excludeResourceTypes: string[];
    overrideManifestLevelFields: {
      resourceHydrationAccounts?: {
        maxChildResourceConsistencyJobLimit?: number;
        encryptedKey?: string;
        accountName?: string;
        subscriptionId?: string;
      }[];
    };
    overrideEndpointLevelFields: {
      enabled: boolean;
      apiVersions: string[];
      endpointUri: string;
      locations: string[];
      requiredFeatures: string[];
      featuresRule: { requiredFeaturesPolicy: "Any" | "All" };
      timeout: string;
      endpointType:
        | "NotSpecified"
        | "Canary"
        | "Production"
        | "TestInProduction";
      dstsConfiguration: { serviceName: string; serviceDnsName?: string };
      skuLink: string;
      apiVersion: string;
      zones: string[];
    };
    ignoreFields: string[];
  };
}
export const NewRegionFrontloadReleaseCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    releaseName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      operationType: Schema.String,
      providerNamespace: Schema.String,
      frontloadLocation: Schema.String,
      copyFromLocation: Schema.String,
      environmentType: Schema.Literals([
        "NotSpecified",
        "Canary",
        "Prod",
        "All",
        "Mooncake",
        "Fairfax",
      ]),
      serviceFeatureFlag: Schema.Literals(["DoNotCreate", "Create"]),
      includeResourceTypes: Schema.Array(Schema.String),
      excludeResourceTypes: Schema.Array(Schema.String),
      overrideManifestLevelFields: Schema.Struct({
        resourceHydrationAccounts: Schema.optional(
          Schema.Array(
            Schema.Struct({
              maxChildResourceConsistencyJobLimit: Schema.optional(
                Schema.Number,
              ),
              encryptedKey: Schema.optional(Schema.String),
              accountName: Schema.optional(Schema.String),
              subscriptionId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
      overrideEndpointLevelFields: Schema.Struct({
        enabled: Schema.Boolean,
        apiVersions: Schema.Array(Schema.String),
        endpointUri: Schema.String,
        locations: Schema.Array(Schema.String),
        requiredFeatures: Schema.Array(Schema.String),
        featuresRule: Schema.Struct({
          requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
        }),
        timeout: Schema.String,
        endpointType: Schema.Literals([
          "NotSpecified",
          "Canary",
          "Production",
          "TestInProduction",
        ]),
        dstsConfiguration: Schema.Struct({
          serviceName: Schema.String,
          serviceDnsName: Schema.optional(Schema.String),
        }),
        skuLink: Schema.String,
        apiVersion: Schema.String,
        zones: Schema.Array(Schema.String),
      }),
      ignoreFields: Schema.Array(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/newRegionFrontloadRelease/{releaseName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<NewRegionFrontloadReleaseCreateOrUpdateInput>;

// Output Schema
export interface NewRegionFrontloadReleaseCreateOrUpdateOutput {
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
export const NewRegionFrontloadReleaseCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<NewRegionFrontloadReleaseCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a new region frontload release.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param releaseName - The name of the release.
 */
export const NewRegionFrontloadReleaseCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NewRegionFrontloadReleaseCreateOrUpdateInput,
    outputSchema: NewRegionFrontloadReleaseCreateOrUpdateOutput,
  }));
// Input Schema
export interface NewRegionFrontloadReleaseGenerateManifestInput {
  subscriptionId: string;
  providerNamespace: string;
  properties: {
    operationType: string;
    providerNamespace: string;
    frontloadLocation: string;
    copyFromLocation: string;
    environmentType:
      | "NotSpecified"
      | "Canary"
      | "Prod"
      | "All"
      | "Mooncake"
      | "Fairfax";
    serviceFeatureFlag: "DoNotCreate" | "Create";
    includeResourceTypes: string[];
    excludeResourceTypes: string[];
    overrideManifestLevelFields: {
      resourceHydrationAccounts?: {
        maxChildResourceConsistencyJobLimit?: number;
        encryptedKey?: string;
        accountName?: string;
        subscriptionId?: string;
      }[];
    };
    overrideEndpointLevelFields: {
      enabled: boolean;
      apiVersions: string[];
      endpointUri: string;
      locations: string[];
      requiredFeatures: string[];
      featuresRule: { requiredFeaturesPolicy: "Any" | "All" };
      timeout: string;
      endpointType:
        | "NotSpecified"
        | "Canary"
        | "Production"
        | "TestInProduction";
      dstsConfiguration: { serviceName: string; serviceDnsName?: string };
      skuLink: string;
      apiVersion: string;
      zones: string[];
    };
    ignoreFields: string[];
  };
}
export const NewRegionFrontloadReleaseGenerateManifestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      operationType: Schema.String,
      providerNamespace: Schema.String,
      frontloadLocation: Schema.String,
      copyFromLocation: Schema.String,
      environmentType: Schema.Literals([
        "NotSpecified",
        "Canary",
        "Prod",
        "All",
        "Mooncake",
        "Fairfax",
      ]),
      serviceFeatureFlag: Schema.Literals(["DoNotCreate", "Create"]),
      includeResourceTypes: Schema.Array(Schema.String),
      excludeResourceTypes: Schema.Array(Schema.String),
      overrideManifestLevelFields: Schema.Struct({
        resourceHydrationAccounts: Schema.optional(
          Schema.Array(
            Schema.Struct({
              maxChildResourceConsistencyJobLimit: Schema.optional(
                Schema.Number,
              ),
              encryptedKey: Schema.optional(Schema.String),
              accountName: Schema.optional(Schema.String),
              subscriptionId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
      overrideEndpointLevelFields: Schema.Struct({
        enabled: Schema.Boolean,
        apiVersions: Schema.Array(Schema.String),
        endpointUri: Schema.String,
        locations: Schema.Array(Schema.String),
        requiredFeatures: Schema.Array(Schema.String),
        featuresRule: Schema.Struct({
          requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
        }),
        timeout: Schema.String,
        endpointType: Schema.Literals([
          "NotSpecified",
          "Canary",
          "Production",
          "TestInProduction",
        ]),
        dstsConfiguration: Schema.Struct({
          serviceName: Schema.String,
          serviceDnsName: Schema.optional(Schema.String),
        }),
        skuLink: Schema.String,
        apiVersion: Schema.String,
        zones: Schema.Array(Schema.String),
      }),
      ignoreFields: Schema.Array(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/generateNewRegionFrontloadManifest",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<NewRegionFrontloadReleaseGenerateManifestInput>;

// Output Schema
export interface NewRegionFrontloadReleaseGenerateManifestOutput {
  providerAuthentication?: { allowedAudiences: string[] };
  providerAuthorizations?: {
    applicationId?: string;
    roleDefinitionId?: string;
    managedByRoleDefinitionId?: string;
    managedByAuthorization?: {
      additionalAuthorizations?: {
        applicationId?: string;
        roleDefinitionId?: string;
      }[];
      managedByResourceRoleDefinitionId?: string;
      allowManagedByInheritance?: boolean;
    };
    allowedThirdPartyExtensions?: { name?: string }[];
    groupingTag?: string;
  }[];
  namespace?: string;
  services?: { serviceName?: string; status?: "Active" | "Inactive" }[];
  serviceName?: string;
  providerVersion?: string;
  providerType?:
    | "NotSpecified"
    | "Internal"
    | "External"
    | "Hidden"
    | "RegistrationFree"
    | "LegacyRegistrationRequired"
    | "TenantOnly"
    | "AuthorizationFree";
  requiredFeatures?: string[];
  featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
  requestHeaderOptions?: {
    optInHeaders?:
      | "NotSpecified"
      | "SignedUserToken"
      | "ClientGroupMembership"
      | "SignedAuxiliaryTokens"
      | "UnboundedClientGroupMembership"
      | "PrivateLinkId"
      | "PrivateLinkResourceId"
      | "ManagementGroupAncestorsEncoded"
      | "PrivateLinkVnetTrafficTag"
      | "ResourceGroupLocation"
      | "ClientPrincipalNameEncoded"
      | "MSIResourceIdEncoded";
    optOutHeaders?: "NotSpecified" | "SystemDataCreatedByLastModifiedBy";
  };
  resourceTypes?: {
    name?: string;
    routingType?:
      | "Default"
      | "ProxyOnly"
      | "HostBased"
      | "Extension"
      | "Tenant"
      | "Fanout"
      | "LocationBased"
      | "Failover"
      | "CascadeExtension"
      | "ChildFanout"
      | "CascadeAuthorizedExtension"
      | "BypassEndpointSelectionOptimization"
      | "LocationMapping"
      | "ServiceFanout";
    additionalOptions?:
      | "ProtectedAsyncOperationPolling"
      | "ProtectedAsyncOperationPollingAuditOnly";
    crossTenantTokenValidation?:
      | "EnsureSecureValidation"
      | "PassthroughInsecureToken";
    resourceValidation?: "NotSpecified" | "ReservedWords" | "ProfaneWords";
    allowedUnauthorizedActions?: string[];
    allowedUnauthorizedActionsExtensions?: {
      action?: string;
      intent?:
        | "NOT_SPECIFIED"
        | "LOW_PRIVILEGE"
        | "DEFERRED_ACCESS_CHECK"
        | "RP_CONTRACT";
    }[];
    authorizationActionMappings?: { original?: string; desired?: string }[];
    linkedAccessChecks?: {
      actionName?: string;
      linkedProperty?: string;
      linkedAction?: string;
      linkedActionVerb?: string;
      linkedType?: string;
    }[];
    defaultApiVersion?: string;
    loggingRules?: {
      action: string;
      direction: "None" | "Request" | "Response";
      detailLevel: "None" | "Body";
      hiddenPropertyPaths?: {
        hiddenPathsOnRequest?: string[];
        hiddenPathsOnResponse?: string[];
      };
    }[];
    throttlingRules?: {
      action: string;
      metrics: {
        type: "NotSpecified" | "NumberOfRequests" | "NumberOfResources";
        limit: number;
        interval?: string;
      }[];
      requiredFeatures?: string[];
      applicationId?: string[];
    }[];
    endpoints?: {
      enabled?: boolean;
      apiVersions?: string[];
      endpointUri?: string;
      locations?: string[];
      requiredFeatures?: string[];
      featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
      timeout?: string;
      endpointType?:
        | "NotSpecified"
        | "Canary"
        | "Production"
        | "TestInProduction";
      skuLink?: string;
    }[];
    marketplaceType?: "NotSpecified" | "AddOn" | "Bypass" | "Store";
    identityManagement?: {
      type?:
        | "NotSpecified"
        | "SystemAssigned"
        | "UserAssigned"
        | "Actor"
        | "DelegatedResourceIdentity";
    };
    metadata?: unknown;
    requiredFeatures?: string[];
    featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
    subscriptionStateRules?: {
      state?:
        | "NotDefined"
        | "Enabled"
        | "Warned"
        | "PastDue"
        | "Disabled"
        | "Deleted";
      allowedActions?: string[];
    }[];
    serviceTreeInfos?: {
      serviceId?: string;
      componentId?: string;
      readiness?:
        | "ClosingDown"
        | "Deprecated"
        | "GA"
        | "InDevelopment"
        | "InternalOnly"
        | "PrivatePreview"
        | "PublicPreview"
        | "RemovedFromARM"
        | "Retired";
    }[];
    requestHeaderOptions?: {
      optInHeaders?:
        | "NotSpecified"
        | "SignedUserToken"
        | "ClientGroupMembership"
        | "SignedAuxiliaryTokens"
        | "UnboundedClientGroupMembership"
        | "PrivateLinkId"
        | "PrivateLinkResourceId"
        | "ManagementGroupAncestorsEncoded"
        | "PrivateLinkVnetTrafficTag"
        | "ResourceGroupLocation"
        | "ClientPrincipalNameEncoded"
        | "MSIResourceIdEncoded";
      optOutHeaders?: "NotSpecified" | "SystemDataCreatedByLastModifiedBy";
    };
    skuLink?: string;
    disallowedActionVerbs?: string[];
    templateDeploymentPolicy?: {
      capabilities: "Default" | "Preflight";
      preflightOptions:
        | "None"
        | "ValidationRequests"
        | "DeploymentRequests"
        | "TestOnly"
        | "RegisteredOnly";
      preflightNotifications?: "None" | "UnregisteredSubscriptions";
    };
    extendedLocations?: {
      type?: "NotSpecified" | "CustomLocation" | "EdgeZone" | "ArcZone";
      supportedPolicy?: "NotSpecified" | "All";
    }[];
    linkedOperationRules?: {
      linkedOperation:
        | "None"
        | "CrossResourceGroupResourceMove"
        | "CrossSubscriptionResourceMove";
      linkedAction: "NotSpecified" | "Blocked" | "Validate" | "Enabled";
      dependsOnTypes?: string[];
    }[];
    resourceDeletionPolicy?: "NotSpecified" | "Cascade" | "Force";
    quotaRule?: {
      quotaPolicy?: "Default" | "None" | "Restricted";
      locationRules?: {
        policy?: "Default" | "None" | "Restricted";
        quotaId?: string;
        location?: string;
      }[];
      requiredFeatures?: string[];
    };
    notifications?: {
      notificationType?: "Unspecified" | "SubscriptionNotification";
      skipNotifications?: "Unspecified" | "Enabled" | "Disabled";
    }[];
    linkedNotificationRules?: {
      actions?: string[];
      actionsOnFailedOperation?: string[];
      fastPathActions?: string[];
      fastPathActionsOnFailedOperation?: string[];
      linkedNotificationTimeout?: string;
    }[];
    resourceProviderAuthorizationRules?: {
      asyncOperationPollingRules?: {
        authorizationActions?: string[];
        additionalOptions?:
          | "ProtectedAsyncOperationPolling"
          | "ProtectedAsyncOperationPollingAuditOnly";
      };
    };
  }[];
  management?: {
    schemaOwners?: string[];
    manifestOwners?: string[];
    authorizationOwners?: string[];
    incidentRoutingService?: string;
    incidentRoutingTeam?: string;
    incidentContactEmail?: string;
    serviceTreeInfos?: {
      serviceId?: string;
      componentId?: string;
      readiness?:
        | "ClosingDown"
        | "Deprecated"
        | "GA"
        | "InDevelopment"
        | "InternalOnly"
        | "PrivatePreview"
        | "PublicPreview"
        | "RemovedFromARM"
        | "Retired";
    }[];
    resourceAccessPolicy?:
      | "NotSpecified"
      | "AcisReadAllowed"
      | "AcisActionAllowed";
    resourceAccessRoles?: {
      allowedGroupClaims?: string[];
      actions?: string[];
    }[];
    expeditedRolloutSubmitters?: string[];
    errorResponseMessageOptions?: {
      serverFailureResponseMessageType?: "NotSpecified" | "OutageReporting";
    };
    expeditedRolloutMetadata?: {
      enabled?: boolean;
      expeditedRolloutIntent?: "NotSpecified" | "Hotfix";
    };
    canaryManifestOwners?: string[];
    pcCode?: string;
    profitCenterProgramId?: string;
  };
  capabilities?: {
    quotaId: string;
    effect: "NotSpecified" | "Allow" | "Disallow";
    requiredFeatures?: string[];
  }[];
  crossTenantTokenValidation?:
    | "EnsureSecureValidation"
    | "PassthroughInsecureToken";
  metadata?: unknown;
  globalNotificationEndpoints?: {
    enabled?: boolean;
    apiVersions?: string[];
    endpointUri?: string;
    locations?: string[];
    requiredFeatures?: string[];
    featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
    timeout?: string;
    endpointType?:
      | "NotSpecified"
      | "Canary"
      | "Production"
      | "TestInProduction";
    skuLink?: string;
  }[];
  reRegisterSubscriptionMetadata?: {
    enabled: boolean;
    concurrencyLimit?: number;
  };
  enableTenantLinkedNotification?: boolean | null;
  notifications?: {
    notificationType?: "Unspecified" | "SubscriptionNotification";
    skipNotifications?: "Unspecified" | "Enabled" | "Disabled";
  }[];
  linkedNotificationRules?: {
    tokenAuthConfiguration?: {
      authenticationScheme?: "PoP" | "Bearer";
      signedRequestScope?: "ResourceUri" | "Endpoint";
      disableCertificateAuthenticationFallback?: boolean;
    };
    actions?: string[];
    endpoints?: {
      enabled?: boolean;
      apiVersions?: string[];
      endpointUri?: string;
      locations?: string[];
      requiredFeatures?: string[];
      featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
      timeout?: string;
      endpointType?:
        | "NotSpecified"
        | "Canary"
        | "Production"
        | "TestInProduction";
      skuLink?: string;
    }[];
    dstsConfiguration?: { serviceName: string; serviceDnsName?: string };
  }[];
  resourceProviderAuthorizationRules?: {
    asyncOperationPollingRules?: {
      authorizationActions?: string[];
      additionalOptions?:
        | "ProtectedAsyncOperationPolling"
        | "ProtectedAsyncOperationPollingAuditOnly";
    };
  };
}
export const NewRegionFrontloadReleaseGenerateManifestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    providerAuthentication: Schema.optional(
      Schema.Struct({
        allowedAudiences: Schema.Array(Schema.String),
      }),
    ),
    providerAuthorizations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          applicationId: Schema.optional(Schema.String),
          roleDefinitionId: Schema.optional(Schema.String),
          managedByRoleDefinitionId: Schema.optional(Schema.String),
          managedByAuthorization: Schema.optional(
            Schema.Struct({
              additionalAuthorizations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    applicationId: Schema.optional(Schema.String),
                    roleDefinitionId: Schema.optional(Schema.String),
                  }),
                ),
              ),
              managedByResourceRoleDefinitionId: Schema.optional(Schema.String),
              allowManagedByInheritance: Schema.optional(Schema.Boolean),
            }),
          ),
          allowedThirdPartyExtensions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
              }),
            ),
          ),
          groupingTag: Schema.optional(Schema.String),
        }),
      ),
    ),
    namespace: Schema.optional(Schema.String),
    services: Schema.optional(
      Schema.Array(
        Schema.Struct({
          serviceName: Schema.optional(Schema.String),
          status: Schema.optional(Schema.Literals(["Active", "Inactive"])),
        }),
      ),
    ),
    serviceName: Schema.optional(Schema.String),
    providerVersion: Schema.optional(Schema.String),
    providerType: Schema.optional(
      Schema.Literals([
        "NotSpecified",
        "Internal",
        "External",
        "Hidden",
        "RegistrationFree",
        "LegacyRegistrationRequired",
        "TenantOnly",
        "AuthorizationFree",
      ]),
    ),
    requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
    featuresRule: Schema.optional(
      Schema.Struct({
        requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
      }),
    ),
    requestHeaderOptions: Schema.optional(
      Schema.Struct({
        optInHeaders: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "SignedUserToken",
            "ClientGroupMembership",
            "SignedAuxiliaryTokens",
            "UnboundedClientGroupMembership",
            "PrivateLinkId",
            "PrivateLinkResourceId",
            "ManagementGroupAncestorsEncoded",
            "PrivateLinkVnetTrafficTag",
            "ResourceGroupLocation",
            "ClientPrincipalNameEncoded",
            "MSIResourceIdEncoded",
          ]),
        ),
        optOutHeaders: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "SystemDataCreatedByLastModifiedBy",
          ]),
        ),
      }),
    ),
    resourceTypes: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          routingType: Schema.optional(
            Schema.Literals([
              "Default",
              "ProxyOnly",
              "HostBased",
              "Extension",
              "Tenant",
              "Fanout",
              "LocationBased",
              "Failover",
              "CascadeExtension",
              "ChildFanout",
              "CascadeAuthorizedExtension",
              "BypassEndpointSelectionOptimization",
              "LocationMapping",
              "ServiceFanout",
            ]),
          ),
          additionalOptions: Schema.optional(
            Schema.Literals([
              "ProtectedAsyncOperationPolling",
              "ProtectedAsyncOperationPollingAuditOnly",
            ]),
          ),
          crossTenantTokenValidation: Schema.optional(
            Schema.Literals([
              "EnsureSecureValidation",
              "PassthroughInsecureToken",
            ]),
          ),
          resourceValidation: Schema.optional(
            Schema.Literals(["NotSpecified", "ReservedWords", "ProfaneWords"]),
          ),
          allowedUnauthorizedActions: Schema.optional(
            Schema.Array(Schema.String),
          ),
          allowedUnauthorizedActionsExtensions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                action: Schema.optional(Schema.String),
                intent: Schema.optional(
                  Schema.Literals([
                    "NOT_SPECIFIED",
                    "LOW_PRIVILEGE",
                    "DEFERRED_ACCESS_CHECK",
                    "RP_CONTRACT",
                  ]),
                ),
              }),
            ),
          ),
          authorizationActionMappings: Schema.optional(
            Schema.Array(
              Schema.Struct({
                original: Schema.optional(Schema.String),
                desired: Schema.optional(Schema.String),
              }),
            ),
          ),
          linkedAccessChecks: Schema.optional(
            Schema.Array(
              Schema.Struct({
                actionName: Schema.optional(Schema.String),
                linkedProperty: Schema.optional(Schema.String),
                linkedAction: Schema.optional(Schema.String),
                linkedActionVerb: Schema.optional(Schema.String),
                linkedType: Schema.optional(Schema.String),
              }),
            ),
          ),
          defaultApiVersion: Schema.optional(Schema.String),
          loggingRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                action: Schema.String,
                direction: Schema.Literals(["None", "Request", "Response"]),
                detailLevel: Schema.Literals(["None", "Body"]),
                hiddenPropertyPaths: Schema.optional(
                  Schema.Struct({
                    hiddenPathsOnRequest: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    hiddenPathsOnResponse: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                  }),
                ),
              }),
            ),
          ),
          throttlingRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                action: Schema.String,
                metrics: Schema.Array(
                  Schema.Struct({
                    type: Schema.Literals([
                      "NotSpecified",
                      "NumberOfRequests",
                      "NumberOfResources",
                    ]),
                    limit: Schema.Number,
                    interval: Schema.optional(Schema.String),
                  }),
                ),
                requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
                applicationId: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
          ),
          endpoints: Schema.optional(
            Schema.Array(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                apiVersions: Schema.optional(Schema.Array(Schema.String)),
                endpointUri: Schema.optional(Schema.String),
                locations: Schema.optional(Schema.Array(Schema.String)),
                requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
                featuresRule: Schema.optional(
                  Schema.Struct({
                    requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
                  }),
                ),
                timeout: Schema.optional(Schema.String),
                endpointType: Schema.optional(
                  Schema.Literals([
                    "NotSpecified",
                    "Canary",
                    "Production",
                    "TestInProduction",
                  ]),
                ),
                skuLink: Schema.optional(Schema.String),
              }),
            ),
          ),
          marketplaceType: Schema.optional(
            Schema.Literals(["NotSpecified", "AddOn", "Bypass", "Store"]),
          ),
          identityManagement: Schema.optional(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "SystemAssigned",
                  "UserAssigned",
                  "Actor",
                  "DelegatedResourceIdentity",
                ]),
              ),
            }),
          ),
          metadata: Schema.optional(Schema.Unknown),
          requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
          featuresRule: Schema.optional(
            Schema.Struct({
              requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
            }),
          ),
          subscriptionStateRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                state: Schema.optional(
                  Schema.Literals([
                    "NotDefined",
                    "Enabled",
                    "Warned",
                    "PastDue",
                    "Disabled",
                    "Deleted",
                  ]),
                ),
                allowedActions: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
          ),
          serviceTreeInfos: Schema.optional(
            Schema.Array(
              Schema.Struct({
                serviceId: Schema.optional(Schema.String),
                componentId: Schema.optional(Schema.String),
                readiness: Schema.optional(
                  Schema.Literals([
                    "ClosingDown",
                    "Deprecated",
                    "GA",
                    "InDevelopment",
                    "InternalOnly",
                    "PrivatePreview",
                    "PublicPreview",
                    "RemovedFromARM",
                    "Retired",
                  ]),
                ),
              }),
            ),
          ),
          requestHeaderOptions: Schema.optional(
            Schema.Struct({
              optInHeaders: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "SignedUserToken",
                  "ClientGroupMembership",
                  "SignedAuxiliaryTokens",
                  "UnboundedClientGroupMembership",
                  "PrivateLinkId",
                  "PrivateLinkResourceId",
                  "ManagementGroupAncestorsEncoded",
                  "PrivateLinkVnetTrafficTag",
                  "ResourceGroupLocation",
                  "ClientPrincipalNameEncoded",
                  "MSIResourceIdEncoded",
                ]),
              ),
              optOutHeaders: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "SystemDataCreatedByLastModifiedBy",
                ]),
              ),
            }),
          ),
          skuLink: Schema.optional(Schema.String),
          disallowedActionVerbs: Schema.optional(Schema.Array(Schema.String)),
          templateDeploymentPolicy: Schema.optional(
            Schema.Struct({
              capabilities: Schema.Literals(["Default", "Preflight"]),
              preflightOptions: Schema.Literals([
                "None",
                "ValidationRequests",
                "DeploymentRequests",
                "TestOnly",
                "RegisteredOnly",
              ]),
              preflightNotifications: Schema.optional(
                Schema.Literals(["None", "UnregisteredSubscriptions"]),
              ),
            }),
          ),
          extendedLocations: Schema.optional(
            Schema.Array(
              Schema.Struct({
                type: Schema.optional(
                  Schema.Literals([
                    "NotSpecified",
                    "CustomLocation",
                    "EdgeZone",
                    "ArcZone",
                  ]),
                ),
                supportedPolicy: Schema.optional(
                  Schema.Literals(["NotSpecified", "All"]),
                ),
              }),
            ),
          ),
          linkedOperationRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                linkedOperation: Schema.Literals([
                  "None",
                  "CrossResourceGroupResourceMove",
                  "CrossSubscriptionResourceMove",
                ]),
                linkedAction: Schema.Literals([
                  "NotSpecified",
                  "Blocked",
                  "Validate",
                  "Enabled",
                ]),
                dependsOnTypes: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
          ),
          resourceDeletionPolicy: Schema.optional(
            Schema.Literals(["NotSpecified", "Cascade", "Force"]),
          ),
          quotaRule: Schema.optional(
            Schema.Struct({
              quotaPolicy: Schema.optional(
                Schema.Literals(["Default", "None", "Restricted"]),
              ),
              locationRules: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    policy: Schema.optional(
                      Schema.Literals(["Default", "None", "Restricted"]),
                    ),
                    quotaId: Schema.optional(Schema.String),
                    location: Schema.optional(Schema.String),
                  }),
                ),
              ),
              requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
          notifications: Schema.optional(
            Schema.Array(
              Schema.Struct({
                notificationType: Schema.optional(
                  Schema.Literals(["Unspecified", "SubscriptionNotification"]),
                ),
                skipNotifications: Schema.optional(
                  Schema.Literals(["Unspecified", "Enabled", "Disabled"]),
                ),
              }),
            ),
          ),
          linkedNotificationRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                actions: Schema.optional(Schema.Array(Schema.String)),
                actionsOnFailedOperation: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                fastPathActions: Schema.optional(Schema.Array(Schema.String)),
                fastPathActionsOnFailedOperation: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                linkedNotificationTimeout: Schema.optional(Schema.String),
              }),
            ),
          ),
          resourceProviderAuthorizationRules: Schema.optional(
            Schema.Struct({
              asyncOperationPollingRules: Schema.optional(
                Schema.Struct({
                  authorizationActions: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  additionalOptions: Schema.optional(
                    Schema.Literals([
                      "ProtectedAsyncOperationPolling",
                      "ProtectedAsyncOperationPollingAuditOnly",
                    ]),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
    management: Schema.optional(
      Schema.Struct({
        schemaOwners: Schema.optional(Schema.Array(Schema.String)),
        manifestOwners: Schema.optional(Schema.Array(Schema.String)),
        authorizationOwners: Schema.optional(Schema.Array(Schema.String)),
        incidentRoutingService: Schema.optional(Schema.String),
        incidentRoutingTeam: Schema.optional(Schema.String),
        incidentContactEmail: Schema.optional(Schema.String),
        serviceTreeInfos: Schema.optional(
          Schema.Array(
            Schema.Struct({
              serviceId: Schema.optional(Schema.String),
              componentId: Schema.optional(Schema.String),
              readiness: Schema.optional(
                Schema.Literals([
                  "ClosingDown",
                  "Deprecated",
                  "GA",
                  "InDevelopment",
                  "InternalOnly",
                  "PrivatePreview",
                  "PublicPreview",
                  "RemovedFromARM",
                  "Retired",
                ]),
              ),
            }),
          ),
        ),
        resourceAccessPolicy: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "AcisReadAllowed",
            "AcisActionAllowed",
          ]),
        ),
        resourceAccessRoles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              allowedGroupClaims: Schema.optional(Schema.Array(Schema.String)),
              actions: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        expeditedRolloutSubmitters: Schema.optional(
          Schema.Array(Schema.String),
        ),
        errorResponseMessageOptions: Schema.optional(
          Schema.Struct({
            serverFailureResponseMessageType: Schema.optional(
              Schema.Literals(["NotSpecified", "OutageReporting"]),
            ),
          }),
        ),
        expeditedRolloutMetadata: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            expeditedRolloutIntent: Schema.optional(
              Schema.Literals(["NotSpecified", "Hotfix"]),
            ),
          }),
        ),
        canaryManifestOwners: Schema.optional(Schema.Array(Schema.String)),
        pcCode: Schema.optional(Schema.String),
        profitCenterProgramId: Schema.optional(Schema.String),
      }),
    ),
    capabilities: Schema.optional(
      Schema.Array(
        Schema.Struct({
          quotaId: Schema.String,
          effect: Schema.Literals(["NotSpecified", "Allow", "Disallow"]),
          requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
    crossTenantTokenValidation: Schema.optional(
      Schema.Literals(["EnsureSecureValidation", "PassthroughInsecureToken"]),
    ),
    metadata: Schema.optional(Schema.Unknown),
    globalNotificationEndpoints: Schema.optional(
      Schema.Array(
        Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
          apiVersions: Schema.optional(Schema.Array(Schema.String)),
          endpointUri: Schema.optional(Schema.String),
          locations: Schema.optional(Schema.Array(Schema.String)),
          requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
          featuresRule: Schema.optional(
            Schema.Struct({
              requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
            }),
          ),
          timeout: Schema.optional(Schema.String),
          endpointType: Schema.optional(
            Schema.Literals([
              "NotSpecified",
              "Canary",
              "Production",
              "TestInProduction",
            ]),
          ),
          skuLink: Schema.optional(Schema.String),
        }),
      ),
    ),
    reRegisterSubscriptionMetadata: Schema.optional(
      Schema.Struct({
        enabled: Schema.Boolean,
        concurrencyLimit: Schema.optional(Schema.Number),
      }),
    ),
    enableTenantLinkedNotification: Schema.optional(
      Schema.NullOr(Schema.Boolean),
    ),
    notifications: Schema.optional(
      Schema.Array(
        Schema.Struct({
          notificationType: Schema.optional(
            Schema.Literals(["Unspecified", "SubscriptionNotification"]),
          ),
          skipNotifications: Schema.optional(
            Schema.Literals(["Unspecified", "Enabled", "Disabled"]),
          ),
        }),
      ),
    ),
    linkedNotificationRules: Schema.optional(
      Schema.Array(
        Schema.Struct({
          tokenAuthConfiguration: Schema.optional(
            Schema.Struct({
              authenticationScheme: Schema.optional(
                Schema.Literals(["PoP", "Bearer"]),
              ),
              signedRequestScope: Schema.optional(
                Schema.Literals(["ResourceUri", "Endpoint"]),
              ),
              disableCertificateAuthenticationFallback: Schema.optional(
                Schema.Boolean,
              ),
            }),
          ),
          actions: Schema.optional(Schema.Array(Schema.String)),
          endpoints: Schema.optional(
            Schema.Array(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                apiVersions: Schema.optional(Schema.Array(Schema.String)),
                endpointUri: Schema.optional(Schema.String),
                locations: Schema.optional(Schema.Array(Schema.String)),
                requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
                featuresRule: Schema.optional(
                  Schema.Struct({
                    requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
                  }),
                ),
                timeout: Schema.optional(Schema.String),
                endpointType: Schema.optional(
                  Schema.Literals([
                    "NotSpecified",
                    "Canary",
                    "Production",
                    "TestInProduction",
                  ]),
                ),
                skuLink: Schema.optional(Schema.String),
              }),
            ),
          ),
          dstsConfiguration: Schema.optional(
            Schema.Struct({
              serviceName: Schema.String,
              serviceDnsName: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
    ),
    resourceProviderAuthorizationRules: Schema.optional(
      Schema.Struct({
        asyncOperationPollingRules: Schema.optional(
          Schema.Struct({
            authorizationActions: Schema.optional(Schema.Array(Schema.String)),
            additionalOptions: Schema.optional(
              Schema.Literals([
                "ProtectedAsyncOperationPolling",
                "ProtectedAsyncOperationPollingAuditOnly",
              ]),
            ),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<NewRegionFrontloadReleaseGenerateManifestOutput>;

// The operation
/**
 * Generates the new region frontload manifest.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const NewRegionFrontloadReleaseGenerateManifest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NewRegionFrontloadReleaseGenerateManifestInput,
    outputSchema: NewRegionFrontloadReleaseGenerateManifestOutput,
  }));
// Input Schema
export interface NewRegionFrontloadReleaseGetInput {
  subscriptionId: string;
  providerNamespace: string;
  releaseName: string;
}
export const NewRegionFrontloadReleaseGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    releaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/newRegionFrontloadRelease/{releaseName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<NewRegionFrontloadReleaseGetInput>;

// Output Schema
export interface NewRegionFrontloadReleaseGetOutput {
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
export const NewRegionFrontloadReleaseGetOutput =
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
  }) as unknown as Schema.Codec<NewRegionFrontloadReleaseGetOutput>;

// The operation
/**
 * Gets a new region frontload release.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param releaseName - The name of the release.
 */
export const NewRegionFrontloadReleaseGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NewRegionFrontloadReleaseGetInput,
    outputSchema: NewRegionFrontloadReleaseGetOutput,
  }));
// Input Schema
export interface NewRegionFrontloadReleaseStopInput {
  subscriptionId: string;
  providerNamespace: string;
  releaseName: string;
}
export const NewRegionFrontloadReleaseStopInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    releaseName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/newRegionFrontloadRelease/{releaseName}/stop",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<NewRegionFrontloadReleaseStopInput>;

// Output Schema
export type NewRegionFrontloadReleaseStopOutput = void;
export const NewRegionFrontloadReleaseStopOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NewRegionFrontloadReleaseStopOutput>;

// The operation
/**
 * Stops a new region frontload release.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param releaseName - The name of the release.
 */
export const NewRegionFrontloadReleaseStop =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NewRegionFrontloadReleaseStopInput,
    outputSchema: NewRegionFrontloadReleaseStopOutput,
  }));
// Input Schema
export interface NotificationRegistrationsCreateOrUpdateInput {
  subscriptionId: string;
  providerNamespace: string;
  notificationRegistrationName: string;
  properties?: {
    notificationMode?: "NotSpecified" | "EventHub" | "WebHook";
    messageScope?: "NotSpecified" | "RegisteredSubscriptions";
    includedEvents?: string[];
    notificationEndpoints?: {
      notificationDestination?: string;
      locations?: string[];
    }[];
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "MovingResources"
      | "TransientFailure"
      | "RolloutInProgress";
  };
}
export const NotificationRegistrationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    notificationRegistrationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        notificationMode: Schema.optional(
          Schema.Literals(["NotSpecified", "EventHub", "WebHook"]),
        ),
        messageScope: Schema.optional(
          Schema.Literals(["NotSpecified", "RegisteredSubscriptions"]),
        ),
        includedEvents: Schema.optional(Schema.Array(Schema.String)),
        notificationEndpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              notificationDestination: Schema.optional(Schema.String),
              locations: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "MovingResources",
            "TransientFailure",
            "RolloutInProgress",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/notificationRegistrations/{notificationRegistrationName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationRegistrationsCreateOrUpdateInput>;

// Output Schema
export interface NotificationRegistrationsCreateOrUpdateOutput {
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
export const NotificationRegistrationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<NotificationRegistrationsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a notification registration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param notificationRegistrationName - The notification registration.
 */
export const NotificationRegistrationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NotificationRegistrationsCreateOrUpdateInput,
    outputSchema: NotificationRegistrationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface NotificationRegistrationsDeleteInput {
  subscriptionId: string;
  providerNamespace: string;
  notificationRegistrationName: string;
}
export const NotificationRegistrationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    notificationRegistrationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/notificationRegistrations/{notificationRegistrationName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationRegistrationsDeleteInput>;

// Output Schema
export type NotificationRegistrationsDeleteOutput = void;
export const NotificationRegistrationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<NotificationRegistrationsDeleteOutput>;

// The operation
/**
 * Deletes a notification registration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param notificationRegistrationName - The notification registration.
 */
export const NotificationRegistrationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NotificationRegistrationsDeleteInput,
    outputSchema: NotificationRegistrationsDeleteOutput,
  }));
// Input Schema
export interface NotificationRegistrationsGetInput {
  subscriptionId: string;
  providerNamespace: string;
  notificationRegistrationName: string;
}
export const NotificationRegistrationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    notificationRegistrationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/notificationRegistrations/{notificationRegistrationName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationRegistrationsGetInput>;

// Output Schema
export interface NotificationRegistrationsGetOutput {
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
export const NotificationRegistrationsGetOutput =
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
  }) as unknown as Schema.Codec<NotificationRegistrationsGetOutput>;

// The operation
/**
 * Gets the notification registration details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param notificationRegistrationName - The notification registration.
 */
export const NotificationRegistrationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NotificationRegistrationsGetInput,
    outputSchema: NotificationRegistrationsGetOutput,
  }));
// Input Schema
export interface NotificationRegistrationsListByProviderRegistrationInput {
  subscriptionId: string;
  providerNamespace: string;
}
export const NotificationRegistrationsListByProviderRegistrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/notificationRegistrations",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<NotificationRegistrationsListByProviderRegistrationInput>;

// Output Schema
export interface NotificationRegistrationsListByProviderRegistrationOutput {
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
export const NotificationRegistrationsListByProviderRegistrationOutput =
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
  }) as unknown as Schema.Codec<NotificationRegistrationsListByProviderRegistrationOutput>;

// The operation
/**
 * Gets the list of the notification registrations for the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const NotificationRegistrationsListByProviderRegistration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NotificationRegistrationsListByProviderRegistrationInput,
    outputSchema: NotificationRegistrationsListByProviderRegistrationOutput,
  }));
// Input Schema
export interface OperationsCreateOrUpdateInput {
  subscriptionId: string;
  providerNamespace: string;
  properties?: {
    contents?: {
      name: string;
      isDataAction?: boolean;
      origin?: "NotSpecified" | "User" | "System";
      display: {
        default: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        en?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        cs?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        de?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        es?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        fr?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        hu?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        it?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        ja?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        ko?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        nl?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        pl?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        ptBR?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        ptPT?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        ru?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        sv?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        zhHans?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
        zhHant?: {
          provider: string;
          resource: string;
          operation: string;
          description: string;
        };
      };
      actionType?: "NotSpecified" | "Internal";
    }[];
  };
}
export const OperationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        contents: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.String,
              isDataAction: Schema.optional(Schema.Boolean),
              origin: Schema.optional(
                Schema.Literals(["NotSpecified", "User", "System"]),
              ),
              display: Schema.Struct({
                default: Schema.Struct({
                  provider: Schema.String,
                  resource: Schema.String,
                  operation: Schema.String,
                  description: Schema.String,
                }),
                en: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                cs: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                de: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                es: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                fr: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                hu: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                it: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                ja: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                ko: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                nl: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                pl: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                ptBR: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                ptPT: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                ru: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                sv: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                zhHans: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
                zhHant: Schema.optional(
                  Schema.Struct({
                    provider: Schema.String,
                    resource: Schema.String,
                    operation: Schema.String,
                    description: Schema.String,
                  }),
                ),
              }),
              actionType: Schema.optional(
                Schema.Literals(["NotSpecified", "Internal"]),
              ),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/operations/default",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<OperationsCreateOrUpdateInput>;

// Output Schema
export interface OperationsCreateOrUpdateOutput {
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
export const OperationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<OperationsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the operation supported by the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const OperationsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OperationsCreateOrUpdateInput,
    outputSchema: OperationsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface OperationsDeleteInput {
  subscriptionId: string;
  providerNamespace: string;
}
export const OperationsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  providerNamespace: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/operations/default",
    apiVersion: "2024-09-01",
  }),
) as unknown as Schema.Codec<OperationsDeleteInput>;

// Output Schema
export type OperationsDeleteOutput = void;
export const OperationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<OperationsDeleteOutput>;

// The operation
/**
 * Deletes an operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const OperationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsDeleteInput,
  outputSchema: OperationsDeleteOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ProviderHub/operations",
    apiVersion: "2024-09-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name: string;
    isDataAction?: boolean;
    origin?: "NotSpecified" | "User" | "System";
    display: {
      provider: string;
      resource: string;
      operation: string;
      description: string;
    };
    actionType?: "NotSpecified" | "Internal";
    properties?: unknown;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        name: Schema.String,
        isDataAction: Schema.optional(Schema.Boolean),
        origin: Schema.optional(
          Schema.Literals(["NotSpecified", "User", "System"]),
        ),
        display: Schema.Struct({
          provider: Schema.String,
          resource: Schema.String,
          operation: Schema.String,
          description: Schema.String,
        }),
        actionType: Schema.optional(
          Schema.Literals(["NotSpecified", "Internal"]),
        ),
        properties: Schema.optional(Schema.Unknown),
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
export interface OperationsListByProviderRegistrationInput {
  subscriptionId: string;
  providerNamespace: string;
}
export const OperationsListByProviderRegistrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/operations/default",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<OperationsListByProviderRegistrationInput>;

// Output Schema
export type OperationsListByProviderRegistrationOutput = {
  name: string;
  isDataAction?: boolean;
  origin?: "NotSpecified" | "User" | "System";
  display: {
    provider: string;
    resource: string;
    operation: string;
    description: string;
  };
  actionType?: "NotSpecified" | "Internal";
  properties?: unknown;
}[];
export const OperationsListByProviderRegistrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      name: Schema.String,
      isDataAction: Schema.optional(Schema.Boolean),
      origin: Schema.optional(
        Schema.Literals(["NotSpecified", "User", "System"]),
      ),
      display: Schema.Struct({
        provider: Schema.String,
        resource: Schema.String,
        operation: Schema.String,
        description: Schema.String,
      }),
      actionType: Schema.optional(
        Schema.Literals(["NotSpecified", "Internal"]),
      ),
      properties: Schema.optional(Schema.Unknown),
    }),
  ) as unknown as Schema.Codec<OperationsListByProviderRegistrationOutput>;

// The operation
/**
 * Gets the operations supported by the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const OperationsListByProviderRegistration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OperationsListByProviderRegistrationInput,
    outputSchema: OperationsListByProviderRegistrationOutput,
  }));
// Input Schema
export interface ProviderMonitorSettingsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerMonitorSettingName: string;
  properties?: {
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "MovingResources"
      | "TransientFailure"
      | "RolloutInProgress";
  };
  tags?: Record<string, string>;
  location: string;
}
export const ProviderMonitorSettingsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerMonitorSettingName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "MovingResources",
            "TransientFailure",
            "RolloutInProgress",
          ]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ProviderHub/providerMonitorSettings/{providerMonitorSettingName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ProviderMonitorSettingsCreateInput>;

// Output Schema
export interface ProviderMonitorSettingsCreateOutput {
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
export const ProviderMonitorSettingsCreateOutput =
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
  }) as unknown as Schema.Codec<ProviderMonitorSettingsCreateOutput>;

// The operation
/**
 * Creates the provider monitor setting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param providerMonitorSettingName - The name of the provider monitor setting.
 */
export const ProviderMonitorSettingsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderMonitorSettingsCreateInput,
    outputSchema: ProviderMonitorSettingsCreateOutput,
  }));
// Input Schema
export interface ProviderMonitorSettingsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerMonitorSettingName: string;
}
export const ProviderMonitorSettingsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerMonitorSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ProviderHub/providerMonitorSettings/{providerMonitorSettingName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ProviderMonitorSettingsDeleteInput>;

// Output Schema
export type ProviderMonitorSettingsDeleteOutput = void;
export const ProviderMonitorSettingsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProviderMonitorSettingsDeleteOutput>;

// The operation
/**
 * Deletes a provider monitor setting.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param providerMonitorSettingName - The name of the provider monitor setting.
 */
export const ProviderMonitorSettingsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderMonitorSettingsDeleteInput,
    outputSchema: ProviderMonitorSettingsDeleteOutput,
  }));
// Input Schema
export interface ProviderMonitorSettingsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerMonitorSettingName: string;
}
export const ProviderMonitorSettingsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerMonitorSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ProviderHub/providerMonitorSettings/{providerMonitorSettingName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ProviderMonitorSettingsGetInput>;

// Output Schema
export interface ProviderMonitorSettingsGetOutput {
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
export const ProviderMonitorSettingsGetOutput =
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
  }) as unknown as Schema.Codec<ProviderMonitorSettingsGetOutput>;

// The operation
/**
 * Gets the provider monitor setting details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param providerMonitorSettingName - The name of the provider monitor setting.
 */
export const ProviderMonitorSettingsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderMonitorSettingsGetInput,
    outputSchema: ProviderMonitorSettingsGetOutput,
  }),
);
// Input Schema
export interface ProviderMonitorSettingsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const ProviderMonitorSettingsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ProviderHub/providerMonitorSettings",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ProviderMonitorSettingsListByResourceGroupInput>;

// Output Schema
export interface ProviderMonitorSettingsListByResourceGroupOutput {
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
export const ProviderMonitorSettingsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ProviderMonitorSettingsListByResourceGroupOutput>;

// The operation
/**
 * Gets the list of the provider monitor settings in the resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const ProviderMonitorSettingsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderMonitorSettingsListByResourceGroupInput,
    outputSchema: ProviderMonitorSettingsListByResourceGroupOutput,
  }));
// Input Schema
export interface ProviderMonitorSettingsListBySubscriptionInput {
  subscriptionId: string;
}
export const ProviderMonitorSettingsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerMonitorSettings",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ProviderMonitorSettingsListBySubscriptionInput>;

// Output Schema
export interface ProviderMonitorSettingsListBySubscriptionOutput {
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
export const ProviderMonitorSettingsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ProviderMonitorSettingsListBySubscriptionOutput>;

// The operation
/**
 * Gets the list of the provider monitor settings in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ProviderMonitorSettingsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderMonitorSettingsListBySubscriptionInput,
    outputSchema: ProviderMonitorSettingsListBySubscriptionOutput,
  }));
// Input Schema
export interface ProviderMonitorSettingsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  providerMonitorSettingName: string;
}
export const ProviderMonitorSettingsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    providerMonitorSettingName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ProviderHub/providerMonitorSettings/{providerMonitorSettingName}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ProviderMonitorSettingsUpdateInput>;

// Output Schema
export interface ProviderMonitorSettingsUpdateOutput {
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
export const ProviderMonitorSettingsUpdateOutput =
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
  }) as unknown as Schema.Codec<ProviderMonitorSettingsUpdateOutput>;

// The operation
/**
 * Updates the provider monitor setting properties as specified in the request body. Update fails if the specified provider monitor setting does not already exist.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param providerMonitorSettingName - The name of the provider monitor setting.
 */
export const ProviderMonitorSettingsUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderMonitorSettingsUpdateInput,
    outputSchema: ProviderMonitorSettingsUpdateOutput,
  }));
// Input Schema
export interface ProviderRegistrationsCreateOrUpdateInput {
  subscriptionId: string;
  providerNamespace: string;
  properties?: {
    providerAuthentication?: { allowedAudiences: string[] };
    providerAuthorizations?: {
      applicationId?: string;
      roleDefinitionId?: string;
      managedByRoleDefinitionId?: string;
      managedByAuthorization?: {
        additionalAuthorizations?: {
          applicationId?: string;
          roleDefinitionId?: string;
        }[];
        managedByResourceRoleDefinitionId?: string;
        allowManagedByInheritance?: boolean;
      };
      allowedThirdPartyExtensions?: { name?: string }[];
      groupingTag?: string;
    }[];
    namespace?: string;
    services?: { serviceName?: string; status?: "Active" | "Inactive" }[];
    serviceName?: string;
    providerVersion?: string;
    providerType?:
      | "NotSpecified"
      | "Internal"
      | "External"
      | "Hidden"
      | "RegistrationFree"
      | "LegacyRegistrationRequired"
      | "TenantOnly"
      | "AuthorizationFree";
    requiredFeatures?: string[];
    featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
    requestHeaderOptions?: {
      optInHeaders?:
        | "NotSpecified"
        | "SignedUserToken"
        | "ClientGroupMembership"
        | "SignedAuxiliaryTokens"
        | "UnboundedClientGroupMembership"
        | "PrivateLinkId"
        | "PrivateLinkResourceId"
        | "ManagementGroupAncestorsEncoded"
        | "PrivateLinkVnetTrafficTag"
        | "ResourceGroupLocation"
        | "ClientPrincipalNameEncoded"
        | "MSIResourceIdEncoded";
      optOutHeaders?: "NotSpecified" | "SystemDataCreatedByLastModifiedBy";
    };
    management?: {
      schemaOwners?: string[];
      manifestOwners?: string[];
      authorizationOwners?: string[];
      incidentRoutingService?: string;
      incidentRoutingTeam?: string;
      incidentContactEmail?: string;
      serviceTreeInfos?: {
        serviceId?: string;
        componentId?: string;
        readiness?:
          | "ClosingDown"
          | "Deprecated"
          | "GA"
          | "InDevelopment"
          | "InternalOnly"
          | "PrivatePreview"
          | "PublicPreview"
          | "RemovedFromARM"
          | "Retired";
      }[];
      resourceAccessPolicy?:
        | "NotSpecified"
        | "AcisReadAllowed"
        | "AcisActionAllowed";
      resourceAccessRoles?: {
        allowedGroupClaims?: string[];
        actions?: string[];
      }[];
      expeditedRolloutSubmitters?: string[];
      errorResponseMessageOptions?: {
        serverFailureResponseMessageType?: "NotSpecified" | "OutageReporting";
      };
      expeditedRolloutMetadata?: {
        enabled?: boolean;
        expeditedRolloutIntent?: "NotSpecified" | "Hotfix";
      };
      canaryManifestOwners?: string[];
      pcCode?: string;
      profitCenterProgramId?: string;
    };
    capabilities?: {
      quotaId: string;
      effect: "NotSpecified" | "Allow" | "Disallow";
      requiredFeatures?: string[];
    }[];
    crossTenantTokenValidation?:
      | "EnsureSecureValidation"
      | "PassthroughInsecureToken";
    metadata?: unknown;
    templateDeploymentOptions?: {
      preflightSupported?: boolean;
      preflightOptions?: (
        | "None"
        | "ContinueDeploymentOnFailure"
        | "DefaultValidationOnly"
      )[];
    };
    globalNotificationEndpoints?: {
      enabled?: boolean;
      apiVersions?: string[];
      endpointUri?: string;
      locations?: string[];
      requiredFeatures?: string[];
      featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
      timeout?: string;
      endpointType?:
        | "NotSpecified"
        | "Canary"
        | "Production"
        | "TestInProduction";
      skuLink?: string;
    }[];
    enableTenantLinkedNotification?: boolean | null;
    notifications?: {
      notificationType?: "Unspecified" | "SubscriptionNotification";
      skipNotifications?: "Unspecified" | "Enabled" | "Disabled";
    }[];
    linkedNotificationRules?: {
      tokenAuthConfiguration?: {
        authenticationScheme?: "PoP" | "Bearer";
        signedRequestScope?: "ResourceUri" | "Endpoint";
        disableCertificateAuthenticationFallback?: boolean;
      };
      actions?: string[];
      endpoints?: {
        enabled?: boolean;
        apiVersions?: string[];
        endpointUri?: string;
        locations?: string[];
        requiredFeatures?: string[];
        featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
        timeout?: string;
        endpointType?:
          | "NotSpecified"
          | "Canary"
          | "Production"
          | "TestInProduction";
        skuLink?: string;
      }[];
      dstsConfiguration?: { serviceName: string; serviceDnsName?: string };
    }[];
    resourceProviderAuthorizationRules?: {
      asyncOperationPollingRules?: {
        authorizationActions?: string[];
        additionalOptions?:
          | "ProtectedAsyncOperationPolling"
          | "ProtectedAsyncOperationPollingAuditOnly";
      };
    };
    dstsConfiguration?: { serviceName: string; serviceDnsName?: string };
    notificationOptions?: "NotSpecified" | "None" | "EmitSpendingLimit";
    resourceHydrationAccounts?: {
      maxChildResourceConsistencyJobLimit?: number;
      encryptedKey?: string;
      accountName?: string;
      subscriptionId?: string;
    }[];
    notificationSettings?: {
      subscriberSettings?: {
        filterRules?: {
          filterQuery?: string;
          endpointInformation?: {
            endpoint?: string;
            endpointType?: "Webhook" | "Eventhub";
            schemaVersion?: string;
          }[];
        }[];
      }[];
    };
    managementGroupGlobalNotificationEndpoints?: {
      enabled?: boolean;
      apiVersions?: string[];
      endpointUri?: string;
      locations?: string[];
      requiredFeatures?: string[];
      featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
      timeout?: string;
      endpointType?:
        | "NotSpecified"
        | "Canary"
        | "Production"
        | "TestInProduction";
      skuLink?: string;
    }[];
    optionalFeatures?: string[];
    resourceGroupLockOptionDuringMove?: {
      blockActionVerb?:
        | "NotSpecified"
        | "Read"
        | "Write"
        | "Action"
        | "Delete"
        | "Unrecognized";
    };
    responseOptions?: {
      serviceClientOptionsType?:
        | "NotSpecified"
        | "DisableAutomaticDecompression";
    };
    legacyNamespace?: string;
    legacyRegistrations?: string[];
    customManifestVersion?: string;
  };
  kind?: "Managed" | "Hybrid" | "Direct";
}
export const ProviderRegistrationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        providerAuthentication: Schema.optional(
          Schema.Struct({
            allowedAudiences: Schema.Array(Schema.String),
          }),
        ),
        providerAuthorizations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              applicationId: Schema.optional(Schema.String),
              roleDefinitionId: Schema.optional(Schema.String),
              managedByRoleDefinitionId: Schema.optional(Schema.String),
              managedByAuthorization: Schema.optional(
                Schema.Struct({
                  additionalAuthorizations: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        applicationId: Schema.optional(Schema.String),
                        roleDefinitionId: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  managedByResourceRoleDefinitionId: Schema.optional(
                    Schema.String,
                  ),
                  allowManagedByInheritance: Schema.optional(Schema.Boolean),
                }),
              ),
              allowedThirdPartyExtensions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                  }),
                ),
              ),
              groupingTag: Schema.optional(Schema.String),
            }),
          ),
        ),
        namespace: Schema.optional(Schema.String),
        services: Schema.optional(
          Schema.Array(
            Schema.Struct({
              serviceName: Schema.optional(Schema.String),
              status: Schema.optional(Schema.Literals(["Active", "Inactive"])),
            }),
          ),
        ),
        serviceName: Schema.optional(Schema.String),
        providerVersion: Schema.optional(Schema.String),
        providerType: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Internal",
            "External",
            "Hidden",
            "RegistrationFree",
            "LegacyRegistrationRequired",
            "TenantOnly",
            "AuthorizationFree",
          ]),
        ),
        requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
        featuresRule: Schema.optional(
          Schema.Struct({
            requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
          }),
        ),
        requestHeaderOptions: Schema.optional(
          Schema.Struct({
            optInHeaders: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "SignedUserToken",
                "ClientGroupMembership",
                "SignedAuxiliaryTokens",
                "UnboundedClientGroupMembership",
                "PrivateLinkId",
                "PrivateLinkResourceId",
                "ManagementGroupAncestorsEncoded",
                "PrivateLinkVnetTrafficTag",
                "ResourceGroupLocation",
                "ClientPrincipalNameEncoded",
                "MSIResourceIdEncoded",
              ]),
            ),
            optOutHeaders: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "SystemDataCreatedByLastModifiedBy",
              ]),
            ),
          }),
        ),
        management: Schema.optional(
          Schema.Struct({
            schemaOwners: Schema.optional(Schema.Array(Schema.String)),
            manifestOwners: Schema.optional(Schema.Array(Schema.String)),
            authorizationOwners: Schema.optional(Schema.Array(Schema.String)),
            incidentRoutingService: Schema.optional(Schema.String),
            incidentRoutingTeam: Schema.optional(Schema.String),
            incidentContactEmail: Schema.optional(Schema.String),
            serviceTreeInfos: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  serviceId: Schema.optional(Schema.String),
                  componentId: Schema.optional(Schema.String),
                  readiness: Schema.optional(
                    Schema.Literals([
                      "ClosingDown",
                      "Deprecated",
                      "GA",
                      "InDevelopment",
                      "InternalOnly",
                      "PrivatePreview",
                      "PublicPreview",
                      "RemovedFromARM",
                      "Retired",
                    ]),
                  ),
                }),
              ),
            ),
            resourceAccessPolicy: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "AcisReadAllowed",
                "AcisActionAllowed",
              ]),
            ),
            resourceAccessRoles: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  allowedGroupClaims: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  actions: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
            expeditedRolloutSubmitters: Schema.optional(
              Schema.Array(Schema.String),
            ),
            errorResponseMessageOptions: Schema.optional(
              Schema.Struct({
                serverFailureResponseMessageType: Schema.optional(
                  Schema.Literals(["NotSpecified", "OutageReporting"]),
                ),
              }),
            ),
            expeditedRolloutMetadata: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                expeditedRolloutIntent: Schema.optional(
                  Schema.Literals(["NotSpecified", "Hotfix"]),
                ),
              }),
            ),
            canaryManifestOwners: Schema.optional(Schema.Array(Schema.String)),
            pcCode: Schema.optional(Schema.String),
            profitCenterProgramId: Schema.optional(Schema.String),
          }),
        ),
        capabilities: Schema.optional(
          Schema.Array(
            Schema.Struct({
              quotaId: Schema.String,
              effect: Schema.Literals(["NotSpecified", "Allow", "Disallow"]),
              requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        crossTenantTokenValidation: Schema.optional(
          Schema.Literals([
            "EnsureSecureValidation",
            "PassthroughInsecureToken",
          ]),
        ),
        metadata: Schema.optional(Schema.Unknown),
        templateDeploymentOptions: Schema.optional(
          Schema.Struct({
            preflightSupported: Schema.optional(Schema.Boolean),
            preflightOptions: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "None",
                  "ContinueDeploymentOnFailure",
                  "DefaultValidationOnly",
                ]),
              ),
            ),
          }),
        ),
        globalNotificationEndpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              enabled: Schema.optional(Schema.Boolean),
              apiVersions: Schema.optional(Schema.Array(Schema.String)),
              endpointUri: Schema.optional(Schema.String),
              locations: Schema.optional(Schema.Array(Schema.String)),
              requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
              featuresRule: Schema.optional(
                Schema.Struct({
                  requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
                }),
              ),
              timeout: Schema.optional(Schema.String),
              endpointType: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "Canary",
                  "Production",
                  "TestInProduction",
                ]),
              ),
              skuLink: Schema.optional(Schema.String),
            }),
          ),
        ),
        enableTenantLinkedNotification: Schema.optional(
          Schema.NullOr(Schema.Boolean),
        ),
        notifications: Schema.optional(
          Schema.Array(
            Schema.Struct({
              notificationType: Schema.optional(
                Schema.Literals(["Unspecified", "SubscriptionNotification"]),
              ),
              skipNotifications: Schema.optional(
                Schema.Literals(["Unspecified", "Enabled", "Disabled"]),
              ),
            }),
          ),
        ),
        linkedNotificationRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              tokenAuthConfiguration: Schema.optional(
                Schema.Struct({
                  authenticationScheme: Schema.optional(
                    Schema.Literals(["PoP", "Bearer"]),
                  ),
                  signedRequestScope: Schema.optional(
                    Schema.Literals(["ResourceUri", "Endpoint"]),
                  ),
                  disableCertificateAuthenticationFallback: Schema.optional(
                    Schema.Boolean,
                  ),
                }),
              ),
              actions: Schema.optional(Schema.Array(Schema.String)),
              endpoints: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                    apiVersions: Schema.optional(Schema.Array(Schema.String)),
                    endpointUri: Schema.optional(Schema.String),
                    locations: Schema.optional(Schema.Array(Schema.String)),
                    requiredFeatures: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    featuresRule: Schema.optional(
                      Schema.Struct({
                        requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
                      }),
                    ),
                    timeout: Schema.optional(Schema.String),
                    endpointType: Schema.optional(
                      Schema.Literals([
                        "NotSpecified",
                        "Canary",
                        "Production",
                        "TestInProduction",
                      ]),
                    ),
                    skuLink: Schema.optional(Schema.String),
                  }),
                ),
              ),
              dstsConfiguration: Schema.optional(
                Schema.Struct({
                  serviceName: Schema.String,
                  serviceDnsName: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
        resourceProviderAuthorizationRules: Schema.optional(
          Schema.Struct({
            asyncOperationPollingRules: Schema.optional(
              Schema.Struct({
                authorizationActions: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                additionalOptions: Schema.optional(
                  Schema.Literals([
                    "ProtectedAsyncOperationPolling",
                    "ProtectedAsyncOperationPollingAuditOnly",
                  ]),
                ),
              }),
            ),
          }),
        ),
        dstsConfiguration: Schema.optional(
          Schema.Struct({
            serviceName: Schema.String,
            serviceDnsName: Schema.optional(Schema.String),
          }),
        ),
        notificationOptions: Schema.optional(
          Schema.Literals(["NotSpecified", "None", "EmitSpendingLimit"]),
        ),
        resourceHydrationAccounts: Schema.optional(
          Schema.Array(
            Schema.Struct({
              maxChildResourceConsistencyJobLimit: Schema.optional(
                Schema.Number,
              ),
              encryptedKey: Schema.optional(Schema.String),
              accountName: Schema.optional(Schema.String),
              subscriptionId: Schema.optional(Schema.String),
            }),
          ),
        ),
        notificationSettings: Schema.optional(
          Schema.Struct({
            subscriberSettings: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  filterRules: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        filterQuery: Schema.optional(Schema.String),
                        endpointInformation: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              endpoint: Schema.optional(Schema.String),
                              endpointType: Schema.optional(
                                Schema.Literals(["Webhook", "Eventhub"]),
                              ),
                              schemaVersion: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                      }),
                    ),
                  ),
                }),
              ),
            ),
          }),
        ),
        managementGroupGlobalNotificationEndpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              enabled: Schema.optional(Schema.Boolean),
              apiVersions: Schema.optional(Schema.Array(Schema.String)),
              endpointUri: Schema.optional(Schema.String),
              locations: Schema.optional(Schema.Array(Schema.String)),
              requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
              featuresRule: Schema.optional(
                Schema.Struct({
                  requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
                }),
              ),
              timeout: Schema.optional(Schema.String),
              endpointType: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "Canary",
                  "Production",
                  "TestInProduction",
                ]),
              ),
              skuLink: Schema.optional(Schema.String),
            }),
          ),
        ),
        optionalFeatures: Schema.optional(Schema.Array(Schema.String)),
        resourceGroupLockOptionDuringMove: Schema.optional(
          Schema.Struct({
            blockActionVerb: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "Read",
                "Write",
                "Action",
                "Delete",
                "Unrecognized",
              ]),
            ),
          }),
        ),
        responseOptions: Schema.optional(
          Schema.Struct({
            serviceClientOptionsType: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "DisableAutomaticDecompression",
              ]),
            ),
          }),
        ),
        legacyNamespace: Schema.optional(Schema.String),
        legacyRegistrations: Schema.optional(Schema.Array(Schema.String)),
        customManifestVersion: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.Literals(["Managed", "Hybrid", "Direct"])),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ProviderRegistrationsCreateOrUpdateInput>;

// Output Schema
export interface ProviderRegistrationsCreateOrUpdateOutput {
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
export const ProviderRegistrationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ProviderRegistrationsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the provider registration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const ProviderRegistrationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderRegistrationsCreateOrUpdateInput,
    outputSchema: ProviderRegistrationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ProviderRegistrationsDeleteInput {
  subscriptionId: string;
  providerNamespace: string;
}
export const ProviderRegistrationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ProviderRegistrationsDeleteInput>;

// Output Schema
export type ProviderRegistrationsDeleteOutput = void;
export const ProviderRegistrationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ProviderRegistrationsDeleteOutput>;

// The operation
/**
 * Deletes a provider registration.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const ProviderRegistrationsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderRegistrationsDeleteInput,
    outputSchema: ProviderRegistrationsDeleteOutput,
  }),
);
// Input Schema
export interface ProviderRegistrationsGenerateOperationsInput {
  subscriptionId: string;
  providerNamespace: string;
}
export const ProviderRegistrationsGenerateOperationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/generateOperations",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ProviderRegistrationsGenerateOperationsInput>;

// Output Schema
export type ProviderRegistrationsGenerateOperationsOutput = {
  name: string;
  isDataAction?: boolean;
  origin?: "NotSpecified" | "User" | "System";
  display: {
    provider: string;
    resource: string;
    operation: string;
    description: string;
  };
  actionType?: "NotSpecified" | "Internal";
  properties?: unknown;
}[];
export const ProviderRegistrationsGenerateOperationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      name: Schema.String,
      isDataAction: Schema.optional(Schema.Boolean),
      origin: Schema.optional(
        Schema.Literals(["NotSpecified", "User", "System"]),
      ),
      display: Schema.Struct({
        provider: Schema.String,
        resource: Schema.String,
        operation: Schema.String,
        description: Schema.String,
      }),
      actionType: Schema.optional(
        Schema.Literals(["NotSpecified", "Internal"]),
      ),
      properties: Schema.optional(Schema.Unknown),
    }),
  ) as unknown as Schema.Codec<ProviderRegistrationsGenerateOperationsOutput>;

// The operation
/**
 * Generates the operations api for the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const ProviderRegistrationsGenerateOperations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProviderRegistrationsGenerateOperationsInput,
    outputSchema: ProviderRegistrationsGenerateOperationsOutput,
  }));
// Input Schema
export interface ProviderRegistrationsGetInput {
  subscriptionId: string;
  providerNamespace: string;
}
export const ProviderRegistrationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ProviderRegistrationsGetInput>;

// Output Schema
export interface ProviderRegistrationsGetOutput {
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
export const ProviderRegistrationsGetOutput =
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
  }) as unknown as Schema.Codec<ProviderRegistrationsGetOutput>;

// The operation
/**
 * Gets the provider registration details.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const ProviderRegistrationsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderRegistrationsGetInput,
    outputSchema: ProviderRegistrationsGetOutput,
  }),
);
// Input Schema
export interface ProviderRegistrationsListInput {
  subscriptionId: string;
}
export const ProviderRegistrationsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ProviderRegistrationsListInput>;

// Output Schema
export interface ProviderRegistrationsListOutput {
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
export const ProviderRegistrationsListOutput =
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
  }) as unknown as Schema.Codec<ProviderRegistrationsListOutput>;

// The operation
/**
 * Gets the list of the provider registrations in the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ProviderRegistrationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProviderRegistrationsListInput,
    outputSchema: ProviderRegistrationsListOutput,
  }),
);
// Input Schema
export interface ResourceActionsDeleteResourcesInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceActionName: string;
  resources?: {
    resourceId: string;
    homeTenantId?: string;
    location?: string;
    status?: string;
  }[];
}
export const ResourceActionsDeleteResourcesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceActionName: Schema.String.pipe(T.PathParam()),
    resources: Schema.optional(
      Schema.Array(
        Schema.Struct({
          resourceId: Schema.String,
          homeTenantId: Schema.optional(Schema.String),
          location: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourceActions/{resourceActionName}/deleteResources",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ResourceActionsDeleteResourcesInput>;

// Output Schema
export type ResourceActionsDeleteResourcesOutput = void;
export const ResourceActionsDeleteResourcesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ResourceActionsDeleteResourcesOutput>;

// The operation
/**
 * Deletes resources.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceActionName - The resource action name.
 */
export const ResourceActionsDeleteResources =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResourceActionsDeleteResourcesInput,
    outputSchema: ResourceActionsDeleteResourcesOutput,
  }));
// Input Schema
export interface ResourceTypeRegistrationsCreateOrUpdateInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  properties?: {
    routingType?:
      | "Default"
      | "ProxyOnly"
      | "HostBased"
      | "Extension"
      | "Tenant"
      | "Fanout"
      | "LocationBased"
      | "Failover"
      | "CascadeExtension"
      | "ChildFanout"
      | "CascadeAuthorizedExtension"
      | "BypassEndpointSelectionOptimization"
      | "LocationMapping"
      | "ServiceFanout";
    additionalOptions?:
      | "ProtectedAsyncOperationPolling"
      | "ProtectedAsyncOperationPollingAuditOnly";
    crossTenantTokenValidation?:
      | "EnsureSecureValidation"
      | "PassthroughInsecureToken";
    regionality?: "NotSpecified" | "Global" | "Regional";
    endpoints?: {
      kind?: "Managed" | "Direct";
      enabled?: boolean;
      apiVersions?: string[];
      locations?: string[];
      requiredFeatures?: string[];
      featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
      extensions?: {
        endpointUri?: string;
        extensionCategories?: (
          | "NotSpecified"
          | "ResourceCreationValidate"
          | "ResourceCreationBegin"
          | "ResourceCreationCompleted"
          | "ResourceReadValidate"
          | "ResourceReadBegin"
          | "ResourcePatchValidate"
          | "ResourcePatchCompleted"
          | "ResourceDeletionValidate"
          | "ResourceDeletionBegin"
          | "ResourceDeletionCompleted"
          | "ResourcePostAction"
          | "SubscriptionLifecycleNotification"
          | "ResourcePatchBegin"
          | "ResourceMoveBegin"
          | "ResourceMoveCompleted"
          | "BestMatchOperationBegin"
          | "SubscriptionLifecycleNotificationDeletion"
        )[];
        timeout?: string;
      }[];
      timeout?: string;
      endpointType?:
        | "NotSpecified"
        | "Canary"
        | "Production"
        | "TestInProduction";
      tokenAuthConfiguration?: {
        authenticationScheme?: "PoP" | "Bearer";
        signedRequestScope?: "ResourceUri" | "Endpoint";
        disableCertificateAuthenticationFallback?: boolean;
      };
      skuLink?: string;
      endpointUri?: string;
      apiVersion?: string;
      zones?: string[];
      dstsConfiguration?: { serviceName: string; serviceDnsName?: string };
      dataBoundary?: "NotDefined" | "Global" | "EU" | "US";
    }[];
    extensionOptions?: {
      resourceCreationBegin?: {
        request?: (
          | "NotSpecified"
          | "DoNotMergeExistingReadOnlyAndSecretProperties"
          | "IncludeInternalMetadata"
        )[];
        response?: (
          | "NotSpecified"
          | "DoNotMergeExistingReadOnlyAndSecretProperties"
          | "IncludeInternalMetadata"
        )[];
      };
    };
    marketplaceType?: "NotSpecified" | "AddOn" | "Bypass" | "Store";
    swaggerSpecifications?: {
      apiVersions?: string[];
      swaggerSpecFolderUri?: string;
    }[];
    allowedUnauthorizedActions?: string[];
    allowedUnauthorizedActionsExtensions?: {
      action?: string;
      intent?:
        | "NOT_SPECIFIED"
        | "LOW_PRIVILEGE"
        | "DEFERRED_ACCESS_CHECK"
        | "RP_CONTRACT";
    }[];
    authorizationActionMappings?: { original?: string; desired?: string }[];
    linkedAccessChecks?: {
      actionName?: string;
      linkedProperty?: string;
      linkedAction?: string;
      linkedActionVerb?: string;
      linkedType?: string;
    }[];
    defaultApiVersion?: string;
    loggingRules?: {
      action: string;
      direction: "None" | "Request" | "Response";
      detailLevel: "None" | "Body";
      hiddenPropertyPaths?: {
        hiddenPathsOnRequest?: string[];
        hiddenPathsOnResponse?: string[];
      };
    }[];
    throttlingRules?: {
      action: string;
      metrics: {
        type: "NotSpecified" | "NumberOfRequests" | "NumberOfResources";
        limit: number;
        interval?: string;
      }[];
      requiredFeatures?: string[];
      applicationId?: string[];
    }[];
    requiredFeatures?: string[];
    featuresRule?: { requiredFeaturesPolicy: "Any" | "All" };
    enableAsyncOperation?: boolean;
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "MovingResources"
      | "TransientFailure"
      | "RolloutInProgress";
    enableThirdPartyS2S?: boolean;
    subscriptionLifecycleNotificationSpecifications?: {
      subscriptionStateOverrideActions?: {
        state:
          | "Registered"
          | "Unregistered"
          | "Warned"
          | "Suspended"
          | "Deleted"
          | "WarnedToRegistered"
          | "WarnedToSuspended"
          | "WarnedToDeleted"
          | "WarnedToUnregistered"
          | "SuspendedToRegistered"
          | "SuspendedToWarned"
          | "SuspendedToDeleted"
          | "SuspendedToUnregistered";
        action:
          | "NotDefined"
          | "DeleteAllResources"
          | "SoftDeleteAllResources"
          | "NoOp"
          | "BillingCancellation"
          | "UndoSoftDelete";
      }[];
      softDeleteTTL?: string;
    };
    isPureProxy?: boolean;
    identityManagement?: {
      type?:
        | "NotSpecified"
        | "SystemAssigned"
        | "UserAssigned"
        | "Actor"
        | "DelegatedResourceIdentity";
      applicationId?: string;
      applicationIds?: string[];
      delegationAppIds?: string[];
    };
    checkNameAvailabilitySpecifications?: {
      enableDefaultValidation?: boolean;
      resourceTypesWithCustomValidation?: string[];
    };
    disallowedActionVerbs?: string[];
    serviceTreeInfos?: {
      serviceId?: string;
      componentId?: string;
      readiness?:
        | "ClosingDown"
        | "Deprecated"
        | "GA"
        | "InDevelopment"
        | "InternalOnly"
        | "PrivatePreview"
        | "PublicPreview"
        | "RemovedFromARM"
        | "Retired";
    }[];
    requestHeaderOptions?: {
      optInHeaders?:
        | "NotSpecified"
        | "SignedUserToken"
        | "ClientGroupMembership"
        | "SignedAuxiliaryTokens"
        | "UnboundedClientGroupMembership"
        | "PrivateLinkId"
        | "PrivateLinkResourceId"
        | "ManagementGroupAncestorsEncoded"
        | "PrivateLinkVnetTrafficTag"
        | "ResourceGroupLocation"
        | "ClientPrincipalNameEncoded"
        | "MSIResourceIdEncoded";
      optOutHeaders?: "NotSpecified" | "SystemDataCreatedByLastModifiedBy";
    };
    subscriptionStateRules?: {
      state?:
        | "NotDefined"
        | "Enabled"
        | "Warned"
        | "PastDue"
        | "Disabled"
        | "Deleted";
      allowedActions?: string[];
    }[];
    templateDeploymentOptions?: {
      preflightSupported?: boolean;
      preflightOptions?: (
        | "None"
        | "ContinueDeploymentOnFailure"
        | "DefaultValidationOnly"
      )[];
    };
    extendedLocations?: {
      type?: "NotSpecified" | "CustomLocation" | "EdgeZone" | "ArcZone";
      supportedPolicy?: "NotSpecified" | "All";
    }[];
    resourceMovePolicy?: {
      validationRequired?: boolean;
      crossResourceGroupMoveEnabled?: boolean;
      crossSubscriptionMoveEnabled?: boolean;
    };
    resourceDeletionPolicy?:
      | "NotSpecified"
      | "CascadeDeleteAll"
      | "CascadeDeleteProxyOnlyChildren";
    resourceConcurrencyControlOptions?: Record<
      string,
      { policy?: "NotSpecified" | "SynchronizeBeginExtension" }
    >;
    resourceGraphConfiguration?: { enabled?: boolean; apiVersion?: string };
    management?: {
      schemaOwners?: string[];
      manifestOwners?: string[];
      authorizationOwners?: string[];
      incidentRoutingService?: string;
      incidentRoutingTeam?: string;
      incidentContactEmail?: string;
      serviceTreeInfos?: {
        serviceId?: string;
        componentId?: string;
        readiness?:
          | "ClosingDown"
          | "Deprecated"
          | "GA"
          | "InDevelopment"
          | "InternalOnly"
          | "PrivatePreview"
          | "PublicPreview"
          | "RemovedFromARM"
          | "Retired";
      }[];
      resourceAccessPolicy?:
        | "NotSpecified"
        | "AcisReadAllowed"
        | "AcisActionAllowed";
      resourceAccessRoles?: {
        allowedGroupClaims?: string[];
        actions?: string[];
      }[];
      expeditedRolloutSubmitters?: string[];
      errorResponseMessageOptions?: {
        serverFailureResponseMessageType?: "NotSpecified" | "OutageReporting";
      };
      expeditedRolloutMetadata?: {
        enabled?: boolean;
        expeditedRolloutIntent?: "NotSpecified" | "Hotfix";
      };
      canaryManifestOwners?: string[];
      pcCode?: string;
      profitCenterProgramId?: string;
    };
    openApiConfiguration?: {
      validation?: { allowNoncompliantCollectionResponse?: boolean };
    };
    onBehalfOfTokens?: { actionName?: string; lifeTime?: string };
    category?: "None" | "FreeForm" | "Internal" | "PureProxy";
    resourceValidation?: "NotSpecified" | "ReservedWords" | "ProfaneWords";
    disallowedEndUserOperations?: string[];
    metadata?: Record<string, unknown>;
    skuLink?: string;
    quotaRule?: {
      quotaPolicy?: "Default" | "None" | "Restricted";
      locationRules?: {
        policy?: "Default" | "None" | "Restricted";
        quotaId?: string;
        location?: string;
      }[];
      requiredFeatures?: string[];
    };
    notifications?: {
      notificationType?: "Unspecified" | "SubscriptionNotification";
      skipNotifications?: "Unspecified" | "Enabled" | "Disabled";
    }[];
    linkedNotificationRules?: {
      actions?: string[];
      actionsOnFailedOperation?: string[];
      fastPathActions?: string[];
      fastPathActionsOnFailedOperation?: string[];
      linkedNotificationTimeout?: string;
    }[];
    resourceProviderAuthorizationRules?: {
      asyncOperationPollingRules?: {
        authorizationActions?: string[];
        additionalOptions?:
          | "ProtectedAsyncOperationPolling"
          | "ProtectedAsyncOperationPollingAuditOnly";
      };
    };
    tokenAuthConfiguration?: {
      authenticationScheme?: "PoP" | "Bearer";
      signedRequestScope?: "ResourceUri" | "Endpoint";
      disableCertificateAuthenticationFallback?: boolean;
    };
    templateDeploymentPolicy?: {
      capabilities: "Default" | "Preflight";
      preflightOptions:
        | "None"
        | "ValidationRequests"
        | "DeploymentRequests"
        | "TestOnly"
        | "RegisteredOnly";
      preflightNotifications?: "None" | "UnregisteredSubscriptions";
    };
    allowEmptyRoleAssignments?: boolean;
    policyExecutionType?:
      | "NotSpecified"
      | "ExecutePolicies"
      | "BypassPolicies"
      | "ExpectPartialPutRequests";
    availabilityZoneRule?: {
      availabilityZonePolicy?: "NotSpecified" | "SingleZoned" | "MultiZoned";
    };
    dstsConfiguration?: { serviceName: string; serviceDnsName?: string };
    asyncTimeoutRules?: { actionName?: string; timeout?: string }[];
    commonApiVersions?: string[];
    apiProfiles?: { profileVersion?: string; apiVersion?: string }[];
    linkedOperationRules?: {
      linkedOperation:
        | "None"
        | "CrossResourceGroupResourceMove"
        | "CrossSubscriptionResourceMove";
      linkedAction: "NotSpecified" | "Blocked" | "Validate" | "Enabled";
      dependsOnTypes?: string[];
    }[];
    legacyName?: string;
    legacyNames?: string[];
    allowedTemplateDeploymentReferenceActions?: string[];
    legacyPolicy?: {
      disallowedLegacyOperations?: (
        | "NotSpecified"
        | "Create"
        | "Delete"
        | "Waiting"
        | "AzureAsyncOperationWaiting"
        | "ResourceCacheWaiting"
        | "Action"
        | "Read"
        | "EvaluateDeploymentOutput"
        | "DeploymentCleanup"
      )[];
      disallowedConditions?: {
        disallowedLegacyOperations?: (
          | "NotSpecified"
          | "Create"
          | "Delete"
          | "Waiting"
          | "AzureAsyncOperationWaiting"
          | "ResourceCacheWaiting"
          | "Action"
          | "Read"
          | "EvaluateDeploymentOutput"
          | "DeploymentCleanup"
        )[];
        feature?: string;
      }[];
    };
    manifestLink?: string;
    capacityRule?: {
      capacityPolicy?: "Default" | "Restricted";
      skuAlias?: string;
    };
    marketplaceOptions?: { addOnPlanConversionAllowed?: boolean };
    allowedResourceNames?: { name?: string; getActionVerb?: string }[];
    resourceCache?: {
      enableResourceCache?: boolean;
      resourceCacheExpirationTimespan?: string;
    };
    resourceQueryManagement?: {
      filterOption?: "NotSpecified" | "EnableSubscriptionFilterOnTenant";
    };
    supportsTags?: boolean;
    resourceManagementOptions?: {
      batchProvisioningSupport?: {
        supportedOperations?: "NotSpecified" | "Get" | "Delete";
      };
      deleteDependencies?: {
        requiredFeatures?: string[];
        linkedProperty?: string;
        linkedType?: string;
      }[];
      nestedProvisioningSupport?: { minimumApiVersion?: string };
    };
    groupingTag?: string;
    addResourceListTargetLocations?: boolean;
    resourceTypeCommonAttributeManagement?: {
      commonApiVersionsMergeMode?: "Merge" | "Overwrite";
    };
    routingRule?: { hostResourceType?: string };
    frontdoorRequestMode?: "NotSpecified" | "UseManifest";
    resourceSubType?: "NotSpecified" | "AsyncOperation";
    asyncOperationResourceTypeName?: string;
  };
  kind?: "Managed" | "Hybrid" | "Direct";
}
export const ResourceTypeRegistrationsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        routingType: Schema.optional(
          Schema.Literals([
            "Default",
            "ProxyOnly",
            "HostBased",
            "Extension",
            "Tenant",
            "Fanout",
            "LocationBased",
            "Failover",
            "CascadeExtension",
            "ChildFanout",
            "CascadeAuthorizedExtension",
            "BypassEndpointSelectionOptimization",
            "LocationMapping",
            "ServiceFanout",
          ]),
        ),
        additionalOptions: Schema.optional(
          Schema.Literals([
            "ProtectedAsyncOperationPolling",
            "ProtectedAsyncOperationPollingAuditOnly",
          ]),
        ),
        crossTenantTokenValidation: Schema.optional(
          Schema.Literals([
            "EnsureSecureValidation",
            "PassthroughInsecureToken",
          ]),
        ),
        regionality: Schema.optional(
          Schema.Literals(["NotSpecified", "Global", "Regional"]),
        ),
        endpoints: Schema.optional(
          Schema.Array(
            Schema.Struct({
              kind: Schema.optional(Schema.Literals(["Managed", "Direct"])),
              enabled: Schema.optional(Schema.Boolean),
              apiVersions: Schema.optional(Schema.Array(Schema.String)),
              locations: Schema.optional(Schema.Array(Schema.String)),
              requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
              featuresRule: Schema.optional(
                Schema.Struct({
                  requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
                }),
              ),
              extensions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    endpointUri: Schema.optional(Schema.String),
                    extensionCategories: Schema.optional(
                      Schema.Array(
                        Schema.Literals([
                          "NotSpecified",
                          "ResourceCreationValidate",
                          "ResourceCreationBegin",
                          "ResourceCreationCompleted",
                          "ResourceReadValidate",
                          "ResourceReadBegin",
                          "ResourcePatchValidate",
                          "ResourcePatchCompleted",
                          "ResourceDeletionValidate",
                          "ResourceDeletionBegin",
                          "ResourceDeletionCompleted",
                          "ResourcePostAction",
                          "SubscriptionLifecycleNotification",
                          "ResourcePatchBegin",
                          "ResourceMoveBegin",
                          "ResourceMoveCompleted",
                          "BestMatchOperationBegin",
                          "SubscriptionLifecycleNotificationDeletion",
                        ]),
                      ),
                    ),
                    timeout: Schema.optional(Schema.String),
                  }),
                ),
              ),
              timeout: Schema.optional(Schema.String),
              endpointType: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "Canary",
                  "Production",
                  "TestInProduction",
                ]),
              ),
              tokenAuthConfiguration: Schema.optional(
                Schema.Struct({
                  authenticationScheme: Schema.optional(
                    Schema.Literals(["PoP", "Bearer"]),
                  ),
                  signedRequestScope: Schema.optional(
                    Schema.Literals(["ResourceUri", "Endpoint"]),
                  ),
                  disableCertificateAuthenticationFallback: Schema.optional(
                    Schema.Boolean,
                  ),
                }),
              ),
              skuLink: Schema.optional(Schema.String),
              endpointUri: Schema.optional(Schema.String),
              apiVersion: Schema.optional(Schema.String),
              zones: Schema.optional(Schema.Array(Schema.String)),
              dstsConfiguration: Schema.optional(
                Schema.Struct({
                  serviceName: Schema.String,
                  serviceDnsName: Schema.optional(Schema.String),
                }),
              ),
              dataBoundary: Schema.optional(
                Schema.Literals(["NotDefined", "Global", "EU", "US"]),
              ),
            }),
          ),
        ),
        extensionOptions: Schema.optional(
          Schema.Struct({
            resourceCreationBegin: Schema.optional(
              Schema.Struct({
                request: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "NotSpecified",
                      "DoNotMergeExistingReadOnlyAndSecretProperties",
                      "IncludeInternalMetadata",
                    ]),
                  ),
                ),
                response: Schema.optional(
                  Schema.Array(
                    Schema.Literals([
                      "NotSpecified",
                      "DoNotMergeExistingReadOnlyAndSecretProperties",
                      "IncludeInternalMetadata",
                    ]),
                  ),
                ),
              }),
            ),
          }),
        ),
        marketplaceType: Schema.optional(
          Schema.Literals(["NotSpecified", "AddOn", "Bypass", "Store"]),
        ),
        swaggerSpecifications: Schema.optional(
          Schema.Array(
            Schema.Struct({
              apiVersions: Schema.optional(Schema.Array(Schema.String)),
              swaggerSpecFolderUri: Schema.optional(Schema.String),
            }),
          ),
        ),
        allowedUnauthorizedActions: Schema.optional(
          Schema.Array(Schema.String),
        ),
        allowedUnauthorizedActionsExtensions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              action: Schema.optional(Schema.String),
              intent: Schema.optional(
                Schema.Literals([
                  "NOT_SPECIFIED",
                  "LOW_PRIVILEGE",
                  "DEFERRED_ACCESS_CHECK",
                  "RP_CONTRACT",
                ]),
              ),
            }),
          ),
        ),
        authorizationActionMappings: Schema.optional(
          Schema.Array(
            Schema.Struct({
              original: Schema.optional(Schema.String),
              desired: Schema.optional(Schema.String),
            }),
          ),
        ),
        linkedAccessChecks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              actionName: Schema.optional(Schema.String),
              linkedProperty: Schema.optional(Schema.String),
              linkedAction: Schema.optional(Schema.String),
              linkedActionVerb: Schema.optional(Schema.String),
              linkedType: Schema.optional(Schema.String),
            }),
          ),
        ),
        defaultApiVersion: Schema.optional(Schema.String),
        loggingRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              action: Schema.String,
              direction: Schema.Literals(["None", "Request", "Response"]),
              detailLevel: Schema.Literals(["None", "Body"]),
              hiddenPropertyPaths: Schema.optional(
                Schema.Struct({
                  hiddenPathsOnRequest: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  hiddenPathsOnResponse: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                }),
              ),
            }),
          ),
        ),
        throttlingRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              action: Schema.String,
              metrics: Schema.Array(
                Schema.Struct({
                  type: Schema.Literals([
                    "NotSpecified",
                    "NumberOfRequests",
                    "NumberOfResources",
                  ]),
                  limit: Schema.Number,
                  interval: Schema.optional(Schema.String),
                }),
              ),
              requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
              applicationId: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
        featuresRule: Schema.optional(
          Schema.Struct({
            requiredFeaturesPolicy: Schema.Literals(["Any", "All"]),
          }),
        ),
        enableAsyncOperation: Schema.optional(Schema.Boolean),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "MovingResources",
            "TransientFailure",
            "RolloutInProgress",
          ]),
        ),
        enableThirdPartyS2S: Schema.optional(Schema.Boolean),
        subscriptionLifecycleNotificationSpecifications: Schema.optional(
          Schema.Struct({
            subscriptionStateOverrideActions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  state: Schema.Literals([
                    "Registered",
                    "Unregistered",
                    "Warned",
                    "Suspended",
                    "Deleted",
                    "WarnedToRegistered",
                    "WarnedToSuspended",
                    "WarnedToDeleted",
                    "WarnedToUnregistered",
                    "SuspendedToRegistered",
                    "SuspendedToWarned",
                    "SuspendedToDeleted",
                    "SuspendedToUnregistered",
                  ]),
                  action: Schema.Literals([
                    "NotDefined",
                    "DeleteAllResources",
                    "SoftDeleteAllResources",
                    "NoOp",
                    "BillingCancellation",
                    "UndoSoftDelete",
                  ]),
                }),
              ),
            ),
            softDeleteTTL: Schema.optional(Schema.String),
          }),
        ),
        isPureProxy: Schema.optional(Schema.Boolean),
        identityManagement: Schema.optional(
          Schema.Struct({
            type: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "SystemAssigned",
                "UserAssigned",
                "Actor",
                "DelegatedResourceIdentity",
              ]),
            ),
            applicationId: Schema.optional(Schema.String),
            applicationIds: Schema.optional(Schema.Array(Schema.String)),
            delegationAppIds: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        checkNameAvailabilitySpecifications: Schema.optional(
          Schema.Struct({
            enableDefaultValidation: Schema.optional(Schema.Boolean),
            resourceTypesWithCustomValidation: Schema.optional(
              Schema.Array(Schema.String),
            ),
          }),
        ),
        disallowedActionVerbs: Schema.optional(Schema.Array(Schema.String)),
        serviceTreeInfos: Schema.optional(
          Schema.Array(
            Schema.Struct({
              serviceId: Schema.optional(Schema.String),
              componentId: Schema.optional(Schema.String),
              readiness: Schema.optional(
                Schema.Literals([
                  "ClosingDown",
                  "Deprecated",
                  "GA",
                  "InDevelopment",
                  "InternalOnly",
                  "PrivatePreview",
                  "PublicPreview",
                  "RemovedFromARM",
                  "Retired",
                ]),
              ),
            }),
          ),
        ),
        requestHeaderOptions: Schema.optional(
          Schema.Struct({
            optInHeaders: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "SignedUserToken",
                "ClientGroupMembership",
                "SignedAuxiliaryTokens",
                "UnboundedClientGroupMembership",
                "PrivateLinkId",
                "PrivateLinkResourceId",
                "ManagementGroupAncestorsEncoded",
                "PrivateLinkVnetTrafficTag",
                "ResourceGroupLocation",
                "ClientPrincipalNameEncoded",
                "MSIResourceIdEncoded",
              ]),
            ),
            optOutHeaders: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "SystemDataCreatedByLastModifiedBy",
              ]),
            ),
          }),
        ),
        subscriptionStateRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              state: Schema.optional(
                Schema.Literals([
                  "NotDefined",
                  "Enabled",
                  "Warned",
                  "PastDue",
                  "Disabled",
                  "Deleted",
                ]),
              ),
              allowedActions: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        templateDeploymentOptions: Schema.optional(
          Schema.Struct({
            preflightSupported: Schema.optional(Schema.Boolean),
            preflightOptions: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "None",
                  "ContinueDeploymentOnFailure",
                  "DefaultValidationOnly",
                ]),
              ),
            ),
          }),
        ),
        extendedLocations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "CustomLocation",
                  "EdgeZone",
                  "ArcZone",
                ]),
              ),
              supportedPolicy: Schema.optional(
                Schema.Literals(["NotSpecified", "All"]),
              ),
            }),
          ),
        ),
        resourceMovePolicy: Schema.optional(
          Schema.Struct({
            validationRequired: Schema.optional(Schema.Boolean),
            crossResourceGroupMoveEnabled: Schema.optional(Schema.Boolean),
            crossSubscriptionMoveEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
        resourceDeletionPolicy: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "CascadeDeleteAll",
            "CascadeDeleteProxyOnlyChildren",
          ]),
        ),
        resourceConcurrencyControlOptions: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              policy: Schema.optional(
                Schema.Literals(["NotSpecified", "SynchronizeBeginExtension"]),
              ),
            }),
          ),
        ),
        resourceGraphConfiguration: Schema.optional(
          Schema.Struct({
            enabled: Schema.optional(Schema.Boolean),
            apiVersion: Schema.optional(Schema.String),
          }),
        ),
        management: Schema.optional(
          Schema.Struct({
            schemaOwners: Schema.optional(Schema.Array(Schema.String)),
            manifestOwners: Schema.optional(Schema.Array(Schema.String)),
            authorizationOwners: Schema.optional(Schema.Array(Schema.String)),
            incidentRoutingService: Schema.optional(Schema.String),
            incidentRoutingTeam: Schema.optional(Schema.String),
            incidentContactEmail: Schema.optional(Schema.String),
            serviceTreeInfos: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  serviceId: Schema.optional(Schema.String),
                  componentId: Schema.optional(Schema.String),
                  readiness: Schema.optional(
                    Schema.Literals([
                      "ClosingDown",
                      "Deprecated",
                      "GA",
                      "InDevelopment",
                      "InternalOnly",
                      "PrivatePreview",
                      "PublicPreview",
                      "RemovedFromARM",
                      "Retired",
                    ]),
                  ),
                }),
              ),
            ),
            resourceAccessPolicy: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "AcisReadAllowed",
                "AcisActionAllowed",
              ]),
            ),
            resourceAccessRoles: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  allowedGroupClaims: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  actions: Schema.optional(Schema.Array(Schema.String)),
                }),
              ),
            ),
            expeditedRolloutSubmitters: Schema.optional(
              Schema.Array(Schema.String),
            ),
            errorResponseMessageOptions: Schema.optional(
              Schema.Struct({
                serverFailureResponseMessageType: Schema.optional(
                  Schema.Literals(["NotSpecified", "OutageReporting"]),
                ),
              }),
            ),
            expeditedRolloutMetadata: Schema.optional(
              Schema.Struct({
                enabled: Schema.optional(Schema.Boolean),
                expeditedRolloutIntent: Schema.optional(
                  Schema.Literals(["NotSpecified", "Hotfix"]),
                ),
              }),
            ),
            canaryManifestOwners: Schema.optional(Schema.Array(Schema.String)),
            pcCode: Schema.optional(Schema.String),
            profitCenterProgramId: Schema.optional(Schema.String),
          }),
        ),
        openApiConfiguration: Schema.optional(
          Schema.Struct({
            validation: Schema.optional(
              Schema.Struct({
                allowNoncompliantCollectionResponse: Schema.optional(
                  Schema.Boolean,
                ),
              }),
            ),
          }),
        ),
        onBehalfOfTokens: Schema.optional(
          Schema.Struct({
            actionName: Schema.optional(Schema.String),
            lifeTime: Schema.optional(Schema.String),
          }),
        ),
        category: Schema.optional(
          Schema.Literals(["None", "FreeForm", "Internal", "PureProxy"]),
        ),
        resourceValidation: Schema.optional(
          Schema.Literals(["NotSpecified", "ReservedWords", "ProfaneWords"]),
        ),
        disallowedEndUserOperations: Schema.optional(
          Schema.Array(Schema.String),
        ),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        skuLink: Schema.optional(Schema.String),
        quotaRule: Schema.optional(
          Schema.Struct({
            quotaPolicy: Schema.optional(
              Schema.Literals(["Default", "None", "Restricted"]),
            ),
            locationRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  policy: Schema.optional(
                    Schema.Literals(["Default", "None", "Restricted"]),
                  ),
                  quotaId: Schema.optional(Schema.String),
                  location: Schema.optional(Schema.String),
                }),
              ),
            ),
            requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        notifications: Schema.optional(
          Schema.Array(
            Schema.Struct({
              notificationType: Schema.optional(
                Schema.Literals(["Unspecified", "SubscriptionNotification"]),
              ),
              skipNotifications: Schema.optional(
                Schema.Literals(["Unspecified", "Enabled", "Disabled"]),
              ),
            }),
          ),
        ),
        linkedNotificationRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              actions: Schema.optional(Schema.Array(Schema.String)),
              actionsOnFailedOperation: Schema.optional(
                Schema.Array(Schema.String),
              ),
              fastPathActions: Schema.optional(Schema.Array(Schema.String)),
              fastPathActionsOnFailedOperation: Schema.optional(
                Schema.Array(Schema.String),
              ),
              linkedNotificationTimeout: Schema.optional(Schema.String),
            }),
          ),
        ),
        resourceProviderAuthorizationRules: Schema.optional(
          Schema.Struct({
            asyncOperationPollingRules: Schema.optional(
              Schema.Struct({
                authorizationActions: Schema.optional(
                  Schema.Array(Schema.String),
                ),
                additionalOptions: Schema.optional(
                  Schema.Literals([
                    "ProtectedAsyncOperationPolling",
                    "ProtectedAsyncOperationPollingAuditOnly",
                  ]),
                ),
              }),
            ),
          }),
        ),
        tokenAuthConfiguration: Schema.optional(
          Schema.Struct({
            authenticationScheme: Schema.optional(
              Schema.Literals(["PoP", "Bearer"]),
            ),
            signedRequestScope: Schema.optional(
              Schema.Literals(["ResourceUri", "Endpoint"]),
            ),
            disableCertificateAuthenticationFallback: Schema.optional(
              Schema.Boolean,
            ),
          }),
        ),
        templateDeploymentPolicy: Schema.optional(
          Schema.Struct({
            capabilities: Schema.Literals(["Default", "Preflight"]),
            preflightOptions: Schema.Literals([
              "None",
              "ValidationRequests",
              "DeploymentRequests",
              "TestOnly",
              "RegisteredOnly",
            ]),
            preflightNotifications: Schema.optional(
              Schema.Literals(["None", "UnregisteredSubscriptions"]),
            ),
          }),
        ),
        allowEmptyRoleAssignments: Schema.optional(Schema.Boolean),
        policyExecutionType: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "ExecutePolicies",
            "BypassPolicies",
            "ExpectPartialPutRequests",
          ]),
        ),
        availabilityZoneRule: Schema.optional(
          Schema.Struct({
            availabilityZonePolicy: Schema.optional(
              Schema.Literals(["NotSpecified", "SingleZoned", "MultiZoned"]),
            ),
          }),
        ),
        dstsConfiguration: Schema.optional(
          Schema.Struct({
            serviceName: Schema.String,
            serviceDnsName: Schema.optional(Schema.String),
          }),
        ),
        asyncTimeoutRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              actionName: Schema.optional(Schema.String),
              timeout: Schema.optional(Schema.String),
            }),
          ),
        ),
        commonApiVersions: Schema.optional(Schema.Array(Schema.String)),
        apiProfiles: Schema.optional(
          Schema.Array(
            Schema.Struct({
              profileVersion: Schema.optional(Schema.String),
              apiVersion: Schema.optional(Schema.String),
            }),
          ),
        ),
        linkedOperationRules: Schema.optional(
          Schema.Array(
            Schema.Struct({
              linkedOperation: Schema.Literals([
                "None",
                "CrossResourceGroupResourceMove",
                "CrossSubscriptionResourceMove",
              ]),
              linkedAction: Schema.Literals([
                "NotSpecified",
                "Blocked",
                "Validate",
                "Enabled",
              ]),
              dependsOnTypes: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
        ),
        legacyName: Schema.optional(Schema.String),
        legacyNames: Schema.optional(Schema.Array(Schema.String)),
        allowedTemplateDeploymentReferenceActions: Schema.optional(
          Schema.Array(Schema.String),
        ),
        legacyPolicy: Schema.optional(
          Schema.Struct({
            disallowedLegacyOperations: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "NotSpecified",
                  "Create",
                  "Delete",
                  "Waiting",
                  "AzureAsyncOperationWaiting",
                  "ResourceCacheWaiting",
                  "Action",
                  "Read",
                  "EvaluateDeploymentOutput",
                  "DeploymentCleanup",
                ]),
              ),
            ),
            disallowedConditions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  disallowedLegacyOperations: Schema.optional(
                    Schema.Array(
                      Schema.Literals([
                        "NotSpecified",
                        "Create",
                        "Delete",
                        "Waiting",
                        "AzureAsyncOperationWaiting",
                        "ResourceCacheWaiting",
                        "Action",
                        "Read",
                        "EvaluateDeploymentOutput",
                        "DeploymentCleanup",
                      ]),
                    ),
                  ),
                  feature: Schema.optional(Schema.String),
                }),
              ),
            ),
          }),
        ),
        manifestLink: Schema.optional(Schema.String),
        capacityRule: Schema.optional(
          Schema.Struct({
            capacityPolicy: Schema.optional(
              Schema.Literals(["Default", "Restricted"]),
            ),
            skuAlias: Schema.optional(Schema.String),
          }),
        ),
        marketplaceOptions: Schema.optional(
          Schema.Struct({
            addOnPlanConversionAllowed: Schema.optional(Schema.Boolean),
          }),
        ),
        allowedResourceNames: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              getActionVerb: Schema.optional(Schema.String),
            }),
          ),
        ),
        resourceCache: Schema.optional(
          Schema.Struct({
            enableResourceCache: Schema.optional(Schema.Boolean),
            resourceCacheExpirationTimespan: Schema.optional(Schema.String),
          }),
        ),
        resourceQueryManagement: Schema.optional(
          Schema.Struct({
            filterOption: Schema.optional(
              Schema.Literals([
                "NotSpecified",
                "EnableSubscriptionFilterOnTenant",
              ]),
            ),
          }),
        ),
        supportsTags: Schema.optional(Schema.Boolean),
        resourceManagementOptions: Schema.optional(
          Schema.Struct({
            batchProvisioningSupport: Schema.optional(
              Schema.Struct({
                supportedOperations: Schema.optional(
                  Schema.Literals(["NotSpecified", "Get", "Delete"]),
                ),
              }),
            ),
            deleteDependencies: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  requiredFeatures: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  linkedProperty: Schema.optional(Schema.String),
                  linkedType: Schema.optional(Schema.String),
                }),
              ),
            ),
            nestedProvisioningSupport: Schema.optional(
              Schema.Struct({
                minimumApiVersion: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        groupingTag: Schema.optional(Schema.String),
        addResourceListTargetLocations: Schema.optional(Schema.Boolean),
        resourceTypeCommonAttributeManagement: Schema.optional(
          Schema.Struct({
            commonApiVersionsMergeMode: Schema.optional(
              Schema.Literals(["Merge", "Overwrite"]),
            ),
          }),
        ),
        routingRule: Schema.optional(
          Schema.Struct({
            hostResourceType: Schema.optional(Schema.String),
          }),
        ),
        frontdoorRequestMode: Schema.optional(
          Schema.Literals(["NotSpecified", "UseManifest"]),
        ),
        resourceSubType: Schema.optional(
          Schema.Literals(["NotSpecified", "AsyncOperation"]),
        ),
        asyncOperationResourceTypeName: Schema.optional(Schema.String),
      }),
    ),
    kind: Schema.optional(Schema.Literals(["Managed", "Hybrid", "Direct"])),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ResourceTypeRegistrationsCreateOrUpdateInput>;

// Output Schema
export interface ResourceTypeRegistrationsCreateOrUpdateOutput {
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
export const ResourceTypeRegistrationsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ResourceTypeRegistrationsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 */
export const ResourceTypeRegistrationsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResourceTypeRegistrationsCreateOrUpdateInput,
    outputSchema: ResourceTypeRegistrationsCreateOrUpdateOutput,
  }));
// Input Schema
export interface ResourceTypeRegistrationsDeleteInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
}
export const ResourceTypeRegistrationsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ResourceTypeRegistrationsDeleteInput>;

// Output Schema
export type ResourceTypeRegistrationsDeleteOutput = void;
export const ResourceTypeRegistrationsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ResourceTypeRegistrationsDeleteOutput>;

// The operation
/**
 * Deletes a resource type
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 */
export const ResourceTypeRegistrationsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResourceTypeRegistrationsDeleteInput,
    outputSchema: ResourceTypeRegistrationsDeleteOutput,
  }));
// Input Schema
export interface ResourceTypeRegistrationsGetInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
}
export const ResourceTypeRegistrationsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ResourceTypeRegistrationsGetInput>;

// Output Schema
export interface ResourceTypeRegistrationsGetOutput {
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
export const ResourceTypeRegistrationsGetOutput =
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
  }) as unknown as Schema.Codec<ResourceTypeRegistrationsGetOutput>;

// The operation
/**
 * Gets a resource type details in the given subscription and provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 */
export const ResourceTypeRegistrationsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResourceTypeRegistrationsGetInput,
    outputSchema: ResourceTypeRegistrationsGetOutput,
  }));
// Input Schema
export interface ResourceTypeRegistrationsListByProviderRegistrationInput {
  subscriptionId: string;
  providerNamespace: string;
}
export const ResourceTypeRegistrationsListByProviderRegistrationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<ResourceTypeRegistrationsListByProviderRegistrationInput>;

// Output Schema
export interface ResourceTypeRegistrationsListByProviderRegistrationOutput {
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
export const ResourceTypeRegistrationsListByProviderRegistrationOutput =
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
  }) as unknown as Schema.Codec<ResourceTypeRegistrationsListByProviderRegistrationOutput>;

// The operation
/**
 * Gets the list of the resource types for the given provider.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 */
export const ResourceTypeRegistrationsListByProviderRegistration =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ResourceTypeRegistrationsListByProviderRegistrationInput,
    outputSchema: ResourceTypeRegistrationsListByProviderRegistrationOutput,
  }));
// Input Schema
export interface SkusCreateOrUpdateInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  sku: string;
  properties?: {
    skuSettings: {
      name: string;
      tier?: string;
      size?: string;
      family?: string;
      kind?: string;
      locations?: string[];
      locationInfo?: {
        location: string;
        zones?: string[];
        zoneDetails?: {
          name?: string[];
          capabilities?: { name: string; value: string }[];
        }[];
        extendedLocations?: string[];
        type?: "NotSpecified" | "CustomLocation" | "EdgeZone" | "ArcZone";
      }[];
      requiredQuotaIds?: string[];
      requiredFeatures?: string[];
      capacity?: {
        minimum: number;
        maximum?: number;
        default?: number;
        scaleType?: "None" | "Manual" | "Automatic";
      };
      costs?: { meterId: string; quantity?: number; extendedUnit?: string }[];
      capabilities?: { name: string; value: string }[];
    }[];
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "MovingResources"
      | "TransientFailure"
      | "RolloutInProgress";
  };
}
export const SkusCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        skuSettings: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            tier: Schema.optional(Schema.String),
            size: Schema.optional(Schema.String),
            family: Schema.optional(Schema.String),
            kind: Schema.optional(Schema.String),
            locations: Schema.optional(Schema.Array(Schema.String)),
            locationInfo: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  location: Schema.String,
                  zones: Schema.optional(Schema.Array(Schema.String)),
                  zoneDetails: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.Array(Schema.String)),
                        capabilities: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.String,
                              value: Schema.String,
                            }),
                          ),
                        ),
                      }),
                    ),
                  ),
                  extendedLocations: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  type: Schema.optional(
                    Schema.Literals([
                      "NotSpecified",
                      "CustomLocation",
                      "EdgeZone",
                      "ArcZone",
                    ]),
                  ),
                }),
              ),
            ),
            requiredQuotaIds: Schema.optional(Schema.Array(Schema.String)),
            requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
            capacity: Schema.optional(
              Schema.Struct({
                minimum: Schema.Number,
                maximum: Schema.optional(Schema.Number),
                default: Schema.optional(Schema.Number),
                scaleType: Schema.optional(
                  Schema.Literals(["None", "Manual", "Automatic"]),
                ),
              }),
            ),
            costs: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  meterId: Schema.String,
                  quantity: Schema.optional(Schema.Number),
                  extendedUnit: Schema.optional(Schema.String),
                }),
              ),
            ),
            capabilities: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  value: Schema.String,
                }),
              ),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "MovingResources",
            "TransientFailure",
            "RolloutInProgress",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SkusCreateOrUpdateInput>;

// Output Schema
export interface SkusCreateOrUpdateOutput {
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
export const SkusCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SkusCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates the resource type skus in the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param sku - The SKU.
 */
export const SkusCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusCreateOrUpdateInput,
  outputSchema: SkusCreateOrUpdateOutput,
}));
// Input Schema
export interface SkusCreateOrUpdateNestedResourceTypeFirstInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  nestedResourceTypeFirst: string;
  sku: string;
  properties?: {
    skuSettings: {
      name: string;
      tier?: string;
      size?: string;
      family?: string;
      kind?: string;
      locations?: string[];
      locationInfo?: {
        location: string;
        zones?: string[];
        zoneDetails?: {
          name?: string[];
          capabilities?: { name: string; value: string }[];
        }[];
        extendedLocations?: string[];
        type?: "NotSpecified" | "CustomLocation" | "EdgeZone" | "ArcZone";
      }[];
      requiredQuotaIds?: string[];
      requiredFeatures?: string[];
      capacity?: {
        minimum: number;
        maximum?: number;
        default?: number;
        scaleType?: "None" | "Manual" | "Automatic";
      };
      costs?: { meterId: string; quantity?: number; extendedUnit?: string }[];
      capabilities?: { name: string; value: string }[];
    }[];
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "MovingResources"
      | "TransientFailure"
      | "RolloutInProgress";
  };
}
export const SkusCreateOrUpdateNestedResourceTypeFirstInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        skuSettings: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            tier: Schema.optional(Schema.String),
            size: Schema.optional(Schema.String),
            family: Schema.optional(Schema.String),
            kind: Schema.optional(Schema.String),
            locations: Schema.optional(Schema.Array(Schema.String)),
            locationInfo: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  location: Schema.String,
                  zones: Schema.optional(Schema.Array(Schema.String)),
                  zoneDetails: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.Array(Schema.String)),
                        capabilities: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.String,
                              value: Schema.String,
                            }),
                          ),
                        ),
                      }),
                    ),
                  ),
                  extendedLocations: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  type: Schema.optional(
                    Schema.Literals([
                      "NotSpecified",
                      "CustomLocation",
                      "EdgeZone",
                      "ArcZone",
                    ]),
                  ),
                }),
              ),
            ),
            requiredQuotaIds: Schema.optional(Schema.Array(Schema.String)),
            requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
            capacity: Schema.optional(
              Schema.Struct({
                minimum: Schema.Number,
                maximum: Schema.optional(Schema.Number),
                default: Schema.optional(Schema.Number),
                scaleType: Schema.optional(
                  Schema.Literals(["None", "Manual", "Automatic"]),
                ),
              }),
            ),
            costs: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  meterId: Schema.String,
                  quantity: Schema.optional(Schema.Number),
                  extendedUnit: Schema.optional(Schema.String),
                }),
              ),
            ),
            capabilities: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  value: Schema.String,
                }),
              ),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "MovingResources",
            "TransientFailure",
            "RolloutInProgress",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SkusCreateOrUpdateNestedResourceTypeFirstInput>;

// Output Schema
export interface SkusCreateOrUpdateNestedResourceTypeFirstOutput {
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
export const SkusCreateOrUpdateNestedResourceTypeFirstOutput =
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
  }) as unknown as Schema.Codec<SkusCreateOrUpdateNestedResourceTypeFirstOutput>;

// The operation
/**
 * Creates or updates the resource type skus in the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param sku - The SKU.
 */
export const SkusCreateOrUpdateNestedResourceTypeFirst =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusCreateOrUpdateNestedResourceTypeFirstInput,
    outputSchema: SkusCreateOrUpdateNestedResourceTypeFirstOutput,
  }));
// Input Schema
export interface SkusCreateOrUpdateNestedResourceTypeSecondInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  nestedResourceTypeFirst: string;
  nestedResourceTypeSecond: string;
  sku: string;
  properties?: {
    skuSettings: {
      name: string;
      tier?: string;
      size?: string;
      family?: string;
      kind?: string;
      locations?: string[];
      locationInfo?: {
        location: string;
        zones?: string[];
        zoneDetails?: {
          name?: string[];
          capabilities?: { name: string; value: string }[];
        }[];
        extendedLocations?: string[];
        type?: "NotSpecified" | "CustomLocation" | "EdgeZone" | "ArcZone";
      }[];
      requiredQuotaIds?: string[];
      requiredFeatures?: string[];
      capacity?: {
        minimum: number;
        maximum?: number;
        default?: number;
        scaleType?: "None" | "Manual" | "Automatic";
      };
      costs?: { meterId: string; quantity?: number; extendedUnit?: string }[];
      capabilities?: { name: string; value: string }[];
    }[];
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "MovingResources"
      | "TransientFailure"
      | "RolloutInProgress";
  };
}
export const SkusCreateOrUpdateNestedResourceTypeSecondInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        skuSettings: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            tier: Schema.optional(Schema.String),
            size: Schema.optional(Schema.String),
            family: Schema.optional(Schema.String),
            kind: Schema.optional(Schema.String),
            locations: Schema.optional(Schema.Array(Schema.String)),
            locationInfo: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  location: Schema.String,
                  zones: Schema.optional(Schema.Array(Schema.String)),
                  zoneDetails: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.Array(Schema.String)),
                        capabilities: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.String,
                              value: Schema.String,
                            }),
                          ),
                        ),
                      }),
                    ),
                  ),
                  extendedLocations: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  type: Schema.optional(
                    Schema.Literals([
                      "NotSpecified",
                      "CustomLocation",
                      "EdgeZone",
                      "ArcZone",
                    ]),
                  ),
                }),
              ),
            ),
            requiredQuotaIds: Schema.optional(Schema.Array(Schema.String)),
            requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
            capacity: Schema.optional(
              Schema.Struct({
                minimum: Schema.Number,
                maximum: Schema.optional(Schema.Number),
                default: Schema.optional(Schema.Number),
                scaleType: Schema.optional(
                  Schema.Literals(["None", "Manual", "Automatic"]),
                ),
              }),
            ),
            costs: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  meterId: Schema.String,
                  quantity: Schema.optional(Schema.Number),
                  extendedUnit: Schema.optional(Schema.String),
                }),
              ),
            ),
            capabilities: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  value: Schema.String,
                }),
              ),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "MovingResources",
            "TransientFailure",
            "RolloutInProgress",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SkusCreateOrUpdateNestedResourceTypeSecondInput>;

// Output Schema
export interface SkusCreateOrUpdateNestedResourceTypeSecondOutput {
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
export const SkusCreateOrUpdateNestedResourceTypeSecondOutput =
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
  }) as unknown as Schema.Codec<SkusCreateOrUpdateNestedResourceTypeSecondOutput>;

// The operation
/**
 * Creates or updates the resource type skus in the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 * @param sku - The SKU.
 */
export const SkusCreateOrUpdateNestedResourceTypeSecond =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusCreateOrUpdateNestedResourceTypeSecondInput,
    outputSchema: SkusCreateOrUpdateNestedResourceTypeSecondOutput,
  }));
// Input Schema
export interface SkusCreateOrUpdateNestedResourceTypeThirdInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  nestedResourceTypeFirst: string;
  nestedResourceTypeSecond: string;
  nestedResourceTypeThird: string;
  sku: string;
  properties?: {
    skuSettings: {
      name: string;
      tier?: string;
      size?: string;
      family?: string;
      kind?: string;
      locations?: string[];
      locationInfo?: {
        location: string;
        zones?: string[];
        zoneDetails?: {
          name?: string[];
          capabilities?: { name: string; value: string }[];
        }[];
        extendedLocations?: string[];
        type?: "NotSpecified" | "CustomLocation" | "EdgeZone" | "ArcZone";
      }[];
      requiredQuotaIds?: string[];
      requiredFeatures?: string[];
      capacity?: {
        minimum: number;
        maximum?: number;
        default?: number;
        scaleType?: "None" | "Manual" | "Automatic";
      };
      costs?: { meterId: string; quantity?: number; extendedUnit?: string }[];
      capabilities?: { name: string; value: string }[];
    }[];
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "MovingResources"
      | "TransientFailure"
      | "RolloutInProgress";
  };
}
export const SkusCreateOrUpdateNestedResourceTypeThirdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeThird: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        skuSettings: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            tier: Schema.optional(Schema.String),
            size: Schema.optional(Schema.String),
            family: Schema.optional(Schema.String),
            kind: Schema.optional(Schema.String),
            locations: Schema.optional(Schema.Array(Schema.String)),
            locationInfo: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  location: Schema.String,
                  zones: Schema.optional(Schema.Array(Schema.String)),
                  zoneDetails: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        name: Schema.optional(Schema.Array(Schema.String)),
                        capabilities: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.String,
                              value: Schema.String,
                            }),
                          ),
                        ),
                      }),
                    ),
                  ),
                  extendedLocations: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                  type: Schema.optional(
                    Schema.Literals([
                      "NotSpecified",
                      "CustomLocation",
                      "EdgeZone",
                      "ArcZone",
                    ]),
                  ),
                }),
              ),
            ),
            requiredQuotaIds: Schema.optional(Schema.Array(Schema.String)),
            requiredFeatures: Schema.optional(Schema.Array(Schema.String)),
            capacity: Schema.optional(
              Schema.Struct({
                minimum: Schema.Number,
                maximum: Schema.optional(Schema.Number),
                default: Schema.optional(Schema.Number),
                scaleType: Schema.optional(
                  Schema.Literals(["None", "Manual", "Automatic"]),
                ),
              }),
            ),
            costs: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  meterId: Schema.String,
                  quantity: Schema.optional(Schema.Number),
                  extendedUnit: Schema.optional(Schema.String),
                }),
              ),
            ),
            capabilities: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  name: Schema.String,
                  value: Schema.String,
                }),
              ),
            ),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "MovingResources",
            "TransientFailure",
            "RolloutInProgress",
          ]),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/resourcetypeRegistrations/{nestedResourceTypeThird}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SkusCreateOrUpdateNestedResourceTypeThirdInput>;

// Output Schema
export interface SkusCreateOrUpdateNestedResourceTypeThirdOutput {
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
export const SkusCreateOrUpdateNestedResourceTypeThirdOutput =
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
  }) as unknown as Schema.Codec<SkusCreateOrUpdateNestedResourceTypeThirdOutput>;

// The operation
/**
 * Creates or updates the resource type skus in the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 * @param nestedResourceTypeThird - The third child resource type.
 * @param sku - The SKU.
 */
export const SkusCreateOrUpdateNestedResourceTypeThird =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusCreateOrUpdateNestedResourceTypeThirdInput,
    outputSchema: SkusCreateOrUpdateNestedResourceTypeThirdOutput,
  }));
// Input Schema
export interface SkusDeleteInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  sku: string;
}
export const SkusDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  providerNamespace: Schema.String.pipe(T.PathParam()),
  resourceType: Schema.String.pipe(T.PathParam()),
  sku: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/skus/{sku}",
    apiVersion: "2024-09-01",
  }),
) as unknown as Schema.Codec<SkusDeleteInput>;

// Output Schema
export type SkusDeleteOutput = void;
export const SkusDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SkusDeleteOutput>;

// The operation
/**
 * Deletes a resource type sku.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param sku - The SKU.
 */
export const SkusDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusDeleteInput,
  outputSchema: SkusDeleteOutput,
}));
// Input Schema
export interface SkusDeleteNestedResourceTypeFirstInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  nestedResourceTypeFirst: string;
  sku: string;
}
export const SkusDeleteNestedResourceTypeFirstInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SkusDeleteNestedResourceTypeFirstInput>;

// Output Schema
export type SkusDeleteNestedResourceTypeFirstOutput = void;
export const SkusDeleteNestedResourceTypeFirstOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SkusDeleteNestedResourceTypeFirstOutput>;

// The operation
/**
 * Deletes a resource type sku.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param sku - The SKU.
 */
export const SkusDeleteNestedResourceTypeFirst =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusDeleteNestedResourceTypeFirstInput,
    outputSchema: SkusDeleteNestedResourceTypeFirstOutput,
  }));
// Input Schema
export interface SkusDeleteNestedResourceTypeSecondInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  nestedResourceTypeFirst: string;
  nestedResourceTypeSecond: string;
  sku: string;
}
export const SkusDeleteNestedResourceTypeSecondInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SkusDeleteNestedResourceTypeSecondInput>;

// Output Schema
export type SkusDeleteNestedResourceTypeSecondOutput = void;
export const SkusDeleteNestedResourceTypeSecondOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SkusDeleteNestedResourceTypeSecondOutput>;

// The operation
/**
 * Deletes a resource type sku.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 * @param sku - The SKU.
 */
export const SkusDeleteNestedResourceTypeSecond =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusDeleteNestedResourceTypeSecondInput,
    outputSchema: SkusDeleteNestedResourceTypeSecondOutput,
  }));
// Input Schema
export interface SkusDeleteNestedResourceTypeThirdInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  nestedResourceTypeFirst: string;
  nestedResourceTypeSecond: string;
  nestedResourceTypeThird: string;
  sku: string;
}
export const SkusDeleteNestedResourceTypeThirdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeThird: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/resourcetypeRegistrations/{nestedResourceTypeThird}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SkusDeleteNestedResourceTypeThirdInput>;

// Output Schema
export type SkusDeleteNestedResourceTypeThirdOutput = void;
export const SkusDeleteNestedResourceTypeThirdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SkusDeleteNestedResourceTypeThirdOutput>;

// The operation
/**
 * Deletes a resource type sku.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 * @param nestedResourceTypeThird - The third child resource type.
 * @param sku - The SKU.
 */
export const SkusDeleteNestedResourceTypeThird =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusDeleteNestedResourceTypeThirdInput,
    outputSchema: SkusDeleteNestedResourceTypeThirdOutput,
  }));
// Input Schema
export interface SkusGetInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  sku: string;
}
export const SkusGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  providerNamespace: Schema.String.pipe(T.PathParam()),
  resourceType: Schema.String.pipe(T.PathParam()),
  sku: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/skus/{sku}",
    apiVersion: "2024-09-01",
  }),
) as unknown as Schema.Codec<SkusGetInput>;

// Output Schema
export interface SkusGetOutput {
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
export const SkusGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SkusGetOutput>;

// The operation
/**
 * Gets the sku details for the given resource type and sku name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param sku - The SKU.
 */
export const SkusGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SkusGetInput,
  outputSchema: SkusGetOutput,
}));
// Input Schema
export interface SkusGetNestedResourceTypeFirstInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  nestedResourceTypeFirst: string;
  sku: string;
}
export const SkusGetNestedResourceTypeFirstInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SkusGetNestedResourceTypeFirstInput>;

// Output Schema
export interface SkusGetNestedResourceTypeFirstOutput {
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
export const SkusGetNestedResourceTypeFirstOutput =
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
  }) as unknown as Schema.Codec<SkusGetNestedResourceTypeFirstOutput>;

// The operation
/**
 * Gets the sku details for the given resource type and sku name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param sku - The SKU.
 */
export const SkusGetNestedResourceTypeFirst =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusGetNestedResourceTypeFirstInput,
    outputSchema: SkusGetNestedResourceTypeFirstOutput,
  }));
// Input Schema
export interface SkusGetNestedResourceTypeSecondInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  nestedResourceTypeFirst: string;
  nestedResourceTypeSecond: string;
  sku: string;
}
export const SkusGetNestedResourceTypeSecondInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SkusGetNestedResourceTypeSecondInput>;

// Output Schema
export interface SkusGetNestedResourceTypeSecondOutput {
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
export const SkusGetNestedResourceTypeSecondOutput =
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
  }) as unknown as Schema.Codec<SkusGetNestedResourceTypeSecondOutput>;

// The operation
/**
 * Gets the sku details for the given resource type and sku name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 * @param sku - The SKU.
 */
export const SkusGetNestedResourceTypeSecond =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusGetNestedResourceTypeSecondInput,
    outputSchema: SkusGetNestedResourceTypeSecondOutput,
  }));
// Input Schema
export interface SkusGetNestedResourceTypeThirdInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  nestedResourceTypeFirst: string;
  nestedResourceTypeSecond: string;
  nestedResourceTypeThird: string;
  sku: string;
}
export const SkusGetNestedResourceTypeThirdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeThird: Schema.String.pipe(T.PathParam()),
    sku: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/resourcetypeRegistrations/{nestedResourceTypeThird}/skus/{sku}",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SkusGetNestedResourceTypeThirdInput>;

// Output Schema
export interface SkusGetNestedResourceTypeThirdOutput {
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
export const SkusGetNestedResourceTypeThirdOutput =
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
  }) as unknown as Schema.Codec<SkusGetNestedResourceTypeThirdOutput>;

// The operation
/**
 * Gets the sku details for the given resource type and sku name.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 * @param nestedResourceTypeThird - The third child resource type.
 * @param sku - The SKU.
 */
export const SkusGetNestedResourceTypeThird =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusGetNestedResourceTypeThirdInput,
    outputSchema: SkusGetNestedResourceTypeThirdOutput,
  }));
// Input Schema
export interface SkusListByResourceTypeRegistrationsInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
}
export const SkusListByResourceTypeRegistrationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/skus",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SkusListByResourceTypeRegistrationsInput>;

// Output Schema
export interface SkusListByResourceTypeRegistrationsOutput {
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
export const SkusListByResourceTypeRegistrationsOutput =
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
  }) as unknown as Schema.Codec<SkusListByResourceTypeRegistrationsOutput>;

// The operation
/**
 * Gets the list of skus for the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 */
export const SkusListByResourceTypeRegistrations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SkusListByResourceTypeRegistrationsInput,
    outputSchema: SkusListByResourceTypeRegistrationsOutput,
  }));
// Input Schema
export interface SkusListByResourceTypeRegistrationsNestedResourceTypeFirstInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  nestedResourceTypeFirst: string;
}
export const SkusListByResourceTypeRegistrationsNestedResourceTypeFirstInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/skus",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SkusListByResourceTypeRegistrationsNestedResourceTypeFirstInput>;

// Output Schema
export interface SkusListByResourceTypeRegistrationsNestedResourceTypeFirstOutput {
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
export const SkusListByResourceTypeRegistrationsNestedResourceTypeFirstOutput =
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
  }) as unknown as Schema.Codec<SkusListByResourceTypeRegistrationsNestedResourceTypeFirstOutput>;

// The operation
/**
 * Gets the list of skus for the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 */
export const SkusListByResourceTypeRegistrationsNestedResourceTypeFirst =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      SkusListByResourceTypeRegistrationsNestedResourceTypeFirstInput,
    outputSchema:
      SkusListByResourceTypeRegistrationsNestedResourceTypeFirstOutput,
  }));
// Input Schema
export interface SkusListByResourceTypeRegistrationsNestedResourceTypeSecondInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  nestedResourceTypeFirst: string;
  nestedResourceTypeSecond: string;
}
export const SkusListByResourceTypeRegistrationsNestedResourceTypeSecondInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/skus",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SkusListByResourceTypeRegistrationsNestedResourceTypeSecondInput>;

// Output Schema
export interface SkusListByResourceTypeRegistrationsNestedResourceTypeSecondOutput {
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
export const SkusListByResourceTypeRegistrationsNestedResourceTypeSecondOutput =
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
  }) as unknown as Schema.Codec<SkusListByResourceTypeRegistrationsNestedResourceTypeSecondOutput>;

// The operation
/**
 * Gets the list of skus for the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 */
export const SkusListByResourceTypeRegistrationsNestedResourceTypeSecond =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      SkusListByResourceTypeRegistrationsNestedResourceTypeSecondInput,
    outputSchema:
      SkusListByResourceTypeRegistrationsNestedResourceTypeSecondOutput,
  }));
// Input Schema
export interface SkusListByResourceTypeRegistrationsNestedResourceTypeThirdInput {
  subscriptionId: string;
  providerNamespace: string;
  resourceType: string;
  nestedResourceTypeFirst: string;
  nestedResourceTypeSecond: string;
  nestedResourceTypeThird: string;
}
export const SkusListByResourceTypeRegistrationsNestedResourceTypeThirdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    providerNamespace: Schema.String.pipe(T.PathParam()),
    resourceType: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeFirst: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeSecond: Schema.String.pipe(T.PathParam()),
    nestedResourceTypeThird: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.ProviderHub/providerRegistrations/{providerNamespace}/resourcetypeRegistrations/{resourceType}/resourcetypeRegistrations/{nestedResourceTypeFirst}/resourcetypeRegistrations/{nestedResourceTypeSecond}/resourcetypeRegistrations/{nestedResourceTypeThird}/skus",
      apiVersion: "2024-09-01",
    }),
  ) as unknown as Schema.Codec<SkusListByResourceTypeRegistrationsNestedResourceTypeThirdInput>;

// Output Schema
export interface SkusListByResourceTypeRegistrationsNestedResourceTypeThirdOutput {
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
export const SkusListByResourceTypeRegistrationsNestedResourceTypeThirdOutput =
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
  }) as unknown as Schema.Codec<SkusListByResourceTypeRegistrationsNestedResourceTypeThirdOutput>;

// The operation
/**
 * Gets the list of skus for the given resource type.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param providerNamespace - The name of the resource provider hosted within ProviderHub.
 * @param resourceType - The resource type.
 * @param nestedResourceTypeFirst - The first child resource type.
 * @param nestedResourceTypeSecond - The second child resource type.
 * @param nestedResourceTypeThird - The third child resource type.
 */
export const SkusListByResourceTypeRegistrationsNestedResourceTypeThird =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      SkusListByResourceTypeRegistrationsNestedResourceTypeThirdInput,
    outputSchema:
      SkusListByResourceTypeRegistrationsNestedResourceTypeThirdOutput,
  }));
