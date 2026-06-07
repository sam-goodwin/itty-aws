/**
 * Azure Azurefleet API
 *
 * Generated from the Azure REST API specs.
 * DO NOT EDIT - regenerate with: bun run generate
 */
import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const FleetsCreateOrUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    fleetName: Schema.String.pipe(T.PathParam()),
    properties: Schema.optional(
      Schema.Struct({
        provisioningState: Schema.optional(
          Schema.Literals([
            "Succeeded",
            "Failed",
            "Canceled",
            "Creating",
            "Updating",
            "Deleting",
            "Migrating",
          ]),
        ),
        spotPriorityProfile: Schema.optional(
          Schema.Struct({
            capacity: Schema.optional(Schema.Number),
            minCapacity: Schema.optional(Schema.Number),
            maxPricePerVM: Schema.optional(Schema.Number),
            evictionPolicy: Schema.optional(
              Schema.Literals(["Delete", "Deallocate"]),
            ),
            allocationStrategy: Schema.optional(
              Schema.Literals([
                "PriceCapacityOptimized",
                "LowestPrice",
                "CapacityOptimized",
              ]),
            ),
            maintain: Schema.optional(Schema.Boolean),
          }),
        ),
        regularPriorityProfile: Schema.optional(
          Schema.Struct({
            capacity: Schema.optional(Schema.Number),
            minCapacity: Schema.optional(Schema.Number),
            allocationStrategy: Schema.optional(
              Schema.Literals(["LowestPrice", "Prioritized"]),
            ),
          }),
        ),
        vmSizesProfile: Schema.Array(
          Schema.Struct({
            name: Schema.String,
            rank: Schema.optional(Schema.Number),
          }),
        ),
        vmAttributes: Schema.optional(
          Schema.Struct({
            vCpuCount: Schema.Struct({
              min: Schema.optional(Schema.Number),
              max: Schema.optional(Schema.Number),
            }),
            memoryInGiB: Schema.Struct({
              min: Schema.optional(Schema.Number),
              max: Schema.optional(Schema.Number),
            }),
            memoryInGiBPerVCpu: Schema.optional(
              Schema.Struct({
                min: Schema.optional(Schema.Number),
                max: Schema.optional(Schema.Number),
              }),
            ),
            localStorageSupport: Schema.optional(
              Schema.Literals(["Excluded", "Included", "Required"]),
            ),
            localStorageInGiB: Schema.optional(
              Schema.Struct({
                min: Schema.optional(Schema.Number),
                max: Schema.optional(Schema.Number),
              }),
            ),
            localStorageDiskTypes: Schema.optional(
              Schema.Array(Schema.Literals(["HDD", "SSD"])),
            ),
            dataDiskCount: Schema.optional(
              Schema.Struct({
                min: Schema.optional(Schema.Number),
                max: Schema.optional(Schema.Number),
              }),
            ),
            networkInterfaceCount: Schema.optional(
              Schema.Struct({
                min: Schema.optional(Schema.Number),
                max: Schema.optional(Schema.Number),
              }),
            ),
            networkBandwidthInMbps: Schema.optional(
              Schema.Struct({
                min: Schema.optional(Schema.Number),
                max: Schema.optional(Schema.Number),
              }),
            ),
            rdmaSupport: Schema.optional(
              Schema.Literals(["Excluded", "Included", "Required"]),
            ),
            rdmaNetworkInterfaceCount: Schema.optional(
              Schema.Struct({
                min: Schema.optional(Schema.Number),
                max: Schema.optional(Schema.Number),
              }),
            ),
            acceleratorSupport: Schema.optional(
              Schema.Literals(["Excluded", "Included", "Required"]),
            ),
            acceleratorManufacturers: Schema.optional(
              Schema.Array(Schema.Literals(["AMD", "Nvidia", "Xilinx"])),
            ),
            acceleratorTypes: Schema.optional(
              Schema.Array(Schema.Literals(["GPU", "FPGA"])),
            ),
            acceleratorCount: Schema.optional(
              Schema.Struct({
                min: Schema.optional(Schema.Number),
                max: Schema.optional(Schema.Number),
              }),
            ),
            vmCategories: Schema.optional(
              Schema.Array(
                Schema.Literals([
                  "GeneralPurpose",
                  "ComputeOptimized",
                  "MemoryOptimized",
                  "StorageOptimized",
                  "GpuAccelerated",
                  "FpgaAccelerated",
                  "HighPerformanceCompute",
                ]),
              ),
            ),
            architectureTypes: Schema.optional(
              Schema.Array(Schema.Literals(["ARM64", "X64"])),
            ),
            cpuManufacturers: Schema.optional(
              Schema.Array(
                Schema.Literals(["Intel", "AMD", "Microsoft", "Ampere"]),
              ),
            ),
            burstableSupport: Schema.optional(
              Schema.Literals(["Excluded", "Included", "Required"]),
            ),
            excludedVMSizes: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        additionalLocationsProfile: Schema.optional(
          Schema.Struct({
            locationProfiles: Schema.Array(
              Schema.Struct({
                location: Schema.String,
                virtualMachineProfileOverride: Schema.optional(
                  Schema.Struct({
                    osProfile: Schema.optional(
                      Schema.Struct({
                        computerNamePrefix: Schema.optional(Schema.String),
                        adminUsername: Schema.optional(Schema.String),
                        adminPassword: Schema.optional(SensitiveString),
                        customData: Schema.optional(Schema.String),
                        windowsConfiguration: Schema.optional(
                          Schema.Struct({
                            provisionVMAgent: Schema.optional(Schema.Boolean),
                            enableAutomaticUpdates: Schema.optional(
                              Schema.Boolean,
                            ),
                            timeZone: Schema.optional(Schema.String),
                            additionalUnattendContent: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  passName: Schema.optional(
                                    Schema.Literals(["OobeSystem"]),
                                  ),
                                  componentName: Schema.optional(
                                    Schema.Literals([
                                      "Microsoft-Windows-Shell-Setup",
                                    ]),
                                  ),
                                  settingName: Schema.optional(
                                    Schema.Literals([
                                      "AutoLogon",
                                      "FirstLogonCommands",
                                    ]),
                                  ),
                                  content: Schema.optional(Schema.String),
                                }),
                              ),
                            ),
                            patchSettings: Schema.optional(
                              Schema.Struct({
                                patchMode: Schema.optional(
                                  Schema.Literals([
                                    "Manual",
                                    "AutomaticByOS",
                                    "AutomaticByPlatform",
                                  ]),
                                ),
                                enableHotpatching: Schema.optional(
                                  Schema.Boolean,
                                ),
                                assessmentMode: Schema.optional(
                                  Schema.Literals([
                                    "ImageDefault",
                                    "AutomaticByPlatform",
                                  ]),
                                ),
                                automaticByPlatformSettings: Schema.optional(
                                  Schema.Struct({
                                    rebootSetting: Schema.optional(
                                      Schema.Literals([
                                        "Unknown",
                                        "IfRequired",
                                        "Never",
                                        "Always",
                                      ]),
                                    ),
                                    bypassPlatformSafetyChecksOnUserSchedule:
                                      Schema.optional(Schema.Boolean),
                                  }),
                                ),
                              }),
                            ),
                            winRM: Schema.optional(
                              Schema.Struct({
                                listeners: Schema.optional(
                                  Schema.Array(
                                    Schema.Struct({
                                      protocol: Schema.optional(
                                        Schema.Literals(["Http", "Https"]),
                                      ),
                                      certificateUrl: Schema.optional(
                                        Schema.String,
                                      ),
                                    }),
                                  ),
                                ),
                              }),
                            ),
                            enableVMAgentPlatformUpdates: Schema.optional(
                              Schema.Boolean,
                            ),
                          }),
                        ),
                        linuxConfiguration: Schema.optional(
                          Schema.Struct({
                            disablePasswordAuthentication: Schema.optional(
                              Schema.Boolean,
                            ),
                            ssh: Schema.optional(
                              Schema.Struct({
                                publicKeys: Schema.optional(
                                  Schema.Array(
                                    Schema.Struct({
                                      path: Schema.optional(Schema.String),
                                      keyData: Schema.optional(Schema.String),
                                    }),
                                  ),
                                ),
                              }),
                            ),
                            provisionVMAgent: Schema.optional(Schema.Boolean),
                            patchSettings: Schema.optional(
                              Schema.Struct({
                                patchMode: Schema.optional(
                                  Schema.Literals([
                                    "ImageDefault",
                                    "AutomaticByPlatform",
                                  ]),
                                ),
                                assessmentMode: Schema.optional(
                                  Schema.Literals([
                                    "ImageDefault",
                                    "AutomaticByPlatform",
                                  ]),
                                ),
                                automaticByPlatformSettings: Schema.optional(
                                  Schema.Struct({
                                    rebootSetting: Schema.optional(
                                      Schema.Literals([
                                        "Unknown",
                                        "IfRequired",
                                        "Never",
                                        "Always",
                                      ]),
                                    ),
                                    bypassPlatformSafetyChecksOnUserSchedule:
                                      Schema.optional(Schema.Boolean),
                                  }),
                                ),
                              }),
                            ),
                            enableVMAgentPlatformUpdates: Schema.optional(
                              Schema.Boolean,
                            ),
                          }),
                        ),
                        secrets: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              sourceVault: Schema.optional(
                                Schema.Struct({
                                  id: Schema.optional(Schema.String),
                                }),
                              ),
                              vaultCertificates: Schema.optional(
                                Schema.Array(
                                  Schema.Struct({
                                    certificateUrl: Schema.optional(
                                      Schema.String,
                                    ),
                                    certificateStore: Schema.optional(
                                      Schema.String,
                                    ),
                                  }),
                                ),
                              ),
                            }),
                          ),
                        ),
                        allowExtensionOperations: Schema.optional(
                          Schema.Boolean,
                        ),
                        requireGuestProvisionSignal: Schema.optional(
                          Schema.Boolean,
                        ),
                      }),
                    ),
                    storageProfile: Schema.optional(
                      Schema.Struct({
                        imageReference: Schema.optional(
                          Schema.Struct({
                            id: Schema.optional(Schema.String),
                            publisher: Schema.optional(Schema.String),
                            offer: Schema.optional(Schema.String),
                            sku: Schema.optional(Schema.String),
                            version: Schema.optional(Schema.String),
                            exactVersion: Schema.optional(Schema.String),
                            sharedGalleryImageId: Schema.optional(
                              Schema.String,
                            ),
                            communityGalleryImageId: Schema.optional(
                              Schema.String,
                            ),
                          }),
                        ),
                        osDisk: Schema.optional(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            caching: Schema.optional(
                              Schema.Literals([
                                "None",
                                "ReadOnly",
                                "ReadWrite",
                              ]),
                            ),
                            writeAcceleratorEnabled: Schema.optional(
                              Schema.Boolean,
                            ),
                            createOption: Schema.Literals([
                              "FromImage",
                              "Empty",
                              "Attach",
                              "Copy",
                              "Restore",
                            ]),
                            diffDiskSettings: Schema.optional(
                              Schema.Struct({
                                option: Schema.optional(
                                  Schema.Literals(["Local"]),
                                ),
                                placement: Schema.optional(
                                  Schema.Literals([
                                    "CacheDisk",
                                    "ResourceDisk",
                                    "NvmeDisk",
                                  ]),
                                ),
                              }),
                            ),
                            diskSizeGB: Schema.optional(Schema.Number),
                            osType: Schema.optional(
                              Schema.Literals(["Windows", "Linux"]),
                            ),
                            image: Schema.optional(
                              Schema.Struct({
                                uri: Schema.optional(Schema.String),
                              }),
                            ),
                            vhdContainers: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                            managedDisk: Schema.optional(
                              Schema.Struct({
                                storageAccountType: Schema.optional(
                                  Schema.Literals([
                                    "Standard_LRS",
                                    "Premium_LRS",
                                    "StandardSSD_LRS",
                                    "UltraSSD_LRS",
                                    "Premium_ZRS",
                                    "StandardSSD_ZRS",
                                    "PremiumV2_LRS",
                                  ]),
                                ),
                                diskEncryptionSet: Schema.optional(
                                  Schema.Struct({
                                    id: Schema.optional(Schema.String),
                                  }),
                                ),
                                securityProfile: Schema.optional(
                                  Schema.Struct({
                                    securityEncryptionType: Schema.optional(
                                      Schema.Literals([
                                        "VMGuestStateOnly",
                                        "DiskWithVMGuestState",
                                        "NonPersistedTPM",
                                      ]),
                                    ),
                                    diskEncryptionSet: Schema.optional(
                                      Schema.Struct({
                                        id: Schema.optional(Schema.String),
                                      }),
                                    ),
                                  }),
                                ),
                              }),
                            ),
                            deleteOption: Schema.optional(
                              Schema.Literals(["Delete", "Detach"]),
                            ),
                          }),
                        ),
                        dataDisks: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.optional(Schema.String),
                              lun: Schema.Number,
                              caching: Schema.optional(
                                Schema.Literals([
                                  "None",
                                  "ReadOnly",
                                  "ReadWrite",
                                ]),
                              ),
                              writeAcceleratorEnabled: Schema.optional(
                                Schema.Boolean,
                              ),
                              createOption: Schema.Literals([
                                "FromImage",
                                "Empty",
                                "Attach",
                                "Copy",
                                "Restore",
                              ]),
                              diskSizeGB: Schema.optional(Schema.Number),
                              managedDisk: Schema.optional(
                                Schema.Struct({
                                  storageAccountType: Schema.optional(
                                    Schema.Literals([
                                      "Standard_LRS",
                                      "Premium_LRS",
                                      "StandardSSD_LRS",
                                      "UltraSSD_LRS",
                                      "Premium_ZRS",
                                      "StandardSSD_ZRS",
                                      "PremiumV2_LRS",
                                    ]),
                                  ),
                                  diskEncryptionSet: Schema.optional(
                                    Schema.Struct({
                                      id: Schema.optional(Schema.String),
                                    }),
                                  ),
                                  securityProfile: Schema.optional(
                                    Schema.Struct({
                                      securityEncryptionType: Schema.optional(
                                        Schema.Literals([
                                          "VMGuestStateOnly",
                                          "DiskWithVMGuestState",
                                          "NonPersistedTPM",
                                        ]),
                                      ),
                                      diskEncryptionSet: Schema.optional(
                                        Schema.Struct({
                                          id: Schema.optional(Schema.String),
                                        }),
                                      ),
                                    }),
                                  ),
                                }),
                              ),
                              diskIOPSReadWrite: Schema.optional(Schema.Number),
                              diskMBpsReadWrite: Schema.optional(Schema.Number),
                              deleteOption: Schema.optional(
                                Schema.Literals(["Delete", "Detach"]),
                              ),
                            }),
                          ),
                        ),
                        diskControllerType: Schema.optional(
                          Schema.Literals(["SCSI", "NVMe"]),
                        ),
                      }),
                    ),
                    networkProfile: Schema.optional(
                      Schema.Struct({
                        healthProbe: Schema.optional(
                          Schema.Struct({
                            id: Schema.optional(Schema.String),
                          }),
                        ),
                        networkInterfaceConfigurations: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              name: Schema.String,
                              properties: Schema.optional(
                                Schema.Struct({
                                  primary: Schema.optional(Schema.Boolean),
                                  enableAcceleratedNetworking: Schema.optional(
                                    Schema.Boolean,
                                  ),
                                  disableTcpStateTracking: Schema.optional(
                                    Schema.Boolean,
                                  ),
                                  enableFpga: Schema.optional(Schema.Boolean),
                                  networkSecurityGroup: Schema.optional(
                                    Schema.Struct({
                                      id: Schema.optional(Schema.String),
                                    }),
                                  ),
                                  dnsSettings: Schema.optional(
                                    Schema.Struct({
                                      dnsServers: Schema.optional(
                                        Schema.Array(Schema.String),
                                      ),
                                    }),
                                  ),
                                  ipConfigurations: Schema.Array(
                                    Schema.Struct({
                                      name: Schema.String,
                                      properties: Schema.optional(
                                        Schema.Struct({
                                          subnet: Schema.optional(
                                            Schema.Struct({
                                              id: Schema.optional(
                                                Schema.String,
                                              ),
                                            }),
                                          ),
                                          primary: Schema.optional(
                                            Schema.Boolean,
                                          ),
                                          publicIPAddressConfiguration:
                                            Schema.optional(
                                              Schema.Struct({
                                                name: Schema.String,
                                                properties: Schema.optional(
                                                  Schema.Struct({
                                                    idleTimeoutInMinutes:
                                                      Schema.optional(
                                                        Schema.Number,
                                                      ),
                                                    dnsSettings:
                                                      Schema.optional(
                                                        Schema.Struct({
                                                          domainNameLabel:
                                                            Schema.String,
                                                          domainNameLabelScope:
                                                            Schema.optional(
                                                              Schema.Literals([
                                                                "TenantReuse",
                                                                "SubscriptionReuse",
                                                                "ResourceGroupReuse",
                                                                "NoReuse",
                                                              ]),
                                                            ),
                                                        }),
                                                      ),
                                                    ipTags: Schema.optional(
                                                      Schema.Array(
                                                        Schema.Struct({
                                                          ipTagType:
                                                            Schema.optional(
                                                              Schema.String,
                                                            ),
                                                          tag: Schema.optional(
                                                            Schema.String,
                                                          ),
                                                        }),
                                                      ),
                                                    ),
                                                    publicIPPrefix:
                                                      Schema.optional(
                                                        Schema.Struct({
                                                          id: Schema.optional(
                                                            Schema.String,
                                                          ),
                                                        }),
                                                      ),
                                                    publicIPAddressVersion:
                                                      Schema.optional(
                                                        Schema.Literals([
                                                          "IPv4",
                                                          "IPv6",
                                                        ]),
                                                      ),
                                                    deleteOption:
                                                      Schema.optional(
                                                        Schema.Literals([
                                                          "Delete",
                                                          "Detach",
                                                        ]),
                                                      ),
                                                  }),
                                                ),
                                                sku: Schema.optional(
                                                  Schema.Struct({
                                                    name: Schema.optional(
                                                      Schema.Literals([
                                                        "Basic",
                                                        "Standard",
                                                      ]),
                                                    ),
                                                    tier: Schema.optional(
                                                      Schema.Literals([
                                                        "Regional",
                                                        "Global",
                                                      ]),
                                                    ),
                                                  }),
                                                ),
                                              }),
                                            ),
                                          privateIPAddressVersion:
                                            Schema.optional(
                                              Schema.Literals(["IPv4", "IPv6"]),
                                            ),
                                          applicationGatewayBackendAddressPools:
                                            Schema.optional(
                                              Schema.Array(
                                                Schema.Struct({
                                                  id: Schema.optional(
                                                    Schema.String,
                                                  ),
                                                }),
                                              ),
                                            ),
                                          applicationSecurityGroups:
                                            Schema.optional(
                                              Schema.Array(
                                                Schema.Struct({
                                                  id: Schema.optional(
                                                    Schema.String,
                                                  ),
                                                }),
                                              ),
                                            ),
                                          loadBalancerBackendAddressPools:
                                            Schema.optional(
                                              Schema.Array(
                                                Schema.Struct({
                                                  id: Schema.optional(
                                                    Schema.String,
                                                  ),
                                                }),
                                              ),
                                            ),
                                          loadBalancerInboundNatPools:
                                            Schema.optional(
                                              Schema.Array(
                                                Schema.Struct({
                                                  id: Schema.optional(
                                                    Schema.String,
                                                  ),
                                                }),
                                              ),
                                            ),
                                        }),
                                      ),
                                    }),
                                  ),
                                  enableIPForwarding: Schema.optional(
                                    Schema.Boolean,
                                  ),
                                  deleteOption: Schema.optional(
                                    Schema.Literals(["Delete", "Detach"]),
                                  ),
                                  auxiliaryMode: Schema.optional(
                                    Schema.Literals([
                                      "None",
                                      "AcceleratedConnections",
                                      "Floating",
                                    ]),
                                  ),
                                  auxiliarySku: Schema.optional(
                                    Schema.Literals([
                                      "None",
                                      "A1",
                                      "A2",
                                      "A4",
                                      "A8",
                                    ]),
                                  ),
                                }),
                              ),
                            }),
                          ),
                        ),
                        networkApiVersion: Schema.optional(
                          Schema.Literals(["2020-11-01"]),
                        ),
                      }),
                    ),
                    securityProfile: Schema.optional(
                      Schema.Struct({
                        uefiSettings: Schema.optional(
                          Schema.Struct({
                            secureBootEnabled: Schema.optional(Schema.Boolean),
                            vTpmEnabled: Schema.optional(Schema.Boolean),
                          }),
                        ),
                        encryptionAtHost: Schema.optional(Schema.Boolean),
                        securityType: Schema.optional(
                          Schema.Literals(["TrustedLaunch", "ConfidentialVM"]),
                        ),
                        encryptionIdentity: Schema.optional(
                          Schema.Struct({
                            userAssignedIdentityResourceId: Schema.optional(
                              Schema.String,
                            ),
                          }),
                        ),
                        proxyAgentSettings: Schema.optional(
                          Schema.Struct({
                            enabled: Schema.optional(Schema.Boolean),
                            mode: Schema.optional(
                              Schema.Literals(["Audit", "Enforce"]),
                            ),
                            keyIncarnationId: Schema.optional(Schema.Number),
                          }),
                        ),
                      }),
                    ),
                    diagnosticsProfile: Schema.optional(
                      Schema.Struct({
                        bootDiagnostics: Schema.optional(
                          Schema.Struct({
                            enabled: Schema.optional(Schema.Boolean),
                            storageUri: Schema.optional(Schema.String),
                          }),
                        ),
                      }),
                    ),
                    extensionProfile: Schema.optional(
                      Schema.Struct({
                        extensions: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              id: Schema.optional(Schema.String),
                              name: Schema.optional(Schema.String),
                              type: Schema.optional(Schema.String),
                              properties: Schema.optional(
                                Schema.Struct({
                                  forceUpdateTag: Schema.optional(
                                    Schema.String,
                                  ),
                                  publisher: Schema.optional(Schema.String),
                                  type: Schema.optional(Schema.String),
                                  typeHandlerVersion: Schema.optional(
                                    Schema.String,
                                  ),
                                  autoUpgradeMinorVersion: Schema.optional(
                                    Schema.Boolean,
                                  ),
                                  enableAutomaticUpgrade: Schema.optional(
                                    Schema.Boolean,
                                  ),
                                  settings: Schema.optional(
                                    Schema.Record(
                                      Schema.String,
                                      Schema.Unknown,
                                    ),
                                  ),
                                  protectedSettings: Schema.optional(
                                    Schema.Record(
                                      Schema.String,
                                      Schema.Unknown,
                                    ),
                                  ),
                                  provisioningState: Schema.optional(
                                    Schema.String,
                                  ),
                                  provisionAfterExtensions: Schema.optional(
                                    Schema.Array(Schema.String),
                                  ),
                                  suppressFailures: Schema.optional(
                                    Schema.Boolean,
                                  ),
                                  protectedSettingsFromKeyVault:
                                    Schema.optional(
                                      Schema.Struct({
                                        secretUrl: Schema.String,
                                        sourceVault: Schema.Struct({
                                          id: Schema.optional(Schema.String),
                                        }),
                                      }),
                                    ),
                                }),
                              ),
                            }),
                          ),
                        ),
                        extensionsTimeBudget: Schema.optional(Schema.String),
                      }),
                    ),
                    licenseType: Schema.optional(Schema.String),
                    scheduledEventsProfile: Schema.optional(
                      Schema.Struct({
                        terminateNotificationProfile: Schema.optional(
                          Schema.Struct({
                            notBeforeTimeout: Schema.optional(Schema.String),
                            enable: Schema.optional(Schema.Boolean),
                          }),
                        ),
                        osImageNotificationProfile: Schema.optional(
                          Schema.Struct({
                            notBeforeTimeout: Schema.optional(Schema.String),
                            enable: Schema.optional(Schema.Boolean),
                          }),
                        ),
                      }),
                    ),
                    userData: Schema.optional(Schema.String),
                    capacityReservation: Schema.optional(
                      Schema.Struct({
                        capacityReservationGroup: Schema.optional(
                          Schema.Struct({
                            id: Schema.optional(Schema.String),
                          }),
                        ),
                      }),
                    ),
                    applicationProfile: Schema.optional(
                      Schema.Struct({
                        galleryApplications: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              tags: Schema.optional(Schema.String),
                              order: Schema.optional(Schema.Number),
                              packageReferenceId: Schema.String,
                              configurationReference: Schema.optional(
                                Schema.String,
                              ),
                              treatFailureAsDeploymentFailure: Schema.optional(
                                Schema.Boolean,
                              ),
                              enableAutomaticUpgrade: Schema.optional(
                                Schema.Boolean,
                              ),
                            }),
                          ),
                        ),
                      }),
                    ),
                    hardwareProfile: Schema.optional(
                      Schema.Struct({
                        vmSizeProperties: Schema.optional(
                          Schema.Struct({
                            vCPUsAvailable: Schema.optional(Schema.Number),
                            vCPUsPerCore: Schema.optional(Schema.Number),
                          }),
                        ),
                      }),
                    ),
                    serviceArtifactReference: Schema.optional(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                      }),
                    ),
                    securityPostureReference: Schema.optional(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                        excludeExtensions: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        isOverridable: Schema.optional(Schema.Boolean),
                      }),
                    ),
                    timeCreated: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          }),
        ),
        computeProfile: Schema.Struct({
          baseVirtualMachineProfile: Schema.Struct({
            osProfile: Schema.optional(
              Schema.Struct({
                computerNamePrefix: Schema.optional(Schema.String),
                adminUsername: Schema.optional(Schema.String),
                adminPassword: Schema.optional(SensitiveString),
                customData: Schema.optional(Schema.String),
                windowsConfiguration: Schema.optional(
                  Schema.Struct({
                    provisionVMAgent: Schema.optional(Schema.Boolean),
                    enableAutomaticUpdates: Schema.optional(Schema.Boolean),
                    timeZone: Schema.optional(Schema.String),
                    additionalUnattendContent: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          passName: Schema.optional(
                            Schema.Literals(["OobeSystem"]),
                          ),
                          componentName: Schema.optional(
                            Schema.Literals(["Microsoft-Windows-Shell-Setup"]),
                          ),
                          settingName: Schema.optional(
                            Schema.Literals([
                              "AutoLogon",
                              "FirstLogonCommands",
                            ]),
                          ),
                          content: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    patchSettings: Schema.optional(
                      Schema.Struct({
                        patchMode: Schema.optional(
                          Schema.Literals([
                            "Manual",
                            "AutomaticByOS",
                            "AutomaticByPlatform",
                          ]),
                        ),
                        enableHotpatching: Schema.optional(Schema.Boolean),
                        assessmentMode: Schema.optional(
                          Schema.Literals([
                            "ImageDefault",
                            "AutomaticByPlatform",
                          ]),
                        ),
                        automaticByPlatformSettings: Schema.optional(
                          Schema.Struct({
                            rebootSetting: Schema.optional(
                              Schema.Literals([
                                "Unknown",
                                "IfRequired",
                                "Never",
                                "Always",
                              ]),
                            ),
                            bypassPlatformSafetyChecksOnUserSchedule:
                              Schema.optional(Schema.Boolean),
                          }),
                        ),
                      }),
                    ),
                    winRM: Schema.optional(
                      Schema.Struct({
                        listeners: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              protocol: Schema.optional(
                                Schema.Literals(["Http", "Https"]),
                              ),
                              certificateUrl: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                      }),
                    ),
                    enableVMAgentPlatformUpdates: Schema.optional(
                      Schema.Boolean,
                    ),
                  }),
                ),
                linuxConfiguration: Schema.optional(
                  Schema.Struct({
                    disablePasswordAuthentication: Schema.optional(
                      Schema.Boolean,
                    ),
                    ssh: Schema.optional(
                      Schema.Struct({
                        publicKeys: Schema.optional(
                          Schema.Array(
                            Schema.Struct({
                              path: Schema.optional(Schema.String),
                              keyData: Schema.optional(Schema.String),
                            }),
                          ),
                        ),
                      }),
                    ),
                    provisionVMAgent: Schema.optional(Schema.Boolean),
                    patchSettings: Schema.optional(
                      Schema.Struct({
                        patchMode: Schema.optional(
                          Schema.Literals([
                            "ImageDefault",
                            "AutomaticByPlatform",
                          ]),
                        ),
                        assessmentMode: Schema.optional(
                          Schema.Literals([
                            "ImageDefault",
                            "AutomaticByPlatform",
                          ]),
                        ),
                        automaticByPlatformSettings: Schema.optional(
                          Schema.Struct({
                            rebootSetting: Schema.optional(
                              Schema.Literals([
                                "Unknown",
                                "IfRequired",
                                "Never",
                                "Always",
                              ]),
                            ),
                            bypassPlatformSafetyChecksOnUserSchedule:
                              Schema.optional(Schema.Boolean),
                          }),
                        ),
                      }),
                    ),
                    enableVMAgentPlatformUpdates: Schema.optional(
                      Schema.Boolean,
                    ),
                  }),
                ),
                secrets: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      sourceVault: Schema.optional(
                        Schema.Struct({
                          id: Schema.optional(Schema.String),
                        }),
                      ),
                      vaultCertificates: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            certificateUrl: Schema.optional(Schema.String),
                            certificateStore: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
                allowExtensionOperations: Schema.optional(Schema.Boolean),
                requireGuestProvisionSignal: Schema.optional(Schema.Boolean),
              }),
            ),
            storageProfile: Schema.optional(
              Schema.Struct({
                imageReference: Schema.optional(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    publisher: Schema.optional(Schema.String),
                    offer: Schema.optional(Schema.String),
                    sku: Schema.optional(Schema.String),
                    version: Schema.optional(Schema.String),
                    exactVersion: Schema.optional(Schema.String),
                    sharedGalleryImageId: Schema.optional(Schema.String),
                    communityGalleryImageId: Schema.optional(Schema.String),
                  }),
                ),
                osDisk: Schema.optional(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    caching: Schema.optional(
                      Schema.Literals(["None", "ReadOnly", "ReadWrite"]),
                    ),
                    writeAcceleratorEnabled: Schema.optional(Schema.Boolean),
                    createOption: Schema.Literals([
                      "FromImage",
                      "Empty",
                      "Attach",
                      "Copy",
                      "Restore",
                    ]),
                    diffDiskSettings: Schema.optional(
                      Schema.Struct({
                        option: Schema.optional(Schema.Literals(["Local"])),
                        placement: Schema.optional(
                          Schema.Literals([
                            "CacheDisk",
                            "ResourceDisk",
                            "NvmeDisk",
                          ]),
                        ),
                      }),
                    ),
                    diskSizeGB: Schema.optional(Schema.Number),
                    osType: Schema.optional(
                      Schema.Literals(["Windows", "Linux"]),
                    ),
                    image: Schema.optional(
                      Schema.Struct({
                        uri: Schema.optional(Schema.String),
                      }),
                    ),
                    vhdContainers: Schema.optional(Schema.Array(Schema.String)),
                    managedDisk: Schema.optional(
                      Schema.Struct({
                        storageAccountType: Schema.optional(
                          Schema.Literals([
                            "Standard_LRS",
                            "Premium_LRS",
                            "StandardSSD_LRS",
                            "UltraSSD_LRS",
                            "Premium_ZRS",
                            "StandardSSD_ZRS",
                            "PremiumV2_LRS",
                          ]),
                        ),
                        diskEncryptionSet: Schema.optional(
                          Schema.Struct({
                            id: Schema.optional(Schema.String),
                          }),
                        ),
                        securityProfile: Schema.optional(
                          Schema.Struct({
                            securityEncryptionType: Schema.optional(
                              Schema.Literals([
                                "VMGuestStateOnly",
                                "DiskWithVMGuestState",
                                "NonPersistedTPM",
                              ]),
                            ),
                            diskEncryptionSet: Schema.optional(
                              Schema.Struct({
                                id: Schema.optional(Schema.String),
                              }),
                            ),
                          }),
                        ),
                      }),
                    ),
                    deleteOption: Schema.optional(
                      Schema.Literals(["Delete", "Detach"]),
                    ),
                  }),
                ),
                dataDisks: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.optional(Schema.String),
                      lun: Schema.Number,
                      caching: Schema.optional(
                        Schema.Literals(["None", "ReadOnly", "ReadWrite"]),
                      ),
                      writeAcceleratorEnabled: Schema.optional(Schema.Boolean),
                      createOption: Schema.Literals([
                        "FromImage",
                        "Empty",
                        "Attach",
                        "Copy",
                        "Restore",
                      ]),
                      diskSizeGB: Schema.optional(Schema.Number),
                      managedDisk: Schema.optional(
                        Schema.Struct({
                          storageAccountType: Schema.optional(
                            Schema.Literals([
                              "Standard_LRS",
                              "Premium_LRS",
                              "StandardSSD_LRS",
                              "UltraSSD_LRS",
                              "Premium_ZRS",
                              "StandardSSD_ZRS",
                              "PremiumV2_LRS",
                            ]),
                          ),
                          diskEncryptionSet: Schema.optional(
                            Schema.Struct({
                              id: Schema.optional(Schema.String),
                            }),
                          ),
                          securityProfile: Schema.optional(
                            Schema.Struct({
                              securityEncryptionType: Schema.optional(
                                Schema.Literals([
                                  "VMGuestStateOnly",
                                  "DiskWithVMGuestState",
                                  "NonPersistedTPM",
                                ]),
                              ),
                              diskEncryptionSet: Schema.optional(
                                Schema.Struct({
                                  id: Schema.optional(Schema.String),
                                }),
                              ),
                            }),
                          ),
                        }),
                      ),
                      diskIOPSReadWrite: Schema.optional(Schema.Number),
                      diskMBpsReadWrite: Schema.optional(Schema.Number),
                      deleteOption: Schema.optional(
                        Schema.Literals(["Delete", "Detach"]),
                      ),
                    }),
                  ),
                ),
                diskControllerType: Schema.optional(
                  Schema.Literals(["SCSI", "NVMe"]),
                ),
              }),
            ),
            networkProfile: Schema.optional(
              Schema.Struct({
                healthProbe: Schema.optional(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                  }),
                ),
                networkInterfaceConfigurations: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      name: Schema.String,
                      properties: Schema.optional(
                        Schema.Struct({
                          primary: Schema.optional(Schema.Boolean),
                          enableAcceleratedNetworking: Schema.optional(
                            Schema.Boolean,
                          ),
                          disableTcpStateTracking: Schema.optional(
                            Schema.Boolean,
                          ),
                          enableFpga: Schema.optional(Schema.Boolean),
                          networkSecurityGroup: Schema.optional(
                            Schema.Struct({
                              id: Schema.optional(Schema.String),
                            }),
                          ),
                          dnsSettings: Schema.optional(
                            Schema.Struct({
                              dnsServers: Schema.optional(
                                Schema.Array(Schema.String),
                              ),
                            }),
                          ),
                          ipConfigurations: Schema.Array(
                            Schema.Struct({
                              name: Schema.String,
                              properties: Schema.optional(
                                Schema.Struct({
                                  subnet: Schema.optional(
                                    Schema.Struct({
                                      id: Schema.optional(Schema.String),
                                    }),
                                  ),
                                  primary: Schema.optional(Schema.Boolean),
                                  publicIPAddressConfiguration: Schema.optional(
                                    Schema.Struct({
                                      name: Schema.String,
                                      properties: Schema.optional(
                                        Schema.Struct({
                                          idleTimeoutInMinutes: Schema.optional(
                                            Schema.Number,
                                          ),
                                          dnsSettings: Schema.optional(
                                            Schema.Struct({
                                              domainNameLabel: Schema.String,
                                              domainNameLabelScope:
                                                Schema.optional(
                                                  Schema.Literals([
                                                    "TenantReuse",
                                                    "SubscriptionReuse",
                                                    "ResourceGroupReuse",
                                                    "NoReuse",
                                                  ]),
                                                ),
                                            }),
                                          ),
                                          ipTags: Schema.optional(
                                            Schema.Array(
                                              Schema.Struct({
                                                ipTagType: Schema.optional(
                                                  Schema.String,
                                                ),
                                                tag: Schema.optional(
                                                  Schema.String,
                                                ),
                                              }),
                                            ),
                                          ),
                                          publicIPPrefix: Schema.optional(
                                            Schema.Struct({
                                              id: Schema.optional(
                                                Schema.String,
                                              ),
                                            }),
                                          ),
                                          publicIPAddressVersion:
                                            Schema.optional(
                                              Schema.Literals(["IPv4", "IPv6"]),
                                            ),
                                          deleteOption: Schema.optional(
                                            Schema.Literals([
                                              "Delete",
                                              "Detach",
                                            ]),
                                          ),
                                        }),
                                      ),
                                      sku: Schema.optional(
                                        Schema.Struct({
                                          name: Schema.optional(
                                            Schema.Literals([
                                              "Basic",
                                              "Standard",
                                            ]),
                                          ),
                                          tier: Schema.optional(
                                            Schema.Literals([
                                              "Regional",
                                              "Global",
                                            ]),
                                          ),
                                        }),
                                      ),
                                    }),
                                  ),
                                  privateIPAddressVersion: Schema.optional(
                                    Schema.Literals(["IPv4", "IPv6"]),
                                  ),
                                  applicationGatewayBackendAddressPools:
                                    Schema.optional(
                                      Schema.Array(
                                        Schema.Struct({
                                          id: Schema.optional(Schema.String),
                                        }),
                                      ),
                                    ),
                                  applicationSecurityGroups: Schema.optional(
                                    Schema.Array(
                                      Schema.Struct({
                                        id: Schema.optional(Schema.String),
                                      }),
                                    ),
                                  ),
                                  loadBalancerBackendAddressPools:
                                    Schema.optional(
                                      Schema.Array(
                                        Schema.Struct({
                                          id: Schema.optional(Schema.String),
                                        }),
                                      ),
                                    ),
                                  loadBalancerInboundNatPools: Schema.optional(
                                    Schema.Array(
                                      Schema.Struct({
                                        id: Schema.optional(Schema.String),
                                      }),
                                    ),
                                  ),
                                }),
                              ),
                            }),
                          ),
                          enableIPForwarding: Schema.optional(Schema.Boolean),
                          deleteOption: Schema.optional(
                            Schema.Literals(["Delete", "Detach"]),
                          ),
                          auxiliaryMode: Schema.optional(
                            Schema.Literals([
                              "None",
                              "AcceleratedConnections",
                              "Floating",
                            ]),
                          ),
                          auxiliarySku: Schema.optional(
                            Schema.Literals(["None", "A1", "A2", "A4", "A8"]),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
                networkApiVersion: Schema.optional(
                  Schema.Literals(["2020-11-01"]),
                ),
              }),
            ),
            securityProfile: Schema.optional(
              Schema.Struct({
                uefiSettings: Schema.optional(
                  Schema.Struct({
                    secureBootEnabled: Schema.optional(Schema.Boolean),
                    vTpmEnabled: Schema.optional(Schema.Boolean),
                  }),
                ),
                encryptionAtHost: Schema.optional(Schema.Boolean),
                securityType: Schema.optional(
                  Schema.Literals(["TrustedLaunch", "ConfidentialVM"]),
                ),
                encryptionIdentity: Schema.optional(
                  Schema.Struct({
                    userAssignedIdentityResourceId: Schema.optional(
                      Schema.String,
                    ),
                  }),
                ),
                proxyAgentSettings: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                    mode: Schema.optional(
                      Schema.Literals(["Audit", "Enforce"]),
                    ),
                    keyIncarnationId: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
            diagnosticsProfile: Schema.optional(
              Schema.Struct({
                bootDiagnostics: Schema.optional(
                  Schema.Struct({
                    enabled: Schema.optional(Schema.Boolean),
                    storageUri: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            extensionProfile: Schema.optional(
              Schema.Struct({
                extensions: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                      name: Schema.optional(Schema.String),
                      type: Schema.optional(Schema.String),
                      properties: Schema.optional(
                        Schema.Struct({
                          forceUpdateTag: Schema.optional(Schema.String),
                          publisher: Schema.optional(Schema.String),
                          type: Schema.optional(Schema.String),
                          typeHandlerVersion: Schema.optional(Schema.String),
                          autoUpgradeMinorVersion: Schema.optional(
                            Schema.Boolean,
                          ),
                          enableAutomaticUpgrade: Schema.optional(
                            Schema.Boolean,
                          ),
                          settings: Schema.optional(
                            Schema.Record(Schema.String, Schema.Unknown),
                          ),
                          protectedSettings: Schema.optional(
                            Schema.Record(Schema.String, Schema.Unknown),
                          ),
                          provisioningState: Schema.optional(Schema.String),
                          provisionAfterExtensions: Schema.optional(
                            Schema.Array(Schema.String),
                          ),
                          suppressFailures: Schema.optional(Schema.Boolean),
                          protectedSettingsFromKeyVault: Schema.optional(
                            Schema.Struct({
                              secretUrl: Schema.String,
                              sourceVault: Schema.Struct({
                                id: Schema.optional(Schema.String),
                              }),
                            }),
                          ),
                        }),
                      ),
                    }),
                  ),
                ),
                extensionsTimeBudget: Schema.optional(Schema.String),
              }),
            ),
            licenseType: Schema.optional(Schema.String),
            scheduledEventsProfile: Schema.optional(
              Schema.Struct({
                terminateNotificationProfile: Schema.optional(
                  Schema.Struct({
                    notBeforeTimeout: Schema.optional(Schema.String),
                    enable: Schema.optional(Schema.Boolean),
                  }),
                ),
                osImageNotificationProfile: Schema.optional(
                  Schema.Struct({
                    notBeforeTimeout: Schema.optional(Schema.String),
                    enable: Schema.optional(Schema.Boolean),
                  }),
                ),
              }),
            ),
            userData: Schema.optional(Schema.String),
            capacityReservation: Schema.optional(
              Schema.Struct({
                capacityReservationGroup: Schema.optional(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
            applicationProfile: Schema.optional(
              Schema.Struct({
                galleryApplications: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      tags: Schema.optional(Schema.String),
                      order: Schema.optional(Schema.Number),
                      packageReferenceId: Schema.String,
                      configurationReference: Schema.optional(Schema.String),
                      treatFailureAsDeploymentFailure: Schema.optional(
                        Schema.Boolean,
                      ),
                      enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
                    }),
                  ),
                ),
              }),
            ),
            hardwareProfile: Schema.optional(
              Schema.Struct({
                vmSizeProperties: Schema.optional(
                  Schema.Struct({
                    vCPUsAvailable: Schema.optional(Schema.Number),
                    vCPUsPerCore: Schema.optional(Schema.Number),
                  }),
                ),
              }),
            ),
            serviceArtifactReference: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
              }),
            ),
            securityPostureReference: Schema.optional(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                excludeExtensions: Schema.optional(Schema.Array(Schema.String)),
                isOverridable: Schema.optional(Schema.Boolean),
              }),
            ),
            timeCreated: Schema.optional(Schema.String),
          }),
          computeApiVersion: Schema.optional(Schema.String),
          platformFaultDomainCount: Schema.optional(Schema.Number),
          additionalVirtualMachineCapabilities: Schema.optional(
            Schema.Struct({
              ultraSSDEnabled: Schema.optional(Schema.Boolean),
              hibernationEnabled: Schema.optional(Schema.Boolean),
            }),
          ),
        }),
        timeCreated: Schema.optional(Schema.String),
        uniqueId: Schema.optional(Schema.String),
      }),
    ),
    zones: Schema.optional(Schema.Array(Schema.String)),
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
    plan: Schema.optional(
      Schema.Struct({
        name: Schema.String,
        publisher: Schema.String,
        product: Schema.String,
        promotionCode: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
      }),
    ),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    location: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}",
      apiVersion: "2024-11-01",
    }),
  );
