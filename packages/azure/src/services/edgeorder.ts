/**
 * Azure Edgeorder API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface AddressesCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  addressName: string;
  properties: {
    addressClassification?: "Shipping" | "Site";
    shippingAddress?: {
      streetAddress1?: string;
      streetAddress2?: string;
      streetAddress3?: string;
      city?: string;
      stateOrProvince?: string;
      country: string;
      postalCode?: string;
      zipExtendedCode?: string;
      companyName?: string;
      addressType?: "None" | "Residential" | "Commercial";
    };
    contactDetails?: {
      contactName?: string;
      phone?: string;
      phoneExtension?: string;
      mobile?: string;
      emailList?: string[];
    };
    addressValidationStatus?: "Valid" | "Invalid" | "Ambiguous";
    provisioningState?: "Creating" | "Succeeded" | "Failed" | "Canceled";
  };
  tags?: Record<string, string>;
  location: string;
}
export const AddressesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  addressName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    addressClassification: Schema.optional(
      Schema.Literals(["Shipping", "Site"]),
    ),
    shippingAddress: Schema.optional(
      Schema.Struct({
        streetAddress1: Schema.optional(Schema.String),
        streetAddress2: Schema.optional(Schema.String),
        streetAddress3: Schema.optional(Schema.String),
        city: Schema.optional(Schema.String),
        stateOrProvince: Schema.optional(Schema.String),
        country: Schema.String,
        postalCode: Schema.optional(Schema.String),
        zipExtendedCode: Schema.optional(Schema.String),
        companyName: Schema.optional(Schema.String),
        addressType: Schema.optional(
          Schema.Literals(["None", "Residential", "Commercial"]),
        ),
      }),
    ),
    contactDetails: Schema.optional(
      Schema.Struct({
        contactName: Schema.optional(Schema.String),
        phone: Schema.optional(Schema.String),
        phoneExtension: Schema.optional(Schema.String),
        mobile: Schema.optional(Schema.String),
        emailList: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    addressValidationStatus: Schema.optional(
      Schema.Literals(["Valid", "Invalid", "Ambiguous"]),
    ),
    provisioningState: Schema.optional(
      Schema.Literals(["Creating", "Succeeded", "Failed", "Canceled"]),
    ),
  }),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/addresses/{addressName}",
    apiVersion: "2024-02-01",
  }),
) as unknown as Schema.Codec<AddressesCreateInput>;

// Output Schema
export interface AddressesCreateOutput {
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
export const AddressesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AddressesCreateOutput>;

// The operation
/**
 * Create a new address with the specified parameters. Existing address cannot be updated with this API and should
 * instead be updated with the Update address API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param addressName - The name of the address Resource within the specified resource group. address names must be between 3 and 24 characters in length and use any alphanumeric and underscore only.
 */
export const AddressesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddressesCreateInput,
  outputSchema: AddressesCreateOutput,
}));
// Input Schema
export interface AddressesDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  addressName: string;
}
export const AddressesDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  addressName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/addresses/{addressName}",
    apiVersion: "2024-02-01",
  }),
) as unknown as Schema.Codec<AddressesDeleteInput>;

// Output Schema
export type AddressesDeleteOutput = void;
export const AddressesDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AddressesDeleteOutput>;

// The operation
/**
 * Delete an address.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param addressName - The name of the address Resource within the specified resource group. address names must be between 3 and 24 characters in length and use any alphanumeric and underscore only.
 */
export const AddressesDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddressesDeleteInput,
  outputSchema: AddressesDeleteOutput,
}));
// Input Schema
export interface AddressesGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  addressName: string;
}
export const AddressesGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  addressName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/addresses/{addressName}",
    apiVersion: "2024-02-01",
  }),
) as unknown as Schema.Codec<AddressesGetInput>;

// Output Schema
export interface AddressesGetOutput {
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
export const AddressesGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AddressesGetOutput>;

// The operation
/**
 * Get information about the specified address.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param addressName - The name of the address Resource within the specified resource group. address names must be between 3 and 24 characters in length and use any alphanumeric and underscore only.
 */
export const AddressesGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddressesGetInput,
  outputSchema: AddressesGetOutput,
}));
// Input Schema
export interface AddressesListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $skipToken?: string;
  $top?: number;
}
export const AddressesListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/addresses",
      apiVersion: "2024-02-01",
    }),
  ) as unknown as Schema.Codec<AddressesListByResourceGroupInput>;

// Output Schema
export interface AddressesListByResourceGroupOutput {
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
export const AddressesListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<AddressesListByResourceGroupOutput>;

// The operation
/**
 * List all the addresses available under the given resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - $filter is supported to filter based on shipping address properties. Filter supports only equals operation.
 * @param $skipToken - $skipToken is supported on Get list of addresses, which provides the next page in the list of addresses.
 * @param $top - $top is supported on fetching list of resources. $top=10 means that the first 10 items in the list will be returned to the API caller.
 */
export const AddressesListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AddressesListByResourceGroupInput,
    outputSchema: AddressesListByResourceGroupOutput,
  }));
// Input Schema
export interface AddressesListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  $skipToken?: string;
  $top?: number;
}
export const AddressesListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeOrder/addresses",
      apiVersion: "2024-02-01",
    }),
  ) as unknown as Schema.Codec<AddressesListBySubscriptionInput>;

// Output Schema
export interface AddressesListBySubscriptionOutput {
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
export const AddressesListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<AddressesListBySubscriptionOutput>;

// The operation
/**
 * List all the addresses available under the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $filter - $filter is supported to filter based on shipping address properties. Filter supports only equals operation.
 * @param $skipToken - $skipToken is supported on Get list of addresses, which provides the next page in the list of addresses.
 * @param $top - $top is supported on fetching list of resources. $top=10 means that the first 10 items in the list will be returned to the API caller.
 */
export const AddressesListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AddressesListBySubscriptionInput,
    outputSchema: AddressesListBySubscriptionOutput,
  }),
);
// Input Schema
export interface AddressesUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  addressName: string;
  properties?: {
    shippingAddress?: {
      streetAddress1?: string;
      streetAddress2?: string;
      streetAddress3?: string;
      city?: string;
      stateOrProvince?: string;
      country: string;
      postalCode?: string;
      zipExtendedCode?: string;
      companyName?: string;
      addressType?: "None" | "Residential" | "Commercial";
    };
    contactDetails?: {
      contactName?: string;
      phone?: string;
      phoneExtension?: string;
      mobile?: string;
      emailList?: string[];
    };
  };
  tags?: Record<string, string>;
}
export const AddressesUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  addressName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      shippingAddress: Schema.optional(
        Schema.Struct({
          streetAddress1: Schema.optional(Schema.String),
          streetAddress2: Schema.optional(Schema.String),
          streetAddress3: Schema.optional(Schema.String),
          city: Schema.optional(Schema.String),
          stateOrProvince: Schema.optional(Schema.String),
          country: Schema.String,
          postalCode: Schema.optional(Schema.String),
          zipExtendedCode: Schema.optional(Schema.String),
          companyName: Schema.optional(Schema.String),
          addressType: Schema.optional(
            Schema.Literals(["None", "Residential", "Commercial"]),
          ),
        }),
      ),
      contactDetails: Schema.optional(
        Schema.Struct({
          contactName: Schema.optional(Schema.String),
          phone: Schema.optional(Schema.String),
          phoneExtension: Schema.optional(Schema.String),
          mobile: Schema.optional(Schema.String),
          emailList: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/addresses/{addressName}",
    apiVersion: "2024-02-01",
  }),
) as unknown as Schema.Codec<AddressesUpdateInput>;

// Output Schema
export interface AddressesUpdateOutput {
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
export const AddressesUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<AddressesUpdateOutput>;

// The operation
/**
 * Update the properties of an existing address.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param addressName - The name of the address Resource within the specified resource group. address names must be between 3 and 24 characters in length and use any alphanumeric and underscore only.
 * @param If-Match - Defines the If-Match condition. The patch will be performed only if the ETag of the job on the server matches this value.
 */
export const AddressesUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddressesUpdateInput,
  outputSchema: AddressesUpdateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.EdgeOrder/operations",
    apiVersion: "2024-02-01",
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
export interface OrderItemsCancelInput {
  subscriptionId: string;
  resourceGroupName: string;
  orderItemName: string;
  reason: string;
}
export const OrderItemsCancelInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  orderItemName: Schema.String.pipe(T.PathParam()),
  reason: Schema.String,
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orderItems/{orderItemName}/cancel",
    apiVersion: "2024-02-01",
  }),
) as unknown as Schema.Codec<OrderItemsCancelInput>;

// Output Schema
export type OrderItemsCancelOutput = void;
export const OrderItemsCancelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<OrderItemsCancelOutput>;

// The operation
/**
 * Cancel order item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param orderItemName - The name of the order item.
 */
