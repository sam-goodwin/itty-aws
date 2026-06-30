/**
 * Azure Keyvault API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "@distilled.cloud/core/schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface KeysCreateIfNotExistInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  keyName: string;
  tags?: Record<string, string>;
  properties: {
    attributes?: {
      enabled?: boolean;
      nbf?: number;
      exp?: number;
      created?: number;
      updated?: number;
      recoveryLevel?:
        | "Purgeable"
        | "Recoverable+Purgeable"
        | "Recoverable"
        | "Recoverable+ProtectedSubscription";
      exportable?: boolean;
    };
    kty?: "EC" | "EC-HSM" | "RSA" | "RSA-HSM";
    keyOps?: (
      | "encrypt"
      | "decrypt"
      | "sign"
      | "verify"
      | "wrapKey"
      | "unwrapKey"
      | "import"
      | "release"
    )[];
    keySize?: number;
    curveName?: "P-256" | "P-384" | "P-521" | "P-256K";
    keyUri?: string;
    keyUriWithVersion?: string;
    rotationPolicy?: {
      attributes?: { created?: number; updated?: number; expiryTime?: string };
      lifetimeActions?: {
        trigger?: { timeAfterCreate?: string; timeBeforeExpiry?: string };
        action?: { type?: "rotate" | "notify" };
      }[];
    };
    release_policy?: { contentType?: string; data?: string };
  };
}
export const KeysCreateIfNotExistInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.Struct({
      attributes: Schema.optional(
        Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
          nbf: Schema.optional(Schema.Number),
          exp: Schema.optional(Schema.Number),
          created: Schema.optional(Schema.Number),
          updated: Schema.optional(Schema.Number),
          recoveryLevel: Schema.optional(
            Schema.Literals([
              "Purgeable",
              "Recoverable+Purgeable",
              "Recoverable",
              "Recoverable+ProtectedSubscription",
            ]),
          ),
          exportable: Schema.optional(Schema.Boolean),
        }),
      ),
      kty: Schema.optional(Schema.Literals(["EC", "EC-HSM", "RSA", "RSA-HSM"])),
      keyOps: Schema.optional(
        Schema.Array(
          Schema.Literals([
            "encrypt",
            "decrypt",
            "sign",
            "verify",
            "wrapKey",
            "unwrapKey",
            "import",
            "release",
          ]),
        ),
      ),
      keySize: Schema.optional(Schema.Number),
      curveName: Schema.optional(
        Schema.Literals(["P-256", "P-384", "P-521", "P-256K"]),
      ),
      keyUri: Schema.optional(Schema.String),
      keyUriWithVersion: Schema.optional(Schema.String),
      rotationPolicy: Schema.optional(
        Schema.Struct({
          attributes: Schema.optional(
            Schema.Struct({
              created: Schema.optional(Schema.Number),
              updated: Schema.optional(Schema.Number),
              expiryTime: Schema.optional(Schema.String),
            }),
          ),
          lifetimeActions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                trigger: Schema.optional(
                  Schema.Struct({
                    timeAfterCreate: Schema.optional(Schema.String),
                    timeBeforeExpiry: Schema.optional(Schema.String),
                  }),
                ),
                action: Schema.optional(
                  Schema.Struct({
                    type: Schema.optional(
                      Schema.Literals(["rotate", "notify"]),
                    ),
                  }),
                ),
              }),
            ),
          ),
        }),
      ),
      release_policy: Schema.optional(
        Schema.Struct({
          contentType: Schema.optional(Schema.String),
          data: Schema.optional(Schema.String),
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/keys/{keyName}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<KeysCreateIfNotExistInput>;

// Output Schema
export interface KeysCreateIfNotExistOutput {
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
export const KeysCreateIfNotExistOutput =
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
  }) as unknown as Schema.Codec<KeysCreateIfNotExistOutput>;

// The operation
/**
 * Creates the first version of a new key if it does not exist. If it already exists, then the existing key is returned without any write operations being performed. This API does not create subsequent versions, and does not update existing keys.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault which contains the key to be retrieved.
 * @param keyName - The name of the key to be retrieved.
 */
export const KeysCreateIfNotExist = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: KeysCreateIfNotExistInput,
    outputSchema: KeysCreateIfNotExistOutput,
  }),
);
// Input Schema
export interface KeysGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  keyName: string;
}
export const KeysGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  keyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/keys/{keyName}",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<KeysGetInput>;

// Output Schema
export interface KeysGetOutput {
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
export const KeysGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<KeysGetOutput>;

// The operation
/**
 * Gets the current version of the specified key from the specified key vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault which contains the key to be retrieved.
 * @param keyName - The name of the key to be retrieved.
 */
export const KeysGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysGetInput,
  outputSchema: KeysGetOutput,
}));
// Input Schema
export interface KeysGetVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  keyName: string;
  keyVersion: string;
}
export const KeysGetVersionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  keyName: Schema.String.pipe(T.PathParam()),
  keyVersion: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/keys/{keyName}/versions/{keyVersion}",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<KeysGetVersionInput>;

// Output Schema
export interface KeysGetVersionOutput {
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
export const KeysGetVersionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<KeysGetVersionOutput>;

// The operation
/**
 * Gets the specified version of the specified key in the specified key vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault which contains the key version to be retrieved.
 * @param keyName - The name of the key version to be retrieved.
 * @param keyVersion - The version of the key to be retrieved.
 */
export const KeysGetVersion = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysGetVersionInput,
  outputSchema: KeysGetVersionOutput,
}));
// Input Schema
export interface KeysListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const KeysListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/keys",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<KeysListInput>;

// Output Schema
export interface KeysListOutput {
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
export const KeysListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<KeysListOutput>;

// The operation
/**
 * Lists the keys in the specified key vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault which contains the key to be retrieved.
 */
export const KeysList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysListInput,
  outputSchema: KeysListOutput,
}));
// Input Schema
export interface KeysListVersionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  keyName: string;
}
export const KeysListVersionsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  keyName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/keys/{keyName}/versions",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<KeysListVersionsInput>;

// Output Schema
export interface KeysListVersionsOutput {
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
export const KeysListVersionsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<KeysListVersionsOutput>;

// The operation
/**
 * Lists the keys in the specified key vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault which contains the key version to be retrieved.
 * @param keyName - The name of the key version to be retrieved.
 */
export const KeysListVersions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: KeysListVersionsInput,
  outputSchema: KeysListVersionsOutput,
}));
// Input Schema
export interface ManagedHsmKeysCreateIfNotExistInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  keyName: string;
  tags?: Record<string, string>;
  properties: {
    attributes?: {
      enabled?: boolean;
      nbf?: number;
      exp?: number;
      created?: number;
      updated?: number;
      recoveryLevel?:
        | "Purgeable"
        | "Recoverable+Purgeable"
        | "Recoverable"
        | "Recoverable+ProtectedSubscription";
      exportable?: boolean;
    };
    kty?: "EC" | "EC-HSM" | "RSA" | "RSA-HSM";
    keyOps?: (
      | "encrypt"
      | "decrypt"
      | "sign"
      | "verify"
      | "wrapKey"
      | "unwrapKey"
      | "import"
      | "release"
    )[];
    keySize?: number;
    curveName?: "P-256" | "P-384" | "P-521" | "P-256K";
    keyUri?: string;
    keyUriWithVersion?: string;
    rotationPolicy?: {
      attributes?: { created?: number; updated?: number; expiryTime?: string };
      lifetimeActions?: {
        trigger?: { timeAfterCreate?: string; timeBeforeExpiry?: string };
        action?: { type?: "rotate" | "notify" };
      }[];
    };
    release_policy?: { contentType?: string; data?: string };
  };
}
export const ManagedHsmKeysCreateIfNotExistInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.Struct({
      attributes: Schema.optional(
        Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
          nbf: Schema.optional(Schema.Number),
          exp: Schema.optional(Schema.Number),
          created: Schema.optional(Schema.Number),
          updated: Schema.optional(Schema.Number),
          recoveryLevel: Schema.optional(
            Schema.Literals([
              "Purgeable",
              "Recoverable+Purgeable",
              "Recoverable",
              "Recoverable+ProtectedSubscription",
            ]),
          ),
          exportable: Schema.optional(Schema.Boolean),
        }),
      ),
      kty: Schema.optional(Schema.Literals(["EC", "EC-HSM", "RSA", "RSA-HSM"])),
      keyOps: Schema.optional(
        Schema.Array(
          Schema.Literals([
            "encrypt",
            "decrypt",
            "sign",
            "verify",
            "wrapKey",
            "unwrapKey",
            "import",
            "release",
          ]),
        ),
      ),
      keySize: Schema.optional(Schema.Number),
      curveName: Schema.optional(
        Schema.Literals(["P-256", "P-384", "P-521", "P-256K"]),
      ),
      keyUri: Schema.optional(Schema.String),
      keyUriWithVersion: Schema.optional(Schema.String),
      rotationPolicy: Schema.optional(
        Schema.Struct({
          attributes: Schema.optional(
            Schema.Struct({
              created: Schema.optional(Schema.Number),
              updated: Schema.optional(Schema.Number),
              expiryTime: Schema.optional(Schema.String),
            }),
          ),
          lifetimeActions: Schema.optional(
            Schema.Array(
              Schema.Struct({
                trigger: Schema.optional(
                  Schema.Struct({
                    timeAfterCreate: Schema.optional(Schema.String),
                    timeBeforeExpiry: Schema.optional(Schema.String),
                  }),
                ),
                action: Schema.optional(
                  Schema.Struct({
                    type: Schema.optional(
                      Schema.Literals(["rotate", "notify"]),
                    ),
                  }),
                ),
              }),
            ),
          ),
        }),
      ),
      release_policy: Schema.optional(
        Schema.Struct({
          contentType: Schema.optional(Schema.String),
          data: Schema.optional(Schema.String),
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}/keys/{keyName}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedHsmKeysCreateIfNotExistInput>;

// Output Schema
export interface ManagedHsmKeysCreateIfNotExistOutput {
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
export const ManagedHsmKeysCreateIfNotExistOutput =
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
  }) as unknown as Schema.Codec<ManagedHsmKeysCreateIfNotExistOutput>;

// The operation
/**
 * Creates the first version of a new key if it does not exist. If it already exists, then the existing key is returned without any write operations being performed. This API does not create subsequent versions, and does not update existing keys.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the Managed HSM Pool within the specified resource group.
 * @param keyName - The name of the key to be created. The value you provide may be copied globally for the purpose of running the service. The value provided should not include personally identifiable or sensitive information.
 */
export const ManagedHsmKeysCreateIfNotExist =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedHsmKeysCreateIfNotExistInput,
    outputSchema: ManagedHsmKeysCreateIfNotExistOutput,
  }));
