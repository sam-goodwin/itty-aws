/**
 * Azure Billing API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AddressValidateInput {
  addressLine1: string;
  addressLine2?: string;
  addressLine3?: string;
  city?: string;
  companyName?: string;
  country: string;
  district?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  phoneNumber?: string;
  postalCode?: string;
  region?: string;
  isValidAddress?: boolean;
}
export const AddressValidateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  addressLine1: Schema.String,
  addressLine2: Schema.optional(Schema.String),
  addressLine3: Schema.optional(Schema.String),
  city: Schema.optional(Schema.String),
  companyName: Schema.optional(Schema.String),
  country: Schema.String,
  district: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
  firstName: Schema.optional(Schema.String),
  lastName: Schema.optional(Schema.String),
  middleName: Schema.optional(Schema.String),
  phoneNumber: Schema.optional(Schema.String),
  postalCode: Schema.optional(Schema.String),
  region: Schema.optional(Schema.String),
  isValidAddress: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Billing/validateAddress",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<AddressValidateInput>;

// Output Schema
export interface AddressValidateOutput {
  status?: "Other" | "Valid" | "Invalid";
  suggestedAddresses?: {
    addressLine1: string;
    addressLine2?: string;
    addressLine3?: string;
    city?: string;
    companyName?: string;
    country: string;
    district?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    phoneNumber?: string;
    postalCode?: string;
    region?: string;
    isValidAddress?: boolean;
  }[];
  validationMessage?: string;
}
export const AddressValidateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.Literals(["Other", "Valid", "Invalid"])),
  suggestedAddresses: Schema.optional(
    Schema.Array(
      Schema.Struct({
        addressLine1: Schema.String,
        addressLine2: Schema.optional(Schema.String),
        addressLine3: Schema.optional(Schema.String),
        city: Schema.optional(Schema.String),
        companyName: Schema.optional(Schema.String),
        country: Schema.String,
        district: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        firstName: Schema.optional(Schema.String),
        lastName: Schema.optional(Schema.String),
        middleName: Schema.optional(Schema.String),
        phoneNumber: Schema.optional(Schema.String),
        postalCode: Schema.optional(Schema.String),
        region: Schema.optional(Schema.String),
        isValidAddress: Schema.optional(Schema.Boolean),
      }),
    ),
  ),
  validationMessage: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<AddressValidateOutput>;

// The operation
/**
 * Validates an address. Use the operation to validate an address before using it as soldTo or a billTo address.
 *
 * @param api-version - The API version to use for this operation.
 */
export const AddressValidate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddressValidateInput,
  outputSchema: AddressValidateOutput,
}));
// Input Schema
export interface AgreementsGetInput {
  billingAccountName: string;
  agreementName: string;
}
export const AgreementsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  agreementName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/agreements/{agreementName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<AgreementsGetInput>;

// Output Schema
export interface AgreementsGetOutput {
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
export const AgreementsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AgreementsGetOutput>;

// The operation
/**
 * Gets an agreement by ID.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param agreementName - The ID that uniquely identifies an agreement.
 */
export const AgreementsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AgreementsGetInput,
  outputSchema: AgreementsGetOutput,
}));
// Input Schema
export interface AgreementsListByBillingAccountInput {
  billingAccountName: string;
  expand?: string;
}
export const AgreementsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/agreements",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<AgreementsListByBillingAccountInput>;

// Output Schema
export interface AgreementsListByBillingAccountOutput {
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
export const AgreementsListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<AgreementsListByBillingAccountOutput>;

// The operation
/**
 * Lists the agreements for a billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param expand - May be used to expand the participants.
 */
export const AgreementsListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgreementsListByBillingAccountInput,
    outputSchema: AgreementsListByBillingAccountOutput,
  }));
// Input Schema
export interface AssociatedTenantsCreateOrUpdateInput {
  billingAccountName: string;
  associatedTenantName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "New"
      | "Pending"
      | "Provisioning"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Creating"
      | "Created"
      | "Expired";
    displayName?: string;
    tenantId?: string;
    billingManagementState?: "Other" | "NotAllowed" | "Active" | "Revoked";
    provisioningManagementState?:
      | "Other"
      | "NotRequested"
      | "Active"
      | "Pending"
      | "BillingRequestExpired"
      | "BillingRequestDeclined"
      | "Revoked";
    provisioningBillingRequestId?: string;
  };
  tags?: Record<string, string>;
}
export const AssociatedTenantsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    associatedTenantName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Canceled",
            "Failed",
            "New",
            "Pending",
            "Provisioning",
            "PendingBilling",
            "ConfirmedBilling",
            "Creating",
            "Created",
            "Expired",
          ]),
        ),
        displayName: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        billingManagementState: Schema.optional(
          Schema.Literals(["Other", "NotAllowed", "Active", "Revoked"]),
        ),
        provisioningManagementState: Schema.optional(
          Schema.Literals([
            "Other",
            "NotRequested",
            "Active",
            "Pending",
            "BillingRequestExpired",
            "BillingRequestDeclined",
            "Revoked",
          ]),
        ),
        provisioningBillingRequestId: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/associatedTenants/{associatedTenantName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<AssociatedTenantsCreateOrUpdateInput>;

// Output Schema
export interface AssociatedTenantsCreateOrUpdateOutput {
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
export const AssociatedTenantsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<AssociatedTenantsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an associated tenant for the billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param associatedTenantName - The ID that uniquely identifies a tenant.
 */
export const AssociatedTenantsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssociatedTenantsCreateOrUpdateInput,
    outputSchema: AssociatedTenantsCreateOrUpdateOutput,
  }));
// Input Schema
export interface AssociatedTenantsDeleteInput {
  billingAccountName: string;
  associatedTenantName: string;
}
export const AssociatedTenantsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    associatedTenantName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/associatedTenants/{associatedTenantName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<AssociatedTenantsDeleteInput>;

// Output Schema
export type AssociatedTenantsDeleteOutput = void;
export const AssociatedTenantsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AssociatedTenantsDeleteOutput>;

// The operation
/**
 * Deletes an associated tenant for a billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param associatedTenantName - The ID that uniquely identifies a tenant.
 */
export const AssociatedTenantsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssociatedTenantsDeleteInput,
    outputSchema: AssociatedTenantsDeleteOutput,
  }),
);
// Input Schema
export interface AssociatedTenantsGetInput {
  billingAccountName: string;
  associatedTenantName: string;
}
export const AssociatedTenantsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    associatedTenantName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/associatedTenants/{associatedTenantName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<AssociatedTenantsGetInput>;

// Output Schema
export interface AssociatedTenantsGetOutput {
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
export const AssociatedTenantsGetOutput =
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
  }) as unknown as Schema.Codec<AssociatedTenantsGetOutput>;

// The operation
/**
 * Gets an associated tenant by ID.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param associatedTenantName - The ID that uniquely identifies a tenant.
 */
export const AssociatedTenantsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssociatedTenantsGetInput,
    outputSchema: AssociatedTenantsGetOutput,
  }),
);
// Input Schema
export interface AssociatedTenantsListByBillingAccountInput {
  billingAccountName: string;
  includeRevoked?: boolean;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const AssociatedTenantsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    includeRevoked: Schema.optional(Schema.Boolean),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/associatedTenants",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<AssociatedTenantsListByBillingAccountInput>;

// Output Schema
export interface AssociatedTenantsListByBillingAccountOutput {
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
export const AssociatedTenantsListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<AssociatedTenantsListByBillingAccountOutput>;

// The operation
/**
 * Lists the associated tenants that can collaborate with the billing account on commerce activities like viewing and downloading invoices, managing payments, making purchases, and managing or provisioning licenses.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param includeRevoked - Can be used to get revoked associated tenants.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const AssociatedTenantsListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AssociatedTenantsListByBillingAccountInput,
    outputSchema: AssociatedTenantsListByBillingAccountOutput,
  }));
// Input Schema
export interface AvailableBalancesGetByBillingAccountInput {
  billingAccountName: string;
}
export const AvailableBalancesGetByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/availableBalance/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<AvailableBalancesGetByBillingAccountInput>;

// Output Schema
export interface AvailableBalancesGetByBillingAccountOutput {
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
export const AvailableBalancesGetByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<AvailableBalancesGetByBillingAccountOutput>;

// The operation
/**
 * The Available Credit or Payment on Account Balance for a billing account. The credit balance can be used to settle due or past due invoices and is supported for billing accounts with agreement type Microsoft Customer Agreement. The payment on account balance is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Online Services Program.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const AvailableBalancesGetByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailableBalancesGetByBillingAccountInput,
    outputSchema: AvailableBalancesGetByBillingAccountOutput,
  }));
// Input Schema
export interface AvailableBalancesGetByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
}
export const AvailableBalancesGetByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/availableBalance/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<AvailableBalancesGetByBillingProfileInput>;

// Output Schema
export interface AvailableBalancesGetByBillingProfileOutput {
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
export const AvailableBalancesGetByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<AvailableBalancesGetByBillingProfileOutput>;

// The operation
/**
 * The Available Credit or Payment on Account Balance for a billing profile. The credit balance can be used to settle due or past due invoices and is supported for billing accounts with agreement type Microsoft Customer Agreement. The payment on account balance is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 */
export const AvailableBalancesGetByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AvailableBalancesGetByBillingProfileInput,
    outputSchema: AvailableBalancesGetByBillingProfileOutput,
  }));
// Input Schema
export interface BillingAccountsAddPaymentTermsInput {
  billingAccountName: string;
}
export const BillingAccountsAddPaymentTermsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/addPaymentTerms",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingAccountsAddPaymentTermsInput>;

// Output Schema
export interface BillingAccountsAddPaymentTermsOutput {
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
export const BillingAccountsAddPaymentTermsOutput =
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
  }) as unknown as Schema.Codec<BillingAccountsAddPaymentTermsOutput>;

// The operation
/**
 * Adds payment terms to all the billing profiles under the billing account. Currently, payment terms can be added only on billing accounts that have Agreement Type as 'Microsoft Customer Agreement' and AccountType as 'Enterprise'. This action needs pre-authorization and only Field Sellers are authorized to add the payment terms and is not a self-serve action.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const BillingAccountsAddPaymentTerms =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingAccountsAddPaymentTermsInput,
    outputSchema: BillingAccountsAddPaymentTermsOutput,
  }));
// Input Schema
export interface BillingAccountsCancelPaymentTermsInput {
  billingAccountName: string;
}
export const BillingAccountsCancelPaymentTermsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/cancelPaymentTerms",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingAccountsCancelPaymentTermsInput>;

// Output Schema
export interface BillingAccountsCancelPaymentTermsOutput {
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
export const BillingAccountsCancelPaymentTermsOutput =
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
  }) as unknown as Schema.Codec<BillingAccountsCancelPaymentTermsOutput>;

// The operation
/**
 * Cancels all the payment terms on billing account that falls after the cancellation date in the request. Currently, cancel payment terms is only served by admin actions and is not a self-serve action.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const BillingAccountsCancelPaymentTerms =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingAccountsCancelPaymentTermsInput,
    outputSchema: BillingAccountsCancelPaymentTermsOutput,
  }));
// Input Schema
export interface BillingAccountsConfirmTransitionInput {
  billingAccountName: string;
}
export const BillingAccountsConfirmTransitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/confirmTransition",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingAccountsConfirmTransitionInput>;

// Output Schema
export interface BillingAccountsConfirmTransitionOutput {
  transitionDate?: string;
  anniversaryDay?: number;
}
export const BillingAccountsConfirmTransitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transitionDate: Schema.optional(Schema.String),
    anniversaryDay: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<BillingAccountsConfirmTransitionOutput>;

// The operation
/**
 * Gets the transition details for a billing account that has transitioned from agreement type Microsoft Online Services Program to agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const BillingAccountsConfirmTransition =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingAccountsConfirmTransitionInput,
    outputSchema: BillingAccountsConfirmTransitionOutput,
  }));
// Input Schema
export interface BillingAccountsGetInput {
  billingAccountName: string;
}
export const BillingAccountsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingAccountsGetInput>;

// Output Schema
export interface BillingAccountsGetOutput {
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
export const BillingAccountsGetOutput =
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
  }) as unknown as Schema.Codec<BillingAccountsGetOutput>;

// The operation
/**
 * Gets a billing account by its ID.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const BillingAccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BillingAccountsGetInput,
  outputSchema: BillingAccountsGetOutput,
}));
// Input Schema
export interface BillingAccountsListInput {
  includeAll?: boolean;
  includeAllWithoutBillingProfiles?: boolean;
  includeDeleted?: boolean;
  includePendingAgreement?: boolean;
  includeResellee?: boolean;
  legalOwnerTID?: string;
  legalOwnerOID?: string;
  filter?: string;
  expand?: string;
  top?: number;
  skip?: number;
  search?: string;
}
export const BillingAccountsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    includeAll: Schema.optional(Schema.Boolean),
    includeAllWithoutBillingProfiles: Schema.optional(Schema.Boolean),
    includeDeleted: Schema.optional(Schema.Boolean),
    includePendingAgreement: Schema.optional(Schema.Boolean),
    includeResellee: Schema.optional(Schema.Boolean),
    legalOwnerTID: Schema.optional(Schema.String),
    legalOwnerOID: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    expand: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingAccountsListInput>;

// Output Schema
export interface BillingAccountsListOutput {
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
export const BillingAccountsListOutput =
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
  }) as unknown as Schema.Codec<BillingAccountsListOutput>;

// The operation
/**
 * Lists the billing accounts that a user has access to.
 *
 * @param api-version - The API version to use for this operation.
 * @param includeAll - When true, results will include Billing Accounts that the user does not have a direct role assignment on if the user has one of the following AAD roles: Global Administrator, Global Reader, Billing Administrator.
 * @param includeAllWithoutBillingProfiles - When true, results will include Billing Accounts that are not fully created if the user has one of the following AAD roles: Global Administrator, Global Reader, Billing Administrator.
 * @param includeDeleted - When true, results will include any billing accounts in a deleted state.
 * @param includePendingAgreement - Includes billing accounts with agreement pending signature that the user has access to.
 * @param includeResellee - Includes the customer's billing account of Microsoft Partner Agreement that the user has access to.
 * @param legalOwnerTID - Must be combined with legalOwnerOID, results will only include Billing Accounts for whom is legally responsible for the Billing Accounts. Optional.
 * @param legalOwnerOID - Must be combined with legalOwnerTID, results will only include Billing Accounts for whom is legally responsible for the Billing Accounts. Optional.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param expand - Expand is allowed for SoldTo and EnrollmentDetails/PONumber.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const BillingAccountsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BillingAccountsListInput,
  outputSchema: BillingAccountsListOutput,
}));
// Input Schema
export interface BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionInput {
  billingAccountName: string;
  filter?: string;
}
export const BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/listInvoiceSectionsWithCreateSubscriptionPermission",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionInput>;

// Output Schema
export interface BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionOutput {
  value: {
    billingProfileDisplayName?: string;
    billingProfileId?: string;
    billingProfileSystemId?: string;
    billingProfileStatus?:
      | "Other"
      | "Active"
      | "Disabled"
      | "Warned"
      | "Deleted"
      | "UnderReview";
    billingProfileStatusReasonCode?:
      | "Other"
      | "PastDue"
      | "UnusualActivity"
      | "SpendingLimitReached"
      | "SpendingLimitExpired";
    billingProfileSpendingLimit?: "Off" | "On";
    enabledAzurePlans?: {
      productId?: string;
      skuId?: string;
      skuDescription?: string;
    }[];
    invoiceSectionDisplayName?: string;
    invoiceSectionId?: string;
    invoiceSectionSystemId?: string;
  }[];
  nextLink?: string;
}
export const BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        billingProfileDisplayName: Schema.optional(Schema.String),
        billingProfileId: Schema.optional(Schema.String),
        billingProfileSystemId: Schema.optional(Schema.String),
        billingProfileStatus: Schema.optional(
          Schema.Literals([
            "Other",
            "Active",
            "Disabled",
            "Warned",
            "Deleted",
            "UnderReview",
          ]),
        ),
        billingProfileStatusReasonCode: Schema.optional(
          Schema.Literals([
            "Other",
            "PastDue",
            "UnusualActivity",
            "SpendingLimitReached",
            "SpendingLimitExpired",
          ]),
        ),
        billingProfileSpendingLimit: Schema.optional(
          Schema.Literals(["Off", "On"]),
        ),
        enabledAzurePlans: Schema.optional(
          Schema.Array(
            Schema.Struct({
              productId: Schema.optional(Schema.String),
              skuId: Schema.optional(Schema.String),
              skuDescription: Schema.optional(Schema.String),
            }),
          ),
        ),
        invoiceSectionDisplayName: Schema.optional(Schema.String),
        invoiceSectionId: Schema.optional(Schema.String),
        invoiceSectionSystemId: Schema.optional(Schema.String),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionOutput>;

// The operation
/**
 * Lists the invoice sections for which the user has permission to create Azure subscriptions. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 */
export const BillingAccountsListInvoiceSectionsByCreateSubscriptionPermission =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema:
      BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionInput,
    outputSchema:
      BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionOutput,
  }));
// Input Schema
export interface BillingAccountsUpdateInput {
  billingAccountName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "New"
      | "Pending"
      | "Provisioning"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Creating"
      | "Created"
      | "Expired";
    accountStatus?:
      | "Other"
      | "Active"
      | "UnderReview"
      | "Disabled"
      | "Deleted"
      | "Extended"
      | "Pending"
      | "New"
      | "Expired"
      | "Terminated"
      | "Transferred";
    accountType?:
      | "Other"
      | "Enterprise"
      | "Individual"
      | "Partner"
      | "Reseller"
      | "ClassicPartner"
      | "Internal"
      | "Tenant"
      | "Business";
    accountSubType?:
      | "Other"
      | "None"
      | "Individual"
      | "Professional"
      | "Enterprise";
    accountStatusReasonCode?:
      | "Other"
      | "UnusualActivity"
      | "ManuallyTerminated"
      | "Expired"
      | "Transferred"
      | "TerminateProcessing";
    agreementType?:
      | "Other"
      | "MicrosoftCustomerAgreement"
      | "EnterpriseAgreement"
      | "MicrosoftOnlineServicesProgram"
      | "MicrosoftPartnerAgreement";
    displayName?: string;
    enrollmentDetails?: {
      startDate?: string;
      endDate?: string;
      currency?: string;
      channel?: string;
      language?: string;
      countryCode?: string;
      billingCycle?: string;
      extendedTermOption?: "Other" | "Opted-In" | "Opted-Out";
      supportLevel?: "Other" | "Standard" | "Pro-Direct" | "Developer";
      supportCoverage?: string;
      cloud?: string;
      poNumber?: string;
      markupStatus?: "Other" | "Disabled" | "Preview" | "Published" | "Locked";
      indirectRelationshipInfo?: {
        billingAccountName?: string;
        billingProfileName?: string;
        displayName?: string;
      };
      invoiceRecipient?: string;
    };
    hasReadAccess?: boolean;
    hasNoBillingProfiles?: boolean;
    notificationEmailAddress?: string;
    primaryBillingTenantId?: string;
    soldTo?: {
      addressLine1: string;
      addressLine2?: string;
      addressLine3?: string;
      city?: string;
      companyName?: string;
      country: string;
      district?: string;
      email?: string;
      firstName?: string;
      lastName?: string;
      middleName?: string;
      phoneNumber?: string;
      postalCode?: string;
      region?: string;
      isValidAddress?: boolean;
    };
    registrationNumber?: { id?: string; required?: boolean; type?: string[] };
    billingRelationshipTypes?: (
      | "Other"
      | "Direct"
      | "IndirectCustomer"
      | "IndirectPartner"
      | "CSPPartner"
      | "CSPCustomer"
    )[];
    qualifications?: string[];
    taxIds?: {
      id?: string;
      type?:
        | "Other"
        | "BrazilCcmId"
        | "BrazilCnpjId"
        | "BrazilCpfId"
        | "CanadianFederalExempt"
        | "CanadianProvinceExempt"
        | "ExternalTaxation"
        | "IndiaFederalTanId"
        | "IndiaFederalServiceTaxId"
        | "IndiaPanId"
        | "IndiaStateCstId"
        | "IndiaStateGstINId"
        | "IndiaStateVatId"
        | "IntlExempt"
        | "USExempt"
        | "VatId"
        | "LoveCode"
        | "MobileBarCode"
        | "NationalIdentificationNumber"
        | "PublicSectorId";
      scope?: string;
      country?: string;
      status?: "Other" | "Valid" | "Invalid";
    }[];
  };
  tags?: Record<string, string>;
}
export const BillingAccountsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Canceled",
            "Failed",
            "New",
            "Pending",
            "Provisioning",
            "PendingBilling",
            "ConfirmedBilling",
            "Creating",
            "Created",
            "Expired",
          ]),
        ),
        accountStatus: Schema.optional(
          Schema.Literals([
            "Other",
            "Active",
            "UnderReview",
            "Disabled",
            "Deleted",
            "Extended",
            "Pending",
            "New",
            "Expired",
            "Terminated",
            "Transferred",
          ]),
        ),
        accountType: Schema.optional(
          Schema.Literals([
            "Other",
            "Enterprise",
            "Individual",
            "Partner",
            "Reseller",
            "ClassicPartner",
            "Internal",
            "Tenant",
            "Business",
          ]),
        ),
        accountSubType: Schema.optional(
          Schema.Literals([
            "Other",
            "None",
            "Individual",
            "Professional",
            "Enterprise",
          ]),
        ),
        accountStatusReasonCode: Schema.optional(
          Schema.Literals([
            "Other",
            "UnusualActivity",
            "ManuallyTerminated",
            "Expired",
            "Transferred",
            "TerminateProcessing",
          ]),
        ),
        agreementType: Schema.optional(
          Schema.Literals([
            "Other",
            "MicrosoftCustomerAgreement",
            "EnterpriseAgreement",
            "MicrosoftOnlineServicesProgram",
            "MicrosoftPartnerAgreement",
          ]),
        ),
        displayName: Schema.optional(Schema.String),
        enrollmentDetails: Schema.optional(
          Schema.Struct({
            startDate: Schema.optional(Schema.String),
            endDate: Schema.optional(Schema.String),
            currency: Schema.optional(Schema.String),
            channel: Schema.optional(Schema.String),
            language: Schema.optional(Schema.String),
            countryCode: Schema.optional(Schema.String),
            billingCycle: Schema.optional(Schema.String),
            extendedTermOption: Schema.optional(
              Schema.Literals(["Other", "Opted-In", "Opted-Out"]),
            ),
            supportLevel: Schema.optional(
              Schema.Literals(["Other", "Standard", "Pro-Direct", "Developer"]),
            ),
            supportCoverage: Schema.optional(Schema.String),
            cloud: Schema.optional(Schema.String),
            poNumber: Schema.optional(Schema.String),
            markupStatus: Schema.optional(
              Schema.Literals([
                "Other",
                "Disabled",
                "Preview",
                "Published",
                "Locked",
              ]),
            ),
            indirectRelationshipInfo: Schema.optional(
              Schema.Struct({
                billingAccountName: Schema.optional(Schema.String),
                billingProfileName: Schema.optional(Schema.String),
                displayName: Schema.optional(Schema.String),
              }),
            ),
            invoiceRecipient: Schema.optional(Schema.String),
          }),
        ),
        hasReadAccess: Schema.optional(Schema.Boolean),
        hasNoBillingProfiles: Schema.optional(Schema.Boolean),
        notificationEmailAddress: Schema.optional(Schema.String),
        primaryBillingTenantId: Schema.optional(Schema.String),
        soldTo: Schema.optional(
          Schema.Struct({
            addressLine1: Schema.String,
            addressLine2: Schema.optional(Schema.String),
            addressLine3: Schema.optional(Schema.String),
            city: Schema.optional(Schema.String),
            companyName: Schema.optional(Schema.String),
            country: Schema.String,
            district: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
            firstName: Schema.optional(Schema.String),
            lastName: Schema.optional(Schema.String),
            middleName: Schema.optional(Schema.String),
            phoneNumber: Schema.optional(Schema.String),
            postalCode: Schema.optional(Schema.String),
            region: Schema.optional(Schema.String),
            isValidAddress: Schema.optional(Schema.Boolean),
          }),
        ),
        registrationNumber: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            required: Schema.optional(Schema.Boolean),
            type: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        billingRelationshipTypes: Schema.optional(
          Schema.Array(
            Schema.Literals([
              "Other",
              "Direct",
              "IndirectCustomer",
              "IndirectPartner",
              "CSPPartner",
              "CSPCustomer",
            ]),
          ),
        ),
        qualifications: Schema.optional(Schema.Array(Schema.String)),
        taxIds: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals([
                  "Other",
                  "BrazilCcmId",
                  "BrazilCnpjId",
                  "BrazilCpfId",
                  "CanadianFederalExempt",
                  "CanadianProvinceExempt",
                  "ExternalTaxation",
                  "IndiaFederalTanId",
                  "IndiaFederalServiceTaxId",
                  "IndiaPanId",
                  "IndiaStateCstId",
                  "IndiaStateGstINId",
                  "IndiaStateVatId",
                  "IntlExempt",
                  "USExempt",
                  "VatId",
                  "LoveCode",
                  "MobileBarCode",
                  "NationalIdentificationNumber",
                  "PublicSectorId",
                ]),
              ),
              scope: Schema.optional(Schema.String),
              country: Schema.optional(Schema.String),
              status: Schema.optional(
                Schema.Literals(["Other", "Valid", "Invalid"]),
              ),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingAccountsUpdateInput>;

// Output Schema
export interface BillingAccountsUpdateOutput {
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
export const BillingAccountsUpdateOutput =
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
  }) as unknown as Schema.Codec<BillingAccountsUpdateOutput>;

// The operation
/**
 * Updates the properties of a billing account. Currently, displayName and address can be updated for billing accounts with agreement type Microsoft Customer Agreement. Currently address and notification email address can be updated for billing accounts with agreement type Microsoft Online Services Agreement. Currently, purchase order number can be edited for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const BillingAccountsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingAccountsUpdateInput,
    outputSchema: BillingAccountsUpdateOutput,
  }),
);
// Input Schema
export interface BillingAccountsValidatePaymentTermsInput {
  billingAccountName: string;
}
export const BillingAccountsValidatePaymentTermsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/validatePaymentTerms",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingAccountsValidatePaymentTermsInput>;

// Output Schema
export interface BillingAccountsValidatePaymentTermsOutput {
  eligibilityStatus?: "Other" | "Valid" | "Invalid";
  eligibilityDetails?: {
    code?:
      | "Other"
      | "OverlappingPaymentTerms"
      | "InvalidDateFormat"
      | "InvalidDateRange"
      | "InactiveBillingAccount"
      | "InvalidBillingAccountType"
      | "NullOrEmptyPaymentTerms"
      | "BillingAccountNotFound"
      | "IneligibleBillingAccountStatus"
      | "InvalidTerms";
    message?: string;
  }[];
}
export const BillingAccountsValidatePaymentTermsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eligibilityStatus: Schema.optional(
      Schema.Literals(["Other", "Valid", "Invalid"]),
    ),
    eligibilityDetails: Schema.optional(
      Schema.Array(
        Schema.Struct({
          code: Schema.optional(
            Schema.Literals([
              "Other",
              "OverlappingPaymentTerms",
              "InvalidDateFormat",
              "InvalidDateRange",
              "InactiveBillingAccount",
              "InvalidBillingAccountType",
              "NullOrEmptyPaymentTerms",
              "BillingAccountNotFound",
              "IneligibleBillingAccountStatus",
              "InvalidTerms",
            ]),
          ),
          message: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<BillingAccountsValidatePaymentTermsOutput>;

// The operation
/**
 * Validates payment terms on a billing account with agreement type 'Microsoft Customer Agreement' and account type 'Enterprise'.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const BillingAccountsValidatePaymentTerms =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingAccountsValidatePaymentTermsInput,
    outputSchema: BillingAccountsValidatePaymentTermsOutput,
  }));
// Input Schema
export interface BillingPermissionsCheckAccessByBillingAccountInput {
  billingAccountName: string;
  actions?: string[];
}
export const BillingPermissionsCheckAccessByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    actions: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/checkAccess",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPermissionsCheckAccessByBillingAccountInput>;

// Output Schema
export type BillingPermissionsCheckAccessByBillingAccountOutput = {
  accessDecision?: "Other" | "Allowed" | "NotAllowed";
  action?: string;
}[];
export const BillingPermissionsCheckAccessByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      accessDecision: Schema.optional(
        Schema.Literals(["Other", "Allowed", "NotAllowed"]),
      ),
      action: Schema.optional(Schema.String),
    }),
  ) as unknown as Schema.Codec<BillingPermissionsCheckAccessByBillingAccountOutput>;

// The operation
/**
 * Provides a list of check access response objects for a billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const BillingPermissionsCheckAccessByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingPermissionsCheckAccessByBillingAccountInput,
    outputSchema: BillingPermissionsCheckAccessByBillingAccountOutput,
  }));
// Input Schema
export interface BillingPermissionsCheckAccessByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  actions?: string[];
}
export const BillingPermissionsCheckAccessByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    actions: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/checkAccess",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPermissionsCheckAccessByBillingProfileInput>;

// Output Schema
export type BillingPermissionsCheckAccessByBillingProfileOutput = {
  accessDecision?: "Other" | "Allowed" | "NotAllowed";
  action?: string;
}[];
export const BillingPermissionsCheckAccessByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      accessDecision: Schema.optional(
        Schema.Literals(["Other", "Allowed", "NotAllowed"]),
      ),
      action: Schema.optional(Schema.String),
    }),
  ) as unknown as Schema.Codec<BillingPermissionsCheckAccessByBillingProfileOutput>;

// The operation
/**
 * Provides a list of check access response objects for a billing profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 */
export const BillingPermissionsCheckAccessByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingPermissionsCheckAccessByBillingProfileInput,
    outputSchema: BillingPermissionsCheckAccessByBillingProfileOutput,
  }));
// Input Schema
export interface BillingPermissionsCheckAccessByCustomerInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  actions?: string[];
}
export const BillingPermissionsCheckAccessByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    actions: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/checkAccess",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPermissionsCheckAccessByCustomerInput>;

// Output Schema
export type BillingPermissionsCheckAccessByCustomerOutput = {
  accessDecision?: "Other" | "Allowed" | "NotAllowed";
  action?: string;
}[];
export const BillingPermissionsCheckAccessByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      accessDecision: Schema.optional(
        Schema.Literals(["Other", "Allowed", "NotAllowed"]),
      ),
      action: Schema.optional(Schema.String),
    }),
  ) as unknown as Schema.Codec<BillingPermissionsCheckAccessByCustomerOutput>;

// The operation
/**
 * Provides a list of check access response objects for a customer.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 */
export const BillingPermissionsCheckAccessByCustomer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingPermissionsCheckAccessByCustomerInput,
    outputSchema: BillingPermissionsCheckAccessByCustomerOutput,
  }));
// Input Schema
export interface BillingPermissionsCheckAccessByDepartmentInput {
  billingAccountName: string;
  departmentName: string;
  actions?: string[];
}
export const BillingPermissionsCheckAccessByDepartmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    departmentName: Schema.String.pipe(T.PathParam()),
    actions: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}/checkAccess",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPermissionsCheckAccessByDepartmentInput>;

// Output Schema
export type BillingPermissionsCheckAccessByDepartmentOutput = {
  accessDecision?: "Other" | "Allowed" | "NotAllowed";
  action?: string;
}[];
export const BillingPermissionsCheckAccessByDepartmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      accessDecision: Schema.optional(
        Schema.Literals(["Other", "Allowed", "NotAllowed"]),
      ),
      action: Schema.optional(Schema.String),
    }),
  ) as unknown as Schema.Codec<BillingPermissionsCheckAccessByDepartmentOutput>;