export const OrderItemsCancel = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrderItemsCancelInput,
  outputSchema: OrderItemsCancelOutput,
}));
// Input Schema
export interface OrderItemsCreateInput {
  subscriptionId: string;
  resourceGroupName: string;
  orderItemName: string;
  properties: {
    orderItemDetails: {
      productDetails: {
        displayInfo?: {
          productFamilyDisplayName?: string;
          configurationDisplayName?: string;
        };
        hierarchyInformation: {
          productFamilyName?: string;
          productLineName?: string;
          productName?: string;
          configurationName?: string;
          configurationIdDisplayName?: string;
        };
        productDoubleEncryptionStatus?: "Disabled" | "Enabled";
        identificationType?: "NotSupported" | "SerialNumber";
        parentDeviceDetails?: {
          serialNumber?: string;
          displaySerialNumber?: string;
          managementResourceId?: string;
          managementResourceTenantId?: string;
          provisioningSupport?: "CloudBased" | "Manual";
          provisioningDetails?: {
            quantity?: number;
            provisioningArmId?: string;
            provisioningEndPoint?: string;
            serialNumber?: string;
            vendorName?: string;
            readyToConnectArmId?: string;
            managementResourceArmId?: string;
            uniqueDeviceIdentifier?: string;
            autoProvisioningStatus?: "Enabled" | "Disabled";
            devicePresenceVerification?: {
              status?: "NotInitiated" | "Completed";
              message?: string;
            };
          };
        };
        parentProvisioningDetails?: {
          quantity?: number;
          provisioningArmId?: string;
          provisioningEndPoint?: string;
          serialNumber?: string;
          vendorName?: string;
          readyToConnectArmId?: string;
          managementResourceArmId?: string;
          uniqueDeviceIdentifier?: string;
          autoProvisioningStatus?: "Enabled" | "Disabled";
          devicePresenceVerification?: {
            status?: "NotInitiated" | "Completed";
            message?: string;
          };
        };
        optInAdditionalConfigurations?: {
          hierarchyInformation: {
            productFamilyName?: string;
            productLineName?: string;
            productName?: string;
            configurationName?: string;
            configurationIdDisplayName?: string;
          };
          quantity: number;
          provisioningDetails?: {
            quantity?: number;
            provisioningArmId?: string;
            provisioningEndPoint?: string;
            serialNumber?: string;
            vendorName?: string;
            readyToConnectArmId?: string;
            managementResourceArmId?: string;
            uniqueDeviceIdentifier?: string;
            autoProvisioningStatus?: "Enabled" | "Disabled";
            devicePresenceVerification?: {
              status?: "NotInitiated" | "Completed";
              message?: string;
            };
          }[];
        }[];
        childConfigurationDeviceDetails?: {
          displayInfo?: {
            productFamilyDisplayName?: string;
            configurationDisplayName?: string;
          };
          hierarchyInformation?: {
            productFamilyName?: string;
            productLineName?: string;
            productName?: string;
            configurationName?: string;
            configurationIdDisplayName?: string;
          };
          quantity?: number;
          identificationType?: "NotSupported" | "SerialNumber";
          deviceDetails?: {
            serialNumber?: string;
            displaySerialNumber?: string;
            managementResourceId?: string;
            managementResourceTenantId?: string;
            provisioningSupport?: "CloudBased" | "Manual";
            provisioningDetails?: {
              quantity?: number;
              provisioningArmId?: string;
              provisioningEndPoint?: string;
              serialNumber?: string;
              vendorName?: string;
              readyToConnectArmId?: string;
              managementResourceArmId?: string;
              uniqueDeviceIdentifier?: string;
              autoProvisioningStatus?: "Enabled" | "Disabled";
              devicePresenceVerification?: {
                status?: "NotInitiated" | "Completed";
                message?: string;
              };
            };
          }[];
          termCommitmentInformation?: {
            termCommitmentType: "None" | "Trial" | "Timed";
            termCommitmentTypeDuration?: string;
            pendingDaysForTerm?: number;
          };
        }[];
        termCommitmentInformation?: {
          termCommitmentType: "None" | "Trial" | "Timed";
          termCommitmentTypeDuration?: string;
          pendingDaysForTerm?: number;
        };
      };
      orderItemType: "Purchase" | "Rental" | "External";
      orderItemMode?: "Default" | "DoNotFulfill";
      siteDetails?: { siteId: string };
      currentStage?: {
        stageStatus?:
          | "None"
          | "InProgress"
          | "Succeeded"
          | "Failed"
          | "Cancelled"
          | "Cancelling";
        stageName?:
          | "Placed"
          | "InReview"
          | "Confirmed"
          | "ReadyToShip"
          | "Shipped"
          | "Delivered"
          | "ReadyToSetup"
          | "InUse"
          | "ReturnInitiated"
          | "ReturnPickedUp"
          | "ReturnedToMicrosoft"
          | "ReturnCompleted"
          | "Cancelled";
        displayName?: string;
        startTime?: string;
      };
      orderItemStageHistory?: {
        stageStatus?:
          | "None"
          | "InProgress"
          | "Succeeded"
          | "Failed"
          | "Cancelled"
          | "Cancelling";
        stageName?:
          | "Placed"
          | "InReview"
          | "Confirmed"
          | "ReadyToShip"
          | "Shipped"
          | "Delivered"
          | "ReadyToSetup"
          | "InUse"
          | "ReturnInitiated"
          | "ReturnPickedUp"
          | "ReturnedToMicrosoft"
          | "ReturnCompleted"
          | "Cancelled";
        displayName?: string;
        startTime?: string;
      }[];
      preferences?: {
        notificationPreferences?: {
          stageName: "Shipped" | "Delivered";
          sendNotification: boolean;
        }[];
        transportPreferences?: {
          preferredShipmentType: "CustomerManaged" | "MicrosoftManaged";
        };
        encryptionPreferences?: {
          doubleEncryptionStatus?: "Disabled" | "Enabled";
        };
        managementResourcePreferences?: {
          preferredManagementResourceId?: string;
        };
        termCommitmentPreferences?: {
          preferredTermCommitmentType: "None" | "Trial" | "Timed";
          preferredTermCommitmentDuration?: string;
        };
      };
      forwardShippingDetails?: {
        carrierName?: string;
        carrierDisplayName?: string;
        trackingId?: string;
        trackingUrl?: string;
      };
      reverseShippingDetails?: {
        sasKeyForLabel?: string;
        carrierName?: string;
        carrierDisplayName?: string;
        trackingId?: string;
        trackingUrl?: string;
      };
      notificationEmailList?: string[];
      cancellationReason?: string;
      cancellationStatus?:
        | "Cancellable"
        | "CancellableWithFee"
        | "NotCancellable";
      deletionStatus?: "Allowed" | "NotAllowed";
      returnReason?: string;
      returnStatus?: "Returnable" | "ReturnableWithFee" | "NotReturnable";
      managementRpDetailsList?: { resourceProviderNamespace?: string }[];
      error?: {
        code?: string;
        message?: string;
        target?: string;
        details?: {
          code?: string;
          message?: string;
          target?: string;
          details?: unknown[];
          additionalInfo?: { type?: string; info?: unknown }[];
        }[];
        additionalInfo?: { type?: string; info?: unknown }[];
      };
    };
    addressDetails?: {
      forwardAddress: {
        addressClassification?: "Shipping" | "Site";
        shippingAddress?: {
          streetAddress1?: string;
          streetAddress2?: string;
          streetAddress3?: string;
          city?: string;
          stateOrProvince?: string;
          country: string;
          postalCode?: string;
          zipExtendedCode?: string;
          companyName?: string;
          addressType?: "None" | "Residential" | "Commercial";
        };
        contactDetails?: {
          contactName?: string;
          phone?: string;
          phoneExtension?: string;
          mobile?: string;
          emailList?: string[];
        };
        addressValidationStatus?: "Valid" | "Invalid" | "Ambiguous";
        provisioningState?: "Creating" | "Succeeded" | "Failed" | "Canceled";
      };
      returnAddress?: {
        addressClassification?: "Shipping" | "Site";
        shippingAddress?: {
          streetAddress1?: string;
          streetAddress2?: string;
          streetAddress3?: string;
          city?: string;
          stateOrProvince?: string;
          country: string;
          postalCode?: string;
          zipExtendedCode?: string;
          companyName?: string;
          addressType?: "None" | "Residential" | "Commercial";
        };
        contactDetails?: {
          contactName?: string;
          phone?: string;
          phoneExtension?: string;
          mobile?: string;
          emailList?: string[];
        };
        addressValidationStatus?: "Valid" | "Invalid" | "Ambiguous";
        provisioningState?: "Creating" | "Succeeded" | "Failed" | "Canceled";
      };
    };
    startTime?: string;
    orderId: string;
    provisioningState?: "Creating" | "Succeeded" | "Failed" | "Canceled";
  };
  identity?: {
    type?: string;
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  tags?: Record<string, string>;
  location: string;
}
export const OrderItemsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  orderItemName: Schema.String.pipe(T.PathParam()),
  properties: Schema.Struct({
    orderItemDetails: Schema.Struct({
      productDetails: Schema.Struct({
        displayInfo: Schema.optional(
          Schema.Struct({
            productFamilyDisplayName: Schema.optional(Schema.String),
            configurationDisplayName: Schema.optional(Schema.String),
          }),
        ),
        hierarchyInformation: Schema.Struct({
          productFamilyName: Schema.optional(Schema.String),
          productLineName: Schema.optional(Schema.String),
          productName: Schema.optional(Schema.String),
          configurationName: Schema.optional(Schema.String),
          configurationIdDisplayName: Schema.optional(Schema.String),
        }),
        productDoubleEncryptionStatus: Schema.optional(
          Schema.Literals(["Disabled", "Enabled"]),
        ),
        identificationType: Schema.optional(
          Schema.Literals(["NotSupported", "SerialNumber"]),
        ),
        parentDeviceDetails: Schema.optional(
          Schema.Struct({
            serialNumber: Schema.optional(Schema.String),
            displaySerialNumber: Schema.optional(Schema.String),
            managementResourceId: Schema.optional(Schema.String),
            managementResourceTenantId: Schema.optional(Schema.String),
            provisioningSupport: Schema.optional(
              Schema.Literals(["CloudBased", "Manual"]),
            ),
            provisioningDetails: Schema.optional(
              Schema.Struct({
                quantity: Schema.optional(Schema.Number),
                provisioningArmId: Schema.optional(Schema.String),
                provisioningEndPoint: Schema.optional(Schema.String),
                serialNumber: Schema.optional(Schema.String),
                vendorName: Schema.optional(Schema.String),
                readyToConnectArmId: Schema.optional(Schema.String),
                managementResourceArmId: Schema.optional(Schema.String),
                uniqueDeviceIdentifier: Schema.optional(Schema.String),
                autoProvisioningStatus: Schema.optional(
                  Schema.Literals(["Enabled", "Disabled"]),
                ),
                devicePresenceVerification: Schema.optional(
                  Schema.Struct({
                    status: Schema.optional(
                      Schema.Literals(["NotInitiated", "Completed"]),
                    ),
                    message: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        parentProvisioningDetails: Schema.optional(
          Schema.Struct({
            quantity: Schema.optional(Schema.Number),
            provisioningArmId: Schema.optional(Schema.String),
            provisioningEndPoint: Schema.optional(Schema.String),
            serialNumber: Schema.optional(Schema.String),
            vendorName: Schema.optional(Schema.String),
            readyToConnectArmId: Schema.optional(Schema.String),
            managementResourceArmId: Schema.optional(Schema.String),
            uniqueDeviceIdentifier: Schema.optional(Schema.String),
            autoProvisioningStatus: Schema.optional(
              Schema.Literals(["Enabled", "Disabled"]),
            ),
            devicePresenceVerification: Schema.optional(
              Schema.Struct({
                status: Schema.optional(
                  Schema.Literals(["NotInitiated", "Completed"]),
                ),
                message: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
        optInAdditionalConfigurations: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hierarchyInformation: Schema.Struct({
                productFamilyName: Schema.optional(Schema.String),
                productLineName: Schema.optional(Schema.String),
                productName: Schema.optional(Schema.String),
                configurationName: Schema.optional(Schema.String),
                configurationIdDisplayName: Schema.optional(Schema.String),
              }),
              quantity: Schema.Number,
              provisioningDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    quantity: Schema.optional(Schema.Number),
                    provisioningArmId: Schema.optional(Schema.String),
                    provisioningEndPoint: Schema.optional(Schema.String),
                    serialNumber: Schema.optional(Schema.String),
                    vendorName: Schema.optional(Schema.String),
                    readyToConnectArmId: Schema.optional(Schema.String),
                    managementResourceArmId: Schema.optional(Schema.String),
                    uniqueDeviceIdentifier: Schema.optional(Schema.String),
                    autoProvisioningStatus: Schema.optional(
                      Schema.Literals(["Enabled", "Disabled"]),
                    ),
                    devicePresenceVerification: Schema.optional(
                      Schema.Struct({
                        status: Schema.optional(
                          Schema.Literals(["NotInitiated", "Completed"]),
                        ),
                        message: Schema.optional(Schema.String),
                      }),
                    ),
                  }),
                ),
              ),
            }),
          ),
        ),
        childConfigurationDeviceDetails: Schema.optional(
          Schema.Array(
            Schema.Struct({
              displayInfo: Schema.optional(
                Schema.Struct({
                  productFamilyDisplayName: Schema.optional(Schema.String),
                  configurationDisplayName: Schema.optional(Schema.String),
                }),
              ),
              hierarchyInformation: Schema.optional(
                Schema.Struct({
                  productFamilyName: Schema.optional(Schema.String),
                  productLineName: Schema.optional(Schema.String),
                  productName: Schema.optional(Schema.String),
                  configurationName: Schema.optional(Schema.String),
                  configurationIdDisplayName: Schema.optional(Schema.String),
                }),
              ),
              quantity: Schema.optional(Schema.Number),
              identificationType: Schema.optional(
                Schema.Literals(["NotSupported", "SerialNumber"]),
              ),
              deviceDetails: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    serialNumber: Schema.optional(Schema.String),
                    displaySerialNumber: Schema.optional(Schema.String),
                    managementResourceId: Schema.optional(Schema.String),
                    managementResourceTenantId: Schema.optional(Schema.String),
                    provisioningSupport: Schema.optional(
                      Schema.Literals(["CloudBased", "Manual"]),
                    ),
                    provisioningDetails: Schema.optional(
                      Schema.Struct({
                        quantity: Schema.optional(Schema.Number),
                        provisioningArmId: Schema.optional(Schema.String),
                        provisioningEndPoint: Schema.optional(Schema.String),
                        serialNumber: Schema.optional(Schema.String),
                        vendorName: Schema.optional(Schema.String),
                        readyToConnectArmId: Schema.optional(Schema.String),
                        managementResourceArmId: Schema.optional(Schema.String),
                        uniqueDeviceIdentifier: Schema.optional(Schema.String),
                        autoProvisioningStatus: Schema.optional(
                          Schema.Literals(["Enabled", "Disabled"]),
                        ),
                        devicePresenceVerification: Schema.optional(
                          Schema.Struct({
                            status: Schema.optional(
                              Schema.Literals(["NotInitiated", "Completed"]),
                            ),
                            message: Schema.optional(Schema.String),
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
              ),
              termCommitmentInformation: Schema.optional(
                Schema.Struct({
                  termCommitmentType: Schema.Literals([
                    "None",
                    "Trial",
                    "Timed",
                  ]),
                  termCommitmentTypeDuration: Schema.optional(Schema.String),
                  pendingDaysForTerm: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
        ),
        termCommitmentInformation: Schema.optional(
          Schema.Struct({
            termCommitmentType: Schema.Literals(["None", "Trial", "Timed"]),
            termCommitmentTypeDuration: Schema.optional(Schema.String),
            pendingDaysForTerm: Schema.optional(Schema.Number),
          }),
        ),
      }),
      orderItemType: Schema.Literals(["Purchase", "Rental", "External"]),
      orderItemMode: Schema.optional(
        Schema.Literals(["Default", "DoNotFulfill"]),
      ),
      siteDetails: Schema.optional(
        Schema.Struct({
          siteId: Schema.String,
        }),
      ),
      currentStage: Schema.optional(
        Schema.Struct({
          stageStatus: Schema.optional(
            Schema.Literals([
              "None",
              "InProgress",
              "Succeeded",
              "Failed",
              "Cancelled",
              "Cancelling",
            ]),
          ),
          stageName: Schema.optional(
            Schema.Literals([
              "Placed",
              "InReview",
              "Confirmed",
              "ReadyToShip",
              "Shipped",
              "Delivered",
              "ReadyToSetup",
              "InUse",
              "ReturnInitiated",
              "ReturnPickedUp",
              "ReturnedToMicrosoft",
              "ReturnCompleted",
              "Cancelled",
            ]),
          ),
          displayName: Schema.optional(Schema.String),
          startTime: Schema.optional(Schema.String),
        }),
      ),
      orderItemStageHistory: Schema.optional(
        Schema.Array(
          Schema.Struct({
            stageStatus: Schema.optional(
              Schema.Literals([
                "None",
                "InProgress",
                "Succeeded",
                "Failed",
                "Cancelled",
                "Cancelling",
              ]),
            ),
            stageName: Schema.optional(
              Schema.Literals([
                "Placed",
                "InReview",
                "Confirmed",
                "ReadyToShip",
                "Shipped",
                "Delivered",
                "ReadyToSetup",
                "InUse",
                "ReturnInitiated",
                "ReturnPickedUp",
                "ReturnedToMicrosoft",
                "ReturnCompleted",
                "Cancelled",
              ]),
            ),
            displayName: Schema.optional(Schema.String),
            startTime: Schema.optional(Schema.String),
          }),
        ),
      ),
      preferences: Schema.optional(
        Schema.Struct({
          notificationPreferences: Schema.optional(
            Schema.Array(
              Schema.Struct({
                stageName: Schema.Literals(["Shipped", "Delivered"]),
                sendNotification: Schema.Boolean,
              }),
            ),
          ),
          transportPreferences: Schema.optional(
            Schema.Struct({
              preferredShipmentType: Schema.Literals([
                "CustomerManaged",
                "MicrosoftManaged",
              ]),
            }),
          ),
          encryptionPreferences: Schema.optional(
            Schema.Struct({
              doubleEncryptionStatus: Schema.optional(
                Schema.Literals(["Disabled", "Enabled"]),
              ),
            }),
          ),
          managementResourcePreferences: Schema.optional(
            Schema.Struct({
              preferredManagementResourceId: Schema.optional(Schema.String),
            }),
          ),
          termCommitmentPreferences: Schema.optional(
            Schema.Struct({
              preferredTermCommitmentType: Schema.Literals([
                "None",
                "Trial",
                "Timed",
              ]),
              preferredTermCommitmentDuration: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      forwardShippingDetails: Schema.optional(
        Schema.Struct({
          carrierName: Schema.optional(Schema.String),
          carrierDisplayName: Schema.optional(Schema.String),
          trackingId: Schema.optional(Schema.String),
          trackingUrl: Schema.optional(Schema.String),
        }),
      ),
      reverseShippingDetails: Schema.optional(
        Schema.Struct({
          sasKeyForLabel: Schema.optional(Schema.String),
          carrierName: Schema.optional(Schema.String),
          carrierDisplayName: Schema.optional(Schema.String),
          trackingId: Schema.optional(Schema.String),
          trackingUrl: Schema.optional(Schema.String),
        }),
      ),
      notificationEmailList: Schema.optional(Schema.Array(Schema.String)),
      cancellationReason: Schema.optional(Schema.String),
      cancellationStatus: Schema.optional(
        Schema.Literals([
          "Cancellable",
          "CancellableWithFee",
          "NotCancellable",
        ]),
      ),
      deletionStatus: Schema.optional(
        Schema.Literals(["Allowed", "NotAllowed"]),
      ),
      returnReason: Schema.optional(Schema.String),
      returnStatus: Schema.optional(
        Schema.Literals(["Returnable", "ReturnableWithFee", "NotReturnable"]),
      ),
      managementRpDetailsList: Schema.optional(
        Schema.Array(
          Schema.Struct({
            resourceProviderNamespace: Schema.optional(Schema.String),
          }),
        ),
      ),
      error: Schema.optional(
        Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
          target: Schema.optional(Schema.String),
          details: Schema.optional(
            Schema.Array(
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
          ),
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
    addressDetails: Schema.optional(
      Schema.Struct({
        forwardAddress: Schema.Struct({
          addressClassification: Schema.optional(
            Schema.Literals(["Shipping", "Site"]),
          ),
          shippingAddress: Schema.optional(
            Schema.Struct({
              streetAddress1: Schema.optional(Schema.String),
              streetAddress2: Schema.optional(Schema.String),
              streetAddress3: Schema.optional(Schema.String),
              city: Schema.optional(Schema.String),
              stateOrProvince: Schema.optional(Schema.String),
              country: Schema.String,
              postalCode: Schema.optional(Schema.String),
              zipExtendedCode: Schema.optional(Schema.String),
              companyName: Schema.optional(Schema.String),
              addressType: Schema.optional(
                Schema.Literals(["None", "Residential", "Commercial"]),
              ),
            }),
          ),
          contactDetails: Schema.optional(
            Schema.Struct({
              contactName: Schema.optional(Schema.String),
              phone: Schema.optional(Schema.String),
              phoneExtension: Schema.optional(Schema.String),
              mobile: Schema.optional(Schema.String),
              emailList: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
          addressValidationStatus: Schema.optional(
            Schema.Literals(["Valid", "Invalid", "Ambiguous"]),
          ),
          provisioningState: Schema.optional(
            Schema.Literals(["Creating", "Succeeded", "Failed", "Canceled"]),
          ),
        }),
        returnAddress: Schema.optional(
          Schema.Struct({
            addressClassification: Schema.optional(
              Schema.Literals(["Shipping", "Site"]),
            ),
            shippingAddress: Schema.optional(
              Schema.Struct({
                streetAddress1: Schema.optional(Schema.String),
                streetAddress2: Schema.optional(Schema.String),
                streetAddress3: Schema.optional(Schema.String),
                city: Schema.optional(Schema.String),
                stateOrProvince: Schema.optional(Schema.String),
                country: Schema.String,
                postalCode: Schema.optional(Schema.String),
                zipExtendedCode: Schema.optional(Schema.String),
                companyName: Schema.optional(Schema.String),
                addressType: Schema.optional(
                  Schema.Literals(["None", "Residential", "Commercial"]),
                ),
              }),
            ),
            contactDetails: Schema.optional(
              Schema.Struct({
                contactName: Schema.optional(Schema.String),
                phone: Schema.optional(Schema.String),
                phoneExtension: Schema.optional(Schema.String),
                mobile: Schema.optional(Schema.String),
                emailList: Schema.optional(Schema.Array(Schema.String)),
              }),
            ),
            addressValidationStatus: Schema.optional(
              Schema.Literals(["Valid", "Invalid", "Ambiguous"]),
            ),
            provisioningState: Schema.optional(
              Schema.Literals(["Creating", "Succeeded", "Failed", "Canceled"]),
            ),
          }),
        ),
      }),
    ),
    startTime: Schema.optional(Schema.String),
    orderId: Schema.String,
    provisioningState: Schema.optional(
      Schema.Literals(["Creating", "Succeeded", "Failed", "Canceled"]),
    ),
  }),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  location: Schema.String,
}).pipe(
  T.Http({
    method: "PUT",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orderItems/{orderItemName}",
    apiVersion: "2024-02-01",
  }),
) as unknown as Schema.Codec<OrderItemsCreateInput>;

// Output Schema
export interface OrderItemsCreateOutput {
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
export const OrderItemsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<OrderItemsCreateOutput>;

// The operation
/**
 * Create an order item. Existing order item cannot be updated with this api and should instead be updated with the Update order item
 * API.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param orderItemName - The name of the order item.
 */
export const OrderItemsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrderItemsCreateInput,
  outputSchema: OrderItemsCreateOutput,
}));
// Input Schema
export interface OrderItemsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  orderItemName: string;
}
export const OrderItemsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  orderItemName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orderItems/{orderItemName}",
    apiVersion: "2024-02-01",
  }),
) as unknown as Schema.Codec<OrderItemsDeleteInput>;

// Output Schema
export type OrderItemsDeleteOutput = void;
export const OrderItemsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<OrderItemsDeleteOutput>;

// The operation
/**
 * Delete an order item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param orderItemName - The name of the order item.
 */
export const OrderItemsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrderItemsDeleteInput,
  outputSchema: OrderItemsDeleteOutput,
}));
// Input Schema
export interface OrderItemsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  orderItemName: string;
  $expand?: string;
}
export const OrderItemsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  orderItemName: Schema.String.pipe(T.PathParam()),
  $expand: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orderItems/{orderItemName}",
    apiVersion: "2024-02-01",
  }),
) as unknown as Schema.Codec<OrderItemsGetInput>;

// Output Schema
export interface OrderItemsGetOutput {
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
export const OrderItemsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<OrderItemsGetOutput>;

// The operation
/**
 * Get an order item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param orderItemName - The name of the order item.
 * @param $expand - $expand is supported on parent device details, device details, forward shipping details and reverse shipping details parameters. Each of these can be provided as a comma separated list. Parent Device Details for order item provides details on the devices of the product, Device Details for order item provides details on the devices of the child configurations of the product, Forward and Reverse Shipping details provide forward and reverse shipping details respectively.
 */
export const OrderItemsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrderItemsGetInput,
  outputSchema: OrderItemsGetOutput,
}));
// Input Schema
export interface OrderItemsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $filter?: string;
  $expand?: string;
  $skipToken?: string;
  $top?: number;
}
export const OrderItemsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orderItems",
      apiVersion: "2024-02-01",
    }),
  ) as unknown as Schema.Codec<OrderItemsListByResourceGroupInput>;

// Output Schema
export interface OrderItemsListByResourceGroupOutput {
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
export const OrderItemsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<OrderItemsListByResourceGroupOutput>;

// The operation
/**
 * List order items at resource group level.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $filter - $filter is supported to filter based on order id and order Item Type. Filter supports only equals operation.
 * @param $expand - $expand is supported on parent device details, device details, forward shipping details and reverse shipping details parameters. Each of these can be provided as a comma separated list. Parent Device Details for order item provides details on the devices of the product, Device Details for order item provides details on the devices of the child configurations of the product, Forward and Reverse Shipping details provide forward and reverse shipping details respectively.
 * @param $skipToken - $skipToken is supported on Get list of order items, which provides the next page in the list of order items.
 * @param $top - $top is supported on fetching list of resources. $top=10 means that the first 10 items in the list will be returned to the API caller.
 */
export const OrderItemsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrderItemsListByResourceGroupInput,
    outputSchema: OrderItemsListByResourceGroupOutput,
  }));
// Input Schema
export interface OrderItemsListBySubscriptionInput {
  subscriptionId: string;
  $filter?: string;
  $expand?: string;
  $skipToken?: string;
  $top?: number;
}
export const OrderItemsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $filter: Schema.optional(Schema.String),
    $expand: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeOrder/orderItems",
      apiVersion: "2024-02-01",
    }),
  ) as unknown as Schema.Codec<OrderItemsListBySubscriptionInput>;

// Output Schema
export interface OrderItemsListBySubscriptionOutput {
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
export const OrderItemsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<OrderItemsListBySubscriptionOutput>;

// The operation
/**
 * List order items at subscription level.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $filter - $filter is supported to filter based on order id and order Item Type. Filter supports only equals operation.
 * @param $expand - $expand is supported on parent device details, device details, forward shipping details and reverse shipping details parameters. Each of these can be provided as a comma separated list. Parent Device Details for order item provides details on the devices of the product, Device Details for order item provides details on the devices of the child configurations of the product, Forward and Reverse Shipping details provide forward and reverse shipping details respectively.
 * @param $skipToken - $skipToken is supported on Get list of order items, which provides the next page in the list of order items.
 * @param $top - $top is supported on fetching list of resources. $top=10 means that the first 10 items in the list will be returned to the API caller.
 */
export const OrderItemsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrderItemsListBySubscriptionInput,
    outputSchema: OrderItemsListBySubscriptionOutput,
  }));
// Input Schema
export interface OrderItemsReturnInput {
  subscriptionId: string;
  resourceGroupName: string;
  orderItemName: string;
  returnAddress?: {
    addressClassification?: "Shipping" | "Site";
    shippingAddress?: {
      streetAddress1?: string;
      streetAddress2?: string;
      streetAddress3?: string;
      city?: string;
      stateOrProvince?: string;
      country: string;
      postalCode?: string;
      zipExtendedCode?: string;
      companyName?: string;
      addressType?: "None" | "Residential" | "Commercial";
    };
    contactDetails?: {
      contactName?: string;
      phone?: string;
      phoneExtension?: string;
      mobile?: string;
      emailList?: string[];
    };
    addressValidationStatus?: "Valid" | "Invalid" | "Ambiguous";
    provisioningState?: "Creating" | "Succeeded" | "Failed" | "Canceled";
  };
  returnReason: string;
  serviceTag?: string;
  shippingBoxRequired?: boolean;
}
export const OrderItemsReturnInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  orderItemName: Schema.String.pipe(T.PathParam()),
  returnAddress: Schema.optional(
    Schema.Struct({
      addressClassification: Schema.optional(
        Schema.Literals(["Shipping", "Site"]),
      ),
      shippingAddress: Schema.optional(
        Schema.Struct({
          streetAddress1: Schema.optional(Schema.String),
          streetAddress2: Schema.optional(Schema.String),
          streetAddress3: Schema.optional(Schema.String),
          city: Schema.optional(Schema.String),
          stateOrProvince: Schema.optional(Schema.String),
          country: Schema.String,
          postalCode: Schema.optional(Schema.String),
          zipExtendedCode: Schema.optional(Schema.String),
          companyName: Schema.optional(Schema.String),
          addressType: Schema.optional(
            Schema.Literals(["None", "Residential", "Commercial"]),
          ),
        }),
      ),
      contactDetails: Schema.optional(
        Schema.Struct({
          contactName: Schema.optional(Schema.String),
          phone: Schema.optional(Schema.String),
          phoneExtension: Schema.optional(Schema.String),
          mobile: Schema.optional(Schema.String),
          emailList: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      addressValidationStatus: Schema.optional(
        Schema.Literals(["Valid", "Invalid", "Ambiguous"]),
      ),
      provisioningState: Schema.optional(
        Schema.Literals(["Creating", "Succeeded", "Failed", "Canceled"]),
      ),
    }),
  ),
  returnReason: Schema.String,
  serviceTag: Schema.optional(Schema.String),
  shippingBoxRequired: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orderItems/{orderItemName}/return",
    apiVersion: "2024-02-01",
  }),
) as unknown as Schema.Codec<OrderItemsReturnInput>;

// Output Schema
export type OrderItemsReturnOutput = void;
export const OrderItemsReturnOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<OrderItemsReturnOutput>;

// The operation
/**
 * Return order item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param orderItemName - The name of the order item.
 */
export const OrderItemsReturn = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrderItemsReturnInput,
  outputSchema: OrderItemsReturnOutput,
}));
// Input Schema
export interface OrderItemsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  orderItemName: string;
  properties?: {
    forwardAddress?: {
      addressClassification?: "Shipping" | "Site";
      shippingAddress?: {
        streetAddress1?: string;
        streetAddress2?: string;
        streetAddress3?: string;
        city?: string;
        stateOrProvince?: string;
        country: string;
        postalCode?: string;
        zipExtendedCode?: string;
        companyName?: string;
        addressType?: "None" | "Residential" | "Commercial";
      };
      contactDetails?: {
        contactName?: string;
        phone?: string;
        phoneExtension?: string;
        mobile?: string;
        emailList?: string[];
      };
      addressValidationStatus?: "Valid" | "Invalid" | "Ambiguous";
      provisioningState?: "Creating" | "Succeeded" | "Failed" | "Canceled";
    };
    preferences?: {
      notificationPreferences?: {
        stageName: "Shipped" | "Delivered";
        sendNotification: boolean;
      }[];
      transportPreferences?: {
        preferredShipmentType: "CustomerManaged" | "MicrosoftManaged";
      };
      encryptionPreferences?: {
        doubleEncryptionStatus?: "Disabled" | "Enabled";
      };
      managementResourcePreferences?: {
        preferredManagementResourceId?: string;
      };
      termCommitmentPreferences?: {
        preferredTermCommitmentType: "None" | "Trial" | "Timed";
        preferredTermCommitmentDuration?: string;
      };
    };
    notificationEmailList?: string[];
    orderItemDetails?: {
      productDetails?: {
        parentProvisioningDetails?: {
          quantity?: number;
          provisioningArmId?: string;
          provisioningEndPoint?: string;
          serialNumber?: string;
          vendorName?: string;
          readyToConnectArmId?: string;
          managementResourceArmId?: string;
          uniqueDeviceIdentifier?: string;
          autoProvisioningStatus?: "Enabled" | "Disabled";
          devicePresenceVerification?: {
            status?: "NotInitiated" | "Completed";
            message?: string;
          };
        };
      };
      siteDetails?: { siteId: string };
    };
  };
  tags?: Record<string, string>;
  identity?: {
    type?: string;
    principalId?: string;
    tenantId?: string;
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
}
export const OrderItemsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  orderItemName: Schema.String.pipe(T.PathParam()),
  properties: Schema.optional(
    Schema.Struct({
      forwardAddress: Schema.optional(
        Schema.Struct({
          addressClassification: Schema.optional(
            Schema.Literals(["Shipping", "Site"]),
          ),
          shippingAddress: Schema.optional(
            Schema.Struct({
              streetAddress1: Schema.optional(Schema.String),
              streetAddress2: Schema.optional(Schema.String),
              streetAddress3: Schema.optional(Schema.String),
              city: Schema.optional(Schema.String),
              stateOrProvince: Schema.optional(Schema.String),
              country: Schema.String,
              postalCode: Schema.optional(Schema.String),
              zipExtendedCode: Schema.optional(Schema.String),
              companyName: Schema.optional(Schema.String),
              addressType: Schema.optional(
                Schema.Literals(["None", "Residential", "Commercial"]),
              ),
            }),
          ),
          contactDetails: Schema.optional(
            Schema.Struct({
              contactName: Schema.optional(Schema.String),
              phone: Schema.optional(Schema.String),
              phoneExtension: Schema.optional(Schema.String),
              mobile: Schema.optional(Schema.String),
              emailList: Schema.optional(Schema.Array(Schema.String)),
            }),
          ),
          addressValidationStatus: Schema.optional(
            Schema.Literals(["Valid", "Invalid", "Ambiguous"]),
          ),
          provisioningState: Schema.optional(
            Schema.Literals(["Creating", "Succeeded", "Failed", "Canceled"]),
          ),
        }),
      ),
      preferences: Schema.optional(
        Schema.Struct({
          notificationPreferences: Schema.optional(
            Schema.Array(
              Schema.Struct({
                stageName: Schema.Literals(["Shipped", "Delivered"]),
                sendNotification: Schema.Boolean,
              }),
            ),
          ),
          transportPreferences: Schema.optional(
            Schema.Struct({
              preferredShipmentType: Schema.Literals([
                "CustomerManaged",
                "MicrosoftManaged",
              ]),
            }),
          ),
          encryptionPreferences: Schema.optional(
            Schema.Struct({
              doubleEncryptionStatus: Schema.optional(
                Schema.Literals(["Disabled", "Enabled"]),
              ),
            }),
          ),
          managementResourcePreferences: Schema.optional(
            Schema.Struct({
              preferredManagementResourceId: Schema.optional(Schema.String),
            }),
          ),
          termCommitmentPreferences: Schema.optional(
            Schema.Struct({
              preferredTermCommitmentType: Schema.Literals([
                "None",
                "Trial",
                "Timed",
              ]),
              preferredTermCommitmentDuration: Schema.optional(Schema.String),
            }),
          ),
        }),
      ),
      notificationEmailList: Schema.optional(Schema.Array(Schema.String)),
      orderItemDetails: Schema.optional(
        Schema.Struct({
          productDetails: Schema.optional(
            Schema.Struct({
              parentProvisioningDetails: Schema.optional(
                Schema.Struct({
                  quantity: Schema.optional(Schema.Number),
                  provisioningArmId: Schema.optional(Schema.String),
                  provisioningEndPoint: Schema.optional(Schema.String),
                  serialNumber: Schema.optional(Schema.String),
                  vendorName: Schema.optional(Schema.String),
                  readyToConnectArmId: Schema.optional(Schema.String),
                  managementResourceArmId: Schema.optional(Schema.String),
                  uniqueDeviceIdentifier: Schema.optional(Schema.String),
                  autoProvisioningStatus: Schema.optional(
                    Schema.Literals(["Enabled", "Disabled"]),
                  ),
                  devicePresenceVerification: Schema.optional(
                    Schema.Struct({
                      status: Schema.optional(
                        Schema.Literals(["NotInitiated", "Completed"]),
                      ),
                      message: Schema.optional(Schema.String),
                    }),
                  ),
                }),
              ),
            }),
          ),
          siteDetails: Schema.optional(
            Schema.Struct({
              siteId: Schema.String,
            }),
          ),
        }),
      ),
    }),
  ),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      principalId: Schema.optional(Schema.String),
      tenantId: Schema.optional(Schema.String),
      userAssignedIdentities: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            principalId: Schema.optional(Schema.String),
            clientId: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orderItems/{orderItemName}",
    apiVersion: "2024-02-01",
  }),
) as unknown as Schema.Codec<OrderItemsUpdateInput>;