// Input Schema
export interface ManagedHsmKeysGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  keyName: string;
}
export const ManagedHsmKeysGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}/keys/{keyName}",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<ManagedHsmKeysGetInput>;

// Output Schema
export interface ManagedHsmKeysGetOutput {
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
export const ManagedHsmKeysGetOutput =
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
  }) as unknown as Schema.Codec<ManagedHsmKeysGetOutput>;

// The operation
/**
 * Gets the current version of the specified key from the specified managed HSM.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the Managed HSM Pool within the specified resource group.
 * @param keyName - The name of the key to be created. The value you provide may be copied globally for the purpose of running the service. The value provided should not include personally identifiable or sensitive information.
 */
export const ManagedHsmKeysGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ManagedHsmKeysGetInput,
  outputSchema: ManagedHsmKeysGetOutput,
}));
// Input Schema
export interface ManagedHsmKeysGetVersionInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  keyName: string;
  keyVersion: string;
}
export const ManagedHsmKeysGetVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String.pipe(T.PathParam()),
    keyVersion: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}/keys/{keyName}/versions/{keyVersion}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedHsmKeysGetVersionInput>;

// Output Schema
export interface ManagedHsmKeysGetVersionOutput {
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
export const ManagedHsmKeysGetVersionOutput =
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
  }) as unknown as Schema.Codec<ManagedHsmKeysGetVersionOutput>;

// The operation
/**
 * Gets the specified version of the specified key in the specified managed HSM.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the Managed HSM Pool within the specified resource group.
 * @param keyName - The name of the key to be created. The value you provide may be copied globally for the purpose of running the service. The value provided should not include personally identifiable or sensitive information.
 * @param keyVersion - The version of the key to be retrieved.
 */
export const ManagedHsmKeysGetVersion = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedHsmKeysGetVersionInput,
    outputSchema: ManagedHsmKeysGetVersionOutput,
  }),
);
// Input Schema
export interface ManagedHsmKeysListInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const ManagedHsmKeysListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}/keys",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedHsmKeysListInput>;

// Output Schema
export interface ManagedHsmKeysListOutput {
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
export const ManagedHsmKeysListOutput =
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
  }) as unknown as Schema.Codec<ManagedHsmKeysListOutput>;

// The operation
/**
 * Lists the keys in the specified managed HSM.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the Managed HSM Pool within the specified resource group.
 */
export const ManagedHsmKeysList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ManagedHsmKeysListInput,
  outputSchema: ManagedHsmKeysListOutput,
}));
// Input Schema
export interface ManagedHsmKeysListVersionsInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  keyName: string;
}
export const ManagedHsmKeysListVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    keyName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}/keys/{keyName}/versions",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedHsmKeysListVersionsInput>;

// Output Schema
export interface ManagedHsmKeysListVersionsOutput {
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
export const ManagedHsmKeysListVersionsOutput =
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
  }) as unknown as Schema.Codec<ManagedHsmKeysListVersionsOutput>;

// The operation
/**
 * Lists the keys in the specified managed HSM.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the Managed HSM Pool within the specified resource group.
 * @param keyName - The name of the key to be created. The value you provide may be copied globally for the purpose of running the service. The value provided should not include personally identifiable or sensitive information.
 */
export const ManagedHsmKeysListVersions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedHsmKeysListVersionsInput,
    outputSchema: ManagedHsmKeysListVersionsOutput,
  }),
);
// Input Schema
export interface ManagedHsmsCheckMhsmNameAvailabilityInput {
  subscriptionId: string;
  name: string;
}
export const ManagedHsmsCheckMhsmNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/checkMhsmNameAvailability",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedHsmsCheckMhsmNameAvailabilityInput>;

// Output Schema
export interface ManagedHsmsCheckMhsmNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "AccountNameInvalid" | "AlreadyExists";
  message?: string;
}
export const ManagedHsmsCheckMhsmNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(
      Schema.Literals(["AccountNameInvalid", "AlreadyExists"]),
    ),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ManagedHsmsCheckMhsmNameAvailabilityOutput>;

// The operation
/**
 * Checks that the managed hsm name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ManagedHsmsCheckMhsmNameAvailability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedHsmsCheckMhsmNameAvailabilityInput,
    outputSchema: ManagedHsmsCheckMhsmNameAvailabilityOutput,
  }));
// Input Schema
export interface ManagedHsmsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  properties?: {
    tenantId?: string;
    initialAdminObjectIds?: string[];
    hsmUri?: string;
    enableSoftDelete?: boolean;
    softDeleteRetentionInDays?: number;
    enablePurgeProtection?: boolean;
    createMode?: "recover" | "default";
    statusMessage?: string;
    provisioningState?:
      | "Succeeded"
      | "Provisioning"
      | "Failed"
      | "Updating"
      | "Deleting"
      | "Activated"
      | "SecurityDomainRestore"
      | "Restoring";
    networkAcls?: {
      bypass?: "AzureServices" | "None";
      defaultAction?: "Allow" | "Deny";
      ipRules?: { value: string }[];
      serviceTags?: { tag: string }[];
      virtualNetworkRules?: { id: string }[];
    };
    regions?: {
      name?: string;
      provisioningState?:
        | "Preprovisioning"
        | "Provisioning"
        | "Succeeded"
        | "Failed"
        | "Deleting"
        | "Cleanup";
      isPrimary?: boolean;
    }[];
    privateEndpointConnections?: {
      id?: string;
      etag?: string;
      properties?: {
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState?: {
          status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
          description?: string;
          actionsRequired?: "None";
        };
        provisioningState?:
          | "Succeeded"
          | "Creating"
          | "Updating"
          | "Deleting"
          | "Failed"
          | "Disconnected";
      };
    }[];
    publicNetworkAccess?: "Enabled" | "Disabled";
    scheduledPurgeDate?: string;
    securityDomainProperties?: {
      activationStatus?: "Active" | "NotActivated" | "Unknown" | "Failed";
      activationStatusMessage?: string;
    };
  };
  sku?: {
    family: "B" | "C";
    name:
      | "Standard_B1"
      | "Custom_B32"
      | "Custom_B6"
      | "Custom_C42"
      | "Custom_C10";
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  location?: string;
  tags?: Record<string, string>;
}
export const ManagedHsmsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
        initialAdminObjectIds: Schema.optional(Schema.Array(Schema.String)),
        hsmUri: Schema.optional(Schema.String),
        enableSoftDelete: Schema.optional(Schema.Boolean),
        softDeleteRetentionInDays: Schema.optional(Schema.Number),
        enablePurgeProtection: Schema.optional(Schema.Boolean),
        createMode: Schema.optional(Schema.Literals(["recover", "default"])),
        statusMessage: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Provisioning",
            "Failed",
            "Updating",
            "Deleting",
            "Activated",
            "SecurityDomainRestore",
            "Restoring",
          ]),
        ),
        networkAcls: Schema.optional(
          Schema.Struct({
            bypass: Schema.optional(Schema.Literals(["AzureServices", "None"])),
            defaultAction: Schema.optional(Schema.Literals(["Allow", "Deny"])),
            ipRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  value: Schema.String,
                }),
              ),
            ),
            serviceTags: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  tag: Schema.String,
                }),
              ),
            ),
            virtualNetworkRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                }),
              ),
            ),
          }),
        ),
        regions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              provisioningState: Schema.optional(
                Schema.Literals([
                  "Preprovisioning",
                  "Provisioning",
                  "Succeeded",
                  "Failed",
                  "Deleting",
                  "Cleanup",
                ]),
              ),
              isPrimary: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              etag: Schema.optional(Schema.String),
              properties: Schema.optional(
                Schema.Struct({
                  privateEndpoint: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                  privateLinkServiceConnectionState: Schema.optional(
                    Schema.Struct({
                      status: Schema.optional(
                        Schema.Literals([
                          "Pending",
                          "Approved",
                          "Rejected",
                          "Disconnected",
                        ]),
                      ),
                      description: Schema.optional(Schema.String),
                      actionsRequired: Schema.optional(
                        Schema.Literals(["None"]),
                      ),
                    }),
                  ),
                  provisioningState: Schema.optional(
                    Schema.Literals([
                      "Succeeded",
                      "Creating",
                      "Updating",
                      "Deleting",
                      "Failed",
                      "Disconnected",
                    ]),
                  ),
                }),
              ),
            }),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        scheduledPurgeDate: Schema.optional(Schema.String),
        securityDomainProperties: Schema.optional(
          Schema.Struct({
            activationStatus: Schema.optional(
              Schema.Literals(["Active", "NotActivated", "Unknown", "Failed"]),
            ),
            activationStatusMessage: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        family: Schema.Literals(["B", "C"]),
        name: Schema.Literals([
          "Standard_B1",
          "Custom_B32",
          "Custom_B6",
          "Custom_C42",
          "Custom_C10",
        ]),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
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
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedHsmsCreateOrUpdateInput>;

// Output Schema
export interface ManagedHsmsCreateOrUpdateOutput {
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
export const ManagedHsmsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedHsmsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a managed HSM Pool in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the managed HSM Pool.
 */
