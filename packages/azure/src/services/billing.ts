/**
 * Azure Billing API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Shared schemas
const BillingAccountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const systemDataSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
const BillingAccountPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    accountStatus: Schema.optional(Schema.suspend(() => AccountStatusSchema)),
    accountType: Schema.optional(Schema.suspend(() => AccountTypeSchema)),
    accountSubType: Schema.optional(Schema.suspend(() => AccountSubTypeSchema)),
    accountStatusReasonCode: Schema.optional(
      Schema.suspend(() => BillingAccountStatusReasonCodeSchema),
    ),
    agreementType: Schema.optional(Schema.suspend(() => AgreementTypeSchema)),
    displayName: Schema.optional(Schema.String),
    enrollmentDetails: Schema.optional(
      Schema.suspend(() => BillingAccountPropertiesEnrollmentDetailsSchema),
    ),
    hasReadAccess: Schema.optional(Schema.Boolean),
    hasNoBillingProfiles: Schema.optional(Schema.Boolean),
    notificationEmailAddress: Schema.optional(Schema.String),
    primaryBillingTenantId: Schema.optional(Schema.String),
    soldTo: Schema.optional(
      Schema.suspend(() => BillingAccountPropertiesSoldToSchema),
    ),
    registrationNumber: Schema.optional(
      Schema.suspend(() => BillingAccountPropertiesRegistrationNumberSchema),
    ),
    billingRelationshipTypes: Schema.optional(
      Schema.Array(Schema.suspend(() => BillingRelationshipTypeSchema)),
    ),
    qualifications: Schema.optional(Schema.Array(Schema.String)),
    taxIds: Schema.optional(
      Schema.Array(Schema.suspend(() => TaxIdentifierSchema)),
    ),
  });
const ProvisioningStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
]);
const AccountStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
]);
const AccountTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Enterprise",
  "Individual",
  "Partner",
  "Reseller",
  "ClassicPartner",
  "Internal",
  "Tenant",
  "Business",
]);
const AccountSubTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "None",
  "Individual",
  "Professional",
  "Enterprise",
]);
const BillingAccountStatusReasonCodeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "UnusualActivity",
    "ManuallyTerminated",
    "Expired",
    "Transferred",
    "TerminateProcessing",
  ]);
const AgreementTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "MicrosoftCustomerAgreement",
  "EnterpriseAgreement",
  "MicrosoftOnlineServicesProgram",
  "MicrosoftPartnerAgreement",
]);
const BillingAccountPropertiesEnrollmentDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startDate: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    currency: Schema.optional(Schema.String),
    channel: Schema.optional(Schema.String),
    language: Schema.optional(Schema.String),
    countryCode: Schema.optional(Schema.String),
    billingCycle: Schema.optional(Schema.String),
    extendedTermOption: Schema.optional(
      Schema.suspend(() => ExtendedTermOptionSchema),
    ),
    supportLevel: Schema.optional(Schema.suspend(() => SupportLevelSchema)),
    supportCoverage: Schema.optional(Schema.String),
    cloud: Schema.optional(Schema.String),
    poNumber: Schema.optional(Schema.String),
    markupStatus: Schema.optional(Schema.suspend(() => MarkupStatusSchema)),
    indirectRelationshipInfo: Schema.optional(
      Schema.suspend(() => EnrollmentDetailsIndirectRelationshipInfoSchema),
    ),
    invoiceRecipient: Schema.optional(Schema.String),
  });
const ExtendedTermOptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Opted-In",
  "Opted-Out",
]);
const SupportLevelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Standard",
  "Pro-Direct",
  "Developer",
]);
const MarkupStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Disabled",
  "Preview",
  "Published",
  "Locked",
]);
const EnrollmentDetailsIndirectRelationshipInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.optional(Schema.String),
    billingProfileName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  });
const BillingAccountPropertiesSoldToSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
const BillingAccountPropertiesRegistrationNumberSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    required: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.Array(Schema.String)),
  });
const BillingRelationshipTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "Direct",
    "IndirectCustomer",
    "IndirectPartner",
    "CSPPartner",
    "CSPCustomer",
  ]);
const TaxIdentifierSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.suspend(() => TaxIdentifierTypeSchema)),
  scope: Schema.optional(Schema.String),
  country: Schema.optional(Schema.String),
  status: Schema.optional(Schema.suspend(() => TaxIdentifierStatusSchema)),
});
const TaxIdentifierTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
]);
const TaxIdentifierStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Valid",
  "Invalid",
]);
const AgreementSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AgreementPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  acceptanceMode: Schema.optional(Schema.suspend(() => AcceptanceModeSchema)),
  agreementLink: Schema.optional(Schema.String),
  billingProfileInfo: Schema.optional(
    Schema.Array(Schema.suspend(() => BillingProfileInfoSchema)),
  ),
  category: Schema.optional(Schema.suspend(() => CategorySchema)),
  displayName: Schema.optional(Schema.String),
  effectiveDate: Schema.optional(Schema.String),
  expirationDate: Schema.optional(Schema.String),
  participants: Schema.optional(
    Schema.Array(Schema.suspend(() => ParticipantSchema)),
  ),
  status: Schema.optional(Schema.String),
  leadBillingAccountName: Schema.optional(Schema.String),
});
const AcceptanceModeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "ClickToAccept",
  "ESignEmbedded",
  "ESignOffline",
  "Implicit",
  "Offline",
  "PhysicalSign",
]);
const BillingProfileInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountId: Schema.optional(Schema.String),
  billingProfileDisplayName: Schema.optional(Schema.String),
  billingProfileId: Schema.optional(Schema.String),
  billingProfileSystemId: Schema.optional(Schema.String),
  indirectRelationshipOrganizationName: Schema.optional(Schema.String),
});
const CategorySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "AffiliatePurchaseTerms",
  "IndirectForGovernmentAgreement",
  "MicrosoftCustomerAgreement",
  "MicrosoftPartnerAgreement",
  "UKCloudComputeFramework",
]);
const ParticipantSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  statusDate: Schema.optional(Schema.String),
});
const AssociatedTenantSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const AssociatedTenantPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    displayName: Schema.optional(Schema.String),
    tenantId: Schema.optional(Schema.String),
    billingManagementState: Schema.optional(
      Schema.suspend(() => BillingManagementTenantStateSchema),
    ),
    provisioningManagementState: Schema.optional(
      Schema.suspend(() => ProvisioningTenantStateSchema),
    ),
    provisioningBillingRequestId: Schema.optional(Schema.String),
  });
const BillingManagementTenantStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "NotAllowed",
    "Active",
    "Revoked",
  ]);
const ProvisioningTenantStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "NotRequested",
    "Active",
    "Pending",
    "BillingRequestExpired",
    "BillingRequestDeclined",
    "Revoked",
  ]);
const AvailableBalancePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    amount: Schema.optional(
      Schema.suspend(() => AvailableBalancePropertiesAmountSchema),
    ),
    paymentsOnAccount: Schema.optional(
      Schema.Array(Schema.suspend(() => PaymentOnAccountSchema)),
    ),
    totalPaymentsOnAccount: Schema.optional(
      Schema.suspend(
        () => AvailableBalancePropertiesTotalPaymentsOnAccountSchema,
      ),
    ),
  });
const AvailableBalancePropertiesAmountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  });
const PaymentOnAccountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.optional(Schema.suspend(() => PaymentOnAccountAmountSchema)),
  billingProfileId: Schema.optional(Schema.String),
  billingProfileDisplayName: Schema.optional(Schema.String),
  invoiceId: Schema.optional(Schema.String),
  invoiceName: Schema.optional(Schema.String),
  date: Schema.optional(Schema.String),
  paymentMethodType: Schema.optional(
    Schema.suspend(() => PaymentMethodFamilySchema),
  ),
});
const PaymentOnAccountAmountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currency: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Number),
});
const PaymentMethodFamilySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "None",
  "CreditCard",
  "Credits",
  "CheckWire",
  "EWallet",
  "TaskOrder",
  "DirectDebit",
]);
const AvailableBalancePropertiesTotalPaymentsOnAccountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  });
const BillingPermissionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  actions: Schema.optional(Schema.Array(Schema.String)),
  notActions: Schema.optional(Schema.Array(Schema.String)),
});
const BillingProfileSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const BillingProfilePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    billingRelationshipType: Schema.optional(
      Schema.suspend(() => BillingRelationshipTypeSchema),
    ),
    billTo: Schema.optional(
      Schema.suspend(() => BillingProfilePropertiesBillToSchema),
    ),
    currency: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    enabledAzurePlans: Schema.optional(
      Schema.Array(Schema.suspend(() => AzurePlanSchema)),
    ),
    hasReadAccess: Schema.optional(Schema.Boolean),
    indirectRelationshipInfo: Schema.optional(
      Schema.suspend(
        () => BillingProfilePropertiesIndirectRelationshipInfoSchema,
      ),
    ),
    invoiceDay: Schema.optional(Schema.Number),
    invoiceEmailOptIn: Schema.optional(Schema.Boolean),
    invoiceRecipients: Schema.optional(Schema.Array(Schema.String)),
    poNumber: Schema.optional(Schema.String),
    shipTo: Schema.optional(
      Schema.suspend(() => BillingProfilePropertiesShipToSchema),
    ),
    soldTo: Schema.optional(
      Schema.suspend(() => BillingProfilePropertiesSoldToSchema),
    ),
    spendingLimit: Schema.optional(Schema.suspend(() => SpendingLimitSchema)),
    spendingLimitDetails: Schema.optional(
      Schema.Array(Schema.suspend(() => SpendingLimitDetailsSchema)),
    ),
    status: Schema.optional(Schema.suspend(() => BillingProfileStatusSchema)),
    statusReasonCode: Schema.optional(
      Schema.suspend(() => BillingProfileStatusReasonCodeSchema),
    ),
    systemId: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    targetClouds: Schema.optional(Schema.Array(Schema.String)),
    currentPaymentTerm: Schema.optional(
      Schema.suspend(() => BillingProfilePropertiesCurrentPaymentTermSchema),
    ),
    otherPaymentTerms: Schema.optional(
      Schema.Array(Schema.suspend(() => PaymentTermSchema)),
    ),
  });
const BillingProfilePropertiesBillToSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
const AzurePlanSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  productId: Schema.optional(Schema.String),
  skuId: Schema.optional(Schema.String),
  skuDescription: Schema.optional(Schema.String),
});
const BillingProfilePropertiesIndirectRelationshipInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.optional(Schema.String),
    billingProfileName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  });
const BillingProfilePropertiesShipToSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
const BillingProfilePropertiesSoldToSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
const SpendingLimitSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Off",
  "On",
]);
const SpendingLimitDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.optional(Schema.Number),
  currency: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  type: Schema.optional(Schema.suspend(() => SpendingLimitTypeSchema)),
  status: Schema.optional(Schema.suspend(() => SpendingLimitStatusSchema)),
});
const SpendingLimitTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
]);
const SpendingLimitStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "None",
  "Active",
  "Expired",
  "LimitReached",
  "LimitRemoved",
]);
const BillingProfileStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Active",
  "Disabled",
  "Warned",
  "Deleted",
  "UnderReview",
]);
const BillingProfileStatusReasonCodeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "PastDue",
    "UnusualActivity",
    "SpendingLimitReached",
    "SpendingLimitExpired",
  ]);
const BillingProfilePropertiesCurrentPaymentTermSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    term: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    isDefault: Schema.optional(Schema.Boolean),
  });
const PaymentTermSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  term: Schema.optional(Schema.String),
  startDate: Schema.optional(Schema.String),
  endDate: Schema.optional(Schema.String),
  isDefault: Schema.optional(Schema.Boolean),
});
const BillingRequestSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const BillingRoleAssignmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const BillingRoleAssignmentPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
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
    principalType: Schema.optional(Schema.suspend(() => PrincipalTypeSchema)),
    billingRequestId: Schema.optional(Schema.String),
    billingAccountId: Schema.optional(Schema.String),
    billingAccountDisplayName: Schema.optional(Schema.String),
    billingProfileId: Schema.optional(Schema.String),
    billingProfileDisplayName: Schema.optional(Schema.String),
    invoiceSectionId: Schema.optional(Schema.String),
    invoiceSectionDisplayName: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    customerDisplayName: Schema.optional(Schema.String),
  });
const PrincipalTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Unknown",
  "None",
  "User",
  "Group",
  "DirectoryRole",
  "ServicePrincipal",
  "Everyone",
]);
const BillingRoleDefinitionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const BillingRoleDefinitionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    permissions: Schema.optional(
      Schema.Array(Schema.suspend(() => BillingPermissionSchema)),
    ),
    roleName: Schema.String,
  });
const BillingSubscriptionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const BillingSubscriptionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoRenew: Schema.optional(Schema.suspend(() => AutoRenewSchema)),
    beneficiaryTenantId: Schema.optional(Schema.String),
    beneficiary: Schema.optional(Schema.suspend(() => BeneficiarySchema)),
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
      Schema.suspend(() => EnrollmentAccountSubscriptionDetailsSchema),
    ),
    invoiceSectionId: Schema.optional(Schema.String),
    invoiceSectionDisplayName: Schema.optional(Schema.String),
    invoiceSectionName: Schema.optional(Schema.String),
    lastMonthCharges: Schema.optional(Schema.suspend(() => AmountSchema)),
    monthToDateCharges: Schema.optional(Schema.suspend(() => AmountSchema)),
    nextBillingCycleDetails: Schema.optional(
      Schema.suspend(() => NextBillingCycleDetailsSchema),
    ),
    offerId: Schema.optional(Schema.String),
    productCategory: Schema.optional(Schema.String),
    productType: Schema.optional(Schema.String),
    productTypeId: Schema.optional(Schema.String),
    purchaseDate: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.Number),
    reseller: Schema.optional(Schema.suspend(() => ResellerSchema)),
    renewalTermDetails: Schema.optional(
      Schema.suspend(() => RenewalTermDetailsSchema),
    ),
    skuId: Schema.optional(Schema.String),
    skuDescription: Schema.optional(Schema.String),
    systemOverrides: Schema.optional(
      Schema.suspend(() => SystemOverridesSchema),
    ),
    resourceUri: Schema.optional(Schema.String),
    termDuration: Schema.optional(Schema.String),
    termStartDate: Schema.optional(Schema.String),
    termEndDate: Schema.optional(Schema.String),
    provisioningTenantId: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.suspend(() => BillingSubscriptionStatusSchema),
    ),
    operationStatus: Schema.optional(
      Schema.suspend(() => BillingSubscriptionOperationStatusSchema),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    subscriptionId: Schema.optional(Schema.String),
    suspensionReasons: Schema.optional(Schema.Array(Schema.String)),
    suspensionReasonDetails: Schema.optional(
      Schema.Array(
        Schema.suspend(() => BillingSubscriptionStatusDetailsSchema),
      ),
    ),
  });
const AutoRenewSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Off",
  "On",
]);
const BeneficiarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tenantId: Schema.optional(Schema.String),
  objectId: Schema.optional(Schema.String),
});
const EnrollmentAccountSubscriptionDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enrollmentAccountStartDate: Schema.optional(Schema.String),
    subscriptionEnrollmentAccountStatus: Schema.optional(
      Schema.suspend(() => SubscriptionEnrollmentAccountStatusSchema),
    ),
  });
const SubscriptionEnrollmentAccountStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Active",
    "Cancelled",
    "Expired",
    "Deleted",
    "TransferredOut",
    "Transferring",
    "Inactive",
  ]);
const AmountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currency: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Number),
});
const NextBillingCycleDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    billingFrequency: Schema.optional(Schema.String),
  },
);
const ResellerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  resellerId: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
});
const RenewalTermDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingFrequency: Schema.optional(Schema.String),
  productId: Schema.optional(Schema.String),
  productTypeId: Schema.optional(Schema.String),
  skuId: Schema.optional(Schema.String),
  termDuration: Schema.optional(Schema.String),
  quantity: Schema.optional(Schema.Number),
  termEndDate: Schema.optional(Schema.String),
});
const SystemOverridesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cancellation: Schema.optional(Schema.suspend(() => CancellationSchema)),
  cancellationAllowedEndDate: Schema.optional(Schema.String),
});
const CancellationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "NotAllowed",
  "Allowed",
]);
const BillingSubscriptionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
  ]);
const BillingSubscriptionOperationStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "None",
    "LockedForUpdate",
  ]);
const BillingSubscriptionStatusDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    effectiveDate: Schema.optional(Schema.String),
    reason: Schema.optional(
      Schema.suspend(() => SubscriptionStatusReasonSchema),
    ),
  });
const SubscriptionStatusReasonSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "Cancelled",
    "PastDue",
    "SuspiciousActivity",
    "Other",
    "Transferred",
    "PolicyViolation",
    "SpendingLimitReached",
    "Expired",
  ]);
const CheckAccessResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accessDecision: Schema.optional(Schema.suspend(() => AccessDecisionSchema)),
  action: Schema.optional(Schema.String),
});
const AccessDecisionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Allowed",
  "NotAllowed",
]);
const CustomerSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const CustomerPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingProfileDisplayName: Schema.optional(Schema.String),
  billingProfileId: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  systemId: Schema.optional(Schema.String),
  status: Schema.optional(Schema.suspend(() => CustomerStatusSchema)),
  enabledAzurePlans: Schema.optional(
    Schema.Array(Schema.suspend(() => AzurePlanSchema)),
  ),
  resellers: Schema.optional(
    Schema.Array(Schema.suspend(() => ResellerSchema)),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
});
const CustomerStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Active",
  "Pending",
  "Disabled",
  "Warned",
  "Deleted",
  "UnderReview",
]);
const CustomerPolicyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    viewCharges: Schema.suspend(() => ViewChargesPolicySchema),
    policies: Schema.optional(
      Schema.Array(Schema.suspend(() => PolicySummarySchema)),
    ),
  });
const ViewChargesPolicySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Allowed",
  "NotAllowed",
]);
const PolicySummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  value: Schema.optional(Schema.String),
  policyType: Schema.optional(Schema.suspend(() => PolicyTypeSchema)),
  scope: Schema.optional(Schema.String),
});
const PolicyTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "UserControlled",
  "SystemControlled",
]);
const TransactionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PartnerTransferDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PartnerTransferPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expirationTime: Schema.optional(Schema.String),
    transferStatus: Schema.optional(Schema.suspend(() => TransferStatusSchema)),
    recipientEmailId: Schema.optional(Schema.String),
    initiatorCustomerType: Schema.optional(
      Schema.suspend(() => InitiatorCustomerTypeSchema),
    ),
    initiatorEmailId: Schema.optional(Schema.String),
    resellerId: Schema.optional(Schema.String),
    resellerName: Schema.optional(Schema.String),
    canceledBy: Schema.optional(Schema.String),
    detailedTransferStatus: Schema.optional(
      Schema.Array(Schema.suspend(() => DetailedTransferStatusSchema)),
    ),
  });
const TransferStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Expired",
  "Pending",
  "InProgress",
  "Completed",
  "CompletedWithErrors",
  "Failed",
  "Canceled",
  "Declined",
]);
const InitiatorCustomerTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["Partner", "EA"],
);
const DetailedTransferStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  productType: Schema.optional(Schema.suspend(() => ProductTypeSchema)),
  productId: Schema.optional(Schema.String),
  productName: Schema.optional(Schema.String),
  skuDescription: Schema.optional(Schema.String),
  transferStatus: Schema.optional(
    Schema.suspend(() => ProductTransferStatusSchema),
  ),
  errorDetails: Schema.optional(Schema.suspend(() => TransferErrorSchema)),
});
const ProductTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "AzureSubscription",
  "AzureReservation",
  "Department",
  "SavingsPlan",
  "SAAS",
]);
const ProductTransferStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  ["NotStarted", "InProgress", "Completed", "Failed"],
);
const TransferErrorSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  code: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
});
const PartnerInitiateTransferPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recipientEmailId: Schema.optional(Schema.String),
    resellerId: Schema.optional(Schema.String),
  });
const InvoiceSectionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const InvoiceSectionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    displayName: Schema.optional(Schema.String),
    state: Schema.optional(Schema.suspend(() => InvoiceSectionStateSchema)),
    reasonCode: Schema.optional(
      Schema.suspend(() => InvoiceSectionStateReasonCodeSchema),
    ),
    systemId: Schema.optional(Schema.String),
    targetCloud: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
const InvoiceSectionStateSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Active",
  "Deleted",
  "Disabled",
  "UnderReview",
  "Warned",
  "Restricted",
]);
const InvoiceSectionStateReasonCodeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "PastDue",
    "UnusualActivity",
    "SpendingLimitReached",
    "SpendingLimitExpired",
  ]);
const ProductSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const TransferDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const TransferPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  expirationTime: Schema.optional(Schema.String),
  transferStatus: Schema.optional(Schema.suspend(() => TransferStatusSchema)),
  recipientEmailId: Schema.optional(Schema.String),
  initiatorEmailId: Schema.optional(Schema.String),
  canceledBy: Schema.optional(Schema.String),
  detailedTransferStatus: Schema.optional(
    Schema.Array(Schema.suspend(() => DetailedTransferStatusSchema)),
  ),
});
const InitiateTransferPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    recipientEmailId: Schema.optional(Schema.String),
  });
const DeleteInvoiceSectionEligibilityStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Allowed", "NotAllowed"]);
const DeleteInvoiceSectionEligibilityDetailSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(
      Schema.suspend(() => DeleteInvoiceSectionEligibilityCodeSchema),
    ),
    message: Schema.optional(Schema.String),
  });
const DeleteInvoiceSectionEligibilityCodeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "LastInvoiceSection",
    "ActiveAzurePlans",
    "ReservedInstances",
    "ActiveBillingSubscriptions",
  ]);
const InvoiceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PaymentMethodLinkSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const PaymentMethodLinkPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    accountHolderName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    expiration: Schema.optional(Schema.String),
    family: Schema.optional(Schema.suspend(() => PaymentMethodFamilySchema)),
    lastFourDigits: Schema.optional(Schema.String),
    logos: Schema.optional(
      Schema.Array(Schema.suspend(() => PaymentMethodLogoSchema)),
    ),
    paymentMethod: Schema.optional(
      Schema.suspend(() => PaymentMethodPropertiesSchema),
    ),
    paymentMethodId: Schema.optional(Schema.String),
    paymentMethodType: Schema.optional(Schema.String),
    status: Schema.optional(Schema.suspend(() => PaymentMethodStatusSchema)),
  });
const PaymentMethodLogoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mimeType: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
});
const PaymentMethodPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.optional(Schema.String),
    accountHolderName: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    expiration: Schema.optional(Schema.String),
    family: Schema.optional(Schema.suspend(() => PaymentMethodFamilySchema)),
    lastFourDigits: Schema.optional(Schema.String),
    logos: Schema.optional(
      Schema.Array(Schema.suspend(() => PaymentMethodLogoSchema)),
    ),
    paymentMethodType: Schema.optional(Schema.String),
    status: Schema.optional(Schema.suspend(() => PaymentMethodStatusSchema)),
  },
);
const PaymentMethodStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "active",
  "inactive",
]);
const BillingProfilePolicyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    enterpriseAgreementPolicies: Schema.optional(
      Schema.suspend(
        () => BillingProfilePolicyPropertiesEnterpriseAgreementPoliciesSchema,
      ),
    ),
    invoiceSectionLabelManagement: Schema.optional(
      Schema.suspend(() => InvoiceSectionLabelManagementPolicySchema),
    ),
    marketplacePurchases: Schema.optional(
      Schema.suspend(() => MarketplacePurchasesPolicySchema),
    ),
    reservationPurchases: Schema.optional(
      Schema.suspend(() => ReservationPurchasesPolicySchema),
    ),
    savingsPlanPurchases: Schema.optional(
      Schema.suspend(() => SavingsPlanPurchasesPolicySchema),
    ),
    viewCharges: Schema.optional(Schema.suspend(() => ViewChargesPolicySchema)),
    policies: Schema.optional(
      Schema.Array(Schema.suspend(() => PolicySummarySchema)),
    ),
  });
const BillingProfilePolicyPropertiesEnterpriseAgreementPoliciesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authenticationType: Schema.optional(
      Schema.suspend(() => EnrollmentAuthLevelStateSchema),
    ),
    accountOwnerViewCharges: Schema.optional(
      Schema.suspend(() => EnrollmentAccountOwnerViewChargesSchema),
    ),
    departmentAdminViewCharges: Schema.optional(
      Schema.suspend(() => EnrollmentDepartmentAdminViewChargesSchema),
    ),
  });
const EnrollmentAuthLevelStateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "MicrosoftAccountOnly",
    "MixedAccount",
    "OrganizationalAccountCrossTenant",
    "OrganizationalAccountOnly",
  ]);
const EnrollmentAccountOwnerViewChargesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "Allowed",
    "Disabled",
    "NotAllowed",
  ]);
const EnrollmentDepartmentAdminViewChargesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "Allowed",
    "Disabled",
    "NotAllowed",
  ]);
const InvoiceSectionLabelManagementPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "Allowed",
    "NotAllowed",
  ]);
const MarketplacePurchasesPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "AllAllowed",
    "Disabled",
    "NotAllowed",
    "OnlyFreeAllowed",
  ]);
const ReservationPurchasesPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "Allowed",
    "Disabled",
    "NotAllowed",
  ]);
const SavingsPlanPurchasesPolicySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "Other",
    "Allowed",
    "Disabled",
    "NotAllowed",
  ]);
const ReservationSummarySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cancelledCount: Schema.optional(Schema.Number),
  expiredCount: Schema.optional(Schema.Number),
  expiringCount: Schema.optional(Schema.Number),
  failedCount: Schema.optional(Schema.Number),
  pendingCount: Schema.optional(Schema.Number),
  succeededCount: Schema.optional(Schema.Number),
  noBenefitCount: Schema.optional(Schema.Number),
  warningCount: Schema.optional(Schema.Number),
  processingCount: Schema.optional(Schema.Number),
});
const ReservationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const DeleteBillingProfileEligibilityStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Allowed", "NotAllowed"]);
const DeleteBillingProfileEligibilityDetailSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(
      Schema.suspend(() => DeleteBillingProfileEligibilityCodeSchema),
    ),
    message: Schema.optional(Schema.String),
  });
const DeleteBillingProfileEligibilityCodeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "ActiveCredits",
    "ActiveCreditCard",
    "LastBillingProfile",
    "NotSupported",
    "OutstandingCharges",
    "PendingCharges",
    "ReservedInstances",
    "ActiveBillingSubscriptions",
  ]);
const BillingSubscriptionAliasSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const BillingSubscriptionAliasPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    autoRenew: Schema.optional(Schema.suspend(() => AutoRenewSchema)),
    beneficiaryTenantId: Schema.optional(Schema.String),
    beneficiary: Schema.optional(Schema.suspend(() => BeneficiarySchema)),
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
      Schema.suspend(() => EnrollmentAccountSubscriptionDetailsSchema),
    ),
    invoiceSectionId: Schema.optional(Schema.String),
    invoiceSectionDisplayName: Schema.optional(Schema.String),
    invoiceSectionName: Schema.optional(Schema.String),
    lastMonthCharges: Schema.optional(Schema.suspend(() => AmountSchema)),
    monthToDateCharges: Schema.optional(Schema.suspend(() => AmountSchema)),
    nextBillingCycleDetails: Schema.optional(
      Schema.suspend(() => NextBillingCycleDetailsSchema),
    ),
    offerId: Schema.optional(Schema.String),
    productCategory: Schema.optional(Schema.String),
    productType: Schema.optional(Schema.String),
    productTypeId: Schema.optional(Schema.String),
    purchaseDate: Schema.optional(Schema.String),
    quantity: Schema.optional(Schema.Number),
    reseller: Schema.optional(Schema.suspend(() => ResellerSchema)),
    renewalTermDetails: Schema.optional(
      Schema.suspend(() => RenewalTermDetailsSchema),
    ),
    skuId: Schema.optional(Schema.String),
    skuDescription: Schema.optional(Schema.String),
    systemOverrides: Schema.optional(
      Schema.suspend(() => SystemOverridesSchema),
    ),
    resourceUri: Schema.optional(Schema.String),
    termDuration: Schema.optional(Schema.String),
    termStartDate: Schema.optional(Schema.String),
    termEndDate: Schema.optional(Schema.String),
    provisioningTenantId: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.suspend(() => BillingSubscriptionStatusSchema),
    ),
    operationStatus: Schema.optional(
      Schema.suspend(() => BillingSubscriptionOperationStatusSchema),
    ),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    subscriptionId: Schema.optional(Schema.String),
    suspensionReasons: Schema.optional(Schema.Array(Schema.String)),
    suspensionReasonDetails: Schema.optional(
      Schema.Array(
        Schema.suspend(() => BillingSubscriptionStatusDetailsSchema),
      ),
    ),
  });
const CancellationReasonSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Compromise",
  "Dispute",
]);
const MoveBillingSubscriptionErrorDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(
      Schema.suspend(() => SubscriptionTransferValidationErrorCodeSchema),
    ),
    message: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
  });
const SubscriptionTransferValidationErrorCodeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
  ]);
const DepartmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const DepartmentPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  costCenter: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
});
const EnrollmentAccountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const EnrollmentAccountPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    costCenter: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    departmentDisplayName: Schema.optional(Schema.String),
    departmentId: Schema.optional(Schema.String),
    isDevTestEnabled: Schema.optional(Schema.Boolean),
    accountOwner: Schema.optional(Schema.String),
    authType: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
  });
const InvoicePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amountDue: Schema.optional(
    Schema.suspend(() => InvoicePropertiesAmountDueSchema),
  ),
  azurePrepaymentApplied: Schema.optional(
    Schema.suspend(() => InvoicePropertiesAzurePrepaymentAppliedSchema),
  ),
  billedAmount: Schema.optional(
    Schema.suspend(() => InvoicePropertiesBilledAmountSchema),
  ),
  billedDocumentId: Schema.optional(Schema.String),
  billingProfileDisplayName: Schema.optional(Schema.String),
  billingProfileId: Schema.optional(Schema.String),
  creditAmount: Schema.optional(
    Schema.suspend(() => InvoicePropertiesCreditAmountSchema),
  ),
  creditForDocumentId: Schema.optional(Schema.String),
  documents: Schema.optional(
    Schema.Array(Schema.suspend(() => InvoiceDocumentSchema)),
  ),
  documentType: Schema.optional(
    Schema.suspend(() => InvoiceDocumentTypeSchema),
  ),
  dueDate: Schema.optional(Schema.String),
  failedPayments: Schema.optional(
    Schema.Array(Schema.suspend(() => FailedPaymentSchema)),
  ),
  freeAzureCreditApplied: Schema.optional(
    Schema.suspend(() => InvoicePropertiesFreeAzureCreditAppliedSchema),
  ),
  invoiceDate: Schema.optional(Schema.String),
  invoicePeriodEndDate: Schema.optional(Schema.String),
  invoicePeriodStartDate: Schema.optional(Schema.String),
  invoiceType: Schema.optional(Schema.suspend(() => InvoiceTypeSchema)),
  isMonthlyInvoice: Schema.optional(Schema.Boolean),
  payments: Schema.optional(Schema.Array(Schema.suspend(() => PaymentSchema))),
  purchaseOrderNumber: Schema.optional(Schema.String),
  rebillDetails: Schema.optional(
    Schema.suspend(() => InvoicePropertiesRebillDetailsSchema),
  ),
  status: Schema.optional(Schema.suspend(() => InvoiceStatusSchema)),
  subscriptionDisplayName: Schema.optional(Schema.String),
  subscriptionId: Schema.optional(Schema.String),
  specialTaxationType: Schema.optional(
    Schema.suspend(() => SpecialTaxationTypeSchema),
  ),
  subTotal: Schema.optional(
    Schema.suspend(() => InvoicePropertiesSubTotalSchema),
  ),
  taxAmount: Schema.optional(
    Schema.suspend(() => InvoicePropertiesTaxAmountSchema),
  ),
  totalAmount: Schema.optional(
    Schema.suspend(() => InvoicePropertiesTotalAmountSchema),
  ),
  refundDetails: Schema.optional(
    Schema.suspend(() => InvoicePropertiesRefundDetailsSchema),
  ),
});
const InvoicePropertiesAmountDueSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  });
const InvoicePropertiesAzurePrepaymentAppliedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  });
const InvoicePropertiesBilledAmountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  });
const InvoicePropertiesCreditAmountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  });
const InvoiceDocumentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  documentNumbers: Schema.optional(Schema.Array(Schema.String)),
  externalUrl: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.suspend(() => InvoiceDocumentTypeSchema)),
  name: Schema.optional(Schema.String),
  url: Schema.optional(Schema.String),
  source: Schema.optional(Schema.suspend(() => DocumentSourceSchema)),
});
const InvoiceDocumentTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Invoice",
  "VoidNote",
  "TaxReceipt",
  "CreditNote",
  "Summary",
  "Transactions",
]);
const DocumentSourceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "DRS",
  "ENF",
]);
const FailedPaymentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  date: Schema.optional(Schema.String),
  failedPaymentReason: Schema.optional(
    Schema.suspend(() => FailedPaymentReasonSchema),
  ),
});
const FailedPaymentReasonSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "BankDeclined",
  "CardExpired",
  "IncorrectCardDetails",
]);
const InvoicePropertiesFreeAzureCreditAppliedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  });
const InvoiceTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "AzureServices",
  "AzureMarketplace",
  "AzureSupport",
]);
const PaymentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  amount: Schema.optional(Schema.suspend(() => PaymentAmountSchema)),
  date: Schema.optional(Schema.String),
  paymentMethodId: Schema.optional(Schema.String),
  paymentMethodFamily: Schema.optional(
    Schema.suspend(() => PaymentMethodFamilySchema),
  ),
  paymentMethodType: Schema.optional(Schema.String),
  paymentType: Schema.optional(Schema.String),
});
const PaymentAmountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currency: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Number),
});
const InvoicePropertiesRebillDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    invoiceDocumentId: Schema.optional(Schema.String),
    creditNoteDocumentId: Schema.optional(Schema.String),
    rebillDetails: Schema.optional(Schema.suspend(() => RebillDetailsSchema)),
  });
const RebillDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  invoiceDocumentId: Schema.optional(Schema.String),
  creditNoteDocumentId: Schema.optional(Schema.String),
  rebillDetails: Schema.optional(Schema.Unknown),
});
const InvoiceStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Due",
  "OverDue",
  "Paid",
  "Void",
  "Locked",
]);
const SpecialTaxationTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "SubtotalLevel",
  "InvoiceLevel",
]);
const InvoicePropertiesSubTotalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  });
const InvoicePropertiesTaxAmountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  });
const InvoicePropertiesTotalAmountSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  });
const InvoicePropertiesRefundDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    requestedOn: Schema.optional(Schema.String),
    approvedOn: Schema.optional(Schema.String),
    completedOn: Schema.optional(Schema.String),
    amountRequested: Schema.optional(
      Schema.suspend(() => RefundDetailsSummaryAmountRequestedSchema),
    ),
    amountRefunded: Schema.optional(
      Schema.suspend(() => RefundDetailsSummaryAmountRefundedSchema),
    ),
    rebillInvoiceId: Schema.optional(Schema.String),
    transactionCount: Schema.optional(Schema.Number),
    refundStatus: Schema.optional(Schema.suspend(() => RefundStatusSchema)),
    refundOperationId: Schema.optional(Schema.String),
    refundReason: Schema.optional(Schema.suspend(() => RefundReasonCodeSchema)),
  });
const RefundDetailsSummaryAmountRequestedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  });
const RefundDetailsSummaryAmountRefundedSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  });
const RefundStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Pending",
  "Approved",
  "Declined",
  "Cancelled",
  "Completed",
  "Expired",
]);
const RefundReasonCodeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "AccidentalConversion",
  "UnclearPricing",
  "AccidentalPurchase",
  "ForgotToCancel",
  "UnclearDocumentation",
]);
const InvoiceSectionWithCreateSubPermissionSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingProfileDisplayName: Schema.optional(Schema.String),
    billingProfileId: Schema.optional(Schema.String),
    billingProfileSystemId: Schema.optional(Schema.String),
    billingProfileStatus: Schema.optional(
      Schema.suspend(() => BillingProfileStatusSchema),
    ),
    billingProfileStatusReasonCode: Schema.optional(
      Schema.suspend(() => BillingProfileStatusReasonCodeSchema),
    ),
    billingProfileSpendingLimit: Schema.optional(
      Schema.suspend(() => SpendingLimitSchema),
    ),
    enabledAzurePlans: Schema.optional(
      Schema.Array(Schema.suspend(() => AzurePlanSchema)),
    ),
    invoiceSectionDisplayName: Schema.optional(Schema.String),
    invoiceSectionId: Schema.optional(Schema.String),
    invoiceSectionSystemId: Schema.optional(Schema.String),
  });
const PaymentMethodSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const BillingAccountPolicyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    enterpriseAgreementPolicies: Schema.optional(
      Schema.suspend(
        () => BillingAccountPolicyPropertiesEnterpriseAgreementPoliciesSchema,
      ),
    ),
    marketplacePurchases: Schema.optional(
      Schema.suspend(() => MarketplacePurchasesPolicySchema),
    ),
    reservationPurchases: Schema.optional(
      Schema.suspend(() => ReservationPurchasesPolicySchema),
    ),
    savingsPlanPurchases: Schema.optional(
      Schema.suspend(() => SavingsPlanPurchasesPolicySchema),
    ),
    policies: Schema.optional(
      Schema.Array(Schema.suspend(() => PolicySummarySchema)),
    ),
  });
const BillingAccountPolicyPropertiesEnterpriseAgreementPoliciesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    authenticationType: Schema.optional(
      Schema.suspend(() => EnrollmentAuthLevelStateSchema),
    ),
    accountOwnerViewCharges: Schema.optional(
      Schema.suspend(() => EnrollmentAccountOwnerViewChargesSchema),
    ),
    departmentAdminViewCharges: Schema.optional(
      Schema.suspend(() => EnrollmentDepartmentAdminViewChargesSchema),
    ),
  });
const ProductPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  autoRenew: Schema.optional(Schema.suspend(() => AutoRenewSchema)),
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
    Schema.suspend(() => ProductPropertiesLastChargeSchema),
  ),
  lastChargeDate: Schema.optional(Schema.String),
  productType: Schema.optional(Schema.String),
  productTypeId: Schema.optional(Schema.String),
  skuId: Schema.optional(Schema.String),
  skuDescription: Schema.optional(Schema.String),
  purchaseDate: Schema.optional(Schema.String),
  quantity: Schema.optional(Schema.Number),
  status: Schema.optional(Schema.suspend(() => ProductStatusSchema)),
  tenantId: Schema.optional(Schema.String),
  reseller: Schema.optional(
    Schema.suspend(() => ProductPropertiesResellerSchema),
  ),
});
const ProductPropertiesLastChargeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    currency: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
  });
const ProductStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
]);
const ProductPropertiesResellerSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resellerId: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
  });
const MoveProductEligibilityResultErrorDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.suspend(() => MoveValidationErrorCodeSchema)),
    message: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
  });
const MoveValidationErrorCodeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
  ]);
const ReservationOrderSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const ReservationOrderPropertySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    enrollmentId: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    billingProfileId: Schema.optional(Schema.String),
    billingAccountId: Schema.optional(Schema.String),
    requestDateTime: Schema.optional(Schema.String),
    createdDateTime: Schema.optional(Schema.String),
    expiryDate: Schema.optional(Schema.String),
    expiryDateTime: Schema.optional(Schema.String),
    benefitStartTime: Schema.optional(Schema.String),
    originalQuantity: Schema.optional(Schema.Number),
    term: Schema.optional(Schema.String),
    provisioningState: Schema.optional(Schema.String),
    billingPlan: Schema.optional(
      Schema.suspend(() => ReservationBillingPlanSchema),
    ),
    planInformation: Schema.optional(
      Schema.suspend(() => ReservationOrderBillingPlanInformationSchema),
    ),
    reservations: Schema.optional(
      Schema.Array(Schema.suspend(() => ReservationSchema)),
    ),
    reviewDateTime: Schema.optional(Schema.String),
    extendedStatusInfo: Schema.optional(
      Schema.suspend(() => ReservationExtendedStatusInfoSchema),
    ),
    productCode: Schema.optional(Schema.String),
  });
const ReservationBillingPlanSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Upfront", "Monthly"]);
const ReservationOrderBillingPlanInformationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pricingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
    startDate: Schema.optional(Schema.String),
    nextPaymentDueDate: Schema.optional(Schema.String),
    transactions: Schema.optional(
      Schema.Array(Schema.suspend(() => ReservationPaymentDetailSchema)),
    ),
  });
const PriceSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currencyCode: Schema.optional(Schema.String),
  amount: Schema.optional(Schema.Number),
});
const ReservationPaymentDetailSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dueDate: Schema.optional(Schema.String),
    paymentDate: Schema.optional(Schema.String),
    pricingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
    billingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
    billingAccount: Schema.optional(Schema.String),
    status: Schema.optional(Schema.suspend(() => PaymentStatusSchema)),
    extendedStatusInfo: Schema.optional(
      Schema.suspend(() => ReservationExtendedStatusInfoSchema),
    ),
  });
const PaymentStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Succeeded",
  "Failed",
  "Scheduled",
  "Cancelled",
  "Completed",
  "Pending",
]);
const ReservationExtendedStatusInfoSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    statusCode: Schema.optional(
      Schema.suspend(() => ReservationStatusCodeSchema),
    ),
    message: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => ExtendedStatusDefinitionPropertiesSchema),
    ),
  });
const ReservationStatusCodeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(
  [
    "None",
    "Pending",
    "Processing",
    "Active",
    "PurchaseError",
    "PaymentInstrumentError",
    "Split",
    "Merged",
    "Expired",
    "Succeeded",
    "CapacityError",
    "CapacityRestricted",
    "Exchanged",
    "UnknownError",
    "RiskCheckFailed",
    "CreditLineCheckFailed",
    "Warning",
    "NoBenefitDueToSubscriptionTransfer",
    "NoBenefitDueToSubscriptionDeletion",
    "NoBenefit",
  ],
);
const ExtendedStatusDefinitionPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.optional(Schema.String),
  });
const ReservationPropertySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  reservedResourceType: Schema.optional(Schema.String),
  instanceFlexibility: Schema.optional(
    Schema.suspend(() => InstanceFlexibilitySchema),
  ),
  displayName: Schema.optional(Schema.String),
  appliedScopes: Schema.optional(Schema.Array(Schema.String)),
  appliedScopeType: Schema.optional(Schema.String),
  archived: Schema.optional(Schema.Boolean),
  capabilities: Schema.optional(Schema.String),
  quantity: Schema.optional(Schema.Number),
  provisioningState: Schema.optional(Schema.String),
  effectiveDateTime: Schema.optional(Schema.String),
  benefitStartTime: Schema.optional(Schema.String),
  lastUpdatedDateTime: Schema.optional(Schema.String),
  expiryDate: Schema.optional(Schema.String),
  expiryDateTime: Schema.optional(Schema.String),
  reviewDateTime: Schema.optional(Schema.String),
  skuDescription: Schema.optional(Schema.String),
  extendedStatusInfo: Schema.optional(
    Schema.suspend(() => ReservationExtendedStatusInfoSchema),
  ),
  billingPlan: Schema.optional(
    Schema.suspend(() => ReservationBillingPlanSchema),
  ),
  displayProvisioningState: Schema.optional(Schema.String),
  provisioningSubState: Schema.optional(Schema.String),
  purchaseDate: Schema.optional(Schema.String),
  purchaseDateTime: Schema.optional(Schema.String),
  splitProperties: Schema.optional(
    Schema.suspend(() => ReservationSplitPropertiesSchema),
  ),
  mergeProperties: Schema.optional(
    Schema.suspend(() => ReservationMergePropertiesSchema),
  ),
  swapProperties: Schema.optional(
    Schema.suspend(() => ReservationSwapPropertiesSchema),
  ),
  appliedScopeProperties: Schema.optional(
    Schema.suspend(() => ReservationAppliedScopePropertiesSchema),
  ),
  billingScopeId: Schema.optional(Schema.String),
  renew: Schema.optional(Schema.Boolean),
  renewSource: Schema.optional(Schema.String),
  renewDestination: Schema.optional(Schema.String),
  renewProperties: Schema.optional(
    Schema.suspend(() => RenewPropertiesResponseSchema),
  ),
  term: Schema.optional(Schema.String),
  userFriendlyAppliedScopeType: Schema.optional(Schema.String),
  userFriendlyRenewState: Schema.optional(Schema.String),
  utilization: Schema.optional(
    Schema.suspend(() => ReservationPropertyUtilizationSchema),
  ),
  productCode: Schema.optional(Schema.String),
});
const InstanceFlexibilitySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "On",
  "Off",
]);
const ReservationSplitPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    splitDestinations: Schema.optional(Schema.Array(Schema.String)),
    splitSource: Schema.optional(Schema.String),
  });
const ReservationMergePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mergeDestination: Schema.optional(Schema.String),
    mergeSources: Schema.optional(Schema.Array(Schema.String)),
  });
const ReservationSwapPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    swapSource: Schema.optional(Schema.String),
    swapDestination: Schema.optional(Schema.String),
  });
const ReservationAppliedScopePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenantId: Schema.optional(Schema.String),
    managementGroupId: Schema.optional(Schema.String),
    subscriptionId: Schema.optional(Schema.String),
    resourceGroupId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  });
const RenewPropertiesResponseSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    purchaseProperties: Schema.optional(
      Schema.suspend(() => ReservationPurchaseRequestSchema),
    ),
    pricingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
    billingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
  },
);
const ReservationPurchaseRequestSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sku: Schema.optional(Schema.suspend(() => SkuNameSchema)),
    location: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.suspend(() => ReservationPurchaseRequestPropertiesSchema),
    ),
  });
const SkuNameSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
});
const ReservationPurchaseRequestPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    reservedResourceType: Schema.optional(Schema.String),
    billingScopeId: Schema.optional(Schema.String),
    term: Schema.optional(Schema.String),
    billingPlan: Schema.optional(
      Schema.suspend(() => ReservationBillingPlanSchema),
    ),
    quantity: Schema.optional(Schema.Number),
    displayName: Schema.optional(Schema.String),
    appliedScopeType: Schema.optional(
      Schema.suspend(() => AppliedScopeTypeSchema),
    ),
    appliedScopes: Schema.optional(Schema.Array(Schema.String)),
    appliedScopeProperties: Schema.optional(
      Schema.suspend(() => ReservationAppliedScopePropertiesSchema),
    ),
    renew: Schema.optional(Schema.Boolean),
    reservedResourceProperties: Schema.optional(
      Schema.suspend(
        () =>
          ReservationPurchaseRequestPropertiesReservedResourcePropertiesSchema,
      ),
    ),
    instanceFlexibility: Schema.optional(
      Schema.suspend(() => InstanceFlexibilitySchema),
    ),
    reviewDateTime: Schema.optional(Schema.String),
  });
const AppliedScopeTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Single",
  "Shared",
  "ManagementGroup",
]);
const ReservationPurchaseRequestPropertiesReservedResourcePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceFlexibility: Schema.optional(
      Schema.suspend(() => InstanceFlexibilitySchema),
    ),
  });
const ReservationPropertyUtilizationSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    trend: Schema.optional(Schema.String),
    aggregates: Schema.optional(
      Schema.Array(
        Schema.suspend(() => ReservationUtilizationAggregatesSchema),
      ),
    ),
  });
const ReservationUtilizationAggregatesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    grain: Schema.optional(Schema.Number),
    grainUnit: Schema.optional(Schema.String),
    value: Schema.optional(Schema.Number),
    valueUnit: Schema.optional(Schema.String),
  });
const ReservationSkuPropertySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
});
const PatchPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appliedScopeType: Schema.optional(
    Schema.suspend(() => AppliedScopeTypeSchema),
  ),
  appliedScopeProperties: Schema.optional(
    Schema.suspend(() => ReservationAppliedScopePropertiesSchema),
  ),
  instanceFlexibility: Schema.optional(
    Schema.suspend(() => InstanceFlexibilitySchema),
  ),
  displayName: Schema.optional(Schema.String),
  renew: Schema.optional(Schema.Boolean),
  renewProperties: Schema.optional(
    Schema.suspend(() => PatchPropertiesRenewPropertiesSchema),
  ),
  reviewDateTime: Schema.optional(Schema.String),
});
const PatchPropertiesRenewPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    purchaseProperties: Schema.optional(
      Schema.suspend(() => ReservationPurchaseRequestSchema),
    ),
  });
const SavingsPlanOrderModelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SavingsPlanOrderModelPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    provisioningState: Schema.optional(Schema.String),
    billingScopeId: Schema.optional(Schema.String),
    billingProfileId: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    billingAccountId: Schema.optional(Schema.String),
    term: Schema.optional(Schema.suspend(() => SavingsPlanTermSchema)),
    billingPlan: Schema.optional(Schema.suspend(() => BillingPlanSchema)),
    benefitStartTime: Schema.optional(Schema.String),
    expiryDateTime: Schema.optional(Schema.String),
    planInformation: Schema.optional(
      Schema.suspend(() => BillingPlanInformationSchema),
    ),
    savingsPlans: Schema.optional(Schema.Array(Schema.String)),
    extendedStatusInfo: Schema.optional(
      Schema.suspend(() => ExtendedStatusInfoSchema),
    ),
    productCode: Schema.optional(Schema.String),
  });
const SavingsPlanTermSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "P1Y",
  "P3Y",
  "P5Y",
]);
const BillingPlanSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["P1M"]);
const BillingPlanInformationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pricingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
  startDate: Schema.optional(Schema.String),
  nextPaymentDueDate: Schema.optional(Schema.String),
  transactions: Schema.optional(
    Schema.Array(Schema.suspend(() => PaymentDetailSchema)),
  ),
});
const PaymentDetailSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dueDate: Schema.optional(Schema.String),
  paymentDate: Schema.optional(Schema.String),
  pricingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
  billingCurrencyTotal: Schema.optional(Schema.suspend(() => PriceSchema)),
  status: Schema.optional(Schema.suspend(() => PaymentStatusSchema)),
  extendedStatusInfo: Schema.optional(
    Schema.suspend(() => ExtendedStatusInfoSchema),
  ),
});
const ExtendedStatusInfoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  statusCode: Schema.optional(Schema.String),
  message: Schema.optional(Schema.String),
  properties: Schema.optional(
    Schema.suspend(() => ExtendedStatusInfoPropertiesSchema),
  ),
});
const ExtendedStatusInfoPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.optional(Schema.String),
  });
const SkuSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
});
const SavingsPlanModelSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
const SavingsPlanModelPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    displayProvisioningState: Schema.optional(Schema.String),
    userFriendlyAppliedScopeType: Schema.optional(Schema.String),
    billingScopeId: Schema.optional(Schema.String),
    billingProfileId: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    billingAccountId: Schema.optional(Schema.String),
    term: Schema.optional(Schema.suspend(() => SavingsPlanTermSchema)),
    renew: Schema.optional(Schema.Boolean),
    renewSource: Schema.optional(Schema.String),
    renewDestination: Schema.optional(Schema.String),
    renewProperties: Schema.optional(
      Schema.suspend(() => RenewPropertiesSchema),
    ),
    billingPlan: Schema.optional(Schema.suspend(() => BillingPlanSchema)),
    appliedScopeType: Schema.optional(
      Schema.suspend(() => AppliedScopeTypeSchema),
    ),
    appliedScopeProperties: Schema.optional(
      Schema.suspend(() => AppliedScopePropertiesSchema),
    ),
    commitment: Schema.optional(Schema.suspend(() => CommitmentSchema)),
    effectiveDateTime: Schema.optional(Schema.String),
    benefitStartTime: Schema.optional(Schema.String),
    expiryDateTime: Schema.optional(Schema.String),
    purchaseDateTime: Schema.optional(Schema.String),
    utilization: Schema.optional(Schema.suspend(() => UtilizationSchema)),
    extendedStatusInfo: Schema.optional(
      Schema.suspend(() => ExtendedStatusInfoSchema),
    ),
    productCode: Schema.optional(Schema.String),
  });
const RenewPropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  purchaseProperties: Schema.optional(
    Schema.suspend(() => PurchaseRequestSchema),
  ),
});
const PurchaseRequestSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  sku: Schema.optional(Schema.suspend(() => SkuSchema)),
  properties: Schema.optional(
    Schema.suspend(() => PurchaseRequestPropertiesSchema),
  ),
});
const PurchaseRequestPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    billingScopeId: Schema.optional(Schema.String),
    term: Schema.optional(Schema.suspend(() => SavingsPlanTermSchema)),
    billingPlan: Schema.optional(Schema.suspend(() => BillingPlanSchema)),
    appliedScopeType: Schema.optional(
      Schema.suspend(() => AppliedScopeTypeSchema),
    ),
    commitment: Schema.optional(Schema.suspend(() => CommitmentSchema)),
    renew: Schema.optional(Schema.Boolean),
    appliedScopeProperties: Schema.optional(
      Schema.suspend(() => AppliedScopePropertiesSchema),
    ),
  });
const CommitmentSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  currencyCode: Schema.optional(Schema.String),
  amount: Schema.optional(Schema.Number),
});
const AppliedScopePropertiesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tenantId: Schema.optional(Schema.String),
  managementGroupId: Schema.optional(Schema.String),
  subscriptionId: Schema.optional(Schema.String),
  resourceGroupId: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
});
const UtilizationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  trend: Schema.optional(Schema.String),
  aggregates: Schema.optional(
    Schema.Array(Schema.suspend(() => UtilizationAggregatesSchema)),
  ),
});
const UtilizationAggregatesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  grain: Schema.optional(Schema.Number),
  grainUnit: Schema.optional(Schema.String),
  value: Schema.optional(Schema.Number),
  valueUnit: Schema.optional(Schema.String),
});
const SavingsPlanUpdateRequestPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    appliedScopeType: Schema.optional(
      Schema.suspend(() => AppliedScopeTypeSchema),
    ),
    appliedScopeProperties: Schema.optional(
      Schema.suspend(() => AppliedScopePropertiesSchema),
    ),
    renew: Schema.optional(Schema.Boolean),
    renewProperties: Schema.optional(
      Schema.suspend(() => RenewPropertiesSchema),
    ),
  });
const SavingsPlanValidResponsePropertySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    valid: Schema.optional(Schema.Boolean),
    reasonCode: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
  });
const SavingsPlanSummaryCountSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    succeededCount: Schema.optional(Schema.Number),
    failedCount: Schema.optional(Schema.Number),
    expiringCount: Schema.optional(Schema.Number),
    expiredCount: Schema.optional(Schema.Number),
    pendingCount: Schema.optional(Schema.Number),
    cancelledCount: Schema.optional(Schema.Number),
    processingCount: Schema.optional(Schema.Number),
    noBenefitCount: Schema.optional(Schema.Number),
    warningCount: Schema.optional(Schema.Number),
  },
);
const PaymentTermsEligibilityStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Other", "Valid", "Invalid"]);
const PaymentTermsEligibilityDetailSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(
      Schema.suspend(() => PaymentTermsEligibilityCodeSchema),
    ),
    message: Schema.optional(Schema.String),
  });
const PaymentTermsEligibilityCodeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
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
  ]);
const BillingRequestPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    additionalInformation: Schema.optional(
      Schema.Record(Schema.String, Schema.String),
    ),
    reviewedBy: Schema.optional(
      Schema.suspend(() => BillingRequestPropertiesReviewedBySchema),
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
      Schema.suspend(() => BillingRequestPropertiesCreatedBySchema),
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
      Schema.Array(Schema.suspend(() => PrincipalSchema)),
    ),
    requestScope: Schema.optional(Schema.String),
    billingScope: Schema.optional(Schema.String),
    status: Schema.optional(Schema.suspend(() => BillingRequestStatusSchema)),
    type: Schema.optional(Schema.suspend(() => BillingRequestTypeSchema)),
    lastUpdatedBy: Schema.optional(
      Schema.suspend(() => BillingRequestPropertiesLastUpdatedBySchema),
    ),
    lastUpdatedDate: Schema.optional(Schema.String),
  });
const BillingRequestPropertiesReviewedBySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenantId: Schema.optional(Schema.String),
    objectId: Schema.optional(Schema.String),
    upn: Schema.optional(Schema.String),
  });
const BillingRequestPropertiesCreatedBySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenantId: Schema.optional(Schema.String),
    objectId: Schema.optional(Schema.String),
    upn: Schema.optional(Schema.String),
  });
const PrincipalSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  tenantId: Schema.optional(Schema.String),
  objectId: Schema.optional(Schema.String),
  upn: Schema.optional(Schema.String),
});
const BillingRequestStatusSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "Pending",
  "Approved",
  "Declined",
  "Cancelled",
  "Completed",
  "Expired",
]);
const BillingRequestTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "Other",
  "InvoiceAccess",
  "ProvisioningAccess",
  "RoleAssignment",
  "UpdateBillingPolicy",
]);
const BillingRequestPropertiesLastUpdatedBySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tenantId: Schema.optional(Schema.String),
    objectId: Schema.optional(Schema.String),
    upn: Schema.optional(Schema.String),
  });
const OperationSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  isDataAction: Schema.optional(Schema.Boolean),
  display: Schema.optional(Schema.suspend(() => OperationDisplaySchema)),
});
const OperationDisplaySchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  description: Schema.optional(Schema.String),
  operation: Schema.optional(Schema.String),
  provider: Schema.optional(Schema.String),
  resource: Schema.optional(Schema.String),
});
const RecipientTransferDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
const RecipientTransferPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expirationTime: Schema.optional(Schema.String),
    allowedProductType: Schema.optional(
      Schema.Array(Schema.suspend(() => EligibleProductTypeSchema)),
    ),
    transferStatus: Schema.optional(Schema.suspend(() => TransferStatusSchema)),
    recipientEmailId: Schema.optional(Schema.String),
    initiatorEmailId: Schema.optional(Schema.String),
    resellerId: Schema.optional(Schema.String),
    resellerName: Schema.optional(Schema.String),
    initiatorCustomerType: Schema.optional(
      Schema.suspend(() => InitiatorCustomerTypeSchema),
    ),
    canceledBy: Schema.optional(Schema.String),
    detailedTransferStatus: Schema.optional(
      Schema.Array(Schema.suspend(() => DetailedTransferStatusSchema)),
    ),
    customerTenantId: Schema.optional(Schema.String),
    supportedAccounts: Schema.optional(
      Schema.Array(Schema.suspend(() => SupportedAccountTypeSchema)),
    ),
  });
const EligibleProductTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "DevTestAzureSubscription",
  "StandardAzureSubscription",
  "AzureReservation",
]);
const SupportedAccountTypeSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
  "None",
  "Partner",
  "Individual",
  "Enterprise",
]);
const AcceptTransferPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    productDetails: Schema.optional(
      Schema.Array(Schema.suspend(() => ProductDetailsSchema)),
    ),
  });
const ProductDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  productType: Schema.optional(Schema.suspend(() => ProductTypeSchema)),
  productId: Schema.optional(Schema.String),
});
const ValidateTransferResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ValidateTransferResponsePropertiesSchema),
    ),
  });
const ValidateTransferResponsePropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => ValidationResultPropertiesSchema)),
    ),
  });
const ValidationResultPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    level: Schema.optional(Schema.String),
    code: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  });
const AddressValidationStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["Other", "Valid", "Invalid"]);
const AddressDetailsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
const BillingPropertyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountAgreementType: Schema.optional(
      Schema.suspend(() => AgreementTypeSchema),
    ),
    billingAccountDisplayName: Schema.optional(Schema.String),
    billingAccountId: Schema.optional(Schema.String),
    accountAdminNotificationEmailAddress: Schema.optional(Schema.String),
    billingAccountSoldToCountry: Schema.optional(Schema.String),
    billingAccountStatus: Schema.optional(
      Schema.suspend(() => AccountStatusSchema),
    ),
    billingAccountStatusReasonCode: Schema.optional(
      Schema.suspend(() => BillingAccountStatusReasonCodeSchema),
    ),
    billingAccountType: Schema.optional(
      Schema.suspend(() => AccountTypeSchema),
    ),
    billingAccountSubType: Schema.optional(
      Schema.suspend(() => AccountSubTypeSchema),
    ),
    billingCurrency: Schema.optional(Schema.String),
    billingProfileDisplayName: Schema.optional(Schema.String),
    billingProfileId: Schema.optional(Schema.String),
    billingProfileSpendingLimit: Schema.optional(
      Schema.suspend(() => SpendingLimitSchema),
    ),
    billingProfileSpendingLimitDetails: Schema.optional(
      Schema.Array(Schema.suspend(() => SpendingLimitDetailsSchema)),
    ),
    billingProfileStatus: Schema.optional(
      Schema.suspend(() => BillingProfileStatusSchema),
    ),
    billingProfileStatusReasonCode: Schema.optional(
      Schema.suspend(() => BillingProfileStatusReasonCodeSchema),
    ),
    billingProfilePaymentMethodFamily: Schema.optional(
      Schema.suspend(() => PaymentMethodFamilySchema),
    ),
    billingProfilePaymentMethodType: Schema.optional(Schema.String),
    billingTenantId: Schema.optional(Schema.String),
    costCenter: Schema.optional(Schema.String),
    customerDisplayName: Schema.optional(Schema.String),
    customerId: Schema.optional(Schema.String),
    customerStatus: Schema.optional(Schema.suspend(() => CustomerStatusSchema)),
    invoiceSectionDisplayName: Schema.optional(Schema.String),
    invoiceSectionId: Schema.optional(Schema.String),
    invoiceSectionStatus: Schema.optional(
      Schema.suspend(() => InvoiceSectionStateSchema),
    ),
    invoiceSectionStatusReasonCode: Schema.optional(
      Schema.suspend(() => InvoiceSectionStateReasonCodeSchema),
    ),
    isTransitionedBillingAccount: Schema.optional(Schema.Boolean),
    skuDescription: Schema.optional(Schema.String),
    skuId: Schema.optional(Schema.String),
    subscriptionBillingStatus: Schema.optional(
      Schema.suspend(() => BillingSubscriptionStatusSchema),
    ),
    subscriptionBillingStatusDetails: Schema.optional(
      Schema.Array(
        Schema.suspend(() => BillingSubscriptionStatusDetailsSchema),
      ),
    ),
    subscriptionBillingType: Schema.optional(
      Schema.suspend(() => SubscriptionBillingTypeSchema),
    ),
    subscriptionServiceUsageAddress: Schema.optional(
      Schema.suspend(
        () => BillingPropertyPropertiesSubscriptionServiceUsageAddressSchema,
      ),
    ),
    subscriptionWorkloadType: Schema.optional(
      Schema.suspend(() => SubscriptionWorkloadTypeSchema),
    ),
    enrollmentDetails: Schema.optional(
      Schema.suspend(() => BillingPropertyPropertiesEnrollmentDetailsSchema),
    ),
    isAccountAdmin: Schema.optional(Schema.Boolean),
    productId: Schema.optional(Schema.String),
    productName: Schema.optional(Schema.String),
  });
const SubscriptionBillingTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "Benefit",
    "Free",
    "Paid",
    "PrePaid",
  ]);
const BillingPropertyPropertiesSubscriptionServiceUsageAddressSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
const SubscriptionWorkloadTypeSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "None",
    "Production",
    "DevTest",
    "Internal",
  ]);
const BillingPropertyPropertiesEnrollmentDetailsSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    departmentDisplayName: Schema.optional(Schema.String),
    departmentId: Schema.optional(Schema.String),
    enrollmentAccountStatus: Schema.optional(Schema.String),
    enrollmentAccountDisplayName: Schema.optional(Schema.String),
    enrollmentAccountId: Schema.optional(Schema.String),
  });
const SubscriptionPolicyPropertiesSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
    ),
    policies: Schema.optional(
      Schema.Array(Schema.suspend(() => PolicySummarySchema)),
    ),
  });

// Input Schema
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
);
export type AddressValidateInput = typeof AddressValidateInput.Type;

// Output Schema
export const AddressValidateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  status: Schema.optional(Schema.suspend(() => AddressValidationStatusSchema)),
  suggestedAddresses: Schema.optional(
    Schema.Array(Schema.suspend(() => AddressDetailsSchema)),
  ),
  validationMessage: Schema.optional(Schema.String),
});
export type AddressValidateOutput = typeof AddressValidateOutput.Type;

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
export const AgreementsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  agreementName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/agreements/{agreementName}",
    apiVersion: "2024-04-01",
  }),
);
export type AgreementsGetInput = typeof AgreementsGetInput.Type;

// Output Schema
export const AgreementsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => AgreementPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type AgreementsGetOutput = typeof AgreementsGetOutput.Type;

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
  );
export type AgreementsListByBillingAccountInput =
  typeof AgreementsListByBillingAccountInput.Type;

// Output Schema
export const AgreementsListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AgreementSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AgreementsListByBillingAccountOutput =
  typeof AgreementsListByBillingAccountOutput.Type;

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
export const AssociatedTenantsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    associatedTenantName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AssociatedTenantPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/associatedTenants/{associatedTenantName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AssociatedTenantsCreateOrUpdateInput =
  typeof AssociatedTenantsCreateOrUpdateInput.Type;

// Output Schema
export const AssociatedTenantsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AssociatedTenantPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssociatedTenantsCreateOrUpdateOutput =
  typeof AssociatedTenantsCreateOrUpdateOutput.Type;

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
export const AssociatedTenantsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    associatedTenantName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/associatedTenants/{associatedTenantName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type AssociatedTenantsDeleteInput =
  typeof AssociatedTenantsDeleteInput.Type;

// Output Schema
export const AssociatedTenantsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AssociatedTenantsDeleteOutput =
  typeof AssociatedTenantsDeleteOutput.Type;

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
  );
export type AssociatedTenantsGetInput = typeof AssociatedTenantsGetInput.Type;

// Output Schema
export const AssociatedTenantsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AssociatedTenantPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AssociatedTenantsGetOutput = typeof AssociatedTenantsGetOutput.Type;

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
  );
export type AssociatedTenantsListByBillingAccountInput =
  typeof AssociatedTenantsListByBillingAccountInput.Type;

// Output Schema
export const AssociatedTenantsListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => AssociatedTenantSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type AssociatedTenantsListByBillingAccountOutput =
  typeof AssociatedTenantsListByBillingAccountOutput.Type;

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
export const AvailableBalancesGetByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/availableBalance/default",
      apiVersion: "2024-04-01",
    }),
  );
export type AvailableBalancesGetByBillingAccountInput =
  typeof AvailableBalancesGetByBillingAccountInput.Type;

// Output Schema
export const AvailableBalancesGetByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AvailableBalancePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AvailableBalancesGetByBillingAccountOutput =
  typeof AvailableBalancesGetByBillingAccountOutput.Type;

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
  );
export type AvailableBalancesGetByBillingProfileInput =
  typeof AvailableBalancesGetByBillingProfileInput.Type;

// Output Schema
export const AvailableBalancesGetByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => AvailableBalancePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type AvailableBalancesGetByBillingProfileOutput =
  typeof AvailableBalancesGetByBillingProfileOutput.Type;

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
export const BillingAccountsAddPaymentTermsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/addPaymentTerms",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingAccountsAddPaymentTermsInput =
  typeof BillingAccountsAddPaymentTermsInput.Type;

// Output Schema
export const BillingAccountsAddPaymentTermsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingAccountPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingAccountsAddPaymentTermsOutput =
  typeof BillingAccountsAddPaymentTermsOutput.Type;

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
export const BillingAccountsCancelPaymentTermsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/cancelPaymentTerms",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingAccountsCancelPaymentTermsInput =
  typeof BillingAccountsCancelPaymentTermsInput.Type;

// Output Schema
export const BillingAccountsCancelPaymentTermsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingAccountPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingAccountsCancelPaymentTermsOutput =
  typeof BillingAccountsCancelPaymentTermsOutput.Type;

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
export const BillingAccountsConfirmTransitionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/confirmTransition",
      apiVersion: "2024-04-01",
    }),
  );
export type BillingAccountsConfirmTransitionInput =
  typeof BillingAccountsConfirmTransitionInput.Type;

// Output Schema
export const BillingAccountsConfirmTransitionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transitionDate: Schema.optional(Schema.String),
    anniversaryDay: Schema.optional(Schema.Number),
  });
export type BillingAccountsConfirmTransitionOutput =
  typeof BillingAccountsConfirmTransitionOutput.Type;

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
export const BillingAccountsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}",
      apiVersion: "2024-04-01",
    }),
  );
export type BillingAccountsGetInput = typeof BillingAccountsGetInput.Type;

// Output Schema
export const BillingAccountsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingAccountPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingAccountsGetOutput = typeof BillingAccountsGetOutput.Type;

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
  );
export type BillingAccountsListInput = typeof BillingAccountsListInput.Type;

// Output Schema
export const BillingAccountsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingAccountSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingAccountsListOutput = typeof BillingAccountsListOutput.Type;

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
  );
export type BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionInput =
  typeof BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionInput.Type;

// Output Schema
export const BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.suspend(() => InvoiceSectionWithCreateSubPermissionSchema),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionOutput =
  typeof BillingAccountsListInvoiceSectionsByCreateSubscriptionPermissionOutput.Type;

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
export const BillingAccountsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => BillingAccountPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingAccountsUpdateInput = typeof BillingAccountsUpdateInput.Type;

// Output Schema
export const BillingAccountsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingAccountPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingAccountsUpdateOutput =
  typeof BillingAccountsUpdateOutput.Type;

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
export const BillingAccountsValidatePaymentTermsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/validatePaymentTerms",
      apiVersion: "2024-04-01",
    }),
  );
export type BillingAccountsValidatePaymentTermsInput =
  typeof BillingAccountsValidatePaymentTermsInput.Type;

// Output Schema
export const BillingAccountsValidatePaymentTermsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eligibilityStatus: Schema.optional(
      Schema.suspend(() => PaymentTermsEligibilityStatusSchema),
    ),
    eligibilityDetails: Schema.optional(
      Schema.Array(Schema.suspend(() => PaymentTermsEligibilityDetailSchema)),
    ),
  });
export type BillingAccountsValidatePaymentTermsOutput =
  typeof BillingAccountsValidatePaymentTermsOutput.Type;

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
  );
export type BillingPermissionsCheckAccessByBillingAccountInput =
  typeof BillingPermissionsCheckAccessByBillingAccountInput.Type;

// Output Schema
export const BillingPermissionsCheckAccessByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => CheckAccessResponseSchema),
  );
export type BillingPermissionsCheckAccessByBillingAccountOutput =
  typeof BillingPermissionsCheckAccessByBillingAccountOutput.Type;

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
  );
export type BillingPermissionsCheckAccessByBillingProfileInput =
  typeof BillingPermissionsCheckAccessByBillingProfileInput.Type;

// Output Schema
export const BillingPermissionsCheckAccessByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => CheckAccessResponseSchema),
  );
export type BillingPermissionsCheckAccessByBillingProfileOutput =
  typeof BillingPermissionsCheckAccessByBillingProfileOutput.Type;

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
  );
export type BillingPermissionsCheckAccessByCustomerInput =
  typeof BillingPermissionsCheckAccessByCustomerInput.Type;

// Output Schema
export const BillingPermissionsCheckAccessByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => CheckAccessResponseSchema),
  );
export type BillingPermissionsCheckAccessByCustomerOutput =
  typeof BillingPermissionsCheckAccessByCustomerOutput.Type;

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
  );
export type BillingPermissionsCheckAccessByDepartmentInput =
  typeof BillingPermissionsCheckAccessByDepartmentInput.Type;

// Output Schema
export const BillingPermissionsCheckAccessByDepartmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => CheckAccessResponseSchema),
  );
export type BillingPermissionsCheckAccessByDepartmentOutput =
  typeof BillingPermissionsCheckAccessByDepartmentOutput.Type;

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
  );
export type BillingPermissionsCheckAccessByEnrollmentAccountInput =
  typeof BillingPermissionsCheckAccessByEnrollmentAccountInput.Type;

// Output Schema
export const BillingPermissionsCheckAccessByEnrollmentAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => CheckAccessResponseSchema),
  );
export type BillingPermissionsCheckAccessByEnrollmentAccountOutput =
  typeof BillingPermissionsCheckAccessByEnrollmentAccountOutput.Type;

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
  );
export type BillingPermissionsCheckAccessByInvoiceSectionInput =
  typeof BillingPermissionsCheckAccessByInvoiceSectionInput.Type;

// Output Schema
export const BillingPermissionsCheckAccessByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => CheckAccessResponseSchema),
  );
export type BillingPermissionsCheckAccessByInvoiceSectionOutput =
  typeof BillingPermissionsCheckAccessByInvoiceSectionOutput.Type;

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
export const BillingPermissionsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingPermissions",
      apiVersion: "2024-04-01",
    }),
  );
export type BillingPermissionsListByBillingAccountInput =
  typeof BillingPermissionsListByBillingAccountInput.Type;

// Output Schema
export const BillingPermissionsListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingPermissionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingPermissionsListByBillingAccountOutput =
  typeof BillingPermissionsListByBillingAccountOutput.Type;

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
  );
export type BillingPermissionsListByBillingProfileInput =
  typeof BillingPermissionsListByBillingProfileInput.Type;

// Output Schema
export const BillingPermissionsListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingPermissionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingPermissionsListByBillingProfileOutput =
  typeof BillingPermissionsListByBillingProfileOutput.Type;

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
  );
export type BillingPermissionsListByCustomerInput =
  typeof BillingPermissionsListByCustomerInput.Type;

// Output Schema
export const BillingPermissionsListByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingPermissionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingPermissionsListByCustomerOutput =
  typeof BillingPermissionsListByCustomerOutput.Type;

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
  );
export type BillingPermissionsListByCustomerAtBillingAccountInput =
  typeof BillingPermissionsListByCustomerAtBillingAccountInput.Type;

// Output Schema
export const BillingPermissionsListByCustomerAtBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingPermissionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingPermissionsListByCustomerAtBillingAccountOutput =
  typeof BillingPermissionsListByCustomerAtBillingAccountOutput.Type;

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
  );
export type BillingPermissionsListByDepartmentInput =
  typeof BillingPermissionsListByDepartmentInput.Type;

// Output Schema
export const BillingPermissionsListByDepartmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingPermissionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingPermissionsListByDepartmentOutput =
  typeof BillingPermissionsListByDepartmentOutput.Type;

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
  );
export type BillingPermissionsListByEnrollmentAccountInput =
  typeof BillingPermissionsListByEnrollmentAccountInput.Type;

// Output Schema
export const BillingPermissionsListByEnrollmentAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingPermissionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingPermissionsListByEnrollmentAccountOutput =
  typeof BillingPermissionsListByEnrollmentAccountOutput.Type;

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
  );
export type BillingPermissionsListByInvoiceSectionInput =
  typeof BillingPermissionsListByInvoiceSectionInput.Type;

// Output Schema
export const BillingPermissionsListByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingPermissionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingPermissionsListByInvoiceSectionOutput =
  typeof BillingPermissionsListByInvoiceSectionOutput.Type;

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
export const BillingProfilesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => BillingProfilePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingProfilesCreateOrUpdateInput =
  typeof BillingProfilesCreateOrUpdateInput.Type;

// Output Schema
export const BillingProfilesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingProfilePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingProfilesCreateOrUpdateOutput =
  typeof BillingProfilesCreateOrUpdateOutput.Type;

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
export const BillingProfilesDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingProfilesDeleteInput = typeof BillingProfilesDeleteInput.Type;

// Output Schema
export const BillingProfilesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BillingProfilesDeleteOutput =
  typeof BillingProfilesDeleteOutput.Type;

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
  );
export type BillingProfilesGetInput = typeof BillingProfilesGetInput.Type;

// Output Schema
export const BillingProfilesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingProfilePropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingProfilesGetOutput = typeof BillingProfilesGetOutput.Type;

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
  );
export type BillingProfilesListByBillingAccountInput =
  typeof BillingProfilesListByBillingAccountInput.Type;

// Output Schema
export const BillingProfilesListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingProfileSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingProfilesListByBillingAccountOutput =
  typeof BillingProfilesListByBillingAccountOutput.Type;

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
  );
export type BillingProfilesValidateDeleteEligibilityInput =
  typeof BillingProfilesValidateDeleteEligibilityInput.Type;

// Output Schema
export const BillingProfilesValidateDeleteEligibilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eligibilityStatus: Schema.optional(
      Schema.suspend(() => DeleteBillingProfileEligibilityStatusSchema),
    ),
    eligibilityDetails: Schema.optional(
      Schema.Array(
        Schema.suspend(() => DeleteBillingProfileEligibilityDetailSchema),
      ),
    ),
  });
export type BillingProfilesValidateDeleteEligibilityOutput =
  typeof BillingProfilesValidateDeleteEligibilityOutput.Type;

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
  );
export type BillingPropertyGetInput = typeof BillingPropertyGetInput.Type;

// Output Schema
export const BillingPropertyGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingPropertyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingPropertyGetOutput = typeof BillingPropertyGetOutput.Type;

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
export const BillingPropertyUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => BillingPropertyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Billing/billingProperty/default",
      apiVersion: "2024-04-01",
    }),
  );
export type BillingPropertyUpdateInput = typeof BillingPropertyUpdateInput.Type;

// Output Schema
export const BillingPropertyUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingPropertyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingPropertyUpdateOutput =
  typeof BillingPropertyUpdateOutput.Type;

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
export const BillingRequestsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingRequestName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => BillingRequestPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingRequests/{billingRequestName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingRequestsCreateOrUpdateInput =
  typeof BillingRequestsCreateOrUpdateInput.Type;

// Output Schema
export const BillingRequestsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRequestPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRequestsCreateOrUpdateOutput =
  typeof BillingRequestsCreateOrUpdateOutput.Type;

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
export const BillingRequestsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingRequestName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingRequests/{billingRequestName}",
      apiVersion: "2024-04-01",
    }),
  );
export type BillingRequestsGetInput = typeof BillingRequestsGetInput.Type;

// Output Schema
export const BillingRequestsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRequestPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRequestsGetOutput = typeof BillingRequestsGetOutput.Type;

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
  );
export type BillingRequestsListByBillingAccountInput =
  typeof BillingRequestsListByBillingAccountInput.Type;

// Output Schema
export const BillingRequestsListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRequestSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRequestsListByBillingAccountOutput =
  typeof BillingRequestsListByBillingAccountOutput.Type;

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
  );
export type BillingRequestsListByBillingProfileInput =
  typeof BillingRequestsListByBillingProfileInput.Type;

// Output Schema
export const BillingRequestsListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRequestSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRequestsListByBillingProfileOutput =
  typeof BillingRequestsListByBillingProfileOutput.Type;

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
  );
export type BillingRequestsListByCustomerInput =
  typeof BillingRequestsListByCustomerInput.Type;

// Output Schema
export const BillingRequestsListByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRequestSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRequestsListByCustomerOutput =
  typeof BillingRequestsListByCustomerOutput.Type;

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
  );
export type BillingRequestsListByInvoiceSectionInput =
  typeof BillingRequestsListByInvoiceSectionInput.Type;

// Output Schema
export const BillingRequestsListByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRequestSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRequestsListByInvoiceSectionOutput =
  typeof BillingRequestsListByInvoiceSectionOutput.Type;

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
  );
export type BillingRequestsListByUserInput =
  typeof BillingRequestsListByUserInput.Type;

// Output Schema
export const BillingRequestsListByUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRequestSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRequestsListByUserOutput =
  typeof BillingRequestsListByUserOutput.Type;

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
export const BillingRoleAssignmentsCreateByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
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
    principalType: Schema.optional(Schema.suspend(() => PrincipalTypeSchema)),
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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingRoleAssignmentsCreateByBillingAccountInput =
  typeof BillingRoleAssignmentsCreateByBillingAccountInput.Type;

// Output Schema
export const BillingRoleAssignmentsCreateByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleAssignmentsCreateByBillingAccountOutput =
  typeof BillingRoleAssignmentsCreateByBillingAccountOutput.Type;

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
export const BillingRoleAssignmentsCreateByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
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
    principalType: Schema.optional(Schema.suspend(() => PrincipalTypeSchema)),
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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingRoleAssignmentsCreateByBillingProfileInput =
  typeof BillingRoleAssignmentsCreateByBillingProfileInput.Type;

// Output Schema
export const BillingRoleAssignmentsCreateByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleAssignmentsCreateByBillingProfileOutput =
  typeof BillingRoleAssignmentsCreateByBillingProfileOutput.Type;

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
export const BillingRoleAssignmentsCreateByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
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
    principalType: Schema.optional(Schema.suspend(() => PrincipalTypeSchema)),
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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingRoleAssignmentsCreateByCustomerInput =
  typeof BillingRoleAssignmentsCreateByCustomerInput.Type;

// Output Schema
export const BillingRoleAssignmentsCreateByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleAssignmentsCreateByCustomerOutput =
  typeof BillingRoleAssignmentsCreateByCustomerOutput.Type;

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
export const BillingRoleAssignmentsCreateByInvoiceSectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    provisioningState: Schema.optional(
      Schema.suspend(() => ProvisioningStateSchema),
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
    principalType: Schema.optional(Schema.suspend(() => PrincipalTypeSchema)),
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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingRoleAssignmentsCreateByInvoiceSectionInput =
  typeof BillingRoleAssignmentsCreateByInvoiceSectionInput.Type;

// Output Schema
export const BillingRoleAssignmentsCreateByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleAssignmentsCreateByInvoiceSectionOutput =
  typeof BillingRoleAssignmentsCreateByInvoiceSectionOutput.Type;

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
export const BillingRoleAssignmentsCreateOrUpdateByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingRoleAssignmentsCreateOrUpdateByBillingAccountInput =
  typeof BillingRoleAssignmentsCreateOrUpdateByBillingAccountInput.Type;

// Output Schema
export const BillingRoleAssignmentsCreateOrUpdateByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleAssignmentsCreateOrUpdateByBillingAccountOutput =
  typeof BillingRoleAssignmentsCreateOrUpdateByBillingAccountOutput.Type;

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
export const BillingRoleAssignmentsCreateOrUpdateByDepartmentInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    departmentName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingRoleAssignmentsCreateOrUpdateByDepartmentInput =
  typeof BillingRoleAssignmentsCreateOrUpdateByDepartmentInput.Type;

// Output Schema
export const BillingRoleAssignmentsCreateOrUpdateByDepartmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleAssignmentsCreateOrUpdateByDepartmentOutput =
  typeof BillingRoleAssignmentsCreateOrUpdateByDepartmentOutput.Type;

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
export const BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    enrollmentAccountName: Schema.String.pipe(T.PathParam()),
    billingRoleAssignmentName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/enrollmentAccounts/{enrollmentAccountName}/billingRoleAssignments/{billingRoleAssignmentName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccountInput =
  typeof BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccountInput.Type;

// Output Schema
export const BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccountOutput =
  typeof BillingRoleAssignmentsCreateOrUpdateByEnrollmentAccountOutput.Type;

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
  );
export type BillingRoleAssignmentsDeleteByBillingAccountInput =
  typeof BillingRoleAssignmentsDeleteByBillingAccountInput.Type;

// Output Schema
export const BillingRoleAssignmentsDeleteByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BillingRoleAssignmentsDeleteByBillingAccountOutput =
  typeof BillingRoleAssignmentsDeleteByBillingAccountOutput.Type;

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
  );
export type BillingRoleAssignmentsDeleteByBillingProfileInput =
  typeof BillingRoleAssignmentsDeleteByBillingProfileInput.Type;

// Output Schema
export const BillingRoleAssignmentsDeleteByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BillingRoleAssignmentsDeleteByBillingProfileOutput =
  typeof BillingRoleAssignmentsDeleteByBillingProfileOutput.Type;

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
  );
export type BillingRoleAssignmentsDeleteByCustomerInput =
  typeof BillingRoleAssignmentsDeleteByCustomerInput.Type;

// Output Schema
export const BillingRoleAssignmentsDeleteByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BillingRoleAssignmentsDeleteByCustomerOutput =
  typeof BillingRoleAssignmentsDeleteByCustomerOutput.Type;

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
  );
export type BillingRoleAssignmentsDeleteByDepartmentInput =
  typeof BillingRoleAssignmentsDeleteByDepartmentInput.Type;

// Output Schema
export const BillingRoleAssignmentsDeleteByDepartmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BillingRoleAssignmentsDeleteByDepartmentOutput =
  typeof BillingRoleAssignmentsDeleteByDepartmentOutput.Type;

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
  );
export type BillingRoleAssignmentsDeleteByEnrollmentAccountInput =
  typeof BillingRoleAssignmentsDeleteByEnrollmentAccountInput.Type;

// Output Schema
export const BillingRoleAssignmentsDeleteByEnrollmentAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BillingRoleAssignmentsDeleteByEnrollmentAccountOutput =
  typeof BillingRoleAssignmentsDeleteByEnrollmentAccountOutput.Type;

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
  );
export type BillingRoleAssignmentsDeleteByInvoiceSectionInput =
  typeof BillingRoleAssignmentsDeleteByInvoiceSectionInput.Type;

// Output Schema
export const BillingRoleAssignmentsDeleteByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BillingRoleAssignmentsDeleteByInvoiceSectionOutput =
  typeof BillingRoleAssignmentsDeleteByInvoiceSectionOutput.Type;

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
  );
export type BillingRoleAssignmentsGetByBillingAccountInput =
  typeof BillingRoleAssignmentsGetByBillingAccountInput.Type;

// Output Schema
export const BillingRoleAssignmentsGetByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleAssignmentsGetByBillingAccountOutput =
  typeof BillingRoleAssignmentsGetByBillingAccountOutput.Type;

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
  );
export type BillingRoleAssignmentsGetByBillingProfileInput =
  typeof BillingRoleAssignmentsGetByBillingProfileInput.Type;

// Output Schema
export const BillingRoleAssignmentsGetByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleAssignmentsGetByBillingProfileOutput =
  typeof BillingRoleAssignmentsGetByBillingProfileOutput.Type;

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
  );
export type BillingRoleAssignmentsGetByCustomerInput =
  typeof BillingRoleAssignmentsGetByCustomerInput.Type;

// Output Schema
export const BillingRoleAssignmentsGetByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleAssignmentsGetByCustomerOutput =
  typeof BillingRoleAssignmentsGetByCustomerOutput.Type;

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
  );
export type BillingRoleAssignmentsGetByDepartmentInput =
  typeof BillingRoleAssignmentsGetByDepartmentInput.Type;

// Output Schema
export const BillingRoleAssignmentsGetByDepartmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleAssignmentsGetByDepartmentOutput =
  typeof BillingRoleAssignmentsGetByDepartmentOutput.Type;

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
  );
export type BillingRoleAssignmentsGetByEnrollmentAccountInput =
  typeof BillingRoleAssignmentsGetByEnrollmentAccountInput.Type;

// Output Schema
export const BillingRoleAssignmentsGetByEnrollmentAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleAssignmentsGetByEnrollmentAccountOutput =
  typeof BillingRoleAssignmentsGetByEnrollmentAccountOutput.Type;

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
  );
export type BillingRoleAssignmentsGetByInvoiceSectionInput =
  typeof BillingRoleAssignmentsGetByInvoiceSectionInput.Type;

// Output Schema
export const BillingRoleAssignmentsGetByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleAssignmentPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleAssignmentsGetByInvoiceSectionOutput =
  typeof BillingRoleAssignmentsGetByInvoiceSectionOutput.Type;

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
  );
export type BillingRoleAssignmentsListByBillingAccountInput =
  typeof BillingRoleAssignmentsListByBillingAccountInput.Type;

// Output Schema
export const BillingRoleAssignmentsListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleAssignmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleAssignmentsListByBillingAccountOutput =
  typeof BillingRoleAssignmentsListByBillingAccountOutput.Type;

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
  );
export type BillingRoleAssignmentsListByBillingProfileInput =
  typeof BillingRoleAssignmentsListByBillingProfileInput.Type;

// Output Schema
export const BillingRoleAssignmentsListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleAssignmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleAssignmentsListByBillingProfileOutput =
  typeof BillingRoleAssignmentsListByBillingProfileOutput.Type;

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
  );
export type BillingRoleAssignmentsListByCustomerInput =
  typeof BillingRoleAssignmentsListByCustomerInput.Type;

// Output Schema
export const BillingRoleAssignmentsListByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleAssignmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleAssignmentsListByCustomerOutput =
  typeof BillingRoleAssignmentsListByCustomerOutput.Type;

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
  );
export type BillingRoleAssignmentsListByDepartmentInput =
  typeof BillingRoleAssignmentsListByDepartmentInput.Type;

// Output Schema
export const BillingRoleAssignmentsListByDepartmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleAssignmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleAssignmentsListByDepartmentOutput =
  typeof BillingRoleAssignmentsListByDepartmentOutput.Type;

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
  );
export type BillingRoleAssignmentsListByEnrollmentAccountInput =
  typeof BillingRoleAssignmentsListByEnrollmentAccountInput.Type;

// Output Schema
export const BillingRoleAssignmentsListByEnrollmentAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleAssignmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleAssignmentsListByEnrollmentAccountOutput =
  typeof BillingRoleAssignmentsListByEnrollmentAccountOutput.Type;

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
  );
export type BillingRoleAssignmentsListByInvoiceSectionInput =
  typeof BillingRoleAssignmentsListByInvoiceSectionInput.Type;

// Output Schema
export const BillingRoleAssignmentsListByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleAssignmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleAssignmentsListByInvoiceSectionOutput =
  typeof BillingRoleAssignmentsListByInvoiceSectionOutput.Type;

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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingRoleAssignmentsResolveByBillingAccountInput =
  typeof BillingRoleAssignmentsResolveByBillingAccountInput.Type;

// Output Schema
export const BillingRoleAssignmentsResolveByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleAssignmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleAssignmentsResolveByBillingAccountOutput =
  typeof BillingRoleAssignmentsResolveByBillingAccountOutput.Type;

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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingRoleAssignmentsResolveByBillingProfileInput =
  typeof BillingRoleAssignmentsResolveByBillingProfileInput.Type;

// Output Schema
export const BillingRoleAssignmentsResolveByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleAssignmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleAssignmentsResolveByBillingProfileOutput =
  typeof BillingRoleAssignmentsResolveByBillingProfileOutput.Type;

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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingRoleAssignmentsResolveByCustomerInput =
  typeof BillingRoleAssignmentsResolveByCustomerInput.Type;

// Output Schema
export const BillingRoleAssignmentsResolveByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleAssignmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleAssignmentsResolveByCustomerOutput =
  typeof BillingRoleAssignmentsResolveByCustomerOutput.Type;

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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingRoleAssignmentsResolveByInvoiceSectionInput =
  typeof BillingRoleAssignmentsResolveByInvoiceSectionInput.Type;

// Output Schema
export const BillingRoleAssignmentsResolveByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleAssignmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleAssignmentsResolveByInvoiceSectionOutput =
  typeof BillingRoleAssignmentsResolveByInvoiceSectionOutput.Type;

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
  );
export type BillingRoleDefinitionGetByBillingAccountInput =
  typeof BillingRoleDefinitionGetByBillingAccountInput.Type;

// Output Schema
export const BillingRoleDefinitionGetByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleDefinitionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleDefinitionGetByBillingAccountOutput =
  typeof BillingRoleDefinitionGetByBillingAccountOutput.Type;

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
  );
export type BillingRoleDefinitionGetByBillingProfileInput =
  typeof BillingRoleDefinitionGetByBillingProfileInput.Type;

// Output Schema
export const BillingRoleDefinitionGetByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleDefinitionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleDefinitionGetByBillingProfileOutput =
  typeof BillingRoleDefinitionGetByBillingProfileOutput.Type;

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
  );
export type BillingRoleDefinitionGetByCustomerInput =
  typeof BillingRoleDefinitionGetByCustomerInput.Type;

// Output Schema
export const BillingRoleDefinitionGetByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleDefinitionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleDefinitionGetByCustomerOutput =
  typeof BillingRoleDefinitionGetByCustomerOutput.Type;

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
  );
export type BillingRoleDefinitionGetByDepartmentInput =
  typeof BillingRoleDefinitionGetByDepartmentInput.Type;

// Output Schema
export const BillingRoleDefinitionGetByDepartmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleDefinitionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleDefinitionGetByDepartmentOutput =
  typeof BillingRoleDefinitionGetByDepartmentOutput.Type;

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
  );
export type BillingRoleDefinitionGetByEnrollmentAccountInput =
  typeof BillingRoleDefinitionGetByEnrollmentAccountInput.Type;

// Output Schema
export const BillingRoleDefinitionGetByEnrollmentAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleDefinitionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleDefinitionGetByEnrollmentAccountOutput =
  typeof BillingRoleDefinitionGetByEnrollmentAccountOutput.Type;

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
  );
export type BillingRoleDefinitionGetByInvoiceSectionInput =
  typeof BillingRoleDefinitionGetByInvoiceSectionInput.Type;

// Output Schema
export const BillingRoleDefinitionGetByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingRoleDefinitionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingRoleDefinitionGetByInvoiceSectionOutput =
  typeof BillingRoleDefinitionGetByInvoiceSectionOutput.Type;

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
export const BillingRoleDefinitionListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingRoleDefinitions",
      apiVersion: "2024-04-01",
    }),
  );
export type BillingRoleDefinitionListByBillingAccountInput =
  typeof BillingRoleDefinitionListByBillingAccountInput.Type;

// Output Schema
export const BillingRoleDefinitionListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleDefinitionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleDefinitionListByBillingAccountOutput =
  typeof BillingRoleDefinitionListByBillingAccountOutput.Type;

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
  );
export type BillingRoleDefinitionListByBillingProfileInput =
  typeof BillingRoleDefinitionListByBillingProfileInput.Type;

// Output Schema
export const BillingRoleDefinitionListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleDefinitionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleDefinitionListByBillingProfileOutput =
  typeof BillingRoleDefinitionListByBillingProfileOutput.Type;

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
  );
export type BillingRoleDefinitionListByCustomerInput =
  typeof BillingRoleDefinitionListByCustomerInput.Type;

// Output Schema
export const BillingRoleDefinitionListByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleDefinitionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleDefinitionListByCustomerOutput =
  typeof BillingRoleDefinitionListByCustomerOutput.Type;

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
  );
export type BillingRoleDefinitionListByDepartmentInput =
  typeof BillingRoleDefinitionListByDepartmentInput.Type;

// Output Schema
export const BillingRoleDefinitionListByDepartmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleDefinitionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleDefinitionListByDepartmentOutput =
  typeof BillingRoleDefinitionListByDepartmentOutput.Type;

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
  );
export type BillingRoleDefinitionListByEnrollmentAccountInput =
  typeof BillingRoleDefinitionListByEnrollmentAccountInput.Type;

// Output Schema
export const BillingRoleDefinitionListByEnrollmentAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleDefinitionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleDefinitionListByEnrollmentAccountOutput =
  typeof BillingRoleDefinitionListByEnrollmentAccountOutput.Type;

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
  );
export type BillingRoleDefinitionListByInvoiceSectionInput =
  typeof BillingRoleDefinitionListByInvoiceSectionInput.Type;

// Output Schema
export const BillingRoleDefinitionListByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingRoleDefinitionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingRoleDefinitionListByInvoiceSectionOutput =
  typeof BillingRoleDefinitionListByInvoiceSectionOutput.Type;

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
export const BillingSubscriptionsAliasesCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    aliasName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => BillingSubscriptionAliasPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptionAliases/{aliasName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingSubscriptionsAliasesCreateOrUpdateInput =
  typeof BillingSubscriptionsAliasesCreateOrUpdateInput.Type;

// Output Schema
export const BillingSubscriptionsAliasesCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingSubscriptionAliasPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingSubscriptionsAliasesCreateOrUpdateOutput =
  typeof BillingSubscriptionsAliasesCreateOrUpdateOutput.Type;

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
  );
export type BillingSubscriptionsAliasesGetInput =
  typeof BillingSubscriptionsAliasesGetInput.Type;

// Output Schema
export const BillingSubscriptionsAliasesGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingSubscriptionAliasPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingSubscriptionsAliasesGetOutput =
  typeof BillingSubscriptionsAliasesGetOutput.Type;

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
  );
export type BillingSubscriptionsAliasesListByBillingAccountInput =
  typeof BillingSubscriptionsAliasesListByBillingAccountInput.Type;

// Output Schema
export const BillingSubscriptionsAliasesListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => BillingSubscriptionAliasSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type BillingSubscriptionsAliasesListByBillingAccountOutput =
  typeof BillingSubscriptionsAliasesListByBillingAccountOutput.Type;

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
export const BillingSubscriptionsCancelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingSubscriptionName: Schema.String.pipe(T.PathParam()),
    cancellationReason: Schema.suspend(() => CancellationReasonSchema),
    customerId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}/cancel",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingSubscriptionsCancelInput =
  typeof BillingSubscriptionsCancelInput.Type;

// Output Schema
export const BillingSubscriptionsCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BillingSubscriptionsCancelOutput =
  typeof BillingSubscriptionsCancelOutput.Type;

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
export const BillingSubscriptionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingSubscriptionsDeleteInput =
  typeof BillingSubscriptionsDeleteInput.Type;

// Output Schema
export const BillingSubscriptionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BillingSubscriptionsDeleteOutput =
  typeof BillingSubscriptionsDeleteOutput.Type;

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
  );
export type BillingSubscriptionsGetInput =
  typeof BillingSubscriptionsGetInput.Type;

// Output Schema
export const BillingSubscriptionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingSubscriptionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingSubscriptionsGetOutput =
  typeof BillingSubscriptionsGetOutput.Type;

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
  );
export type BillingSubscriptionsGetByBillingProfileInput =
  typeof BillingSubscriptionsGetByBillingProfileInput.Type;

// Output Schema
export const BillingSubscriptionsGetByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingSubscriptionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingSubscriptionsGetByBillingProfileOutput =
  typeof BillingSubscriptionsGetByBillingProfileOutput.Type;

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
  );
export type BillingSubscriptionsListByBillingAccountInput =
  typeof BillingSubscriptionsListByBillingAccountInput.Type;

// Output Schema
export const BillingSubscriptionsListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => BillingSubscriptionSchema)),
    ),
  });
export type BillingSubscriptionsListByBillingAccountOutput =
  typeof BillingSubscriptionsListByBillingAccountOutput.Type;

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
  );
export type BillingSubscriptionsListByBillingProfileInput =
  typeof BillingSubscriptionsListByBillingProfileInput.Type;

// Output Schema
export const BillingSubscriptionsListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => BillingSubscriptionSchema)),
    ),
  });
export type BillingSubscriptionsListByBillingProfileOutput =
  typeof BillingSubscriptionsListByBillingProfileOutput.Type;

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
  );
export type BillingSubscriptionsListByCustomerInput =
  typeof BillingSubscriptionsListByCustomerInput.Type;

// Output Schema
export const BillingSubscriptionsListByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => BillingSubscriptionSchema)),
    ),
  });
export type BillingSubscriptionsListByCustomerOutput =
  typeof BillingSubscriptionsListByCustomerOutput.Type;

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
  );
export type BillingSubscriptionsListByCustomerAtBillingAccountInput =
  typeof BillingSubscriptionsListByCustomerAtBillingAccountInput.Type;

// Output Schema
export const BillingSubscriptionsListByCustomerAtBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => BillingSubscriptionSchema)),
    ),
  });
export type BillingSubscriptionsListByCustomerAtBillingAccountOutput =
  typeof BillingSubscriptionsListByCustomerAtBillingAccountOutput.Type;

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
  );
export type BillingSubscriptionsListByEnrollmentAccountInput =
  typeof BillingSubscriptionsListByEnrollmentAccountInput.Type;

// Output Schema
export const BillingSubscriptionsListByEnrollmentAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => BillingSubscriptionSchema)),
    ),
  });
export type BillingSubscriptionsListByEnrollmentAccountOutput =
  typeof BillingSubscriptionsListByEnrollmentAccountOutput.Type;

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
  );
export type BillingSubscriptionsListByInvoiceSectionInput =
  typeof BillingSubscriptionsListByInvoiceSectionInput.Type;

// Output Schema
export const BillingSubscriptionsListByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    totalCount: Schema.optional(Schema.Number),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => BillingSubscriptionSchema)),
    ),
  });
export type BillingSubscriptionsListByInvoiceSectionOutput =
  typeof BillingSubscriptionsListByInvoiceSectionOutput.Type;

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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingSubscriptionsMergeInput =
  typeof BillingSubscriptionsMergeInput.Type;

// Output Schema
export const BillingSubscriptionsMergeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingSubscriptionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingSubscriptionsMergeOutput =
  typeof BillingSubscriptionsMergeOutput.Type;

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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingSubscriptionsMoveInput =
  typeof BillingSubscriptionsMoveInput.Type;

// Output Schema
export const BillingSubscriptionsMoveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingSubscriptionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingSubscriptionsMoveOutput =
  typeof BillingSubscriptionsMoveOutput.Type;

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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingSubscriptionsSplitInput =
  typeof BillingSubscriptionsSplitInput.Type;

// Output Schema
export const BillingSubscriptionsSplitOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingSubscriptionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingSubscriptionsSplitOutput =
  typeof BillingSubscriptionsSplitOutput.Type;

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
export const BillingSubscriptionsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingSubscriptionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => BillingSubscriptionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingSubscriptions/{billingSubscriptionName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type BillingSubscriptionsUpdateInput =
  typeof BillingSubscriptionsUpdateInput.Type;

// Output Schema
export const BillingSubscriptionsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingSubscriptionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type BillingSubscriptionsUpdateOutput =
  typeof BillingSubscriptionsUpdateOutput.Type;

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
  );
export type BillingSubscriptionsValidateMoveEligibilityInput =
  typeof BillingSubscriptionsValidateMoveEligibilityInput.Type;

// Output Schema
export const BillingSubscriptionsValidateMoveEligibilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isMoveEligible: Schema.optional(Schema.Boolean),
    errorDetails: Schema.optional(
      Schema.suspend(() => MoveBillingSubscriptionErrorDetailsSchema),
    ),
  });
export type BillingSubscriptionsValidateMoveEligibilityOutput =
  typeof BillingSubscriptionsValidateMoveEligibilityOutput.Type;

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
);
export type CustomersGetInput = typeof CustomersGetInput.Type;

// Output Schema
export const CustomersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => CustomerPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type CustomersGetOutput = typeof CustomersGetOutput.Type;

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
  );
export type CustomersGetByBillingAccountInput =
  typeof CustomersGetByBillingAccountInput.Type;

// Output Schema
export const CustomersGetByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => CustomerPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type CustomersGetByBillingAccountOutput =
  typeof CustomersGetByBillingAccountOutput.Type;

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
  );
export type CustomersListByBillingAccountInput =
  typeof CustomersListByBillingAccountInput.Type;

// Output Schema
export const CustomersListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => CustomerSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CustomersListByBillingAccountOutput =
  typeof CustomersListByBillingAccountOutput.Type;

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
  );
export type CustomersListByBillingProfileInput =
  typeof CustomersListByBillingProfileInput.Type;

// Output Schema
export const CustomersListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => CustomerSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type CustomersListByBillingProfileOutput =
  typeof CustomersListByBillingProfileOutput.Type;

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
export const DepartmentsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  departmentName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/departments/{departmentName}",
    apiVersion: "2024-04-01",
  }),
);
export type DepartmentsGetInput = typeof DepartmentsGetInput.Type;

// Output Schema
export const DepartmentsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => DepartmentPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type DepartmentsGetOutput = typeof DepartmentsGetOutput.Type;

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
  );
export type DepartmentsListByBillingAccountInput =
  typeof DepartmentsListByBillingAccountInput.Type;

// Output Schema
export const DepartmentsListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => DepartmentSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type DepartmentsListByBillingAccountOutput =
  typeof DepartmentsListByBillingAccountOutput.Type;

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
  );
export type EnrollmentAccountsGetInput = typeof EnrollmentAccountsGetInput.Type;

// Output Schema
export const EnrollmentAccountsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => EnrollmentAccountPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type EnrollmentAccountsGetOutput =
  typeof EnrollmentAccountsGetOutput.Type;

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
  );
export type EnrollmentAccountsGetByDepartmentInput =
  typeof EnrollmentAccountsGetByDepartmentInput.Type;

// Output Schema
export const EnrollmentAccountsGetByDepartmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => EnrollmentAccountPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type EnrollmentAccountsGetByDepartmentOutput =
  typeof EnrollmentAccountsGetByDepartmentOutput.Type;

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
  );
export type EnrollmentAccountsListByBillingAccountInput =
  typeof EnrollmentAccountsListByBillingAccountInput.Type;

// Output Schema
export const EnrollmentAccountsListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => EnrollmentAccountSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type EnrollmentAccountsListByBillingAccountOutput =
  typeof EnrollmentAccountsListByBillingAccountOutput.Type;

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
  );
export type EnrollmentAccountsListByDepartmentInput =
  typeof EnrollmentAccountsListByDepartmentInput.Type;

// Output Schema
export const EnrollmentAccountsListByDepartmentOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => EnrollmentAccountSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type EnrollmentAccountsListByDepartmentOutput =
  typeof EnrollmentAccountsListByDepartmentOutput.Type;

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
export const InvoicesAmendInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  invoiceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices/{invoiceName}/amend",
    apiVersion: "2024-04-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type InvoicesAmendInput = typeof InvoicesAmendInput.Type;

// Output Schema
export const InvoicesAmendOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InvoicesAmendOutput = typeof InvoicesAmendOutput.Type;

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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type InvoicesDownloadByBillingAccountInput =
  typeof InvoicesDownloadByBillingAccountInput.Type;

// Output Schema
export const InvoicesDownloadByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  });
export type InvoicesDownloadByBillingAccountOutput =
  typeof InvoicesDownloadByBillingAccountOutput.Type;

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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type InvoicesDownloadByBillingSubscriptionInput =
  typeof InvoicesDownloadByBillingSubscriptionInput.Type;

// Output Schema
export const InvoicesDownloadByBillingSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  });
export type InvoicesDownloadByBillingSubscriptionOutput =
  typeof InvoicesDownloadByBillingSubscriptionOutput.Type;

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
export const InvoicesDownloadDocumentsByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/downloadDocuments",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type InvoicesDownloadDocumentsByBillingAccountInput =
  typeof InvoicesDownloadDocumentsByBillingAccountInput.Type;

// Output Schema
export const InvoicesDownloadDocumentsByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  });
export type InvoicesDownloadDocumentsByBillingAccountOutput =
  typeof InvoicesDownloadDocumentsByBillingAccountOutput.Type;

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
export const InvoicesDownloadDocumentsByBillingSubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/default/billingSubscriptions/{subscriptionId}/downloadDocuments",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type InvoicesDownloadDocumentsByBillingSubscriptionInput =
  typeof InvoicesDownloadDocumentsByBillingSubscriptionInput.Type;

// Output Schema
export const InvoicesDownloadDocumentsByBillingSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  });
export type InvoicesDownloadDocumentsByBillingSubscriptionOutput =
  typeof InvoicesDownloadDocumentsByBillingSubscriptionOutput.Type;

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
export const InvoicesDownloadSummaryByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    invoiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices/{invoiceName}/downloadSummary",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type InvoicesDownloadSummaryByBillingAccountInput =
  typeof InvoicesDownloadSummaryByBillingAccountInput.Type;

// Output Schema
export const InvoicesDownloadSummaryByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  });
export type InvoicesDownloadSummaryByBillingAccountOutput =
  typeof InvoicesDownloadSummaryByBillingAccountOutput.Type;

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
export const InvoiceSectionsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => InvoiceSectionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type InvoiceSectionsCreateOrUpdateInput =
  typeof InvoiceSectionsCreateOrUpdateInput.Type;

// Output Schema
export const InvoiceSectionsCreateOrUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => InvoiceSectionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type InvoiceSectionsCreateOrUpdateOutput =
  typeof InvoiceSectionsCreateOrUpdateOutput.Type;

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
      longRunning: { finalStateVia: "location" },
    }),
  );
export type InvoiceSectionsDeleteInput = typeof InvoiceSectionsDeleteInput.Type;

// Output Schema
export const InvoiceSectionsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InvoiceSectionsDeleteOutput =
  typeof InvoiceSectionsDeleteOutput.Type;

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
  );
export type InvoiceSectionsGetInput = typeof InvoiceSectionsGetInput.Type;

// Output Schema
export const InvoiceSectionsGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => InvoiceSectionPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type InvoiceSectionsGetOutput = typeof InvoiceSectionsGetOutput.Type;

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
  );
export type InvoiceSectionsListByBillingProfileInput =
  typeof InvoiceSectionsListByBillingProfileInput.Type;

// Output Schema
export const InvoiceSectionsListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => InvoiceSectionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type InvoiceSectionsListByBillingProfileOutput =
  typeof InvoiceSectionsListByBillingProfileOutput.Type;

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
  );
export type InvoiceSectionsValidateDeleteEligibilityInput =
  typeof InvoiceSectionsValidateDeleteEligibilityInput.Type;

// Output Schema
export const InvoiceSectionsValidateDeleteEligibilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    eligibilityStatus: Schema.optional(
      Schema.suspend(() => DeleteInvoiceSectionEligibilityStatusSchema),
    ),
    eligibilityDetails: Schema.optional(
      Schema.Array(
        Schema.suspend(() => DeleteInvoiceSectionEligibilityDetailSchema),
      ),
    ),
  });
export type InvoiceSectionsValidateDeleteEligibilityOutput =
  typeof InvoiceSectionsValidateDeleteEligibilityOutput.Type;

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
export const InvoicesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  invoiceName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Billing/billingAccounts/default/invoices/{invoiceName}",
    apiVersion: "2024-04-01",
  }),
);
export type InvoicesGetInput = typeof InvoicesGetInput.Type;

// Output Schema
export const InvoicesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => InvoicePropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type InvoicesGetOutput = typeof InvoicesGetOutput.Type;

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
  );
export type InvoicesGetByBillingAccountInput =
  typeof InvoicesGetByBillingAccountInput.Type;

// Output Schema
export const InvoicesGetByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => InvoicePropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type InvoicesGetByBillingAccountOutput =
  typeof InvoicesGetByBillingAccountOutput.Type;

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
  );
export type InvoicesGetByBillingSubscriptionInput =
  typeof InvoicesGetByBillingSubscriptionInput.Type;

// Output Schema
export const InvoicesGetByBillingSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => InvoicePropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type InvoicesGetByBillingSubscriptionOutput =
  typeof InvoicesGetByBillingSubscriptionOutput.Type;

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
  );
export type InvoicesListByBillingAccountInput =
  typeof InvoicesListByBillingAccountInput.Type;

// Output Schema
export const InvoicesListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => InvoiceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type InvoicesListByBillingAccountOutput =
  typeof InvoicesListByBillingAccountOutput.Type;

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
  );
export type InvoicesListByBillingProfileInput =
  typeof InvoicesListByBillingProfileInput.Type;

// Output Schema
export const InvoicesListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => InvoiceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type InvoicesListByBillingProfileOutput =
  typeof InvoicesListByBillingProfileOutput.Type;

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
  );
export type InvoicesListByBillingSubscriptionInput =
  typeof InvoicesListByBillingSubscriptionInput.Type;

// Output Schema
export const InvoicesListByBillingSubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => InvoiceSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type InvoicesListByBillingSubscriptionOutput =
  typeof InvoicesListByBillingSubscriptionOutput.Type;

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
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Billing/operations",
    apiVersion: "2024-04-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Array(Schema.suspend(() => OperationSchema))),
  nextLink: Schema.optional(Schema.String),
});
export type OperationsListOutput = typeof OperationsListOutput.Type;

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
  );
export type PartnerTransfersCancelInput =
  typeof PartnerTransfersCancelInput.Type;

// Output Schema
export const PartnerTransfersCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PartnerTransferPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PartnerTransfersCancelOutput =
  typeof PartnerTransfersCancelOutput.Type;

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
  );
export type PartnerTransfersGetInput = typeof PartnerTransfersGetInput.Type;

// Output Schema
export const PartnerTransfersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PartnerTransferPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PartnerTransfersGetOutput = typeof PartnerTransfersGetOutput.Type;

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
export const PartnerTransfersInitiateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    transferName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => PartnerInitiateTransferPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/transfers/{transferName}",
      apiVersion: "2024-04-01",
    }),
  );
export type PartnerTransfersInitiateInput =
  typeof PartnerTransfersInitiateInput.Type;

// Output Schema
export const PartnerTransfersInitiateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PartnerTransferPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PartnerTransfersInitiateOutput =
  typeof PartnerTransfersInitiateOutput.Type;

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
  );
export type PartnerTransfersListInput = typeof PartnerTransfersListInput.Type;

// Output Schema
export const PartnerTransfersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PartnerTransferDetailsSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PartnerTransfersListOutput = typeof PartnerTransfersListOutput.Type;

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
export const PaymentMethodsDeleteByUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paymentMethodName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/providers/Microsoft.Billing/paymentMethods/{paymentMethodName}",
      apiVersion: "2024-04-01",
    }),
  );
export type PaymentMethodsDeleteByUserInput =
  typeof PaymentMethodsDeleteByUserInput.Type;

// Output Schema
export const PaymentMethodsDeleteByUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PaymentMethodsDeleteByUserOutput =
  typeof PaymentMethodsDeleteByUserOutput.Type;

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
  );
export type PaymentMethodsGetByBillingAccountInput =
  typeof PaymentMethodsGetByBillingAccountInput.Type;

// Output Schema
export const PaymentMethodsGetByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PaymentMethodPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PaymentMethodsGetByBillingAccountOutput =
  typeof PaymentMethodsGetByBillingAccountOutput.Type;

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
  );
export type PaymentMethodsGetByBillingProfileInput =
  typeof PaymentMethodsGetByBillingProfileInput.Type;

// Output Schema
export const PaymentMethodsGetByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PaymentMethodLinkPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PaymentMethodsGetByBillingProfileOutput =
  typeof PaymentMethodsGetByBillingProfileOutput.Type;

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
export const PaymentMethodsGetByUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paymentMethodName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/paymentMethods/{paymentMethodName}",
      apiVersion: "2024-04-01",
    }),
  );
export type PaymentMethodsGetByUserInput =
  typeof PaymentMethodsGetByUserInput.Type;

// Output Schema
export const PaymentMethodsGetByUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => PaymentMethodPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PaymentMethodsGetByUserOutput =
  typeof PaymentMethodsGetByUserOutput.Type;

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
export const PaymentMethodsListByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/paymentMethods",
      apiVersion: "2024-04-01",
    }),
  );
export type PaymentMethodsListByBillingAccountInput =
  typeof PaymentMethodsListByBillingAccountInput.Type;

// Output Schema
export const PaymentMethodsListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PaymentMethodSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PaymentMethodsListByBillingAccountOutput =
  typeof PaymentMethodsListByBillingAccountOutput.Type;

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
  );
export type PaymentMethodsListByBillingProfileInput =
  typeof PaymentMethodsListByBillingProfileInput.Type;

// Output Schema
export const PaymentMethodsListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PaymentMethodLinkSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PaymentMethodsListByBillingProfileOutput =
  typeof PaymentMethodsListByBillingProfileOutput.Type;

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
export const PaymentMethodsListByUserInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/paymentMethods",
      apiVersion: "2024-04-01",
    }),
  );
export type PaymentMethodsListByUserInput =
  typeof PaymentMethodsListByUserInput.Type;

// Output Schema
export const PaymentMethodsListByUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => PaymentMethodSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type PaymentMethodsListByUserOutput =
  typeof PaymentMethodsListByUserOutput.Type;

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
export const PoliciesCreateOrUpdateByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => BillingAccountPolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/policies/default",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PoliciesCreateOrUpdateByBillingAccountInput =
  typeof PoliciesCreateOrUpdateByBillingAccountInput.Type;

// Output Schema
export const PoliciesCreateOrUpdateByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingAccountPolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PoliciesCreateOrUpdateByBillingAccountOutput =
  typeof PoliciesCreateOrUpdateByBillingAccountOutput.Type;

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
export const PoliciesCreateOrUpdateByBillingProfileInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => BillingProfilePolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/policies/default",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PoliciesCreateOrUpdateByBillingProfileInput =
  typeof PoliciesCreateOrUpdateByBillingProfileInput.Type;

// Output Schema
export const PoliciesCreateOrUpdateByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingProfilePolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PoliciesCreateOrUpdateByBillingProfileOutput =
  typeof PoliciesCreateOrUpdateByBillingProfileOutput.Type;

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
export const PoliciesCreateOrUpdateByCustomerInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CustomerPolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/customers/{customerName}/policies/default",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PoliciesCreateOrUpdateByCustomerInput =
  typeof PoliciesCreateOrUpdateByCustomerInput.Type;

// Output Schema
export const PoliciesCreateOrUpdateByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CustomerPolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PoliciesCreateOrUpdateByCustomerOutput =
  typeof PoliciesCreateOrUpdateByCustomerOutput.Type;

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
export const PoliciesCreateOrUpdateByCustomerAtBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    customerName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => CustomerPolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/customers/{customerName}/policies/default",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type PoliciesCreateOrUpdateByCustomerAtBillingAccountInput =
  typeof PoliciesCreateOrUpdateByCustomerAtBillingAccountInput.Type;

// Output Schema
export const PoliciesCreateOrUpdateByCustomerAtBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CustomerPolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PoliciesCreateOrUpdateByCustomerAtBillingAccountOutput =
  typeof PoliciesCreateOrUpdateByCustomerAtBillingAccountOutput.Type;

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
export const PoliciesGetByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/policies/default",
      apiVersion: "2024-04-01",
    }),
  );
export type PoliciesGetByBillingAccountInput =
  typeof PoliciesGetByBillingAccountInput.Type;

// Output Schema
export const PoliciesGetByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingAccountPolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PoliciesGetByBillingAccountOutput =
  typeof PoliciesGetByBillingAccountOutput.Type;

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
  );
export type PoliciesGetByBillingProfileInput =
  typeof PoliciesGetByBillingProfileInput.Type;

// Output Schema
export const PoliciesGetByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => BillingProfilePolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PoliciesGetByBillingProfileOutput =
  typeof PoliciesGetByBillingProfileOutput.Type;

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
  );
export type PoliciesGetByCustomerInput = typeof PoliciesGetByCustomerInput.Type;

// Output Schema
export const PoliciesGetByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CustomerPolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PoliciesGetByCustomerOutput =
  typeof PoliciesGetByCustomerOutput.Type;

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
  );
export type PoliciesGetByCustomerAtBillingAccountInput =
  typeof PoliciesGetByCustomerAtBillingAccountInput.Type;

// Output Schema
export const PoliciesGetByCustomerAtBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => CustomerPolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PoliciesGetByCustomerAtBillingAccountOutput =
  typeof PoliciesGetByCustomerAtBillingAccountOutput.Type;

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
export const PoliciesGetBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.Billing/policies/default",
      apiVersion: "2024-04-01",
    }),
  );
export type PoliciesGetBySubscriptionInput =
  typeof PoliciesGetBySubscriptionInput.Type;

// Output Schema
export const PoliciesGetBySubscriptionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SubscriptionPolicyPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type PoliciesGetBySubscriptionOutput =
  typeof PoliciesGetBySubscriptionOutput.Type;

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
export const ProductsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}",
    apiVersion: "2024-04-01",
  }),
);
export type ProductsGetInput = typeof ProductsGetInput.Type;

// Output Schema
export const ProductsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ProductPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ProductsGetOutput = typeof ProductsGetOutput.Type;

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
  );
export type ProductsListByBillingAccountInput =
  typeof ProductsListByBillingAccountInput.Type;

// Output Schema
export const ProductsListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ProductSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ProductsListByBillingAccountOutput =
  typeof ProductsListByBillingAccountOutput.Type;

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
  );
export type ProductsListByBillingProfileInput =
  typeof ProductsListByBillingProfileInput.Type;

// Output Schema
export const ProductsListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ProductSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ProductsListByBillingProfileOutput =
  typeof ProductsListByBillingProfileOutput.Type;

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
  );
export type ProductsListByCustomerInput =
  typeof ProductsListByCustomerInput.Type;

// Output Schema
export const ProductsListByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ProductSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ProductsListByCustomerOutput =
  typeof ProductsListByCustomerOutput.Type;

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
  );
export type ProductsListByInvoiceSectionInput =
  typeof ProductsListByInvoiceSectionInput.Type;

// Output Schema
export const ProductsListByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ProductSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ProductsListByInvoiceSectionOutput =
  typeof ProductsListByInvoiceSectionOutput.Type;

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
export const ProductsMoveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
  destinationInvoiceSectionId: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}/move",
    apiVersion: "2024-04-01",
    longRunning: { finalStateVia: "location" },
  }),
);
export type ProductsMoveInput = typeof ProductsMoveInput.Type;

// Output Schema
export const ProductsMoveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ProductPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ProductsMoveOutput = typeof ProductsMoveOutput.Type;

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
export const ProductsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  billingAccountName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(Schema.suspend(() => ProductPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/products/{productName}",
    apiVersion: "2024-04-01",
  }),
);
export type ProductsUpdateInput = typeof ProductsUpdateInput.Type;

// Output Schema
export const ProductsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => ProductPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type ProductsUpdateOutput = typeof ProductsUpdateOutput.Type;

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
  );
export type ProductsValidateMoveEligibilityInput =
  typeof ProductsValidateMoveEligibilityInput.Type;

// Output Schema
export const ProductsValidateMoveEligibilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    isMoveEligible: Schema.optional(Schema.Boolean),
    errorDetails: Schema.optional(
      Schema.suspend(() => MoveProductEligibilityResultErrorDetailsSchema),
    ),
  });
export type ProductsValidateMoveEligibilityOutput =
  typeof ProductsValidateMoveEligibilityOutput.Type;

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
export const RecipientTransfersAcceptInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AcceptTransferPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/transfers/{transferName}/accept",
      apiVersion: "2024-04-01",
    }),
  );
export type RecipientTransfersAcceptInput =
  typeof RecipientTransfersAcceptInput.Type;

// Output Schema
export const RecipientTransfersAcceptOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RecipientTransferPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RecipientTransfersAcceptOutput =
  typeof RecipientTransfersAcceptOutput.Type;

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
export const RecipientTransfersDeclineInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/transfers/{transferName}/decline",
      apiVersion: "2024-04-01",
    }),
  );
export type RecipientTransfersDeclineInput =
  typeof RecipientTransfersDeclineInput.Type;

// Output Schema
export const RecipientTransfersDeclineOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RecipientTransferPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RecipientTransfersDeclineOutput =
  typeof RecipientTransfersDeclineOutput.Type;

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
export const RecipientTransfersGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/transfers/{transferName}",
      apiVersion: "2024-04-01",
    }),
  );
export type RecipientTransfersGetInput = typeof RecipientTransfersGetInput.Type;

// Output Schema
export const RecipientTransfersGetOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => RecipientTransferPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type RecipientTransfersGetOutput =
  typeof RecipientTransfersGetOutput.Type;

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
export const RecipientTransfersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.Billing/transfers",
      apiVersion: "2024-04-01",
    }),
  );
export type RecipientTransfersListInput =
  typeof RecipientTransfersListInput.Type;

// Output Schema
export const RecipientTransfersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => RecipientTransferDetailsSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type RecipientTransfersListOutput =
  typeof RecipientTransfersListOutput.Type;

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
export const RecipientTransfersValidateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transferName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => AcceptTransferPropertiesSchema),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/transfers/{transferName}/validate",
      apiVersion: "2024-04-01",
    }),
  );
export type RecipientTransfersValidateInput =
  typeof RecipientTransfersValidateInput.Type;

// Output Schema
export const RecipientTransfersValidateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ValidateTransferResponseSchema)),
    ),
  });
export type RecipientTransfersValidateOutput =
  typeof RecipientTransfersValidateOutput.Type;

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
  );
export type ReservationOrdersGetByBillingAccountInput =
  typeof ReservationOrdersGetByBillingAccountInput.Type;

// Output Schema
export const ReservationOrdersGetByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ReservationOrderPropertySchema),
    ),
    etag: Schema.optional(Schema.Number),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ReservationOrdersGetByBillingAccountOutput =
  typeof ReservationOrdersGetByBillingAccountOutput.Type;

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
  );
export type ReservationOrdersListByBillingAccountInput =
  typeof ReservationOrdersListByBillingAccountInput.Type;

// Output Schema
export const ReservationOrdersListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ReservationOrderSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ReservationOrdersListByBillingAccountOutput =
  typeof ReservationOrdersListByBillingAccountOutput.Type;

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
  );
export type ReservationsGetByReservationOrderInput =
  typeof ReservationsGetByReservationOrderInput.Type;

// Output Schema
export const ReservationsGetByReservationOrderOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ReservationPropertySchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.Number),
    sku: Schema.optional(Schema.suspend(() => ReservationSkuPropertySchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ReservationsGetByReservationOrderOutput =
  typeof ReservationsGetByReservationOrderOutput.Type;

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
  );
export type ReservationsListByBillingAccountInput =
  typeof ReservationsListByBillingAccountInput.Type;

// Output Schema
export const ReservationsListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    summary: Schema.optional(Schema.suspend(() => ReservationSummarySchema)),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ReservationSchema)),
    ),
  });
export type ReservationsListByBillingAccountOutput =
  typeof ReservationsListByBillingAccountOutput.Type;

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
  );
export type ReservationsListByBillingProfileInput =
  typeof ReservationsListByBillingProfileInput.Type;

// Output Schema
export const ReservationsListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    summary: Schema.optional(Schema.suspend(() => ReservationSummarySchema)),
    value: Schema.optional(
      Schema.Array(Schema.suspend(() => ReservationSchema)),
    ),
  });
export type ReservationsListByBillingProfileOutput =
  typeof ReservationsListByBillingProfileOutput.Type;

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
  );
export type ReservationsListByReservationOrderInput =
  typeof ReservationsListByReservationOrderInput.Type;

// Output Schema
export const ReservationsListByReservationOrderOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => ReservationSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type ReservationsListByReservationOrderOutput =
  typeof ReservationsListByReservationOrderOutput.Type;

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
export const ReservationsUpdateByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    reservationOrderId: Schema.String.pipe(T.PathParam()),
    reservationId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(Schema.suspend(() => PatchPropertiesSchema)),
    sku: Schema.optional(Schema.suspend(() => ReservationSkuPropertySchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/reservationOrders/{reservationOrderId}/reservations/{reservationId}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type ReservationsUpdateByBillingAccountInput =
  typeof ReservationsUpdateByBillingAccountInput.Type;

// Output Schema
export const ReservationsUpdateByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => ReservationPropertySchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.Number),
    sku: Schema.optional(Schema.suspend(() => ReservationSkuPropertySchema)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type ReservationsUpdateByBillingAccountOutput =
  typeof ReservationsUpdateByBillingAccountOutput.Type;

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
  );
export type SavingsPlanOrdersGetByBillingAccountInput =
  typeof SavingsPlanOrdersGetByBillingAccountInput.Type;

// Output Schema
export const SavingsPlanOrdersGetByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SavingsPlanOrderModelPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.suspend(() => SkuSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SavingsPlanOrdersGetByBillingAccountOutput =
  typeof SavingsPlanOrdersGetByBillingAccountOutput.Type;

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
  );
export type SavingsPlanOrdersListByBillingAccountInput =
  typeof SavingsPlanOrdersListByBillingAccountInput.Type;

// Output Schema
export const SavingsPlanOrdersListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SavingsPlanOrderModelSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SavingsPlanOrdersListByBillingAccountOutput =
  typeof SavingsPlanOrdersListByBillingAccountOutput.Type;

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
  );
export type SavingsPlansGetByBillingAccountInput =
  typeof SavingsPlansGetByBillingAccountInput.Type;

// Output Schema
export const SavingsPlansGetByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SavingsPlanModelPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.suspend(() => SkuSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SavingsPlansGetByBillingAccountOutput =
  typeof SavingsPlansGetByBillingAccountOutput.Type;

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
  );
export type SavingsPlansListByBillingAccountInput =
  typeof SavingsPlansListByBillingAccountInput.Type;

// Output Schema
export const SavingsPlansListByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    summary: Schema.suspend(() => SavingsPlanSummaryCountSchema),
    value: Schema.Array(Schema.suspend(() => SavingsPlanModelSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SavingsPlansListByBillingAccountOutput =
  typeof SavingsPlansListByBillingAccountOutput.Type;

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
  );
export type SavingsPlansListBySavingsPlanOrderInput =
  typeof SavingsPlansListBySavingsPlanOrderInput.Type;

// Output Schema
export const SavingsPlansListBySavingsPlanOrderOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => SavingsPlanModelSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type SavingsPlansListBySavingsPlanOrderOutput =
  typeof SavingsPlansListBySavingsPlanOrderOutput.Type;

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
export const SavingsPlansUpdateByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
    savingsPlanId: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => SavingsPlanUpdateRequestPropertiesSchema),
    ),
    sku: Schema.optional(Schema.suspend(() => SkuSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans/{savingsPlanId}",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "azure-async-operation" },
    }),
  );
export type SavingsPlansUpdateByBillingAccountInput =
  typeof SavingsPlansUpdateByBillingAccountInput.Type;

// Output Schema
export const SavingsPlansUpdateByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(
      Schema.suspend(() => SavingsPlanModelPropertiesSchema),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    sku: Schema.suspend(() => SkuSchema),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type SavingsPlansUpdateByBillingAccountOutput =
  typeof SavingsPlansUpdateByBillingAccountOutput.Type;

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
export const SavingsPlansValidateUpdateByBillingAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    savingsPlanOrderId: Schema.String.pipe(T.PathParam()),
    savingsPlanId: Schema.String.pipe(T.PathParam()),
    benefits: Schema.optional(
      Schema.Array(
        Schema.suspend(() => SavingsPlanUpdateRequestPropertiesSchema),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/savingsPlanOrders/{savingsPlanOrderId}/savingsPlans/{savingsPlanId}/validate",
      apiVersion: "2024-04-01",
    }),
  );
export type SavingsPlansValidateUpdateByBillingAccountInput =
  typeof SavingsPlansValidateUpdateByBillingAccountInput.Type;

// Output Schema
export const SavingsPlansValidateUpdateByBillingAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    benefits: Schema.optional(
      Schema.Array(
        Schema.suspend(() => SavingsPlanValidResponsePropertySchema),
      ),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type SavingsPlansValidateUpdateByBillingAccountOutput =
  typeof SavingsPlansValidateUpdateByBillingAccountOutput.Type;

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
  );
export type TransactionsGetTransactionSummaryByInvoiceInput =
  typeof TransactionsGetTransactionSummaryByInvoiceInput.Type;

// Output Schema
export const TransactionsGetTransactionSummaryByInvoiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    azureCreditApplied: Schema.optional(Schema.Number),
    billingCurrency: Schema.optional(Schema.String),
    consumptionCommitmentDecremented: Schema.optional(Schema.Number),
    subTotal: Schema.optional(Schema.Number),
    tax: Schema.optional(Schema.Number),
    total: Schema.optional(Schema.Number),
  });
export type TransactionsGetTransactionSummaryByInvoiceOutput =
  typeof TransactionsGetTransactionSummaryByInvoiceOutput.Type;

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
  );
export type TransactionsListByBillingProfileInput =
  typeof TransactionsListByBillingProfileInput.Type;

// Output Schema
export const TransactionsListByBillingProfileOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => TransactionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type TransactionsListByBillingProfileOutput =
  typeof TransactionsListByBillingProfileOutput.Type;

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
  );
export type TransactionsListByCustomerInput =
  typeof TransactionsListByCustomerInput.Type;

// Output Schema
export const TransactionsListByCustomerOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => TransactionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type TransactionsListByCustomerOutput =
  typeof TransactionsListByCustomerOutput.Type;

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
  );
export type TransactionsListByInvoiceInput =
  typeof TransactionsListByInvoiceInput.Type;

// Output Schema
export const TransactionsListByInvoiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => TransactionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type TransactionsListByInvoiceOutput =
  typeof TransactionsListByInvoiceOutput.Type;

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
  );
export type TransactionsListByInvoiceSectionInput =
  typeof TransactionsListByInvoiceSectionInput.Type;

// Output Schema
export const TransactionsListByInvoiceSectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(Schema.suspend(() => TransactionSchema)),
    nextLink: Schema.optional(Schema.String),
  });
export type TransactionsListByInvoiceSectionOutput =
  typeof TransactionsListByInvoiceSectionOutput.Type;

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
export const TransactionsTransactionsDownloadByInvoiceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    billingAccountName: Schema.String.pipe(T.PathParam()),
    invoiceName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/invoices/{invoiceName}/transactionsDownload",
      apiVersion: "2024-04-01",
      longRunning: { finalStateVia: "location" },
    }),
  );
export type TransactionsTransactionsDownloadByInvoiceInput =
  typeof TransactionsTransactionsDownloadByInvoiceInput.Type;

// Output Schema
export const TransactionsTransactionsDownloadByInvoiceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    expiryTime: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
  });
export type TransactionsTransactionsDownloadByInvoiceOutput =
  typeof TransactionsTransactionsDownloadByInvoiceOutput.Type;

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
);
export type TransfersCancelInput = typeof TransfersCancelInput.Type;

// Output Schema
export const TransfersCancelOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => TransferPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type TransfersCancelOutput = typeof TransfersCancelOutput.Type;

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
);
export type TransfersGetInput = typeof TransfersGetInput.Type;

// Output Schema
export const TransfersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  properties: Schema.optional(Schema.suspend(() => TransferPropertiesSchema)),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
});
export type TransfersGetOutput = typeof TransfersGetOutput.Type;

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
export const TransfersInitiateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    billingAccountName: Schema.String.pipe(T.PathParam()),
    billingProfileName: Schema.String.pipe(T.PathParam()),
    invoiceSectionName: Schema.String.pipe(T.PathParam()),
    transferName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.suspend(() => InitiateTransferPropertiesSchema),
    ),
  },
).pipe(
  T.Http({
    method: "PUT",
    path: "/providers/Microsoft.Billing/billingAccounts/{billingAccountName}/billingProfiles/{billingProfileName}/invoiceSections/{invoiceSectionName}/transfers/{transferName}",
    apiVersion: "2024-04-01",
  }),
);
export type TransfersInitiateInput = typeof TransfersInitiateInput.Type;

// Output Schema
export const TransfersInitiateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    properties: Schema.optional(Schema.suspend(() => TransferPropertiesSchema)),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    systemData: Schema.optional(Schema.suspend(() => systemDataSchema)),
  });
export type TransfersInitiateOutput = typeof TransfersInitiateOutput.Type;

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
);
export type TransfersListInput = typeof TransfersListInput.Type;

// Output Schema
export const TransfersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(Schema.suspend(() => TransferDetailsSchema)),
  nextLink: Schema.optional(Schema.String),
});
export type TransfersListOutput = typeof TransfersListOutput.Type;

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
