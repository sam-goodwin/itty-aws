/**
 * Azure Keyvault API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
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
  );
export type KeysCreateIfNotExistInput = typeof KeysCreateIfNotExistInput.Type;

// Output Schema
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
  });
export type KeysCreateIfNotExistOutput = typeof KeysCreateIfNotExistOutput.Type;

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
);
export type KeysGetInput = typeof KeysGetInput.Type;

// Output Schema
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
});
export type KeysGetOutput = typeof KeysGetOutput.Type;

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
);
export type KeysGetVersionInput = typeof KeysGetVersionInput.Type;

// Output Schema
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
});
export type KeysGetVersionOutput = typeof KeysGetVersionOutput.Type;

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
);
export type KeysListInput = typeof KeysListInput.Type;

// Output Schema
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
});
export type KeysListOutput = typeof KeysListOutput.Type;

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
);
export type KeysListVersionsInput = typeof KeysListVersionsInput.Type;

// Output Schema
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
);
export type KeysListVersionsOutput = typeof KeysListVersionsOutput.Type;

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
  );
export type ManagedHsmKeysCreateIfNotExistInput =
  typeof ManagedHsmKeysCreateIfNotExistInput.Type;

// Output Schema
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
  });
export type ManagedHsmKeysCreateIfNotExistOutput =
  typeof ManagedHsmKeysCreateIfNotExistOutput.Type;

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
);
export type ManagedHsmKeysGetInput = typeof ManagedHsmKeysGetInput.Type;

// Output Schema
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
  });
export type ManagedHsmKeysGetOutput = typeof ManagedHsmKeysGetOutput.Type;

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
  );
export type ManagedHsmKeysGetVersionInput =
  typeof ManagedHsmKeysGetVersionInput.Type;

// Output Schema
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
  });
export type ManagedHsmKeysGetVersionOutput =
  typeof ManagedHsmKeysGetVersionOutput.Type;

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
  );
export type ManagedHsmKeysListInput = typeof ManagedHsmKeysListInput.Type;

// Output Schema
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
  });
export type ManagedHsmKeysListOutput = typeof ManagedHsmKeysListOutput.Type;

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
  );
export type ManagedHsmKeysListVersionsInput =
  typeof ManagedHsmKeysListVersionsInput.Type;

// Output Schema
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
  });
export type ManagedHsmKeysListVersionsOutput =
  typeof ManagedHsmKeysListVersionsOutput.Type;

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
  );
export type ManagedHsmsCheckMhsmNameAvailabilityInput =
  typeof ManagedHsmsCheckMhsmNameAvailabilityInput.Type;

// Output Schema
export const ManagedHsmsCheckMhsmNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(
      Schema.Literals(["AccountNameInvalid", "AlreadyExists"]),
    ),
    message: Schema.optional(Schema.String),
  });
export type ManagedHsmsCheckMhsmNameAvailabilityOutput =
  typeof ManagedHsmsCheckMhsmNameAvailabilityOutput.Type;

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
  );
export type ManagedHsmsCreateOrUpdateInput =
  typeof ManagedHsmsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type ManagedHsmsCreateOrUpdateOutput =
  typeof ManagedHsmsCreateOrUpdateOutput.Type;

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
);
export type ManagedHsmsDeleteInput = typeof ManagedHsmsDeleteInput.Type;

// Output Schema
export const ManagedHsmsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManagedHsmsDeleteOutput = typeof ManagedHsmsDeleteOutput.Type;

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
);
export type ManagedHsmsGetInput = typeof ManagedHsmsGetInput.Type;

// Output Schema
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
});
export type ManagedHsmsGetOutput = typeof ManagedHsmsGetOutput.Type;

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
  );
export type ManagedHsmsGetDeletedInput = typeof ManagedHsmsGetDeletedInput.Type;

// Output Schema
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
  });
export type ManagedHsmsGetDeletedOutput =
  typeof ManagedHsmsGetDeletedOutput.Type;

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
  );
export type ManagedHsmsListByResourceGroupInput =
  typeof ManagedHsmsListByResourceGroupInput.Type;

// Output Schema
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
  });
export type ManagedHsmsListByResourceGroupOutput =
  typeof ManagedHsmsListByResourceGroupOutput.Type;

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
  );
export type ManagedHsmsListBySubscriptionInput =
  typeof ManagedHsmsListBySubscriptionInput.Type;

// Output Schema
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
  });
export type ManagedHsmsListBySubscriptionOutput =
  typeof ManagedHsmsListBySubscriptionOutput.Type;

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
export const ManagedHsmsListDeletedInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/deletedManagedHSMs",
      apiVersion: "2026-02-01",
    }),
  );
export type ManagedHsmsListDeletedInput =
  typeof ManagedHsmsListDeletedInput.Type;

// Output Schema
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
  });
export type ManagedHsmsListDeletedOutput =
  typeof ManagedHsmsListDeletedOutput.Type;

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
  );
export type ManagedHsmsPurgeDeletedInput =
  typeof ManagedHsmsPurgeDeletedInput.Type;

// Output Schema
export const ManagedHsmsPurgeDeletedOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ManagedHsmsPurgeDeletedOutput =
  typeof ManagedHsmsPurgeDeletedOutput.Type;

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
);
export type ManagedHsmsUpdateInput = typeof ManagedHsmsUpdateInput.Type;

// Output Schema
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
  });
export type ManagedHsmsUpdateOutput = typeof ManagedHsmsUpdateOutput.Type;

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
  );
export type MHSMPrivateEndpointConnectionsDeleteInput =
  typeof MHSMPrivateEndpointConnectionsDeleteInput.Type;

// Output Schema
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
  });
export type MHSMPrivateEndpointConnectionsDeleteOutput =
  typeof MHSMPrivateEndpointConnectionsDeleteOutput.Type;

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
  );
export type MHSMPrivateEndpointConnectionsGetInput =
  typeof MHSMPrivateEndpointConnectionsGetInput.Type;

// Output Schema
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
  });
export type MHSMPrivateEndpointConnectionsGetOutput =
  typeof MHSMPrivateEndpointConnectionsGetOutput.Type;

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
  );
export type MHSMPrivateEndpointConnectionsListByResourceInput =
  typeof MHSMPrivateEndpointConnectionsListByResourceInput.Type;

// Output Schema
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
  });
export type MHSMPrivateEndpointConnectionsListByResourceOutput =
  typeof MHSMPrivateEndpointConnectionsListByResourceOutput.Type;

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
  );
export type MHSMPrivateEndpointConnectionsPutInput =
  typeof MHSMPrivateEndpointConnectionsPutInput.Type;

// Output Schema
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
  });
export type MHSMPrivateEndpointConnectionsPutOutput =
  typeof MHSMPrivateEndpointConnectionsPutOutput.Type;

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
  );
export type MHSMPrivateLinkResourcesListByMHSMResourceInput =
  typeof MHSMPrivateLinkResourcesListByMHSMResourceInput.Type;

// Output Schema
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
  });
export type MHSMPrivateLinkResourcesListByMHSMResourceOutput =
  typeof MHSMPrivateLinkResourcesListByMHSMResourceOutput.Type;

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
  );
export type MHSMRegionsListByResourceInput =
  typeof MHSMRegionsListByResourceInput.Type;

// Output Schema
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
  });
export type MHSMRegionsListByResourceOutput =
  typeof MHSMRegionsListByResourceOutput.Type;

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
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.KeyVault/operations",
    apiVersion: "2026-02-01",
  }),
);
export type OperationsListInput = typeof OperationsListInput.Type;

// Output Schema
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
  );
export type PrivateEndpointConnectionsDeleteInput =
  typeof PrivateEndpointConnectionsDeleteInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsDeleteOutput =
  typeof PrivateEndpointConnectionsDeleteOutput.Type;

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
  );
export type PrivateEndpointConnectionsGetInput =
  typeof PrivateEndpointConnectionsGetInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsGetOutput =
  typeof PrivateEndpointConnectionsGetOutput.Type;

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
  );
export type PrivateEndpointConnectionsListByResourceInput =
  typeof PrivateEndpointConnectionsListByResourceInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsListByResourceOutput =
  typeof PrivateEndpointConnectionsListByResourceOutput.Type;

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
  );
export type PrivateEndpointConnectionsPutInput =
  typeof PrivateEndpointConnectionsPutInput.Type;

// Output Schema
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
  });
export type PrivateEndpointConnectionsPutOutput =
  typeof PrivateEndpointConnectionsPutOutput.Type;

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
  );
export type PrivateLinkResourcesListByVaultInput =
  typeof PrivateLinkResourcesListByVaultInput.Type;

// Output Schema
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
  });
export type PrivateLinkResourcesListByVaultOutput =
  typeof PrivateLinkResourcesListByVaultOutput.Type;

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
  );
export type SecretsCreateOrUpdateInput = typeof SecretsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type SecretsCreateOrUpdateOutput =
  typeof SecretsCreateOrUpdateOutput.Type;

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
);
export type SecretsGetInput = typeof SecretsGetInput.Type;

// Output Schema
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
});
export type SecretsGetOutput = typeof SecretsGetOutput.Type;

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
);
export type SecretsListInput = typeof SecretsListInput.Type;

// Output Schema
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
});
export type SecretsListOutput = typeof SecretsListOutput.Type;

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
);
export type SecretsUpdateInput = typeof SecretsUpdateInput.Type;

// Output Schema
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
});
export type SecretsUpdateOutput = typeof SecretsUpdateOutput.Type;

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
  );
export type VaultsCheckNameAvailabilityInput =
  typeof VaultsCheckNameAvailabilityInput.Type;

// Output Schema
export const VaultsCheckNameAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nameAvailable: Schema.optional(Schema.Boolean),
    reason: Schema.optional(
      Schema.Literals(["AccountNameInvalid", "AlreadyExists"]),
    ),
    message: Schema.optional(Schema.String),
  });
export type VaultsCheckNameAvailabilityOutput =
  typeof VaultsCheckNameAvailabilityOutput.Type;

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
  );
export type VaultsCreateOrUpdateInput = typeof VaultsCreateOrUpdateInput.Type;

// Output Schema
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
  });
export type VaultsCreateOrUpdateOutput = typeof VaultsCreateOrUpdateOutput.Type;

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
);
export type VaultsDeleteInput = typeof VaultsDeleteInput.Type;

// Output Schema
export const VaultsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VaultsDeleteOutput = typeof VaultsDeleteOutput.Type;

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
);
export type VaultsGetInput = typeof VaultsGetInput.Type;

// Output Schema
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
});
export type VaultsGetOutput = typeof VaultsGetOutput.Type;

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
);
export type VaultsGetDeletedInput = typeof VaultsGetDeletedInput.Type;

// Output Schema
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
);
export type VaultsGetDeletedOutput = typeof VaultsGetDeletedOutput.Type;

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
);
export type VaultsListInput = typeof VaultsListInput.Type;

// Output Schema
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
});
export type VaultsListOutput = typeof VaultsListOutput.Type;

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
  );
export type VaultsListByResourceGroupInput =
  typeof VaultsListByResourceGroupInput.Type;

// Output Schema
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
  });
export type VaultsListByResourceGroupOutput =
  typeof VaultsListByResourceGroupOutput.Type;

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
  );
export type VaultsListBySubscriptionInput =
  typeof VaultsListBySubscriptionInput.Type;

// Output Schema
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
  });
export type VaultsListBySubscriptionOutput =
  typeof VaultsListBySubscriptionOutput.Type;

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
);
export type VaultsListDeletedInput = typeof VaultsListDeletedInput.Type;

// Output Schema
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
  });
export type VaultsListDeletedOutput = typeof VaultsListDeletedOutput.Type;

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
  );
export type VaultsPurgeDeletedInput = typeof VaultsPurgeDeletedInput.Type;

// Output Schema
export const VaultsPurgeDeletedOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type VaultsPurgeDeletedOutput = typeof VaultsPurgeDeletedOutput.Type;

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
);
export type VaultsUpdateInput = typeof VaultsUpdateInput.Type;

// Output Schema
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
});
export type VaultsUpdateOutput = typeof VaultsUpdateOutput.Type;

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
  );
export type VaultsUpdateAccessPolicyInput =
  typeof VaultsUpdateAccessPolicyInput.Type;

// Output Schema
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
  });
export type VaultsUpdateAccessPolicyOutput =
  typeof VaultsUpdateAccessPolicyOutput.Type;

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