export const ManagedHsmsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedHsmsCreateOrUpdateInput,
    outputSchema: ManagedHsmsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface ManagedHsmsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const ManagedHsmsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<ManagedHsmsDeleteInput>;

// Output Schema
export type ManagedHsmsDeleteOutput = void;
export const ManagedHsmsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedHsmsDeleteOutput>;

// The operation
/**
 * Deletes the specified managed HSM Pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the managed HSM Pool.
 */
export const ManagedHsmsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ManagedHsmsDeleteInput,
  outputSchema: ManagedHsmsDeleteOutput,
}));
// Input Schema
export interface ManagedHsmsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const ManagedHsmsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  name: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<ManagedHsmsGetInput>;

// Output Schema
export interface ManagedHsmsGetOutput {
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
export const ManagedHsmsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<ManagedHsmsGetOutput>;

// The operation
/**
 * Gets the specified managed HSM Pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the managed HSM Pool.
 */
export const ManagedHsmsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ManagedHsmsGetInput,
  outputSchema: ManagedHsmsGetOutput,
}));
// Input Schema
export interface ManagedHsmsGetDeletedInput {
  subscriptionId: string;
  location: string;
  name: string;
}
export const ManagedHsmsGetDeletedInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedManagedHSMs/{name}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedHsmsGetDeletedInput>;

// Output Schema
export interface ManagedHsmsGetDeletedOutput {
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
export const ManagedHsmsGetDeletedOutput =
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
  }) as unknown as Schema.Codec<ManagedHsmsGetDeletedOutput>;

// The operation
/**
 * Gets the specified deleted managed HSM.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param name - The name of the deleted managed HSM.
 */
export const ManagedHsmsGetDeleted = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedHsmsGetDeletedInput,
    outputSchema: ManagedHsmsGetDeletedOutput,
  }),
);
// Input Schema
export interface ManagedHsmsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
}
export const ManagedHsmsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedHsmsListByResourceGroupInput>;

// Output Schema
export interface ManagedHsmsListByResourceGroupOutput {
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
export const ManagedHsmsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<ManagedHsmsListByResourceGroupOutput>;

// The operation
/**
 * The List operation gets information about the managed HSM Pools associated with the subscription and within the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - Maximum number of results to return.
 */
export const ManagedHsmsListByResourceGroup =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedHsmsListByResourceGroupInput,
    outputSchema: ManagedHsmsListByResourceGroupOutput,
  }));
// Input Schema
export interface ManagedHsmsListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
}
export const ManagedHsmsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/managedHSMs",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedHsmsListBySubscriptionInput>;

// Output Schema
export interface ManagedHsmsListBySubscriptionOutput {
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
export const ManagedHsmsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<ManagedHsmsListBySubscriptionOutput>;

// The operation
/**
 * The List operation gets information about the managed HSM Pools associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - Maximum number of results to return.
 */
export const ManagedHsmsListBySubscription =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ManagedHsmsListBySubscriptionInput,
    outputSchema: ManagedHsmsListBySubscriptionOutput,
  }));
// Input Schema
export interface ManagedHsmsListDeletedInput {
  subscriptionId: string;
}
export const ManagedHsmsListDeletedInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/deletedManagedHSMs",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedHsmsListDeletedInput>;

// Output Schema
export interface ManagedHsmsListDeletedOutput {
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
export const ManagedHsmsListDeletedOutput =
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
  }) as unknown as Schema.Codec<ManagedHsmsListDeletedOutput>;

// The operation
/**
 * The List operation gets information about the deleted managed HSMs associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const ManagedHsmsListDeleted = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedHsmsListDeletedInput,
    outputSchema: ManagedHsmsListDeletedOutput,
  }),
);
// Input Schema
export interface ManagedHsmsPurgeDeletedInput {
  subscriptionId: string;
  location: string;
  name: string;
}
export const ManagedHsmsPurgeDeletedInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedManagedHSMs/{name}/purge",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<ManagedHsmsPurgeDeletedInput>;

// Output Schema
export type ManagedHsmsPurgeDeletedOutput = void;
export const ManagedHsmsPurgeDeletedOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ManagedHsmsPurgeDeletedOutput>;

// The operation
/**
 * Permanently deletes the specified managed HSM.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param name - The name of the deleted managed HSM.
 */