// The operation
/**
 * Provides a list of check access response objects for a department.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param departmentName - The name of the department.
 */
export const BillingPermissionsCheckAccessByDepartment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingPermissionsCheckAccessByDepartmentInput,
    outputSchema: BillingPermissionsCheckAccessByDepartmentOutput,
  }));
// Input Schema
export interface BillingPermissionsCheckAccessByEnrollmentAccountInput {
  billingAccountName: string;
  enrollmentAccountName: string;
  actions?: string[];
}
export const BillingPermissionsCheckAccessByEnrollmentAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    enrollmentAccountName: Schema.String.pipe(T.PathParam()),
    actions: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}/checkAccess",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPermissionsCheckAccessByEnrollmentAccountInput>;

// Output Schema
export type BillingPermissionsCheckAccessByEnrollmentAccountOutput = {
  accessDecision?: "Other" | "Allowed" | "NotAllowed";
  action?: string;
}[];
export const BillingPermissionsCheckAccessByEnrollmentAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      accessDecision: Schema.optional(
        Schema.Literals(["Other", "Allowed", "NotAllowed"]),
      ),
      action: Schema.optional(Schema.String),
    }),
  ) as unknown as Schema.Codec<BillingPermissionsCheckAccessByEnrollmentAccountOutput>;

// The operation
/**
 * Provides a list of check access response objects for an enrollment account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param enrollmentAccountName - The name of the enrollment account.
 */
export const BillingPermissionsCheckAccessByEnrollmentAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingPermissionsCheckAccessByEnrollmentAccountInput,
    outputSchema: BillingPermissionsCheckAccessByEnrollmentAccountOutput,
  }));
// Input Schema
export interface BillingPermissionsCheckAccessByInvoiceSectionInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  actions?: string[];
}
export const BillingPermissionsCheckAccessByInvoiceSectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    actions: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/checkAccess",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPermissionsCheckAccessByInvoiceSectionInput>;

// Output Schema
export type BillingPermissionsCheckAccessByInvoiceSectionOutput = {
  accessDecision?: "Other" | "Allowed" | "NotAllowed";
  action?: string;
}[];
export const BillingPermissionsCheckAccessByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      accessDecision: Schema.optional(
        Schema.Literals(["Other", "Allowed", "NotAllowed"]),
      ),
      action: Schema.optional(Schema.String),
    }),
  ) as unknown as Schema.Codec<BillingPermissionsCheckAccessByInvoiceSectionOutput>;

// The operation
/**
 * Provides a list of check access response objects for an invoice section.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 */
export const BillingPermissionsCheckAccessByInvoiceSection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingPermissionsCheckAccessByInvoiceSectionInput,
    outputSchema: BillingPermissionsCheckAccessByInvoiceSectionOutput,
  }));
// Input Schema
export interface BillingPermissionsListByBillingAccountInput {
  billingAccountName: string;
}
export const BillingPermissionsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingPermissions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPermissionsListByBillingAccountInput>;

// Output Schema
export interface BillingPermissionsListByBillingAccountOutput {
  value: { actions?: string[]; notActions?: string[] }[];
  nextLink?: string;
}
export const BillingPermissionsListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        actions: Schema.optional(Schema.Array(Schema.String)),
        notActions: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BillingPermissionsListByBillingAccountOutput>;

// The operation
/**
 * Lists the billing permissions the caller has on a billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const BillingPermissionsListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingPermissionsListByBillingAccountInput,
    outputSchema: BillingPermissionsListByBillingAccountOutput,
  }));
// Input Schema
export interface BillingPermissionsListByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
}
export const BillingPermissionsListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingPermissions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPermissionsListByBillingProfileInput>;

// Output Schema
export interface BillingPermissionsListByBillingProfileOutput {
  value: { actions?: string[]; notActions?: string[] }[];
  nextLink?: string;
}
export const BillingPermissionsListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        actions: Schema.optional(Schema.Array(Schema.String)),
        notActions: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BillingPermissionsListByBillingProfileOutput>;

// The operation
/**
 * Lists the billing permissions the caller has on a billing profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 */
export const BillingPermissionsListByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingPermissionsListByBillingProfileInput,
    outputSchema: BillingPermissionsListByBillingProfileOutput,
  }));
// Input Schema
export interface BillingPermissionsListByCustomerInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
}
export const BillingPermissionsListByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/billingPermissions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPermissionsListByCustomerInput>;

// Output Schema
export interface BillingPermissionsListByCustomerOutput {
  value: { actions?: string[]; notActions?: string[] }[];
  nextLink?: string;
}
export const BillingPermissionsListByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        actions: Schema.optional(Schema.Array(Schema.String)),
        notActions: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BillingPermissionsListByCustomerOutput>;

// The operation
/**
 * Lists the billing permissions the caller has for a customer.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 */
export const BillingPermissionsListByCustomer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingPermissionsListByCustomerInput,
    outputSchema: BillingPermissionsListByCustomerOutput,
  }));
// Input Schema
export interface BillingPermissionsListByCustomerAtBillingAccountInput {
  billingAccountName: string;
  customerName: string;
}
export const BillingPermissionsListByCustomerAtBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/billingPermissions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPermissionsListByCustomerAtBillingAccountInput>;

// Output Schema
export interface BillingPermissionsListByCustomerAtBillingAccountOutput {
  value: { actions?: string[]; notActions?: string[] }[];
  nextLink?: string;
}
export const BillingPermissionsListByCustomerAtBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        actions: Schema.optional(Schema.Array(Schema.String)),
        notActions: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BillingPermissionsListByCustomerAtBillingAccountOutput>;

// The operation
/**
 * Lists the billing permissions the caller has for a customer at billing account level.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param customerName - The ID that uniquely identifies a customer.
 */
export const BillingPermissionsListByCustomerAtBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingPermissionsListByCustomerAtBillingAccountInput,
    outputSchema: BillingPermissionsListByCustomerAtBillingAccountOutput,
  }));
// Input Schema
export interface BillingPermissionsListByDepartmentInput {
  billingAccountName: string;
  departmentName: string;
}
export const BillingPermissionsListByDepartmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    departmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}/billingPermissions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPermissionsListByDepartmentInput>;

// Output Schema
export interface BillingPermissionsListByDepartmentOutput {
  value: { actions?: string[]; notActions?: string[] }[];
  nextLink?: string;
}
export const BillingPermissionsListByDepartmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        actions: Schema.optional(Schema.Array(Schema.String)),
        notActions: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BillingPermissionsListByDepartmentOutput>;

// The operation
/**
 * Lists the billing permissions the caller has for a department.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param departmentName - The name of the department.
 */
export const BillingPermissionsListByDepartment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingPermissionsListByDepartmentInput,
    outputSchema: BillingPermissionsListByDepartmentOutput,
  }));
// Input Schema
export interface BillingPermissionsListByEnrollmentAccountInput {
  billingAccountName: string;
  enrollmentAccountName: string;
}
export const BillingPermissionsListByEnrollmentAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    enrollmentAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}/billingPermissions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPermissionsListByEnrollmentAccountInput>;

// Output Schema
export interface BillingPermissionsListByEnrollmentAccountOutput {
  value: { actions?: string[]; notActions?: string[] }[];
  nextLink?: string;
}
export const BillingPermissionsListByEnrollmentAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        actions: Schema.optional(Schema.Array(Schema.String)),
        notActions: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BillingPermissionsListByEnrollmentAccountOutput>;

// The operation
/**
 * Lists the billing permissions the caller has for an enrollment account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param enrollmentAccountName - The name of the enrollment account.
 */
export const BillingPermissionsListByEnrollmentAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingPermissionsListByEnrollmentAccountInput,
    outputSchema: BillingPermissionsListByEnrollmentAccountOutput,
  }));
// Input Schema
export interface BillingPermissionsListByInvoiceSectionInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
}
export const BillingPermissionsListByInvoiceSectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingPermissions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPermissionsListByInvoiceSectionInput>;

// Output Schema
export interface BillingPermissionsListByInvoiceSectionOutput {
  value: { actions?: string[]; notActions?: string[] }[];
  nextLink?: string;
}
export const BillingPermissionsListByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        actions: Schema.optional(Schema.Array(Schema.String)),
        notActions: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<BillingPermissionsListByInvoiceSectionOutput>;

// The operation
/**
 * Lists the billing permissions the caller has for an invoice section.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 */
export const BillingPermissionsListByInvoiceSection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingPermissionsListByInvoiceSectionInput,
    outputSchema: BillingPermissionsListByInvoiceSectionOutput,
  }));
// Input Schema
export interface BillingProfilesCreateOrUpdateInput {
  billingAccountName: string;
  billingProfileName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "New"
      | "Pending"
      | "Provisioning"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Creating"
      | "Created"
      | "Expired";
    billingRelationshipType?:
      | "Other"
      | "Direct"
      | "IndirectCustomer"
      | "IndirectPartner"
      | "CSPPartner"
      | "CSPCustomer";
    billTo?: {
      addressLine1: string;
      addressLine2?: string;
      addressLine3?: string;
      city?: string;
      companyName?: string;
      country: string;
      district?: string;
      email?: string;
      firstName?: string;
      lastName?: string;
      middleName?: string;
      phoneNumber?: string;
      postalCode?: string;
      region?: string;
      isValidAddress?: boolean;
    };
    currency?: string;
    displayName?: string;
    enabledAzurePlans?: {
      productId?: string;
      skuId?: string;
      skuDescription?: string;
    }[];
    hasReadAccess?: boolean;
    indirectRelationshipInfo?: {
      billingAccountName?: string;
      billingProfileName?: string;
      displayName?: string;
    };
    invoiceDay?: number;
    invoiceEmailOptIn?: boolean;
    invoiceRecipients?: string[];
    poNumber?: string;
    shipTo?: {
      addressLine1: string;
      addressLine2?: string;
      addressLine3?: string;
      city?: string;
      companyName?: string;
      country: string;
      district?: string;
      email?: string;
      firstName?: string;
      lastName?: string;
      middleName?: string;
      phoneNumber?: string;
      postalCode?: string;
      region?: string;
      isValidAddress?: boolean;
    };
    soldTo?: {
      addressLine1: string;
      addressLine2?: string;
      addressLine3?: string;
      city?: string;
      companyName?: string;
      country: string;
      district?: string;
      email?: string;
      firstName?: string;
      lastName?: string;
      middleName?: string;
      phoneNumber?: string;
      postalCode?: string;
      region?: string;
      isValidAddress?: boolean;
    };
    spendingLimit?: "Off" | "On";
    spendingLimitDetails?: {
      amount?: number;
      currency?: string;
      startDate?: string;
      endDate?: string;
      type?:
        | "Other"
        | "None"
        | "FreeAccount"
        | "Sandbox"
        | "AzureForStudents"
        | "AcademicSponsorship"
        | "AzureConsumptionCredit"
        | "AzurePassSponsorship"
        | "MpnSponsorship"
        | "MSDN"
        | "NonProfitSponsorship"
        | "Sponsorship"
        | "StartupSponsorship"
        | "AzureForStudentsStarter"
        | "VisualStudio";
      status?:
        | "Other"
        | "None"
        | "Active"
        | "Expired"
        | "LimitReached"
        | "LimitRemoved";
    }[];
    status?:
      | "Other"
      | "Active"
      | "Disabled"
      | "Warned"
      | "Deleted"
      | "UnderReview";
    statusReasonCode?:
      | "Other"
      | "PastDue"
      | "UnusualActivity"
      | "SpendingLimitReached"
      | "SpendingLimitExpired";
    systemId?: string;
    tags?: Record<string, string>;
    targetClouds?: string[];
    currentPaymentTerm?: {
      term?: string;
      startDate?: string;
      endDate?: string;
      isDefault?: boolean;
    };
    otherPaymentTerms?: {
      term?: string;
      startDate?: string;
      endDate?: string;
      isDefault?: boolean;
    }[];
  };
  tags?: Record<string, string>;
}
export const BillingProfilesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Canceled",
            "Failed",
            "New",
            "Pending",
            "Provisioning",
            "PendingBilling",
            "ConfirmedBilling",
            "Creating",
            "Created",
            "Expired",
          ]),
        ),
        billingRelationshipType: Schema.optional(
          Schema.Literals([
            "Other",
            "Direct",
            "IndirectCustomer",
            "IndirectPartner",
            "CSPPartner",
            "CSPCustomer",
          ]),
        ),
        billTo: Schema.optional(
          Schema.Struct({
            addressLine1: Schema.String,
            addressLine2: Schema.optional(Schema.String),
            addressLine3: Schema.optional(Schema.String),
            city: Schema.optional(Schema.String),
            companyName: Schema.optional(Schema.String),
            country: Schema.String,
            district: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
            firstName: Schema.optional(Schema.String),
            lastName: Schema.optional(Schema.String),
            middleName: Schema.optional(Schema.String),
            phoneNumber: Schema.optional(Schema.String),
            postalCode: Schema.optional(Schema.String),
            region: Schema.optional(Schema.String),
            isValidAddress: Schema.optional(Schema.Boolean),
          }),
        ),
        currency: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        enabledAzurePlans: Schema.optional(
          Schema.Array(
            Schema.Struct({
              productId: Schema.optional(Schema.String),
              skuId: Schema.optional(Schema.String),
              skuDescription: Schema.optional(Schema.String),
            }),
          ),
        ),
        hasReadAccess: Schema.optional(Schema.Boolean),
        indirectRelationshipInfo: Schema.optional(
          Schema.Struct({
            billingAccountName: Schema.optional(Schema.String),
            billingProfileName: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
          }),
        ),
        invoiceDay: Schema.optional(Schema.Number),
        invoiceEmailOptIn: Schema.optional(Schema.Boolean),
        invoiceRecipients: Schema.optional(Schema.Array(Schema.String)),
        poNumber: Schema.optional(Schema.String),
        shipTo: Schema.optional(
          Schema.Struct({
            addressLine1: Schema.String,
            addressLine2: Schema.optional(Schema.String),
            addressLine3: Schema.optional(Schema.String),
            city: Schema.optional(Schema.String),
            companyName: Schema.optional(Schema.String),
            country: Schema.String,
            district: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
            firstName: Schema.optional(Schema.String),
            lastName: Schema.optional(Schema.String),
            middleName: Schema.optional(Schema.String),
            phoneNumber: Schema.optional(Schema.String),
            postalCode: Schema.optional(Schema.String),
            region: Schema.optional(Schema.String),
            isValidAddress: Schema.optional(Schema.Boolean),
          }),
        ),
        soldTo: Schema.optional(
          Schema.Struct({
            addressLine1: Schema.String,
            addressLine2: Schema.optional(Schema.String),
            addressLine3: Schema.optional(Schema.String),
            city: Schema.optional(Schema.String),
            companyName: Schema.optional(Schema.String),
            country: Schema.String,
            district: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
            firstName: Schema.optional(Schema.String),
            lastName: Schema.optional(Schema.String),
            middleName: Schema.optional(Schema.String),
            phoneNumber: Schema.optional(Schema.String),
            postalCode: Schema.optional(Schema.String),
            region: Schema.optional(Schema.String),
            isValidAddress: Schema.optional(Schema.Boolean),
          }),
        ),
        spendingLimit: Schema.optional(Schema.Literals(["Off", "On"])),
        spendingLimitDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              amount: Schema.optional(Schema.Number),
              currency: Schema.optional(Schema.String),
              startDate: Schema.optional(Schema.String),
              endDate: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals([
                  "Other",
                  "None",
                  "FreeAccount",
                  "Sandbox",
                  "AzureForStudents",
                  "AcademicSponsorship",
                  "AzureConsumptionCredit",
                  "AzurePassSponsorship",
                  "MpnSponsorship",
                  "MSDN",
                  "NonProfitSponsorship",
                  "Sponsorship",
                  "StartupSponsorship",
                  "AzureForStudentsStarter",
                  "VisualStudio",
                ]),
              ),
              status: Schema.optional(
                Schema.Literals([
                  "Other",
                  "None",
                  "Active",
                  "Expired",
                  "LimitReached",
                  "LimitRemoved",
                ]),
              ),
            }),
          ),
        ),
        status: Schema.optional(
          Schema.Literals([
            "Other",
            "Active",
            "Disabled",
            "Warned",
            "Deleted",
            "UnderReview",
          ]),
        ),
        statusReasonCode: Schema.optional(
          Schema.Literals([
            "Other",
            "PastDue",
            "UnusualActivity",
            "SpendingLimitReached",
            "SpendingLimitExpired",
          ]),
        ),
        systemId: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        targetClouds: Schema.optional(Schema.Array(Schema.String)),
        currentPaymentTerm: Schema.optional(
          Schema.Struct({
            term: Schema.optional(Schema.String),
            startDate: Schema.optional(Schema.String),
            endDate: Schema.optional(Schema.String),
            isDefault: Schema.optional(Schema.Boolean),
          }),
        ),
        otherPaymentTerms: Schema.optional(
          Schema.Array(
            Schema.Struct({
              term: Schema.optional(Schema.String),
              startDate: Schema.optional(Schema.String),
              endDate: Schema.optional(Schema.String),
              isDefault: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingProfilesCreateOrUpdateInput>;

// Output Schema
export interface BillingProfilesCreateOrUpdateOutput {
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
export const BillingProfilesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BillingProfilesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement. If you are a MCA Individual (Pay-as-you-go) customer, then please use the Azure portal experience to create the billing profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 */
export const BillingProfilesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingProfilesCreateOrUpdateInput,
    outputSchema: BillingProfilesCreateOrUpdateOutput,
  }));
// Input Schema
export interface BillingProfilesDeleteInput {
  billingAccountName: string;
  billingProfileName: string;
}
export const BillingProfilesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingProfilesDeleteInput>;

// Output Schema
export type BillingProfilesDeleteOutput = void;
export const BillingProfilesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BillingProfilesDeleteOutput>;

// The operation
/**
 * Deletes a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 */
export const BillingProfilesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingProfilesDeleteInput,
    outputSchema: BillingProfilesDeleteOutput,
  }),
);
// Input Schema
export interface BillingProfilesGetInput {
  billingAccountName: string;
  billingProfileName: string;
}
export const BillingProfilesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingProfilesGetInput>;

// Output Schema
export interface BillingProfilesGetOutput {
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
export const BillingProfilesGetOutput =
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
  }) as unknown as Schema.Codec<BillingProfilesGetOutput>;

// The operation
/**
 * Gets a billing profile by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 */
export const BillingProfilesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BillingProfilesGetInput,
  outputSchema: BillingProfilesGetOutput,
}));
// Input Schema
export interface BillingProfilesListByBillingAccountInput {
  billingAccountName: string;
  includeDeleted?: boolean;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const BillingProfilesListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    includeDeleted: Schema.optional(Schema.Boolean),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingProfilesListByBillingAccountInput>;

// Output Schema
export interface BillingProfilesListByBillingAccountOutput {
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
export const BillingProfilesListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<BillingProfilesListByBillingAccountOutput>;

// The operation
/**
 * Lists the billing profiles that a user has access to. The operation is supported for billing accounts with agreement of type Microsoft Customer Agreement and Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param includeDeleted - Can be used to get deleted billing profiles.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const BillingProfilesListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingProfilesListByBillingAccountInput,
    outputSchema: BillingProfilesListByBillingAccountOutput,
  }));
// Input Schema
export interface BillingProfilesValidateDeleteEligibilityInput {
  billingAccountName: string;
  billingProfileName: string;
}
export const BillingProfilesValidateDeleteEligibilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/validateDeleteEligibility",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingProfilesValidateDeleteEligibilityInput>;

// Output Schema
export interface BillingProfilesValidateDeleteEligibilityOutput {
  eligibilityStatus?: "Allowed" | "NotAllowed";
  eligibilityDetails?: {
    code?:
      | "None"
      | "ActiveCredits"
      | "ActiveCreditCard"
      | "LastBillingProfile"
      | "NotSupported"
      | "OutstandingCharges"
      | "PendingCharges"
      | "ReservedInstances"
      | "ActiveBillingSubscriptions";
    message?: string;
  }[];
}
export const BillingProfilesValidateDeleteEligibilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eligibilityStatus: Schema.optional(
      Schema.Literals(["Allowed", "NotAllowed"]),
    ),
    eligibilityDetails: Schema.optional(
      Schema.Array(
        Schema.Struct({
          code: Schema.optional(
            Schema.Literals([
              "None",
              "ActiveCredits",
              "ActiveCreditCard",
              "LastBillingProfile",
              "NotSupported",
              "OutstandingCharges",
              "PendingCharges",
              "ReservedInstances",
              "ActiveBillingSubscriptions",
            ]),
          ),
          message: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<BillingProfilesValidateDeleteEligibilityOutput>;

// The operation
/**
 * Validates if the billing profile can be deleted. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 */
export const BillingProfilesValidateDeleteEligibility =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingProfilesValidateDeleteEligibilityInput,
    outputSchema: BillingProfilesValidateDeleteEligibilityOutput,
  }));
// Input Schema
export interface BillingPropertyGetInput {
  subscriptionId: string;
  includeBillingCountry?: boolean;
  includeTransitionStatus?: boolean;
}
export const BillingPropertyGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    includeBillingCountry: Schema.optional(Schema.Boolean),
    includeTransitionStatus: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingProperty/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPropertyGetInput>;

// Output Schema
export interface BillingPropertyGetOutput {
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
export const BillingPropertyGetOutput =
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
  }) as unknown as Schema.Codec<BillingPropertyGetOutput>;

// The operation
/**
 * Gets the billing properties for a subscription
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param includeBillingCountry - A flag that specifies whether or not to include billing country.
 * @param includeTransitionStatus - A flag that specifies whether or not to include transition status for billing accounts with agreement type Microsoft Customer Agreement.
 */
export const BillingPropertyGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BillingPropertyGetInput,
  outputSchema: BillingPropertyGetOutput,
}));
// Input Schema
export interface BillingPropertyUpdateInput {
  subscriptionId: string;
  properties?: {
    billingAccountAgreementType?:
      | "Other"
      | "MicrosoftCustomerAgreement"
      | "EnterpriseAgreement"
      | "MicrosoftOnlineServicesProgram"
      | "MicrosoftPartnerAgreement";
    billingAccountDisplayName?: string;
    billingAccountId?: string;
    accountAdminNotificationEmailAddress?: string;
    billingAccountSoldToCountry?: string;
    billingAccountStatus?:
      | "Other"
      | "Active"
      | "UnderReview"
      | "Disabled"
      | "Deleted"
      | "Extended"
      | "Pending"
      | "New"
      | "Expired"
      | "Terminated"
      | "Transferred";
    billingAccountStatusReasonCode?:
      | "Other"
      | "UnusualActivity"
      | "ManuallyTerminated"
      | "Expired"
      | "Transferred"
      | "TerminateProcessing";
    billingAccountType?:
      | "Other"
      | "Enterprise"
      | "Individual"
      | "Partner"
      | "Reseller"
      | "ClassicPartner"
      | "Internal"
      | "Tenant"
      | "Business";
    billingAccountSubType?:
      | "Other"
      | "None"
      | "Individual"
      | "Professional"
      | "Enterprise";
    billingCurrency?: string;
    billingProfileDisplayName?: string;
    billingProfileId?: string;
    billingProfileSpendingLimit?: "Off" | "On";
    billingProfileSpendingLimitDetails?: {
      amount?: number;
      currency?: string;
      startDate?: string;
      endDate?: string;
      type?:
        | "Other"
        | "None"
        | "FreeAccount"
        | "Sandbox"
        | "AzureForStudents"
        | "AcademicSponsorship"
        | "AzureConsumptionCredit"
        | "AzurePassSponsorship"
        | "MpnSponsorship"
        | "MSDN"
        | "NonProfitSponsorship"
        | "Sponsorship"
        | "StartupSponsorship"
        | "AzureForStudentsStarter"
        | "VisualStudio";
      status?:
        | "Other"
        | "None"
        | "Active"
        | "Expired"
        | "LimitReached"
        | "LimitRemoved";
    }[];
    billingProfileStatus?:
      | "Other"
      | "Active"
      | "Disabled"
      | "Warned"
      | "Deleted"
      | "UnderReview";
    billingProfileStatusReasonCode?:
      | "Other"
      | "PastDue"
      | "UnusualActivity"
      | "SpendingLimitReached"
      | "SpendingLimitExpired";
    billingProfilePaymentMethodFamily?:
      | "Other"
      | "None"
      | "CreditCard"
      | "Credits"
      | "CheckWire"
      | "EWallet"
      | "TaskOrder"
      | "DirectDebit";
    billingProfilePaymentMethodType?: string;
    billingTenantId?: string;
    costCenter?: string;
    customerDisplayName?: string;
    customerId?: string;
    customerStatus?:
      | "Other"
      | "Active"
      | "Pending"
      | "Disabled"
      | "Warned"
      | "Deleted"
      | "UnderReview";
    invoiceSectionDisplayName?: string;
    invoiceSectionId?: string;
    invoiceSectionStatus?:
      | "Other"
      | "Active"
      | "Deleted"
      | "Disabled"
      | "UnderReview"
      | "Warned"
      | "Restricted";
    invoiceSectionStatusReasonCode?:
      | "Other"
      | "PastDue"
      | "UnusualActivity"
      | "SpendingLimitReached"
      | "SpendingLimitExpired";
    isTransitionedBillingAccount?: boolean;
    skuDescription?: string;
    skuId?: string;
    subscriptionBillingStatus?:
      | "Other"
      | "Unknown"
      | "Active"
      | "Disabled"
      | "Deleted"
      | "Warned"
      | "Expiring"
      | "Expired"
      | "AutoRenew"
      | "Cancelled"
      | "Suspended"
      | "Failed";
    subscriptionBillingStatusDetails?: {
      effectiveDate?: string;
      reason?:
        | "None"
        | "Cancelled"
        | "PastDue"
        | "SuspiciousActivity"
        | "Other"
        | "Transferred"
        | "PolicyViolation"
        | "SpendingLimitReached"
        | "Expired";
    }[];
    subscriptionBillingType?: "None" | "Benefit" | "Free" | "Paid" | "PrePaid";
    subscriptionServiceUsageAddress?: {
      addressLine1: string;
      addressLine2?: string;
      addressLine3?: string;
      city?: string;
      companyName?: string;
      country: string;
      district?: string;
      email?: string;
      firstName?: string;
      lastName?: string;
      middleName?: string;
      phoneNumber?: string;
      postalCode?: string;
      region?: string;
      isValidAddress?: boolean;
    };
    subscriptionWorkloadType?: "None" | "Production" | "DevTest" | "Internal";
    enrollmentDetails?: {
      departmentDisplayName?: string;
      departmentId?: string;
      enrollmentAccountStatus?: string;
      enrollmentAccountDisplayName?: string;
      enrollmentAccountId?: string;
    };
    isAccountAdmin?: boolean;
    productId?: string;
    productName?: string;
  };
  tags?: Record<string, string>;
}
export const BillingPropertyUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        billingAccountAgreementType: Schema.optional(
          Schema.Literals([
            "Other",
            "MicrosoftCustomerAgreement",
            "EnterpriseAgreement",
            "MicrosoftOnlineServicesProgram",
            "MicrosoftPartnerAgreement",
          ]),
        ),
        billingAccountDisplayName: Schema.optional(Schema.String),
        billingAccountId: Schema.optional(Schema.String),
        accountAdminNotificationEmailAddress: Schema.optional(Schema.String),
        billingAccountSoldToCountry: Schema.optional(Schema.String),
        billingAccountStatus: Schema.optional(
          Schema.Literals([
            "Other",
            "Active",
            "UnderReview",
            "Disabled",
            "Deleted",
            "Extended",
            "Pending",
            "New",
            "Expired",
            "Terminated",
            "Transferred",
          ]),
        ),
        billingAccountStatusReasonCode: Schema.optional(
          Schema.Literals([
            "Other",
            "UnusualActivity",
            "ManuallyTerminated",
            "Expired",
            "Transferred",
            "TerminateProcessing",
          ]),
        ),
        billingAccountType: Schema.optional(
          Schema.Literals([
            "Other",
            "Enterprise",
            "Individual",
            "Partner",
            "Reseller",
            "ClassicPartner",
            "Internal",
            "Tenant",
            "Business",
          ]),
        ),
        billingAccountSubType: Schema.optional(
          Schema.Literals([
            "Other",
            "None",
            "Individual",
            "Professional",
            "Enterprise",
          ]),
        ),
        billingCurrency: Schema.optional(Schema.String),
        billingProfileDisplayName: Schema.optional(Schema.String),
        billingProfileId: Schema.optional(Schema.String),
        billingProfileSpendingLimit: Schema.optional(
          Schema.Literals(["Off", "On"]),
        ),
        billingProfileSpendingLimitDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              amount: Schema.optional(Schema.Number),
              currency: Schema.optional(Schema.String),
              startDate: Schema.optional(Schema.String),
              endDate: Schema.optional(Schema.String),
              type: Schema.optional(
                Schema.Literals([
                  "Other",
                  "None",
                  "FreeAccount",
                  "Sandbox",
                  "AzureForStudents",
                  "AcademicSponsorship",
                  "AzureConsumptionCredit",
                  "AzurePassSponsorship",
                  "MpnSponsorship",
                  "MSDN",
                  "NonProfitSponsorship",
                  "Sponsorship",
                  "StartupSponsorship",
                  "AzureForStudentsStarter",
                  "VisualStudio",
                ]),
              ),
              status: Schema.optional(
                Schema.Literals([
                  "Other",
                  "None",
                  "Active",
                  "Expired",
                  "LimitReached",
                  "LimitRemoved",
                ]),
              ),
            }),
          ),
        ),
        billingProfileStatus: Schema.optional(
          Schema.Literals([
            "Other",
            "Active",
            "Disabled",
            "Warned",
            "Deleted",
            "UnderReview",
          ]),
        ),
        billingProfileStatusReasonCode: Schema.optional(
          Schema.Literals([
            "Other",
            "PastDue",
            "UnusualActivity",
            "SpendingLimitReached",
            "SpendingLimitExpired",
          ]),
        ),
        billingProfilePaymentMethodFamily: Schema.optional(
          Schema.Literals([
            "Other",
            "None",
            "CreditCard",
            "Credits",
            "CheckWire",
            "EWallet",
            "TaskOrder",
            "DirectDebit",
          ]),
        ),
        billingProfilePaymentMethodType: Schema.optional(Schema.String),
        billingTenantId: Schema.optional(Schema.String),
        costCenter: Schema.optional(Schema.String),
        customerDisplayName: Schema.optional(Schema.String),
        customerId: Schema.optional(Schema.String),
        customerStatus: Schema.optional(
          Schema.Literals([
            "Other",
            "Active",
            "Pending",
            "Disabled",
            "Warned",
            "Deleted",
            "UnderReview",
          ]),
        ),
        invoiceSectionDisplayName: Schema.optional(Schema.String),
        invoiceSectionId: Schema.optional(Schema.String),
        invoiceSectionStatus: Schema.optional(
          Schema.Literals([
            "Other",
            "Active",
            "Deleted",
            "Disabled",
            "UnderReview",
            "Warned",
            "Restricted",
          ]),
        ),
        invoiceSectionStatusReasonCode: Schema.optional(
          Schema.Literals([
            "Other",
            "PastDue",
            "UnusualActivity",
            "SpendingLimitReached",
            "SpendingLimitExpired",
          ]),
        ),
        isTransitionedBillingAccount: Schema.optional(Schema.Boolean),
        skuDescription: Schema.optional(Schema.String),
        skuId: Schema.optional(Schema.String),
        subscriptionBillingStatus: Schema.optional(
          Schema.Literals([
            "Other",
            "Unknown",
            "Active",
            "Disabled",
            "Deleted",
            "Warned",
            "Expiring",
            "Expired",
            "AutoRenew",
            "Cancelled",
            "Suspended",
            "Failed",
          ]),
        ),
        subscriptionBillingStatusDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              effectiveDate: Schema.optional(Schema.String),
              reason: Schema.optional(
                Schema.Literals([
                  "None",
                  "Cancelled",
                  "PastDue",
                  "SuspiciousActivity",
                  "Other",
                  "Transferred",
                  "PolicyViolation",
                  "SpendingLimitReached",
                  "Expired",
                ]),
              ),
            }),
          ),
        ),
        subscriptionBillingType: Schema.optional(
          Schema.Literals(["None", "Benefit", "Free", "Paid", "PrePaid"]),
        ),
        subscriptionServiceUsageAddress: Schema.optional(
          Schema.Struct({
            addressLine1: Schema.String,
            addressLine2: Schema.optional(Schema.String),
            addressLine3: Schema.optional(Schema.String),
            city: Schema.optional(Schema.String),
            companyName: Schema.optional(Schema.String),
            country: Schema.String,
            district: Schema.optional(Schema.String),
            email: Schema.optional(Schema.String),
            firstName: Schema.optional(Schema.String),
            lastName: Schema.optional(Schema.String),
            middleName: Schema.optional(Schema.String),
            phoneNumber: Schema.optional(Schema.String),
            postalCode: Schema.optional(Schema.String),
            region: Schema.optional(Schema.String),
            isValidAddress: Schema.optional(Schema.Boolean),
          }),
        ),
        subscriptionWorkloadType: Schema.optional(
          Schema.Literals(["None", "Production", "DevTest", "Internal"]),
        ),
        enrollmentDetails: Schema.optional(
          Schema.Struct({
            departmentDisplayName: Schema.optional(Schema.String),
            departmentId: Schema.optional(Schema.String),
            enrollmentAccountStatus: Schema.optional(Schema.String),
            enrollmentAccountDisplayName: Schema.optional(Schema.String),
            enrollmentAccountId: Schema.optional(Schema.String),
          }),
        ),
        isAccountAdmin: Schema.optional(Schema.Boolean),
        productId: Schema.optional(Schema.String),
        productName: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingProperty/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingPropertyUpdateInput>;

