/**
 * Azure Azurestack API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CloudManifestFileGetInput {
  verificationVersion: string;
  versionCreationDate?: string;
}
export const CloudManifestFileGetInput =
  /*@__PURE__*/ Schema.Struct({
    verificationVersion: Schema.String.pipe(T.PathParam()),
    versionCreationDate: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.AzureStack/cloudManifestFiles/{verificationVersion}",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<CloudManifestFileGetInput>;

// Output Schema
export interface CloudManifestFileGetOutput {
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
}
export const CloudManifestFileGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CloudManifestFileGetOutput>;

// The operation
/**
 * Returns a cloud specific manifest JSON file.
 *
 * @param verificationVersion - Signing verification key version.
 * @param versionCreationDate - Signing verification key version creation date.
 * @param api-version - Client API Version.
 */
export const CloudManifestFileGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudManifestFileGetInput,
  outputSchema: CloudManifestFileGetOutput,
}));
// Input Schema
export interface CloudManifestFileListInput {}
export const CloudManifestFileListInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({
      method: "GET",
      path: "/providers/Microsoft.AzureStack/cloudManifestFiles",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<CloudManifestFileListInput>;

// Output Schema
export interface CloudManifestFileListOutput {
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
}
export const CloudManifestFileListOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CloudManifestFileListOutput>;

// The operation
/**
 * Returns a cloud specific manifest JSON file with latest version.
 *
 * @param api-version - Client API Version.
 */
export const CloudManifestFileList = /*@__PURE__*/ API.make(() => ({
  inputSchema: CloudManifestFileListInput,
  outputSchema: CloudManifestFileListOutput,
}));
// Input Schema
export interface CustomerSubscriptionsCreateInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
  customerSubscriptionName: string;
  properties?: { tenantId?: string };
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
}
export const CustomerSubscriptionsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    registrationName: Schema.String.pipe(T.PathParam()),
    customerSubscriptionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
      }),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/customerSubscriptions/{customerSubscriptionName}",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<CustomerSubscriptionsCreateInput>;

// Output Schema
export interface CustomerSubscriptionsCreateOutput {
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
}
export const CustomerSubscriptionsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CustomerSubscriptionsCreateOutput>;

// The operation
/**
 * Creates a new customer subscription under a registration.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param customerSubscriptionName - Name of the product.
 * @param api-version - Client API Version.
 */
export const CustomerSubscriptionsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: CustomerSubscriptionsCreateInput,
  outputSchema: CustomerSubscriptionsCreateOutput,
}));
// Input Schema
export interface CustomerSubscriptionsDeleteInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
  customerSubscriptionName: string;
}
export const CustomerSubscriptionsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    registrationName: Schema.String.pipe(T.PathParam()),
    customerSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/customerSubscriptions/{customerSubscriptionName}",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<CustomerSubscriptionsDeleteInput>;

// Output Schema
export type CustomerSubscriptionsDeleteOutput = void;
export const CustomerSubscriptionsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomerSubscriptionsDeleteOutput>;

// The operation
/**
 * Deletes a customer subscription under a registration.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param customerSubscriptionName - Name of the product.
 * @param api-version - Client API Version.
 */
export const CustomerSubscriptionsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: CustomerSubscriptionsDeleteInput,
  outputSchema: CustomerSubscriptionsDeleteOutput,
}));
// Input Schema
export interface CustomerSubscriptionsGetInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
  customerSubscriptionName: string;
}
export const CustomerSubscriptionsGetInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    registrationName: Schema.String.pipe(T.PathParam()),
    customerSubscriptionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/customerSubscriptions/{customerSubscriptionName}",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<CustomerSubscriptionsGetInput>;

// Output Schema
export interface CustomerSubscriptionsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
}
export const CustomerSubscriptionsGetOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CustomerSubscriptionsGetOutput>;

// The operation
/**
 * Returns the specified product.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param customerSubscriptionName - Name of the product.
 * @param api-version - Client API Version.
 */