export const ManagedHsmsPurgeDeleted = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ManagedHsmsPurgeDeletedInput,
    outputSchema: ManagedHsmsPurgeDeletedOutput,
  }),
);
// Input Schema
export interface ManagedHsmsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  properties?: {
    tenantId?: string;
    initialAdminObjectIds?: string[];
    hsmUri?: string;
    enableSoftDelete?: boolean;
    softDeleteRetentionInDays?: number;
    enablePurgeProtection?: boolean;
    createMode?: "recover" | "default";
    statusMessage?: string;
    provisioningState?:
      | "Succeeded"
      | "Provisioning"
      | "Failed"
      | "Updating"
      | "Deleting"
      | "Activated"
      | "SecurityDomainRestore"
      | "Restoring";
    networkAcls?: {
      bypass?: "AzureServices" | "None";
      defaultAction?: "Allow" | "Deny";
      ipRules?: { value: string }[];
      serviceTags?: { tag: string }[];
      virtualNetworkRules?: { id: string }[];
    };
    regions?: {
      name?: string;
      provisioningState?:
        | "Preprovisioning"
        | "Provisioning"
        | "Succeeded"
        | "Failed"
        | "Deleting"
        | "Cleanup";
      isPrimary?: boolean;
    }[];
    privateEndpointConnections?: {
      id?: string;
      etag?: string;
      properties?: {
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState?: {
          status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
          description?: string;
          actionsRequired?: "None";
        };
        provisioningState?:
          | "Succeeded"
          | "Creating"
          | "Updating"
          | "Deleting"
          | "Failed"
          | "Disconnected";
      };
    }[];
    publicNetworkAccess?: "Enabled" | "Disabled";
    scheduledPurgeDate?: string;
    securityDomainProperties?: {
      activationStatus?: "Active" | "NotActivated" | "Unknown" | "Failed";
      activationStatusMessage?: string;
    };
  };
  sku?: {
    family: "B" | "C";
    name:
      | "Standard_B1"
      | "Custom_B32"
      | "Custom_B6"
      | "Custom_C42"
      | "Custom_C10";
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  location?: string;
  tags?: Record<string, string>;
}
export const ManagedHsmsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        tenantId: Schema.optional(Schema.String),
        initialAdminObjectIds: Schema.optional(Schema.Array(Schema.String)),
        hsmUri: Schema.optional(Schema.String),
        enableSoftDelete: Schema.optional(Schema.Boolean),
        softDeleteRetentionInDays: Schema.optional(Schema.Number),
        enablePurgeProtection: Schema.optional(Schema.Boolean),
        createMode: Schema.optional(Schema.Literals(["recover", "default"])),
        statusMessage: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Provisioning",
            "Failed",
            "Updating",
            "Deleting",
            "Activated",
            "SecurityDomainRestore",
            "Restoring",
          ]),
        ),
        networkAcls: Schema.optional(
          Schema.Struct({
            bypass: Schema.optional(Schema.Literals(["AzureServices", "None"])),
            defaultAction: Schema.optional(Schema.Literals(["Allow", "Deny"])),
            ipRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  value: Schema.String,
                }),
              ),
            ),
            serviceTags: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  tag: Schema.String,
                }),
              ),
            ),
            virtualNetworkRules: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                }),
              ),
            ),
          }),
        ),
        regions: Schema.optional(
          Schema.Array(
            Schema.Struct({
              name: Schema.optional(Schema.String),
              provisioningState: Schema.optional(
                Schema.Literals([
                  "Preprovisioning",
                  "Provisioning",
                  "Succeeded",
                  "Failed",
                  "Deleting",
                  "Cleanup",
                ]),
              ),
              isPrimary: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        privateEndpointConnections: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              etag: Schema.optional(Schema.String),
              properties: Schema.optional(
                Schema.Struct({
                  privateEndpoint: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                  privateLinkServiceConnectionState: Schema.optional(
                    Schema.Struct({
                      status: Schema.optional(
                        Schema.Literals([
                          "Pending",
                          "Approved",
                          "Rejected",
                          "Disconnected",
                        ]),
                      ),
                      description: Schema.optional(Schema.String),
                      actionsRequired: Schema.optional(
                        Schema.Literals(["None"]),
                      ),
                    }),
                  ),
                  provisioningState: Schema.optional(
                    Schema.Literals([
                      "Succeeded",
                      "Creating",
                      "Updating",
                      "Deleting",
                      "Failed",
                      "Disconnected",
                    ]),
                  ),
                }),
              ),
            }),
          ),
        ),
        publicNetworkAccess: Schema.optional(
          Schema.Literals(["Enabled", "Disabled"]),
        ),
        scheduledPurgeDate: Schema.optional(Schema.String),
        securityDomainProperties: Schema.optional(
          Schema.Struct({
            activationStatus: Schema.optional(
              Schema.Literals(["Active", "NotActivated", "Unknown", "Failed"]),
            ),
            activationStatusMessage: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        family: Schema.Literals(["B", "C"]),
        name: Schema.Literals([
          "Standard_B1",
          "Custom_B32",
          "Custom_B6",
          "Custom_C42",
          "Custom_C10",
        ]),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
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
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<ManagedHsmsUpdateInput>;

// Output Schema
export interface ManagedHsmsUpdateOutput {
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
export const ManagedHsmsUpdateOutput =
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
  }) as unknown as Schema.Codec<ManagedHsmsUpdateOutput>;

// The operation
/**
 * Update a managed HSM Pool in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the managed HSM Pool.
 */
export const ManagedHsmsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ManagedHsmsUpdateInput,
  outputSchema: ManagedHsmsUpdateOutput,
}));
// Input Schema
export interface MHSMPrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  privateEndpointConnectionName: string;
}
export const MHSMPrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<MHSMPrivateEndpointConnectionsDeleteInput>;

// Output Schema
export interface MHSMPrivateEndpointConnectionsDeleteOutput {
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
export const MHSMPrivateEndpointConnectionsDeleteOutput =
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
  }) as unknown as Schema.Codec<MHSMPrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the managed hsm pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the managed HSM Pool.
 * @param privateEndpointConnectionName - Name of the private endpoint connection associated with the managed hsm pool.
 */
export const MHSMPrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MHSMPrivateEndpointConnectionsDeleteInput,
    outputSchema: MHSMPrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface MHSMPrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  privateEndpointConnectionName: string;
}
export const MHSMPrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<MHSMPrivateEndpointConnectionsGetInput>;

// Output Schema
export interface MHSMPrivateEndpointConnectionsGetOutput {
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
export const MHSMPrivateEndpointConnectionsGetOutput =
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
  }) as unknown as Schema.Codec<MHSMPrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets the specified private endpoint connection associated with the managed HSM Pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the managed HSM Pool.
 * @param privateEndpointConnectionName - Name of the private endpoint connection associated with the managed hsm pool.
 */
export const MHSMPrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MHSMPrivateEndpointConnectionsGetInput,
    outputSchema: MHSMPrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface MHSMPrivateEndpointConnectionsListByResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const MHSMPrivateEndpointConnectionsListByResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}/privateEndpointConnections",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<MHSMPrivateEndpointConnectionsListByResourceInput>;

// Output Schema
export interface MHSMPrivateEndpointConnectionsListByResourceOutput {
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
export const MHSMPrivateEndpointConnectionsListByResourceOutput =
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
  }) as unknown as Schema.Codec<MHSMPrivateEndpointConnectionsListByResourceOutput>;

// The operation
/**
 * The List operation gets information about the private endpoint connections associated with the managed HSM Pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the managed HSM Pool.
 */
export const MHSMPrivateEndpointConnectionsListByResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MHSMPrivateEndpointConnectionsListByResourceInput,
    outputSchema: MHSMPrivateEndpointConnectionsListByResourceOutput,
  }));
// Input Schema
export interface MHSMPrivateEndpointConnectionsPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: "None";
    };
    provisioningState?:
      | "Succeeded"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Disconnected";
  };
  sku?: {
    family: "B" | "C";
    name:
      | "Standard_B1"
      | "Custom_B32"
      | "Custom_B6"
      | "Custom_C42"
      | "Custom_C10";
  };
  identity?: {
    principalId?: string;
    tenantId?: string;
    type:
      | "None"
      | "SystemAssigned"
      | "UserAssigned"
      | "SystemAssigned,UserAssigned";
    userAssignedIdentities?: Record<
      string,
      { principalId?: string; clientId?: string }
    >;
  };
  etag?: string;
  location?: string;
  tags?: Record<string, string>;
}
export const MHSMPrivateEndpointConnectionsPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Literals([
                "Pending",
                "Approved",
                "Rejected",
                "Disconnected",
              ]),
            ),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.Literals(["None"])),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Creating",
            "Updating",
            "Deleting",
            "Failed",
            "Disconnected",
          ]),
        ),
      }),
    ),
    sku: Schema.optional(
      Schema.Struct({
        family: Schema.Literals(["B", "C"]),
        name: Schema.Literals([
          "Standard_B1",
          "Custom_B32",
          "Custom_B6",
          "Custom_C42",
          "Custom_C10",
        ]),
      }),
    ),
    identity: Schema.optional(
      Schema.Struct({
        principalId: Schema.optional(Schema.String),
        tenantId: Schema.optional(Schema.String),
        type: Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
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
    etag: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<MHSMPrivateEndpointConnectionsPutInput>;

// Output Schema
export interface MHSMPrivateEndpointConnectionsPutOutput {
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
export const MHSMPrivateEndpointConnectionsPutOutput =
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
  }) as unknown as Schema.Codec<MHSMPrivateEndpointConnectionsPutOutput>;

// The operation
/**
 * Updates the specified private endpoint connection associated with the managed hsm pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the managed HSM Pool.
 * @param privateEndpointConnectionName - Name of the private endpoint connection associated with the managed hsm pool.
 */
export const MHSMPrivateEndpointConnectionsPut =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MHSMPrivateEndpointConnectionsPutInput,
    outputSchema: MHSMPrivateEndpointConnectionsPutOutput,
  }));
// Input Schema
export interface MHSMPrivateLinkResourcesListByMHSMResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const MHSMPrivateLinkResourcesListByMHSMResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}/privateLinkResources",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<MHSMPrivateLinkResourcesListByMHSMResourceInput>;

// Output Schema
export interface MHSMPrivateLinkResourcesListByMHSMResourceOutput {
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
export const MHSMPrivateLinkResourcesListByMHSMResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<MHSMPrivateLinkResourcesListByMHSMResourceOutput>;

// The operation
/**
 * Gets the private link resources supported for the managed hsm pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the managed HSM Pool.
 */
export const MHSMPrivateLinkResourcesListByMHSMResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MHSMPrivateLinkResourcesListByMHSMResourceInput,
    outputSchema: MHSMPrivateLinkResourcesListByMHSMResourceOutput,
  }));
// Input Schema
export interface MHSMRegionsListByResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  name: string;
}
export const MHSMRegionsListByResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/managedHSMs/{name}/regions",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<MHSMRegionsListByResourceInput>;

// Output Schema
export interface MHSMRegionsListByResourceOutput {
  value: {
    name?: string;
    provisioningState?:
      | "Preprovisioning"
      | "Provisioning"
      | "Succeeded"
      | "Failed"
      | "Deleting"
      | "Cleanup";
    isPrimary?: boolean;
  }[];
  nextLink?: string;
}
export const MHSMRegionsListByResourceOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Preprovisioning",
            "Provisioning",
            "Succeeded",
            "Failed",
            "Deleting",
            "Cleanup",
          ]),
        ),
        isPrimary: Schema.optional(Schema.Boolean),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MHSMRegionsListByResourceOutput>;

// The operation
/**
 * The List operation gets information about the regions associated with the managed HSM Pool.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the managed HSM Pool.
 */