// Output Schema
export interface OrderItemsUpdateOutput {
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
export const OrderItemsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<OrderItemsUpdateOutput>;

// The operation
/**
 * Update the properties of an existing order item.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param orderItemName - The name of the order item.
 * @param If-Match - Defines the If-Match condition. The patch will be performed only if the ETag of the order on the server matches this value.
 */
export const OrderItemsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrderItemsUpdateInput,
  outputSchema: OrderItemsUpdateOutput,
}));
// Input Schema
export interface OrdersGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  location: string;
  orderName: string;
}
export const OrdersGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  orderName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/locations/{location}/orders/{orderName}",
    apiVersion: "2024-02-01",
  }),
) as unknown as Schema.Codec<OrdersGetInput>;

// Output Schema
export interface OrdersGetOutput {
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
export const OrdersGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<OrdersGetOutput>;

// The operation
/**
 * Get an order.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param location - The name of the Azure region.
 * @param orderName - The name of the order.
 */
export const OrdersGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: OrdersGetInput,
  outputSchema: OrdersGetOutput,
}));
// Input Schema
export interface OrdersListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $skipToken?: string;
  $top?: number;
}
export const OrdersListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EdgeOrder/orders",
      apiVersion: "2024-02-01",
    }),
  ) as unknown as Schema.Codec<OrdersListByResourceGroupInput>;