// Output Schema
export interface BillingPropertyUpdateOutput {
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
export const BillingPropertyUpdateOutput =
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
  }) as unknown as Schema.Codec<BillingPropertyUpdateOutput>;

// The operation
/**
 * Updates the billing property of a subscription. Currently, cost center can be updated for billing accounts with agreement type Microsoft Customer Agreement and subscription service usage address can be updated for billing accounts with agreement type Microsoft Online Service Program.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const BillingPropertyUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingPropertyUpdateInput,
    outputSchema: BillingPropertyUpdateOutput,
  }),
);
// Input Schema
export interface BillingRequestsCreateOrUpdateInput {
  billingRequestName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "New"
      | "Pending"
      | "Provisioning"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Creating"
      | "Created"
      | "Expired";
    additionalInformation?: Record<string, string>;
    reviewedBy?: { tenantId?: string; objectId?: string; upn?: string };
    reviewalDate?: string;
    billingAccountId?: string;
    billingAccountName?: string;
    billingAccountDisplayName?: string;
    billingAccountPrimaryBillingTenantId?: string;
    billingProfileId?: string;
    billingProfileName?: string;
    billingProfileDisplayName?: string;
    createdBy?: { tenantId?: string; objectId?: string; upn?: string };
    creationDate?: string;
    expirationDate?: string;
    decisionReason?: string;
    invoiceSectionId?: string;
    invoiceSectionName?: string;
    invoiceSectionDisplayName?: string;
    customerId?: string;
    customerName?: string;
    customerDisplayName?: string;
    subscriptionId?: string;
    subscriptionName?: string;
    subscriptionDisplayName?: string;
    justification?: string;
    recipients?: { tenantId?: string; objectId?: string; upn?: string }[];
    requestScope?: string;
    billingScope?: string;
    status?:
      | "Other"
      | "Pending"
      | "Approved"
      | "Declined"
      | "Cancelled"
      | "Completed"
      | "Expired";
    type?:
      | "Other"
      | "InvoiceAccess"
      | "ProvisioningAccess"
      | "RoleAssignment"
      | "UpdateBillingPolicy";
    lastUpdatedBy?: { tenantId?: string; objectId?: string; upn?: string };
    lastUpdatedDate?: string;
  };
  tags?: Record<string, string>;
}
export const BillingRequestsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingRequestName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Canceled",
            "Failed",
            "New",
            "Pending",
            "Provisioning",
            "PendingBilling",
            "ConfirmedBilling",
            "Creating",
            "Created",
            "Expired",
          ]),
        ),
        additionalInformation: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        reviewedBy: Schema.optional(
          Schema.Struct({
            tenantId: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.String),
            upn: Schema.optional(Schema.String),
          }),
        ),
        reviewalDate: Schema.optional(Schema.String),
        billingAccountId: Schema.optional(Schema.String),
        billingAccountName: Schema.optional(Schema.String),
        billingAccountDisplayName: Schema.optional(Schema.String),
        billingAccountPrimaryBillingTenantId: Schema.optional(Schema.String),
        billingProfileId: Schema.optional(Schema.String),
        billingProfileName: Schema.optional(Schema.String),
        billingProfileDisplayName: Schema.optional(Schema.String),
        createdBy: Schema.optional(
          Schema.Struct({
            tenantId: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.String),
            upn: Schema.optional(Schema.String),
          }),
        ),
        creationDate: Schema.optional(Schema.String),
        expirationDate: Schema.optional(Schema.String),
        decisionReason: Schema.optional(Schema.String),
        invoiceSectionId: Schema.optional(Schema.String),
        invoiceSectionName: Schema.optional(Schema.String),
        invoiceSectionDisplayName: Schema.optional(Schema.String),
        customerId: Schema.optional(Schema.String),
        customerName: Schema.optional(Schema.String),
        customerDisplayName: Schema.optional(Schema.String),
        subscriptionId: Schema.optional(Schema.String),
        subscriptionName: Schema.optional(Schema.String),
        subscriptionDisplayName: Schema.optional(Schema.String),
        justification: Schema.optional(Schema.String),
        recipients: Schema.optional(
          Schema.Array(
            Schema.Struct({
              tenantId: Schema.optional(Schema.String),
              objectId: Schema.optional(Schema.String),
              upn: Schema.optional(Schema.String),
            }),
          ),
        ),
        requestScope: Schema.optional(Schema.String),
        billingScope: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals([
            "Other",
            "Pending",
            "Approved",
            "Declined",
            "Cancelled",
            "Completed",
            "Expired",
          ]),
        ),
        type: Schema.optional(
          Schema.Literals([
            "Other",
            "InvoiceAccess",
            "ProvisioningAccess",
            "RoleAssignment",
            "UpdateBillingPolicy",
          ]),
        ),
        lastUpdatedBy: Schema.optional(
          Schema.Struct({
            tenantId: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.String),
            upn: Schema.optional(Schema.String),
          }),
        ),
        lastUpdatedDate: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingRequests/{billingRequestName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRequestsCreateOrUpdateInput>;

// Output Schema
export interface BillingRequestsCreateOrUpdateOutput {
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
export const BillingRequestsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BillingRequestsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a billing request.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingRequestName - The ID that uniquely identifies a billing request.
 */
export const BillingRequestsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRequestsCreateOrUpdateInput,
    outputSchema: BillingRequestsCreateOrUpdateOutput,
  }));
// Input Schema
export interface BillingRequestsGetInput {
  billingRequestName: string;
}
export const BillingRequestsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingRequestName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingRequests/{billingRequestName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRequestsGetInput>;

// Output Schema
export interface BillingRequestsGetOutput {
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
export const BillingRequestsGetOutput =
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
  }) as unknown as Schema.Codec<BillingRequestsGetOutput>;

// The operation
/**
 * Gets a billing request by its ID.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingRequestName - The ID that uniquely identifies a billing request.
 */
export const BillingRequestsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BillingRequestsGetInput,
  outputSchema: BillingRequestsGetOutput,
}));
// Input Schema
export interface BillingRequestsListByBillingAccountInput {
  billingAccountName: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const BillingRequestsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRequests",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRequestsListByBillingAccountInput>;

// Output Schema
export interface BillingRequestsListByBillingAccountOutput {
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
export const BillingRequestsListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<BillingRequestsListByBillingAccountOutput>;

// The operation
/**
 * The list of billing requests submitted for the billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const BillingRequestsListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRequestsListByBillingAccountInput,
    outputSchema: BillingRequestsListByBillingAccountOutput,
  }));
// Input Schema
export interface BillingRequestsListByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const BillingRequestsListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRequests",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRequestsListByBillingProfileInput>;

// Output Schema
export interface BillingRequestsListByBillingProfileOutput {
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
export const BillingRequestsListByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<BillingRequestsListByBillingProfileOutput>;

// The operation
/**
 * The list of billing requests submitted for the billing profile.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const BillingRequestsListByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRequestsListByBillingProfileInput,
    outputSchema: BillingRequestsListByBillingProfileOutput,
  }));
// Input Schema
export interface BillingRequestsListByCustomerInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const BillingRequestsListByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/billingRequests",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRequestsListByCustomerInput>;

// Output Schema
export interface BillingRequestsListByCustomerOutput {
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
export const BillingRequestsListByCustomerOutput =
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
  }) as unknown as Schema.Codec<BillingRequestsListByCustomerOutput>;

// The operation
/**
 * The list of billing requests submitted for the customer.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const BillingRequestsListByCustomer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRequestsListByCustomerInput,
    outputSchema: BillingRequestsListByCustomerOutput,
  }));
// Input Schema
export interface BillingRequestsListByInvoiceSectionInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const BillingRequestsListByInvoiceSectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRequests",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRequestsListByInvoiceSectionInput>;

// Output Schema
export interface BillingRequestsListByInvoiceSectionOutput {
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
export const BillingRequestsListByInvoiceSectionOutput =
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
  }) as unknown as Schema.Codec<BillingRequestsListByInvoiceSectionOutput>;

// The operation
/**
 * The list of billing requests submitted for the invoice section.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const BillingRequestsListByInvoiceSection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRequestsListByInvoiceSectionInput,
    outputSchema: BillingRequestsListByInvoiceSectionOutput,
  }));
// Input Schema
export interface BillingRequestsListByUserInput {
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const BillingRequestsListByUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingRequests",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRequestsListByUserInput>;

// Output Schema
export interface BillingRequestsListByUserOutput {
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
export const BillingRequestsListByUserOutput =
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
  }) as unknown as Schema.Codec<BillingRequestsListByUserOutput>;

// The operation
/**
 * The list of billing requests submitted by a user.
 *
 * @param api-version - The API version to use for this operation.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const BillingRequestsListByUser = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingRequestsListByUserInput,
    outputSchema: BillingRequestsListByUserOutput,
  }),
);
// Input Schema
export interface BillingRoleAssignmentsCreateByBillingAccountInput {
  billingAccountName: string;
  provisioningState?:
    | "Succeeded"
    | "Canceled"
    | "Failed"
    | "New"
    | "Pending"
    | "Provisioning"
    | "PendingBilling"
    | "ConfirmedBilling"
    | "Creating"
    | "Created"
    | "Expired";
  createdOn?: string;
  createdByPrincipalTenantId?: string;
  createdByPrincipalId?: string;
  createdByPrincipalPuid?: string;
  createdByUserEmailAddress?: string;
  modifiedOn?: string;
  modifiedByPrincipalPuid?: string;
  modifiedByUserEmailAddress?: string;
  modifiedByPrincipalId?: string;
  modifiedByPrincipalTenantId?: string;
  principalPuid?: string;
  principalId?: string;
  principalTenantId?: string;
  roleDefinitionId: string;
  scope?: string;
  userAuthenticationType?: string;
  userEmailAddress?: string;
  principalTenantName?: string;
  principalDisplayName?: string;
  principalType?:
    | "Unknown"
    | "None"
    | "User"
    | "Group"
    | "DirectoryRole"
    | "ServicePrincipal"
    | "Everyone";
  billingRequestId?: string;
  billingAccountId?: string;
  billingAccountDisplayName?: string;
  billingProfileId?: string;
  billingProfileDisplayName?: string;
  invoiceSectionId?: string;
  invoiceSectionDisplayName?: string;
  customerId?: string;
  customerDisplayName?: string;
}
export const BillingRoleAssignmentsCreateByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Canceled",
        "Failed",
        "New",
        "Pending",
        "Provisioning",
        "PendingBilling",
        "ConfirmedBilling",
        "Creating",
        "Created",
        "Expired",
      ]),
    ),
    createdOn: Schema.optional(Schema.String),
    createdByPrincipalTenantId: Schema.optional(Schema.String),
    createdByPrincipalId: Schema.optional(Schema.String),
    createdByPrincipalPuid: Schema.optional(Schema.String),
    createdByUserEmailAddress: Schema.optional(Schema.String),
    modifiedOn: Schema.optional(Schema.String),
    modifiedByPrincipalPuid: Schema.optional(Schema.String),
    modifiedByUserEmailAddress: Schema.optional(Schema.String),
    modifiedByPrincipalId: Schema.optional(Schema.String),
    modifiedByPrincipalTenantId: Schema.optional(Schema.String),
    principalPuid: Schema.optional(Schema.String),
    principalId: Schema.optional(Schema.String),
    principalTenantId: Schema.optional(Schema.String),
    roleDefinitionId: Schema.String,
    scope: Schema.optional(Schema.String),
    userAuthenticationType: Schema.optional(Schema.String),
    userEmailAddress: Schema.optional(Schema.String),
    principalTenantName: Schema.optional(Schema.String),
    principalDisplayName: Schema.optional(Schema.String),
    principalType: Schema.optional(
      Schema.Literals([
        "Unknown",
        "None",
        "User",
        "Group",
        "DirectoryRole",
        "ServicePrincipal",
        "Everyone",
      ]),
    ),
    billingRequestId: Schema.optional(Schema.String),
    billingAccountId: Schema.optional(Schema.String),
    billingAccountDisplayName: Schema.optional(Schema.String),
    billingProfileId: Schema.optional(Schema.String),
    billingProfileDisplayName: Schema.optional(Schema.String),
    invoiceSectionId: Schema.optional(Schema.String),
    invoiceSectionDisplayName: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    customerDisplayName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/createBillingRoleAssignment",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsCreateByBillingAccountInput>;

// Output Schema
export interface BillingRoleAssignmentsCreateByBillingAccountOutput {
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
export const BillingRoleAssignmentsCreateByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsCreateByBillingAccountOutput>;

// The operation
/**
 * Adds a role assignment on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const BillingRoleAssignmentsCreateByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsCreateByBillingAccountInput,
    outputSchema: BillingRoleAssignmentsCreateByBillingAccountOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsCreateByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  provisioningState?:
    | "Succeeded"
    | "Canceled"
    | "Failed"
    | "New"
    | "Pending"
    | "Provisioning"
    | "PendingBilling"
    | "ConfirmedBilling"
    | "Creating"
    | "Created"
    | "Expired";
  createdOn?: string;
  createdByPrincipalTenantId?: string;
  createdByPrincipalId?: string;
  createdByPrincipalPuid?: string;
  createdByUserEmailAddress?: string;
  modifiedOn?: string;
  modifiedByPrincipalPuid?: string;
  modifiedByUserEmailAddress?: string;
  modifiedByPrincipalId?: string;
  modifiedByPrincipalTenantId?: string;
  principalPuid?: string;
  principalId?: string;
  principalTenantId?: string;
  roleDefinitionId: string;
  scope?: string;
  userAuthenticationType?: string;
  userEmailAddress?: string;
  principalTenantName?: string;
  principalDisplayName?: string;
  principalType?:
    | "Unknown"
    | "None"
    | "User"
    | "Group"
    | "DirectoryRole"
    | "ServicePrincipal"
    | "Everyone";
  billingRequestId?: string;
  billingAccountId?: string;
  billingAccountDisplayName?: string;
  billingProfileId?: string;
  billingProfileDisplayName?: string;
  invoiceSectionId?: string;
  invoiceSectionDisplayName?: string;
  customerId?: string;
  customerDisplayName?: string;
}
export const BillingRoleAssignmentsCreateByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Canceled",
        "Failed",
        "New",
        "Pending",
        "Provisioning",
        "PendingBilling",
        "ConfirmedBilling",
        "Creating",
        "Created",
        "Expired",
      ]),
    ),
    createdOn: Schema.optional(Schema.String),
    createdByPrincipalTenantId: Schema.optional(Schema.String),
    createdByPrincipalId: Schema.optional(Schema.String),
    createdByPrincipalPuid: Schema.optional(Schema.String),
    createdByUserEmailAddress: Schema.optional(Schema.String),
    modifiedOn: Schema.optional(Schema.String),
    modifiedByPrincipalPuid: Schema.optional(Schema.String),
    modifiedByUserEmailAddress: Schema.optional(Schema.String),
    modifiedByPrincipalId: Schema.optional(Schema.String),
    modifiedByPrincipalTenantId: Schema.optional(Schema.String),
    principalPuid: Schema.optional(Schema.String),
    principalId: Schema.optional(Schema.String),
    principalTenantId: Schema.optional(Schema.String),
    roleDefinitionId: Schema.String,
    scope: Schema.optional(Schema.String),
    userAuthenticationType: Schema.optional(Schema.String),
    userEmailAddress: Schema.optional(Schema.String),
    principalTenantName: Schema.optional(Schema.String),
    principalDisplayName: Schema.optional(Schema.String),
    principalType: Schema.optional(
      Schema.Literals([
        "Unknown",
        "None",
        "User",
        "Group",
        "DirectoryRole",
        "ServicePrincipal",
        "Everyone",
      ]),
    ),
    billingRequestId: Schema.optional(Schema.String),
    billingAccountId: Schema.optional(Schema.String),
    billingAccountDisplayName: Schema.optional(Schema.String),
    billingProfileId: Schema.optional(Schema.String),
    billingProfileDisplayName: Schema.optional(Schema.String),
    invoiceSectionId: Schema.optional(Schema.String),
    invoiceSectionDisplayName: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    customerDisplayName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/createBillingRoleAssignment",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsCreateByBillingProfileInput>;

// Output Schema
export interface BillingRoleAssignmentsCreateByBillingProfileOutput {
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
export const BillingRoleAssignmentsCreateByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsCreateByBillingProfileOutput>;

// The operation
/**
 * Adds a role assignment on a billing profile. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 */
export const BillingRoleAssignmentsCreateByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsCreateByBillingProfileInput,
    outputSchema: BillingRoleAssignmentsCreateByBillingProfileOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsCreateByCustomerInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  provisioningState?:
    | "Succeeded"
    | "Canceled"
    | "Failed"
    | "New"
    | "Pending"
    | "Provisioning"
    | "PendingBilling"
    | "ConfirmedBilling"
    | "Creating"
    | "Created"
    | "Expired";
  createdOn?: string;
  createdByPrincipalTenantId?: string;
  createdByPrincipalId?: string;
  createdByPrincipalPuid?: string;
  createdByUserEmailAddress?: string;
  modifiedOn?: string;
  modifiedByPrincipalPuid?: string;
  modifiedByUserEmailAddress?: string;
  modifiedByPrincipalId?: string;
  modifiedByPrincipalTenantId?: string;
  principalPuid?: string;
  principalId?: string;
  principalTenantId?: string;
  roleDefinitionId: string;
  scope?: string;
  userAuthenticationType?: string;
  userEmailAddress?: string;
  principalTenantName?: string;
  principalDisplayName?: string;
  principalType?:
    | "Unknown"
    | "None"
    | "User"
    | "Group"
    | "DirectoryRole"
    | "ServicePrincipal"
    | "Everyone";
  billingRequestId?: string;
  billingAccountId?: string;
  billingAccountDisplayName?: string;
  billingProfileId?: string;
  billingProfileDisplayName?: string;
  invoiceSectionId?: string;
  invoiceSectionDisplayName?: string;
  customerId?: string;
  customerDisplayName?: string;
}
export const BillingRoleAssignmentsCreateByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Canceled",
        "Failed",
        "New",
        "Pending",
        "Provisioning",
        "PendingBilling",
        "ConfirmedBilling",
        "Creating",
        "Created",
        "Expired",
      ]),
    ),
    createdOn: Schema.optional(Schema.String),
    createdByPrincipalTenantId: Schema.optional(Schema.String),
    createdByPrincipalId: Schema.optional(Schema.String),
    createdByPrincipalPuid: Schema.optional(Schema.String),
    createdByUserEmailAddress: Schema.optional(Schema.String),
    modifiedOn: Schema.optional(Schema.String),
    modifiedByPrincipalPuid: Schema.optional(Schema.String),
    modifiedByUserEmailAddress: Schema.optional(Schema.String),
    modifiedByPrincipalId: Schema.optional(Schema.String),
    modifiedByPrincipalTenantId: Schema.optional(Schema.String),
    principalPuid: Schema.optional(Schema.String),
    principalId: Schema.optional(Schema.String),
    principalTenantId: Schema.optional(Schema.String),
    roleDefinitionId: Schema.String,
    scope: Schema.optional(Schema.String),
    userAuthenticationType: Schema.optional(Schema.String),
    userEmailAddress: Schema.optional(Schema.String),
    principalTenantName: Schema.optional(Schema.String),
    principalDisplayName: Schema.optional(Schema.String),
    principalType: Schema.optional(
      Schema.Literals([
        "Unknown",
        "None",
        "User",
        "Group",
        "DirectoryRole",
        "ServicePrincipal",
        "Everyone",
      ]),
    ),
    billingRequestId: Schema.optional(Schema.String),
    billingAccountId: Schema.optional(Schema.String),
    billingAccountDisplayName: Schema.optional(Schema.String),
    billingProfileId: Schema.optional(Schema.String),
    billingProfileDisplayName: Schema.optional(Schema.String),
    invoiceSectionId: Schema.optional(Schema.String),
    invoiceSectionDisplayName: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    customerDisplayName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/createBillingRoleAssignment",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsCreateByCustomerInput>;

// Output Schema
export interface BillingRoleAssignmentsCreateByCustomerOutput {
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
export const BillingRoleAssignmentsCreateByCustomerOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsCreateByCustomerOutput>;

// The operation
/**
 * Adds a role assignment on a customer. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 */
export const BillingRoleAssignmentsCreateByCustomer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsCreateByCustomerInput,
    outputSchema: BillingRoleAssignmentsCreateByCustomerOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsCreateByInvoiceSectionInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  provisioningState?:
    | "Succeeded"
    | "Canceled"
    | "Failed"
    | "New"
    | "Pending"
    | "Provisioning"
    | "PendingBilling"
    | "ConfirmedBilling"
    | "Creating"
    | "Created"
    | "Expired";
  createdOn?: string;
  createdByPrincipalTenantId?: string;
  createdByPrincipalId?: string;
  createdByPrincipalPuid?: string;
  createdByUserEmailAddress?: string;
  modifiedOn?: string;
  modifiedByPrincipalPuid?: string;
  modifiedByUserEmailAddress?: string;
  modifiedByPrincipalId?: string;
  modifiedByPrincipalTenantId?: string;
  principalPuid?: string;
  principalId?: string;
  principalTenantId?: string;
  roleDefinitionId: string;
  scope?: string;
  userAuthenticationType?: string;
  userEmailAddress?: string;
  principalTenantName?: string;
  principalDisplayName?: string;
  principalType?:
    | "Unknown"
    | "None"
    | "User"
    | "Group"
    | "DirectoryRole"
    | "ServicePrincipal"
    | "Everyone";
  billingRequestId?: string;
  billingAccountId?: string;
  billingAccountDisplayName?: string;
  billingProfileId?: string;
  billingProfileDisplayName?: string;
  invoiceSectionId?: string;
  invoiceSectionDisplayName?: string;
  customerId?: string;
  customerDisplayName?: string;
}
export const BillingRoleAssignmentsCreateByInvoiceSectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    provisioningState: Schema.optional(
      Schema.Literals([
        "Succeeded",
        "Canceled",
        "Failed",
        "New",
        "Pending",
        "Provisioning",
        "PendingBilling",
        "ConfirmedBilling",
        "Creating",
        "Created",
        "Expired",
      ]),
    ),
    createdOn: Schema.optional(Schema.String),
    createdByPrincipalTenantId: Schema.optional(Schema.String),
    createdByPrincipalId: Schema.optional(Schema.String),
    createdByPrincipalPuid: Schema.optional(Schema.String),
    createdByUserEmailAddress: Schema.optional(Schema.String),
    modifiedOn: Schema.optional(Schema.String),
    modifiedByPrincipalPuid: Schema.optional(Schema.String),
    modifiedByUserEmailAddress: Schema.optional(Schema.String),
    modifiedByPrincipalId: Schema.optional(Schema.String),
    modifiedByPrincipalTenantId: Schema.optional(Schema.String),
    principalPuid: Schema.optional(Schema.String),
    principalId: Schema.optional(Schema.String),
    principalTenantId: Schema.optional(Schema.String),
    roleDefinitionId: Schema.String,
    scope: Schema.optional(Schema.String),
    userAuthenticationType: Schema.optional(Schema.String),
    userEmailAddress: Schema.optional(Schema.String),
    principalTenantName: Schema.optional(Schema.String),
    principalDisplayName: Schema.optional(Schema.String),
    principalType: Schema.optional(
      Schema.Literals([
        "Unknown",
        "None",
        "User",
        "Group",
        "DirectoryRole",
        "ServicePrincipal",
        "Everyone",
      ]),
    ),
    billingRequestId: Schema.optional(Schema.String),
    billingAccountId: Schema.optional(Schema.String),
    billingAccountDisplayName: Schema.optional(Schema.String),
    billingProfileId: Schema.optional(Schema.String),
    billingProfileDisplayName: Schema.optional(Schema.String),
    invoiceSectionId: Schema.optional(Schema.String),
    invoiceSectionDisplayName: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    customerDisplayName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/createBillingRoleAssignment",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsCreateByInvoiceSectionInput>;

// Output Schema
export interface BillingRoleAssignmentsCreateByInvoiceSectionOutput {
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
export const BillingRoleAssignmentsCreateByInvoiceSectionOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsCreateByInvoiceSectionOutput>;

// The operation
/**
 * Adds a role assignment on an invoice section. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 */
export const BillingRoleAssignmentsCreateByInvoiceSection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsCreateByInvoiceSectionInput,
    outputSchema: BillingRoleAssignmentsCreateByInvoiceSectionOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsCreateOrUpdateByBillingAccountInput {
  billingAccountName: string;
  billingRoleAssignmentName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "New"
      | "Pending"
      | "Provisioning"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Creating"
      | "Created"
      | "Expired";
    createdOn?: string;
    createdByPrincipalTenantId?: string;
    createdByPrincipalId?: string;
    createdByPrincipalPuid?: string;
    createdByUserEmailAddress?: string;
    modifiedOn?: string;
    modifiedByPrincipalPuid?: string;
    modifiedByUserEmailAddress?: string;
    modifiedByPrincipalId?: string;
    modifiedByPrincipalTenantId?: string;
    principalPuid?: string;
    principalId?: string;
    principalTenantId?: string;
    roleDefinitionId: string;
    scope?: string;
    userAuthenticationType?: string;
    userEmailAddress?: string;
    principalTenantName?: string;
    principalDisplayName?: string;
    principalType?:
      | "Unknown"
      | "None"
      | "User"
      | "Group"
      | "DirectoryRole"
      | "ServicePrincipal"
      | "Everyone";
    billingRequestId?: string;
    billingAccountId?: string;
    billingAccountDisplayName?: string;
    billingProfileId?: string;
    billingProfileDisplayName?: string;
    invoiceSectionId?: string;
    invoiceSectionDisplayName?: string;
    customerId?: string;
    customerDisplayName?: string;
  };
  tags?: Record<string, string>;
}
export const BillingRoleAssignmentsCreateOrUpdateByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Canceled",
            "Failed",
            "New",
            "Pending",
            "Provisioning",
            "PendingBilling",
            "ConfirmedBilling",
            "Creating",
            "Created",
            "Expired",
          ]),
        ),
        createdOn: Schema.optional(Schema.String),
        createdByPrincipalTenantId: Schema.optional(Schema.String),
        createdByPrincipalId: Schema.optional(Schema.String),
        createdByPrincipalPuid: Schema.optional(Schema.String),
        createdByUserEmailAddress: Schema.optional(Schema.String),
        modifiedOn: Schema.optional(Schema.String),
        modifiedByPrincipalPuid: Schema.optional(Schema.String),
        modifiedByUserEmailAddress: Schema.optional(Schema.String),
        modifiedByPrincipalId: Schema.optional(Schema.String),
        modifiedByPrincipalTenantId: Schema.optional(Schema.String),
        principalPuid: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        principalTenantId: Schema.optional(Schema.String),
        roleDefinitionId: Schema.String,
        scope: Schema.optional(Schema.String),
        userAuthenticationType: Schema.optional(Schema.String),
        userEmailAddress: Schema.optional(Schema.String),
        principalTenantName: Schema.optional(Schema.String),
        principalDisplayName: Schema.optional(Schema.String),
        principalType: Schema.optional(
          Schema.Literals([
            "Unknown",
            "None",
            "User",
            "Group",
            "DirectoryRole",
            "ServicePrincipal",
            "Everyone",
          ]),
        ),
        billingRequestId: Schema.optional(Schema.String),
        billingAccountId: Schema.optional(Schema.String),
        billingAccountDisplayName: Schema.optional(Schema.String),
        billingProfileId: Schema.optional(Schema.String),
        billingProfileDisplayName: Schema.optional(Schema.String),
        invoiceSectionId: Schema.optional(Schema.String),
        invoiceSectionDisplayName: Schema.optional(Schema.String),
        customerId: Schema.optional(Schema.String),
        customerDisplayName: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsCreateOrUpdateByBillingAccountInput>;

