/**
 * Azure Codesigning API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CertificateProfilesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  profileName: string;
  properties?: {
    profileType:
      | "PublicTrust"
      | "PrivateTrust"
      | "PrivateTrustCIPolicy"
      | "VBSEnclave"
      | "PublicTrustTest";
    includeStreetAddress?: boolean;
    includeCity?: boolean;
    includeState?: boolean;
    includeCountry?: boolean;
    includePostalCode?: boolean;
    identityValidationId: string;
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Updating"
      | "Deleting"
      | "Accepted";
    status?: "Active" | "Disabled" | "Suspended";
    certificates?: {
      serialNumber?: string;
      enhancedKeyUsage?: string;
      subjectName?: string;
      thumbprint?: string;
      createdDate?: string;
      expiryDate?: string;
      status?: "Active" | "Expired" | "Revoked";
      revocation?: {
        requestedAt?: string;
        effectiveAt?: string;
        reason?: string;
        remarks?: string;
        status?: "Succeeded" | "InProgress" | "Failed";
        failureReason?: string;
      };
    }[];
  };
}
export const CertificateProfilesCreateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<CertificateProfilesCreateInput>;

// Output Schema
export interface CertificateProfilesCreateOutput {
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
export const CertificateProfilesCreateOutput =
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
  }) as unknown as Schema.Codec<CertificateProfilesCreateOutput>;

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
export const CertificateProfilesCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificateProfilesCreateInput,
  outputSchema: CertificateProfilesCreateOutput,
}));
// Input Schema
export interface CertificateProfilesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  profileName: string;
}
export const CertificateProfilesDeleteInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<CertificateProfilesDeleteInput>;

// Output Schema
export type CertificateProfilesDeleteOutput = void;
export const CertificateProfilesDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CertificateProfilesDeleteOutput>;

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
export const CertificateProfilesDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificateProfilesDeleteInput,
  outputSchema: CertificateProfilesDeleteOutput,
}));
// Input Schema
export interface CertificateProfilesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  profileName: string;
}
export const CertificateProfilesGetInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<CertificateProfilesGetInput>;

// Output Schema
export interface CertificateProfilesGetOutput {
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
export const CertificateProfilesGetOutput =
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
  }) as unknown as Schema.Codec<CertificateProfilesGetOutput>;

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
export const CertificateProfilesGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CertificateProfilesGetInput,
  outputSchema: CertificateProfilesGetOutput,
}));
// Input Schema
export interface CertificateProfilesListByCodeSigningAccountInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const CertificateProfilesListByCodeSigningAccountInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}/certificateProfiles",
      apiVersion: "2025-10-13",
    }),
  ) as unknown as Schema.Codec<CertificateProfilesListByCodeSigningAccountInput>;

// Output Schema
export interface CertificateProfilesListByCodeSigningAccountOutput {
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
export const CertificateProfilesListByCodeSigningAccountOutput =
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
  }) as unknown as Schema.Codec<CertificateProfilesListByCodeSigningAccountOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CertificateProfilesListByCodeSigningAccountInput,
    outputSchema: CertificateProfilesListByCodeSigningAccountOutput,
  }));
// Input Schema
export interface CertificateProfilesRevokeCertificateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  profileName: string;
  serialNumber: string;
  thumbprint: string;
  effectiveAt: string;
  reason: string;
  remarks?: string;
}
export const CertificateProfilesRevokeCertificateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<CertificateProfilesRevokeCertificateInput>;

// Output Schema
export type CertificateProfilesRevokeCertificateOutput = void;
export const CertificateProfilesRevokeCertificateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CertificateProfilesRevokeCertificateOutput>;

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
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CertificateProfilesRevokeCertificateInput,
    outputSchema: CertificateProfilesRevokeCertificateOutput,
  }));
// Input Schema
export interface CodeSigningAccountsCheckNameAvailabilityInput {
  subscriptionId: string;
  type: string;
  name: string;
}
export const CodeSigningAccountsCheckNameAvailabilityInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    type: Schema.String,
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CodeSigning/checkNameAvailability",
      apiVersion: "2025-10-13",
    }),
  ) as unknown as Schema.Codec<CodeSigningAccountsCheckNameAvailabilityInput>;

// Output Schema
export interface CodeSigningAccountsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "AccountNameInvalid" | "AlreadyExists";
  message?: string;
}
export const CodeSigningAccountsCheckNameAvailabilityOutput =
  /*@__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(
      Schema.Literals(["AccountNameInvalid", "AlreadyExists"]),
    ),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CodeSigningAccountsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks if the artifact signing account name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CodeSigningAccountsCheckNameAvailability =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CodeSigningAccountsCheckNameAvailabilityInput,
    outputSchema: CodeSigningAccountsCheckNameAvailabilityOutput,
  }));
// Input Schema
export interface CodeSigningAccountsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  properties?: {
    accountUri?: string;
    sku?: { name: "Basic" | "Premium" };
    provisioningState?:
      | "Succeeded"
      | "Failed"
      | "Canceled"
      | "Updating"
      | "Deleting"
      | "Accepted";
  };
  tags?: Record<string, string>;
  location: string;
}
export const CodeSigningAccountsCreateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<CodeSigningAccountsCreateInput>;

// Output Schema
export interface CodeSigningAccountsCreateOutput {
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
export const CodeSigningAccountsCreateOutput =
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
  }) as unknown as Schema.Codec<CodeSigningAccountsCreateOutput>;

// The operation
/**
 * Create an artifact Signing Account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Artifact Signing account name.
 */
