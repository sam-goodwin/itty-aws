/**
 * Azure Managedservices API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface MarketplaceRegistrationDefinitionsGetInput {
  scope: string;
  marketplaceIdentifier: string;
}
export const MarketplaceRegistrationDefinitionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    marketplaceIdentifier: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.ManagedServices/marketplaceRegistrationDefinitions/{marketplaceIdentifier}",
      apiVersion: "2022-10-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceRegistrationDefinitionsGetInput>;

// Output Schema
export interface MarketplaceRegistrationDefinitionsGetOutput {
  properties?: {
    managedByTenantId: string;
    authorizations: {
      principalId: string;
      principalIdDisplayName?: string;
      roleDefinitionId: string;
      delegatedRoleDefinitionIds?: string[];
    }[];
    eligibleAuthorizations?: {
      principalId: string;
      principalIdDisplayName?: string;
      roleDefinitionId: string;
      justInTimeAccessPolicy?: {
        multiFactorAuthProvider: "Azure" | "None";
        maximumActivationDuration?: string;
        managedByTenantApprovers?: {
          principalId: string;
          principalIdDisplayName?: string;
        }[];
      };
    }[];
    offerDisplayName?: string;
    publisherDisplayName?: string;
    planDisplayName?: string;
  };
  plan?: { name: string; publisher: string; product: string; version: string };
  id?: string;
  type?: string;
  name?: string;
}
export const MarketplaceRegistrationDefinitionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        managedByTenantId: Schema.String,
        authorizations: Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            principalIdDisplayName: Schema.optional(Schema.String),
            roleDefinitionId: Schema.String,
            delegatedRoleDefinitionIds: Schema.optional(
              Schema.Array(Schema.String),
            ),
          }),
        ),
        eligibleAuthorizations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              principalId: Schema.String,
              principalIdDisplayName: Schema.optional(Schema.String),
              roleDefinitionId: Schema.String,
              justInTimeAccessPolicy: Schema.optional(
                Schema.Struct({
                  multiFactorAuthProvider: Schema.Literals(["Azure", "None"]),
                  maximumActivationDuration: Schema.optional(Schema.String),
                  managedByTenantApprovers: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        principalId: Schema.String,
                        principalIdDisplayName: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
        ),
        offerDisplayName: Schema.optional(Schema.String),
        publisherDisplayName: Schema.optional(Schema.String),
        planDisplayName: Schema.optional(Schema.String),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        version: Schema.String,
      }),
    ),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MarketplaceRegistrationDefinitionsGetOutput>;

// The operation
/**
 * Get the marketplace registration definition for the marketplace identifier.
 *
 * @param scope - The scope of the resource.
 * @param marketplaceIdentifier - The Azure Marketplace identifier. Expected formats: {publisher}.{product[-preview]}.{planName}.{version} or {publisher}.{product[-preview]}.{planName} or {publisher}.{product[-preview]} or {publisher}).
 * @param api-version - The API version to use for this operation.
 */
export const MarketplaceRegistrationDefinitionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceRegistrationDefinitionsGetInput,
    outputSchema: MarketplaceRegistrationDefinitionsGetOutput,
  }));
// Input Schema
export interface MarketplaceRegistrationDefinitionsListInput {
  scope: string;
  $filter?: string;
}
export const MarketplaceRegistrationDefinitionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.ManagedServices/marketplaceRegistrationDefinitions",
      apiVersion: "2022-10-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceRegistrationDefinitionsListInput>;

// Output Schema
export interface MarketplaceRegistrationDefinitionsListOutput {
  value?: {
    properties?: {
      managedByTenantId: string;
      authorizations: {
        principalId: string;
        principalIdDisplayName?: string;
        roleDefinitionId: string;
        delegatedRoleDefinitionIds?: string[];
      }[];
      eligibleAuthorizations?: {
        principalId: string;
        principalIdDisplayName?: string;
        roleDefinitionId: string;
        justInTimeAccessPolicy?: {
          multiFactorAuthProvider: "Azure" | "None";
          maximumActivationDuration?: string;
          managedByTenantApprovers?: {
            principalId: string;
            principalIdDisplayName?: string;
          }[];
        };
      }[];
      offerDisplayName?: string;
      publisherDisplayName?: string;
      planDisplayName?: string;
    };
    plan?: {
      name: string;
      publisher: string;
      product: string;
      version: string;
    };
    id?: string;
    type?: string;
    name?: string;
  }[];
  nextLink?: string;
}
export const MarketplaceRegistrationDefinitionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              managedByTenantId: Schema.String,
              authorizations: Schema.Array(
                Schema.Struct({
                  principalId: Schema.String,
                  principalIdDisplayName: Schema.optional(Schema.String),
                  roleDefinitionId: Schema.String,
                  delegatedRoleDefinitionIds: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                }),
              ),
              eligibleAuthorizations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    principalId: Schema.String,
                    principalIdDisplayName: Schema.optional(Schema.String),
                    roleDefinitionId: Schema.String,
                    justInTimeAccessPolicy: Schema.optional(
                      Schema.Struct({
                        multiFactorAuthProvider: Schema.Literals([
                          "Azure",
                          "None",
                        ]),
                        maximumActivationDuration: Schema.optional(
                          Schema.String,
                        ),
                        managedByTenantApprovers: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              principalId: Schema.String,
                              principalIdDisplayName: Schema.optional(
                                Schema.String,
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
              ),
              offerDisplayName: Schema.optional(Schema.String),
              publisherDisplayName: Schema.optional(Schema.String),
              planDisplayName: Schema.optional(Schema.String),
            }),
          ),
          plan: Schema.optional(
            Schema.Struct({
              name: Schema.String,
              publisher: Schema.String,
              product: Schema.String,
              version: Schema.String,
            }),
          ),
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MarketplaceRegistrationDefinitionsListOutput>;