// Output Schema
export interface BillingRoleAssignmentsCreateOrUpdateByBillingAccountOutput {
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
export const BillingRoleAssignmentsCreateOrUpdateByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsCreateOrUpdateByBillingAccountOutput>;

// The operation
/**
 * Create or update a billing role assignment. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsCreateOrUpdateByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsCreateOrUpdateByBillingAccountInput,
    outputSchema: BillingRoleAssignmentsCreateOrUpdateByBillingAccountOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsCreateOrUpdateByDepartmentInput {
  billingAccountName: string;
  departmentName: string;
  billingRoleAssignmentName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "New"
      | "Pending"
      | "Provisioning"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Creating"
      | "Created"
      | "Expired";
    createdOn?: string;
    createdByPrincipalTenantId?: string;
    createdByPrincipalId?: string;
    createdByPrincipalPuid?: string;
    createdByUserEmailAddress?: string;
    modifiedOn?: string;
    modifiedByPrincipalPuid?: string;
    modifiedByUserEmailAddress?: string;
    modifiedByPrincipalId?: string;
    modifiedByPrincipalTenantId?: string;
    principalPuid?: string;
    principalId?: string;
    principalTenantId?: string;
    roleDefinitionId: string;
    scope?: string;
    userAuthenticationType?: string;
    userEmailAddress?: string;
    principalTenantName?: string;
    principalDisplayName?: string;
    principalType?:
      | "Unknown"
      | "None"
      | "User"
      | "Group"
      | "DirectoryRole"
      | "ServicePrincipal"
      | "Everyone";
    billingRequestId?: string;
    billingAccountId?: string;
    billingAccountDisplayName?: string;
    billingProfileId?: string;
    billingProfileDisplayName?: string;
    invoiceSectionId?: string;
    invoiceSectionDisplayName?: string;
    customerId?: string;
    customerDisplayName?: string;
  };
  tags?: Record<string, string>;
}
export const BillingRoleAssignmentsCreateOrUpdateByDepartmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    departmentName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Canceled",
            "Failed",
            "New",
            "Pending",
            "Provisioning",
            "PendingBilling",
            "ConfirmedBilling",
            "Creating",
            "Created",
            "Expired",
          ]),
        ),
        createdOn: Schema.optional(Schema.String),
        createdByPrincipalTenantId: Schema.optional(Schema.String),
        createdByPrincipalId: Schema.optional(Schema.String),
        createdByPrincipalPuid: Schema.optional(Schema.String),
        createdByUserEmailAddress: Schema.optional(Schema.String),
        modifiedOn: Schema.optional(Schema.String),
        modifiedByPrincipalPuid: Schema.optional(Schema.String),
        modifiedByUserEmailAddress: Schema.optional(Schema.String),
        modifiedByPrincipalId: Schema.optional(Schema.String),
        modifiedByPrincipalTenantId: Schema.optional(Schema.String),
        principalPuid: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        principalTenantId: Schema.optional(Schema.String),
        roleDefinitionId: Schema.String,
        scope: Schema.optional(Schema.String),
        userAuthenticationType: Schema.optional(Schema.String),
        userEmailAddress: Schema.optional(Schema.String),
        principalTenantName: Schema.optional(Schema.String),
        principalDisplayName: Schema.optional(Schema.String),
        principalType: Schema.optional(
          Schema.Literals([
            "Unknown",
            "None",
            "User",
            "Group",
            "DirectoryRole",
            "ServicePrincipal",
            "Everyone",
          ]),
        ),
        billingRequestId: Schema.optional(Schema.String),
        billingAccountId: Schema.optional(Schema.String),
        billingAccountDisplayName: Schema.optional(Schema.String),
        billingProfileId: Schema.optional(Schema.String),
        billingProfileDisplayName: Schema.optional(Schema.String),
        invoiceSectionId: Schema.optional(Schema.String),
        invoiceSectionDisplayName: Schema.optional(Schema.String),
        customerId: Schema.optional(Schema.String),
        customerDisplayName: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsCreateOrUpdateByDepartmentInput>;

// Output Schema
export interface BillingRoleAssignmentsCreateOrUpdateByDepartmentOutput {
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
export const BillingRoleAssignmentsCreateOrUpdateByDepartmentOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsCreateOrUpdateByDepartmentOutput>;

// The operation
/**
 * Create or update a billing role assignment. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param departmentName - The name of the department.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsCreateOrUpdateByDepartment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsCreateOrUpdateByDepartmentInput,
    outputSchema: BillingRoleAssignmentsCreateOrUpdateByDepartmentOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccountInput {
  billingAccountName: string;
  enrollmentAccountName: string;
  billingRoleAssignmentName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "New"
      | "Pending"
      | "Provisioning"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Creating"
      | "Created"
      | "Expired";
    createdOn?: string;
    createdByPrincipalTenantId?: string;
    createdByPrincipalId?: string;
    createdByPrincipalPuid?: string;
    createdByUserEmailAddress?: string;
    modifiedOn?: string;
    modifiedByPrincipalPuid?: string;
    modifiedByUserEmailAddress?: string;
    modifiedByPrincipalId?: string;
    modifiedByPrincipalTenantId?: string;
    principalPuid?: string;
    principalId?: string;
    principalTenantId?: string;
    roleDefinitionId: string;
    scope?: string;
    userAuthenticationType?: string;
    userEmailAddress?: string;
    principalTenantName?: string;
    principalDisplayName?: string;
    principalType?:
      | "Unknown"
      | "None"
      | "User"
      | "Group"
      | "DirectoryRole"
      | "ServicePrincipal"
      | "Everyone";
    billingRequestId?: string;
    billingAccountId?: string;
    billingAccountDisplayName?: string;
    billingProfileId?: string;
    billingProfileDisplayName?: string;
    invoiceSectionId?: string;
    invoiceSectionDisplayName?: string;
    customerId?: string;
    customerDisplayName?: string;
  };
  tags?: Record<string, string>;
}
export const BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    enrollmentAccountName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Canceled",
            "Failed",
            "New",
            "Pending",
            "Provisioning",
            "PendingBilling",
            "ConfirmedBilling",
            "Creating",
            "Created",
            "Expired",
          ]),
        ),
        createdOn: Schema.optional(Schema.String),
        createdByPrincipalTenantId: Schema.optional(Schema.String),
        createdByPrincipalId: Schema.optional(Schema.String),
        createdByPrincipalPuid: Schema.optional(Schema.String),
        createdByUserEmailAddress: Schema.optional(Schema.String),
        modifiedOn: Schema.optional(Schema.String),
        modifiedByPrincipalPuid: Schema.optional(Schema.String),
        modifiedByUserEmailAddress: Schema.optional(Schema.String),
        modifiedByPrincipalId: Schema.optional(Schema.String),
        modifiedByPrincipalTenantId: Schema.optional(Schema.String),
        principalPuid: Schema.optional(Schema.String),
        principalId: Schema.optional(Schema.String),
        principalTenantId: Schema.optional(Schema.String),
        roleDefinitionId: Schema.String,
        scope: Schema.optional(Schema.String),
        userAuthenticationType: Schema.optional(Schema.String),
        userEmailAddress: Schema.optional(Schema.String),
        principalTenantName: Schema.optional(Schema.String),
        principalDisplayName: Schema.optional(Schema.String),
        principalType: Schema.optional(
          Schema.Literals([
            "Unknown",
            "None",
            "User",
            "Group",
            "DirectoryRole",
            "ServicePrincipal",
            "Everyone",
          ]),
        ),
        billingRequestId: Schema.optional(Schema.String),
        billingAccountId: Schema.optional(Schema.String),
        billingAccountDisplayName: Schema.optional(Schema.String),
        billingProfileId: Schema.optional(Schema.String),
        billingProfileDisplayName: Schema.optional(Schema.String),
        invoiceSectionId: Schema.optional(Schema.String),
        invoiceSectionDisplayName: Schema.optional(Schema.String),
        customerId: Schema.optional(Schema.String),
        customerDisplayName: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccountInput>;

// Output Schema
export interface BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccountOutput {
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
export const BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccountOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccountOutput>;

// The operation
/**
 * Create or update a billing role assignment. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param enrollmentAccountName - The name of the enrollment account.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccountInput,
    outputSchema: BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccountOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsDeleteByBillingAccountInput {
  billingAccountName: string;
  billingRoleAssignmentName: string;
}
export const BillingRoleAssignmentsDeleteByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsDeleteByBillingAccountInput>;

// Output Schema
export type BillingRoleAssignmentsDeleteByBillingAccountOutput = void;
export const BillingRoleAssignmentsDeleteByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BillingRoleAssignmentsDeleteByBillingAccountOutput>;

// The operation
/**
 * Deletes a role assignment on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement, Microsoft Customer Agreement or Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsDeleteByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsDeleteByBillingAccountInput,
    outputSchema: BillingRoleAssignmentsDeleteByBillingAccountOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsDeleteByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  billingRoleAssignmentName: string;
}
export const BillingRoleAssignmentsDeleteByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsDeleteByBillingProfileInput>;

// Output Schema
export type BillingRoleAssignmentsDeleteByBillingProfileOutput = void;
export const BillingRoleAssignmentsDeleteByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BillingRoleAssignmentsDeleteByBillingProfileOutput>;

// The operation
/**
 * Deletes a role assignment on a billing profile. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsDeleteByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsDeleteByBillingProfileInput,
    outputSchema: BillingRoleAssignmentsDeleteByBillingProfileOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsDeleteByCustomerInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  billingRoleAssignmentName: string;
}
export const BillingRoleAssignmentsDeleteByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsDeleteByCustomerInput>;

// Output Schema
export type BillingRoleAssignmentsDeleteByCustomerOutput = void;
export const BillingRoleAssignmentsDeleteByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BillingRoleAssignmentsDeleteByCustomerOutput>;

// The operation
/**
 * Deletes a role assignment on a customer. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsDeleteByCustomer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsDeleteByCustomerInput,
    outputSchema: BillingRoleAssignmentsDeleteByCustomerOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsDeleteByDepartmentInput {
  billingAccountName: string;
  departmentName: string;
  billingRoleAssignmentName: string;
}
export const BillingRoleAssignmentsDeleteByDepartmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    departmentName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsDeleteByDepartmentInput>;

// Output Schema
export type BillingRoleAssignmentsDeleteByDepartmentOutput = void;
export const BillingRoleAssignmentsDeleteByDepartmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BillingRoleAssignmentsDeleteByDepartmentOutput>;

// The operation
/**
 * Deletes a role assignment on a department. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param departmentName - The name of the department.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsDeleteByDepartment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsDeleteByDepartmentInput,
    outputSchema: BillingRoleAssignmentsDeleteByDepartmentOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsDeleteByEnrollmentAccountInput {
  billingAccountName: string;
  enrollmentAccountName: string;
  billingRoleAssignmentName: string;
}
export const BillingRoleAssignmentsDeleteByEnrollmentAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    enrollmentAccountName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsDeleteByEnrollmentAccountInput>;

// Output Schema
export type BillingRoleAssignmentsDeleteByEnrollmentAccountOutput = void;
export const BillingRoleAssignmentsDeleteByEnrollmentAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BillingRoleAssignmentsDeleteByEnrollmentAccountOutput>;

// The operation
/**
 * Deletes a role assignment on a enrollment Account. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param enrollmentAccountName - The name of the enrollment account.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsDeleteByEnrollmentAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsDeleteByEnrollmentAccountInput,
    outputSchema: BillingRoleAssignmentsDeleteByEnrollmentAccountOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsDeleteByInvoiceSectionInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  billingRoleAssignmentName: string;
}
export const BillingRoleAssignmentsDeleteByInvoiceSectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsDeleteByInvoiceSectionInput>;

// Output Schema
export type BillingRoleAssignmentsDeleteByInvoiceSectionOutput = void;
export const BillingRoleAssignmentsDeleteByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BillingRoleAssignmentsDeleteByInvoiceSectionOutput>;

// The operation
/**
 * Deletes a role assignment on an invoice section. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsDeleteByInvoiceSection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsDeleteByInvoiceSectionInput,
    outputSchema: BillingRoleAssignmentsDeleteByInvoiceSectionOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsGetByBillingAccountInput {
  billingAccountName: string;
  billingRoleAssignmentName: string;
}
export const BillingRoleAssignmentsGetByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsGetByBillingAccountInput>;

// Output Schema
export interface BillingRoleAssignmentsGetByBillingAccountOutput {
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
export const BillingRoleAssignmentsGetByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsGetByBillingAccountOutput>;

// The operation
/**
 * Gets a role assignment for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement, Microsoft Customer Agreement or Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsGetByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsGetByBillingAccountInput,
    outputSchema: BillingRoleAssignmentsGetByBillingAccountOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsGetByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  billingRoleAssignmentName: string;
}
export const BillingRoleAssignmentsGetByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsGetByBillingProfileInput>;

// Output Schema
export interface BillingRoleAssignmentsGetByBillingProfileOutput {
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
export const BillingRoleAssignmentsGetByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsGetByBillingProfileOutput>;

// The operation
/**
 * Gets a role assignment for the caller on a billing profile. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsGetByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsGetByBillingProfileInput,
    outputSchema: BillingRoleAssignmentsGetByBillingProfileOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsGetByCustomerInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  billingRoleAssignmentName: string;
}
export const BillingRoleAssignmentsGetByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsGetByCustomerInput>;

// Output Schema
export interface BillingRoleAssignmentsGetByCustomerOutput {
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
export const BillingRoleAssignmentsGetByCustomerOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsGetByCustomerOutput>;

// The operation
/**
 * Gets a role assignment for the caller on a customer. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsGetByCustomer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsGetByCustomerInput,
    outputSchema: BillingRoleAssignmentsGetByCustomerOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsGetByDepartmentInput {
  billingAccountName: string;
  departmentName: string;
  billingRoleAssignmentName: string;
}
export const BillingRoleAssignmentsGetByDepartmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    departmentName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsGetByDepartmentInput>;

// Output Schema
export interface BillingRoleAssignmentsGetByDepartmentOutput {
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
export const BillingRoleAssignmentsGetByDepartmentOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsGetByDepartmentOutput>;

// The operation
/**
 * Gets a role assignment for the caller on a department. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param departmentName - The name of the department.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsGetByDepartment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsGetByDepartmentInput,
    outputSchema: BillingRoleAssignmentsGetByDepartmentOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsGetByEnrollmentAccountInput {
  billingAccountName: string;
  enrollmentAccountName: string;
  billingRoleAssignmentName: string;
}
export const BillingRoleAssignmentsGetByEnrollmentAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    enrollmentAccountName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsGetByEnrollmentAccountInput>;

// Output Schema
export interface BillingRoleAssignmentsGetByEnrollmentAccountOutput {
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
export const BillingRoleAssignmentsGetByEnrollmentAccountOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsGetByEnrollmentAccountOutput>;

// The operation
/**
 * Gets a role assignment for the caller on a enrollment Account. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param enrollmentAccountName - The name of the enrollment account.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsGetByEnrollmentAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsGetByEnrollmentAccountInput,
    outputSchema: BillingRoleAssignmentsGetByEnrollmentAccountOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsGetByInvoiceSectionInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  billingRoleAssignmentName: string;
}
export const BillingRoleAssignmentsGetByInvoiceSectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsGetByInvoiceSectionInput>;

// Output Schema
export interface BillingRoleAssignmentsGetByInvoiceSectionOutput {
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
export const BillingRoleAssignmentsGetByInvoiceSectionOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsGetByInvoiceSectionOutput>;

// The operation
/**
 * Gets a role assignment for the caller on an invoice section. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 * @param billingRoleAssignmentName - The ID that uniquely identifies a role assignment.
 */
export const BillingRoleAssignmentsGetByInvoiceSection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsGetByInvoiceSectionInput,
    outputSchema: BillingRoleAssignmentsGetByInvoiceSectionOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsListByBillingAccountInput {
  billingAccountName: string;
  filter?: string;
  top?: number;
  skip?: number;
}
export const BillingRoleAssignmentsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleAssignments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsListByBillingAccountInput>;

// Output Schema
export interface BillingRoleAssignmentsListByBillingAccountOutput {
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
export const BillingRoleAssignmentsListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsListByBillingAccountOutput>;

// The operation
/**
 * Lists the role assignments for the caller on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement, Microsoft Customer Agreement or Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 */
export const BillingRoleAssignmentsListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsListByBillingAccountInput,
    outputSchema: BillingRoleAssignmentsListByBillingAccountOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsListByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  filter?: string;
  top?: number;
  skip?: number;
}
export const BillingRoleAssignmentsListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleAssignments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsListByBillingProfileInput>;

// Output Schema
export interface BillingRoleAssignmentsListByBillingProfileOutput {
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
export const BillingRoleAssignmentsListByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsListByBillingProfileOutput>;

// The operation
/**
 * Lists the role assignments for the caller on a billing profile. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 */
export const BillingRoleAssignmentsListByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsListByBillingProfileInput,
    outputSchema: BillingRoleAssignmentsListByBillingProfileOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsListByCustomerInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  filter?: string;
  top?: number;
  skip?: number;
}
export const BillingRoleAssignmentsListByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/billingRoleAssignments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsListByCustomerInput>;

// Output Schema
export interface BillingRoleAssignmentsListByCustomerOutput {
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
export const BillingRoleAssignmentsListByCustomerOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsListByCustomerOutput>;

// The operation
/**
 * Lists the role assignments for the caller on customer. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 */
export const BillingRoleAssignmentsListByCustomer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsListByCustomerInput,
    outputSchema: BillingRoleAssignmentsListByCustomerOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsListByDepartmentInput {
  billingAccountName: string;
  departmentName: string;
}
export const BillingRoleAssignmentsListByDepartmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    departmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}/billingRoleAssignments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsListByDepartmentInput>;

// Output Schema
export interface BillingRoleAssignmentsListByDepartmentOutput {
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
export const BillingRoleAssignmentsListByDepartmentOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsListByDepartmentOutput>;

// The operation
/**
 * Lists the role assignments for the caller on a department. The operation is supported for billing accounts of type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param departmentName - The name of the department.
 */
export const BillingRoleAssignmentsListByDepartment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsListByDepartmentInput,
    outputSchema: BillingRoleAssignmentsListByDepartmentOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsListByEnrollmentAccountInput {
  billingAccountName: string;
  enrollmentAccountName: string;
}
export const BillingRoleAssignmentsListByEnrollmentAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    enrollmentAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}/billingRoleAssignments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsListByEnrollmentAccountInput>;

// Output Schema
export interface BillingRoleAssignmentsListByEnrollmentAccountOutput {
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
export const BillingRoleAssignmentsListByEnrollmentAccountOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsListByEnrollmentAccountOutput>;

// The operation
/**
 * Lists the role assignments for the caller on a enrollment account. The operation is supported for billing accounts of type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param enrollmentAccountName - The name of the enrollment account.
 */
export const BillingRoleAssignmentsListByEnrollmentAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsListByEnrollmentAccountInput,
    outputSchema: BillingRoleAssignmentsListByEnrollmentAccountOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsListByInvoiceSectionInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  filter?: string;
  top?: number;
  skip?: number;
}
export const BillingRoleAssignmentsListByInvoiceSectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleAssignments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsListByInvoiceSectionInput>;

// Output Schema
export interface BillingRoleAssignmentsListByInvoiceSectionOutput {
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
export const BillingRoleAssignmentsListByInvoiceSectionOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsListByInvoiceSectionOutput>;

// The operation
/**
 * Lists the role assignments for the caller on an invoice section. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 */
export const BillingRoleAssignmentsListByInvoiceSection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsListByInvoiceSectionInput,
    outputSchema: BillingRoleAssignmentsListByInvoiceSectionOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsResolveByBillingAccountInput {
  billingAccountName: string;
  resolveScopeDisplayNames?: boolean;
  filter?: string;
}
export const BillingRoleAssignmentsResolveByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    resolveScopeDisplayNames: Schema.optional(Schema.Boolean),
    filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/resolveBillingRoleAssignments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsResolveByBillingAccountInput>;

// Output Schema
export interface BillingRoleAssignmentsResolveByBillingAccountOutput {
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
export const BillingRoleAssignmentsResolveByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsResolveByBillingAccountOutput>;

// The operation
/**
 * Lists the role assignments for the caller on a billing account while fetching user info for each role assignment. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement, Microsoft Customer Agreement or Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param resolveScopeDisplayNames - Resolves the scope display name for each of the role assignments.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 */
export const BillingRoleAssignmentsResolveByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsResolveByBillingAccountInput,
    outputSchema: BillingRoleAssignmentsResolveByBillingAccountOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsResolveByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  resolveScopeDisplayNames?: boolean;
  filter?: string;
}
export const BillingRoleAssignmentsResolveByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    resolveScopeDisplayNames: Schema.optional(Schema.Boolean),
    filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/resolveBillingRoleAssignments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsResolveByBillingProfileInput>;

// Output Schema
export interface BillingRoleAssignmentsResolveByBillingProfileOutput {
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
export const BillingRoleAssignmentsResolveByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsResolveByBillingProfileOutput>;

// The operation
/**
 * Lists the role assignments for the caller on an billing profile while fetching user info for each role assignment. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param resolveScopeDisplayNames - Resolves the scope display name for each of the role assignments.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 */
export const BillingRoleAssignmentsResolveByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsResolveByBillingProfileInput,
    outputSchema: BillingRoleAssignmentsResolveByBillingProfileOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsResolveByCustomerInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  resolveScopeDisplayNames?: boolean;
  filter?: string;
}
export const BillingRoleAssignmentsResolveByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    resolveScopeDisplayNames: Schema.optional(Schema.Boolean),
    filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/resolveBillingRoleAssignments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsResolveByCustomerInput>;

// Output Schema
export interface BillingRoleAssignmentsResolveByCustomerOutput {
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
export const BillingRoleAssignmentsResolveByCustomerOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsResolveByCustomerOutput>;

// The operation
/**
 * Lists the role assignments for the caller on a customer while fetching user info for each role assignment. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 * @param resolveScopeDisplayNames - Resolves the scope display name for each of the role assignments.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 */
export const BillingRoleAssignmentsResolveByCustomer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsResolveByCustomerInput,
    outputSchema: BillingRoleAssignmentsResolveByCustomerOutput,
  }));
// Input Schema
export interface BillingRoleAssignmentsResolveByInvoiceSectionInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  resolveScopeDisplayNames?: boolean;
  filter?: string;
}
export const BillingRoleAssignmentsResolveByInvoiceSectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    resolveScopeDisplayNames: Schema.optional(Schema.Boolean),
    filter: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/resolveBillingRoleAssignments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleAssignmentsResolveByInvoiceSectionInput>;

// Output Schema
export interface BillingRoleAssignmentsResolveByInvoiceSectionOutput {
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
export const BillingRoleAssignmentsResolveByInvoiceSectionOutput =
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
  }) as unknown as Schema.Codec<BillingRoleAssignmentsResolveByInvoiceSectionOutput>;

// The operation
/**
 * Lists the role assignments for the caller on an invoice section while fetching user info for each role assignment. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 * @param resolveScopeDisplayNames - Resolves the scope display name for each of the role assignments.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 */
export const BillingRoleAssignmentsResolveByInvoiceSection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleAssignmentsResolveByInvoiceSectionInput,
    outputSchema: BillingRoleAssignmentsResolveByInvoiceSectionOutput,
  }));
// Input Schema
export interface BillingRoleDefinitionGetByBillingAccountInput {
  billingAccountName: string;
  roleDefinitionName: string;
}
export const BillingRoleDefinitionGetByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleDefinitions/{roleDefinitionName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleDefinitionGetByBillingAccountInput>;

// Output Schema
export interface BillingRoleDefinitionGetByBillingAccountOutput {
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
export const BillingRoleDefinitionGetByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<BillingRoleDefinitionGetByBillingAccountOutput>;

// The operation
/**
 * Gets the definition for a role on a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement, Microsoft Customer Agreement or Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param roleDefinitionName - The ID that uniquely identifies a role definition.
 */
export const BillingRoleDefinitionGetByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleDefinitionGetByBillingAccountInput,
    outputSchema: BillingRoleDefinitionGetByBillingAccountOutput,
  }));
// Input Schema
export interface BillingRoleDefinitionGetByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  roleDefinitionName: string;
}
export const BillingRoleDefinitionGetByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    roleDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleDefinitions/{roleDefinitionName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleDefinitionGetByBillingProfileInput>;

// Output Schema
export interface BillingRoleDefinitionGetByBillingProfileOutput {
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
export const BillingRoleDefinitionGetByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<BillingRoleDefinitionGetByBillingProfileOutput>;

// The operation
/**
 * Gets the definition for a role on a billing profile. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param roleDefinitionName - The ID that uniquely identifies a role definition.
 */
export const BillingRoleDefinitionGetByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleDefinitionGetByBillingProfileInput,
    outputSchema: BillingRoleDefinitionGetByBillingProfileOutput,
  }));
// Input Schema
export interface BillingRoleDefinitionGetByCustomerInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  roleDefinitionName: string;
}
export const BillingRoleDefinitionGetByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    roleDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/billingRoleDefinitions/{roleDefinitionName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleDefinitionGetByCustomerInput>;

// Output Schema
export interface BillingRoleDefinitionGetByCustomerOutput {
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
export const BillingRoleDefinitionGetByCustomerOutput =
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
  }) as unknown as Schema.Codec<BillingRoleDefinitionGetByCustomerOutput>;

// The operation
/**
 * Gets the definition for a role on a customer. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 * @param roleDefinitionName - The ID that uniquely identifies a role definition.
 */
export const BillingRoleDefinitionGetByCustomer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleDefinitionGetByCustomerInput,
    outputSchema: BillingRoleDefinitionGetByCustomerOutput,
  }));
// Input Schema
export interface BillingRoleDefinitionGetByDepartmentInput {
  billingAccountName: string;
  departmentName: string;
  roleDefinitionName: string;
}
export const BillingRoleDefinitionGetByDepartmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    departmentName: Schema.String.pipe(T.PathParam()),
    roleDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}/billingRoleDefinitions/{roleDefinitionName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleDefinitionGetByDepartmentInput>;

// Output Schema
export interface BillingRoleDefinitionGetByDepartmentOutput {
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
export const BillingRoleDefinitionGetByDepartmentOutput =
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
  }) as unknown as Schema.Codec<BillingRoleDefinitionGetByDepartmentOutput>;

// The operation
/**
 * Gets the definition for a role on a department. The operation is supported for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param departmentName - The name of the department.
 * @param roleDefinitionName - The ID that uniquely identifies a role definition.
 */
export const BillingRoleDefinitionGetByDepartment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleDefinitionGetByDepartmentInput,
    outputSchema: BillingRoleDefinitionGetByDepartmentOutput,
  }));
// Input Schema
export interface BillingRoleDefinitionGetByEnrollmentAccountInput {
  billingAccountName: string;
  enrollmentAccountName: string;
  roleDefinitionName: string;
}
export const BillingRoleDefinitionGetByEnrollmentAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    enrollmentAccountName: Schema.String.pipe(T.PathParam()),
    roleDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}/billingRoleDefinitions/{roleDefinitionName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleDefinitionGetByEnrollmentAccountInput>;

// Output Schema
export interface BillingRoleDefinitionGetByEnrollmentAccountOutput {
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
export const BillingRoleDefinitionGetByEnrollmentAccountOutput =
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
  }) as unknown as Schema.Codec<BillingRoleDefinitionGetByEnrollmentAccountOutput>;

// The operation
/**
 * Gets the definition for a role on an enrollment account. The operation is supported for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param enrollmentAccountName - The name of the enrollment account.
 * @param roleDefinitionName - The ID that uniquely identifies a role definition.
 */
export const BillingRoleDefinitionGetByEnrollmentAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleDefinitionGetByEnrollmentAccountInput,
    outputSchema: BillingRoleDefinitionGetByEnrollmentAccountOutput,
  }));
// Input Schema
export interface BillingRoleDefinitionGetByInvoiceSectionInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  roleDefinitionName: string;
}
export const BillingRoleDefinitionGetByInvoiceSectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    roleDefinitionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleDefinitions/{roleDefinitionName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleDefinitionGetByInvoiceSectionInput>;

// Output Schema
export interface BillingRoleDefinitionGetByInvoiceSectionOutput {
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
export const BillingRoleDefinitionGetByInvoiceSectionOutput =
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
  }) as unknown as Schema.Codec<BillingRoleDefinitionGetByInvoiceSectionOutput>;

// The operation
/**
 * Gets the definition for a role on an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 * @param roleDefinitionName - The ID that uniquely identifies a role definition.
 */
export const BillingRoleDefinitionGetByInvoiceSection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleDefinitionGetByInvoiceSectionInput,
    outputSchema: BillingRoleDefinitionGetByInvoiceSectionOutput,
  }));
// Input Schema
export interface BillingRoleDefinitionListByBillingAccountInput {
  billingAccountName: string;
}
export const BillingRoleDefinitionListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleDefinitions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleDefinitionListByBillingAccountInput>;

// Output Schema
export interface BillingRoleDefinitionListByBillingAccountOutput {
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
export const BillingRoleDefinitionListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<BillingRoleDefinitionListByBillingAccountOutput>;

// The operation
/**
 * Lists the role definitions for a billing account. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement, Microsoft Customer Agreement or Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const BillingRoleDefinitionListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleDefinitionListByBillingAccountInput,
    outputSchema: BillingRoleDefinitionListByBillingAccountOutput,
  }));
// Input Schema
export interface BillingRoleDefinitionListByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
}
export const BillingRoleDefinitionListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingRoleDefinitions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleDefinitionListByBillingProfileInput>;

// Output Schema
export interface BillingRoleDefinitionListByBillingProfileOutput {
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
export const BillingRoleDefinitionListByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<BillingRoleDefinitionListByBillingProfileOutput>;

// The operation
/**
 * Lists the role definitions for a billing profile. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement, Microsoft Customer Agreement or Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 */
export const BillingRoleDefinitionListByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleDefinitionListByBillingProfileInput,
    outputSchema: BillingRoleDefinitionListByBillingProfileOutput,
  }));
// Input Schema
export interface BillingRoleDefinitionListByCustomerInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
}
export const BillingRoleDefinitionListByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/billingRoleDefinitions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleDefinitionListByCustomerInput>;

// Output Schema
export interface BillingRoleDefinitionListByCustomerOutput {
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
export const BillingRoleDefinitionListByCustomerOutput =
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
  }) as unknown as Schema.Codec<BillingRoleDefinitionListByCustomerOutput>;

// The operation
/**
 * Lists the role definitions for a customer. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 */
export const BillingRoleDefinitionListByCustomer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleDefinitionListByCustomerInput,
    outputSchema: BillingRoleDefinitionListByCustomerOutput,
  }));
// Input Schema
export interface BillingRoleDefinitionListByDepartmentInput {
  billingAccountName: string;
  departmentName: string;
}
export const BillingRoleDefinitionListByDepartmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    departmentName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}/billingRoleDefinitions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleDefinitionListByDepartmentInput>;

// Output Schema
export interface BillingRoleDefinitionListByDepartmentOutput {
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
export const BillingRoleDefinitionListByDepartmentOutput =
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
  }) as unknown as Schema.Codec<BillingRoleDefinitionListByDepartmentOutput>;

// The operation
/**
 * List the definition for a department. The operation is supported for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param departmentName - The name of the department.
 */
export const BillingRoleDefinitionListByDepartment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleDefinitionListByDepartmentInput,
    outputSchema: BillingRoleDefinitionListByDepartmentOutput,
  }));
// Input Schema
export interface BillingRoleDefinitionListByEnrollmentAccountInput {
  billingAccountName: string;
  enrollmentAccountName: string;
}
export const BillingRoleDefinitionListByEnrollmentAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    enrollmentAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}/billingRoleDefinitions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleDefinitionListByEnrollmentAccountInput>;

// Output Schema
export interface BillingRoleDefinitionListByEnrollmentAccountOutput {
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
export const BillingRoleDefinitionListByEnrollmentAccountOutput =
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
  }) as unknown as Schema.Codec<BillingRoleDefinitionListByEnrollmentAccountOutput>;

// The operation
/**
 * List the definition for an enrollment account. The operation is supported for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param enrollmentAccountName - The name of the enrollment account.
 */
export const BillingRoleDefinitionListByEnrollmentAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleDefinitionListByEnrollmentAccountInput,
    outputSchema: BillingRoleDefinitionListByEnrollmentAccountOutput,
  }));
// Input Schema
export interface BillingRoleDefinitionListByInvoiceSectionInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
}
export const BillingRoleDefinitionListByInvoiceSectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingRoleDefinitions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingRoleDefinitionListByInvoiceSectionInput>;

// Output Schema
export interface BillingRoleDefinitionListByInvoiceSectionOutput {
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
export const BillingRoleDefinitionListByInvoiceSectionOutput =
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
  }) as unknown as Schema.Codec<BillingRoleDefinitionListByInvoiceSectionOutput>;

// The operation
/**
 * Lists the role definitions for an invoice section. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 */