export const CustomerSubscriptionsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: CustomerSubscriptionsGetInput,
  outputSchema: CustomerSubscriptionsGetOutput,
}));
// Input Schema
export interface CustomerSubscriptionsListInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
}
export const CustomerSubscriptionsListInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    registrationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/customerSubscriptions",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<CustomerSubscriptionsListInput>;

// Output Schema
export interface CustomerSubscriptionsListOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string; etag?: string }[];
}
export const CustomerSubscriptionsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          etag: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<CustomerSubscriptionsListOutput>;

// The operation
/**
 * Returns a list of products.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param api-version - Client API Version.
 */
export const CustomerSubscriptionsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: CustomerSubscriptionsListInput,
  outputSchema: CustomerSubscriptionsListOutput,
}));
// Input Schema
export interface DeploymentLicenseCreateInput {
  subscriptionId: string;
  verificationVersion?: string;
}
export const DeploymentLicenseCreateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    verificationVersion: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStack/generateDeploymentLicense",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<DeploymentLicenseCreateInput>;

// Output Schema
export interface DeploymentLicenseCreateOutput {
  temporaryLicenseChain?: string[];
  signature?: string;
}
export const DeploymentLicenseCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    temporaryLicenseChain: Schema.optional(Schema.Array(Schema.String)),
    signature: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<DeploymentLicenseCreateOutput>;

// The operation
/**
 * Creates a license that can be used to deploy an Azure Stack device.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Client API Version.
 */
export const DeploymentLicenseCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeploymentLicenseCreateInput,
  outputSchema: DeploymentLicenseCreateOutput,
}));
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AzureStack/operations",
    apiVersion: "2022-06-01",
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
    origin?: string;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ Schema.Struct({
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
        origin: Schema.optional(Schema.String),
      }),
    ),
  ),
  nextLink: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<OperationsListOutput>;

// The operation
/**
 * Returns the list of supported REST operations.
 *
 * @param api-version - Client API Version.
 */
export const OperationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: OperationsListInput,
  outputSchema: OperationsListOutput,
}));
// Input Schema
export interface ProductsGetInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
  productName: string;
}
export const ProductsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroup: Schema.String.pipe(T.PathParam()),
  registrationName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/{productName}",
    apiVersion: "2022-06-01",
  }),
) as unknown as Schema.Codec<ProductsGetInput>;

// Output Schema
export interface ProductsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
}
export const ProductsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  etag: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<ProductsGetOutput>;

// The operation
/**
 * Returns the specified product.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param productName - Name of the product.
 * @param api-version - Client API Version.
 */
export const ProductsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductsGetInput,
  outputSchema: ProductsGetOutput,
}));
// Input Schema
export interface ProductsGetProductInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
  productName: string;
  deviceVersion?: string;
  identitySystem?: "AzureAD" | "ADFS";
}
export const ProductsGetProductInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    registrationName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    deviceVersion: Schema.optional(Schema.String),
    identitySystem: Schema.optional(Schema.Literals(["AzureAD", "ADFS"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/{productName}/getProduct",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<ProductsGetProductInput>;

// Output Schema
export interface ProductsGetProductOutput {
  id?: string;
  name?: string;
  type?: string;
  etag?: string;
}
export const ProductsGetProductOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProductsGetProductOutput>;

// The operation
/**
 * Returns the specified product.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param productName - Name of the product.
 * @param api-version - Client API Version.
 */
export const ProductsGetProduct = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductsGetProductInput,
  outputSchema: ProductsGetProductOutput,
}));
// Input Schema
export interface ProductsGetProductsInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
  productName: string;
  deviceVersion?: string;
  identitySystem?: "AzureAD" | "ADFS";
}
export const ProductsGetProductsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    registrationName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    deviceVersion: Schema.optional(Schema.String),
    identitySystem: Schema.optional(Schema.Literals(["AzureAD", "ADFS"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/{productName}/getProducts",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<ProductsGetProductsInput>;

// Output Schema
export interface ProductsGetProductsOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string; etag?: string }[];
}
export const ProductsGetProductsOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          etag: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ProductsGetProductsOutput>;

// The operation
/**
 * Returns a list of products.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param productName - Name of the product.
 * @param api-version - Client API Version.
 */
export const ProductsGetProducts = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductsGetProductsInput,
  outputSchema: ProductsGetProductsOutput,
}));
// Input Schema
export interface ProductsListInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
}
export const ProductsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroup: Schema.String.pipe(T.PathParam()),
  registrationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products",
    apiVersion: "2022-06-01",
  }),
) as unknown as Schema.Codec<ProductsListInput>;