// The operation
/**
 * Gets a list of the marketplace registration definitions for the marketplace identifier.
 *
 * @param scope - The scope of the resource.
 * @param $filter - The filter query parameter to filter managed services resources by.
 * @param api-version - The API version to use for this operation.
 */
export const MarketplaceRegistrationDefinitionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceRegistrationDefinitionsListInput,
    outputSchema: MarketplaceRegistrationDefinitionsListOutput,
  }));
// Input Schema
export interface MarketplaceRegistrationDefinitionsWithoutScopeGetInput {
  marketplaceIdentifier: string;
}
export const MarketplaceRegistrationDefinitionsWithoutScopeGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    marketplaceIdentifier: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ManagedServices/marketplaceRegistrationDefinitions/{marketplaceIdentifier}",
      apiVersion: "2022-10-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceRegistrationDefinitionsWithoutScopeGetInput>;

// Output Schema
export interface MarketplaceRegistrationDefinitionsWithoutScopeGetOutput {
  properties?: {
    managedByTenantId: string;
    authorizations: {
      principalId: string;
      principalIdDisplayName?: string;
      roleDefinitionId: string;
      delegatedRoleDefinitionIds?: string[];
    }[];
    eligibleAuthorizations?: {
      principalId: string;
      principalIdDisplayName?: string;
      roleDefinitionId: string;
      justInTimeAccessPolicy?: {
        multiFactorAuthProvider: "Azure" | "None";
        maximumActivationDuration?: string;
        managedByTenantApprovers?: {
          principalId: string;
          principalIdDisplayName?: string;
        }[];
      };
    }[];
    offerDisplayName?: string;
    publisherDisplayName?: string;
    planDisplayName?: string;
  };
  plan?: { name: string; publisher: string; product: string; version: string };
  id?: string;
  type?: string;
  name?: string;
}
export const MarketplaceRegistrationDefinitionsWithoutScopeGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        managedByTenantId: Schema.String,
        authorizations: Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            principalIdDisplayName: Schema.optional(Schema.String),
            roleDefinitionId: Schema.String,
            delegatedRoleDefinitionIds: Schema.optional(
              Schema.Array(Schema.String),
            ),
          }),
        ),
        eligibleAuthorizations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              principalId: Schema.String,
              principalIdDisplayName: Schema.optional(Schema.String),
              roleDefinitionId: Schema.String,
              justInTimeAccessPolicy: Schema.optional(
                Schema.Struct({
                  multiFactorAuthProvider: Schema.Literals(["Azure", "None"]),
                  maximumActivationDuration: Schema.optional(Schema.String),
                  managedByTenantApprovers: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        principalId: Schema.String,
                        principalIdDisplayName: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
        ),
        offerDisplayName: Schema.optional(Schema.String),
        publisherDisplayName: Schema.optional(Schema.String),
        planDisplayName: Schema.optional(Schema.String),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        version: Schema.String,
      }),
    ),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MarketplaceRegistrationDefinitionsWithoutScopeGetOutput>;

// The operation
/**
 * Get the marketplace registration definition for the marketplace identifier.
 *
 * @param marketplaceIdentifier - The Azure Marketplace identifier. Expected formats: {publisher}.{product[-preview]}.{planName}.{version} or {publisher}.{product[-preview]}.{planName} or {publisher}.{product[-preview]} or {publisher}).
 * @param api-version - The API version to use for this operation.
 */
export const MarketplaceRegistrationDefinitionsWithoutScopeGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceRegistrationDefinitionsWithoutScopeGetInput,
    outputSchema: MarketplaceRegistrationDefinitionsWithoutScopeGetOutput,
  }));
// Input Schema
export interface MarketplaceRegistrationDefinitionsWithoutScopeListInput {
  $filter?: string;
}
export const MarketplaceRegistrationDefinitionsWithoutScopeListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.ManagedServices/marketplaceRegistrationDefinitions",
      apiVersion: "2022-10-01",
    }),
  ) as unknown as Schema.Codec<MarketplaceRegistrationDefinitionsWithoutScopeListInput>;

// Output Schema
export interface MarketplaceRegistrationDefinitionsWithoutScopeListOutput {
  value?: {
    properties?: {
      managedByTenantId: string;
      authorizations: {
        principalId: string;
        principalIdDisplayName?: string;
        roleDefinitionId: string;
        delegatedRoleDefinitionIds?: string[];
      }[];
      eligibleAuthorizations?: {
        principalId: string;
        principalIdDisplayName?: string;
        roleDefinitionId: string;
        justInTimeAccessPolicy?: {
          multiFactorAuthProvider: "Azure" | "None";
          maximumActivationDuration?: string;
          managedByTenantApprovers?: {
            principalId: string;
            principalIdDisplayName?: string;
          }[];
        };
      }[];
      offerDisplayName?: string;
      publisherDisplayName?: string;
      planDisplayName?: string;
    };
    plan?: {
      name: string;
      publisher: string;
      product: string;
      version: string;
    };
    id?: string;
    type?: string;
    name?: string;
  }[];
  nextLink?: string;
}
export const MarketplaceRegistrationDefinitionsWithoutScopeListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              managedByTenantId: Schema.String,
              authorizations: Schema.Array(
                Schema.Struct({
                  principalId: Schema.String,
                  principalIdDisplayName: Schema.optional(Schema.String),
                  roleDefinitionId: Schema.String,
                  delegatedRoleDefinitionIds: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                }),
              ),
              eligibleAuthorizations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    principalId: Schema.String,
                    principalIdDisplayName: Schema.optional(Schema.String),
                    roleDefinitionId: Schema.String,
                    justInTimeAccessPolicy: Schema.optional(
                      Schema.Struct({
                        multiFactorAuthProvider: Schema.Literals([
                          "Azure",
                          "None",
                        ]),
                        maximumActivationDuration: Schema.optional(
                          Schema.String,
                        ),
                        managedByTenantApprovers: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              principalId: Schema.String,
                              principalIdDisplayName: Schema.optional(
                                Schema.String,
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
              ),
              offerDisplayName: Schema.optional(Schema.String),
              publisherDisplayName: Schema.optional(Schema.String),
              planDisplayName: Schema.optional(Schema.String),
            }),
          ),
          plan: Schema.optional(
            Schema.Struct({
              name: Schema.String,
              publisher: Schema.String,
              product: Schema.String,
              version: Schema.String,
            }),
          ),
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MarketplaceRegistrationDefinitionsWithoutScopeListOutput>;