export type FleetsCreateOrUpdateInput = typeof FleetsCreateOrUpdateInput.Type;

// Output Schema
export const FleetsCreateOrUpdateOutput =
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
export type FleetsCreateOrUpdateOutput = typeof FleetsCreateOrUpdateOutput.Type;

// The operation
/**
 * Create a Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Compute Fleet
 */
export const FleetsCreateOrUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FleetsCreateOrUpdateInput,
    outputSchema: FleetsCreateOrUpdateOutput,
  }),
);
// Input Schema
export const FleetsDeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}",
    apiVersion: "2024-11-01",
  }),
);
export type FleetsDeleteInput = typeof FleetsDeleteInput.Type;

// Output Schema
export const FleetsDeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type FleetsDeleteOutput = typeof FleetsDeleteOutput.Type;

// The operation
/**
 * Delete a Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Compute Fleet
 */
export const FleetsDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FleetsDeleteInput,
  outputSchema: FleetsDeleteOutput,
}));
// Input Schema
export const FleetsGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}",
    apiVersion: "2024-11-01",
  }),
);
export type FleetsGetInput = typeof FleetsGetInput.Type;

// Output Schema
export const FleetsGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type FleetsGetOutput = typeof FleetsGetOutput.Type;

// The operation
/**
 * Get a Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Compute Fleet
 */