export const MHSMRegionsListByResource = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MHSMRegionsListByResourceInput,
    outputSchema: MHSMRegionsListByResourceOutput,
  }),
);
// Input Schema
export interface OperationsListInput {}
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.KeyVault/operations",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<OperationsListInput>;

// Output Schema
export interface OperationsListOutput {
  value: {
    name?: string;
    display?: {
      provider?: string;
      resource?: string;
      operation?: string;
      description?: string;
    };
    origin?: string;
    properties?: {
      serviceSpecification?: {
        logSpecifications?: {
          name?: string;
          displayName?: string;
          blobDuration?: string;
        }[];
        metricSpecifications?: {
          name?: string;
          displayName?: string;
          displayDescription?: string;
          unit?: string;
          aggregationType?: string;
          supportedAggregationTypes?: string[];
          supportedTimeGrainTypes?: string[];
          lockAggregationType?: string;
          dimensions?: {
            name?: string;
            displayName?: string;
            toBeExportedForShoebox?: boolean;
          }[];
          fillGapWithZero?: boolean;
          internalMetricName?: string;
        }[];
      };
    };
    isDataAction?: boolean;
  }[];
  nextLink?: string;
}
export const OperationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.Array(
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
      properties: Schema.optional(
        Schema.Struct({
          serviceSpecification: Schema.optional(
            Schema.Struct({
              logSpecifications: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    blobDuration: Schema.optional(Schema.String),
                  }),
                ),
              ),
              metricSpecifications: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    displayName: Schema.optional(Schema.String),
                    displayDescription: Schema.optional(Schema.String),
                    unit: Schema.optional(Schema.String),
                    aggregationType: Schema.optional(Schema.String),
                    supportedAggregationTypes: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    supportedTimeGrainTypes: Schema.optional(
                      Schema.Array(Schema.String),
                    ),
                    lockAggregationType: Schema.optional(Schema.String),
                    dimensions: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          displayName: Schema.optional(Schema.String),
                          toBeExportedForShoebox: Schema.optional(
                            Schema.Boolean,
                          ),
                        }),
                      ),
                    ),
                    fillGapWithZero: Schema.optional(Schema.Boolean),
                    internalMetricName: Schema.optional(Schema.String),
                  }),
                ),
              ),
            }),
          ),
        }),
      ),
      isDataAction: Schema.optional(Schema.Boolean),
    }),
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
export interface PrivateEndpointConnectionsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteInput>;

// Output Schema
export interface PrivateEndpointConnectionsDeleteOutput {
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
export const PrivateEndpointConnectionsDeleteOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsDeleteOutput>;

// The operation
/**
 * Deletes the specified private endpoint connection associated with the key vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault.
 * @param privateEndpointConnectionName - Name of the private endpoint connection associated with the key vault.
 */
export const PrivateEndpointConnectionsDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsDeleteInput,
    outputSchema: PrivateEndpointConnectionsDeleteOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  privateEndpointConnectionName: string;
}
export const PrivateEndpointConnectionsGetInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsGetInput>;

// Output Schema
export interface PrivateEndpointConnectionsGetOutput {
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
export const PrivateEndpointConnectionsGetOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsGetOutput>;

// The operation
/**
 * Gets the specified private endpoint connection associated with the key vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault.
 * @param privateEndpointConnectionName - Name of the private endpoint connection associated with the key vault.
 */
export const PrivateEndpointConnectionsGet =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsGetInput,
    outputSchema: PrivateEndpointConnectionsGetOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsListByResourceInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const PrivateEndpointConnectionsListByResourceInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateEndpointConnections",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsListByResourceInput>;

// Output Schema
export interface PrivateEndpointConnectionsListByResourceOutput {
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
export const PrivateEndpointConnectionsListByResourceOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsListByResourceOutput>;

// The operation
/**
 * The List operation gets information about the private endpoint connections associated with the vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault.
 */
export const PrivateEndpointConnectionsListByResource =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsListByResourceInput,
    outputSchema: PrivateEndpointConnectionsListByResourceOutput,
  }));
// Input Schema
export interface PrivateEndpointConnectionsPutInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  privateEndpointConnectionName: string;
  properties?: {
    privateEndpoint?: { id?: string };
    privateLinkServiceConnectionState?: {
      status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
      description?: string;
      actionsRequired?: "None";
    };
    provisioningState?:
      | "Succeeded"
      | "Creating"
      | "Updating"
      | "Deleting"
      | "Failed"
      | "Disconnected";
  };
  location?: string;
  tags?: Record<string, string>;
  etag?: string;
}
export const PrivateEndpointConnectionsPutInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    privateEndpointConnectionName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        privateEndpoint: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
          }),
        ),
        privateLinkServiceConnectionState: Schema.optional(
          Schema.Struct({
            status: Schema.optional(
              Schema.Literals([
                "Pending",
                "Approved",
                "Rejected",
                "Disconnected",
              ]),
            ),
            description: Schema.optional(Schema.String),
            actionsRequired: Schema.optional(Schema.Literals(["None"])),
          }),
        ),
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Creating",
            "Updating",
            "Deleting",
            "Failed",
            "Disconnected",
          ]),
        ),
      }),
    ),
    location: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    etag: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateEndpointConnections/{privateEndpointConnectionName}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<PrivateEndpointConnectionsPutInput>;

// Output Schema
export interface PrivateEndpointConnectionsPutOutput {
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
export const PrivateEndpointConnectionsPutOutput =
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
  }) as unknown as Schema.Codec<PrivateEndpointConnectionsPutOutput>;

// The operation
/**
 * Updates the specified private endpoint connection associated with the key vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault.
 * @param privateEndpointConnectionName - Name of the private endpoint connection associated with the key vault.
 */
export const PrivateEndpointConnectionsPut =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateEndpointConnectionsPutInput,
    outputSchema: PrivateEndpointConnectionsPutOutput,
  }));
// Input Schema
export interface PrivateLinkResourcesListByVaultInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const PrivateLinkResourcesListByVaultInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/privateLinkResources",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<PrivateLinkResourcesListByVaultInput>;

// Output Schema
export interface PrivateLinkResourcesListByVaultOutput {
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
export const PrivateLinkResourcesListByVaultOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PrivateLinkResourcesListByVaultOutput>;

// The operation
/**
 * Gets the private link resources supported for the key vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault.
 */
export const PrivateLinkResourcesListByVault =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PrivateLinkResourcesListByVaultInput,
    outputSchema: PrivateLinkResourcesListByVaultOutput,
  }));
// Input Schema
export interface SecretsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  secretName: string;
  tags?: Record<string, string>;
  properties: {
    value?: string;
    contentType?: string;
    attributes?: {
      enabled?: boolean;
      nbf?: number;
      exp?: number;
      created?: number;
      updated?: number;
    };
    secretUri?: string;
    secretUriWithVersion?: string;
  };
}
export const SecretsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    secretName: Schema.String.pipe(T.PathParam()),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.Struct({
      value: Schema.optional(Schema.String),
      contentType: Schema.optional(Schema.String),
      attributes: Schema.optional(
        Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
          nbf: Schema.optional(Schema.Number),
          exp: Schema.optional(Schema.Number),
          created: Schema.optional(Schema.Number),
          updated: Schema.optional(Schema.Number),
        }),
      ),
      secretUri: Schema.optional(Schema.String),
      secretUriWithVersion: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<SecretsCreateOrUpdateInput>;

// Output Schema
export interface SecretsCreateOrUpdateOutput {
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
export const SecretsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<SecretsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a secret in a key vault in the specified subscription.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault.
 * @param secretName - The name of the secret.
 */
export const SecretsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SecretsCreateOrUpdateInput,
    outputSchema: SecretsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface SecretsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  secretName: string;
}
export const SecretsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  secretName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<SecretsGetInput>;

// Output Schema
export interface SecretsGetOutput {
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
export const SecretsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SecretsGetOutput>;

// The operation
/**
 * Gets the specified secret.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault.
 * @param secretName - The name of the secret.
 */
export const SecretsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretsGetInput,
  outputSchema: SecretsGetOutput,
}));
// Input Schema
export interface SecretsListInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  $top?: number;
}
export const SecretsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  $top: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<SecretsListInput>;

// Output Schema
export interface SecretsListOutput {
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
export const SecretsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SecretsListOutput>;

// The operation
/**
 * The List operation gets information about the secrets in a vault.  NOTE: This API is intended for internal use in ARM deployments. Users should use the data-plane REST service for interaction with vault secrets.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault.
 * @param $top - Maximum number of results to return.
 */
export const SecretsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretsListInput,
  outputSchema: SecretsListOutput,
}));
// Input Schema
export interface SecretsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  secretName: string;
  tags?: Record<string, string>;
  properties?: {
    value?: string;
    contentType?: string;
    attributes?: {
      enabled?: boolean;
      nbf?: number;
      exp?: number;
      created?: number;
      updated?: number;
    };
  };
}
export const SecretsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  secretName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      value: Schema.optional(Schema.String),
      contentType: Schema.optional(Schema.String),
      attributes: Schema.optional(
        Schema.Struct({
          enabled: Schema.optional(Schema.Boolean),
          nbf: Schema.optional(Schema.Number),
          exp: Schema.optional(Schema.Number),
          created: Schema.optional(Schema.Number),
          updated: Schema.optional(Schema.Number),
        }),
      ),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<SecretsUpdateInput>;