export const BillingRoleDefinitionListByInvoiceSection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingRoleDefinitionListByInvoiceSectionInput,
    outputSchema: BillingRoleDefinitionListByInvoiceSectionOutput,
  }));
// Input Schema
export interface BillingSubscriptionsAliasesCreateOrUpdateInput {
  billingAccountName: string;
  aliasName: string;
  properties?: {
    autoRenew?: "Off" | "On";
    beneficiaryTenantId?: string;
    beneficiary?: { tenantId?: string; objectId?: string };
    billingFrequency?: string;
    billingProfileId?: string;
    billingPolicies?: Record<string, string>;
    billingProfileDisplayName?: string;
    billingProfileName?: string;
    consumptionCostCenter?: string;
    customerId?: string;
    customerDisplayName?: string;
    customerName?: string;
    displayName?: string;
    enrollmentAccountId?: string;
    enrollmentAccountDisplayName?: string;
    enrollmentAccountSubscriptionDetails?: {
      enrollmentAccountStartDate?: string;
      subscriptionEnrollmentAccountStatus?:
        | "Active"
        | "Cancelled"
        | "Expired"
        | "Deleted"
        | "TransferredOut"
        | "Transferring"
        | "Inactive";
    };
    invoiceSectionId?: string;
    invoiceSectionDisplayName?: string;
    invoiceSectionName?: string;
    lastMonthCharges?: { currency?: string; value?: number };
    monthToDateCharges?: { currency?: string; value?: number };
    nextBillingCycleDetails?: { billingFrequency?: string };
    offerId?: string;
    productCategory?: string;
    productType?: string;
    productTypeId?: string;
    purchaseDate?: string;
    quantity?: number;
    reseller?: { resellerId?: string; description?: string };
    renewalTermDetails?: {
      billingFrequency?: string;
      productId?: string;
      productTypeId?: string;
      skuId?: string;
      termDuration?: string;
      quantity?: number;
      termEndDate?: string;
    };
    skuId?: string;
    skuDescription?: string;
    systemOverrides?: {
      cancellation?: "NotAllowed" | "Allowed";
      cancellationAllowedEndDate?: string;
    };
    resourceUri?: string;
    termDuration?: string;
    termStartDate?: string;
    termEndDate?: string;
    provisioningTenantId?: string;
    status?:
      | "Other"
      | "Unknown"
      | "Active"
      | "Disabled"
      | "Deleted"
      | "Warned"
      | "Expiring"
      | "Expired"
      | "AutoRenew"
      | "Cancelled"
      | "Suspended"
      | "Failed";
    operationStatus?: "Other" | "None" | "LockedForUpdate";
    provisioningState?:
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "New"
      | "Pending"
      | "Provisioning"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Creating"
      | "Created"
      | "Expired";
    subscriptionId?: string;
    suspensionReasons?: string[];
    suspensionReasonDetails?: {
      effectiveDate?: string;
      reason?:
        | "None"
        | "Cancelled"
        | "PastDue"
        | "SuspiciousActivity"
        | "Other"
        | "Transferred"
        | "PolicyViolation"
        | "SpendingLimitReached"
        | "Expired";
    }[];
  };
  tags?: Record<string, string>;
}
export const BillingSubscriptionsAliasesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    aliasName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        autoRenew: Schema.optional(Schema.Literals(["Off", "On"])),
        beneficiaryTenantId: Schema.optional(Schema.String),
        beneficiary: Schema.optional(
          Schema.Struct({
            tenantId: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.String),
          }),
        ),
        billingFrequency: Schema.optional(Schema.String),
        billingProfileId: Schema.optional(Schema.String),
        billingPolicies: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        billingProfileDisplayName: Schema.optional(Schema.String),
        billingProfileName: Schema.optional(Schema.String),
        consumptionCostCenter: Schema.optional(Schema.String),
        customerId: Schema.optional(Schema.String),
        customerDisplayName: Schema.optional(Schema.String),
        customerName: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        enrollmentAccountId: Schema.optional(Schema.String),
        enrollmentAccountDisplayName: Schema.optional(Schema.String),
        enrollmentAccountSubscriptionDetails: Schema.optional(
          Schema.Struct({
            enrollmentAccountStartDate: Schema.optional(Schema.String),
            subscriptionEnrollmentAccountStatus: Schema.optional(
              Schema.Literals([
                "Active",
                "Cancelled",
                "Expired",
                "Deleted",
                "TransferredOut",
                "Transferring",
                "Inactive",
              ]),
            ),
          }),
        ),
        invoiceSectionId: Schema.optional(Schema.String),
        invoiceSectionDisplayName: Schema.optional(Schema.String),
        invoiceSectionName: Schema.optional(Schema.String),
        lastMonthCharges: Schema.optional(
          Schema.Struct({
            currency: Schema.optional(Schema.String),
            value: Schema.optional(Schema.Number),
          }),
        ),
        monthToDateCharges: Schema.optional(
          Schema.Struct({
            currency: Schema.optional(Schema.String),
            value: Schema.optional(Schema.Number),
          }),
        ),
        nextBillingCycleDetails: Schema.optional(
          Schema.Struct({
            billingFrequency: Schema.optional(Schema.String),
          }),
        ),
        offerId: Schema.optional(Schema.String),
        productCategory: Schema.optional(Schema.String),
        productType: Schema.optional(Schema.String),
        productTypeId: Schema.optional(Schema.String),
        purchaseDate: Schema.optional(Schema.String),
        quantity: Schema.optional(Schema.Number),
        reseller: Schema.optional(
          Schema.Struct({
            resellerId: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        renewalTermDetails: Schema.optional(
          Schema.Struct({
            billingFrequency: Schema.optional(Schema.String),
            productId: Schema.optional(Schema.String),
            productTypeId: Schema.optional(Schema.String),
            skuId: Schema.optional(Schema.String),
            termDuration: Schema.optional(Schema.String),
            quantity: Schema.optional(Schema.Number),
            termEndDate: Schema.optional(Schema.String),
          }),
        ),
        skuId: Schema.optional(Schema.String),
        skuDescription: Schema.optional(Schema.String),
        systemOverrides: Schema.optional(
          Schema.Struct({
            cancellation: Schema.optional(
              Schema.Literals(["NotAllowed", "Allowed"]),
            ),
            cancellationAllowedEndDate: Schema.optional(Schema.String),
          }),
        ),
        resourceUri: Schema.optional(Schema.String),
        termDuration: Schema.optional(Schema.String),
        termStartDate: Schema.optional(Schema.String),
        termEndDate: Schema.optional(Schema.String),
        provisioningTenantId: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals([
            "Other",
            "Unknown",
            "Active",
            "Disabled",
            "Deleted",
            "Warned",
            "Expiring",
            "Expired",
            "AutoRenew",
            "Cancelled",
            "Suspended",
            "Failed",
          ]),
        ),
        operationStatus: Schema.optional(
          Schema.Literals(["Other", "None", "LockedForUpdate"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Canceled",
            "Failed",
            "New",
            "Pending",
            "Provisioning",
            "PendingBilling",
            "ConfirmedBilling",
            "Creating",
            "Created",
            "Expired",
          ]),
        ),
        subscriptionId: Schema.optional(Schema.String),
        suspensionReasons: Schema.optional(Schema.Array(Schema.String)),
        suspensionReasonDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              effectiveDate: Schema.optional(Schema.String),
              reason: Schema.optional(
                Schema.Literals([
                  "None",
                  "Cancelled",
                  "PastDue",
                  "SuspiciousActivity",
                  "Other",
                  "Transferred",
                  "PolicyViolation",
                  "SpendingLimitReached",
                  "Expired",
                ]),
              ),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptionAliases/{aliasName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsAliasesCreateOrUpdateInput>;

// Output Schema
export interface BillingSubscriptionsAliasesCreateOrUpdateOutput {
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
export const BillingSubscriptionsAliasesCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<BillingSubscriptionsAliasesCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates a billing subscription by its alias ID.  The operation is supported for seat based billing subscriptions.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param aliasName - The ID that uniquely identifies a subscription alias.
 */
export const BillingSubscriptionsAliasesCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingSubscriptionsAliasesCreateOrUpdateInput,
    outputSchema: BillingSubscriptionsAliasesCreateOrUpdateOutput,
  }));
// Input Schema
export interface BillingSubscriptionsAliasesGetInput {
  billingAccountName: string;
  aliasName: string;
}
export const BillingSubscriptionsAliasesGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    aliasName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptionAliases/{aliasName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsAliasesGetInput>;

// Output Schema
export interface BillingSubscriptionsAliasesGetOutput {
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
export const BillingSubscriptionsAliasesGetOutput =
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
  }) as unknown as Schema.Codec<BillingSubscriptionsAliasesGetOutput>;

// The operation
/**
 * Gets a subscription by its alias ID.  The operation is supported for seat based billing subscriptions.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param aliasName - The ID that uniquely identifies a subscription alias.
 */
export const BillingSubscriptionsAliasesGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingSubscriptionsAliasesGetInput,
    outputSchema: BillingSubscriptionsAliasesGetOutput,
  }));
// Input Schema
export interface BillingSubscriptionsAliasesListByBillingAccountInput {
  billingAccountName: string;
  includeDeleted?: boolean;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const BillingSubscriptionsAliasesListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    includeDeleted: Schema.optional(Schema.Boolean),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptionAliases",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsAliasesListByBillingAccountInput>;

// Output Schema
export interface BillingSubscriptionsAliasesListByBillingAccountOutput {
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
export const BillingSubscriptionsAliasesListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<BillingSubscriptionsAliasesListByBillingAccountOutput>;

// The operation
/**
 * Lists the subscription aliases for a billing account. The operation is supported for seat based billing subscriptions.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param includeDeleted - Can be used to get deleted billing subscriptions.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const BillingSubscriptionsAliasesListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingSubscriptionsAliasesListByBillingAccountInput,
    outputSchema: BillingSubscriptionsAliasesListByBillingAccountOutput,
  }));
// Input Schema
export interface BillingSubscriptionsCancelInput {
  billingAccountName: string;
  billingSubscriptionName: string;
  cancellationReason: "Other" | "Compromise" | "Dispute";
  customerId?: string;
}
export const BillingSubscriptionsCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingSubscriptionName: Schema.String.pipe(T.PathParam()),
    cancellationReason: Schema.Literals(["Other", "Compromise", "Dispute"]),
    customerId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}/cancel",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsCancelInput>;

// Output Schema
export type BillingSubscriptionsCancelOutput = void;
export const BillingSubscriptionsCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BillingSubscriptionsCancelOutput>;

// The operation
/**
 * Cancels a usage-based subscription. This operation is supported only for billing accounts of type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingSubscriptionName - The ID that uniquely identifies a subscription.
 */
export const BillingSubscriptionsCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingSubscriptionsCancelInput,
    outputSchema: BillingSubscriptionsCancelOutput,
  }),
);
// Input Schema
export interface BillingSubscriptionsDeleteInput {
  billingAccountName: string;
  billingSubscriptionName: string;
}
export const BillingSubscriptionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsDeleteInput>;

// Output Schema
export type BillingSubscriptionsDeleteOutput = void;
export const BillingSubscriptionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BillingSubscriptionsDeleteOutput>;

// The operation
/**
 * Cancels a billing subscription. This operation is supported only for billing accounts of type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingSubscriptionName - The ID that uniquely identifies a subscription.
 */
export const BillingSubscriptionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingSubscriptionsDeleteInput,
    outputSchema: BillingSubscriptionsDeleteOutput,
  }),
);
// Input Schema
export interface BillingSubscriptionsGetInput {
  billingAccountName: string;
  billingSubscriptionName: string;
  expand?: string;
}
export const BillingSubscriptionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingSubscriptionName: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsGetInput>;

// Output Schema
export interface BillingSubscriptionsGetOutput {
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
export const BillingSubscriptionsGetOutput =
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
  }) as unknown as Schema.Codec<BillingSubscriptionsGetOutput>;

// The operation
/**
 * Gets a subscription by its ID. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement,  Microsoft Partner Agreement, and Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingSubscriptionName - The ID that uniquely identifies a subscription.
 * @param expand - Can be used to expand `Reseller`, `ConsumptionCostCenter`, `LastMonthCharges` and `MonthToDateCharges`
 */
export const BillingSubscriptionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingSubscriptionsGetInput,
    outputSchema: BillingSubscriptionsGetOutput,
  }),
);
// Input Schema
export interface BillingSubscriptionsGetByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  billingSubscriptionName: string;
  expand?: string;
}
export const BillingSubscriptionsGetByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    billingSubscriptionName: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingSubscriptions/{billingSubscriptionName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsGetByBillingProfileInput>;

// Output Schema
export interface BillingSubscriptionsGetByBillingProfileOutput {
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
export const BillingSubscriptionsGetByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<BillingSubscriptionsGetByBillingProfileOutput>;

// The operation
/**
 * Gets a subscription by its billing profile and ID. The operation is supported for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param billingSubscriptionName - The ID that uniquely identifies a subscription.
 * @param expand - Can be used to expand `Reseller`, `ConsumptionCostCenter`, `LastMonthCharges` and `MonthToDateCharges`
 */
export const BillingSubscriptionsGetByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingSubscriptionsGetByBillingProfileInput,
    outputSchema: BillingSubscriptionsGetByBillingProfileOutput,
  }));
// Input Schema
export interface BillingSubscriptionsListByBillingAccountInput {
  billingAccountName: string;
  includeDeleted?: boolean;
  includeTenantSubscriptions?: boolean;
  includeFailed?: boolean;
  expand?: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const BillingSubscriptionsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    includeDeleted: Schema.optional(Schema.Boolean),
    includeTenantSubscriptions: Schema.optional(Schema.Boolean),
    includeFailed: Schema.optional(Schema.Boolean),
    expand: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsListByBillingAccountInput>;

// Output Schema
export interface BillingSubscriptionsListByBillingAccountOutput {
  nextLink?: string;
  totalCount?: number;
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
}
export const BillingSubscriptionsListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
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
  }) as unknown as Schema.Codec<BillingSubscriptionsListByBillingAccountOutput>;

// The operation
/**
 * Lists the subscriptions for a billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param includeDeleted - Can be used to get deleted billing subscriptions.
 * @param includeTenantSubscriptions - Can be used to get tenant-owned billing subscriptions. This field is only applies to Microsoft Online Services Program billing accounts.
 * @param includeFailed - Can be used to get failed billing subscriptions.
 * @param expand - Can be used to expand `Reseller`, `ConsumptionCostCenter`, `LastMonthCharges` and `MonthToDateCharges`
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const BillingSubscriptionsListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingSubscriptionsListByBillingAccountInput,
    outputSchema: BillingSubscriptionsListByBillingAccountOutput,
  }));
// Input Schema
export interface BillingSubscriptionsListByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  includeDeleted?: boolean;
  expand?: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const BillingSubscriptionsListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    includeDeleted: Schema.optional(Schema.Boolean),
    expand: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/billingSubscriptions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsListByBillingProfileInput>;

// Output Schema
export interface BillingSubscriptionsListByBillingProfileOutput {
  nextLink?: string;
  totalCount?: number;
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
}
export const BillingSubscriptionsListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
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
  }) as unknown as Schema.Codec<BillingSubscriptionsListByBillingProfileOutput>;

// The operation
/**
 * Lists the subscriptions that are billed to a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param includeDeleted - Can be used to get deleted billing subscriptions.
 * @param expand - Can be used to expand `Reseller`, `ConsumptionCostCenter`, `LastMonthCharges` and `MonthToDateCharges`
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const BillingSubscriptionsListByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingSubscriptionsListByBillingProfileInput,
    outputSchema: BillingSubscriptionsListByBillingProfileOutput,
  }));
// Input Schema
export interface BillingSubscriptionsListByCustomerInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  includeDeleted?: boolean;
  expand?: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const BillingSubscriptionsListByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    includeDeleted: Schema.optional(Schema.Boolean),
    expand: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/billingSubscriptions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsListByCustomerInput>;

// Output Schema
export interface BillingSubscriptionsListByCustomerOutput {
  nextLink?: string;
  totalCount?: number;
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
}
export const BillingSubscriptionsListByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
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
  }) as unknown as Schema.Codec<BillingSubscriptionsListByCustomerOutput>;

// The operation
/**
 * Lists the subscriptions for a customer. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 * @param includeDeleted - Can be used to get deleted billing subscriptions.
 * @param expand - Can be used to expand `Reseller`, `ConsumptionCostCenter`, `LastMonthCharges` and `MonthToDateCharges`
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const BillingSubscriptionsListByCustomer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingSubscriptionsListByCustomerInput,
    outputSchema: BillingSubscriptionsListByCustomerOutput,
  }));
// Input Schema
export interface BillingSubscriptionsListByCustomerAtBillingAccountInput {
  billingAccountName: string;
  customerName: string;
  includeDeleted?: boolean;
  expand?: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const BillingSubscriptionsListByCustomerAtBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    includeDeleted: Schema.optional(Schema.Boolean),
    expand: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/billingSubscriptions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsListByCustomerAtBillingAccountInput>;

// Output Schema
export interface BillingSubscriptionsListByCustomerAtBillingAccountOutput {
  nextLink?: string;
  totalCount?: number;
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
}
export const BillingSubscriptionsListByCustomerAtBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
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
  }) as unknown as Schema.Codec<BillingSubscriptionsListByCustomerAtBillingAccountOutput>;

// The operation
/**
 * Lists the subscriptions for a customer at billing account level. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param customerName - The ID that uniquely identifies a customer.
 * @param includeDeleted - Can be used to get deleted billing subscriptions.
 * @param expand - Can be used to expand `Reseller`, `ConsumptionCostCenter`, `LastMonthCharges` and `MonthToDateCharges`
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const BillingSubscriptionsListByCustomerAtBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingSubscriptionsListByCustomerAtBillingAccountInput,
    outputSchema: BillingSubscriptionsListByCustomerAtBillingAccountOutput,
  }));
// Input Schema
export interface BillingSubscriptionsListByEnrollmentAccountInput {
  billingAccountName: string;
  enrollmentAccountName: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const BillingSubscriptionsListByEnrollmentAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    enrollmentAccountName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}/billingSubscriptions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsListByEnrollmentAccountInput>;

// Output Schema
export interface BillingSubscriptionsListByEnrollmentAccountOutput {
  nextLink?: string;
  totalCount?: number;
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
}
export const BillingSubscriptionsListByEnrollmentAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
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
  }) as unknown as Schema.Codec<BillingSubscriptionsListByEnrollmentAccountOutput>;

// The operation
/**
 * Lists the subscriptions for an enrollment account. The operation is supported for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param enrollmentAccountName - The name of the enrollment account.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const BillingSubscriptionsListByEnrollmentAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingSubscriptionsListByEnrollmentAccountInput,
    outputSchema: BillingSubscriptionsListByEnrollmentAccountOutput,
  }));
// Input Schema
export interface BillingSubscriptionsListByInvoiceSectionInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  includeDeleted?: boolean;
  expand?: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const BillingSubscriptionsListByInvoiceSectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    includeDeleted: Schema.optional(Schema.Boolean),
    expand: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/billingSubscriptions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsListByInvoiceSectionInput>;

// Output Schema
export interface BillingSubscriptionsListByInvoiceSectionOutput {
  nextLink?: string;
  totalCount?: number;
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
}
export const BillingSubscriptionsListByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
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
  }) as unknown as Schema.Codec<BillingSubscriptionsListByInvoiceSectionOutput>;

// The operation
/**
 * Lists the subscriptions that are billed to an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 * @param includeDeleted - Can be used to get deleted billing subscriptions.
 * @param expand - Can be used to expand `Reseller`, `ConsumptionCostCenter`, `LastMonthCharges` and `MonthToDateCharges`
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const BillingSubscriptionsListByInvoiceSection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingSubscriptionsListByInvoiceSectionInput,
    outputSchema: BillingSubscriptionsListByInvoiceSectionOutput,
  }));
// Input Schema
export interface BillingSubscriptionsMergeInput {
  billingAccountName: string;
  billingSubscriptionName: string;
  targetBillingSubscriptionName?: string;
  quantity?: number;
}
export const BillingSubscriptionsMergeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingSubscriptionName: Schema.String.pipe(T.PathParam()),
    targetBillingSubscriptionName: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}/merge",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsMergeInput>;

// Output Schema
export interface BillingSubscriptionsMergeOutput {
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
export const BillingSubscriptionsMergeOutput =
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
  }) as unknown as Schema.Codec<BillingSubscriptionsMergeOutput>;

// The operation
/**
 * Merges the billing subscription provided in the request with a target billing subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingSubscriptionName - The ID that uniquely identifies a subscription.
 */
export const BillingSubscriptionsMerge = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingSubscriptionsMergeInput,
    outputSchema: BillingSubscriptionsMergeOutput,
  }),
);
// Input Schema
export interface BillingSubscriptionsMoveInput {
  billingAccountName: string;
  billingSubscriptionName: string;
  destinationInvoiceSectionId?: string;
  destinationEnrollmentAccountId?: string;
}
export const BillingSubscriptionsMoveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingSubscriptionName: Schema.String.pipe(T.PathParam()),
    destinationInvoiceSectionId: Schema.optional(Schema.String),
    destinationEnrollmentAccountId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}/move",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsMoveInput>;

// Output Schema
export interface BillingSubscriptionsMoveOutput {
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
export const BillingSubscriptionsMoveOutput =
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
  }) as unknown as Schema.Codec<BillingSubscriptionsMoveOutput>;

// The operation
/**
 * Moves charges for a subscription to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingSubscriptionName - The ID that uniquely identifies a subscription.
 */
export const BillingSubscriptionsMove = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingSubscriptionsMoveInput,
    outputSchema: BillingSubscriptionsMoveOutput,
  }),
);
// Input Schema
export interface BillingSubscriptionsSplitInput {
  billingAccountName: string;
  billingSubscriptionName: string;
  targetProductTypeId?: string;
  targetSkuId?: string;
  quantity?: number;
  termDuration?: string;
  billingFrequency?: string;
}
export const BillingSubscriptionsSplitInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingSubscriptionName: Schema.String.pipe(T.PathParam()),
    targetProductTypeId: Schema.optional(Schema.String),
    targetSkuId: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.Number),
    termDuration: Schema.optional(Schema.String),
    billingFrequency: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}/split",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsSplitInput>;

// Output Schema
export interface BillingSubscriptionsSplitOutput {
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
export const BillingSubscriptionsSplitOutput =
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
  }) as unknown as Schema.Codec<BillingSubscriptionsSplitOutput>;

// The operation
/**
 * Splits a subscription into a new subscription with quantity less than current subscription quantity and not equal to 0.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingSubscriptionName - The ID that uniquely identifies a subscription.
 */
export const BillingSubscriptionsSplit = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingSubscriptionsSplitInput,
    outputSchema: BillingSubscriptionsSplitOutput,
  }),
);
// Input Schema
export interface BillingSubscriptionsUpdateInput {
  billingAccountName: string;
  billingSubscriptionName: string;
  properties?: {
    autoRenew?: "Off" | "On";
    beneficiaryTenantId?: string;
    beneficiary?: { tenantId?: string; objectId?: string };
    billingFrequency?: string;
    billingProfileId?: string;
    billingPolicies?: Record<string, string>;
    billingProfileDisplayName?: string;
    billingProfileName?: string;
    consumptionCostCenter?: string;
    customerId?: string;
    customerDisplayName?: string;
    customerName?: string;
    displayName?: string;
    enrollmentAccountId?: string;
    enrollmentAccountDisplayName?: string;
    enrollmentAccountSubscriptionDetails?: {
      enrollmentAccountStartDate?: string;
      subscriptionEnrollmentAccountStatus?:
        | "Active"
        | "Cancelled"
        | "Expired"
        | "Deleted"
        | "TransferredOut"
        | "Transferring"
        | "Inactive";
    };
    invoiceSectionId?: string;
    invoiceSectionDisplayName?: string;
    invoiceSectionName?: string;
    lastMonthCharges?: { currency?: string; value?: number };
    monthToDateCharges?: { currency?: string; value?: number };
    nextBillingCycleDetails?: { billingFrequency?: string };
    offerId?: string;
    productCategory?: string;
    productType?: string;
    productTypeId?: string;
    purchaseDate?: string;
    quantity?: number;
    reseller?: { resellerId?: string; description?: string };
    renewalTermDetails?: {
      billingFrequency?: string;
      productId?: string;
      productTypeId?: string;
      skuId?: string;
      termDuration?: string;
      quantity?: number;
      termEndDate?: string;
    };
    skuId?: string;
    skuDescription?: string;
    systemOverrides?: {
      cancellation?: "NotAllowed" | "Allowed";
      cancellationAllowedEndDate?: string;
    };
    resourceUri?: string;
    termDuration?: string;
    termStartDate?: string;
    termEndDate?: string;
    provisioningTenantId?: string;
    status?:
      | "Other"
      | "Unknown"
      | "Active"
      | "Disabled"
      | "Deleted"
      | "Warned"
      | "Expiring"
      | "Expired"
      | "AutoRenew"
      | "Cancelled"
      | "Suspended"
      | "Failed";
    operationStatus?: "Other" | "None" | "LockedForUpdate";
    provisioningState?:
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "New"
      | "Pending"
      | "Provisioning"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Creating"
      | "Created"
      | "Expired";
    subscriptionId?: string;
    suspensionReasons?: string[];
    suspensionReasonDetails?: {
      effectiveDate?: string;
      reason?:
        | "None"
        | "Cancelled"
        | "PastDue"
        | "SuspiciousActivity"
        | "Other"
        | "Transferred"
        | "PolicyViolation"
        | "SpendingLimitReached"
        | "Expired";
    }[];
  };
  tags?: Record<string, string>;
}
export const BillingSubscriptionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingSubscriptionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        autoRenew: Schema.optional(Schema.Literals(["Off", "On"])),
        beneficiaryTenantId: Schema.optional(Schema.String),
        beneficiary: Schema.optional(
          Schema.Struct({
            tenantId: Schema.optional(Schema.String),
            objectId: Schema.optional(Schema.String),
          }),
        ),
        billingFrequency: Schema.optional(Schema.String),
        billingProfileId: Schema.optional(Schema.String),
        billingPolicies: Schema.optional(
          Schema.Record(Schema.String, Schema.String),
        ),
        billingProfileDisplayName: Schema.optional(Schema.String),
        billingProfileName: Schema.optional(Schema.String),
        consumptionCostCenter: Schema.optional(Schema.String),
        customerId: Schema.optional(Schema.String),
        customerDisplayName: Schema.optional(Schema.String),
        customerName: Schema.optional(Schema.String),
        displayName: Schema.optional(Schema.String),
        enrollmentAccountId: Schema.optional(Schema.String),
        enrollmentAccountDisplayName: Schema.optional(Schema.String),
        enrollmentAccountSubscriptionDetails: Schema.optional(
          Schema.Struct({
            enrollmentAccountStartDate: Schema.optional(Schema.String),
            subscriptionEnrollmentAccountStatus: Schema.optional(
              Schema.Literals([
                "Active",
                "Cancelled",
                "Expired",
                "Deleted",
                "TransferredOut",
                "Transferring",
                "Inactive",
              ]),
            ),
          }),
        ),
        invoiceSectionId: Schema.optional(Schema.String),
        invoiceSectionDisplayName: Schema.optional(Schema.String),
        invoiceSectionName: Schema.optional(Schema.String),
        lastMonthCharges: Schema.optional(
          Schema.Struct({
            currency: Schema.optional(Schema.String),
            value: Schema.optional(Schema.Number),
          }),
        ),
        monthToDateCharges: Schema.optional(
          Schema.Struct({
            currency: Schema.optional(Schema.String),
            value: Schema.optional(Schema.Number),
          }),
        ),
        nextBillingCycleDetails: Schema.optional(
          Schema.Struct({
            billingFrequency: Schema.optional(Schema.String),
          }),
        ),
        offerId: Schema.optional(Schema.String),
        productCategory: Schema.optional(Schema.String),
        productType: Schema.optional(Schema.String),
        productTypeId: Schema.optional(Schema.String),
        purchaseDate: Schema.optional(Schema.String),
        quantity: Schema.optional(Schema.Number),
        reseller: Schema.optional(
          Schema.Struct({
            resellerId: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
          }),
        ),
        renewalTermDetails: Schema.optional(
          Schema.Struct({
            billingFrequency: Schema.optional(Schema.String),
            productId: Schema.optional(Schema.String),
            productTypeId: Schema.optional(Schema.String),
            skuId: Schema.optional(Schema.String),
            termDuration: Schema.optional(Schema.String),
            quantity: Schema.optional(Schema.Number),
            termEndDate: Schema.optional(Schema.String),
          }),
        ),
        skuId: Schema.optional(Schema.String),
        skuDescription: Schema.optional(Schema.String),
        systemOverrides: Schema.optional(
          Schema.Struct({
            cancellation: Schema.optional(
              Schema.Literals(["NotAllowed", "Allowed"]),
            ),
            cancellationAllowedEndDate: Schema.optional(Schema.String),
          }),
        ),
        resourceUri: Schema.optional(Schema.String),
        termDuration: Schema.optional(Schema.String),
        termStartDate: Schema.optional(Schema.String),
        termEndDate: Schema.optional(Schema.String),
        provisioningTenantId: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals([
            "Other",
            "Unknown",
            "Active",
            "Disabled",
            "Deleted",
            "Warned",
            "Expiring",
            "Expired",
            "AutoRenew",
            "Cancelled",
            "Suspended",
            "Failed",
          ]),
        ),
        operationStatus: Schema.optional(
          Schema.Literals(["Other", "None", "LockedForUpdate"]),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Canceled",
            "Failed",
            "New",
            "Pending",
            "Provisioning",
            "PendingBilling",
            "ConfirmedBilling",
            "Creating",
            "Created",
            "Expired",
          ]),
        ),
        subscriptionId: Schema.optional(Schema.String),
        suspensionReasons: Schema.optional(Schema.Array(Schema.String)),
        suspensionReasonDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              effectiveDate: Schema.optional(Schema.String),
              reason: Schema.optional(
                Schema.Literals([
                  "None",
                  "Cancelled",
                  "PastDue",
                  "SuspiciousActivity",
                  "Other",
                  "Transferred",
                  "PolicyViolation",
                  "SpendingLimitReached",
                  "Expired",
                ]),
              ),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsUpdateInput>;

// Output Schema
export interface BillingSubscriptionsUpdateOutput {
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
export const BillingSubscriptionsUpdateOutput =
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
  }) as unknown as Schema.Codec<BillingSubscriptionsUpdateOutput>;

// The operation
/**
 * Updates the properties of a billing subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingSubscriptionName - The ID that uniquely identifies a subscription.
 */
export const BillingSubscriptionsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BillingSubscriptionsUpdateInput,
    outputSchema: BillingSubscriptionsUpdateOutput,
  }),
);
// Input Schema
export interface BillingSubscriptionsValidateMoveEligibilityInput {
  billingAccountName: string;
  billingSubscriptionName: string;
  destinationInvoiceSectionId?: string;
  destinationEnrollmentAccountId?: string;
}
export const BillingSubscriptionsValidateMoveEligibilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingSubscriptionName: Schema.String.pipe(T.PathParam()),
    destinationInvoiceSectionId: Schema.optional(Schema.String),
    destinationEnrollmentAccountId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}/validateMoveEligibility",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<BillingSubscriptionsValidateMoveEligibilityInput>;