export const FleetsGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FleetsGetInput,
  outputSchema: FleetsGetOutput,
}));
// Input Schema
export const FleetsListByResourceGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets",
      apiVersion: "2024-11-01",
    }),
  );
export type FleetsListByResourceGroupInput =
  typeof FleetsListByResourceGroupInput.Type;

// Output Schema
export const FleetsListByResourceGroupOutput =
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
export type FleetsListByResourceGroupOutput =
  typeof FleetsListByResourceGroupOutput.Type;

// The operation
/**
 * List Fleet resources by resource group
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 */
export const FleetsListByResourceGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FleetsListByResourceGroupInput,
    outputSchema: FleetsListByResourceGroupOutput,
  }),
);
// Input Schema
export const FleetsListBySubscriptionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/providers/Microsoft.AzureFleet/fleets",
      apiVersion: "2024-11-01",
    }),
  );
export type FleetsListBySubscriptionInput =
  typeof FleetsListBySubscriptionInput.Type;

// Output Schema
export const FleetsListBySubscriptionOutput =
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
export type FleetsListBySubscriptionOutput =
  typeof FleetsListBySubscriptionOutput.Type;

// The operation
/**
 * List Fleet resources by subscription ID
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 */
export const FleetsListBySubscription = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: FleetsListBySubscriptionInput,
    outputSchema: FleetsListBySubscriptionOutput,
  }),
);
// Input Schema
export const FleetsListVirtualMachineScaleSetsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    subscriptionId: Schema.String.pipe(T.PathParam()),
    resourceGroupName: Schema.String.pipe(T.PathParam()),
    name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{name}/virtualMachineScaleSets",
      apiVersion: "2024-11-01",
    }),
  );