// The operation
/**
 * Gets a list of the marketplace registration definitions for the marketplace identifier.
 *
 * @param $filter - The filter query parameter to filter managed services resources by.
 * @param api-version - The API version to use for this operation.
 */
export const MarketplaceRegistrationDefinitionsWithoutScopeList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MarketplaceRegistrationDefinitionsWithoutScopeListInput,
    outputSchema: MarketplaceRegistrationDefinitionsWithoutScopeListOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.ManagedServices/operations",
    apiVersion: "2022-10-01",
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
      }),
    ),
  ),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Gets a list of the operations.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface OperationsWithScopeListInput {
  scope: string;
}
export const OperationsWithScopeListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.ManagedServices/operations",
      apiVersion: "2022-10-01",
    }),
  ) as unknown as Schema.Codec<OperationsWithScopeListInput>;

// Output Schema
export interface OperationsWithScopeListOutput {
  value?: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
  }[];
}
export const OperationsWithScopeListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
        }),
      ),
    ),
  }) as unknown as Schema.Codec<OperationsWithScopeListOutput>;

// The operation
/**
 * Gets a list of the operations with the scope.
 *
 * @param scope - The scope of the resource.
 * @param api-version - The API version to use for this operation.
 */
export const OperationsWithScopeList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OperationsWithScopeListInput,
    outputSchema: OperationsWithScopeListOutput,
  }),
);
// Input Schema
export interface RegistrationAssignmentsCreateOrUpdateInput {
  scope: string;
  registrationAssignmentId: string;
  properties?: {
    registrationDefinitionId: string;
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Ready"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Updating";
    registrationDefinition?: {
      properties?: {
        description?: string;
        authorizations?: {
          principalId: string;
          principalIdDisplayName?: string;
          roleDefinitionId: string;
          delegatedRoleDefinitionIds?: string[];
        }[];
        eligibleAuthorizations?: {
          principalId: string;
          principalIdDisplayName?: string;
          roleDefinitionId: string;
          justInTimeAccessPolicy?: {
            multiFactorAuthProvider: "Azure" | "None";
            maximumActivationDuration?: string;
            managedByTenantApprovers?: {
              principalId: string;
              principalIdDisplayName?: string;
            }[];
          };
        }[];
        registrationDefinitionName?: string;
        provisioningState?:
          | "NotSpecified"
          | "Accepted"
          | "Running"
          | "Ready"
          | "Creating"
          | "Created"
          | "Deleting"
          | "Deleted"
          | "Canceled"
          | "Failed"
          | "Succeeded"
          | "Updating";
        manageeTenantId?: string;
        manageeTenantName?: string;
        managedByTenantId?: string;
        managedByTenantName?: string;
      };
      plan?: {
        name: string;
        publisher: string;
        product: string;
        version: string;
      };
      id?: string;
      type?: string;
      name?: string;
      systemData?: {
        createdBy?: string;
        createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
        createdAt?: string;
        lastModifiedBy?: string;
        lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
        lastModifiedAt?: string;
      };
    };
  };
  id?: string;
  type?: string;
  name?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RegistrationAssignmentsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    registrationAssignmentId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        registrationDefinitionId: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Ready",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        registrationDefinition: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                description: Schema.optional(Schema.String),
                authorizations: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      principalId: Schema.String,
                      principalIdDisplayName: Schema.optional(Schema.String),
                      roleDefinitionId: Schema.String,
                      delegatedRoleDefinitionIds: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                    }),
                  ),
                ),
                eligibleAuthorizations: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      principalId: Schema.String,
                      principalIdDisplayName: Schema.optional(Schema.String),
                      roleDefinitionId: Schema.String,
                      justInTimeAccessPolicy: Schema.optional(
                        Schema.Struct({
                          multiFactorAuthProvider: Schema.Literals([
                            "Azure",
                            "None",
                          ]),
                          maximumActivationDuration: Schema.optional(
                            Schema.String,
                          ),
                          managedByTenantApprovers: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                principalId: Schema.String,
                                principalIdDisplayName: Schema.optional(
                                  Schema.String,
                                ),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
                registrationDefinitionName: Schema.optional(Schema.String),
                provisioningState: Schema.optional(
                  Schema.Literals([
                    "NotSpecified",
                    "Accepted",
                    "Running",
                    "Ready",
                    "Creating",
                    "Created",
                    "Deleting",
                    "Deleted",
                    "Canceled",
                    "Failed",
                    "Succeeded",
                    "Updating",
                  ]),
                ),
                manageeTenantId: Schema.optional(Schema.String),
                manageeTenantName: Schema.optional(Schema.String),
                managedByTenantId: Schema.optional(Schema.String),
                managedByTenantName: Schema.optional(Schema.String),
              }),
            ),
            plan: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                publisher: Schema.String,
                product: Schema.String,
                version: Schema.String,
              }),
            ),
            id: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
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
      }),
    ),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{scope}/providers/Microsoft.ManagedServices/registrationAssignments/{registrationAssignmentId}",
      apiVersion: "2022-10-01",
    }),
  ) as unknown as Schema.Codec<RegistrationAssignmentsCreateOrUpdateInput>;