// Output Schema
export interface SecretsUpdateOutput {
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
export const SecretsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<SecretsUpdateOutput>;

// The operation
/**
 * Update a secret in the specified subscription.  NOTE: This API is intended for internal use in ARM deployments.  Users should use the data-plane REST service for interaction with vault secrets.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault.
 * @param secretName - The name of the secret.
 */
export const SecretsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SecretsUpdateInput,
  outputSchema: SecretsUpdateOutput,
}));
// Input Schema
export interface VaultsCheckNameAvailabilityInput {
  subscriptionId: string;
  name: string;
  type: "Microsoft.KeyVault/vaults";
}
export const VaultsCheckNameAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    type: Schema.Literals(["Microsoft.KeyVault/vaults"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/checkNameAvailability",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<VaultsCheckNameAvailabilityInput>;

// Output Schema
export interface VaultsCheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: "AccountNameInvalid" | "AlreadyExists";
  message?: string;
}
export const VaultsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(
      Schema.Literals(["AccountNameInvalid", "AlreadyExists"]),
    ),
    message: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<VaultsCheckNameAvailabilityOutput>;

// The operation
/**
 * Checks that the vault name is valid and is not already in use.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const VaultsCheckNameAvailability = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VaultsCheckNameAvailabilityInput,
    outputSchema: VaultsCheckNameAvailabilityOutput,
  }),
);
// Input Schema
export interface VaultsCreateOrUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  location: string;
  tags?: Record<string, string>;
  properties: {
    tenantId: string;
    sku: { family: "A"; name: "standard" | "premium" };
    accessPolicies?: {
      tenantId: string;
      objectId: string;
      applicationId?: string;
      permissions: {
        keys?: (
          | "all"
          | "encrypt"
          | "decrypt"
          | "wrapKey"
          | "unwrapKey"
          | "sign"
          | "verify"
          | "get"
          | "list"
          | "create"
          | "update"
          | "import"
          | "delete"
          | "backup"
          | "restore"
          | "recover"
          | "purge"
          | "release"
          | "rotate"
          | "getrotationpolicy"
          | "setrotationpolicy"
        )[];
        secrets?: (
          | "all"
          | "get"
          | "list"
          | "set"
          | "delete"
          | "backup"
          | "restore"
          | "recover"
          | "purge"
        )[];
        certificates?: (
          | "all"
          | "get"
          | "list"
          | "delete"
          | "create"
          | "import"
          | "update"
          | "managecontacts"
          | "getissuers"
          | "listissuers"
          | "setissuers"
          | "deleteissuers"
          | "manageissuers"
          | "recover"
          | "purge"
          | "backup"
          | "restore"
        )[];
        storage?: (
          | "all"
          | "get"
          | "list"
          | "delete"
          | "set"
          | "update"
          | "regeneratekey"
          | "recover"
          | "purge"
          | "backup"
          | "restore"
          | "setsas"
          | "listsas"
          | "getsas"
          | "deletesas"
        )[];
      };
    }[];
    vaultUri?: string;
    hsmPoolResourceId?: string;
    enabledForDeployment?: boolean;
    enabledForDiskEncryption?: boolean;
    enabledForTemplateDeployment?: boolean;
    enableSoftDelete?: boolean;
    softDeleteRetentionInDays?: number;
    enableRbacAuthorization?: boolean;
    createMode?: "recover" | "default";
    enablePurgeProtection?: boolean;
    networkAcls?: {
      bypass?: "AzureServices" | "None";
      defaultAction?: "Allow" | "Deny";
      ipRules?: { value: string }[];
      virtualNetworkRules?: {
        id: string;
        ignoreMissingVnetServiceEndpoint?: boolean;
      }[];
    };
    provisioningState?: "Succeeded" | "RegisteringDns";
    privateEndpointConnections?: {
      id?: string;
      etag?: string;
      properties?: {
        privateEndpoint?: { id?: string };
        privateLinkServiceConnectionState?: {
          status?: "Pending" | "Approved" | "Rejected" | "Disconnected";
          description?: string;
          actionsRequired?: "None";
        };
        provisioningState?:
          | "Succeeded"
          | "Creating"
          | "Updating"
          | "Deleting"
          | "Failed"
          | "Disconnected";
      };
    }[];
    publicNetworkAccess?: string;
  };
}
export const VaultsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    location: Schema.String,
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    properties: Schema.Struct({
      tenantId: Schema.String,
      sku: Schema.Struct({
        family: Schema.Literals(["A"]),
        name: Schema.Literals(["standard", "premium"]),
      }),
      accessPolicies: Schema.optional(
        Schema.Array(
          Schema.Struct({
            tenantId: Schema.String,
            objectId: Schema.String,
            applicationId: Schema.optional(Schema.String),
            permissions: Schema.Struct({
              keys: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "all",
                    "encrypt",
                    "decrypt",
                    "wrapKey",
                    "unwrapKey",
                    "sign",
                    "verify",
                    "get",
                    "list",
                    "create",
                    "update",
                    "import",
                    "delete",
                    "backup",
                    "restore",
                    "recover",
                    "purge",
                    "release",
                    "rotate",
                    "getrotationpolicy",
                    "setrotationpolicy",
                  ]),
                ),
              ),
              secrets: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "all",
                    "get",
                    "list",
                    "set",
                    "delete",
                    "backup",
                    "restore",
                    "recover",
                    "purge",
                  ]),
                ),
              ),
              certificates: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "all",
                    "get",
                    "list",
                    "delete",
                    "create",
                    "import",
                    "update",
                    "managecontacts",
                    "getissuers",
                    "listissuers",
                    "setissuers",
                    "deleteissuers",
                    "manageissuers",
                    "recover",
                    "purge",
                    "backup",
                    "restore",
                  ]),
                ),
              ),
              storage: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "all",
                    "get",
                    "list",
                    "delete",
                    "set",
                    "update",
                    "regeneratekey",
                    "recover",
                    "purge",
                    "backup",
                    "restore",
                    "setsas",
                    "listsas",
                    "getsas",
                    "deletesas",
                  ]),
                ),
              ),
            }),
          }),
        ),
      ),
      vaultUri: Schema.optional(Schema.String),
      hsmPoolResourceId: Schema.optional(Schema.String),
      enabledForDeployment: Schema.optional(Schema.Boolean),
      enabledForDiskEncryption: Schema.optional(Schema.Boolean),
      enabledForTemplateDeployment: Schema.optional(Schema.Boolean),
      enableSoftDelete: Schema.optional(Schema.Boolean),
      softDeleteRetentionInDays: Schema.optional(Schema.Number),
      enableRbacAuthorization: Schema.optional(Schema.Boolean),
      createMode: Schema.optional(Schema.Literals(["recover", "default"])),
      enablePurgeProtection: Schema.optional(Schema.Boolean),
      networkAcls: Schema.optional(
        Schema.Struct({
          bypass: Schema.optional(Schema.Literals(["AzureServices", "None"])),
          defaultAction: Schema.optional(Schema.Literals(["Allow", "Deny"])),
          ipRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                value: Schema.String,
              }),
            ),
          ),
          virtualNetworkRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
                ignoreMissingVnetServiceEndpoint: Schema.optional(
                  Schema.Boolean,
                ),
              }),
            ),
          ),
        }),
      ),
      provisioningState: Schema.optional(
        Schema.Literals(["Succeeded", "RegisteringDns"]),
      ),
      privateEndpointConnections: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            etag: Schema.optional(Schema.String),
            properties: Schema.optional(
              Schema.Struct({
                privateEndpoint: Schema.optional(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                  }),
                ),
                privateLinkServiceConnectionState: Schema.optional(
                  Schema.Struct({
                    status: Schema.optional(
                      Schema.Literals([
                        "Pending",
                        "Approved",
                        "Rejected",
                        "Disconnected",
                      ]),
                    ),
                    description: Schema.optional(Schema.String),
                    actionsRequired: Schema.optional(Schema.Literals(["None"])),
                  }),
                ),
                provisioningState: Schema.optional(
                  Schema.Literals([
                    "Succeeded",
                    "Creating",
                    "Updating",
                    "Deleting",
                    "Failed",
                    "Disconnected",
                  ]),
                ),
              }),
            ),
          }),
        ),
      ),
      publicNetworkAccess: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<VaultsCreateOrUpdateInput>;

// Output Schema
export interface VaultsCreateOrUpdateOutput {
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
export const VaultsCreateOrUpdateOutput =
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
  }) as unknown as Schema.Codec<VaultsCreateOrUpdateOutput>;

// The operation
/**
 * Create or update a key vault in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault.
 */
export const VaultsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VaultsCreateOrUpdateInput,
    outputSchema: VaultsCreateOrUpdateOutput,
  }),
);
// Input Schema
export interface VaultsDeleteInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const VaultsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<VaultsDeleteInput>;