// Output Schema
export interface BillingSubscriptionsValidateMoveEligibilityOutput {
  isMoveEligible?: boolean;
  errorDetails?: {
    code?:
      | "Other"
      | "BillingAccountInactive"
      | "DestinationBillingProfileInactive"
      | "DestinationBillingProfileNotFound"
      | "DestinationBillingProfilePastDue"
      | "DestinationInvoiceSectionInactive"
      | "DestinationInvoiceSectionNotFound"
      | "InsufficientPermissionOnDestination"
      | "InsufficientPermissionOnSource"
      | "InvalidDestination"
      | "InvalidSource"
      | "MarketplaceNotEnabledOnDestination"
      | "ProductInactive"
      | "ProductNotFound"
      | "ProductTypeNotSupported"
      | "SourceBillingProfilePastDue"
      | "SourceInvoiceSectionInactive"
      | "AccountIsLocked"
      | "AssetHasCap"
      | "AssetNotActive"
      | "BillingProfilePastDue"
      | "CrossBillingAccountNotAllowed"
      | "NoActiveAzurePlan"
      | "None"
      | "SubscriptionNotActive"
      | "SubscriptionHasReservations"
      | "SubscriptionTypeNotSupported"
      | "InvoiceSectionIsRestricted";
    message?: string;
    details?: string;
  };
}
export const BillingSubscriptionsValidateMoveEligibilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isMoveEligible: Schema.optional(Schema.Boolean),
    errorDetails: Schema.optional(
      Schema.Struct({
        code: Schema.optional(
          Schema.Literals([
            "Other",
            "BillingAccountInactive",
            "DestinationBillingProfileInactive",
            "DestinationBillingProfileNotFound",
            "DestinationBillingProfilePastDue",
            "DestinationInvoiceSectionInactive",
            "DestinationInvoiceSectionNotFound",
            "InsufficientPermissionOnDestination",
            "InsufficientPermissionOnSource",
            "InvalidDestination",
            "InvalidSource",
            "MarketplaceNotEnabledOnDestination",
            "ProductInactive",
            "ProductNotFound",
            "ProductTypeNotSupported",
            "SourceBillingProfilePastDue",
            "SourceInvoiceSectionInactive",
            "AccountIsLocked",
            "AssetHasCap",
            "AssetNotActive",
            "BillingProfilePastDue",
            "CrossBillingAccountNotAllowed",
            "NoActiveAzurePlan",
            "None",
            "SubscriptionNotActive",
            "SubscriptionHasReservations",
            "SubscriptionTypeNotSupported",
            "InvoiceSectionIsRestricted",
          ]),
        ),
        message: Schema.optional(Schema.String),
        details: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<BillingSubscriptionsValidateMoveEligibilityOutput>;

// The operation
/**
 * Validates if charges for a subscription can be moved to a new invoice section. This operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingSubscriptionName - The ID that uniquely identifies a subscription.
 */
export const BillingSubscriptionsValidateMoveEligibility =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BillingSubscriptionsValidateMoveEligibilityInput,
    outputSchema: BillingSubscriptionsValidateMoveEligibilityOutput,
  }));
// Input Schema
export interface CustomersGetInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
}
export const CustomersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  billingProfileName: Schema.String.pipe(T.PathParam()),
  customerName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<CustomersGetInput>;

// Output Schema
export interface CustomersGetOutput {
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
export const CustomersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<CustomersGetOutput>;

// The operation
/**
 * Gets a customer by its ID. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 */
export const CustomersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomersGetInput,
  outputSchema: CustomersGetOutput,
}));
// Input Schema
export interface CustomersGetByBillingAccountInput {
  billingAccountName: string;
  customerName: string;
}
export const CustomersGetByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CustomersGetByBillingAccountInput>;

// Output Schema
export interface CustomersGetByBillingAccountOutput {
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
export const CustomersGetByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<CustomersGetByBillingAccountOutput>;

// The operation
/**
 * Gets a customer by its ID at billing account level. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param customerName - The ID that uniquely identifies a customer.
 */
export const CustomersGetByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomersGetByBillingAccountInput,
    outputSchema: CustomersGetByBillingAccountOutput,
  }));
// Input Schema
export interface CustomersListByBillingAccountInput {
  billingAccountName: string;
  expand?: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const CustomersListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CustomersListByBillingAccountInput>;

// Output Schema
export interface CustomersListByBillingAccountOutput {
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
export const CustomersListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<CustomersListByBillingAccountOutput>;

// The operation
/**
 * Lists the customers that are billed to a billing account. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param expand - May be used to expand enabledAzurePlans and resellers
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const CustomersListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomersListByBillingAccountInput,
    outputSchema: CustomersListByBillingAccountOutput,
  }));
// Input Schema
export interface CustomersListByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  expand?: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const CustomersListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<CustomersListByBillingProfileInput>;

// Output Schema
export interface CustomersListByBillingProfileOutput {
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
export const CustomersListByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<CustomersListByBillingProfileOutput>;

// The operation
/**
 * Lists the customers that are billed to a billing profile. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param expand - May be used to expand enabledAzurePlans and resellers
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const CustomersListByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomersListByBillingProfileInput,
    outputSchema: CustomersListByBillingProfileOutput,
  }));
// Input Schema
export interface DepartmentsGetInput {
  billingAccountName: string;
  departmentName: string;
}
export const DepartmentsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  departmentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<DepartmentsGetInput>;

// Output Schema
export interface DepartmentsGetOutput {
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
export const DepartmentsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<DepartmentsGetOutput>;

// The operation
/**
 * Gets a department by ID. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param departmentName - The name of the department.
 */
export const DepartmentsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DepartmentsGetInput,
  outputSchema: DepartmentsGetOutput,
}));
// Input Schema
export interface DepartmentsListByBillingAccountInput {
  billingAccountName: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  search?: string;
}
export const DepartmentsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<DepartmentsListByBillingAccountInput>;

// Output Schema
export interface DepartmentsListByBillingAccountOutput {
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
export const DepartmentsListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<DepartmentsListByBillingAccountOutput>;

// The operation
/**
 * Lists the departments that a user has access to. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const DepartmentsListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DepartmentsListByBillingAccountInput,
    outputSchema: DepartmentsListByBillingAccountOutput,
  }));
// Input Schema
export interface EnrollmentAccountsGetInput {
  billingAccountName: string;
  enrollmentAccountName: string;
}
export const EnrollmentAccountsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    enrollmentAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<EnrollmentAccountsGetInput>;

// Output Schema
export interface EnrollmentAccountsGetOutput {
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
export const EnrollmentAccountsGetOutput =
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
  }) as unknown as Schema.Codec<EnrollmentAccountsGetOutput>;

// The operation
/**
 * Gets an enrollment account by ID. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param enrollmentAccountName - The name of the enrollment account.
 */
export const EnrollmentAccountsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EnrollmentAccountsGetInput,
    outputSchema: EnrollmentAccountsGetOutput,
  }),
);
// Input Schema
export interface EnrollmentAccountsGetByDepartmentInput {
  billingAccountName: string;
  departmentName: string;
  enrollmentAccountName: string;
}
export const EnrollmentAccountsGetByDepartmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    departmentName: Schema.String.pipe(T.PathParam()),
    enrollmentAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}/enrollmentAccounts/{enrollmentAccountName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<EnrollmentAccountsGetByDepartmentInput>;

// Output Schema
export interface EnrollmentAccountsGetByDepartmentOutput {
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
export const EnrollmentAccountsGetByDepartmentOutput =
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
  }) as unknown as Schema.Codec<EnrollmentAccountsGetByDepartmentOutput>;

// The operation
/**
 * Gets an enrollment account by department. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param departmentName - The name of the department.
 * @param enrollmentAccountName - The name of the enrollment account.
 */
export const EnrollmentAccountsGetByDepartment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnrollmentAccountsGetByDepartmentInput,
    outputSchema: EnrollmentAccountsGetByDepartmentOutput,
  }));
// Input Schema
export interface EnrollmentAccountsListByBillingAccountInput {
  billingAccountName: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const EnrollmentAccountsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<EnrollmentAccountsListByBillingAccountInput>;

// Output Schema
export interface EnrollmentAccountsListByBillingAccountOutput {
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
export const EnrollmentAccountsListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<EnrollmentAccountsListByBillingAccountOutput>;

// The operation
/**
 * Lists the enrollment accounts for a billing account. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const EnrollmentAccountsListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnrollmentAccountsListByBillingAccountInput,
    outputSchema: EnrollmentAccountsListByBillingAccountOutput,
  }));
// Input Schema
export interface EnrollmentAccountsListByDepartmentInput {
  billingAccountName: string;
  departmentName: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const EnrollmentAccountsListByDepartmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    departmentName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}/enrollmentAccounts",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<EnrollmentAccountsListByDepartmentInput>;

// Output Schema
export interface EnrollmentAccountsListByDepartmentOutput {
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
export const EnrollmentAccountsListByDepartmentOutput =
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
  }) as unknown as Schema.Codec<EnrollmentAccountsListByDepartmentOutput>;

// The operation
/**
 * Lists the enrollment accounts for a department. The operation is supported only for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param departmentName - The name of the department.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const EnrollmentAccountsListByDepartment =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnrollmentAccountsListByDepartmentInput,
    outputSchema: EnrollmentAccountsListByDepartmentOutput,
  }));
// Input Schema
export interface InvoicesAmendInput {
  billingAccountName: string;
  invoiceName: string;
}
export const InvoicesAmendInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  invoiceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices/{invoiceName}/amend",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<InvoicesAmendInput>;

// Output Schema
export type InvoicesAmendOutput = void;
export const InvoicesAmendOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<InvoicesAmendOutput>;

// The operation
/**
 * Regenerate an invoice by billing account name and invoice name. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param invoiceName - The ID that uniquely identifies an invoice.
 */
export const InvoicesAmend = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InvoicesAmendInput,
  outputSchema: InvoicesAmendOutput,
}));
// Input Schema
export interface InvoicesDownloadByBillingAccountInput {
  billingAccountName: string;
  invoiceName: string;
  documentName?: string;
}
export const InvoicesDownloadByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    invoiceName: Schema.String.pipe(T.PathParam()),
    documentName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices/{invoiceName}/download",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoicesDownloadByBillingAccountInput>;

// Output Schema
export interface InvoicesDownloadByBillingAccountOutput {
  expiryTime?: string;
  url?: string;
}
export const InvoicesDownloadByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<InvoicesDownloadByBillingAccountOutput>;

// The operation
/**
 * Gets a URL to download an invoice document. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement, Microsoft Customer Agreement or Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param invoiceName - The ID that uniquely identifies an invoice.
 * @param documentName - The ID that uniquely identifies an invoice document. This ID may be an identifier for an invoice PDF, a credit note, or a tax receipt.
 */
export const InvoicesDownloadByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InvoicesDownloadByBillingAccountInput,
    outputSchema: InvoicesDownloadByBillingAccountOutput,
  }));
// Input Schema
export interface InvoicesDownloadByBillingSubscriptionInput {
  subscriptionId: string;
  invoiceName: string;
  documentName?: string;
}
export const InvoicesDownloadByBillingSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    invoiceName: Schema.String.pipe(T.PathParam()),
    documentName: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/default/billingSubscriptions/{subscriptionId}/invoices/{invoiceName}/download",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoicesDownloadByBillingSubscriptionInput>;

// Output Schema
export interface InvoicesDownloadByBillingSubscriptionOutput {
  expiryTime?: string;
  url?: string;
}
export const InvoicesDownloadByBillingSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<InvoicesDownloadByBillingSubscriptionOutput>;

// The operation
/**
 * Gets a URL to download an invoice by billing subscription. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID that uniquely identifies a billing subscription.
 * @param invoiceName - The ID that uniquely identifies an invoice.
 * @param documentName - The ID that uniquely identifies an invoice document. This ID may be an identifier for an invoice PDF, a credit note, or a tax receipt.
 */
export const InvoicesDownloadByBillingSubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InvoicesDownloadByBillingSubscriptionInput,
    outputSchema: InvoicesDownloadByBillingSubscriptionOutput,
  }));
// Input Schema
export interface InvoicesDownloadDocumentsByBillingAccountInput {
  billingAccountName: string;
}
export const InvoicesDownloadDocumentsByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/downloadDocuments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoicesDownloadDocumentsByBillingAccountInput>;

// Output Schema
export interface InvoicesDownloadDocumentsByBillingAccountOutput {
  expiryTime?: string;
  url?: string;
}
export const InvoicesDownloadDocumentsByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<InvoicesDownloadDocumentsByBillingAccountOutput>;

// The operation
/**
 * Gets a URL to download multiple invoice documents (invoice pdf, tax receipts, credit notes) as a zip file. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const InvoicesDownloadDocumentsByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InvoicesDownloadDocumentsByBillingAccountInput,
    outputSchema: InvoicesDownloadDocumentsByBillingAccountOutput,
  }));
// Input Schema
export interface InvoicesDownloadDocumentsByBillingSubscriptionInput {
  subscriptionId: string;
}
export const InvoicesDownloadDocumentsByBillingSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/default/billingSubscriptions/{subscriptionId}/downloadDocuments",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoicesDownloadDocumentsByBillingSubscriptionInput>;

// Output Schema
export interface InvoicesDownloadDocumentsByBillingSubscriptionOutput {
  expiryTime?: string;
  url?: string;
}
export const InvoicesDownloadDocumentsByBillingSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<InvoicesDownloadDocumentsByBillingSubscriptionOutput>;

// The operation
/**
 * Gets a URL to download multiple invoice documents (invoice pdf, tax receipts, credit notes) as a zip file. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param subscriptionId - The ID that uniquely identifies a billing subscription.
 * @param api-version - The API version to use for this operation.
 */
export const InvoicesDownloadDocumentsByBillingSubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InvoicesDownloadDocumentsByBillingSubscriptionInput,
    outputSchema: InvoicesDownloadDocumentsByBillingSubscriptionOutput,
  }));
// Input Schema
export interface InvoicesDownloadSummaryByBillingAccountInput {
  billingAccountName: string;
  invoiceName: string;
}
export const InvoicesDownloadSummaryByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    invoiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices/{invoiceName}/downloadSummary",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoicesDownloadSummaryByBillingAccountInput>;

// Output Schema
export interface InvoicesDownloadSummaryByBillingAccountOutput {
  expiryTime?: string;
  url?: string;
}
export const InvoicesDownloadSummaryByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<InvoicesDownloadSummaryByBillingAccountOutput>;

// The operation
/**
 * Gets a URL to download the summary document for an invoice. The operation is supported for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param invoiceName - The ID that uniquely identifies an invoice.
 */
export const InvoicesDownloadSummaryByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InvoicesDownloadSummaryByBillingAccountInput,
    outputSchema: InvoicesDownloadSummaryByBillingAccountOutput,
  }));
// Input Schema
export interface InvoiceSectionsCreateOrUpdateInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "New"
      | "Pending"
      | "Provisioning"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Creating"
      | "Created"
      | "Expired";
    displayName?: string;
    state?:
      | "Other"
      | "Active"
      | "Deleted"
      | "Disabled"
      | "UnderReview"
      | "Warned"
      | "Restricted";
    reasonCode?:
      | "Other"
      | "PastDue"
      | "UnusualActivity"
      | "SpendingLimitReached"
      | "SpendingLimitExpired";
    systemId?: string;
    targetCloud?: string;
    tags?: Record<string, string>;
  };
  tags?: Record<string, string>;
}
export const InvoiceSectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Canceled",
            "Failed",
            "New",
            "Pending",
            "Provisioning",
            "PendingBilling",
            "ConfirmedBilling",
            "Creating",
            "Created",
            "Expired",
          ]),
        ),
        displayName: Schema.optional(Schema.String),
        state: Schema.optional(
          Schema.Literals([
            "Other",
            "Active",
            "Deleted",
            "Disabled",
            "UnderReview",
            "Warned",
            "Restricted",
          ]),
        ),
        reasonCode: Schema.optional(
          Schema.Literals([
            "Other",
            "PastDue",
            "UnusualActivity",
            "SpendingLimitReached",
            "SpendingLimitExpired",
          ]),
        ),
        systemId: Schema.optional(Schema.String),
        targetCloud: Schema.optional(Schema.String),
        tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoiceSectionsCreateOrUpdateInput>;

// Output Schema
export interface InvoiceSectionsCreateOrUpdateOutput {
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
export const InvoiceSectionsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<InvoiceSectionsCreateOrUpdateOutput>;

// The operation
/**
 * Creates or updates an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 */
export const InvoiceSectionsCreateOrUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InvoiceSectionsCreateOrUpdateInput,
    outputSchema: InvoiceSectionsCreateOrUpdateOutput,
  }));
// Input Schema
export interface InvoiceSectionsDeleteInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
}
export const InvoiceSectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoiceSectionsDeleteInput>;

// Output Schema
export type InvoiceSectionsDeleteOutput = void;
export const InvoiceSectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<InvoiceSectionsDeleteOutput>;

// The operation
/**
 * Deletes an invoice section. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 */
export const InvoiceSectionsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InvoiceSectionsDeleteInput,
    outputSchema: InvoiceSectionsDeleteOutput,
  }),
);
// Input Schema
export interface InvoiceSectionsGetInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
}
export const InvoiceSectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoiceSectionsGetInput>;

// Output Schema
export interface InvoiceSectionsGetOutput {
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
export const InvoiceSectionsGetOutput =
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
  }) as unknown as Schema.Codec<InvoiceSectionsGetOutput>;

// The operation
/**
 * Gets an invoice section by its ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 */
export const InvoiceSectionsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InvoiceSectionsGetInput,
  outputSchema: InvoiceSectionsGetOutput,
}));
// Input Schema
export interface InvoiceSectionsListByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  includeDeleted?: boolean;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const InvoiceSectionsListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    includeDeleted: Schema.optional(Schema.Boolean),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoiceSectionsListByBillingProfileInput>;

// Output Schema
export interface InvoiceSectionsListByBillingProfileOutput {
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
export const InvoiceSectionsListByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<InvoiceSectionsListByBillingProfileOutput>;

// The operation
/**
 * Lists the invoice sections that a user has access to. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param includeDeleted - Can be used to get deleted invoice sections.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const InvoiceSectionsListByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InvoiceSectionsListByBillingProfileInput,
    outputSchema: InvoiceSectionsListByBillingProfileOutput,
  }));
// Input Schema
export interface InvoiceSectionsValidateDeleteEligibilityInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
}
export const InvoiceSectionsValidateDeleteEligibilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/validateDeleteEligibility",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoiceSectionsValidateDeleteEligibilityInput>;

// Output Schema
export interface InvoiceSectionsValidateDeleteEligibilityOutput {
  eligibilityStatus?: "Allowed" | "NotAllowed";
  eligibilityDetails?: {
    code?:
      | "Other"
      | "LastInvoiceSection"
      | "ActiveAzurePlans"
      | "ReservedInstances"
      | "ActiveBillingSubscriptions";
    message?: string;
  }[];
}
export const InvoiceSectionsValidateDeleteEligibilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eligibilityStatus: Schema.optional(
      Schema.Literals(["Allowed", "NotAllowed"]),
    ),
    eligibilityDetails: Schema.optional(
      Schema.Array(
        Schema.Struct({
          code: Schema.optional(
            Schema.Literals([
              "Other",
              "LastInvoiceSection",
              "ActiveAzurePlans",
              "ReservedInstances",
              "ActiveBillingSubscriptions",
            ]),
          ),
          message: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<InvoiceSectionsValidateDeleteEligibilityOutput>;

// The operation
/**
 * Validates if the invoice section can be deleted. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 */
export const InvoiceSectionsValidateDeleteEligibility =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InvoiceSectionsValidateDeleteEligibilityInput,
    outputSchema: InvoiceSectionsValidateDeleteEligibilityOutput,
  }));
// Input Schema
export interface InvoicesGetInput {
  invoiceName: string;
}
export const InvoicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  invoiceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Billing/billingAccounts/default/invoices/{invoiceName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<InvoicesGetInput>;

// Output Schema
export interface InvoicesGetOutput {
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
export const InvoicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<InvoicesGetOutput>;

// The operation
/**
 * Gets an invoice by ID. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param invoiceName - The ID that uniquely identifies an invoice.
 */
export const InvoicesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InvoicesGetInput,
  outputSchema: InvoicesGetOutput,
}));
// Input Schema
export interface InvoicesGetByBillingAccountInput {
  billingAccountName: string;
  invoiceName: string;
}
export const InvoicesGetByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    invoiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices/{invoiceName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoicesGetByBillingAccountInput>;

// Output Schema
export interface InvoicesGetByBillingAccountOutput {
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
export const InvoicesGetByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<InvoicesGetByBillingAccountOutput>;

// The operation
/**
 * Gets an invoice by billing account name and ID. The operation is supported for all billing account types.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param invoiceName - The ID that uniquely identifies an invoice.
 */
export const InvoicesGetByBillingAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InvoicesGetByBillingAccountInput,
    outputSchema: InvoicesGetByBillingAccountOutput,
  }),
);
// Input Schema
export interface InvoicesGetByBillingSubscriptionInput {
  subscriptionId: string;
  invoiceName: string;
}
export const InvoicesGetByBillingSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    invoiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/default/billingSubscriptions/{subscriptionId}/invoices/{invoiceName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoicesGetByBillingSubscriptionInput>;

// Output Schema
export interface InvoicesGetByBillingSubscriptionOutput {
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
export const InvoicesGetByBillingSubscriptionOutput =
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
  }) as unknown as Schema.Codec<InvoicesGetByBillingSubscriptionOutput>;

// The operation
/**
 * Gets an invoice by subscription ID and invoice ID. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID that uniquely identifies a billing subscription.
 * @param invoiceName - The ID that uniquely identifies an invoice.
 */
export const InvoicesGetByBillingSubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InvoicesGetByBillingSubscriptionInput,
    outputSchema: InvoicesGetByBillingSubscriptionOutput,
  }));
// Input Schema
export interface InvoicesListByBillingAccountInput {
  billingAccountName: string;
  periodStartDate?: string;
  periodEndDate?: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const InvoicesListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    periodStartDate: Schema.optional(Schema.String),
    periodEndDate: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoicesListByBillingAccountInput>;

// Output Schema
export interface InvoicesListByBillingAccountOutput {
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
export const InvoicesListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<InvoicesListByBillingAccountOutput>;

// The operation
/**
 * Lists the invoices for a billing account for a given start date and end date. The operation is supported for all billing account types.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param periodStartDate - The start date of the billing period for which the invoice is generated. The date is in MM-DD-YYYY format.
 * @param periodEndDate - The end date of the billing period for which the invoice is generated. The date is in MM-DD-YYYY format.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const InvoicesListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InvoicesListByBillingAccountInput,
    outputSchema: InvoicesListByBillingAccountOutput,
  }));
// Input Schema
export interface InvoicesListByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  periodStartDate?: string;
  periodEndDate?: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const InvoicesListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    periodStartDate: Schema.optional(Schema.String),
    periodEndDate: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoices",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoicesListByBillingProfileInput>;

// Output Schema
export interface InvoicesListByBillingProfileOutput {
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
export const InvoicesListByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<InvoicesListByBillingProfileOutput>;

// The operation
/**
 * Lists the invoices for a billing profile for a given start date and end date. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param periodStartDate - The start date of the billing period for which the invoice is generated. The date is in MM-DD-YYYY format.
 * @param periodEndDate - The end date of the billing period for which the invoice is generated. The date is in MM-DD-YYYY format.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const InvoicesListByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InvoicesListByBillingProfileInput,
    outputSchema: InvoicesListByBillingProfileOutput,
  }));
// Input Schema
export interface InvoicesListByBillingSubscriptionInput {
  subscriptionId: string;
  periodStartDate?: string;
  periodEndDate?: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const InvoicesListByBillingSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    periodStartDate: Schema.optional(Schema.String),
    periodEndDate: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/default/billingSubscriptions/{subscriptionId}/invoices",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<InvoicesListByBillingSubscriptionInput>;

// Output Schema
export interface InvoicesListByBillingSubscriptionOutput {
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
export const InvoicesListByBillingSubscriptionOutput =
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
  }) as unknown as Schema.Codec<InvoicesListByBillingSubscriptionOutput>;

// The operation
/**
 * Lists the invoices for a subscription. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID that uniquely identifies a billing subscription.
 * @param periodStartDate - The start date of the billing period for which the invoice is generated. The date is in MM-DD-YYYY format.
 * @param periodEndDate - The end date of the billing period for which the invoice is generated. The date is in MM-DD-YYYY format.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const InvoicesListByBillingSubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InvoicesListByBillingSubscriptionInput,
    outputSchema: InvoicesListByBillingSubscriptionOutput,
  }));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Billing/operations",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value?: {
    name?: string;
    isDataAction?: boolean;
    display?: {
      description?: string;
      operation?: string;
      provider?: string;
      resource?: string;
    };
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
            description: Schema.optional(Schema.String),
            operation: Schema.optional(Schema.String),
            provider: Schema.optional(Schema.String),
            resource: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * List of operations supported by provider.
 *
 * @param api-version - The API version to use for this operation.
 */
export const OperationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface PartnerTransfersCancelInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  transferName: string;
}
export const PartnerTransfersCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    transferName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/transfers/{transferName}/cancel",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PartnerTransfersCancelInput>;

// Output Schema
export interface PartnerTransfersCancelOutput {
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
export const PartnerTransfersCancelOutput =
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
  }) as unknown as Schema.Codec<PartnerTransfersCancelOutput>;

// The operation
/**
 * Cancels a transfer request. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 * @param transferName - The ID that uniquely identifies a transfer request.
 */
export const PartnerTransfersCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerTransfersCancelInput,
    outputSchema: PartnerTransfersCancelOutput,
  }),
);
// Input Schema
export interface PartnerTransfersGetInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  transferName: string;
}
export const PartnerTransfersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    transferName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/transfers/{transferName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PartnerTransfersGetInput>;

// Output Schema
export interface PartnerTransfersGetOutput {
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
export const PartnerTransfersGetOutput =
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
  }) as unknown as Schema.Codec<PartnerTransfersGetOutput>;

// The operation
/**
 * Gets a transfer request by ID. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 * @param transferName - The ID that uniquely identifies a transfer request.
 */
export const PartnerTransfersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PartnerTransfersGetInput,
  outputSchema: PartnerTransfersGetOutput,
}));
// Input Schema
export interface PartnerTransfersInitiateInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  transferName: string;
  properties?: { recipientEmailId?: string; resellerId?: string };
}
export const PartnerTransfersInitiateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    transferName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        recipientEmailId: Schema.optional(Schema.String),
        resellerId: Schema.optional(Schema.String),
      }),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/transfers/{transferName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PartnerTransfersInitiateInput>;

// Output Schema
export interface PartnerTransfersInitiateOutput {
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
export const PartnerTransfersInitiateOutput =
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
  }) as unknown as Schema.Codec<PartnerTransfersInitiateOutput>;

// The operation
/**
 * Sends a request to a user in a customer's billing account to transfer billing ownership of their subscriptions. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 * @param transferName - The ID that uniquely identifies a transfer request.
 */
export const PartnerTransfersInitiate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerTransfersInitiateInput,
    outputSchema: PartnerTransfersInitiateOutput,
  }),
);
// Input Schema
export interface PartnerTransfersListInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
}
export const PartnerTransfersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/transfers",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PartnerTransfersListInput>;

// Output Schema
export interface PartnerTransfersListOutput {
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
export const PartnerTransfersListOutput =
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
  }) as unknown as Schema.Codec<PartnerTransfersListOutput>;

// The operation
/**
 * Lists the transfer requests sent to a customer. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 */
export const PartnerTransfersList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PartnerTransfersListInput,
    outputSchema: PartnerTransfersListOutput,
  }),
);
// Input Schema
export interface PaymentMethodsDeleteByUserInput {
  paymentMethodName: string;
}
export const PaymentMethodsDeleteByUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paymentMethodName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/paymentMethods/{paymentMethodName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PaymentMethodsDeleteByUserInput>;

// Output Schema
export type PaymentMethodsDeleteByUserOutput = void;
export const PaymentMethodsDeleteByUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<PaymentMethodsDeleteByUserOutput>;

// The operation
/**
 * Deletes a payment method owned by the caller.
 *
 * @param api-version - The API version to use for this operation.
 * @param paymentMethodName - The ID that uniquely identifies a payment method.
 */
export const PaymentMethodsDeleteByUser = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PaymentMethodsDeleteByUserInput,
    outputSchema: PaymentMethodsDeleteByUserOutput,
  }),
);
// Input Schema
export interface PaymentMethodsGetByBillingAccountInput {
  billingAccountName: string;
  paymentMethodName: string;
}
export const PaymentMethodsGetByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    paymentMethodName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/paymentMethods/{paymentMethodName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PaymentMethodsGetByBillingAccountInput>;

// Output Schema
export interface PaymentMethodsGetByBillingAccountOutput {
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
export const PaymentMethodsGetByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<PaymentMethodsGetByBillingAccountOutput>;

// The operation
/**
 * Gets a payment method available for a billing account. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param paymentMethodName - The ID that uniquely identifies a payment method.
 */
export const PaymentMethodsGetByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PaymentMethodsGetByBillingAccountInput,
    outputSchema: PaymentMethodsGetByBillingAccountOutput,
  }));
// Input Schema
export interface PaymentMethodsGetByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  paymentMethodName: string;
}
export const PaymentMethodsGetByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    paymentMethodName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/paymentMethodLinks/{paymentMethodName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PaymentMethodsGetByBillingProfileInput>;

// Output Schema
export interface PaymentMethodsGetByBillingProfileOutput {
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
export const PaymentMethodsGetByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<PaymentMethodsGetByBillingProfileOutput>;

// The operation
/**
 * Gets a payment method linked with a billing profile. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param paymentMethodName - The ID that uniquely identifies a payment method.
 */
export const PaymentMethodsGetByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PaymentMethodsGetByBillingProfileInput,
    outputSchema: PaymentMethodsGetByBillingProfileOutput,
  }));
// Input Schema
export interface PaymentMethodsGetByUserInput {
  paymentMethodName: string;
}
export const PaymentMethodsGetByUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paymentMethodName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/paymentMethods/{paymentMethodName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PaymentMethodsGetByUserInput>;

// Output Schema
export interface PaymentMethodsGetByUserOutput {
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
export const PaymentMethodsGetByUserOutput =
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
  }) as unknown as Schema.Codec<PaymentMethodsGetByUserOutput>;

// The operation
/**
 * Gets a payment method owned by the caller.
 *
 * @param api-version - The API version to use for this operation.
 * @param paymentMethodName - The ID that uniquely identifies a payment method.
 */
export const PaymentMethodsGetByUser = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PaymentMethodsGetByUserInput,
    outputSchema: PaymentMethodsGetByUserOutput,
  }),
);
// Input Schema
export interface PaymentMethodsListByBillingAccountInput {
  billingAccountName: string;
}
export const PaymentMethodsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/paymentMethods",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PaymentMethodsListByBillingAccountInput>;

// Output Schema
export interface PaymentMethodsListByBillingAccountOutput {
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
export const PaymentMethodsListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<PaymentMethodsListByBillingAccountOutput>;

// The operation
/**
 * Lists the payment methods available for a billing account. Along with the payment methods owned by the caller, these payment methods can be attached to a billing profile to make payments. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const PaymentMethodsListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PaymentMethodsListByBillingAccountInput,
    outputSchema: PaymentMethodsListByBillingAccountOutput,
  }));
// Input Schema
export interface PaymentMethodsListByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
}
export const PaymentMethodsListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/paymentMethodLinks",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PaymentMethodsListByBillingProfileInput>;

// Output Schema
export interface PaymentMethodsListByBillingProfileOutput {
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
export const PaymentMethodsListByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<PaymentMethodsListByBillingProfileOutput>;

// The operation
/**
 * Lists payment methods attached to a billing profile. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 */
export const PaymentMethodsListByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PaymentMethodsListByBillingProfileInput,
    outputSchema: PaymentMethodsListByBillingProfileOutput,
  }));
