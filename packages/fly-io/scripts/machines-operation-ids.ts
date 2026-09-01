/**
 * Fly Machines go-swagger operationIds (`Apps_list`) → verb-first names
 * (`listApps`) matching MPG, Sprites, and the rest of distilled.
 *
 * Applied via {@link rewriteOpenApiOperationIds} rather than RFC-6902
 * pointers under `/paths/~1apps/.../operationId`. Those patches all went
 * stale when the spec-mirror prefixed every path with `/v1`.
 *
 * PUT and PATCH `/machines/{machine_id}/metadata` share the spec id
 * `Machines_update_metadata`; {@link rewriteMachinesOperationId} splits them.
 */
import type { OperationIdContext } from "@distilled.cloud/core/codegen/rewrite-operation-ids";

export const MACHINES_OPERATION_IDS: Readonly<Record<string, string>> = {
  Apps_list: "listApps",
  Apps_create: "createApp",
  Apps_show: "getApp",
  Apps_delete: "deleteApp",
  App_Certificates_list: "listAppCertificates",
  App_Certificates_acme_create: "createAppAcmeCertificate",
  App_Certificates_custom_create: "createAppCustomCertificate",
  App_Certificates_show: "getAppCertificate",
  App_Certificates_delete: "deleteAppCertificate",
  App_Certificates_acme_delete: "deleteAppAcmeCertificate",
  App_Certificates_check: "checkAppCertificate",
  App_Certificates_custom_delete: "deleteAppCustomCertificate",
  App_create_deploy_token: "createAppDeployToken",
  App_IPAssignments_list: "listAppIPAssignments",
  App_IPAssignments_create: "createAppIPAssignment",
  App_IPAssignments_delete: "deleteAppIPAssignment",
  Machines_list: "listMachines",
  Machines_create: "createMachine",
  Machines_show: "getMachine",
  Machines_update: "updateMachine",
  Machines_delete: "deleteMachine",
  Machines_cordon: "cordonMachine",
  Machines_list_events: "listMachineEvents",
  Machines_exec: "execMachine",
  Machines_show_lease: "getMachineLease",
  Machines_create_lease: "createMachineLease",
  Machines_release_lease: "releaseMachineLease",
  Machines_get_memory: "getMachineMemory",
  Machines_set_memory_limit: "setMachineMemoryLimit",
  Machines_reclaim_memory: "reclaimMachineMemory",
  Machines_show_metadata: "getMachineMetadata",
  Machines_get_metadata_key: "getMachineMetadataKey",
  Machines_upsert_metadata: "upsertMachineMetadata",
  Machines_delete_metadata: "deleteMachineMetadata",
  Machines_list_processes: "listMachineProcesses",
  Machines_restart: "restartMachine",
  Machines_signal: "signalMachine",
  Machines_start: "startMachine",
  Machines_stop: "stopMachine",
  Machines_suspend: "suspendMachine",
  Machines_uncordon: "uncordonMachine",
  Machines_list_versions: "listMachineVersions",
  Machines_wait: "waitMachine",
  Secretkeys_list: "listSecretKeys",
  Secretkey_get: "getSecretKey",
  Secretkey_set: "setSecretKey",
  Secretkey_delete: "deleteSecretKey",
  Secretkey_decrypt: "decryptSecretKey",
  Secretkey_encrypt: "encryptSecretKey",
  Secretkey_generate: "generateSecretKey",
  Secretkey_sign: "signSecretKey",
  Secretkey_verify: "verifySecretKey",
  Secrets_list: "listSecrets",
  Secrets_update: "updateSecrets",
  Secret_get: "getSecret",
  Secret_create: "createSecret",
  Secret_delete: "deleteSecret",
  Volumes_list: "listVolumes",
  Volumes_create: "createVolume",
  Volumes_get_by_id: "getVolumeById",
  Volumes_update: "updateVolume",
  Volume_delete: "deleteVolume",
  Volumes_extend: "extendVolume",
  Volumes_list_snapshots: "listVolumeSnapshots",
  Machines_org_list: "listOrgMachines",
  Volumes_org_list: "listOrgVolumes",
  Platform_placements_post: "getPlacements",
  Platform_regions_get: "getRegions",
  Tokens_authenticate: "authenticateToken",
  Tokens_authorize: "authorizeToken",
  CurrentToken_show: "getCurrentToken",
  Tokens_request_Kms: "requestKmsToken",
  Tokens_request_OIDC: "requestOidcToken",
};

const METADATA_PATH = "/v1/apps/{app_name}/machines/{machine_id}/metadata";

export const rewriteMachinesOperationId = (
  operationId: string,
  ctx: OperationIdContext,
): string | undefined => {
  if (ctx.path === METADATA_PATH && ctx.method === "put") {
    return "updateMachineMetadata";
  }
  if (ctx.path === METADATA_PATH && ctx.method === "patch") {
    return "patchMachineMetadata";
  }
  return MACHINES_OPERATION_IDS[operationId];
};