// Output Schema
export interface RegistrationAssignmentsCreateOrUpdateOutput {
  properties?: {
    registrationDefinitionId: string;
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Ready"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Updating";
    registrationDefinition?: {
      properties?: {
        description?: string;
        authorizations?: {
          principalId: string;
          principalIdDisplayName?: string;
          roleDefinitionId: string;
          delegatedRoleDefinitionIds?: string[];
        }[];
        eligibleAuthorizations?: {
          principalId: string;
          principalIdDisplayName?: string;
          roleDefinitionId: string;
          justInTimeAccessPolicy?: {
            multiFactorAuthProvider: "Azure" | "None";
            maximumActivationDuration?: string;
            managedByTenantApprovers?: {
              principalId: string;
              principalIdDisplayName?: string;
            }[];
          };
        }[];
        registrationDefinitionName?: string;
        provisioningState?:
          | "NotSpecified"
          | "Accepted"
          | "Running"
          | "Ready"
          | "Creating"
          | "Created"
          | "Deleting"
          | "Deleted"
          | "Canceled"
          | "Failed"
          | "Succeeded"
          | "Updating";
        manageeTenantId?: string;
        manageeTenantName?: string;
        managedByTenantId?: string;
        managedByTenantName?: string;
      };
      plan?: {
        name: string;
        publisher: string;
        product: string;
        version: string;
      };
      id?: string;
      type?: string;
      name?: string;
      systemData?: {
        createdBy?: string;
        createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
        createdAt?: string;
        lastModifiedBy?: string;
        lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
        lastModifiedAt?: string;
      };
    };
  };
  id?: string;
  type?: string;
  name?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RegistrationAssignmentsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        registrationDefinitionId: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Ready",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        registrationDefinition: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                description: Schema.optional(Schema.String),
                authorizations: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      principalId: Schema.String,
                      principalIdDisplayName: Schema.optional(Schema.String),
                      roleDefinitionId: Schema.String,
                      delegatedRoleDefinitionIds: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                    }),
                  ),
                ),
                eligibleAuthorizations: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      principalId: Schema.String,
                      principalIdDisplayName: Schema.optional(Schema.String),
                      roleDefinitionId: Schema.String,
                      justInTimeAccessPolicy: Schema.optional(
                        Schema.Struct({
                          multiFactorAuthProvider: Schema.Literals([
                            "Azure",
                            "None",
                          ]),
                          maximumActivationDuration: Schema.optional(
                            Schema.String,
                          ),
                          managedByTenantApprovers: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                principalId: Schema.String,
                                principalIdDisplayName: Schema.optional(
                                  Schema.String,
                                ),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
                registrationDefinitionName: Schema.optional(Schema.String),
                provisioningState: Schema.optional(
                  Schema.Literals([
                    "NotSpecified",
                    "Accepted",
                    "Running",
                    "Ready",
                    "Creating",
                    "Created",
                    "Deleting",
                    "Deleted",
                    "Canceled",
                    "Failed",
                    "Succeeded",
                    "Updating",
                  ]),
                ),
                manageeTenantId: Schema.optional(Schema.String),
                manageeTenantName: Schema.optional(Schema.String),
                managedByTenantId: Schema.optional(Schema.String),
                managedByTenantName: Schema.optional(Schema.String),
              }),
            ),
            plan: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                publisher: Schema.String,
                product: Schema.String,
                version: Schema.String,
              }),
            ),
            id: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
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
      }),
    ),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RegistrationAssignmentsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a registration assignment.
 *
 * @param scope - The scope of the resource.
 * @param registrationAssignmentId - The GUID of the registration assignment.
 * @param api-version - The API version to use for this operation.
 */
export const RegistrationAssignmentsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegistrationAssignmentsCreateOrUpdateInput,
    outputSchema: RegistrationAssignmentsCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegistrationAssignmentsDeleteInput {
  scope: string;
  registrationAssignmentId: string;
}
export const RegistrationAssignmentsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    registrationAssignmentId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{scope}/providers/Microsoft.ManagedServices/registrationAssignments/{registrationAssignmentId}",
      apiVersion: "2022-10-01",
    }),
  ) as unknown as Schema.Codec<RegistrationAssignmentsDeleteInput>;

// Output Schema
export type RegistrationAssignmentsDeleteOutput = void;
export const RegistrationAssignmentsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistrationAssignmentsDeleteOutput>;

// The operation
/**
 * Deletes the specified registration assignment.
 *
 * @param scope - The scope of the resource.
 * @param registrationAssignmentId - The GUID of the registration assignment.
 * @param api-version - The API version to use for this operation.
 */
export const RegistrationAssignmentsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegistrationAssignmentsDeleteInput,
    outputSchema: RegistrationAssignmentsDeleteOutput,
  }));
// Input Schema
export interface RegistrationAssignmentsGetInput {
  scope: string;
  registrationAssignmentId: string;
  $expandRegistrationDefinition?: boolean;
}
export const RegistrationAssignmentsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    registrationAssignmentId: Schema.String.pipe(T.PathParam()),
    $expandRegistrationDefinition: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.ManagedServices/registrationAssignments/{registrationAssignmentId}",
      apiVersion: "2022-10-01",
    }),
  ) as unknown as Schema.Codec<RegistrationAssignmentsGetInput>;