// Output Schema
export interface ProductsListOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string; etag?: string }[];
}
export const ProductsListOutput = /*@__PURE__*/ Schema.Struct({
  nextLink: Schema.optional(Schema.String),
  value: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        etag: Schema.optional(Schema.String),
      }),
    ),
  ),
}) as unknown as Schema.Codec<ProductsListOutput>;

// The operation
/**
 * Returns a list of products.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param api-version - Client API Version.
 */
export const ProductsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductsListInput,
  outputSchema: ProductsListOutput,
}));
// Input Schema
export interface ProductsListDetailsInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
  productName: string;
}
export const ProductsListDetailsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    registrationName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/{productName}/listDetails",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<ProductsListDetailsInput>;

// Output Schema
export interface ProductsListDetailsOutput {
  galleryPackageBlobSasUri?: string;
  productKind?: string;
  properties?: {
    computeRole?: "None" | "IaaS" | "PaaS";
    isSystemExtension?: boolean;
    sourceBlob?: { uri?: string };
    supportMultipleExtensions?: boolean;
    version?: string;
    vmOsType?: "None" | "Windows" | "Linux";
    vmScaleSetEnabled?: boolean;
    osDiskImage?: {
      operatingSystem?: "None" | "Windows" | "Linux";
      sourceBlobSasUri?: string;
    };
    dataDiskImages?: { lun?: number; sourceBlobSasUri?: string }[];
  };
}
export const ProductsListDetailsOutput =
  /*@__PURE__*/ Schema.Struct({
    galleryPackageBlobSasUri: Schema.optional(Schema.String),
    productKind: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Struct({
        computeRole: Schema.optional(Schema.Literals(["None", "IaaS", "PaaS"])),
        isSystemExtension: Schema.optional(Schema.Boolean),
        sourceBlob: Schema.optional(
          Schema.Struct({
            uri: Schema.optional(Schema.String),
          }),
        ),
        supportMultipleExtensions: Schema.optional(Schema.Boolean),
        version: Schema.optional(Schema.String),
        vmOsType: Schema.optional(
          Schema.Literals(["None", "Windows", "Linux"]),
        ),
        vmScaleSetEnabled: Schema.optional(Schema.Boolean),
        osDiskImage: Schema.optional(
          Schema.Struct({
            operatingSystem: Schema.optional(
              Schema.Literals(["None", "Windows", "Linux"]),
            ),
            sourceBlobSasUri: Schema.optional(Schema.String),
          }),
        ),
        dataDiskImages: Schema.optional(
          Schema.Array(
            Schema.Struct({
              lun: Schema.optional(Schema.Number),
              sourceBlobSasUri: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ProductsListDetailsOutput>;

// The operation
/**
 * Returns the extended properties of a product.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param productName - Name of the product.
 * @param api-version - Client API Version.
 */
export const ProductsListDetails = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductsListDetailsInput,
  outputSchema: ProductsListDetailsOutput,
}));
// Input Schema
export interface ProductsListProductsInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
  productName: string;
  deviceVersion?: string;
  identitySystem?: "AzureAD" | "ADFS";
}
export const ProductsListProductsInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    registrationName: Schema.String.pipe(T.PathParam()),
    productName: Schema.String.pipe(T.PathParam()),
    deviceVersion: Schema.optional(Schema.String),
    identitySystem: Schema.optional(Schema.Literals(["AzureAD", "ADFS"])),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/{productName}/listProducts",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<ProductsListProductsInput>;

// Output Schema
export interface ProductsListProductsOutput {
  nextLink?: string;
  value?: { id?: string; name?: string; type?: string; etag?: string }[];
}
export const ProductsListProductsOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          etag: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ProductsListProductsOutput>;

// The operation
/**
 * Returns a list of products.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param productName - Name of the product.
 * @param api-version - Client API Version.
 */
export const ProductsListProducts = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductsListProductsInput,
  outputSchema: ProductsListProductsOutput,
}));
// Input Schema
export interface ProductsUploadLogInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
  productName: string;
  operation?: string;
  status?: string;
  error?: string;
  details?: string;
}
export const ProductsUploadLogInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroup: Schema.String.pipe(T.PathParam()),
  registrationName: Schema.String.pipe(T.PathParam()),
  productName: Schema.String.pipe(T.PathParam()),
  operation: Schema.optional(Schema.String),
  status: Schema.optional(Schema.String),
  error: Schema.optional(Schema.String),
  details: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/{productName}/uploadProductLog",
    apiVersion: "2022-06-01",
  }),
) as unknown as Schema.Codec<ProductsUploadLogInput>;