// Output Schema
export interface OrdersListByResourceGroupOutput {
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
export const OrdersListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<OrdersListByResourceGroupOutput>;

// The operation
/**
 * List orders at resource group level.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $skipToken - $skipToken is supported on Get list of orders, which provides the next page in the list of orders.
 * @param $top - $top is supported on fetching list of resources. $top=10 means that the first 10 items in the list will be returned to the API caller.
 */
export const OrdersListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OrdersListByResourceGroupInput,
    outputSchema: OrdersListByResourceGroupOutput,
  }),
);
// Input Schema
export interface OrdersListBySubscriptionInput {
  subscriptionId: string;
  $skipToken?: string;
  $top?: number;
}
export const OrdersListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeOrder/orders",
      apiVersion: "2024-02-01",
    }),
  ) as unknown as Schema.Codec<OrdersListBySubscriptionInput>;

// Output Schema
export interface OrdersListBySubscriptionOutput {
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
export const OrdersListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<OrdersListBySubscriptionOutput>;

// The operation
/**
 * List orders at subscription level.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $skipToken - $skipToken is supported on Get list of orders, which provides the next page in the list of orders.
 * @param $top - $top is supported on fetching list of resources. $top=10 means that the first 10 items in the list will be returned to the API caller.
 */
export const OrdersListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OrdersListBySubscriptionInput,
    outputSchema: OrdersListBySubscriptionOutput,
  }),
);
// Input Schema
export interface ProductsAndConfigurationsListConfigurationsInput {
  subscriptionId: string;
  $skipToken?: string;
  configurationFilter?: {
    hierarchyInformation: {
      productFamilyName?: string;
      productLineName?: string;
      productName?: string;
      configurationName?: string;
      configurationIdDisplayName?: string;
    };
    filterableProperty?: {
      type: "ShipToCountries" | "DoubleEncryptionStatus";
      supportedValues: string[];
    }[];
    childConfigurationFilter?: {
      hierarchyInformations?: {
        productFamilyName?: string;
        productLineName?: string;
        productName?: string;
        configurationName?: string;
        configurationIdDisplayName?: string;
      }[];
      childConfigurationTypes?: (
        | "DeviceConfiguration"
        | "AdditionalConfiguration"
      )[];
    };
  };
  customerSubscriptionDetails?: {
    registeredFeatures?: { name?: string; state?: string }[];
    locationPlacementId?: string;
    quotaId: string;
  };
}
export const ProductsAndConfigurationsListConfigurationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
    configurationFilter: Schema.optional(
      Schema.Struct({
        hierarchyInformation: Schema.Struct({
          productFamilyName: Schema.optional(Schema.String),
          productLineName: Schema.optional(Schema.String),
          productName: Schema.optional(Schema.String),
          configurationName: Schema.optional(Schema.String),
          configurationIdDisplayName: Schema.optional(Schema.String),
        }),
        filterableProperty: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.Literals([
                "ShipToCountries",
                "DoubleEncryptionStatus",
              ]),
              supportedValues: Schema.Array(Schema.String),
            }),
          ),
        ),
        childConfigurationFilter: Schema.optional(
          Schema.Struct({
            hierarchyInformations: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  productFamilyName: Schema.optional(Schema.String),
                  productLineName: Schema.optional(Schema.String),
                  productName: Schema.optional(Schema.String),
                  configurationName: Schema.optional(Schema.String),
                  configurationIdDisplayName: Schema.optional(Schema.String),
                }),
              ),
            ),
            childConfigurationTypes: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "DeviceConfiguration",
                  "AdditionalConfiguration",
                ]),
              ),
            ),
          }),
        ),
      }),
    ),
    customerSubscriptionDetails: Schema.optional(
      Schema.Struct({
        registeredFeatures: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
            }),
          ),
        ),
        locationPlacementId: Schema.optional(Schema.String),
        quotaId: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeOrder/listConfigurations",
      apiVersion: "2024-02-01",
    }),
  ) as unknown as Schema.Codec<ProductsAndConfigurationsListConfigurationsInput>;