// Output Schema
export interface RegistrationAssignmentsGetOutput {
  properties?: {
    registrationDefinitionId: string;
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Ready"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Updating";
    registrationDefinition?: {
      properties?: {
        description?: string;
        authorizations?: {
          principalId: string;
          principalIdDisplayName?: string;
          roleDefinitionId: string;
          delegatedRoleDefinitionIds?: string[];
        }[];
        eligibleAuthorizations?: {
          principalId: string;
          principalIdDisplayName?: string;
          roleDefinitionId: string;
          justInTimeAccessPolicy?: {
            multiFactorAuthProvider: "Azure" | "None";
            maximumActivationDuration?: string;
            managedByTenantApprovers?: {
              principalId: string;
              principalIdDisplayName?: string;
            }[];
          };
        }[];
        registrationDefinitionName?: string;
        provisioningState?:
          | "NotSpecified"
          | "Accepted"
          | "Running"
          | "Ready"
          | "Creating"
          | "Created"
          | "Deleting"
          | "Deleted"
          | "Canceled"
          | "Failed"
          | "Succeeded"
          | "Updating";
        manageeTenantId?: string;
        manageeTenantName?: string;
        managedByTenantId?: string;
        managedByTenantName?: string;
      };
      plan?: {
        name: string;
        publisher: string;
        product: string;
        version: string;
      };
      id?: string;
      type?: string;
      name?: string;
      systemData?: {
        createdBy?: string;
        createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
        createdAt?: string;
        lastModifiedBy?: string;
        lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
        lastModifiedAt?: string;
      };
    };
  };
  id?: string;
  type?: string;
  name?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RegistrationAssignmentsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        registrationDefinitionId: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Ready",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        registrationDefinition: Schema.optional(
          Schema.Struct({
            properties: Schema.optional(
              Schema.Struct({
                description: Schema.optional(Schema.String),
                authorizations: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      principalId: Schema.String,
                      principalIdDisplayName: Schema.optional(Schema.String),
                      roleDefinitionId: Schema.String,
                      delegatedRoleDefinitionIds: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                    }),
                  ),
                ),
                eligibleAuthorizations: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      principalId: Schema.String,
                      principalIdDisplayName: Schema.optional(Schema.String),
                      roleDefinitionId: Schema.String,
                      justInTimeAccessPolicy: Schema.optional(
                        Schema.Struct({
                          multiFactorAuthProvider: Schema.Literals([
                            "Azure",
                            "None",
                          ]),
                          maximumActivationDuration: Schema.optional(
                            Schema.String,
                          ),
                          managedByTenantApprovers: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                principalId: Schema.String,
                                principalIdDisplayName: Schema.optional(
                                  Schema.String,
                                ),
                              }),
                            ),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
                registrationDefinitionName: Schema.optional(Schema.String),
                provisioningState: Schema.optional(
                  Schema.Literals([
                    "NotSpecified",
                    "Accepted",
                    "Running",
                    "Ready",
                    "Creating",
                    "Created",
                    "Deleting",
                    "Deleted",
                    "Canceled",
                    "Failed",
                    "Succeeded",
                    "Updating",
                  ]),
                ),
                manageeTenantId: Schema.optional(Schema.String),
                manageeTenantName: Schema.optional(Schema.String),
                managedByTenantId: Schema.optional(Schema.String),
                managedByTenantName: Schema.optional(Schema.String),
              }),
            ),
            plan: Schema.optional(
              Schema.Struct({
                name: Schema.String,
                publisher: Schema.String,
                product: Schema.String,
                version: Schema.String,
              }),
            ),
            id: Schema.optional(Schema.String),
            type: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
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
      }),
    ),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RegistrationAssignmentsGetOutput>;

// The operation
/**
 * Gets the details of the specified registration assignment.
 *
 * @param scope - The scope of the resource.
 * @param registrationAssignmentId - The GUID of the registration assignment.
 * @param $expandRegistrationDefinition - The flag indicating whether to return the registration definition details along with the registration assignment details.
 * @param api-version - The API version to use for this operation.
 */
export const RegistrationAssignmentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegistrationAssignmentsGetInput,
    outputSchema: RegistrationAssignmentsGetOutput,
  }),
);
// Input Schema
export interface RegistrationAssignmentsListInput {
  scope: string;
  $expandRegistrationDefinition?: boolean;
  $filter?: string;
}
export const RegistrationAssignmentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    $expandRegistrationDefinition: Schema.optional(Schema.Boolean),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.ManagedServices/registrationAssignments",
      apiVersion: "2022-10-01",
    }),
  ) as unknown as Schema.Codec<RegistrationAssignmentsListInput>;