export type FleetsListVirtualMachineScaleSetsInput =
  typeof FleetsListVirtualMachineScaleSetsInput.Type;

// Output Schema
export const FleetsListVirtualMachineScaleSetsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        id: Schema.String,
        type: Schema.optional(Schema.String),
        operationStatus: Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Creating",
          "Updating",
          "Deleting",
          "Migrating",
        ]),
        error: Schema.optional(
          Schema.Struct({
            code: Schema.optional(Schema.String),
            target: Schema.optional(Schema.String),
            message: Schema.optional(Schema.String),
            details: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  code: Schema.optional(Schema.String),
                  target: Schema.optional(Schema.String),
                  message: Schema.optional(Schema.String),
                }),
              ),
            ),
            innererror: Schema.optional(
              Schema.Struct({
                exceptionType: Schema.optional(Schema.String),
                errorDetail: Schema.optional(Schema.String),
              }),
            ),
          }),
        ),
      }),
    ),
    nextLink: Schema.optional(Schema.String),
  });
export type FleetsListVirtualMachineScaleSetsOutput =
  typeof FleetsListVirtualMachineScaleSetsOutput.Type;

// The operation
/**
 * List VirtualMachineScaleSet resources by Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param name - The name of the Fleet
 */
export const FleetsListVirtualMachineScaleSets =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: FleetsListVirtualMachineScaleSetsInput,
    outputSchema: FleetsListVirtualMachineScaleSetsOutput,
  }));