// Output Schema
export interface ProductsAndConfigurationsListConfigurationsOutput {
  value: {
    properties?: {
      displayName?: string;
      description?: {
        descriptionType?: "Base";
        shortDescription?: string;
        longDescription?: string;
        keywords?: string[];
        attributes?: string[];
        links?: {
          linkType?:
            | "Generic"
            | "TermsAndConditions"
            | "Specification"
            | "Documentation"
            | "KnowMore"
            | "SignUp"
            | "Discoverable";
          linkUrl?: string;
        }[];
      };
      imageInformation?: {
        imageType?: "MainImage" | "BulletImage" | "GenericImage";
        imageUrl?: string;
      }[];
      costInformation?: {
        billingMeterDetails?: {
          name?: string;
          meterDetails?: {
            billingType: "Pav2" | "Purchase";
            multiplier?: number;
            chargingType?: "PerOrder" | "PerDevice";
          };
          meteringType?: "OneTime" | "Recurring" | "Adhoc";
          frequency?: string;
          termTypeDetails?: {
            termType: "None" | "Trial" | "Timed";
            termTypeDuration: string;
          };
        }[];
        billingInfoUrl?: string;
      };
      availabilityInformation?: {
        availabilityStage?:
          | "Available"
          | "Preview"
          | "Signup"
          | "Discoverable"
          | "ComingSoon"
          | "Unavailable"
          | "Deprecated";
        disabledReason?:
          | "None"
          | "Country"
          | "Region"
          | "Feature"
          | "OfferType"
          | "NoSubscriptionInfo"
          | "NotAvailable"
          | "OutOfStock";
        disabledReasonMessage?: string;
      };
      hierarchyInformation?: {
        productFamilyName?: string;
        productLineName?: string;
        productName?: string;
        configurationName?: string;
        configurationIdDisplayName?: string;
      };
      fulfilledBy?: "Microsoft" | "External";
    };
  }[];
  nextLink?: string;
}
export const ProductsAndConfigurationsListConfigurationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            displayName: Schema.optional(Schema.String),
            description: Schema.optional(
              Schema.Struct({
                descriptionType: Schema.optional(Schema.Literals(["Base"])),
                shortDescription: Schema.optional(Schema.String),
                longDescription: Schema.optional(Schema.String),
                keywords: Schema.optional(Schema.Array(Schema.String)),
                attributes: Schema.optional(Schema.Array(Schema.String)),
                links: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      linkType: Schema.optional(
                        Schema.Literals([
                          "Generic",
                          "TermsAndConditions",
                          "Specification",
                          "Documentation",
                          "KnowMore",
                          "SignUp",
                          "Discoverable",
                        ]),
                      ),
                      linkUrl: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
            imageInformation: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  imageType: Schema.optional(
                    Schema.Literals([
                      "MainImage",
                      "BulletImage",
                      "GenericImage",
                    ]),
                  ),
                  imageUrl: Schema.optional(Schema.String),
                }),
              ),
            ),
            costInformation: Schema.optional(
              Schema.Struct({
                billingMeterDetails: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      meterDetails: Schema.optional(
                        Schema.Struct({
                          billingType: Schema.Literals(["Pav2", "Purchase"]),
                          multiplier: Schema.optional(Schema.Number),
                          chargingType: Schema.optional(
                            Schema.Literals(["PerOrder", "PerDevice"]),
                          ),
                        }),
                      ),
                      meteringType: Schema.optional(
                        Schema.Literals(["OneTime", "Recurring", "Adhoc"]),
                      ),
                      frequency: Schema.optional(Schema.String),
                      termTypeDetails: Schema.optional(
                        Schema.Struct({
                          termType: Schema.Literals(["None", "Trial", "Timed"]),
                          termTypeDuration: Schema.String,
                        }),
                      ),
                    }),
                  ),
                ),
                billingInfoUrl: Schema.optional(Schema.String),
              }),
            ),
            availabilityInformation: Schema.optional(
              Schema.Struct({
                availabilityStage: Schema.optional(
                  Schema.Literals([
                    "Available",
                    "Preview",
                    "Signup",
                    "Discoverable",
                    "ComingSoon",
                    "Unavailable",
                    "Deprecated",
                  ]),
                ),
                disabledReason: Schema.optional(
                  Schema.Literals([
                    "None",
                    "Country",
                    "Region",
                    "Feature",
                    "OfferType",
                    "NoSubscriptionInfo",
                    "NotAvailable",
                    "OutOfStock",
                  ]),
                ),
                disabledReasonMessage: Schema.optional(Schema.String),
              }),
            ),
            hierarchyInformation: Schema.optional(
              Schema.Struct({
                productFamilyName: Schema.optional(Schema.String),
                productLineName: Schema.optional(Schema.String),
                productName: Schema.optional(Schema.String),
                configurationName: Schema.optional(Schema.String),
                configurationIdDisplayName: Schema.optional(Schema.String),
              }),
            ),
            fulfilledBy: Schema.optional(
              Schema.Literals(["Microsoft", "External"]),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProductsAndConfigurationsListConfigurationsOutput>;

// The operation
/**
 * List configurations for the given product family, product line and product for the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $skipToken - $skipToken is supported on list of configurations, which provides the next page in the list of configurations.
 */
export const ProductsAndConfigurationsListConfigurations =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProductsAndConfigurationsListConfigurationsInput,
    outputSchema: ProductsAndConfigurationsListConfigurationsOutput,
  }));