// Output Schema
export interface RegistrationAssignmentsListOutput {
  value?: {
    properties?: {
      registrationDefinitionId: string;
      provisioningState?:
        | "NotSpecified"
        | "Accepted"
        | "Running"
        | "Ready"
        | "Creating"
        | "Created"
        | "Deleting"
        | "Deleted"
        | "Canceled"
        | "Failed"
        | "Succeeded"
        | "Updating";
      registrationDefinition?: {
        properties?: {
          description?: string;
          authorizations?: {
            principalId: string;
            principalIdDisplayName?: string;
            roleDefinitionId: string;
            delegatedRoleDefinitionIds?: string[];
          }[];
          eligibleAuthorizations?: {
            principalId: string;
            principalIdDisplayName?: string;
            roleDefinitionId: string;
            justInTimeAccessPolicy?: {
              multiFactorAuthProvider: "Azure" | "None";
              maximumActivationDuration?: string;
              managedByTenantApprovers?: {
                principalId: string;
                principalIdDisplayName?: string;
              }[];
            };
          }[];
          registrationDefinitionName?: string;
          provisioningState?:
            | "NotSpecified"
            | "Accepted"
            | "Running"
            | "Ready"
            | "Creating"
            | "Created"
            | "Deleting"
            | "Deleted"
            | "Canceled"
            | "Failed"
            | "Succeeded"
            | "Updating";
          manageeTenantId?: string;
          manageeTenantName?: string;
          managedByTenantId?: string;
          managedByTenantName?: string;
        };
        plan?: {
          name: string;
          publisher: string;
          product: string;
          version: string;
        };
        id?: string;
        type?: string;
        name?: string;
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
    };
    id?: string;
    type?: string;
    name?: string;
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
export const RegistrationAssignmentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              registrationDefinitionId: Schema.String,
              provisioningState: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "Accepted",
                  "Running",
                  "Ready",
                  "Creating",
                  "Created",
                  "Deleting",
                  "Deleted",
                  "Canceled",
                  "Failed",
                  "Succeeded",
                  "Updating",
                ]),
              ),
              registrationDefinition: Schema.optional(
                Schema.Struct({
                  properties: Schema.optional(
                    Schema.Struct({
                      description: Schema.optional(Schema.String),
                      authorizations: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            principalId: Schema.String,
                            principalIdDisplayName: Schema.optional(
                              Schema.String,
                            ),
                            roleDefinitionId: Schema.String,
                            delegatedRoleDefinitionIds: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                          }),
                        ),
                      ),
                      eligibleAuthorizations: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            principalId: Schema.String,
                            principalIdDisplayName: Schema.optional(
                              Schema.String,
                            ),
                            roleDefinitionId: Schema.String,
                            justInTimeAccessPolicy: Schema.optional(
                              Schema.Struct({
                                multiFactorAuthProvider: Schema.Literals([
                                  "Azure",
                                  "None",
                                ]),
                                maximumActivationDuration: Schema.optional(
                                  Schema.String,
                                ),
                                managedByTenantApprovers: Schema.optional(
                                  Schema.Array(
                                    Schema.Struct({
                                      principalId: Schema.String,
                                      principalIdDisplayName: Schema.optional(
                                        Schema.String,
                                      ),
                                    }),
                                  ),
                                ),
                              }),
                            ),
                          }),
                        ),
                      ),
                      registrationDefinitionName: Schema.optional(
                        Schema.String,
                      ),
                      provisioningState: Schema.optional(
                        Schema.Literals([
                          "NotSpecified",
                          "Accepted",
                          "Running",
                          "Ready",
                          "Creating",
                          "Created",
                          "Deleting",
                          "Deleted",
                          "Canceled",
                          "Failed",
                          "Succeeded",
                          "Updating",
                        ]),
                      ),
                      manageeTenantId: Schema.optional(Schema.String),
                      manageeTenantName: Schema.optional(Schema.String),
                      managedByTenantId: Schema.optional(Schema.String),
                      managedByTenantName: Schema.optional(Schema.String),
                    }),
                  ),
                  plan: Schema.optional(
                    Schema.Struct({
                      name: Schema.String,
                      publisher: Schema.String,
                      product: Schema.String,
                      version: Schema.String,
                    }),
                  ),
                  id: Schema.optional(Schema.String),
                  type: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
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
            }),
          ),
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RegistrationAssignmentsListOutput>;

// The operation
/**
 * Gets a list of the registration assignments.
 *
 * @param scope - The scope of the resource.
 * @param $expandRegistrationDefinition - The flag indicating whether to return the registration definition details along with the registration assignment details.
 * @param api-version - The API version to use for this operation.
 * @param $filter - The filter query parameter to filter managed services resources by.
 */
export const RegistrationAssignmentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegistrationAssignmentsListInput,
    outputSchema: RegistrationAssignmentsListOutput,
  }),
);
// Input Schema
export interface RegistrationDefinitionsCreateOrUpdateInput {
  registrationDefinitionId: string;
  scope: string;
  properties?: {
    description?: string;
    authorizations: {
      principalId: string;
      principalIdDisplayName?: string;
      roleDefinitionId: string;
      delegatedRoleDefinitionIds?: string[];
    }[];
    eligibleAuthorizations?: {
      principalId: string;
      principalIdDisplayName?: string;
      roleDefinitionId: string;
      justInTimeAccessPolicy?: {
        multiFactorAuthProvider: "Azure" | "None";
        maximumActivationDuration?: string;
        managedByTenantApprovers?: {
          principalId: string;
          principalIdDisplayName?: string;
        }[];
      };
    }[];
    registrationDefinitionName?: string;
    managedByTenantId: string;
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Ready"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Updating";
    manageeTenantId?: string;
    manageeTenantName?: string;
    managedByTenantName?: string;
  };
  plan?: { name: string; publisher: string; product: string; version: string };
  id?: string;
  type?: string;
  name?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RegistrationDefinitionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registrationDefinitionId: Schema.String.pipe(T.PathParam()),
    scope: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        authorizations: Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            principalIdDisplayName: Schema.optional(Schema.String),
            roleDefinitionId: Schema.String,
            delegatedRoleDefinitionIds: Schema.optional(
              Schema.Array(Schema.String),
            ),
          }),
        ),
        eligibleAuthorizations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              principalId: Schema.String,
              principalIdDisplayName: Schema.optional(Schema.String),
              roleDefinitionId: Schema.String,
              justInTimeAccessPolicy: Schema.optional(
                Schema.Struct({
                  multiFactorAuthProvider: Schema.Literals(["Azure", "None"]),
                  maximumActivationDuration: Schema.optional(Schema.String),
                  managedByTenantApprovers: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        principalId: Schema.String,
                        principalIdDisplayName: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
        ),
        registrationDefinitionName: Schema.optional(Schema.String),
        managedByTenantId: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Ready",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        manageeTenantId: Schema.optional(Schema.String),
        manageeTenantName: Schema.optional(Schema.String),
        managedByTenantName: Schema.optional(Schema.String),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        version: Schema.String,
      }),
    ),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/{scope}/providers/Microsoft.ManagedServices/registrationDefinitions/{registrationDefinitionId}",
      apiVersion: "2022-10-01",
    }),
  ) as unknown as Schema.Codec<RegistrationDefinitionsCreateOrUpdateInput>;