// Output Schema
export type VaultsDeleteOutput = void;
export const VaultsDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VaultsDeleteOutput>;

// The operation
/**
 * Deletes the specified Azure key vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault.
 */
export const VaultsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VaultsDeleteInput,
  outputSchema: VaultsDeleteOutput,
}));
// Input Schema
export interface VaultsGetInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
}
export const VaultsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<VaultsGetInput>;

// Output Schema
export interface VaultsGetOutput {
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
export const VaultsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VaultsGetOutput>;

// The operation
/**
 * Gets the specified Azure key vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault.
 */
export const VaultsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VaultsGetInput,
  outputSchema: VaultsGetOutput,
}));
// Input Schema
export interface VaultsGetDeletedInput {
  subscriptionId: string;
  location: string;
  vaultName: string;
}
export const VaultsGetDeletedInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  location: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<VaultsGetDeletedInput>;

// Output Schema
export interface VaultsGetDeletedOutput {
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
export const VaultsGetDeletedOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
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
) as unknown as Schema.Codec<VaultsGetDeletedOutput>;

// The operation
/**
 * Gets the deleted Azure key vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param vaultName - The name of the vault.
 */
export const VaultsGetDeleted = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VaultsGetDeletedInput,
  outputSchema: VaultsGetDeletedOutput,
}));
// Input Schema
export interface VaultsListInput {
  subscriptionId: string;
  $filter: "resourceType eq 'Microsoft.KeyVault/vaults'";
  $top?: number;
}
export const VaultsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  $filter: Schema.Literals(["resourceType eq 'Microsoft.KeyVault/vaults'"]),
  $top: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resources",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<VaultsListInput>;

// Output Schema
export interface VaultsListOutput {
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
export const VaultsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VaultsListOutput>;

// The operation
/**
 * The List operation gets information about the vaults associated with the subscription.
 *
 * @param $filter - The filter to apply on the operation.
 * @param $top - Maximum number of results to return.
 * @param api-version - Azure Resource Manager Api Version.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const VaultsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VaultsListInput,
  outputSchema: VaultsListOutput,
}));
// Input Schema
export interface VaultsListByResourceGroupInput {
  subscriptionId: string;
  resourceGroupName: string;
  $top?: number;
}
export const VaultsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<VaultsListByResourceGroupInput>;

// Output Schema
export interface VaultsListByResourceGroupOutput {
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
export const VaultsListByResourceGroupOutput =
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
  }) as unknown as Schema.Codec<VaultsListByResourceGroupOutput>;

// The operation
/**
 * The List operation gets information about the vaults associated with the subscription and within the specified resource group.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param $top - Maximum number of results to return.
 */
export const VaultsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VaultsListByResourceGroupInput,
    outputSchema: VaultsListByResourceGroupOutput,
  }),
);
// Input Schema
export interface VaultsListBySubscriptionInput {
  subscriptionId: string;
  $top?: number;
}
export const VaultsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    $top: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/vaults",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<VaultsListBySubscriptionInput>;

// Output Schema
export interface VaultsListBySubscriptionOutput {
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
export const VaultsListBySubscriptionOutput =
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
  }) as unknown as Schema.Codec<VaultsListBySubscriptionOutput>;

// The operation
/**
 * The List operation gets information about the vaults associated with the subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param $top - Maximum number of results to return.
 */
export const VaultsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VaultsListBySubscriptionInput,
    outputSchema: VaultsListBySubscriptionOutput,
  }),
);
// Input Schema
export interface VaultsListDeletedInput {
  subscriptionId: string;
}
export const VaultsListDeletedInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subscriptionId: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/deletedVaults",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<VaultsListDeletedInput>;

// Output Schema
export interface VaultsListDeletedOutput {
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
export const VaultsListDeletedOutput =
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
  }) as unknown as Schema.Codec<VaultsListDeletedOutput>;

// The operation
/**
 * Gets information about the deleted vaults in a subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const VaultsListDeleted = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VaultsListDeletedInput,
  outputSchema: VaultsListDeletedOutput,
}));
// Input Schema
export interface VaultsPurgeDeletedInput {
  subscriptionId: string;
  location: string;
  vaultName: string;
}
export const VaultsPurgeDeletedInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    location: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}/purge",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<VaultsPurgeDeletedInput>;

// Output Schema
export type VaultsPurgeDeletedOutput = void;
export const VaultsPurgeDeletedOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<VaultsPurgeDeletedOutput>;

// The operation
/**
 * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param location - The name of the Azure region.
 * @param vaultName - The name of the vault.
 */
export const VaultsPurgeDeleted = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VaultsPurgeDeletedInput,
  outputSchema: VaultsPurgeDeletedOutput,
}));
// Input Schema
export interface VaultsUpdateInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  tags?: Record<string, string>;
  properties?: {
    tenantId?: string;
    sku?: { family: "A"; name: "standard" | "premium" };
    accessPolicies?: {
      tenantId: string;
      objectId: string;
      applicationId?: string;
      permissions: {
        keys?: (
          | "all"
          | "encrypt"
          | "decrypt"
          | "wrapKey"
          | "unwrapKey"
          | "sign"
          | "verify"
          | "get"
          | "list"
          | "create"
          | "update"
          | "import"
          | "delete"
          | "backup"
          | "restore"
          | "recover"
          | "purge"
          | "release"
          | "rotate"
          | "getrotationpolicy"
          | "setrotationpolicy"
        )[];
        secrets?: (
          | "all"
          | "get"
          | "list"
          | "set"
          | "delete"
          | "backup"
          | "restore"
          | "recover"
          | "purge"
        )[];
        certificates?: (
          | "all"
          | "get"
          | "list"
          | "delete"
          | "create"
          | "import"
          | "update"
          | "managecontacts"
          | "getissuers"
          | "listissuers"
          | "setissuers"
          | "deleteissuers"
          | "manageissuers"
          | "recover"
          | "purge"
          | "backup"
          | "restore"
        )[];
        storage?: (
          | "all"
          | "get"
          | "list"
          | "delete"
          | "set"
          | "update"
          | "regeneratekey"
          | "recover"
          | "purge"
          | "backup"
          | "restore"
          | "setsas"
          | "listsas"
          | "getsas"
          | "deletesas"
        )[];
      };
    }[];
    enabledForDeployment?: boolean;
    enabledForDiskEncryption?: boolean;
    enabledForTemplateDeployment?: boolean;
    enableSoftDelete?: boolean;
    enableRbacAuthorization?: boolean;
    softDeleteRetentionInDays?: number;
    createMode?: "recover" | "default";
    enablePurgeProtection?: boolean;
    networkAcls?: {
      bypass?: "AzureServices" | "None";
      defaultAction?: "Allow" | "Deny";
      ipRules?: { value: string }[];
      virtualNetworkRules?: {
        id: string;
        ignoreMissingVnetServiceEndpoint?: boolean;
      }[];
    };
    publicNetworkAccess?: string;
  };
}
export const VaultsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  vaultName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  properties: Schema.optional(
    Schema.Struct({
      tenantId: Schema.optional(Schema.String),
      sku: Schema.optional(
        Schema.Struct({
          family: Schema.Literals(["A"]),
          name: Schema.Literals(["standard", "premium"]),
        }),
      ),
      accessPolicies: Schema.optional(
        Schema.Array(
          Schema.Struct({
            tenantId: Schema.String,
            objectId: Schema.String,
            applicationId: Schema.optional(Schema.String),
            permissions: Schema.Struct({
              keys: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "all",
                    "encrypt",
                    "decrypt",
                    "wrapKey",
                    "unwrapKey",
                    "sign",
                    "verify",
                    "get",
                    "list",
                    "create",
                    "update",
                    "import",
                    "delete",
                    "backup",
                    "restore",
                    "recover",
                    "purge",
                    "release",
                    "rotate",
                    "getrotationpolicy",
                    "setrotationpolicy",
                  ]),
                ),
              ),
              secrets: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "all",
                    "get",
                    "list",
                    "set",
                    "delete",
                    "backup",
                    "restore",
                    "recover",
                    "purge",
                  ]),
                ),
              ),
              certificates: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "all",
                    "get",
                    "list",
                    "delete",
                    "create",
                    "import",
                    "update",
                    "managecontacts",
                    "getissuers",
                    "listissuers",
                    "setissuers",
                    "deleteissuers",
                    "manageissuers",
                    "recover",
                    "purge",
                    "backup",
                    "restore",
                  ]),
                ),
              ),
              storage: Schema.optional(
                Schema.Array(
                  Schema.Literals([
                    "all",
                    "get",
                    "list",
                    "delete",
                    "set",
                    "update",
                    "regeneratekey",
                    "recover",
                    "purge",
                    "backup",
                    "restore",
                    "setsas",
                    "listsas",
                    "getsas",
                    "deletesas",
                  ]),
                ),
              ),
            }),
          }),
        ),
      ),
      enabledForDeployment: Schema.optional(Schema.Boolean),
      enabledForDiskEncryption: Schema.optional(Schema.Boolean),
      enabledForTemplateDeployment: Schema.optional(Schema.Boolean),
      enableSoftDelete: Schema.optional(Schema.Boolean),
      enableRbacAuthorization: Schema.optional(Schema.Boolean),
      softDeleteRetentionInDays: Schema.optional(Schema.Number),
      createMode: Schema.optional(Schema.Literals(["recover", "default"])),
      enablePurgeProtection: Schema.optional(Schema.Boolean),
      networkAcls: Schema.optional(
        Schema.Struct({
          bypass: Schema.optional(Schema.Literals(["AzureServices", "None"])),
          defaultAction: Schema.optional(Schema.Literals(["Allow", "Deny"])),
          ipRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                value: Schema.String,
              }),
            ),
          ),
          virtualNetworkRules: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
                ignoreMissingVnetServiceEndpoint: Schema.optional(
                  Schema.Boolean,
                ),
              }),
            ),
          ),
        }),
      ),
      publicNetworkAccess: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
    apiVersion: "2026-02-01",
  }),
) as unknown as Schema.Codec<VaultsUpdateInput>;