// Input Schema
export const FleetsUpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  subscriptionId: Schema.String.pipe(T.PathParam()),
  resourceGroupName: Schema.String.pipe(T.PathParam()),
  fleetName: Schema.String.pipe(T.PathParam()),
  tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  identity: Schema.optional(
    Schema.Struct({
      type: Schema.optional(
        Schema.Literals([
          "None",
          "SystemAssigned",
          "UserAssigned",
          "SystemAssigned,UserAssigned",
        ]),
      ),
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
  plan: Schema.optional(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      publisher: Schema.optional(Schema.String),
      product: Schema.optional(Schema.String),
      promotionCode: Schema.optional(Schema.String),
      version: Schema.optional(Schema.String),
    }),
  ),
  properties: Schema.optional(
    Schema.Struct({
      provisioningState: Schema.optional(
        Schema.Literals([
          "Succeeded",
          "Failed",
          "Canceled",
          "Creating",
          "Updating",
          "Deleting",
          "Migrating",
        ]),
      ),
      spotPriorityProfile: Schema.optional(
        Schema.Struct({
          capacity: Schema.optional(Schema.Number),
          minCapacity: Schema.optional(Schema.Number),
          maxPricePerVM: Schema.optional(Schema.Number),
          evictionPolicy: Schema.optional(
            Schema.Literals(["Delete", "Deallocate"]),
          ),
          allocationStrategy: Schema.optional(
            Schema.Literals([
              "PriceCapacityOptimized",
              "LowestPrice",
              "CapacityOptimized",
            ]),
          ),
          maintain: Schema.optional(Schema.Boolean),
        }),
      ),
      regularPriorityProfile: Schema.optional(
        Schema.Struct({
          capacity: Schema.optional(Schema.Number),
          minCapacity: Schema.optional(Schema.Number),
          allocationStrategy: Schema.optional(
            Schema.Literals(["LowestPrice", "Prioritized"]),
          ),
        }),
      ),
      vmSizesProfile: Schema.Array(
        Schema.Struct({
          name: Schema.String,
          rank: Schema.optional(Schema.Number),
        }),
      ),
      vmAttributes: Schema.optional(
        Schema.Struct({
          vCpuCount: Schema.Struct({
            min: Schema.optional(Schema.Number),
            max: Schema.optional(Schema.Number),
          }),
          memoryInGiB: Schema.Struct({
            min: Schema.optional(Schema.Number),
            max: Schema.optional(Schema.Number),
          }),
          memoryInGiBPerVCpu: Schema.optional(
            Schema.Struct({
              min: Schema.optional(Schema.Number),
              max: Schema.optional(Schema.Number),
            }),
          ),
          localStorageSupport: Schema.optional(
            Schema.Literals(["Excluded", "Included", "Required"]),
          ),
          localStorageInGiB: Schema.optional(
            Schema.Struct({
              min: Schema.optional(Schema.Number),
              max: Schema.optional(Schema.Number),
            }),
          ),
          localStorageDiskTypes: Schema.optional(
            Schema.Array(Schema.Literals(["HDD", "SSD"])),
          ),
          dataDiskCount: Schema.optional(
            Schema.Struct({
              min: Schema.optional(Schema.Number),
              max: Schema.optional(Schema.Number),
            }),
          ),
          networkInterfaceCount: Schema.optional(
            Schema.Struct({
              min: Schema.optional(Schema.Number),
              max: Schema.optional(Schema.Number),
            }),
          ),
          networkBandwidthInMbps: Schema.optional(
            Schema.Struct({
              min: Schema.optional(Schema.Number),
              max: Schema.optional(Schema.Number),
            }),
          ),
          rdmaSupport: Schema.optional(
            Schema.Literals(["Excluded", "Included", "Required"]),
          ),
          rdmaNetworkInterfaceCount: Schema.optional(
            Schema.Struct({
              min: Schema.optional(Schema.Number),
              max: Schema.optional(Schema.Number),
            }),
          ),
          acceleratorSupport: Schema.optional(
            Schema.Literals(["Excluded", "Included", "Required"]),
          ),
          acceleratorManufacturers: Schema.optional(
            Schema.Array(Schema.Literals(["AMD", "Nvidia", "Xilinx"])),
          ),
          acceleratorTypes: Schema.optional(
            Schema.Array(Schema.Literals(["GPU", "FPGA"])),
          ),
          acceleratorCount: Schema.optional(
            Schema.Struct({
              min: Schema.optional(Schema.Number),
              max: Schema.optional(Schema.Number),
            }),
          ),
          vmCategories: Schema.optional(
            Schema.Array(
              Schema.Literals([
                "GeneralPurpose",
                "ComputeOptimized",
                "MemoryOptimized",
                "StorageOptimized",
                "GpuAccelerated",
                "FpgaAccelerated",
                "HighPerformanceCompute",
              ]),
            ),
          ),
          architectureTypes: Schema.optional(
            Schema.Array(Schema.Literals(["ARM64", "X64"])),
          ),
          cpuManufacturers: Schema.optional(
            Schema.Array(
              Schema.Literals(["Intel", "AMD", "Microsoft", "Ampere"]),
            ),
          ),
          burstableSupport: Schema.optional(
            Schema.Literals(["Excluded", "Included", "Required"]),
          ),
          excludedVMSizes: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
      additionalLocationsProfile: Schema.optional(
        Schema.Struct({
          locationProfiles: Schema.Array(
            Schema.Struct({
              location: Schema.String,
              virtualMachineProfileOverride: Schema.optional(
                Schema.Struct({
                  osProfile: Schema.optional(
                    Schema.Struct({
                      computerNamePrefix: Schema.optional(Schema.String),
                      adminUsername: Schema.optional(Schema.String),
                      adminPassword: Schema.optional(SensitiveString),
                      customData: Schema.optional(Schema.String),
                      windowsConfiguration: Schema.optional(
                        Schema.Struct({
                          provisionVMAgent: Schema.optional(Schema.Boolean),
                          enableAutomaticUpdates: Schema.optional(
                            Schema.Boolean,
                          ),
                          timeZone: Schema.optional(Schema.String),
                          additionalUnattendContent: Schema.optional(
                            Schema.Array(
                              Schema.Struct({
                                passName: Schema.optional(
                                  Schema.Literals(["OobeSystem"]),
                                ),
                                componentName: Schema.optional(
                                  Schema.Literals([
                                    "Microsoft-Windows-Shell-Setup",
                                  ]),
                                ),
                                settingName: Schema.optional(
                                  Schema.Literals([
                                    "AutoLogon",
                                    "FirstLogonCommands",
                                  ]),
                                ),
                                content: Schema.optional(Schema.String),
                              }),
                            ),
                          ),
                          patchSettings: Schema.optional(
                            Schema.Struct({
                              patchMode: Schema.optional(
                                Schema.Literals([
                                  "Manual",
                                  "AutomaticByOS",
                                  "AutomaticByPlatform",
                                ]),
                              ),
                              enableHotpatching: Schema.optional(
                                Schema.Boolean,
                              ),
                              assessmentMode: Schema.optional(
                                Schema.Literals([
                                  "ImageDefault",
                                  "AutomaticByPlatform",
                                ]),
                              ),
                              automaticByPlatformSettings: Schema.optional(
                                Schema.Struct({
                                  rebootSetting: Schema.optional(
                                    Schema.Literals([
                                      "Unknown",
                                      "IfRequired",
                                      "Never",
                                      "Always",
                                    ]),
                                  ),
                                  bypassPlatformSafetyChecksOnUserSchedule:
                                    Schema.optional(Schema.Boolean),
                                }),
                              ),
                            }),
                          ),
                          winRM: Schema.optional(
                            Schema.Struct({
                              listeners: Schema.optional(
                                Schema.Array(
                                  Schema.Struct({
                                    protocol: Schema.optional(
                                      Schema.Literals(["Http", "Https"]),
                                    ),
                                    certificateUrl: Schema.optional(
                                      Schema.String,
                                    ),
                                  }),
                                ),
                              ),
                            }),
                          ),
                          enableVMAgentPlatformUpdates: Schema.optional(
                            Schema.Boolean,
                          ),
                        }),
                      ),
                      linuxConfiguration: Schema.optional(
                        Schema.Struct({
                          disablePasswordAuthentication: Schema.optional(
                            Schema.Boolean,
                          ),
                          ssh: Schema.optional(
                            Schema.Struct({
                              publicKeys: Schema.optional(
                                Schema.Array(
                                  Schema.Struct({
                                    path: Schema.optional(Schema.String),
                                    keyData: Schema.optional(Schema.String),
                                  }),
                                ),
                              ),
                            }),
                          ),
                          provisionVMAgent: Schema.optional(Schema.Boolean),
                          patchSettings: Schema.optional(
                            Schema.Struct({
                              patchMode: Schema.optional(
                                Schema.Literals([
                                  "ImageDefault",
                                  "AutomaticByPlatform",
                                ]),
                              ),
                              assessmentMode: Schema.optional(
                                Schema.Literals([
                                  "ImageDefault",
                                  "AutomaticByPlatform",
                                ]),
                              ),
                              automaticByPlatformSettings: Schema.optional(
                                Schema.Struct({
                                  rebootSetting: Schema.optional(
                                    Schema.Literals([
                                      "Unknown",
                                      "IfRequired",
                                      "Never",
                                      "Always",
                                    ]),
                                  ),
                                  bypassPlatformSafetyChecksOnUserSchedule:
                                    Schema.optional(Schema.Boolean),
                                }),
                              ),
                            }),
                          ),
                          enableVMAgentPlatformUpdates: Schema.optional(
                            Schema.Boolean,
                          ),
                        }),
                      ),
                      secrets: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            sourceVault: Schema.optional(
                              Schema.Struct({
                                id: Schema.optional(Schema.String),
                              }),
                            ),
                            vaultCertificates: Schema.optional(
                              Schema.Array(
                                Schema.Struct({
                                  certificateUrl: Schema.optional(
                                    Schema.String,
                                  ),
                                  certificateStore: Schema.optional(
                                    Schema.String,
                                  ),
                                }),
                              ),
                            ),
                          }),
                        ),
                      ),
                      allowExtensionOperations: Schema.optional(Schema.Boolean),
                      requireGuestProvisionSignal: Schema.optional(
                        Schema.Boolean,
                      ),
                    }),
                  ),
                  storageProfile: Schema.optional(
                    Schema.Struct({
                      imageReference: Schema.optional(
                        Schema.Struct({
                          id: Schema.optional(Schema.String),
                          publisher: Schema.optional(Schema.String),
                          offer: Schema.optional(Schema.String),
                          sku: Schema.optional(Schema.String),
                          version: Schema.optional(Schema.String),
                          exactVersion: Schema.optional(Schema.String),
                          sharedGalleryImageId: Schema.optional(Schema.String),
                          communityGalleryImageId: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                      osDisk: Schema.optional(
                        Schema.Struct({
                          name: Schema.optional(Schema.String),
                          caching: Schema.optional(
                            Schema.Literals(["None", "ReadOnly", "ReadWrite"]),
                          ),
                          writeAcceleratorEnabled: Schema.optional(
                            Schema.Boolean,
                          ),
                          createOption: Schema.Literals([
                            "FromImage",
                            "Empty",
                            "Attach",
                            "Copy",
                            "Restore",
                          ]),
                          diffDiskSettings: Schema.optional(
                            Schema.Struct({
                              option: Schema.optional(
                                Schema.Literals(["Local"]),
                              ),
                              placement: Schema.optional(
                                Schema.Literals([
                                  "CacheDisk",
                                  "ResourceDisk",
                                  "NvmeDisk",
                                ]),
                              ),
                            }),
                          ),
                          diskSizeGB: Schema.optional(Schema.Number),
                          osType: Schema.optional(
                            Schema.Literals(["Windows", "Linux"]),
                          ),
                          image: Schema.optional(
                            Schema.Struct({
                              uri: Schema.optional(Schema.String),
                            }),
                          ),
                          vhdContainers: Schema.optional(
                            Schema.Array(Schema.String),
                          ),
                          managedDisk: Schema.optional(
                            Schema.Struct({
                              storageAccountType: Schema.optional(
                                Schema.Literals([
                                  "Standard_LRS",
                                  "Premium_LRS",
                                  "StandardSSD_LRS",
                                  "UltraSSD_LRS",
                                  "Premium_ZRS",
                                  "StandardSSD_ZRS",
                                  "PremiumV2_LRS",
                                ]),
                              ),
                              diskEncryptionSet: Schema.optional(
                                Schema.Struct({
                                  id: Schema.optional(Schema.String),
                                }),
                              ),
                              securityProfile: Schema.optional(
                                Schema.Struct({
                                  securityEncryptionType: Schema.optional(
                                    Schema.Literals([
                                      "VMGuestStateOnly",
                                      "DiskWithVMGuestState",
                                      "NonPersistedTPM",
                                    ]),
                                  ),
                                  diskEncryptionSet: Schema.optional(
                                    Schema.Struct({
                                      id: Schema.optional(Schema.String),
                                    }),
                                  ),
                                }),
                              ),
                            }),
                          ),
                          deleteOption: Schema.optional(
                            Schema.Literals(["Delete", "Detach"]),
                          ),
                        }),
                      ),
                      dataDisks: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.optional(Schema.String),
                            lun: Schema.Number,
                            caching: Schema.optional(
                              Schema.Literals([
                                "None",
                                "ReadOnly",
                                "ReadWrite",
                              ]),
                            ),
                            writeAcceleratorEnabled: Schema.optional(
                              Schema.Boolean,
                            ),
                            createOption: Schema.Literals([
                              "FromImage",
                              "Empty",
                              "Attach",
                              "Copy",
                              "Restore",
                            ]),
                            diskSizeGB: Schema.optional(Schema.Number),
                            managedDisk: Schema.optional(
                              Schema.Struct({
                                storageAccountType: Schema.optional(
                                  Schema.Literals([
                                    "Standard_LRS",
                                    "Premium_LRS",
                                    "StandardSSD_LRS",
                                    "UltraSSD_LRS",
                                    "Premium_ZRS",
                                    "StandardSSD_ZRS",
                                    "PremiumV2_LRS",
                                  ]),
                                ),
                                diskEncryptionSet: Schema.optional(
                                  Schema.Struct({
                                    id: Schema.optional(Schema.String),
                                  }),
                                ),
                                securityProfile: Schema.optional(
                                  Schema.Struct({
                                    securityEncryptionType: Schema.optional(
                                      Schema.Literals([
                                        "VMGuestStateOnly",
                                        "DiskWithVMGuestState",
                                        "NonPersistedTPM",
                                      ]),
                                    ),
                                    diskEncryptionSet: Schema.optional(
                                      Schema.Struct({
                                        id: Schema.optional(Schema.String),
                                      }),
                                    ),
                                  }),
                                ),
                              }),
                            ),
                            diskIOPSReadWrite: Schema.optional(Schema.Number),
                            diskMBpsReadWrite: Schema.optional(Schema.Number),
                            deleteOption: Schema.optional(
                              Schema.Literals(["Delete", "Detach"]),
                            ),
                          }),
                        ),
                      ),
                      diskControllerType: Schema.optional(
                        Schema.Literals(["SCSI", "NVMe"]),
                      ),
                    }),
                  ),
                  networkProfile: Schema.optional(
                    Schema.Struct({
                      healthProbe: Schema.optional(
                        Schema.Struct({
                          id: Schema.optional(Schema.String),
                        }),
                      ),
                      networkInterfaceConfigurations: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            name: Schema.String,
                            properties: Schema.optional(
                              Schema.Struct({
                                primary: Schema.optional(Schema.Boolean),
                                enableAcceleratedNetworking: Schema.optional(
                                  Schema.Boolean,
                                ),
                                disableTcpStateTracking: Schema.optional(
                                  Schema.Boolean,
                                ),
                                enableFpga: Schema.optional(Schema.Boolean),
                                networkSecurityGroup: Schema.optional(
                                  Schema.Struct({
                                    id: Schema.optional(Schema.String),
                                  }),
                                ),
                                dnsSettings: Schema.optional(
                                  Schema.Struct({
                                    dnsServers: Schema.optional(
                                      Schema.Array(Schema.String),
                                    ),
                                  }),
                                ),
                                ipConfigurations: Schema.Array(
                                  Schema.Struct({
                                    name: Schema.String,
                                    properties: Schema.optional(
                                      Schema.Struct({
                                        subnet: Schema.optional(
                                          Schema.Struct({
                                            id: Schema.optional(Schema.String),
                                          }),
                                        ),
                                        primary: Schema.optional(
                                          Schema.Boolean,
                                        ),
                                        publicIPAddressConfiguration:
                                          Schema.optional(
                                            Schema.Struct({
                                              name: Schema.String,
                                              properties: Schema.optional(
                                                Schema.Struct({
                                                  idleTimeoutInMinutes:
                                                    Schema.optional(
                                                      Schema.Number,
                                                    ),
                                                  dnsSettings: Schema.optional(
                                                    Schema.Struct({
                                                      domainNameLabel:
                                                        Schema.String,
                                                      domainNameLabelScope:
                                                        Schema.optional(
                                                          Schema.Literals([
                                                            "TenantReuse",
                                                            "SubscriptionReuse",
                                                            "ResourceGroupReuse",
                                                            "NoReuse",
                                                          ]),
                                                        ),
                                                    }),
                                                  ),
                                                  ipTags: Schema.optional(
                                                    Schema.Array(
                                                      Schema.Struct({
                                                        ipTagType:
                                                          Schema.optional(
                                                            Schema.String,
                                                          ),
                                                        tag: Schema.optional(
                                                          Schema.String,
                                                        ),
                                                      }),
                                                    ),
                                                  ),
                                                  publicIPPrefix:
                                                    Schema.optional(
                                                      Schema.Struct({
                                                        id: Schema.optional(
                                                          Schema.String,
                                                        ),
                                                      }),
                                                    ),
                                                  publicIPAddressVersion:
                                                    Schema.optional(
                                                      Schema.Literals([
                                                        "IPv4",
                                                        "IPv6",
                                                      ]),
                                                    ),
                                                  deleteOption: Schema.optional(
                                                    Schema.Literals([
                                                      "Delete",
                                                      "Detach",
                                                    ]),
                                                  ),
                                                }),
                                              ),
                                              sku: Schema.optional(
                                                Schema.Struct({
                                                  name: Schema.optional(
                                                    Schema.Literals([
                                                      "Basic",
                                                      "Standard",
                                                    ]),
                                                  ),
                                                  tier: Schema.optional(
                                                    Schema.Literals([
                                                      "Regional",
                                                      "Global",
                                                    ]),
                                                  ),
                                                }),
                                              ),
                                            }),
                                          ),
                                        privateIPAddressVersion:
                                          Schema.optional(
                                            Schema.Literals(["IPv4", "IPv6"]),
                                          ),
                                        applicationGatewayBackendAddressPools:
                                          Schema.optional(
                                            Schema.Array(
                                              Schema.Struct({
                                                id: Schema.optional(
                                                  Schema.String,
                                                ),
                                              }),
                                            ),
                                          ),
                                        applicationSecurityGroups:
                                          Schema.optional(
                                            Schema.Array(
                                              Schema.Struct({
                                                id: Schema.optional(
                                                  Schema.String,
                                                ),
                                              }),
                                            ),
                                          ),
                                        loadBalancerBackendAddressPools:
                                          Schema.optional(
                                            Schema.Array(
                                              Schema.Struct({
                                                id: Schema.optional(
                                                  Schema.String,
                                                ),
                                              }),
                                            ),
                                          ),
                                        loadBalancerInboundNatPools:
                                          Schema.optional(
                                            Schema.Array(
                                              Schema.Struct({
                                                id: Schema.optional(
                                                  Schema.String,
                                                ),
                                              }),
                                            ),
                                          ),
                                      }),
                                    ),
                                  }),
                                ),
                                enableIPForwarding: Schema.optional(
                                  Schema.Boolean,
                                ),
                                deleteOption: Schema.optional(
                                  Schema.Literals(["Delete", "Detach"]),
                                ),
                                auxiliaryMode: Schema.optional(
                                  Schema.Literals([
                                    "None",
                                    "AcceleratedConnections",
                                    "Floating",
                                  ]),
                                ),
                                auxiliarySku: Schema.optional(
                                  Schema.Literals([
                                    "None",
                                    "A1",
                                    "A2",
                                    "A4",
                                    "A8",
                                  ]),
                                ),
                              }),
                            ),
                          }),
                        ),
                      ),
                      networkApiVersion: Schema.optional(
                        Schema.Literals(["2020-11-01"]),
                      ),
                    }),
                  ),
                  securityProfile: Schema.optional(
                    Schema.Struct({
                      uefiSettings: Schema.optional(
                        Schema.Struct({
                          secureBootEnabled: Schema.optional(Schema.Boolean),
                          vTpmEnabled: Schema.optional(Schema.Boolean),
                        }),
                      ),
                      encryptionAtHost: Schema.optional(Schema.Boolean),
                      securityType: Schema.optional(
                        Schema.Literals(["TrustedLaunch", "ConfidentialVM"]),
                      ),
                      encryptionIdentity: Schema.optional(
                        Schema.Struct({
                          userAssignedIdentityResourceId: Schema.optional(
                            Schema.String,
                          ),
                        }),
                      ),
                      proxyAgentSettings: Schema.optional(
                        Schema.Struct({
                          enabled: Schema.optional(Schema.Boolean),
                          mode: Schema.optional(
                            Schema.Literals(["Audit", "Enforce"]),
                          ),
                          keyIncarnationId: Schema.optional(Schema.Number),
                        }),
                      ),
                    }),
                  ),
                  diagnosticsProfile: Schema.optional(
                    Schema.Struct({
                      bootDiagnostics: Schema.optional(
                        Schema.Struct({
                          enabled: Schema.optional(Schema.Boolean),
                          storageUri: Schema.optional(Schema.String),
                        }),
                      ),
                    }),
                  ),
                  extensionProfile: Schema.optional(
                    Schema.Struct({
                      extensions: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            id: Schema.optional(Schema.String),
                            name: Schema.optional(Schema.String),
                            type: Schema.optional(Schema.String),
                            properties: Schema.optional(
                              Schema.Struct({
                                forceUpdateTag: Schema.optional(Schema.String),
                                publisher: Schema.optional(Schema.String),
                                type: Schema.optional(Schema.String),
                                typeHandlerVersion: Schema.optional(
                                  Schema.String,
                                ),
                                autoUpgradeMinorVersion: Schema.optional(
                                  Schema.Boolean,
                                ),
                                enableAutomaticUpgrade: Schema.optional(
                                  Schema.Boolean,
                                ),
                                settings: Schema.optional(
                                  Schema.Record(Schema.String, Schema.Unknown),
                                ),
                                protectedSettings: Schema.optional(
                                  Schema.Record(Schema.String, Schema.Unknown),
                                ),
                                provisioningState: Schema.optional(
                                  Schema.String,
                                ),
                                provisionAfterExtensions: Schema.optional(
                                  Schema.Array(Schema.String),
                                ),
                                suppressFailures: Schema.optional(
                                  Schema.Boolean,
                                ),
                                protectedSettingsFromKeyVault: Schema.optional(
                                  Schema.Struct({
                                    secretUrl: Schema.String,
                                    sourceVault: Schema.Struct({
                                      id: Schema.optional(Schema.String),
                                    }),
                                  }),
                                ),
                              }),
                            ),
                          }),
                        ),
                      ),
                      extensionsTimeBudget: Schema.optional(Schema.String),
                    }),
                  ),
                  licenseType: Schema.optional(Schema.String),
                  scheduledEventsProfile: Schema.optional(
                    Schema.Struct({
                      terminateNotificationProfile: Schema.optional(
                        Schema.Struct({
                          notBeforeTimeout: Schema.optional(Schema.String),
                          enable: Schema.optional(Schema.Boolean),
                        }),
                      ),
                      osImageNotificationProfile: Schema.optional(
                        Schema.Struct({
                          notBeforeTimeout: Schema.optional(Schema.String),
                          enable: Schema.optional(Schema.Boolean),
                        }),
                      ),
                    }),
                  ),
                  userData: Schema.optional(Schema.String),
                  capacityReservation: Schema.optional(
                    Schema.Struct({
                      capacityReservationGroup: Schema.optional(
                        Schema.Struct({
                          id: Schema.optional(Schema.String),
                        }),
                      ),
                    }),
                  ),
                  applicationProfile: Schema.optional(
                    Schema.Struct({
                      galleryApplications: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            tags: Schema.optional(Schema.String),
                            order: Schema.optional(Schema.Number),
                            packageReferenceId: Schema.String,
                            configurationReference: Schema.optional(
                              Schema.String,
                            ),
                            treatFailureAsDeploymentFailure: Schema.optional(
                              Schema.Boolean,
                            ),
                            enableAutomaticUpgrade: Schema.optional(
                              Schema.Boolean,
                            ),
                          }),
                        ),
                      ),
                    }),
                  ),
                  hardwareProfile: Schema.optional(
                    Schema.Struct({
                      vmSizeProperties: Schema.optional(
                        Schema.Struct({
                          vCPUsAvailable: Schema.optional(Schema.Number),
                          vCPUsPerCore: Schema.optional(Schema.Number),
                        }),
                      ),
                    }),
                  ),
                  serviceArtifactReference: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                    }),
                  ),
                  securityPostureReference: Schema.optional(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                      excludeExtensions: Schema.optional(
                        Schema.Array(Schema.String),
                      ),
                      isOverridable: Schema.optional(Schema.Boolean),
                    }),
                  ),
                  timeCreated: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
        }),
      ),
      computeProfile: Schema.Struct({
        baseVirtualMachineProfile: Schema.Struct({
          osProfile: Schema.optional(
            Schema.Struct({
              computerNamePrefix: Schema.optional(Schema.String),
              adminUsername: Schema.optional(Schema.String),
              adminPassword: Schema.optional(SensitiveString),
              customData: Schema.optional(Schema.String),
              windowsConfiguration: Schema.optional(
                Schema.Struct({
                  provisionVMAgent: Schema.optional(Schema.Boolean),
                  enableAutomaticUpdates: Schema.optional(Schema.Boolean),
                  timeZone: Schema.optional(Schema.String),
                  additionalUnattendContent: Schema.optional(
                    Schema.Array(
                      Schema.Struct({
                        passName: Schema.optional(
                          Schema.Literals(["OobeSystem"]),
                        ),
                        componentName: Schema.optional(
                          Schema.Literals(["Microsoft-Windows-Shell-Setup"]),
                        ),
                        settingName: Schema.optional(
                          Schema.Literals(["AutoLogon", "FirstLogonCommands"]),
                        ),
                        content: Schema.optional(Schema.String),
                      }),
                    ),
                  ),
                  patchSettings: Schema.optional(
                    Schema.Struct({
                      patchMode: Schema.optional(
                        Schema.Literals([
                          "Manual",
                          "AutomaticByOS",
                          "AutomaticByPlatform",
                        ]),
                      ),
                      enableHotpatching: Schema.optional(Schema.Boolean),
                      assessmentMode: Schema.optional(
                        Schema.Literals([
                          "ImageDefault",
                          "AutomaticByPlatform",
                        ]),
                      ),
                      automaticByPlatformSettings: Schema.optional(
                        Schema.Struct({
                          rebootSetting: Schema.optional(
                            Schema.Literals([
                              "Unknown",
                              "IfRequired",
                              "Never",
                              "Always",
                            ]),
                          ),
                          bypassPlatformSafetyChecksOnUserSchedule:
                            Schema.optional(Schema.Boolean),
                        }),
                      ),
                    }),
                  ),
                  winRM: Schema.optional(
                    Schema.Struct({
                      listeners: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            protocol: Schema.optional(
                              Schema.Literals(["Http", "Https"]),
                            ),
                            certificateUrl: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                  enableVMAgentPlatformUpdates: Schema.optional(Schema.Boolean),
                }),
              ),
              linuxConfiguration: Schema.optional(
                Schema.Struct({
                  disablePasswordAuthentication: Schema.optional(
                    Schema.Boolean,
                  ),
                  ssh: Schema.optional(
                    Schema.Struct({
                      publicKeys: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            path: Schema.optional(Schema.String),
                            keyData: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                  provisionVMAgent: Schema.optional(Schema.Boolean),
                  patchSettings: Schema.optional(
                    Schema.Struct({
                      patchMode: Schema.optional(
                        Schema.Literals([
                          "ImageDefault",
                          "AutomaticByPlatform",
                        ]),
                      ),
                      assessmentMode: Schema.optional(
                        Schema.Literals([
                          "ImageDefault",
                          "AutomaticByPlatform",
                        ]),
                      ),
                      automaticByPlatformSettings: Schema.optional(
                        Schema.Struct({
                          rebootSetting: Schema.optional(
                            Schema.Literals([
                              "Unknown",
                              "IfRequired",
                              "Never",
                              "Always",
                            ]),
                          ),
                          bypassPlatformSafetyChecksOnUserSchedule:
                            Schema.optional(Schema.Boolean),
                        }),
                      ),
                    }),
                  ),
                  enableVMAgentPlatformUpdates: Schema.optional(Schema.Boolean),
                }),
              ),
              secrets: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    sourceVault: Schema.optional(
                      Schema.Struct({
                        id: Schema.optional(Schema.String),
                      }),
                    ),
                    vaultCertificates: Schema.optional(
                      Schema.Array(
                        Schema.Struct({
                          certificateUrl: Schema.optional(Schema.String),
                          certificateStore: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                  }),
                ),
              ),
              allowExtensionOperations: Schema.optional(Schema.Boolean),
              requireGuestProvisionSignal: Schema.optional(Schema.Boolean),
            }),
          ),
          storageProfile: Schema.optional(
            Schema.Struct({
              imageReference: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                  publisher: Schema.optional(Schema.String),
                  offer: Schema.optional(Schema.String),
                  sku: Schema.optional(Schema.String),
                  version: Schema.optional(Schema.String),
                  exactVersion: Schema.optional(Schema.String),
                  sharedGalleryImageId: Schema.optional(Schema.String),
                  communityGalleryImageId: Schema.optional(Schema.String),
                }),
              ),
              osDisk: Schema.optional(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  caching: Schema.optional(
                    Schema.Literals(["None", "ReadOnly", "ReadWrite"]),
                  ),
                  writeAcceleratorEnabled: Schema.optional(Schema.Boolean),
                  createOption: Schema.Literals([
                    "FromImage",
                    "Empty",
                    "Attach",
                    "Copy",
                    "Restore",
                  ]),
                  diffDiskSettings: Schema.optional(
                    Schema.Struct({
                      option: Schema.optional(Schema.Literals(["Local"])),
                      placement: Schema.optional(
                        Schema.Literals([
                          "CacheDisk",
                          "ResourceDisk",
                          "NvmeDisk",
                        ]),
                      ),
                    }),
                  ),
                  diskSizeGB: Schema.optional(Schema.Number),
                  osType: Schema.optional(
                    Schema.Literals(["Windows", "Linux"]),
                  ),
                  image: Schema.optional(
                    Schema.Struct({
                      uri: Schema.optional(Schema.String),
                    }),
                  ),
                  vhdContainers: Schema.optional(Schema.Array(Schema.String)),
                  managedDisk: Schema.optional(
                    Schema.Struct({
                      storageAccountType: Schema.optional(
                        Schema.Literals([
                          "Standard_LRS",
                          "Premium_LRS",
                          "StandardSSD_LRS",
                          "UltraSSD_LRS",
                          "Premium_ZRS",
                          "StandardSSD_ZRS",
                          "PremiumV2_LRS",
                        ]),
                      ),
                      diskEncryptionSet: Schema.optional(
                        Schema.Struct({
                          id: Schema.optional(Schema.String),
                        }),
                      ),
                      securityProfile: Schema.optional(
                        Schema.Struct({
                          securityEncryptionType: Schema.optional(
                            Schema.Literals([
                              "VMGuestStateOnly",
                              "DiskWithVMGuestState",
                              "NonPersistedTPM",
                            ]),
                          ),
                          diskEncryptionSet: Schema.optional(
                            Schema.Struct({
                              id: Schema.optional(Schema.String),
                            }),
                          ),
                        }),
                      ),
                    }),
                  ),
                  deleteOption: Schema.optional(
                    Schema.Literals(["Delete", "Detach"]),
                  ),
                }),
              ),
              dataDisks: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    lun: Schema.Number,
                    caching: Schema.optional(
                      Schema.Literals(["None", "ReadOnly", "ReadWrite"]),
                    ),
                    writeAcceleratorEnabled: Schema.optional(Schema.Boolean),
                    createOption: Schema.Literals([
                      "FromImage",
                      "Empty",
                      "Attach",
                      "Copy",
                      "Restore",
                    ]),
                    diskSizeGB: Schema.optional(Schema.Number),
                    managedDisk: Schema.optional(
                      Schema.Struct({
                        storageAccountType: Schema.optional(
                          Schema.Literals([
                            "Standard_LRS",
                            "Premium_LRS",
                            "StandardSSD_LRS",
                            "UltraSSD_LRS",
                            "Premium_ZRS",
                            "StandardSSD_ZRS",
                            "PremiumV2_LRS",
                          ]),
                        ),
                        diskEncryptionSet: Schema.optional(
                          Schema.Struct({
                            id: Schema.optional(Schema.String),
                          }),
                        ),
                        securityProfile: Schema.optional(
                          Schema.Struct({
                            securityEncryptionType: Schema.optional(
                              Schema.Literals([
                                "VMGuestStateOnly",
                                "DiskWithVMGuestState",
                                "NonPersistedTPM",
                              ]),
                            ),
                            diskEncryptionSet: Schema.optional(
                              Schema.Struct({
                                id: Schema.optional(Schema.String),
                              }),
                            ),
                          }),
                        ),
                      }),
                    ),
                    diskIOPSReadWrite: Schema.optional(Schema.Number),
                    diskMBpsReadWrite: Schema.optional(Schema.Number),
                    deleteOption: Schema.optional(
                      Schema.Literals(["Delete", "Detach"]),
                    ),
                  }),
                ),
              ),
              diskControllerType: Schema.optional(
                Schema.Literals(["SCSI", "NVMe"]),
              ),
            }),
          ),
          networkProfile: Schema.optional(
            Schema.Struct({
              healthProbe: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
              networkInterfaceConfigurations: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.String,
                    properties: Schema.optional(
                      Schema.Struct({
                        primary: Schema.optional(Schema.Boolean),
                        enableAcceleratedNetworking: Schema.optional(
                          Schema.Boolean,
                        ),
                        disableTcpStateTracking: Schema.optional(
                          Schema.Boolean,
                        ),
                        enableFpga: Schema.optional(Schema.Boolean),
                        networkSecurityGroup: Schema.optional(
                          Schema.Struct({
                            id: Schema.optional(Schema.String),
                          }),
                        ),
                        dnsSettings: Schema.optional(
                          Schema.Struct({
                            dnsServers: Schema.optional(
                              Schema.Array(Schema.String),
                            ),
                          }),
                        ),
                        ipConfigurations: Schema.Array(
                          Schema.Struct({
                            name: Schema.String,
                            properties: Schema.optional(
                              Schema.Struct({
                                subnet: Schema.optional(
                                  Schema.Struct({
                                    id: Schema.optional(Schema.String),
                                  }),
                                ),
                                primary: Schema.optional(Schema.Boolean),
                                publicIPAddressConfiguration: Schema.optional(
                                  Schema.Struct({
                                    name: Schema.String,
                                    properties: Schema.optional(
                                      Schema.Struct({
                                        idleTimeoutInMinutes: Schema.optional(
                                          Schema.Number,
                                        ),
                                        dnsSettings: Schema.optional(
                                          Schema.Struct({
                                            domainNameLabel: Schema.String,
                                            domainNameLabelScope:
                                              Schema.optional(
                                                Schema.Literals([
                                                  "TenantReuse",
                                                  "SubscriptionReuse",
                                                  "ResourceGroupReuse",
                                                  "NoReuse",
                                                ]),
                                              ),
                                          }),
                                        ),
                                        ipTags: Schema.optional(
                                          Schema.Array(
                                            Schema.Struct({
                                              ipTagType: Schema.optional(
                                                Schema.String,
                                              ),
                                              tag: Schema.optional(
                                                Schema.String,
                                              ),
                                            }),
                                          ),
                                        ),
                                        publicIPPrefix: Schema.optional(
                                          Schema.Struct({
                                            id: Schema.optional(Schema.String),
                                          }),
                                        ),
                                        publicIPAddressVersion: Schema.optional(
                                          Schema.Literals(["IPv4", "IPv6"]),
                                        ),
                                        deleteOption: Schema.optional(
                                          Schema.Literals(["Delete", "Detach"]),
                                        ),
                                      }),
                                    ),
                                    sku: Schema.optional(
                                      Schema.Struct({
                                        name: Schema.optional(
                                          Schema.Literals([
                                            "Basic",
                                            "Standard",
                                          ]),
                                        ),
                                        tier: Schema.optional(
                                          Schema.Literals([
                                            "Regional",
                                            "Global",
                                          ]),
                                        ),
                                      }),
                                    ),
                                  }),
                                ),
                                privateIPAddressVersion: Schema.optional(
                                  Schema.Literals(["IPv4", "IPv6"]),
                                ),
                                applicationGatewayBackendAddressPools:
                                  Schema.optional(
                                    Schema.Array(
                                      Schema.Struct({
                                        id: Schema.optional(Schema.String),
                                      }),
                                    ),
                                  ),
                                applicationSecurityGroups: Schema.optional(
                                  Schema.Array(
                                    Schema.Struct({
                                      id: Schema.optional(Schema.String),
                                    }),
                                  ),
                                ),
                                loadBalancerBackendAddressPools:
                                  Schema.optional(
                                    Schema.Array(
                                      Schema.Struct({
                                        id: Schema.optional(Schema.String),
                                      }),
                                    ),
                                  ),
                                loadBalancerInboundNatPools: Schema.optional(
                                  Schema.Array(
                                    Schema.Struct({
                                      id: Schema.optional(Schema.String),
                                    }),
                                  ),
                                ),
                              }),
                            ),
                          }),
                        ),
                        enableIPForwarding: Schema.optional(Schema.Boolean),
                        deleteOption: Schema.optional(
                          Schema.Literals(["Delete", "Detach"]),
                        ),
                        auxiliaryMode: Schema.optional(
                          Schema.Literals([
                            "None",
                            "AcceleratedConnections",
                            "Floating",
                          ]),
                        ),
                        auxiliarySku: Schema.optional(
                          Schema.Literals(["None", "A1", "A2", "A4", "A8"]),
                        ),
                      }),
                    ),
                  }),
                ),
              ),
              networkApiVersion: Schema.optional(
                Schema.Literals(["2020-11-01"]),
              ),
            }),
          ),
          securityProfile: Schema.optional(
            Schema.Struct({
              uefiSettings: Schema.optional(
                Schema.Struct({
                  secureBootEnabled: Schema.optional(Schema.Boolean),
                  vTpmEnabled: Schema.optional(Schema.Boolean),
                }),
              ),
              encryptionAtHost: Schema.optional(Schema.Boolean),
              securityType: Schema.optional(
                Schema.Literals(["TrustedLaunch", "ConfidentialVM"]),
              ),
              encryptionIdentity: Schema.optional(
                Schema.Struct({
                  userAssignedIdentityResourceId: Schema.optional(
                    Schema.String,
                  ),
                }),
              ),
              proxyAgentSettings: Schema.optional(
                Schema.Struct({
                  enabled: Schema.optional(Schema.Boolean),
                  mode: Schema.optional(Schema.Literals(["Audit", "Enforce"])),
                  keyIncarnationId: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
          diagnosticsProfile: Schema.optional(
            Schema.Struct({
              bootDiagnostics: Schema.optional(
                Schema.Struct({
                  enabled: Schema.optional(Schema.Boolean),
                  storageUri: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          extensionProfile: Schema.optional(
            Schema.Struct({
              extensions: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    type: Schema.optional(Schema.String),
                    properties: Schema.optional(
                      Schema.Struct({
                        forceUpdateTag: Schema.optional(Schema.String),
                        publisher: Schema.optional(Schema.String),
                        type: Schema.optional(Schema.String),
                        typeHandlerVersion: Schema.optional(Schema.String),
                        autoUpgradeMinorVersion: Schema.optional(
                          Schema.Boolean,
                        ),
                        enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
                        settings: Schema.optional(
                          Schema.Record(Schema.String, Schema.Unknown),
                        ),
                        protectedSettings: Schema.optional(
                          Schema.Record(Schema.String, Schema.Unknown),
                        ),
                        provisioningState: Schema.optional(Schema.String),
                        provisionAfterExtensions: Schema.optional(
                          Schema.Array(Schema.String),
                        ),
                        suppressFailures: Schema.optional(Schema.Boolean),
                        protectedSettingsFromKeyVault: Schema.optional(
                          Schema.Struct({
                            secretUrl: Schema.String,
                            sourceVault: Schema.Struct({
                              id: Schema.optional(Schema.String),
                            }),
                          }),
                        ),
                      }),
                    ),
                  }),
                ),
              ),
              extensionsTimeBudget: Schema.optional(Schema.String),
            }),
          ),
          licenseType: Schema.optional(Schema.String),
          scheduledEventsProfile: Schema.optional(
            Schema.Struct({
              terminateNotificationProfile: Schema.optional(
                Schema.Struct({
                  notBeforeTimeout: Schema.optional(Schema.String),
                  enable: Schema.optional(Schema.Boolean),
                }),
              ),
              osImageNotificationProfile: Schema.optional(
                Schema.Struct({
                  notBeforeTimeout: Schema.optional(Schema.String),
                  enable: Schema.optional(Schema.Boolean),
                }),
              ),
            }),
          ),
          userData: Schema.optional(Schema.String),
          capacityReservation: Schema.optional(
            Schema.Struct({
              capacityReservationGroup: Schema.optional(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                }),
              ),
            }),
          ),
          applicationProfile: Schema.optional(
            Schema.Struct({
              galleryApplications: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    tags: Schema.optional(Schema.String),
                    order: Schema.optional(Schema.Number),
                    packageReferenceId: Schema.String,
                    configurationReference: Schema.optional(Schema.String),
                    treatFailureAsDeploymentFailure: Schema.optional(
                      Schema.Boolean,
                    ),
                    enableAutomaticUpgrade: Schema.optional(Schema.Boolean),
                  }),
                ),
              ),
            }),
          ),
          hardwareProfile: Schema.optional(
            Schema.Struct({
              vmSizeProperties: Schema.optional(
                Schema.Struct({
                  vCPUsAvailable: Schema.optional(Schema.Number),
                  vCPUsPerCore: Schema.optional(Schema.Number),
                }),
              ),
            }),
          ),
          serviceArtifactReference: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
            }),
          ),
          securityPostureReference: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              excludeExtensions: Schema.optional(Schema.Array(Schema.String)),
              isOverridable: Schema.optional(Schema.Boolean),
            }),
          ),
          timeCreated: Schema.optional(Schema.String),
        }),
        computeApiVersion: Schema.optional(Schema.String),
        platformFaultDomainCount: Schema.optional(Schema.Number),
        additionalVirtualMachineCapabilities: Schema.optional(
          Schema.Struct({
            ultraSSDEnabled: Schema.optional(Schema.Boolean),
            hibernationEnabled: Schema.optional(Schema.Boolean),
          }),
        ),
      }),
      timeCreated: Schema.optional(Schema.String),
      uniqueId: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureFleet/fleets/{fleetName}",
    apiVersion: "2024-11-01",
  }),
);
export type FleetsUpdateInput = typeof FleetsUpdateInput.Type;

// Output Schema
export const FleetsUpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type FleetsUpdateOutput = typeof FleetsUpdateOutput.Type;

// The operation
/**
 * Update a Fleet
 *
 * @param api-version - The API version to use for this operation.
 * @param subscriptionId - The ID of the target subscription. The value must be an UUID.
 * @param resourceGroupName - The name of the resource group. The name is case insensitive.
 * @param fleetName - The name of the Compute Fleet
 */
export const FleetsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FleetsUpdateInput,
  outputSchema: FleetsUpdateOutput,
}));
// Input Schema
export const OperationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({
    method: "GET",
    path: "/providers/Microsoft.AzureFleet/operations",
    apiVersion: "2024-11-01",
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