// Output Schema
export interface ProductsUploadLogOutput {
  id?: string;
  productId?: string;
  subscriptionId?: string;
  registrationName?: string;
  resourceGroupName?: string;
  operation?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
  error?: string;
  details?: string;
}
export const ProductsUploadLogOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    productId: Schema.optional(Schema.String),
    subscriptionId: Schema.optional(Schema.String),
    registrationName: Schema.optional(Schema.String),
    resourceGroupName: Schema.optional(Schema.String),
    operation: Schema.optional(Schema.String),
    startDate: Schema.optional(Schema.String),
    endDate: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    error: Schema.optional(Schema.String),
    details: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ProductsUploadLogOutput>;

// The operation
/**
 * Returns the specified product.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param productName - Name of the product.
 * @param api-version - Client API Version.
 */
export const ProductsUploadLog = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductsUploadLogInput,
  outputSchema: ProductsUploadLogOutput,
}));
// Input Schema
export interface RegistrationsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
  properties: { registrationToken: string };
  location: "global";
}
export const RegistrationsCreateOrUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    registrationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      registrationToken: Schema.String,
    }),
    location: Schema.Literals(["global"]),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<RegistrationsCreateOrUpdateInput>;

// Output Schema
export interface RegistrationsCreateOrUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: "global";
  tags?: Record<string, string>;
  etag?: string;
}
export const RegistrationsCreateOrUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.Literals(["global"]),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RegistrationsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update an Azure Stack registration.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param api-version - Client API Version.
 */
export const RegistrationsCreateOrUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistrationsCreateOrUpdateInput,
  outputSchema: RegistrationsCreateOrUpdateOutput,
}));
// Input Schema
export interface RegistrationsDeleteInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
}
export const RegistrationsDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    registrationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<RegistrationsDeleteInput>;

// Output Schema
export type RegistrationsDeleteOutput = void;
export const RegistrationsDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistrationsDeleteOutput>;

// The operation
/**
 * Delete the requested Azure Stack registration.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param api-version - Client API Version.
 */
export const RegistrationsDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistrationsDeleteInput,
  outputSchema: RegistrationsDeleteOutput,
}));
// Input Schema
export interface RegistrationsEnableRemoteManagementInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
}
export const RegistrationsEnableRemoteManagementInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    registrationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/enableRemoteManagement",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<RegistrationsEnableRemoteManagementInput>;

// Output Schema
export type RegistrationsEnableRemoteManagementOutput = void;
export const RegistrationsEnableRemoteManagementOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RegistrationsEnableRemoteManagementOutput>;

// The operation
/**
 * Enables remote management for device under the Azure Stack registration.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 */
export const RegistrationsEnableRemoteManagement =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistrationsEnableRemoteManagementInput,
    outputSchema: RegistrationsEnableRemoteManagementOutput,
  }));
// Input Schema
export interface RegistrationsGetInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
}
export const RegistrationsGetInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroup: Schema.String.pipe(T.PathParam()),
  registrationName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}",
    apiVersion: "2022-06-01",
  }),
) as unknown as Schema.Codec<RegistrationsGetInput>;