// Input Schema
export interface ProductsAndConfigurationsListProductFamiliesInput {
  subscriptionId: string;
  $expand?: string;
  $skipToken?: string;
  filterableProperties: Record<
    string,
    {
      type: "ShipToCountries" | "DoubleEncryptionStatus";
      supportedValues: string[];
    }[]
  >;
  customerSubscriptionDetails?: {
    registeredFeatures?: { name?: string; state?: string }[];
    locationPlacementId?: string;
    quotaId: string;
  };
}
export const ProductsAndConfigurationsListProductFamiliesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $expand: Schema.optional(Schema.String),
    $skipToken: Schema.optional(Schema.String),
    filterableProperties: Schema.Record(
      Schema.String,
      Schema.Array(
        Schema.Struct({
          type: Schema.Literals(["ShipToCountries", "DoubleEncryptionStatus"]),
          supportedValues: Schema.Array(Schema.String),
        }),
      ),
    ),
    customerSubscriptionDetails: Schema.optional(
      Schema.Struct({
        registeredFeatures: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              state: Schema.optional(Schema.String),
            }),
          ),
        ),
        locationPlacementId: Schema.optional(Schema.String),
        quotaId: Schema.String,
      }),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeOrder/listProductFamilies",
      apiVersion: "2024-02-01",
    }),
  ) as unknown as Schema.Codec<ProductsAndConfigurationsListProductFamiliesInput>;

