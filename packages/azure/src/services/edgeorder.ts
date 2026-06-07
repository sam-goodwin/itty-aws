/**
 * Azure Edgeorder API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
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
);
export type AddressesCreateInput = typeof AddressesCreateInput.Type;

// Output Schema
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
});
export type AddressesCreateOutput = typeof AddressesCreateOutput.Type;

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
);
export type AddressesDeleteInput = typeof AddressesDeleteInput.Type;

// Output Schema
export const AddressesDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AddressesDeleteOutput = typeof AddressesDeleteOutput.Type;

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
);
export type AddressesGetInput = typeof AddressesGetInput.Type;

// Output Schema
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
});
export type AddressesGetOutput = typeof AddressesGetOutput.Type;

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
  );
export type AddressesListByResourceGroupInput =
  typeof AddressesListByResourceGroupInput.Type;

// Output Schema
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
  });
export type AddressesListByResourceGroupOutput =
  typeof AddressesListByResourceGroupOutput.Type;

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
  );
export type AddressesListBySubscriptionInput =
  typeof AddressesListBySubscriptionInput.Type;

// Output Schema
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
  });
export type AddressesListBySubscriptionOutput =
  typeof AddressesListBySubscriptionOutput.Type;

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
);
export type AddressesUpdateInput = typeof AddressesUpdateInput.Type;

// Output Schema
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
});
export type AddressesUpdateOutput = typeof AddressesUpdateOutput.Type;

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
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.EdgeOrder/operations",
    apiVersion: "2024-02-01",
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
);
export type OrderItemsCancelInput = typeof OrderItemsCancelInput.Type;

// Output Schema
export const OrderItemsCancelOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OrderItemsCancelOutput = typeof OrderItemsCancelOutput.Type;

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
);
export type OrderItemsCreateInput = typeof OrderItemsCreateInput.Type;

// Output Schema
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
);
export type OrderItemsCreateOutput = typeof OrderItemsCreateOutput.Type;

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
);
export type OrderItemsDeleteInput = typeof OrderItemsDeleteInput.Type;

// Output Schema
export const OrderItemsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OrderItemsDeleteOutput = typeof OrderItemsDeleteOutput.Type;

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
);
export type OrderItemsGetInput = typeof OrderItemsGetInput.Type;

// Output Schema
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
});
export type OrderItemsGetOutput = typeof OrderItemsGetOutput.Type;

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
  );
export type OrderItemsListByResourceGroupInput =
  typeof OrderItemsListByResourceGroupInput.Type;

// Output Schema
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
  });
export type OrderItemsListByResourceGroupOutput =
  typeof OrderItemsListByResourceGroupOutput.Type;

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
  );
export type OrderItemsListBySubscriptionInput =
  typeof OrderItemsListBySubscriptionInput.Type;

// Output Schema
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
  });
export type OrderItemsListBySubscriptionOutput =
  typeof OrderItemsListBySubscriptionOutput.Type;

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
);
export type OrderItemsReturnInput = typeof OrderItemsReturnInput.Type;

// Output Schema
export const OrderItemsReturnOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OrderItemsReturnOutput = typeof OrderItemsReturnOutput.Type;

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
);
export type OrderItemsUpdateInput = typeof OrderItemsUpdateInput.Type;

// Output Schema
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
);
export type OrderItemsUpdateOutput = typeof OrderItemsUpdateOutput.Type;

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
);
export type OrdersGetInput = typeof OrdersGetInput.Type;

// Output Schema
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
});
export type OrdersGetOutput = typeof OrdersGetOutput.Type;

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
  );
export type OrdersListByResourceGroupInput =
  typeof OrdersListByResourceGroupInput.Type;

// Output Schema
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
  });
export type OrdersListByResourceGroupOutput =
  typeof OrdersListByResourceGroupOutput.Type;

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
  );
export type OrdersListBySubscriptionInput =
  typeof OrdersListBySubscriptionInput.Type;

// Output Schema
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
  });
export type OrdersListBySubscriptionOutput =
  typeof OrdersListBySubscriptionOutput.Type;

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
  );
export type ProductsAndConfigurationsListConfigurationsInput =
  typeof ProductsAndConfigurationsListConfigurationsInput.Type;

// Output Schema
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
  });
export type ProductsAndConfigurationsListConfigurationsOutput =
  typeof ProductsAndConfigurationsListConfigurationsOutput.Type;

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
  );
export type ProductsAndConfigurationsListProductFamiliesInput =
  typeof ProductsAndConfigurationsListProductFamiliesInput.Type;

// Output Schema
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
  });
export type ProductsAndConfigurationsListProductFamiliesOutput =
  typeof ProductsAndConfigurationsListProductFamiliesOutput.Type;

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
  );
export type ProductsAndConfigurationsListProductFamiliesMetadataInput =
  typeof ProductsAndConfigurationsListProductFamiliesMetadataInput.Type;

// Output Schema
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
  });
export type ProductsAndConfigurationsListProductFamiliesMetadataOutput =
  typeof ProductsAndConfigurationsListProductFamiliesMetadataOutput.Type;

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