export const CodeSigningAccountsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CodeSigningAccountsCreateInput,
  outputSchema: CodeSigningAccountsCreateOutput,
}));
// Input Schema
export interface CodeSigningAccountsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const CodeSigningAccountsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
      apiVersion: "2025-10-13",
    }),
  ) as unknown as Schema.Codec<CodeSigningAccountsDeleteInput>;

// Output Schema
export type CodeSigningAccountsDeleteOutput = void;
export const CodeSigningAccountsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CodeSigningAccountsDeleteOutput>;

// The operation
/**
 * Delete an artifact signing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Artifact Signing account name.
 */
export const CodeSigningAccountsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CodeSigningAccountsDeleteInput,
  outputSchema: CodeSigningAccountsDeleteOutput,
}));
// Input Schema
export interface CodeSigningAccountsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
}
export const CodeSigningAccountsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    accountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts/{accountName}",
      apiVersion: "2025-10-13",
    }),
  ) as unknown as Schema.Codec<CodeSigningAccountsGetInput>;

// Output Schema
export interface CodeSigningAccountsGetOutput {
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
export const CodeSigningAccountsGetOutput =
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
  }) as unknown as Schema.Codec<CodeSigningAccountsGetOutput>;

// The operation
/**
 * Get an artifact Signing Account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Artifact Signing account name.
 */
export const CodeSigningAccountsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CodeSigningAccountsGetInput,
  outputSchema: CodeSigningAccountsGetOutput,
}));
// Input Schema
export interface CodeSigningAccountsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
}
export const CodeSigningAccountsListByResourceGroupInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.CodeSigning/codeSigningAccounts",
      apiVersion: "2025-10-13",
    }),
  ) as unknown as Schema.Codec<CodeSigningAccountsListByResourceGroupInput>;

// Output Schema
export interface CodeSigningAccountsListByResourceGroupOutput {
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
export const CodeSigningAccountsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<CodeSigningAccountsListByResourceGroupOutput>;

// The operation
/**
 * Lists artifact signing accounts within a resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const CodeSigningAccountsListByResourceGroup =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CodeSigningAccountsListByResourceGroupInput,
    outputSchema: CodeSigningAccountsListByResourceGroupOutput,
  }));
// Input Schema
export interface CodeSigningAccountsListBySubscriptionInput {
  subscriptionId: string;
}
export const CodeSigningAccountsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.CodeSigning/codeSigningAccounts",
      apiVersion: "2025-10-13",
    }),
  ) as unknown as Schema.Codec<CodeSigningAccountsListBySubscriptionInput>;

// Output Schema
export interface CodeSigningAccountsListBySubscriptionOutput {
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
export const CodeSigningAccountsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<CodeSigningAccountsListBySubscriptionOutput>;

// The operation
/**
 * Lists artifact signing accounts within a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const CodeSigningAccountsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CodeSigningAccountsListBySubscriptionInput,
    outputSchema: CodeSigningAccountsListBySubscriptionOutput,
  }));
// Input Schema
export interface CodeSigningAccountsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  accountName: string;
  tags?: Record<string, string>;
  properties?: { sku?: { name?: "Basic" | "Premium" } };
}
export const CodeSigningAccountsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
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
  ) as unknown as Schema.Codec<CodeSigningAccountsUpdateInput>;

// Output Schema
export interface CodeSigningAccountsUpdateOutput {
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
export const CodeSigningAccountsUpdateOutput =
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
  }) as unknown as Schema.Codec<CodeSigningAccountsUpdateOutput>;

// The operation
/**
 * Update an artifact signing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param accountName - Artifact Signing account name.
 */
export const CodeSigningAccountsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CodeSigningAccountsUpdateInput,
  outputSchema: CodeSigningAccountsUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.CodeSigning/operations",
    apiVersion: "2025-10-13",
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
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