// Output Schema
export interface RegistrationsGetOutput {
  id?: string;
  name?: string;
  type?: string;
  location: "global";
  tags?: Record<string, string>;
  etag?: string;
}
export const RegistrationsGetOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  location: Schema.Literals(["global"]),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  etag: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<RegistrationsGetOutput>;

// The operation
/**
 * Returns the properties of an Azure Stack registration.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param api-version - Client API Version.
 */
export const RegistrationsGet = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistrationsGetInput,
  outputSchema: RegistrationsGetOutput,
}));
// Input Schema
export interface RegistrationsGetActivationKeyInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
}
export const RegistrationsGetActivationKeyInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    registrationName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/getactivationkey",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<RegistrationsGetActivationKeyInput>;

// Output Schema
export interface RegistrationsGetActivationKeyOutput {
  activationKey?: string;
}
export const RegistrationsGetActivationKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    activationKey: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RegistrationsGetActivationKeyOutput>;

// The operation
/**
 * Returns Azure Stack Activation Key.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param api-version - Client API Version.
 */
export const RegistrationsGetActivationKey =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistrationsGetActivationKeyInput,
    outputSchema: RegistrationsGetActivationKeyOutput,
  }));
// Input Schema
export interface RegistrationsListInput {
  subscriptionId: string;
  resourceGroup: string;
}
export const RegistrationsListInput = /*@__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroup: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations",
    apiVersion: "2022-06-01",
  }),
) as unknown as Schema.Codec<RegistrationsListInput>;

// Output Schema
export interface RegistrationsListOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: "global";
    tags?: Record<string, string>;
    etag?: string;
  }[];
}
export const RegistrationsListOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.Literals(["global"]),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<RegistrationsListOutput>;

// The operation
/**
 * Returns a list of all registrations.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param api-version - Client API Version.
 */
export const RegistrationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistrationsListInput,
  outputSchema: RegistrationsListOutput,
}));
// Input Schema
export interface RegistrationsListBySubscriptionInput {
  subscriptionId: string;
}
export const RegistrationsListBySubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureStack/registrations",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<RegistrationsListBySubscriptionInput>;

// Output Schema
export interface RegistrationsListBySubscriptionOutput {
  nextLink?: string;
  value?: {
    id?: string;
    name?: string;
    type?: string;
    location: "global";
    tags?: Record<string, string>;
    etag?: string;
  }[];
}
export const RegistrationsListBySubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    nextLink: Schema.optional(Schema.String),
    value: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          location: Schema.Literals(["global"]),
          tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
          etag: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<RegistrationsListBySubscriptionOutput>;

// The operation
/**
 * Returns a list of all registrations under current subscription.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param api-version - Client API Version.
 */
export const RegistrationsListBySubscription =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RegistrationsListBySubscriptionInput,
    outputSchema: RegistrationsListBySubscriptionOutput,
  }));
// Input Schema
export interface RegistrationsUpdateInput {
  subscriptionId: string;
  resourceGroup: string;
  registrationName: string;
  properties: { registrationToken: string };
  location: "global";
}
export const RegistrationsUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroup: Schema.String.pipe(T.PathParam()),
    registrationName: Schema.String.pipe(T.PathParam()),
    properties: Schema.Struct({
      registrationToken: Schema.String,
    }),
    location: Schema.Literals(["global"]),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}",
      apiVersion: "2022-06-01",
    }),
  ) as unknown as Schema.Codec<RegistrationsUpdateInput>;

// Output Schema
export interface RegistrationsUpdateOutput {
  id?: string;
  name?: string;
  type?: string;
  location: "global";
  tags?: Record<string, string>;
  etag?: string;
}
export const RegistrationsUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.Literals(["global"]),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RegistrationsUpdateOutput>;

// The operation
/**
 * Patch an Azure Stack registration.
 *
 * @param subscriptionId - Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
 * @param resourceGroup - Name of the resource group.
 * @param registrationName - Name of the Azure Stack registration.
 * @param api-version - Client API Version.
 */
export const RegistrationsUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RegistrationsUpdateInput,
  outputSchema: RegistrationsUpdateOutput,
}));