// Output Schema
export interface ProductsAndConfigurationsListProductFamiliesOutput {
  value: {
    properties?: {
      displayName?: string;
      description?: {
        descriptionType?: "Base";
        shortDescription?: string;
        longDescription?: string;
        keywords?: string[];
        attributes?: string[];
        links?: {
          linkType?:
            | "Generic"
            | "TermsAndConditions"
            | "Specification"
            | "Documentation"
            | "KnowMore"
            | "SignUp"
            | "Discoverable";
          linkUrl?: string;
        }[];
      };
      imageInformation?: {
        imageType?: "MainImage" | "BulletImage" | "GenericImage";
        imageUrl?: string;
      }[];
      costInformation?: {
        billingMeterDetails?: {
          name?: string;
          meterDetails?: {
            billingType: "Pav2" | "Purchase";
            multiplier?: number;
            chargingType?: "PerOrder" | "PerDevice";
          };
          meteringType?: "OneTime" | "Recurring" | "Adhoc";
          frequency?: string;
          termTypeDetails?: {
            termType: "None" | "Trial" | "Timed";
            termTypeDuration: string;
          };
        }[];
        billingInfoUrl?: string;
      };
      availabilityInformation?: {
        availabilityStage?:
          | "Available"
          | "Preview"
          | "Signup"
          | "Discoverable"
          | "ComingSoon"
          | "Unavailable"
          | "Deprecated";
        disabledReason?:
          | "None"
          | "Country"
          | "Region"
          | "Feature"
          | "OfferType"
          | "NoSubscriptionInfo"
          | "NotAvailable"
          | "OutOfStock";
        disabledReasonMessage?: string;
      };
      hierarchyInformation?: {
        productFamilyName?: string;
        productLineName?: string;
        productName?: string;
        configurationName?: string;
        configurationIdDisplayName?: string;
      };
      fulfilledBy?: "Microsoft" | "External";
    };
  }[];
  nextLink?: string;
}
export const ProductsAndConfigurationsListProductFamiliesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            displayName: Schema.optional(Schema.String),
            description: Schema.optional(
              Schema.Struct({
                descriptionType: Schema.optional(Schema.Literals(["Base"])),
                shortDescription: Schema.optional(Schema.String),
                longDescription: Schema.optional(Schema.String),
                keywords: Schema.optional(Schema.Array(Schema.String)),
                attributes: Schema.optional(Schema.Array(Schema.String)),
                links: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      linkType: Schema.optional(
                        Schema.Literals([
                          "Generic",
                          "TermsAndConditions",
                          "Specification",
                          "Documentation",
                          "KnowMore",
                          "SignUp",
                          "Discoverable",
                        ]),
                      ),
                      linkUrl: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
            imageInformation: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  imageType: Schema.optional(
                    Schema.Literals([
                      "MainImage",
                      "BulletImage",
                      "GenericImage",
                    ]),
                  ),
                  imageUrl: Schema.optional(Schema.String),
                }),
              ),
            ),
            costInformation: Schema.optional(
              Schema.Struct({
                billingMeterDetails: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      meterDetails: Schema.optional(
                        Schema.Struct({
                          billingType: Schema.Literals(["Pav2", "Purchase"]),
                          multiplier: Schema.optional(Schema.Number),
                          chargingType: Schema.optional(
                            Schema.Literals(["PerOrder", "PerDevice"]),
                          ),
                        }),
                      ),
                      meteringType: Schema.optional(
                        Schema.Literals(["OneTime", "Recurring", "Adhoc"]),
                      ),
                      frequency: Schema.optional(Schema.String),
                      termTypeDetails: Schema.optional(
                        Schema.Struct({
                          termType: Schema.Literals(["None", "Trial", "Timed"]),
                          termTypeDuration: Schema.String,
                        }),
                      ),
                    }),
                  ),
                ),
                billingInfoUrl: Schema.optional(Schema.String),
              }),
            ),
            availabilityInformation: Schema.optional(
              Schema.Struct({
                availabilityStage: Schema.optional(
                  Schema.Literals([
                    "Available",
                    "Preview",
                    "Signup",
                    "Discoverable",
                    "ComingSoon",
                    "Unavailable",
                    "Deprecated",
                  ]),
                ),
                disabledReason: Schema.optional(
                  Schema.Literals([
                    "None",
                    "Country",
                    "Region",
                    "Feature",
                    "OfferType",
                    "NoSubscriptionInfo",
                    "NotAvailable",
                    "OutOfStock",
                  ]),
                ),
                disabledReasonMessage: Schema.optional(Schema.String),
              }),
            ),
            hierarchyInformation: Schema.optional(
              Schema.Struct({
                productFamilyName: Schema.optional(Schema.String),
                productLineName: Schema.optional(Schema.String),
                productName: Schema.optional(Schema.String),
                configurationName: Schema.optional(Schema.String),
                configurationIdDisplayName: Schema.optional(Schema.String),
              }),
            ),
            fulfilledBy: Schema.optional(
              Schema.Literals(["Microsoft", "External"]),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProductsAndConfigurationsListProductFamiliesOutput>;

// The operation
/**
 * List product families for the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $expand - $expand is supported on configurations parameter for product, which provides details on the configurations for the product.
 * @param $skipToken - $skipToken is supported on list of product families, which provides the next page in the list of product families.
 */
export const ProductsAndConfigurationsListProductFamilies =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProductsAndConfigurationsListProductFamiliesInput,
    outputSchema: ProductsAndConfigurationsListProductFamiliesOutput,
  }));