// Output Schema
export interface RegistrationDefinitionsCreateOrUpdateOutput {
  properties?: {
    description?: string;
    authorizations: {
      principalId: string;
      principalIdDisplayName?: string;
      roleDefinitionId: string;
      delegatedRoleDefinitionIds?: string[];
    }[];
    eligibleAuthorizations?: {
      principalId: string;
      principalIdDisplayName?: string;
      roleDefinitionId: string;
      justInTimeAccessPolicy?: {
        multiFactorAuthProvider: "Azure" | "None";
        maximumActivationDuration?: string;
        managedByTenantApprovers?: {
          principalId: string;
          principalIdDisplayName?: string;
        }[];
      };
    }[];
    registrationDefinitionName?: string;
    managedByTenantId: string;
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Ready"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Updating";
    manageeTenantId?: string;
    manageeTenantName?: string;
    managedByTenantName?: string;
  };
  plan?: { name: string; publisher: string; product: string; version: string };
  id?: string;
  type?: string;
  name?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RegistrationDefinitionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        authorizations: Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            principalIdDisplayName: Schema.optional(Schema.String),
            roleDefinitionId: Schema.String,
            delegatedRoleDefinitionIds: Schema.optional(
              Schema.Array(Schema.String),
            ),
          }),
        ),
        eligibleAuthorizations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              principalId: Schema.String,
              principalIdDisplayName: Schema.optional(Schema.String),
              roleDefinitionId: Schema.String,
              justInTimeAccessPolicy: Schema.optional(
                Schema.Struct({
                  multiFactorAuthProvider: Schema.Literals(["Azure", "None"]),
                  maximumActivationDuration: Schema.optional(Schema.String),
                  managedByTenantApprovers: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        principalId: Schema.String,
                        principalIdDisplayName: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
        ),
        registrationDefinitionName: Schema.optional(Schema.String),
        managedByTenantId: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Ready",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        manageeTenantId: Schema.optional(Schema.String),
        manageeTenantName: Schema.optional(Schema.String),
        managedByTenantName: Schema.optional(Schema.String),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        version: Schema.String,
      }),
    ),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RegistrationDefinitionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a registration definition.
 *
 * @param registrationDefinitionId - The GUID of the registration definition.
 * @param api-version - The API version to use for this operation.
 * @param scope - The scope of the resource.
 */
export const RegistrationDefinitionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegistrationDefinitionsCreateOrUpdateInput,
    outputSchema: RegistrationDefinitionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface RegistrationDefinitionsDeleteInput {
  registrationDefinitionId: string;
  scope: string;
}
export const RegistrationDefinitionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registrationDefinitionId: Schema.String.pipe(T.PathParam()),
    scope: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/{scope}/providers/Microsoft.ManagedServices/registrationDefinitions/{registrationDefinitionId}",
      apiVersion: "2022-10-01",
    }),
  ) as unknown as Schema.Codec<RegistrationDefinitionsDeleteInput>;

// Output Schema
export type RegistrationDefinitionsDeleteOutput = void;
export const RegistrationDefinitionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistrationDefinitionsDeleteOutput>;

// The operation
/**
 * Deletes the registration definition.
 *
 * @param registrationDefinitionId - The GUID of the registration definition.
 * @param api-version - The API version to use for this operation.
 * @param scope - The scope of the resource.
 */
export const RegistrationDefinitionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RegistrationDefinitionsDeleteInput,
    outputSchema: RegistrationDefinitionsDeleteOutput,
  }));
// Input Schema
export interface RegistrationDefinitionsGetInput {
  scope: string;
  registrationDefinitionId: string;
}
export const RegistrationDefinitionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    registrationDefinitionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.ManagedServices/registrationDefinitions/{registrationDefinitionId}",
      apiVersion: "2022-10-01",
    }),
  ) as unknown as Schema.Codec<RegistrationDefinitionsGetInput>;

// Output Schema
export interface RegistrationDefinitionsGetOutput {
  properties?: {
    description?: string;
    authorizations: {
      principalId: string;
      principalIdDisplayName?: string;
      roleDefinitionId: string;
      delegatedRoleDefinitionIds?: string[];
    }[];
    eligibleAuthorizations?: {
      principalId: string;
      principalIdDisplayName?: string;
      roleDefinitionId: string;
      justInTimeAccessPolicy?: {
        multiFactorAuthProvider: "Azure" | "None";
        maximumActivationDuration?: string;
        managedByTenantApprovers?: {
          principalId: string;
          principalIdDisplayName?: string;
        }[];
      };
    }[];
    registrationDefinitionName?: string;
    managedByTenantId: string;
    provisioningState?:
      | "NotSpecified"
      | "Accepted"
      | "Running"
      | "Ready"
      | "Creating"
      | "Created"
      | "Deleting"
      | "Deleted"
      | "Canceled"
      | "Failed"
      | "Succeeded"
      | "Updating";
    manageeTenantId?: string;
    manageeTenantName?: string;
    managedByTenantName?: string;
  };
  plan?: { name: string; publisher: string; product: string; version: string };
  id?: string;
  type?: string;
  name?: string;
  systemData?: {
    createdBy?: string;
    createdByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: "User" | "Application" | "ManagedIdentity" | "Key";
    lastModifiedAt?: string;
  };
}
export const RegistrationDefinitionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.Struct({
        description: Schema.optional(Schema.String),
        authorizations: Schema.Array(
          Schema.Struct({
            principalId: Schema.String,
            principalIdDisplayName: Schema.optional(Schema.String),
            roleDefinitionId: Schema.String,
            delegatedRoleDefinitionIds: Schema.optional(
              Schema.Array(Schema.String),
            ),
          }),
        ),
        eligibleAuthorizations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              principalId: Schema.String,
              principalIdDisplayName: Schema.optional(Schema.String),
              roleDefinitionId: Schema.String,
              justInTimeAccessPolicy: Schema.optional(
                Schema.Struct({
                  multiFactorAuthProvider: Schema.Literals(["Azure", "None"]),
                  maximumActivationDuration: Schema.optional(Schema.String),
                  managedByTenantApprovers: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        principalId: Schema.String,
                        principalIdDisplayName: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                }),
              ),
            }),
          ),
        ),
        registrationDefinitionName: Schema.optional(Schema.String),
        managedByTenantId: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "NotSpecified",
            "Accepted",
            "Running",
            "Ready",
            "Creating",
            "Created",
            "Deleting",
            "Deleted",
            "Canceled",
            "Failed",
            "Succeeded",
            "Updating",
          ]),
        ),
        manageeTenantId: Schema.optional(Schema.String),
        manageeTenantName: Schema.optional(Schema.String),
        managedByTenantName: Schema.optional(Schema.String),
      }),
    ),
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        version: Schema.String,
      }),
    ),
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RegistrationDefinitionsGetOutput>;

