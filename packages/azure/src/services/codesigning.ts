/**
 * Azure Codesigning API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CertificateProfilesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        profileType: Schema.Literals([
          "PublicTrust",
          "PrivateTrust",
          "PrivateTrustCIPolicy",
          "VBSEnclave",
          "PublicTrustTest",
        ]),
        includeStreetAddress: Schema.optional(Schema.Boolean),
        includeCity: Schema.optional(Schema.Boolean),
        includeState: Schema.optional(Schema.Boolean),
        includeCountry: Schema.optional(Schema.Boolean),
        includePostalCode: Schema.optional(Schema.Boolean),
        identityValidationId: Schema.String,
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
        status: Schema.optional(
          Schema.Literals(["Active", "Disabled", "Suspended"]),
        ),
        certificates: Schema.optional(
          Schema.Array(
            Schema.Struct({
              serialNumber: Schema.optional(Schema.String),
              enhancedKeyUsage: Schema.optional(Schema.String),
              subjectName: Schema.optional(Schema.String),
              thumbprint: Schema.optional(Schema.String),
              createdDate: Schema.optional(Schema.String),
              expiryDate: Schema.optional(Schema.String),
              status: Schema.optional(
                Schema.Literals(["Active", "Expired", "Revoked"]),
              ),
              revocation: Schema.optional(
                Schema.Struct({
                  requestedAt: Schema.optional(Schema.String),
                  effectiveAt: Schema.optional(Schema.String),
                  reason: Schema.optional(Schema.String),
                  remarks: Schema.optional(Schema.String),
                  status: Schema.optional(
                    Schema.Literals(["Succeeded", "InProgress", "Failed"]),
                  ),
                  failureReason: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles/{profileName}",
      apiVersion: "2025-10-13",
    }),
  );
export type CertificateProfilesCreateInput =
  typeof CertificateProfilesCreateInput.Type;

// Output Schema
export const CertificateProfilesCreateOutput =
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
export type CertificateProfilesCreateOutput =
  typeof CertificateProfilesCreateOutput.Type;

// The operation
/**
 * Create a certificate profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Artifact Signing account name.
 * @param profileName - Certificate profile name.
 */
export const CertificateProfilesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CertificateProfilesCreateInput,
    outputSchema: CertificateProfilesCreateOutput,
  }),
);
// Input Schema
export const CertificateProfilesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles/{profileName}",
      apiVersion: "2025-10-13",
    }),
  );
export type CertificateProfilesDeleteInput =
  typeof CertificateProfilesDeleteInput.Type;

// Output Schema
export const CertificateProfilesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CertificateProfilesDeleteOutput =
  typeof CertificateProfilesDeleteOutput.Type;

// The operation
/**
 * Delete a certificate profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Artifact Signing account name.
 * @param profileName - Certificate profile name.
 */
export const CertificateProfilesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CertificateProfilesDeleteInput,
    outputSchema: CertificateProfilesDeleteOutput,
  }),
);
// Input Schema
export const CertificateProfilesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles/{profileName}",
      apiVersion: "2025-10-13",
    }),
  );
export type CertificateProfilesGetInput =
  typeof CertificateProfilesGetInput.Type;

// Output Schema
export const CertificateProfilesGetOutput =
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
export type CertificateProfilesGetOutput =
  typeof CertificateProfilesGetOutput.Type;

// The operation
/**
 * Get details of a certificate profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Artifact Signing account name.
 * @param profileName - Certificate profile name.
 */
export const CertificateProfilesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CertificateProfilesGetInput,
    outputSchema: CertificateProfilesGetOutput,
  }),
);
// Input Schema
export const CertificateProfilesListByCodeSigningAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles",
      apiVersion: "2025-10-13",
    }),
  );
export type CertificateProfilesListByCodeSigningAccountInput =
  typeof CertificateProfilesListByCodeSigningAccountInput.Type;

// Output Schema
export const CertificateProfilesListByCodeSigningAccountOutput =
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
export type CertificateProfilesListByCodeSigningAccountOutput =
  typeof CertificateProfilesListByCodeSigningAccountOutput.Type;

// The operation
/**
 * List certificate profiles under an artifact signing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Artifact Signing account name.
 */
export const CertificateProfilesListByCodeSigningAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CertificateProfilesListByCodeSigningAccountInput,
    outputSchema: CertificateProfilesListByCodeSigningAccountOutput,
  }));
// Input Schema
export const CertificateProfilesRevokeCertificateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    profileName: Schema.String.pipe(T.PathParam()),
    serialNumber: Schema.String,
    thumbprint: Schema.String,
    effectiveAt: Schema.String,
    reason: Schema.String,
    remarks: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles/{profileName}/revokeCertificate",
      apiVersion: "2025-10-13",
    }),
  );
export type CertificateProfilesRevokeCertificateInput =
  typeof CertificateProfilesRevokeCertificateInput.Type;

// Output Schema
export const CertificateProfilesRevokeCertificateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CertificateProfilesRevokeCertificateOutput =
  typeof CertificateProfilesRevokeCertificateOutput.Type;

// The operation
/**
 * Revoke a certificate under a certificate profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Artifact Signing account name.
 * @param profileName - Certificate profile name.
 */
export const CertificateProfilesRevokeCertificate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CertificateProfilesRevokeCertificateInput,
    outputSchema: CertificateProfilesRevokeCertificateOutput,
  }));