// Input Schema
export interface PaymentMethodsListByUserInput {}
export const PaymentMethodsListByUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/paymentMethods",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PaymentMethodsListByUserInput>;

// Output Schema
export interface PaymentMethodsListByUserOutput {
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
export const PaymentMethodsListByUserOutput =
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
  }) as unknown as Schema.Codec<PaymentMethodsListByUserOutput>;

// The operation
/**
 * Lists the payment methods owned by the caller.
 *
 * @param api-version - The API version to use for this operation.
 */
export const PaymentMethodsListByUser = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PaymentMethodsListByUserInput,
    outputSchema: PaymentMethodsListByUserOutput,
  }),
);
// Input Schema
export interface PoliciesCreateOrUpdateByBillingAccountInput {
  billingAccountName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "New"
      | "Pending"
      | "Provisioning"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Creating"
      | "Created"
      | "Expired";
    enterpriseAgreementPolicies?: {
      authenticationType?:
        | "Other"
        | "MicrosoftAccountOnly"
        | "MixedAccount"
        | "OrganizationalAccountCrossTenant"
        | "OrganizationalAccountOnly";
      accountOwnerViewCharges?: "Other" | "Allowed" | "Disabled" | "NotAllowed";
      departmentAdminViewCharges?:
        | "Other"
        | "Allowed"
        | "Disabled"
        | "NotAllowed";
    };
    marketplacePurchases?:
      | "Other"
      | "AllAllowed"
      | "Disabled"
      | "NotAllowed"
      | "OnlyFreeAllowed";
    reservationPurchases?: "Other" | "Allowed" | "Disabled" | "NotAllowed";
    savingsPlanPurchases?: "Other" | "Allowed" | "Disabled" | "NotAllowed";
    policies?: {
      name?: string;
      value?: string;
      policyType?: "Other" | "UserControlled" | "SystemControlled";
      scope?: string;
    }[];
  };
  tags?: Record<string, string>;
}
export const PoliciesCreateOrUpdateByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Canceled",
            "Failed",
            "New",
            "Pending",
            "Provisioning",
            "PendingBilling",
            "ConfirmedBilling",
            "Creating",
            "Created",
            "Expired",
          ]),
        ),
        enterpriseAgreementPolicies: Schema.optional(
          Schema.Struct({
            authenticationType: Schema.optional(
              Schema.Literals([
                "Other",
                "MicrosoftAccountOnly",
                "MixedAccount",
                "OrganizationalAccountCrossTenant",
                "OrganizationalAccountOnly",
              ]),
            ),
            accountOwnerViewCharges: Schema.optional(
              Schema.Literals(["Other", "Allowed", "Disabled", "NotAllowed"]),
            ),
            departmentAdminViewCharges: Schema.optional(
              Schema.Literals(["Other", "Allowed", "Disabled", "NotAllowed"]),
            ),
          }),
        ),
        marketplacePurchases: Schema.optional(
          Schema.Literals([
            "Other",
            "AllAllowed",
            "Disabled",
            "NotAllowed",
            "OnlyFreeAllowed",
          ]),
        ),
        reservationPurchases: Schema.optional(
          Schema.Literals(["Other", "Allowed", "Disabled", "NotAllowed"]),
        ),
        savingsPlanPurchases: Schema.optional(
          Schema.Literals(["Other", "Allowed", "Disabled", "NotAllowed"]),
        ),
        policies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
              policyType: Schema.optional(
                Schema.Literals([
                  "Other",
                  "UserControlled",
                  "SystemControlled",
                ]),
              ),
              scope: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/policies/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PoliciesCreateOrUpdateByBillingAccountInput>;

// Output Schema
export interface PoliciesCreateOrUpdateByBillingAccountOutput {
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
export const PoliciesCreateOrUpdateByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<PoliciesCreateOrUpdateByBillingAccountOutput>;

// The operation
/**
 * Update the policies for a billing account of Enterprise Agreement type.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const PoliciesCreateOrUpdateByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PoliciesCreateOrUpdateByBillingAccountInput,
    outputSchema: PoliciesCreateOrUpdateByBillingAccountOutput,
  }));
// Input Schema
export interface PoliciesCreateOrUpdateByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "New"
      | "Pending"
      | "Provisioning"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Creating"
      | "Created"
      | "Expired";
    enterpriseAgreementPolicies?: {
      authenticationType?:
        | "Other"
        | "MicrosoftAccountOnly"
        | "MixedAccount"
        | "OrganizationalAccountCrossTenant"
        | "OrganizationalAccountOnly";
      accountOwnerViewCharges?: "Other" | "Allowed" | "Disabled" | "NotAllowed";
      departmentAdminViewCharges?:
        | "Other"
        | "Allowed"
        | "Disabled"
        | "NotAllowed";
    };
    invoiceSectionLabelManagement?: "Other" | "Allowed" | "NotAllowed";
    marketplacePurchases?:
      | "Other"
      | "AllAllowed"
      | "Disabled"
      | "NotAllowed"
      | "OnlyFreeAllowed";
    reservationPurchases?: "Other" | "Allowed" | "Disabled" | "NotAllowed";
    savingsPlanPurchases?: "Other" | "Allowed" | "Disabled" | "NotAllowed";
    viewCharges?: "Other" | "Allowed" | "NotAllowed";
    policies?: {
      name?: string;
      value?: string;
      policyType?: "Other" | "UserControlled" | "SystemControlled";
      scope?: string;
    }[];
  };
  tags?: Record<string, string>;
}
export const PoliciesCreateOrUpdateByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Canceled",
            "Failed",
            "New",
            "Pending",
            "Provisioning",
            "PendingBilling",
            "ConfirmedBilling",
            "Creating",
            "Created",
            "Expired",
          ]),
        ),
        enterpriseAgreementPolicies: Schema.optional(
          Schema.Struct({
            authenticationType: Schema.optional(
              Schema.Literals([
                "Other",
                "MicrosoftAccountOnly",
                "MixedAccount",
                "OrganizationalAccountCrossTenant",
                "OrganizationalAccountOnly",
              ]),
            ),
            accountOwnerViewCharges: Schema.optional(
              Schema.Literals(["Other", "Allowed", "Disabled", "NotAllowed"]),
            ),
            departmentAdminViewCharges: Schema.optional(
              Schema.Literals(["Other", "Allowed", "Disabled", "NotAllowed"]),
            ),
          }),
        ),
        invoiceSectionLabelManagement: Schema.optional(
          Schema.Literals(["Other", "Allowed", "NotAllowed"]),
        ),
        marketplacePurchases: Schema.optional(
          Schema.Literals([
            "Other",
            "AllAllowed",
            "Disabled",
            "NotAllowed",
            "OnlyFreeAllowed",
          ]),
        ),
        reservationPurchases: Schema.optional(
          Schema.Literals(["Other", "Allowed", "Disabled", "NotAllowed"]),
        ),
        savingsPlanPurchases: Schema.optional(
          Schema.Literals(["Other", "Allowed", "Disabled", "NotAllowed"]),
        ),
        viewCharges: Schema.optional(
          Schema.Literals(["Other", "Allowed", "NotAllowed"]),
        ),
        policies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
              policyType: Schema.optional(
                Schema.Literals([
                  "Other",
                  "UserControlled",
                  "SystemControlled",
                ]),
              ),
              scope: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/policies/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PoliciesCreateOrUpdateByBillingProfileInput>;

// Output Schema
export interface PoliciesCreateOrUpdateByBillingProfileOutput {
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
export const PoliciesCreateOrUpdateByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<PoliciesCreateOrUpdateByBillingProfileOutput>;

// The operation
/**
 * Updates the policies for a billing profile. This operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 */
export const PoliciesCreateOrUpdateByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PoliciesCreateOrUpdateByBillingProfileInput,
    outputSchema: PoliciesCreateOrUpdateByBillingProfileOutput,
  }));
// Input Schema
export interface PoliciesCreateOrUpdateByCustomerInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "New"
      | "Pending"
      | "Provisioning"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Creating"
      | "Created"
      | "Expired";
    viewCharges: "Other" | "Allowed" | "NotAllowed";
    policies?: {
      name?: string;
      value?: string;
      policyType?: "Other" | "UserControlled" | "SystemControlled";
      scope?: string;
    }[];
  };
  tags?: Record<string, string>;
}
export const PoliciesCreateOrUpdateByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Canceled",
            "Failed",
            "New",
            "Pending",
            "Provisioning",
            "PendingBilling",
            "ConfirmedBilling",
            "Creating",
            "Created",
            "Expired",
          ]),
        ),
        viewCharges: Schema.Literals(["Other", "Allowed", "NotAllowed"]),
        policies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
              policyType: Schema.optional(
                Schema.Literals([
                  "Other",
                  "UserControlled",
                  "SystemControlled",
                ]),
              ),
              scope: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/policies/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PoliciesCreateOrUpdateByCustomerInput>;

// Output Schema
export interface PoliciesCreateOrUpdateByCustomerOutput {
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
export const PoliciesCreateOrUpdateByCustomerOutput =
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
  }) as unknown as Schema.Codec<PoliciesCreateOrUpdateByCustomerOutput>;

// The operation
/**
 * Updates the policies for a customer. This operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 */
export const PoliciesCreateOrUpdateByCustomer =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PoliciesCreateOrUpdateByCustomerInput,
    outputSchema: PoliciesCreateOrUpdateByCustomerOutput,
  }));
// Input Schema
export interface PoliciesCreateOrUpdateByCustomerAtBillingAccountInput {
  billingAccountName: string;
  customerName: string;
  properties?: {
    provisioningState?:
      | "Succeeded"
      | "Canceled"
      | "Failed"
      | "New"
      | "Pending"
      | "Provisioning"
      | "PendingBilling"
      | "ConfirmedBilling"
      | "Creating"
      | "Created"
      | "Expired";
    viewCharges: "Other" | "Allowed" | "NotAllowed";
    policies?: {
      name?: string;
      value?: string;
      policyType?: "Other" | "UserControlled" | "SystemControlled";
      scope?: string;
    }[];
  };
  tags?: Record<string, string>;
}
export const PoliciesCreateOrUpdateByCustomerAtBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Canceled",
            "Failed",
            "New",
            "Pending",
            "Provisioning",
            "PendingBilling",
            "ConfirmedBilling",
            "Creating",
            "Created",
            "Expired",
          ]),
        ),
        viewCharges: Schema.Literals(["Other", "Allowed", "NotAllowed"]),
        policies: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              value: Schema.optional(Schema.String),
              policyType: Schema.optional(
                Schema.Literals([
                  "Other",
                  "UserControlled",
                  "SystemControlled",
                ]),
              ),
              scope: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/policies/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PoliciesCreateOrUpdateByCustomerAtBillingAccountInput>;

// Output Schema
export interface PoliciesCreateOrUpdateByCustomerAtBillingAccountOutput {
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
export const PoliciesCreateOrUpdateByCustomerAtBillingAccountOutput =
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
  }) as unknown as Schema.Codec<PoliciesCreateOrUpdateByCustomerAtBillingAccountOutput>;

// The operation
/**
 * Updates the policies for a customer at billing account scope. This operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param customerName - The ID that uniquely identifies a customer.
 */
export const PoliciesCreateOrUpdateByCustomerAtBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PoliciesCreateOrUpdateByCustomerAtBillingAccountInput,
    outputSchema: PoliciesCreateOrUpdateByCustomerAtBillingAccountOutput,
  }));
// Input Schema
export interface PoliciesGetByBillingAccountInput {
  billingAccountName: string;
}
export const PoliciesGetByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/policies/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PoliciesGetByBillingAccountInput>;

// Output Schema
export interface PoliciesGetByBillingAccountOutput {
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
export const PoliciesGetByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<PoliciesGetByBillingAccountOutput>;

// The operation
/**
 * Get the policies for a billing account of Enterprise Agreement type.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 */
export const PoliciesGetByBillingAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PoliciesGetByBillingAccountInput,
    outputSchema: PoliciesGetByBillingAccountOutput,
  }),
);
// Input Schema
export interface PoliciesGetByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
}
export const PoliciesGetByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/policies/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PoliciesGetByBillingProfileInput>;

// Output Schema
export interface PoliciesGetByBillingProfileOutput {
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
export const PoliciesGetByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<PoliciesGetByBillingProfileOutput>;

// The operation
/**
 * Lists the policies for a billing profile. This operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 */
export const PoliciesGetByBillingProfile = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PoliciesGetByBillingProfileInput,
    outputSchema: PoliciesGetByBillingProfileOutput,
  }),
);
// Input Schema
export interface PoliciesGetByCustomerInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  policyName: "default";
}
export const PoliciesGetByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    policyName: Schema.Literals(["default"]).pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/policies/{policyName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PoliciesGetByCustomerInput>;

// Output Schema
export interface PoliciesGetByCustomerOutput {
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
export const PoliciesGetByCustomerOutput =
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
  }) as unknown as Schema.Codec<PoliciesGetByCustomerOutput>;

// The operation
/**
 * Lists the policies for a customer. This operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 * @param policyName - Service-defined resource names such as 'default' which are reserved resource names.
 */
export const PoliciesGetByCustomer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PoliciesGetByCustomerInput,
    outputSchema: PoliciesGetByCustomerOutput,
  }),
);
// Input Schema
export interface PoliciesGetByCustomerAtBillingAccountInput {
  billingAccountName: string;
  customerName: string;
}
export const PoliciesGetByCustomerAtBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/policies/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PoliciesGetByCustomerAtBillingAccountInput>;

// Output Schema
export interface PoliciesGetByCustomerAtBillingAccountOutput {
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
export const PoliciesGetByCustomerAtBillingAccountOutput =
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
  }) as unknown as Schema.Codec<PoliciesGetByCustomerAtBillingAccountOutput>;

// The operation
/**
 * Lists the policies for a customer at billing account scope. This operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param customerName - The ID that uniquely identifies a customer.
 */
export const PoliciesGetByCustomerAtBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PoliciesGetByCustomerAtBillingAccountInput,
    outputSchema: PoliciesGetByCustomerAtBillingAccountOutput,
  }));
// Input Schema
export interface PoliciesGetBySubscriptionInput {
  subscriptionId: string;
}
export const PoliciesGetBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Billing/policies/default",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<PoliciesGetBySubscriptionInput>;

// Output Schema
export interface PoliciesGetBySubscriptionOutput {
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
export const PoliciesGetBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<PoliciesGetBySubscriptionOutput>;

// The operation
/**
 * Lists the policies that are managed by the Billing Admin for the defined subscriptions. This is supported for Microsoft Online Services Program, Microsoft Customer Agreement and Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const PoliciesGetBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PoliciesGetBySubscriptionInput,
    outputSchema: PoliciesGetBySubscriptionOutput,
  }),
);
// Input Schema
export interface ProductsGetInput {
  billingAccountName: string;
  productName: string;
}
export const ProductsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<ProductsGetInput>;

// Output Schema
export interface ProductsGetOutput {
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
export const ProductsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProductsGetOutput>;

// The operation
/**
 * Gets a product by ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param productName - The ID that uniquely identifies a product.
 */
export const ProductsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProductsGetInput,
  outputSchema: ProductsGetOutput,
}));
// Input Schema
export interface ProductsListByBillingAccountInput {
  billingAccountName: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const ProductsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ProductsListByBillingAccountInput>;

// Output Schema
export interface ProductsListByBillingAccountOutput {
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
export const ProductsListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<ProductsListByBillingAccountOutput>;

// The operation
/**
 * Lists the products for a billing account. These don't include products billed based on usage. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const ProductsListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProductsListByBillingAccountInput,
    outputSchema: ProductsListByBillingAccountOutput,
  }));
// Input Schema
export interface ProductsListByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const ProductsListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/products",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ProductsListByBillingProfileInput>;

// Output Schema
export interface ProductsListByBillingProfileOutput {
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
export const ProductsListByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<ProductsListByBillingProfileOutput>;

// The operation
/**
 * Lists the products for a billing profile. These don't include products billed based on usage. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement or Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const ProductsListByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProductsListByBillingProfileInput,
    outputSchema: ProductsListByBillingProfileOutput,
  }));
// Input Schema
export interface ProductsListByCustomerInput {
  billingAccountName: string;
  customerName: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const ProductsListByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/products",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ProductsListByCustomerInput>;

// Output Schema
export interface ProductsListByCustomerOutput {
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
export const ProductsListByCustomerOutput =
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
  }) as unknown as Schema.Codec<ProductsListByCustomerOutput>;

// The operation
/**
 * Lists the products for a customer. These don't include products billed based on usage.The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param customerName - The ID that uniquely identifies a customer.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const ProductsListByCustomer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProductsListByCustomerInput,
    outputSchema: ProductsListByCustomerOutput,
  }),
);
// Input Schema
export interface ProductsListByInvoiceSectionInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const ProductsListByInvoiceSectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/products",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ProductsListByInvoiceSectionInput>;

// Output Schema
export interface ProductsListByInvoiceSectionOutput {
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
export const ProductsListByInvoiceSectionOutput =
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
  }) as unknown as Schema.Codec<ProductsListByInvoiceSectionOutput>;

// The operation
/**
 * Lists the products for an invoice section. These don't include products billed based on usage. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const ProductsListByInvoiceSection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProductsListByInvoiceSectionInput,
    outputSchema: ProductsListByInvoiceSectionOutput,
  }));
// Input Schema
export interface ProductsMoveInput {
  billingAccountName: string;
  productName: string;
  destinationInvoiceSectionId: string;
}
export const ProductsMoveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
  destinationInvoiceSectionId: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}/move",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<ProductsMoveInput>;

// Output Schema
export interface ProductsMoveOutput {
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
export const ProductsMoveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProductsMoveOutput>;

// The operation
/**
 * Moves a product's charges to a new invoice section. The new invoice section must belong to the same billing profile as the existing invoice section. This operation is supported only for products that are purchased with a recurring charge and for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param productName - The ID that uniquely identifies a product.
 */
export const ProductsMove = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProductsMoveInput,
  outputSchema: ProductsMoveOutput,
}));
// Input Schema
export interface ProductsUpdateInput {
  billingAccountName: string;
  productName: string;
  properties?: {
    autoRenew?: "Off" | "On";
    availabilityId?: string;
    billingFrequency?: string;
    billingProfileId?: string;
    billingProfileDisplayName?: string;
    customerId?: string;
    customerDisplayName?: string;
    displayName?: string;
    endDate?: string;
    invoiceSectionId?: string;
    invoiceSectionDisplayName?: string;
    lastCharge?: { currency?: string; value?: number };
    lastChargeDate?: string;
    productType?: string;
    productTypeId?: string;
    skuId?: string;
    skuDescription?: string;
    purchaseDate?: string;
    quantity?: number;
    status?:
      | "Other"
      | "Active"
      | "Disabled"
      | "Deleted"
      | "PastDue"
      | "Expiring"
      | "Expired"
      | "AutoRenew"
      | "Canceled"
      | "Suspended";
    tenantId?: string;
    reseller?: { resellerId?: string; description?: string };
  };
  tags?: Record<string, string>;
}
export const ProductsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      autoRenew: Schema.optional(Schema.Literals(["Off", "On"])),
      availabilityId: Schema.optional(Schema.String),
      billingFrequency: Schema.optional(Schema.String),
      billingProfileId: Schema.optional(Schema.String),
      billingProfileDisplayName: Schema.optional(Schema.String),
      customerId: Schema.optional(Schema.String),
      customerDisplayName: Schema.optional(Schema.String),
      displayName: Schema.optional(Schema.String),
      endDate: Schema.optional(Schema.String),
      invoiceSectionId: Schema.optional(Schema.String),
      invoiceSectionDisplayName: Schema.optional(Schema.String),
      lastCharge: Schema.optional(
        Schema.Struct({
          currency: Schema.optional(Schema.String),
          value: Schema.optional(Schema.Number),
        }),
      ),
      lastChargeDate: Schema.optional(Schema.String),
      productType: Schema.optional(Schema.String),
      productTypeId: Schema.optional(Schema.String),
      skuId: Schema.optional(Schema.String),
      skuDescription: Schema.optional(Schema.String),
      purchaseDate: Schema.optional(Schema.String),
      quantity: Schema.optional(Schema.Number),
      status: Schema.optional(
        Schema.Literals([
          "Other",
          "Active",
          "Disabled",
          "Deleted",
          "PastDue",
          "Expiring",
          "Expired",
          "AutoRenew",
          "Canceled",
          "Suspended",
        ]),
      ),
      tenantId: Schema.optional(Schema.String),
      reseller: Schema.optional(
        Schema.Struct({
          resellerId: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<ProductsUpdateInput>;

// Output Schema
export interface ProductsUpdateOutput {
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
export const ProductsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ProductsUpdateOutput>;

// The operation
/**
 * Updates the properties of a Product. Currently, auto renew can be updated. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param productName - The ID that uniquely identifies a product.
 */
export const ProductsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ProductsUpdateInput,
  outputSchema: ProductsUpdateOutput,
}));
// Input Schema
export interface ProductsValidateMoveEligibilityInput {
  billingAccountName: string;
  productName: string;
  destinationInvoiceSectionId: string;
}
export const ProductsValidateMoveEligibilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    destinationInvoiceSectionId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}/validateMoveEligibility",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ProductsValidateMoveEligibilityInput>;

// Output Schema
export interface ProductsValidateMoveEligibilityOutput {
  isMoveEligible?: boolean;
  errorDetails?: {
    code?:
      | "Other"
      | "BillingAccountInactive"
      | "DestinationBillingProfileInactive"
      | "DestinationBillingProfileNotFound"
      | "DestinationBillingProfilePastDue"
      | "DestinationInvoiceSectionInactive"
      | "DestinationInvoiceSectionNotFound"
      | "InsufficientPermissionOnDestination"
      | "InsufficientPermissionOnSource"
      | "InvalidDestination"
      | "InvalidSource"
      | "MarketplaceNotEnabledOnDestination"
      | "ProductInactive"
      | "ProductNotFound"
      | "ProductTypeNotSupported"
      | "SourceBillingProfilePastDue"
      | "SourceInvoiceSectionInactive";
    message?: string;
    details?: string;
  };
}
export const ProductsValidateMoveEligibilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isMoveEligible: Schema.optional(Schema.Boolean),
    errorDetails: Schema.optional(
      Schema.Struct({
        code: Schema.optional(
          Schema.Literals([
            "Other",
            "BillingAccountInactive",
            "DestinationBillingProfileInactive",
            "DestinationBillingProfileNotFound",
            "DestinationBillingProfilePastDue",
            "DestinationInvoiceSectionInactive",
            "DestinationInvoiceSectionNotFound",
            "InsufficientPermissionOnDestination",
            "InsufficientPermissionOnSource",
            "InvalidDestination",
            "InvalidSource",
            "MarketplaceNotEnabledOnDestination",
            "ProductInactive",
            "ProductNotFound",
            "ProductTypeNotSupported",
            "SourceBillingProfilePastDue",
            "SourceInvoiceSectionInactive",
          ]),
        ),
        message: Schema.optional(Schema.String),
        details: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<ProductsValidateMoveEligibilityOutput>;

// The operation
/**
 * Validates if a product's charges can be moved to a new invoice section. This operation is supported only for products that are purchased with a recurring charge and for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param productName - The ID that uniquely identifies a product.
 */
export const ProductsValidateMoveEligibility =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProductsValidateMoveEligibilityInput,
    outputSchema: ProductsValidateMoveEligibilityOutput,
  }));
// Input Schema
export interface RecipientTransfersAcceptInput {
  transferName: string;
  properties?: {
    productDetails?: {
      productType?:
        | "AzureSubscription"
        | "AzureReservation"
        | "Department"
        | "SavingsPlan"
        | "SAAS";
      productId?: string;
    }[];
  };
}
export const RecipientTransfersAcceptInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        productDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              productType: Schema.optional(
                Schema.Literals([
                  "AzureSubscription",
                  "AzureReservation",
                  "Department",
                  "SavingsPlan",
                  "SAAS",
                ]),
              ),
              productId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/transfers/{transferName}/accept",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<RecipientTransfersAcceptInput>;

// Output Schema
export interface RecipientTransfersAcceptOutput {
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
export const RecipientTransfersAcceptOutput =
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
  }) as unknown as Schema.Codec<RecipientTransfersAcceptOutput>;

// The operation
/**
 * Accepts a transfer request.
 *
 * @param api-version - The API version to use for this operation.
 * @param transferName - The ID that uniquely identifies a transfer request.
 */
export const RecipientTransfersAccept = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RecipientTransfersAcceptInput,
    outputSchema: RecipientTransfersAcceptOutput,
  }),
);
// Input Schema
export interface RecipientTransfersDeclineInput {
  transferName: string;
}
export const RecipientTransfersDeclineInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/transfers/{transferName}/decline",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<RecipientTransfersDeclineInput>;

// Output Schema
export interface RecipientTransfersDeclineOutput {
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
export const RecipientTransfersDeclineOutput =
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
  }) as unknown as Schema.Codec<RecipientTransfersDeclineOutput>;

// The operation
/**
 * Declines a transfer request.
 *
 * @param api-version - The API version to use for this operation.
 * @param transferName - The ID that uniquely identifies a transfer request.
 */
export const RecipientTransfersDecline = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RecipientTransfersDeclineInput,
    outputSchema: RecipientTransfersDeclineOutput,
  }),
);
// Input Schema
export interface RecipientTransfersGetInput {
  transferName: string;
}
export const RecipientTransfersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/transfers/{transferName}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<RecipientTransfersGetInput>;

// Output Schema
export interface RecipientTransfersGetOutput {
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
export const RecipientTransfersGetOutput =
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
  }) as unknown as Schema.Codec<RecipientTransfersGetOutput>;

// The operation
/**
 * Gets a transfer request by ID. The caller must be the recipient of the transfer request.
 *
 * @param api-version - The API version to use for this operation.
 * @param transferName - The ID that uniquely identifies a transfer request.
 */
export const RecipientTransfersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RecipientTransfersGetInput,
    outputSchema: RecipientTransfersGetOutput,
  }),
);
// Input Schema
export interface RecipientTransfersListInput {}
export const RecipientTransfersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/transfers",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<RecipientTransfersListInput>;

// Output Schema
export interface RecipientTransfersListOutput {
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
export const RecipientTransfersListOutput =
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
  }) as unknown as Schema.Codec<RecipientTransfersListOutput>;

// The operation
/**
 * Lists the transfer requests received by the caller.
 *
 * @param api-version - The API version to use for this operation.
 */
export const RecipientTransfersList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RecipientTransfersListInput,
    outputSchema: RecipientTransfersListOutput,
  }),
);
// Input Schema
export interface RecipientTransfersValidateInput {
  transferName: string;
  properties?: {
    productDetails?: {
      productType?:
        | "AzureSubscription"
        | "AzureReservation"
        | "Department"
        | "SavingsPlan"
        | "SAAS";
      productId?: string;
    }[];
  };
}
export const RecipientTransfersValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        productDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              productType: Schema.optional(
                Schema.Literals([
                  "AzureSubscription",
                  "AzureReservation",
                  "Department",
                  "SavingsPlan",
                  "SAAS",
                ]),
              ),
              productId: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/transfers/{transferName}/validate",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<RecipientTransfersValidateInput>;

// Output Schema
export interface RecipientTransfersValidateOutput {
  value?: {
    properties?: {
      status?: string;
      productId?: string;
      results?: { level?: string; code?: string; message?: string }[];
    };
  }[];
}
export const RecipientTransfersValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          properties: Schema.optional(
            Schema.Struct({
              status: Schema.optional(Schema.String),
              productId: Schema.optional(Schema.String),
              results: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    level: Schema.optional(Schema.String),
                    code: Schema.optional(Schema.String),
                    message: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<RecipientTransfersValidateOutput>;

// The operation
/**
 * Validates if a subscription or a reservation can be transferred. Use this operation to validate your subscriptions or reservation before using the accept transfer operation.
 *
 * @param api-version - The API version to use for this operation.
 * @param transferName - The ID that uniquely identifies a transfer request.
 */
export const RecipientTransfersValidate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RecipientTransfersValidateInput,
    outputSchema: RecipientTransfersValidateOutput,
  }),
);
// Input Schema
export interface ReservationOrdersGetByBillingAccountInput {
  billingAccountName: string;
  reservationOrderId: string;
  expand?: string;
}
export const ReservationOrdersGetByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/reservationOrders/{reservationOrderId}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ReservationOrdersGetByBillingAccountInput>;

// Output Schema
export interface ReservationOrdersGetByBillingAccountOutput {
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
export const ReservationOrdersGetByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<ReservationOrdersGetByBillingAccountOutput>;

// The operation
/**
 * Get a specific ReservationOrder in the billing account.
 *
 * Get the details of the ReservationOrder in the billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param reservationOrderId - Order Id of the reservation
 * @param expand - May be used to expand the detail information of some properties.
 */
export const ReservationOrdersGetByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationOrdersGetByBillingAccountInput,
    outputSchema: ReservationOrdersGetByBillingAccountOutput,
  }));
// Input Schema
export interface ReservationOrdersListByBillingAccountInput {
  billingAccountName: string;
  filter?: string;
  orderBy?: string;
  skiptoken?: number;
}
export const ReservationOrdersListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    skiptoken: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/reservationOrders",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ReservationOrdersListByBillingAccountInput>;

// Output Schema
export interface ReservationOrdersListByBillingAccountOutput {
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
export const ReservationOrdersListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<ReservationOrdersListByBillingAccountOutput>;

// The operation
/**
 * Get all `ReservationOrders in the billing account.
 *
 * List all the ReservationOrders in the billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param skiptoken - The number of reservations to skip from the list before returning results
 */
export const ReservationOrdersListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationOrdersListByBillingAccountInput,
    outputSchema: ReservationOrdersListByBillingAccountOutput,
  }));
// Input Schema
export interface ReservationsGetByReservationOrderInput {
  billingAccountName: string;
  reservationOrderId: string;
  reservationId: string;
  expand?: string;
}
export const ReservationsGetByReservationOrderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    reservationId: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/reservationOrders/{reservationOrderId}/reservations/{reservationId}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ReservationsGetByReservationOrderInput>;

// Output Schema
export interface ReservationsGetByReservationOrderOutput {
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
export const ReservationsGetByReservationOrderOutput =
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
  }) as unknown as Schema.Codec<ReservationsGetByReservationOrderOutput>;

// The operation
/**
 * Get Reservation details in the billing account.
 *
 * Get specific Reservation details in the billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param reservationOrderId - Order Id of the reservation
 * @param reservationId - Id of the reservation item
 * @param expand - May be used to expand the detail information of some properties.
 */
export const ReservationsGetByReservationOrder =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationsGetByReservationOrderInput,
    outputSchema: ReservationsGetByReservationOrderOutput,
  }));
// Input Schema
export interface ReservationsListByBillingAccountInput {
  billingAccountName: string;
  filter?: string;
  orderBy?: string;
  skiptoken?: number;
  refreshSummary?: string;
  selectedState?: string;
  take?: number;
}
export const ReservationsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    skiptoken: Schema.optional(Schema.Number),
    refreshSummary: Schema.optional(Schema.String),
    selectedState: Schema.optional(Schema.String),
    take: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/reservations",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ReservationsListByBillingAccountInput>;