// Output Schema
export interface VaultsUpdateOutput {
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
export const VaultsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<VaultsUpdateOutput>;

// The operation
/**
 * Update a key vault in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - The name of the vault.
 */
export const VaultsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VaultsUpdateInput,
  outputSchema: VaultsUpdateOutput,
}));
// Input Schema
export interface VaultsUpdateAccessPolicyInput {
  subscriptionId: string;
  resourceGroupName: string;
  vaultName: string;
  operationKind: "add" | "replace" | "remove";
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  properties: {
    accessPolicies: {
      tenantId: string;
      objectId: string;
      applicationId?: string;
      permissions: {
        keys?: (
          | "all"
          | "encrypt"
          | "decrypt"
          | "wrapKey"
          | "unwrapKey"
          | "sign"
          | "verify"
          | "get"
          | "list"
          | "create"
          | "update"
          | "import"
          | "delete"
          | "backup"
          | "restore"
          | "recover"
          | "purge"
          | "release"
          | "rotate"
          | "getrotationpolicy"
          | "setrotationpolicy"
        )[];
        secrets?: (
          | "all"
          | "get"
          | "list"
          | "set"
          | "delete"
          | "backup"
          | "restore"
          | "recover"
          | "purge"
        )[];
        certificates?: (
          | "all"
          | "get"
          | "list"
          | "delete"
          | "create"
          | "import"
          | "update"
          | "managecontacts"
          | "getissuers"
          | "listissuers"
          | "setissuers"
          | "deleteissuers"
          | "manageissuers"
          | "recover"
          | "purge"
          | "backup"
          | "restore"
        )[];
        storage?: (
          | "all"
          | "get"
          | "list"
          | "delete"
          | "set"
          | "update"
          | "regeneratekey"
          | "recover"
          | "purge"
          | "backup"
          | "restore"
          | "setsas"
          | "listsas"
          | "getsas"
          | "deletesas"
        )[];
      };
    }[];
  };
}
export const VaultsUpdateAccessPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    vaultName: Schema.String.pipe(T.PathParam()),
    operationKind: Schema.Literals(["add", "replace", "remove"]).pipe(
      T.PathParam(),
    ),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    properties: Schema.Struct({
      accessPolicies: Schema.Array(
        Schema.Struct({
          tenantId: Schema.String,
          objectId: Schema.String,
          applicationId: Schema.optional(Schema.String),
          permissions: Schema.Struct({
            keys: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "all",
                  "encrypt",
                  "decrypt",
                  "wrapKey",
                  "unwrapKey",
                  "sign",
                  "verify",
                  "get",
                  "list",
                  "create",
                  "update",
                  "import",
                  "delete",
                  "backup",
                  "restore",
                  "recover",
                  "purge",
                  "release",
                  "rotate",
                  "getrotationpolicy",
                  "setrotationpolicy",
                ]),
              ),
            ),
            secrets: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "all",
                  "get",
                  "list",
                  "set",
                  "delete",
                  "backup",
                  "restore",
                  "recover",
                  "purge",
                ]),
              ),
            ),
            certificates: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "all",
                  "get",
                  "list",
                  "delete",
                  "create",
                  "import",
                  "update",
                  "managecontacts",
                  "getissuers",
                  "listissuers",
                  "setissuers",
                  "deleteissuers",
                  "manageissuers",
                  "recover",
                  "purge",
                  "backup",
                  "restore",
                ]),
              ),
            ),
            storage: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "all",
                  "get",
                  "list",
                  "delete",
                  "set",
                  "update",
                  "regeneratekey",
                  "recover",
                  "purge",
                  "backup",
                  "restore",
                  "setsas",
                  "listsas",
                  "getsas",
                  "deletesas",
                ]),
              ),
            ),
          }),
        }),
      ),
    }),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/accessPolicies/{operationKind}",
      apiVersion: "2026-02-01",
    }),
  ) as unknown as Schema.Codec<VaultsUpdateAccessPolicyInput>;

// Output Schema
export interface VaultsUpdateAccessPolicyOutput {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  properties: {
    accessPolicies: {
      tenantId: string;
      objectId: string;
      applicationId?: string;
      permissions: {
        keys?: (
          | "all"
          | "encrypt"
          | "decrypt"
          | "wrapKey"
          | "unwrapKey"
          | "sign"
          | "verify"
          | "get"
          | "list"
          | "create"
          | "update"
          | "import"
          | "delete"
          | "backup"
          | "restore"
          | "recover"
          | "purge"
          | "release"
          | "rotate"
          | "getrotationpolicy"
          | "setrotationpolicy"
        )[];
        secrets?: (
          | "all"
          | "get"
          | "list"
          | "set"
          | "delete"
          | "backup"
          | "restore"
          | "recover"
          | "purge"
        )[];
        certificates?: (
          | "all"
          | "get"
          | "list"
          | "delete"
          | "create"
          | "import"
          | "update"
          | "managecontacts"
          | "getissuers"
          | "listissuers"
          | "setissuers"
          | "deleteissuers"
          | "manageissuers"
          | "recover"
          | "purge"
          | "backup"
          | "restore"
        )[];
        storage?: (
          | "all"
          | "get"
          | "list"
          | "delete"
          | "set"
          | "update"
          | "regeneratekey"
          | "recover"
          | "purge"
          | "backup"
          | "restore"
          | "setsas"
          | "listsas"
          | "getsas"
          | "deletesas"
        )[];
      };
    }[];
  };
}
export const VaultsUpdateAccessPolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    properties: Schema.Struct({
      accessPolicies: Schema.Array(
        Schema.Struct({
          tenantId: Schema.String,
          objectId: Schema.String,
          applicationId: Schema.optional(Schema.String),
          permissions: Schema.Struct({
            keys: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "all",
                  "encrypt",
                  "decrypt",
                  "wrapKey",
                  "unwrapKey",
                  "sign",
                  "verify",
                  "get",
                  "list",
                  "create",
                  "update",
                  "import",
                  "delete",
                  "backup",
                  "restore",
                  "recover",
                  "purge",
                  "release",
                  "rotate",
                  "getrotationpolicy",
                  "setrotationpolicy",
                ]),
              ),
            ),
            secrets: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "all",
                  "get",
                  "list",
                  "set",
                  "delete",
                  "backup",
                  "restore",
                  "recover",
                  "purge",
                ]),
              ),
            ),
            certificates: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "all",
                  "get",
                  "list",
                  "delete",
                  "create",
                  "import",
                  "update",
                  "managecontacts",
                  "getissuers",
                  "listissuers",
                  "setissuers",
                  "deleteissuers",
                  "manageissuers",
                  "recover",
                  "purge",
                  "backup",
                  "restore",
                ]),
              ),
            ),
            storage: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "all",
                  "get",
                  "list",
                  "delete",
                  "set",
                  "update",
                  "regeneratekey",
                  "recover",
                  "purge",
                  "backup",
                  "restore",
                  "setsas",
                  "listsas",
                  "getsas",
                  "deletesas",
                ]),
              ),
            ),
          }),
        }),
      ),
    }),
  }) as unknown as Schema.Codec<VaultsUpdateAccessPolicyOutput>;

// The operation
/**
 * Update access policies in a key vault in the specified subscription.
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param vaultName - Name of the vault
 * @param operationKind - Name of the operation
 */
export const VaultsUpdateAccessPolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VaultsUpdateAccessPolicyInput,
    outputSchema: VaultsUpdateAccessPolicyOutput,
  }),
);