// The operation
/**
 * Gets the registration definition details.
 *
 * @param scope - The scope of the resource.
 * @param registrationDefinitionId - The GUID of the registration definition.
 * @param api-version - The API version to use for this operation.
 */
export const RegistrationDefinitionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegistrationDefinitionsGetInput,
    outputSchema: RegistrationDefinitionsGetOutput,
  }),
);
// Input Schema
export interface RegistrationDefinitionsListInput {
  scope: string;
  $filter?: string;
}
export const RegistrationDefinitionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scope: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/{scope}/providers/Microsoft.ManagedServices/registrationDefinitions",
      apiVersion: "2022-10-01",
    }),
  ) as unknown as Schema.Codec<RegistrationDefinitionsListInput>;

// Output Schema
export interface RegistrationDefinitionsListOutput {
  value?: {
    properties?: {
      description?: string;
      authorizations: {
        principalId: string;
        principalIdDisplayName?: string;
        roleDefinitionId: string;
        delegatedRoleDefinitionIds?: string[];
      }[];
      eligibleAuthorizations?: {
        principalId: string;
        principalIdDisplayName?: string;
        roleDefinitionId: string;
        justInTimeAccessPolicy?: {
          multiFactorAuthProvider: "Azure" | "None";
          maximumActivationDuration?: string;
          managedByTenantApprovers?: {
            principalId: string;
            principalIdDisplayName?: string;
          }[];
        };
      }[];
      registrationDefinitionName?: string;
      managedByTenantId: string;
      provisioningState?:
        | "NotSpecified"
        | "Accepted"
        | "Running"
        | "Ready"
        | "Creating"
        | "Created"
        | "Deleting"
        | "Deleted"
        | "Canceled"
        | "Failed"
        | "Succeeded"
        | "Updating";
      manageeTenantId?: string;
      manageeTenantName?: string;
      managedByTenantName?: string;
    };
    plan?: {
      name: string;
      publisher: string;
      product: string;
      version: string;
    };
    id?: string;
    type?: string;
    name?: string;
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
export const RegistrationDefinitionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              description: Schema.optional(Schema.String),
              authorizations: Schema.Array(
                Schema.Struct({
                  principalId: Schema.String,
                  principalIdDisplayName: Schema.optional(Schema.String),
                  roleDefinitionId: Schema.String,
                  delegatedRoleDefinitionIds: Schema.optional(
                    Schema.Array(Schema.String),
                  ),
                }),
              ),
              eligibleAuthorizations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    principalId: Schema.String,
                    principalIdDisplayName: Schema.optional(Schema.String),
                    roleDefinitionId: Schema.String,
                    justInTimeAccessPolicy: Schema.optional(
                      Schema.Struct({
                        multiFactorAuthProvider: Schema.Literals([
                          "Azure",
                          "None",
                        ]),
                        maximumActivationDuration: Schema.optional(
                          Schema.String,
                        ),
                        managedByTenantApprovers: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              principalId: Schema.String,
                              principalIdDisplayName: Schema.optional(
                                Schema.String,
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                  }),
                ),
              ),
              registrationDefinitionName: Schema.optional(Schema.String),
              managedByTenantId: Schema.String,
              provisioningState: Schema.optional(
                Schema.Literals([
                  "NotSpecified",
                  "Accepted",
                  "Running",
                  "Ready",
                  "Creating",
                  "Created",
                  "Deleting",
                  "Deleted",
                  "Canceled",
                  "Failed",
                  "Succeeded",
                  "Updating",
                ]),
              ),
              manageeTenantId: Schema.optional(Schema.String),
              manageeTenantName: Schema.optional(Schema.String),
              managedByTenantName: Schema.optional(Schema.String),
            }),
          ),
          plan: Schema.optional(
            Schema.Struct({
              name: Schema.String,
              publisher: Schema.String,
              product: Schema.String,
              version: Schema.String,
            }),
          ),
          id: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
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
  }) as unknown as Schema.Codec<RegistrationDefinitionsListOutput>;

// The operation
/**
 * Gets a list of the registration definitions.
 *
 * @param scope - The scope of the resource.
 * @param api-version - The API version to use for this operation.
 * @param $filter - The filter query parameter to filter managed services resources by.
 */
export const RegistrationDefinitionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RegistrationDefinitionsListInput,
    outputSchema: RegistrationDefinitionsListOutput,
  }),
);