// Input Schema
export interface ProductsAndConfigurationsListProductFamiliesMetadataInput {
  subscriptionId: string;
  $skipToken?: string;
}
export const ProductsAndConfigurationsListProductFamiliesMetadataInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $skipToken: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.EdgeOrder/productFamiliesMetadata",
      apiVersion: "2024-02-01",
    }),
  ) as unknown as Schema.Codec<ProductsAndConfigurationsListProductFamiliesMetadataInput>;

// Output Schema
export interface ProductsAndConfigurationsListProductFamiliesMetadataOutput {
  value: {
    properties?: {
      displayName?: string;
      description?: {
        descriptionType?: "Base";
        shortDescription?: string;
        longDescription?: string;
        keywords?: string[];
        attributes?: string[];
        links?: {
          linkType?:
            | "Generic"
            | "TermsAndConditions"
            | "Specification"
            | "Documentation"
            | "KnowMore"
            | "SignUp"
            | "Discoverable";
          linkUrl?: string;
        }[];
      };
      imageInformation?: {
        imageType?: "MainImage" | "BulletImage" | "GenericImage";
        imageUrl?: string;
      }[];
      costInformation?: {
        billingMeterDetails?: {
          name?: string;
          meterDetails?: {
            billingType: "Pav2" | "Purchase";
            multiplier?: number;
            chargingType?: "PerOrder" | "PerDevice";
          };
          meteringType?: "OneTime" | "Recurring" | "Adhoc";
          frequency?: string;
          termTypeDetails?: {
            termType: "None" | "Trial" | "Timed";
            termTypeDuration: string;
          };
        }[];
        billingInfoUrl?: string;
      };
      availabilityInformation?: {
        availabilityStage?:
          | "Available"
          | "Preview"
          | "Signup"
          | "Discoverable"
          | "ComingSoon"
          | "Unavailable"
          | "Deprecated";
        disabledReason?:
          | "None"
          | "Country"
          | "Region"
          | "Feature"
          | "OfferType"
          | "NoSubscriptionInfo"
          | "NotAvailable"
          | "OutOfStock";
        disabledReasonMessage?: string;
      };
      hierarchyInformation?: {
        productFamilyName?: string;
        productLineName?: string;
        productName?: string;
        configurationName?: string;
        configurationIdDisplayName?: string;
      };
      fulfilledBy?: "Microsoft" | "External";
    };
  }[];
  nextLink?: string;
}
export const ProductsAndConfigurationsListProductFamiliesMetadataOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            displayName: Schema.optional(Schema.String),
            description: Schema.optional(
              Schema.Struct({
                descriptionType: Schema.optional(Schema.Literals(["Base"])),
                shortDescription: Schema.optional(Schema.String),
                longDescription: Schema.optional(Schema.String),
                keywords: Schema.optional(Schema.Array(Schema.String)),
                attributes: Schema.optional(Schema.Array(Schema.String)),
                links: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      linkType: Schema.optional(
                        Schema.Literals([
                          "Generic",
                          "TermsAndConditions",
                          "Specification",
                          "Documentation",
                          "KnowMore",
                          "SignUp",
                          "Discoverable",
                        ]),
                      ),
                      linkUrl: Schema.optional(Schema.String),
                    }),
                  ),
                ),
              }),
            ),
            imageInformation: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  imageType: Schema.optional(
                    Schema.Literals([
                      "MainImage",
                      "BulletImage",
                      "GenericImage",
                    ]),
                  ),
                  imageUrl: Schema.optional(Schema.String),
                }),
              ),
            ),
            costInformation: Schema.optional(
              Schema.Struct({
                billingMeterDetails: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      meterDetails: Schema.optional(
                        Schema.Struct({
                          billingType: Schema.Literals(["Pav2", "Purchase"]),
                          multiplier: Schema.optional(Schema.Number),
                          chargingType: Schema.optional(
                            Schema.Literals(["PerOrder", "PerDevice"]),
                          ),
                        }),
                      ),
                      meteringType: Schema.optional(
                        Schema.Literals(["OneTime", "Recurring", "Adhoc"]),
                      ),
                      frequency: Schema.optional(Schema.String),
                      termTypeDetails: Schema.optional(
                        Schema.Struct({
                          termType: Schema.Literals(["None", "Trial", "Timed"]),
                          termTypeDuration: Schema.String,
                        }),
                      ),
                    }),
                  ),
                ),
                billingInfoUrl: Schema.optional(Schema.String),
              }),
            ),
            availabilityInformation: Schema.optional(
              Schema.Struct({
                availabilityStage: Schema.optional(
                  Schema.Literals([
                    "Available",
                    "Preview",
                    "Signup",
                    "Discoverable",
                    "ComingSoon",
                    "Unavailable",
                    "Deprecated",
                  ]),
                ),
                disabledReason: Schema.optional(
                  Schema.Literals([
                    "None",
                    "Country",
                    "Region",
                    "Feature",
                    "OfferType",
                    "NoSubscriptionInfo",
                    "NotAvailable",
                    "OutOfStock",
                  ]),
                ),
                disabledReasonMessage: Schema.optional(Schema.String),
              }),
            ),
            hierarchyInformation: Schema.optional(
              Schema.Struct({
                productFamilyName: Schema.optional(Schema.String),
                productLineName: Schema.optional(Schema.String),
                productName: Schema.optional(Schema.String),
                configurationName: Schema.optional(Schema.String),
                configurationIdDisplayName: Schema.optional(Schema.String),
              }),
            ),
            fulfilledBy: Schema.optional(
              Schema.Literals(["Microsoft", "External"]),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProductsAndConfigurationsListProductFamiliesMetadataOutput>;

// The operation
/**
 * List product families metadata for the given subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $skipToken - $skipToken is supported on list of product families metadata, which provides the next page in the list of product families metadata.
 */
export const ProductsAndConfigurationsListProductFamiliesMetadata =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ProductsAndConfigurationsListProductFamiliesMetadataInput,
    outputSchema: ProductsAndConfigurationsListProductFamiliesMetadataOutput,
  }));