// Output Schema
export interface ReservationsListByBillingAccountOutput {
  nextLink?: string;
  summary?: {
    cancelledCount?: number;
    expiredCount?: number;
    expiringCount?: number;
    failedCount?: number;
    pendingCount?: number;
    succeededCount?: number;
    noBenefitCount?: number;
    warningCount?: number;
    processingCount?: number;
  };
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
}
export const ReservationsListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    summary: Schema.optional(
      Schema.Struct({
        cancelledCount: Schema.optional(Schema.Number),
        expiredCount: Schema.optional(Schema.Number),
        expiringCount: Schema.optional(Schema.Number),
        failedCount: Schema.optional(Schema.Number),
        pendingCount: Schema.optional(Schema.Number),
        succeededCount: Schema.optional(Schema.Number),
        noBenefitCount: Schema.optional(Schema.Number),
        warningCount: Schema.optional(Schema.Number),
        processingCount: Schema.optional(Schema.Number),
      }),
    ),
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
  }) as unknown as Schema.Codec<ReservationsListByBillingAccountOutput>;

// The operation
/**
 * Lists the reservations in the billing account and the roll up counts of reservations group by provisioning states.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param skiptoken - The number of reservations to skip from the list before returning results
 * @param refreshSummary - To indicate whether to refresh the roll up counts of the reservations group by provisioning states
 * @param selectedState - The selected provisioning state
 * @param take - The number of reservations to return in API response.
 */
export const ReservationsListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationsListByBillingAccountInput,
    outputSchema: ReservationsListByBillingAccountOutput,
  }));
// Input Schema
export interface ReservationsListByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  filter?: string;
  orderBy?: string;
  skiptoken?: number;
  refreshSummary?: string;
  selectedState?: string;
  take?: number;
}
export const ReservationsListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    skiptoken: Schema.optional(Schema.Number),
    refreshSummary: Schema.optional(Schema.String),
    selectedState: Schema.optional(Schema.String),
    take: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/reservations",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ReservationsListByBillingProfileInput>;

// Output Schema
export interface ReservationsListByBillingProfileOutput {
  nextLink?: string;
  summary?: {
    cancelledCount?: number;
    expiredCount?: number;
    expiringCount?: number;
    failedCount?: number;
    pendingCount?: number;
    succeededCount?: number;
    noBenefitCount?: number;
    warningCount?: number;
    processingCount?: number;
  };
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
}
export const ReservationsListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    summary: Schema.optional(
      Schema.Struct({
        cancelledCount: Schema.optional(Schema.Number),
        expiredCount: Schema.optional(Schema.Number),
        expiringCount: Schema.optional(Schema.Number),
        failedCount: Schema.optional(Schema.Number),
        pendingCount: Schema.optional(Schema.Number),
        succeededCount: Schema.optional(Schema.Number),
        noBenefitCount: Schema.optional(Schema.Number),
        warningCount: Schema.optional(Schema.Number),
        processingCount: Schema.optional(Schema.Number),
      }),
    ),
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
  }) as unknown as Schema.Codec<ReservationsListByBillingProfileOutput>;

// The operation
/**
 * Lists the reservations for a billing profile and the roll up counts of reservations group by provisioning state.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param skiptoken - The number of reservations to skip from the list before returning results
 * @param refreshSummary - To indicate whether to refresh the roll up counts of the reservations group by provisioning states
 * @param selectedState - The selected provisioning state
 * @param take - The number of reservations to return in API response.
 */
export const ReservationsListByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationsListByBillingProfileInput,
    outputSchema: ReservationsListByBillingProfileOutput,
  }));
// Input Schema
export interface ReservationsListByReservationOrderInput {
  billingAccountName: string;
  reservationOrderId: string;
}
export const ReservationsListByReservationOrderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    reservationOrderId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/reservationOrders/{reservationOrderId}/reservations",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ReservationsListByReservationOrderInput>;

// Output Schema
export interface ReservationsListByReservationOrderOutput {
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
export const ReservationsListByReservationOrderOutput =
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
  }) as unknown as Schema.Codec<ReservationsListByReservationOrderOutput>;

// The operation
/**
 * Get Reservations in a given reservation Order in the billing account
 *
 * List Reservations within a single ReservationOrder in the billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param reservationOrderId - Order Id of the reservation
 */
export const ReservationsListByReservationOrder =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationsListByReservationOrderInput,
    outputSchema: ReservationsListByReservationOrderOutput,
  }));
// Input Schema
export interface ReservationsUpdateByBillingAccountInput {
  billingAccountName: string;
  reservationOrderId: string;
  reservationId: string;
  properties?: {
    appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
    appliedScopeProperties?: {
      tenantId?: string;
      managementGroupId?: string;
      subscriptionId?: string;
      resourceGroupId?: string;
      displayName?: string;
    };
    instanceFlexibility?: "On" | "Off";
    displayName?: string;
    renew?: boolean;
    renewProperties?: {
      purchaseProperties?: {
        sku?: { name?: string };
        location?: string;
        properties?: {
          reservedResourceType?: string;
          billingScopeId?: string;
          term?: string;
          billingPlan?: "Upfront" | "Monthly";
          quantity?: number;
          displayName?: string;
          appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
          appliedScopes?: string[];
          appliedScopeProperties?: {
            tenantId?: string;
            managementGroupId?: string;
            subscriptionId?: string;
            resourceGroupId?: string;
            displayName?: string;
          };
          renew?: boolean;
          reservedResourceProperties?: { instanceFlexibility?: "On" | "Off" };
          instanceFlexibility?: "On" | "Off";
          reviewDateTime?: string;
        };
      };
    };
    reviewDateTime?: string;
  };
  sku?: { name?: string };
  tags?: Record<string, string>;
}
export const ReservationsUpdateByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    reservationId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        appliedScopeType: Schema.optional(
          Schema.Literals(["Single", "Shared", "ManagementGroup"]),
        ),
        appliedScopeProperties: Schema.optional(
          Schema.Struct({
            tenantId: Schema.optional(Schema.String),
            managementGroupId: Schema.optional(Schema.String),
            subscriptionId: Schema.optional(Schema.String),
            resourceGroupId: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
          }),
        ),
        instanceFlexibility: Schema.optional(Schema.Literals(["On", "Off"])),
        displayName: Schema.optional(Schema.String),
        renew: Schema.optional(Schema.Boolean),
        renewProperties: Schema.optional(
          Schema.Struct({
            purchaseProperties: Schema.optional(
              Schema.Struct({
                sku: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                  }),
                ),
                location: Schema.optional(Schema.String),
                properties: Schema.optional(
                  Schema.Struct({
                    reservedResourceType: Schema.optional(Schema.String),
                    billingScopeId: Schema.optional(Schema.String),
                    term: Schema.optional(Schema.String),
                    billingPlan: Schema.optional(
                      Schema.Literals(["Upfront", "Monthly"]),
                    ),
                    quantity: Schema.optional(Schema.Number),
                    displayName: Schema.optional(Schema.String),
                    appliedScopeType: Schema.optional(
                      Schema.Literals(["Single", "Shared", "ManagementGroup"]),
                    ),
                    appliedScopes: Schema.optional(Schema.Array(Schema.String)),
                    appliedScopeProperties: Schema.optional(
                      Schema.Struct({
                        tenantId: Schema.optional(Schema.String),
                        managementGroupId: Schema.optional(Schema.String),
                        subscriptionId: Schema.optional(Schema.String),
                        resourceGroupId: Schema.optional(Schema.String),
                        displayName: Schema.optional(Schema.String),
                      }),
                    ),
                    renew: Schema.optional(Schema.Boolean),
                    reservedResourceProperties: Schema.optional(
                      Schema.Struct({
                        instanceFlexibility: Schema.optional(
                          Schema.Literals(["On", "Off"]),
                        ),
                      }),
                    ),
                    instanceFlexibility: Schema.optional(
                      Schema.Literals(["On", "Off"]),
                    ),
                    reviewDateTime: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        reviewDateTime: Schema.optional(Schema.String),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/reservationOrders/{reservationOrderId}/reservations/{reservationId}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<ReservationsUpdateByBillingAccountInput>;

// Output Schema
export interface ReservationsUpdateByBillingAccountOutput {
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
export const ReservationsUpdateByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<ReservationsUpdateByBillingAccountOutput>;

// The operation
/**
 * Update reservation by billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param reservationOrderId - Order Id of the reservation
 * @param reservationId - Id of the reservation item
 */
export const ReservationsUpdateByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ReservationsUpdateByBillingAccountInput,
    outputSchema: ReservationsUpdateByBillingAccountOutput,
  }));
// Input Schema
export interface SavingsPlanOrdersGetByBillingAccountInput {
  billingAccountName: string;
  savingsPlanOrderId: string;
  expand?: string;
}
export const SavingsPlanOrdersGetByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/savingsPlanOrders/{savingsPlanOrderId}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<SavingsPlanOrdersGetByBillingAccountInput>;

// Output Schema
export interface SavingsPlanOrdersGetByBillingAccountOutput {
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
export const SavingsPlanOrdersGetByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<SavingsPlanOrdersGetByBillingAccountOutput>;

// The operation
/**
 * Get a savings plan order by billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param savingsPlanOrderId - Order ID of the savings plan
 * @param expand - May be used to expand the planInformation.
 */
export const SavingsPlanOrdersGetByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SavingsPlanOrdersGetByBillingAccountInput,
    outputSchema: SavingsPlanOrdersGetByBillingAccountOutput,
  }));
// Input Schema
export interface SavingsPlanOrdersListByBillingAccountInput {
  billingAccountName: string;
  filter?: string;
  orderBy?: string;
  skiptoken?: number;
}
export const SavingsPlanOrdersListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    skiptoken: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/savingsPlanOrders",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<SavingsPlanOrdersListByBillingAccountInput>;

// Output Schema
export interface SavingsPlanOrdersListByBillingAccountOutput {
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
export const SavingsPlanOrdersListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<SavingsPlanOrdersListByBillingAccountOutput>;

// The operation
/**
 * List all Savings plan orders by billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param skiptoken - The number of savings plans to skip from the list before returning results
 */
export const SavingsPlanOrdersListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SavingsPlanOrdersListByBillingAccountInput,
    outputSchema: SavingsPlanOrdersListByBillingAccountOutput,
  }));
// Input Schema
export interface SavingsPlansGetByBillingAccountInput {
  billingAccountName: string;
  savingsPlanOrderId: string;
  savingsPlanId: string;
  expand?: string;
}
export const SavingsPlansGetByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
    savingsPlanId: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans/{savingsPlanId}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<SavingsPlansGetByBillingAccountInput>;

// Output Schema
export interface SavingsPlansGetByBillingAccountOutput {
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
export const SavingsPlansGetByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<SavingsPlansGetByBillingAccountOutput>;

// The operation
/**
 * Get savings plan by billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param savingsPlanOrderId - Order ID of the savings plan
 * @param savingsPlanId - ID of the savings plan
 * @param expand - May be used to expand the planInformation.
 */
export const SavingsPlansGetByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SavingsPlansGetByBillingAccountInput,
    outputSchema: SavingsPlansGetByBillingAccountOutput,
  }));
// Input Schema
export interface SavingsPlansListByBillingAccountInput {
  billingAccountName: string;
  filter?: string;
  orderBy?: string;
  skiptoken?: number;
  take?: number;
  selectedState?: string;
  refreshSummary?: string;
}
export const SavingsPlansListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    skiptoken: Schema.optional(Schema.Number),
    take: Schema.optional(Schema.Number),
    selectedState: Schema.optional(Schema.String),
    refreshSummary: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/savingsPlans",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<SavingsPlansListByBillingAccountInput>;

// Output Schema
export interface SavingsPlansListByBillingAccountOutput {
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
export const SavingsPlansListByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<SavingsPlansListByBillingAccountOutput>;

// The operation
/**
 * List savings plans by billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param skiptoken - The number of savings plans to skip from the list before returning results
 * @param take - The number of savings plans to return
 * @param selectedState - The selected provisioning state
 * @param refreshSummary - To indicate whether to refresh the roll up counts of the savings plans group by provisioning states
 */
export const SavingsPlansListByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SavingsPlansListByBillingAccountInput,
    outputSchema: SavingsPlansListByBillingAccountOutput,
  }));
// Input Schema
export interface SavingsPlansListBySavingsPlanOrderInput {
  billingAccountName: string;
  savingsPlanOrderId: string;
}
export const SavingsPlansListBySavingsPlanOrderInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<SavingsPlansListBySavingsPlanOrderInput>;

// Output Schema
export interface SavingsPlansListBySavingsPlanOrderOutput {
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
export const SavingsPlansListBySavingsPlanOrderOutput =
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
  }) as unknown as Schema.Codec<SavingsPlansListBySavingsPlanOrderOutput>;

// The operation
/**
 * List savings plans in an order by billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param savingsPlanOrderId - Order ID of the savings plan
 */
export const SavingsPlansListBySavingsPlanOrder =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SavingsPlansListBySavingsPlanOrderInput,
    outputSchema: SavingsPlansListBySavingsPlanOrderOutput,
  }));
// Input Schema
export interface SavingsPlansUpdateByBillingAccountInput {
  billingAccountName: string;
  savingsPlanOrderId: string;
  savingsPlanId: string;
  properties?: {
    displayName?: string;
    appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
    appliedScopeProperties?: {
      tenantId?: string;
      managementGroupId?: string;
      subscriptionId?: string;
      resourceGroupId?: string;
      displayName?: string;
    };
    renew?: boolean;
    renewProperties?: {
      purchaseProperties?: {
        sku?: { name?: string };
        properties?: {
          displayName?: string;
          billingScopeId?: string;
          term?: "P1Y" | "P3Y" | "P5Y";
          billingPlan?: "P1M";
          appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
          commitment?: { currencyCode?: string; amount?: number };
          renew?: boolean;
          appliedScopeProperties?: {
            tenantId?: string;
            managementGroupId?: string;
            subscriptionId?: string;
            resourceGroupId?: string;
            displayName?: string;
          };
        };
      };
    };
  };
  sku?: { name?: string };
  tags?: Record<string, string>;
}
export const SavingsPlansUpdateByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
    savingsPlanId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        appliedScopeType: Schema.optional(
          Schema.Literals(["Single", "Shared", "ManagementGroup"]),
        ),
        appliedScopeProperties: Schema.optional(
          Schema.Struct({
            tenantId: Schema.optional(Schema.String),
            managementGroupId: Schema.optional(Schema.String),
            subscriptionId: Schema.optional(Schema.String),
            resourceGroupId: Schema.optional(Schema.String),
            displayName: Schema.optional(Schema.String),
          }),
        ),
        renew: Schema.optional(Schema.Boolean),
        renewProperties: Schema.optional(
          Schema.Struct({
            purchaseProperties: Schema.optional(
              Schema.Struct({
                sku: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                  }),
                ),
                properties: Schema.optional(
                  Schema.Struct({
                    displayName: Schema.optional(Schema.String),
                    billingScopeId: Schema.optional(Schema.String),
                    term: Schema.optional(
                      Schema.Literals(["P1Y", "P3Y", "P5Y"]),
                    ),
                    billingPlan: Schema.optional(Schema.Literals(["P1M"])),
                    appliedScopeType: Schema.optional(
                      Schema.Literals(["Single", "Shared", "ManagementGroup"]),
                    ),
                    commitment: Schema.optional(
                      Schema.Struct({
                        currencyCode: Schema.optional(Schema.String),
                        amount: Schema.optional(Schema.Number),
                      }),
                    ),
                    renew: Schema.optional(Schema.Boolean),
                    appliedScopeProperties: Schema.optional(
                      Schema.Struct({
                        tenantId: Schema.optional(Schema.String),
                        managementGroupId: Schema.optional(Schema.String),
                        subscriptionId: Schema.optional(Schema.String),
                        resourceGroupId: Schema.optional(Schema.String),
                        displayName: Schema.optional(Schema.String),
                      }),
                    ),
                  }),
                ),
              }),
            ),
          }),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans/{savingsPlanId}",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<SavingsPlansUpdateByBillingAccountInput>;

// Output Schema
export interface SavingsPlansUpdateByBillingAccountOutput {
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
export const SavingsPlansUpdateByBillingAccountOutput =
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
  }) as unknown as Schema.Codec<SavingsPlansUpdateByBillingAccountOutput>;

// The operation
/**
 * Update savings plan by billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param savingsPlanOrderId - Order ID of the savings plan
 * @param savingsPlanId - ID of the savings plan
 */
export const SavingsPlansUpdateByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SavingsPlansUpdateByBillingAccountInput,
    outputSchema: SavingsPlansUpdateByBillingAccountOutput,
  }));
// Input Schema
export interface SavingsPlansValidateUpdateByBillingAccountInput {
  billingAccountName: string;
  savingsPlanOrderId: string;
  savingsPlanId: string;
  benefits?: {
    displayName?: string;
    appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
    appliedScopeProperties?: {
      tenantId?: string;
      managementGroupId?: string;
      subscriptionId?: string;
      resourceGroupId?: string;
      displayName?: string;
    };
    renew?: boolean;
    renewProperties?: {
      purchaseProperties?: {
        sku?: { name?: string };
        properties?: {
          displayName?: string;
          billingScopeId?: string;
          term?: "P1Y" | "P3Y" | "P5Y";
          billingPlan?: "P1M";
          appliedScopeType?: "Single" | "Shared" | "ManagementGroup";
          commitment?: { currencyCode?: string; amount?: number };
          renew?: boolean;
          appliedScopeProperties?: {
            tenantId?: string;
            managementGroupId?: string;
            subscriptionId?: string;
            resourceGroupId?: string;
            displayName?: string;
          };
        };
      };
    };
  }[];
}
export const SavingsPlansValidateUpdateByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
    savingsPlanId: Schema.String.pipe(T.PathParam()),
    benefits: Schema.optional(
      Schema.Array(
        Schema.Struct({
          displayName: Schema.optional(Schema.String),
          appliedScopeType: Schema.optional(
            Schema.Literals(["Single", "Shared", "ManagementGroup"]),
          ),
          appliedScopeProperties: Schema.optional(
            Schema.Struct({
              tenantId: Schema.optional(Schema.String),
              managementGroupId: Schema.optional(Schema.String),
              subscriptionId: Schema.optional(Schema.String),
              resourceGroupId: Schema.optional(Schema.String),
              displayName: Schema.optional(Schema.String),
            }),
          ),
          renew: Schema.optional(Schema.Boolean),
          renewProperties: Schema.optional(
            Schema.Struct({
              purchaseProperties: Schema.optional(
                Schema.Struct({
                  sku: Schema.optional(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                    }),
                  ),
                  properties: Schema.optional(
                    Schema.Struct({
                      displayName: Schema.optional(Schema.String),
                      billingScopeId: Schema.optional(Schema.String),
                      term: Schema.optional(
                        Schema.Literals(["P1Y", "P3Y", "P5Y"]),
                      ),
                      billingPlan: Schema.optional(Schema.Literals(["P1M"])),
                      appliedScopeType: Schema.optional(
                        Schema.Literals([
                          "Single",
                          "Shared",
                          "ManagementGroup",
                        ]),
                      ),
                      commitment: Schema.optional(
                        Schema.Struct({
                          currencyCode: Schema.optional(Schema.String),
                          amount: Schema.optional(Schema.Number),
                        }),
                      ),
                      renew: Schema.optional(Schema.Boolean),
                      appliedScopeProperties: Schema.optional(
                        Schema.Struct({
                          tenantId: Schema.optional(Schema.String),
                          managementGroupId: Schema.optional(Schema.String),
                          subscriptionId: Schema.optional(Schema.String),
                          resourceGroupId: Schema.optional(Schema.String),
                          displayName: Schema.optional(Schema.String),
                        }),
                      ),
                    }),
                  ),
                }),
              ),
            }),
          ),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans/{savingsPlanId}/validate",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<SavingsPlansValidateUpdateByBillingAccountInput>;

// Output Schema
export interface SavingsPlansValidateUpdateByBillingAccountOutput {
  benefits?: { valid?: boolean; reasonCode?: string; reason?: string }[];
  nextLink?: string;
}
export const SavingsPlansValidateUpdateByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    benefits: Schema.optional(
      Schema.Array(
        Schema.Struct({
          valid: Schema.optional(Schema.Boolean),
          reasonCode: Schema.optional(Schema.String),
          reason: Schema.optional(Schema.String),
        }),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SavingsPlansValidateUpdateByBillingAccountOutput>;

// The operation
/**
 * Validate savings plan patch by billing account.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param savingsPlanOrderId - Order ID of the savings plan
 * @param savingsPlanId - ID of the savings plan
 */
export const SavingsPlansValidateUpdateByBillingAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SavingsPlansValidateUpdateByBillingAccountInput,
    outputSchema: SavingsPlansValidateUpdateByBillingAccountOutput,
  }));
// Input Schema
export interface TransactionsGetTransactionSummaryByInvoiceInput {
  billingAccountName: string;
  invoiceName: string;
  filter?: string;
  search?: string;
}
export const TransactionsGetTransactionSummaryByInvoiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    invoiceName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices/{invoiceName}/transactionSummary",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<TransactionsGetTransactionSummaryByInvoiceInput>;

// Output Schema
export interface TransactionsGetTransactionSummaryByInvoiceOutput {
  azureCreditApplied?: number;
  billingCurrency?: string;
  consumptionCommitmentDecremented?: number;
  subTotal?: number;
  tax?: number;
  total?: number;
}
export const TransactionsGetTransactionSummaryByInvoiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    azureCreditApplied: Schema.optional(Schema.Number),
    billingCurrency: Schema.optional(Schema.String),
    consumptionCommitmentDecremented: Schema.optional(Schema.Number),
    subTotal: Schema.optional(Schema.Number),
    tax: Schema.optional(Schema.Number),
    total: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<TransactionsGetTransactionSummaryByInvoiceOutput>;

// The operation
/**
 * Gets the transaction summary for an invoice. Transactions include purchases, refunds and Azure usage charges.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param invoiceName - The ID that uniquely identifies an invoice.
 * @param filter - The filter query option allows clients to filter the line items that are aggregated to create the line item summary.
 * @param search - The search query option allows clients to filter the line items that are aggregated to create the line item summary.
 */
export const TransactionsGetTransactionSummaryByInvoice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TransactionsGetTransactionSummaryByInvoiceInput,
    outputSchema: TransactionsGetTransactionSummaryByInvoiceOutput,
  }));
// Input Schema
export interface TransactionsListByBillingProfileInput {
  billingAccountName: string;
  billingProfileName: string;
  periodStartDate: string;
  periodEndDate: string;
  type: "Other" | "Billed" | "Unbilled";
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const TransactionsListByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    periodStartDate: Schema.String,
    periodEndDate: Schema.String,
    type: Schema.Literals(["Other", "Billed", "Unbilled"]),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/transactions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<TransactionsListByBillingProfileInput>;

// Output Schema
export interface TransactionsListByBillingProfileOutput {
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
export const TransactionsListByBillingProfileOutput =
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
  }) as unknown as Schema.Codec<TransactionsListByBillingProfileOutput>;

// The operation
/**
 * Lists the billed or unbilled transactions by billing profile name for given start and end date. Transactions include purchases, refunds and Azure usage charges. Unbilled transactions are listed under pending invoice Id and do not include tax. Tax is added to the amount once an invoice is generated.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param periodStartDate - The start date to fetch the transactions. The date should be specified in MM-DD-YYYY format.
 * @param periodEndDate - The end date to fetch the transactions. The date should be specified in MM-DD-YYYY format.
 * @param type - The type of transaction.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const TransactionsListByBillingProfile =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TransactionsListByBillingProfileInput,
    outputSchema: TransactionsListByBillingProfileOutput,
  }));
// Input Schema
export interface TransactionsListByCustomerInput {
  billingAccountName: string;
  billingProfileName: string;
  customerName: string;
  periodStartDate: string;
  periodEndDate: string;
  type: "Other" | "Billed" | "Unbilled";
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const TransactionsListByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    periodStartDate: Schema.String,
    periodEndDate: Schema.String,
    type: Schema.Literals(["Other", "Billed", "Unbilled"]),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/transactions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<TransactionsListByCustomerInput>;

// Output Schema
export interface TransactionsListByCustomerOutput {
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
export const TransactionsListByCustomerOutput =
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
  }) as unknown as Schema.Codec<TransactionsListByCustomerOutput>;

// The operation
/**
 * Lists the billed or unbilled transactions by customer id for given start date and end date. Transactions include purchases, refunds and Azure usage charges. Unbilled transactions are listed under pending invoice Id and do not include tax. Tax is added to the amount once an invoice is generated.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param customerName - The ID that uniquely identifies a customer.
 * @param periodStartDate - The start date to fetch the transactions. The date should be specified in MM-DD-YYYY format.
 * @param periodEndDate - The end date to fetch the transactions. The date should be specified in MM-DD-YYYY format.
 * @param type - The type of transaction.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const TransactionsListByCustomer = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TransactionsListByCustomerInput,
    outputSchema: TransactionsListByCustomerOutput,
  }),
);
// Input Schema
export interface TransactionsListByInvoiceInput {
  billingAccountName: string;
  invoiceName: string;
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const TransactionsListByInvoiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    invoiceName: Schema.String.pipe(T.PathParam()),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices/{invoiceName}/transactions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<TransactionsListByInvoiceInput>;

// Output Schema
export interface TransactionsListByInvoiceOutput {
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
export const TransactionsListByInvoiceOutput =
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
  }) as unknown as Schema.Codec<TransactionsListByInvoiceOutput>;

// The operation
/**
 * Lists the transactions for an invoice. Transactions include purchases, refunds and Azure usage charges.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param invoiceName - The ID that uniquely identifies an invoice.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const TransactionsListByInvoice = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TransactionsListByInvoiceInput,
    outputSchema: TransactionsListByInvoiceOutput,
  }),
);
// Input Schema
export interface TransactionsListByInvoiceSectionInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  periodStartDate: string;
  periodEndDate: string;
  type: "Other" | "Billed" | "Unbilled";
  filter?: string;
  orderBy?: string;
  top?: number;
  skip?: number;
  count?: boolean;
  search?: string;
}
export const TransactionsListByInvoiceSectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    periodStartDate: Schema.String,
    periodEndDate: Schema.String,
    type: Schema.Literals(["Other", "Billed", "Unbilled"]),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    top: Schema.optional(Schema.Number),
    skip: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Boolean),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transactions",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<TransactionsListByInvoiceSectionInput>;

// Output Schema
export interface TransactionsListByInvoiceSectionOutput {
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
export const TransactionsListByInvoiceSectionOutput =
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
  }) as unknown as Schema.Codec<TransactionsListByInvoiceSectionOutput>;

// The operation
/**
 * Lists the billed or unbilled transactions by invoice section name for given start date and end date. Transactions include purchases, refunds and Azure usage charges. Unbilled transactions are listed under pending invoice Id and do not include tax. Tax is added to the amount once an invoice is generated.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 * @param periodStartDate - The start date to fetch the transactions. The date should be specified in MM-DD-YYYY format.
 * @param periodEndDate - The end date to fetch the transactions. The date should be specified in MM-DD-YYYY format.
 * @param type - The type of transaction.
 * @param filter - The filter query option allows clients to filter a collection of resources that are addressed by a request URL.
 * @param orderBy - The orderby query option allows clients to request resources in a particular order.
 * @param top - The top query option requests the number of items in the queried collection to be included in the result. The maximum supported value for top is 50.
 * @param skip - The skip query option requests the number of items in the queried collection that are to be skipped and not included in the result.
 * @param count - The count query option allows clients to request a count of the matching resources included with the resources in the response.
 * @param search - The search query option allows clients to request items within a collection matching a free-text search expression. search is only supported for string fields.
 */
export const TransactionsListByInvoiceSection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TransactionsListByInvoiceSectionInput,
    outputSchema: TransactionsListByInvoiceSectionOutput,
  }));
// Input Schema
export interface TransactionsTransactionsDownloadByInvoiceInput {
  billingAccountName: string;
  invoiceName: string;
}
export const TransactionsTransactionsDownloadByInvoiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    invoiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices/{invoiceName}/transactionsDownload",
      apiVersion: "2024-04-01",
    }),
  ) as unknown as Schema.Codec<TransactionsTransactionsDownloadByInvoiceInput>;

// Output Schema
export interface TransactionsTransactionsDownloadByInvoiceOutput {
  expiryTime?: string;
  url?: string;
}
export const TransactionsTransactionsDownloadByInvoiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<TransactionsTransactionsDownloadByInvoiceOutput>;

// The operation
/**
 * Gets a URL to download the transactions document for an invoice. The operation is supported for billing accounts with agreement type Enterprise Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param invoiceName - The ID that uniquely identifies an invoice.
 */
export const TransactionsTransactionsDownloadByInvoice =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TransactionsTransactionsDownloadByInvoiceInput,
    outputSchema: TransactionsTransactionsDownloadByInvoiceOutput,
  }));
// Input Schema
export interface TransfersCancelInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  transferName: string;
}
export const TransfersCancelInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  billingProfileName: Schema.String.pipe(T.PathParam()),
  invoiceSectionName: Schema.String.pipe(T.PathParam()),
  transferName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transfers/{transferName}/cancel",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<TransfersCancelInput>;

// Output Schema
export interface TransfersCancelOutput {
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
export const TransfersCancelOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TransfersCancelOutput>;

// The operation
/**
 * Cancels a transfer request. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 * @param transferName - The ID that uniquely identifies a transfer request.
 */
export const TransfersCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TransfersCancelInput,
  outputSchema: TransfersCancelOutput,
}));
// Input Schema
export interface TransfersGetInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  transferName: string;
}
export const TransfersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  billingProfileName: Schema.String.pipe(T.PathParam()),
  invoiceSectionName: Schema.String.pipe(T.PathParam()),
  transferName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transfers/{transferName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<TransfersGetInput>;

// Output Schema
export interface TransfersGetOutput {
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
export const TransfersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TransfersGetOutput>;

// The operation
/**
 * Gets a transfer request by ID. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 * @param transferName - The ID that uniquely identifies a transfer request.
 */
export const TransfersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TransfersGetInput,
  outputSchema: TransfersGetOutput,
}));
// Input Schema
export interface TransfersInitiateInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
  transferName: string;
  properties?: { recipientEmailId?: string };
}
export const TransfersInitiateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    transferName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        recipientEmailId: Schema.optional(Schema.String),
      }),
    ),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transfers/{transferName}",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<TransfersInitiateInput>;

// Output Schema
export interface TransfersInitiateOutput {
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
export const TransfersInitiateOutput =
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
  }) as unknown as Schema.Codec<TransfersInitiateOutput>;

// The operation
/**
 * Sends a request to a user in another billing account to transfer billing ownership of their subscriptions. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 * @param transferName - The ID that uniquely identifies a transfer request.
 */
export const TransfersInitiate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TransfersInitiateInput,
  outputSchema: TransfersInitiateOutput,
}));
// Input Schema
export interface TransfersListInput {
  billingAccountName: string;
  billingProfileName: string;
  invoiceSectionName: string;
}
export const TransfersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  billingProfileName: Schema.String.pipe(T.PathParam()),
  invoiceSectionName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transfers",
    apiVersion: "2024-04-01",
  }),
) as unknown as Schema.Codec<TransfersListInput>;

// Output Schema
export interface TransfersListOutput {
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
export const TransfersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
    Schema.Struct({
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
    }),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<TransfersListOutput>;

// The operation
/**
 * Lists the transfer requests for an invoice section. The operation is supported only for billing accounts with agreement type Microsoft Customer Agreement.
 *
 * @param api-version - The API version to use for this operation.
 * @param billingAccountName - The ID that uniquely identifies a billing account.
 * @param billingProfileName - The ID that uniquely identifies a billing profile.
 * @param invoiceSectionName - The ID that uniquely identifies an invoice section.
 */
export const TransfersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TransfersListInput,
  outputSchema: TransfersListOutput,
}));