// Input Schema
export const CodeSigningAccountsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    type: Schema.String,
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CodeSigning/checkNameAvailability",
      apiVersion: "2025-10-13",
    }),
  );
export type CodeSigningAccountsCheckNameAvailabilityInput =
  typeof CodeSigningAccountsCheckNameAvailabilityInput.Type;

// Output Schema
export const CodeSigningAccountsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(
      Schema.Literals(["AccountNameInvalid", "AlreadyExists"]),
    ),
    message: Schema.optional(Schema.String),
  });
export type CodeSigningAccountsCheckNameAvailabilityOutput =
  typeof CodeSigningAccountsCheckNameAvailabilityOutput.Type;

// The operation
/**
 * Checks if the artifact signing account name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CodeSigningAccountsCheckNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CodeSigningAccountsCheckNameAvailabilityInput,
    outputSchema: CodeSigningAccountsCheckNameAvailabilityOutput,
  }));
// Input Schema
export const CodeSigningAccountsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        accountUri: Schema.optional(Schema.String),
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.Literals(["Basic", "Premium"]),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Updating",
            "Deleting",
            "Accepted",
          ]),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
      apiVersion: "2025-10-13",
    }),
  );
export type CodeSigningAccountsCreateInput =
  typeof CodeSigningAccountsCreateInput.Type;

// Output Schema
export const CodeSigningAccountsCreateOutput =
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
export type CodeSigningAccountsCreateOutput =
  typeof CodeSigningAccountsCreateOutput.Type;

// The operation
/**
 * Create an artifact Signing Account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Artifact Signing account name.
 */
export const CodeSigningAccountsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CodeSigningAccountsCreateInput,
    outputSchema: CodeSigningAccountsCreateOutput,
  }),
);
// Input Schema
export const CodeSigningAccountsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
      apiVersion: "2025-10-13",
    }),
  );
export type CodeSigningAccountsDeleteInput =
  typeof CodeSigningAccountsDeleteInput.Type;

// Output Schema
export const CodeSigningAccountsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CodeSigningAccountsDeleteOutput =
  typeof CodeSigningAccountsDeleteOutput.Type;

// The operation
/**
 * Delete an artifact signing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Artifact Signing account name.
 */
export const CodeSigningAccountsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CodeSigningAccountsDeleteInput,
    outputSchema: CodeSigningAccountsDeleteOutput,
  }),
);
// Input Schema
export const CodeSigningAccountsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
      apiVersion: "2025-10-13",
    }),
  );
export type CodeSigningAccountsGetInput =
  typeof CodeSigningAccountsGetInput.Type;

// Output Schema
export const CodeSigningAccountsGetOutput =
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
export type CodeSigningAccountsGetOutput =
  typeof CodeSigningAccountsGetOutput.Type;

// The operation
/**
 * Get an artifact Signing Account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Artifact Signing account name.
 */
export const CodeSigningAccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CodeSigningAccountsGetInput,
    outputSchema: CodeSigningAccountsGetOutput,
  }),
);
// Input Schema
export const CodeSigningAccountsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts",
      apiVersion: "2025-10-13",
    }),
  );
export type CodeSigningAccountsListByResourceGroupInput =
  typeof CodeSigningAccountsListByResourceGroupInput.Type;

// Output Schema
export const CodeSigningAccountsListByResourceGroupOutput =
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
export type CodeSigningAccountsListByResourceGroupOutput =
  typeof CodeSigningAccountsListByResourceGroupOutput.Type;

// The operation
/**
 * Lists artifact signing accounts within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CodeSigningAccountsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CodeSigningAccountsListByResourceGroupInput,
    outputSchema: CodeSigningAccountsListByResourceGroupOutput,
  }));
// Input Schema
export const CodeSigningAccountsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CodeSigning/codeSigningAccounts",
      apiVersion: "2025-10-13",
    }),
  );
export type CodeSigningAccountsListBySubscriptionInput =
  typeof CodeSigningAccountsListBySubscriptionInput.Type;

// Output Schema
export const CodeSigningAccountsListBySubscriptionOutput =
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
export type CodeSigningAccountsListBySubscriptionOutput =
  typeof CodeSigningAccountsListBySubscriptionOutput.Type;

// The operation
/**
 * Lists artifact signing accounts within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CodeSigningAccountsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CodeSigningAccountsListBySubscriptionInput,
    outputSchema: CodeSigningAccountsListBySubscriptionOutput,
  }));
// Input Schema
export const CodeSigningAccountsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.optional(
      Schema.Struct({
        sku: Schema.optional(
          Schema.Struct({
            name: Schema.optional(Schema.Literals(["Basic", "Premium"])),
          }),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
      apiVersion: "2025-10-13",
    }),
  );
export type CodeSigningAccountsUpdateInput =
  typeof CodeSigningAccountsUpdateInput.Type;

// Output Schema
export const CodeSigningAccountsUpdateOutput =
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
export type CodeSigningAccountsUpdateOutput =
  typeof CodeSigningAccountsUpdateOutput.Type;

// The operation
/**
 * Update an artifact signing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Artifact Signing account name.
 */
export const CodeSigningAccountsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CodeSigningAccountsUpdateInput,
    outputSchema: CodeSigningAccountsUpdateOutput,
  }),
);
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.CodeSigning/operations",
    apiVersion: "2025-10-13",
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
