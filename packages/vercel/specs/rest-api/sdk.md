---
title: Vercel SDK
product: vercel
url: /docs/rest-api/sdk
canonical_url: "https://vercel.com/docs/rest-api/sdk"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api/sdk/access-groups/reads-an-access-group.md
  - /docs/rest-api/sdk/access-groups/update-an-access-group.md
  - /docs/rest-api/sdk/access-groups/deletes-an-access-group.md
  - /docs/rest-api/sdk/access-groups/list-members-of-an-access-group.md
  - /docs/rest-api/sdk/access-groups/list-access-groups-for-a-team-project-or-member.md
summary: Learn about vercel sdk on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Vercel SDK Reference

The [`@vercel/sdk`](https://www.npmjs.com/package/@vercel/sdk) is a type-safe Typescript SDK that allows you to access the resources and methods of the Vercel REST API. Learn how to [install it](https://vercel.com/docs/rest-api/sdk#installing-vercel-sdk) and [authenticate](https://vercel.com/docs/rest-api/sdk#authentication) with a Vercel access token.

## access-groups

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/access-groups/{idOrName}`](/docs/rest-api/sdk/access-groups/reads-an-access-group.md) | Reads an access group |
| **POST** | [`/v1/access-groups/{idOrName}`](/docs/rest-api/sdk/access-groups/update-an-access-group.md) | Update an access group |
| **DELETE** | [`/v1/access-groups/{idOrName}`](/docs/rest-api/sdk/access-groups/deletes-an-access-group.md) | Deletes an access group |
| **GET** | [`/v1/access-groups/{idOrName}/members`](/docs/rest-api/sdk/access-groups/list-members-of-an-access-group.md) | List members of an access group |
| **GET** | [`/v1/access-groups`](/docs/rest-api/sdk/access-groups/list-access-groups-for-a-team-project-or-member.md) | List access groups for a team, project or member |
| **POST** | [`/v1/access-groups`](/docs/rest-api/sdk/access-groups/creates-an-access-group.md) | Creates an access group |
| **GET** | [`/v1/access-groups/{idOrName}/projects`](/docs/rest-api/sdk/access-groups/list-projects-of-an-access-group.md) | List projects of an access group |
| **POST** | [`/v1/access-groups/{accessGroupIdOrName}/projects`](/docs/rest-api/sdk/access-groups/create-an-access-group-project.md) | Create an access group project |
| **GET** | [`/v1/access-groups/{accessGroupIdOrName}/projects/{projectId}`](/docs/rest-api/sdk/access-groups/reads-an-access-group-project.md) | Reads an access group project |
| **PATCH** | [`/v1/access-groups/{accessGroupIdOrName}/projects/{projectId}`](/docs/rest-api/sdk/access-groups/update-an-access-group-project.md) | Update an access group project |
| **DELETE** | [`/v1/access-groups/{accessGroupIdOrName}/projects/{projectId}`](/docs/rest-api/sdk/access-groups/delete-an-access-group-project.md) | Delete an access group project |

## ai-gateway

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/ai-gateway/rules`](/docs/rest-api/sdk/ai-gateway/list-rules.md) | List rules |
| **POST** | [`/v1/ai-gateway/rules`](/docs/rest-api/sdk/ai-gateway/create-rule.md) | Create rule |
| **PATCH** | [`/v1/ai-gateway/rules`](/docs/rest-api/sdk/ai-gateway/update-rule.md) | Update rule |
| **DELETE** | [`/v1/ai-gateway/rules`](/docs/rest-api/sdk/ai-gateway/delete-rule.md) | Delete rule |

## artifacts

| Method | Endpoint | Description |
|---|---|---|
| **POST** | [`/v8/artifacts/events`](/docs/rest-api/sdk/artifacts/record-an-artifacts-cache-usage-event.md) | Record an artifacts cache usage event |
| **GET** | [`/v8/artifacts/status`](/docs/rest-api/sdk/artifacts/get-status-of-remote-caching-for-this-principal.md) | Get status of Remote Caching for this principal |
| **GET** | [`/v8/artifacts/{hash}`](/docs/rest-api/sdk/artifacts/download-a-cache-artifact.md) | Download a cache artifact |
| **PUT** | [`/v8/artifacts/{hash}`](/docs/rest-api/sdk/artifacts/upload-a-cache-artifact.md) | Upload a cache artifact |
| **HEAD** | [`/v8/artifacts/{hash}`](/docs/rest-api/sdk/artifacts/check-if-a-cache-artifact-exists.md) | Check if a cache artifact exists |
| **POST** | [`/v8/artifacts`](/docs/rest-api/sdk/artifacts/query-information-about-an-artifact.md) | Query information about an artifact |
| **DELETE** | [`/v8/artifacts`](/docs/rest-api/sdk/artifacts/delete-all-cache-artifacts.md) | Delete all cache artifacts |

## billing

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/billing/charges`](/docs/rest-api/sdk/billing/list-focus-billing-charges.md) | List FOCUS billing charges |
| **GET** | [`/v1/billing/contract-commitments`](/docs/rest-api/sdk/billing/list-focus-contract-commitments.md) | List FOCUS contract commitments |
| **POST** | [`/v1/billing/buy`](/docs/rest-api/sdk/billing/purchase-credits.md) | Purchase credits |

## bulk-redirects

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/bulk-redirects`](/docs/rest-api/sdk/bulk-redirects/gets-project-level-redirects.md) | Gets project-level redirects. |
| **PUT** | [`/v1/bulk-redirects`](/docs/rest-api/sdk/bulk-redirects/stages-new-redirects-for-a-project.md) | Stages new redirects for a project. |
| **PATCH** | [`/v1/bulk-redirects`](/docs/rest-api/sdk/bulk-redirects/edit-a-project-level-redirect.md) | Edit a project-level redirect. |
| **DELETE** | [`/v1/bulk-redirects`](/docs/rest-api/sdk/bulk-redirects/delete-project-level-redirects.md) | Delete project-level redirects. |
| **POST** | [`/v1/bulk-redirects/restore`](/docs/rest-api/sdk/bulk-redirects/restore-staged-project-level-redirects-to-their-production-version.md) | Restore staged project-level redirects to their production version. |
| **GET** | [`/v1/bulk-redirects/versions`](/docs/rest-api/sdk/bulk-redirects/get-the-version-history-for-a-project-s-redirects.md) | Get the version history for a project's redirects. |
| **POST** | [`/v1/bulk-redirects/versions`](/docs/rest-api/sdk/bulk-redirects/promote-a-staging-version-to-production-or-restore-a-previous-production-version.md) | Promote a staging version to production or restore a previous production version. |

## checks-v2

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v2/projects/{projectIdOrName}/checks`](/docs/rest-api/sdk/checks-v2/list-all-checks-for-a-project.md) | List all checks for a project |
| **POST** | [`/v2/projects/{projectIdOrName}/checks`](/docs/rest-api/sdk/checks-v2/create-a-check.md) | Create a check |
| **GET** | [`/v2/projects/{projectIdOrName}/checks/{checkId}`](/docs/rest-api/sdk/checks-v2/get-a-check.md) | Get a check |
| **PATCH** | [`/v2/projects/{projectIdOrName}/checks/{checkId}`](/docs/rest-api/sdk/checks-v2/update-a-check.md) | Update a check |
| **DELETE** | [`/v2/projects/{projectIdOrName}/checks/{checkId}`](/docs/rest-api/sdk/checks-v2/delete-a-check.md) | Delete a check |
| **GET** | [`/v2/projects/{projectIdOrName}/checks/{checkId}/runs`](/docs/rest-api/sdk/checks-v2/list-runs-for-a-check.md) | List runs for a check |
| **GET** | [`/v2/deployments/{deploymentId}/check-runs`](/docs/rest-api/sdk/checks-v2/list-check-runs-for-a-deployment.md) | List check runs for a deployment |
| **POST** | [`/v2/deployments/{deploymentId}/check-runs`](/docs/rest-api/sdk/checks-v2/create-a-check-run.md) | Create a check run |
| **GET** | [`/v2/deployments/{deploymentId}/check-runs/{checkRunId}`](/docs/rest-api/sdk/checks-v2/get-a-check-run.md) | Get a check run |
| **PATCH** | [`/v2/deployments/{deploymentId}/check-runs/{checkRunId}`](/docs/rest-api/sdk/checks-v2/update-a-check-run.md) | Update a check run |

## networking

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/connect/networks`](/docs/rest-api/sdk/networking/list-secure-compute-networks.md) | List Secure Compute networks |
| **POST** | [`/v1/connect/networks`](/docs/rest-api/sdk/networking/create-a-secure-compute-network.md) | Create a Secure Compute network |
| **GET** | [`/v1/connect/networks/{networkId}`](/docs/rest-api/sdk/networking/read-a-secure-compute-network.md) | Read a Secure Compute network |
| **PATCH** | [`/v1/connect/networks/{networkId}`](/docs/rest-api/sdk/networking/update-a-secure-compute-network.md) | Update a Secure Compute network |
| **DELETE** | [`/v1/connect/networks/{networkId}`](/docs/rest-api/sdk/networking/delete-a-secure-compute-network.md) | Delete a Secure Compute network |
| **PATCH** | [`/v1/projects/{idOrName}/shared-connect-links`](/docs/rest-api/sdk/networking/configures-static-ips-for-a-project.md) | Configures Static IPs for a project |

## connect

| Method | Endpoint | Description |
|---|---|---|
| **POST** | [`/v1/connect/connectors`](/docs/rest-api/sdk/connect/create-a-connector.md) | Create a connector |
| **POST** | [`/v1/connect/token/{connector}`](/docs/rest-api/sdk/connect/get-a-connect-token.md) | Get a Connect token |
| **POST** | [`/v1/connect/token/{connector}/import`](/docs/rest-api/sdk/connect/import-connect-tokens.md) | Import Connect tokens |
| **POST** | [`/v1/connect/authorize/{connector}`](/docs/rest-api/sdk/connect/create-a-connect-authorization-request.md) | Create a Connect authorization request |
| **POST** | [`/v1/connect/install/{connector}`](/docs/rest-api/sdk/connect/create-a-connect-installation-request.md) | Create a Connect installation request |

## deployments

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v3/deployments/{idOrUrl}/events`](/docs/rest-api/sdk/deployments/get-deployment-events.md) | Get deployment events |
| **PATCH** | [`/v1/deployments/{deploymentId}/integrations/{integrationConfigurationId}/resources/{resourceId}/actions/{action}`](/docs/rest-api/sdk/deployments/update-deployment-integration-action.md) | Update deployment integration action |
| **GET** | [`/v13/deployments/{idOrUrl}`](/docs/rest-api/sdk/deployments/get-a-deployment-by-id-or-url.md) | Get a deployment by ID or URL |
| **POST** | [`/v13/deployments`](/docs/rest-api/sdk/deployments/create-a-new-deployment.md) | Create a new deployment |
| **PATCH** | [`/v12/deployments/{id}/cancel`](/docs/rest-api/sdk/deployments/cancel-a-deployment.md) | Cancel a deployment |
| **POST** | [`/v2/files`](/docs/rest-api/sdk/deployments/upload-deployment-files.md) | Upload Deployment Files |
| **GET** | [`/v6/deployments/{id}/files`](/docs/rest-api/sdk/deployments/list-deployment-files.md) | List Deployment Files |
| **GET** | [`/v8/deployments/{id}/files/{fileId}`](/docs/rest-api/sdk/deployments/get-deployment-file-contents.md) | Get Deployment File Contents |
| **GET** | [`/v7/deployments`](/docs/rest-api/sdk/deployments/list-deployments.md) | List deployments |
| **DELETE** | [`/v13/deployments/{id}`](/docs/rest-api/sdk/deployments/delete-a-deployment.md) | Delete a Deployment |

## dns

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v5/domains/{domain}/records`](/docs/rest-api/sdk/dns/list-existing-dns-records.md) | List existing DNS records |
| **POST** | [`/v2/domains/{domain}/records`](/docs/rest-api/sdk/dns/create-a-dns-record.md) | Create a DNS record |
| **PATCH** | [`/v1/domains/records/{recordId}`](/docs/rest-api/sdk/dns/update-an-existing-dns-record.md) | Update an existing DNS record |
| **DELETE** | [`/v2/domains/{domain}/records/{recordId}`](/docs/rest-api/sdk/dns/delete-a-dns-record.md) | Delete a DNS record |

## Other

| Method | Endpoint | Description |
|---|---|---|
| **PUT** | [`/domains/{domain}/records`](/docs/rest-api/sdk/untagged/replacedomainsbydomainrecords.md) | PUT /domains/{domain}/records |
| **GET** | [`/domains/records/{recordId}`](/docs/rest-api/sdk/untagged/getdomainsrecordsbyrecordid.md) | GET /domains/records/{recordId} |
| **POST** | [`/api-keys`](/docs/rest-api/sdk/untagged/createapikeys.md) | POST /api-keys |
| **POST** | [`/v2/observability/query`](/docs/rest-api/sdk/untagged/createobservabilityquery.md) | POST /v2/observability/query |
| **GET** | [`/v2/observability/schema`](/docs/rest-api/sdk/untagged/getobservabilityschema.md) | GET /v2/observability/schema |
| **GET** | [`/v2/observability/schema/{metricId}`](/docs/rest-api/sdk/untagged/getobservabilityschemabymetricid.md) | GET /v2/observability/schema/{metricId} |
| **POST** | [`/speed-insights/toggle`](/docs/rest-api/sdk/untagged/createspeedinsightstoggle.md) | POST /speed-insights/toggle |
| **GET** | [`/storage/stores/{id}`](/docs/rest-api/sdk/untagged/getstoragestoresbyid.md) | GET /storage/stores/{id} |
| **POST** | [`/storage/stores/blob`](/docs/rest-api/sdk/untagged/createstoragestoresblob.md) | POST /storage/stores/blob |
| **DELETE** | [`/storage/stores/blob/{id}`](/docs/rest-api/sdk/untagged/deletestoragestoresblobbyid.md) | DELETE /storage/stores/blob/{id} |
| **GET** | [`/v2/`](/docs/rest-api/sdk/untagged/getroot.md) | GET /v2/ |
| **GET** | [`/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/{digest}`](/docs/rest-api/sdk/untagged/getbyteamslugbyprojectslugbyrepositorynameblobsbydigest.md) | GET /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/{digest} |
| **DELETE** | [`/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/{digest}`](/docs/rest-api/sdk/untagged/deletebyteamslugbyprojectslugbyrepositorynameblobsbydigest.md) | DELETE /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/{digest} |
| **HEAD** | [`/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/{digest}`](/docs/rest-api/sdk/untagged/headbyteamslugbyprojectslugbyrepositorynameblobsbydigest.md) | HEAD /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/{digest} |
| **GET** | [`/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid}`](/docs/rest-api/sdk/untagged/getbyteamslugbyprojectslugbyrepositorynameblobsuploadsbyuuid.md) | GET /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid} |
| **PUT** | [`/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid}`](/docs/rest-api/sdk/untagged/replacebyteamslugbyprojectslugbyrepositorynameblobsuploadsbyuuid.md) | PUT /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid} |
| **PATCH** | [`/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid}`](/docs/rest-api/sdk/untagged/updatebyteamslugbyprojectslugbyrepositorynameblobsuploadsbyuuid.md) | PATCH /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid} |
| **DELETE** | [`/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid}`](/docs/rest-api/sdk/untagged/deletebyteamslugbyprojectslugbyrepositorynameblobsuploadsbyuuid.md) | DELETE /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/{uuid} |
| **POST** | [`/v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/`](/docs/rest-api/sdk/untagged/createbyteamslugbyprojectslugbyrepositorynameblobsuploads.md) | POST /v2/{teamSlug}/{projectSlug}/{repositoryName}/blobs/uploads/ |
| **GET** | [`/v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference}`](/docs/rest-api/sdk/untagged/getbyteamslugbyprojectslugbyrepositorynamemanifestsbyreference.md) | GET /v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference} |
| **PUT** | [`/v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference}`](/docs/rest-api/sdk/untagged/replacebyteamslugbyprojectslugbyrepositorynamemanifestsbyreference.md) | PUT /v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference} |
| **DELETE** | [`/v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference}`](/docs/rest-api/sdk/untagged/deletebyteamslugbyprojectslugbyrepositorynamemanifestsbyreference.md) | DELETE /v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference} |
| **HEAD** | [`/v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference}`](/docs/rest-api/sdk/untagged/headbyteamslugbyprojectslugbyrepositorynamemanifestsbyreference.md) | HEAD /v2/{teamSlug}/{projectSlug}/{repositoryName}/manifests/{reference} |
| **GET** | [`/v2/{teamSlug}/{projectSlug}/{repositoryName}/tags/list`](/docs/rest-api/sdk/untagged/getbyteamslugbyprojectslugbyrepositorynametagslist.md) | GET /v2/{teamSlug}/{projectSlug}/{repositoryName}/tags/list |
| **POST** | [`/web/insights/toggle`](/docs/rest-api/sdk/untagged/createwebinsightstoggle.md) | POST /web/insights/toggle |

## domains-registrar

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/registrar/tlds/supported`](/docs/rest-api/sdk/domains-registrar/get-supported-tlds.md) | Get supported TLDs |
| **GET** | [`/v1/registrar/tlds/{tld}`](/docs/rest-api/sdk/domains-registrar/get-tld.md) | Get TLD |
| **GET** | [`/v1/registrar/tlds/{tld}/price`](/docs/rest-api/sdk/domains-registrar/get-tld-price-data.md) | Get TLD price data |
| **GET** | [`/v1/registrar/domains/{domain}/availability`](/docs/rest-api/sdk/domains-registrar/get-availability-for-a-domain.md) | Get availability for a domain |
| **GET** | [`/v1/registrar/domains/{domain}/price`](/docs/rest-api/sdk/domains-registrar/get-price-data-for-a-domain.md) | Get price data for a domain |
| **POST** | [`/v1/registrar/domains/availability`](/docs/rest-api/sdk/domains-registrar/get-availability-for-multiple-domains.md) | Get availability for multiple domains |
| **GET** | [`/v1/registrar/domains/{domain}/auth-code`](/docs/rest-api/sdk/domains-registrar/get-the-auth-code-for-a-domain.md) | Get the auth code for a domain |
| **POST** | [`/v1/registrar/domains/{domain}/buy`](/docs/rest-api/sdk/domains-registrar/buy-a-domain.md) | Buy a domain |
| **POST** | [`/v1/registrar/domains/buy`](/docs/rest-api/sdk/domains-registrar/buy-multiple-domains.md) | Buy multiple domains |
| **GET** | [`/v1/registrar/domains/{domain}/transfer`](/docs/rest-api/sdk/domains-registrar/get-a-domain-s-transfer-status.md) | Get a domain's transfer status |
| **POST** | [`/v1/registrar/domains/{domain}/transfer`](/docs/rest-api/sdk/domains-registrar/transfer-in-a-domain.md) | Transfer-in a domain |
| **POST** | [`/v1/registrar/domains/{domain}/renew`](/docs/rest-api/sdk/domains-registrar/renew-a-domain.md) | Renew a domain |
| **PATCH** | [`/v1/registrar/domains/{domain}/auto-renew`](/docs/rest-api/sdk/domains-registrar/update-auto-renew-for-a-domain.md) | Update auto-renew for a domain |
| **PATCH** | [`/v1/registrar/domains/{domain}/nameservers`](/docs/rest-api/sdk/domains-registrar/update-nameservers-for-a-domain.md) | Update nameservers for a domain |
| **GET** | [`/v1/registrar/domains/{domain}/contact-verification`](/docs/rest-api/sdk/domains-registrar/get-contact-verification-status-for-a-domain.md) | Get contact verification status for a domain |
| **GET** | [`/v1/registrar/domains/{domain}/contact-info/schema`](/docs/rest-api/sdk/domains-registrar/get-contact-info-schema.md) | Get contact info schema |
| **GET** | [`/v1/registrar/orders/{orderId}`](/docs/rest-api/sdk/domains-registrar/get-a-domain-order.md) | Get a domain order |

## domains

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v6/domains/{domain}/config`](/docs/rest-api/sdk/domains/get-a-domain-s-configuration.md) | Get a Domain's configuration |
| **GET** | [`/v9/domains/{domain}/verification`](/docs/rest-api/sdk/domains/get-domain-verification-record.md) | Get Domain Verification Record |
| **POST** | [`/v9/domains/{domain}/claim`](/docs/rest-api/sdk/domains/claim-domain-ownership.md) | Claim Domain Ownership |
| **GET** | [`/v1/domains/{domain}/project-domains`](/docs/rest-api/sdk/domains/list-project-domains-by-apex-domain.md) | List Project Domains by Apex Domain |
| **GET** | [`/v5/domains/{domain}`](/docs/rest-api/sdk/domains/get-information-for-a-single-domain.md) | Get Information for a Single Domain |
| **GET** | [`/v5/domains`](/docs/rest-api/sdk/domains/list-all-the-domains.md) | List all the domains |
| **POST** | [`/v7/domains`](/docs/rest-api/sdk/domains/add-an-existing-domain-to-the-vercel-platform.md) | Add an existing domain to the Vercel platform |
| **PATCH** | [`/v3/domains/{domain}`](/docs/rest-api/sdk/domains/update-or-move-apex-domain.md) | Update or move apex domain |
| **DELETE** | [`/v6/domains/{domain}`](/docs/rest-api/sdk/domains/remove-a-domain-by-name.md) | Remove a domain by name |

## drains

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/drains`](/docs/rest-api/sdk/drains/retrieve-a-list-of-all-drains.md) | Retrieve a list of all Drains |
| **POST** | [`/v1/drains`](/docs/rest-api/sdk/drains/create-a-new-drain.md) | Create a new Drain |
| **GET** | [`/v1/drains/{id}`](/docs/rest-api/sdk/drains/find-a-drain-by-id.md) | Find a Drain by id |
| **PATCH** | [`/v1/drains/{id}`](/docs/rest-api/sdk/drains/update-an-existing-drain.md) | Update an existing Drain |
| **DELETE** | [`/v1/drains/{id}`](/docs/rest-api/sdk/drains/delete-a-drain.md) | Delete a drain |
| **POST** | [`/v1/drains/test`](/docs/rest-api/sdk/drains/validate-drain-delivery-configuration.md) | Validate Drain delivery configuration |

## edge-cache

| Method | Endpoint | Description |
|---|---|---|
| **POST** | [`/v1/edge-cache/invalidate-by-tags`](/docs/rest-api/sdk/edge-cache/invalidate-by-tag.md) | Invalidate by tag |
| **POST** | [`/v1/edge-cache/dangerously-delete-by-tags`](/docs/rest-api/sdk/edge-cache/dangerously-delete-by-tag.md) | Dangerously delete by tag |
| **POST** | [`/v1/edge-cache/invalidate-by-src-images`](/docs/rest-api/sdk/edge-cache/invalidate-by-source-image.md) | Invalidate by source image |
| **POST** | [`/v1/edge-cache/dangerously-delete-by-src-images`](/docs/rest-api/sdk/edge-cache/dangerously-delete-by-source-image.md) | Dangerously delete by source image |

## global-config

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/global-config`](/docs/rest-api/sdk/global-config/get-global-configs.md) | Get Global Configs |
| **POST** | [`/v1/global-config`](/docs/rest-api/sdk/global-config/create-a-global-config.md) | Create a Global Config |
| **GET** | [`/v1/global-config/{edgeConfigId}`](/docs/rest-api/sdk/global-config/get-a-global-config.md) | Get a Global Config |
| **PUT** | [`/v1/global-config/{edgeConfigId}`](/docs/rest-api/sdk/global-config/update-a-global-config.md) | Update a Global Config |
| **DELETE** | [`/v1/global-config/{edgeConfigId}`](/docs/rest-api/sdk/global-config/delete-a-global-config.md) | Delete a Global Config |
| **GET** | [`/v1/global-config/{edgeConfigId}/items`](/docs/rest-api/sdk/global-config/get-global-config-items.md) | Get Global Config items |
| **PATCH** | [`/v1/global-config/{edgeConfigId}/items`](/docs/rest-api/sdk/global-config/update-global-config-items-in-batch.md) | Update Global Config items in batch |
| **GET** | [`/v1/global-config/{edgeConfigId}/schema`](/docs/rest-api/sdk/global-config/get-global-config-schema.md) | Get Global Config schema |
| **POST** | [`/v1/global-config/{edgeConfigId}/schema`](/docs/rest-api/sdk/global-config/update-global-config-schema.md) | Update Global Config schema |
| **DELETE** | [`/v1/global-config/{edgeConfigId}/schema`](/docs/rest-api/sdk/global-config/delete-a-global-config-s-schema.md) | Delete a Global Config's schema |
| **GET** | [`/v1/global-config/{edgeConfigId}/item/{edgeConfigItemKey}`](/docs/rest-api/sdk/global-config/get-a-global-config-item.md) | Get a Global Config item |
| **GET** | [`/v1/global-config/{edgeConfigId}/tokens`](/docs/rest-api/sdk/global-config/get-all-tokens-of-a-global-config.md) | Get all tokens of a Global Config |
| **DELETE** | [`/v1/global-config/{edgeConfigId}/tokens`](/docs/rest-api/sdk/global-config/delete-one-or-more-global-config-tokens.md) | Delete one or more Global Config tokens |
| **GET** | [`/v1/global-config/{edgeConfigId}/token/{token}`](/docs/rest-api/sdk/global-config/get-global-config-token-meta-data.md) | Get Global Config token meta data |
| **POST** | [`/v1/global-config/{edgeConfigId}/token`](/docs/rest-api/sdk/global-config/create-a-global-config-token.md) | Create a Global Config token |
| **GET** | [`/v1/global-config/{edgeConfigId}/backups/{edgeConfigBackupVersionId}`](/docs/rest-api/sdk/global-config/get-global-config-backup.md) | Get Global Config backup |
| **POST** | [`/v1/global-config/{edgeConfigId}/backups/{edgeConfigBackupVersionId}/restore`](/docs/rest-api/sdk/global-config/restore-global-config-backup.md) | Restore Global Config backup |
| **GET** | [`/v1/global-config/{edgeConfigId}/backups`](/docs/rest-api/sdk/global-config/get-global-config-backups.md) | Get Global Config backups |

## environment

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/env`](/docs/rest-api/sdk/environment/lists-all-shared-environment-variables-for-a-team.md) | Lists all Shared Environment Variables for a team |
| **POST** | [`/v1/env`](/docs/rest-api/sdk/environment/create-one-or-more-shared-environment-variables.md) | Create one or more shared environment variables |
| **PATCH** | [`/v1/env`](/docs/rest-api/sdk/environment/updates-one-or-more-shared-environment-variables.md) | Updates one or more shared environment variables |
| **DELETE** | [`/v1/env`](/docs/rest-api/sdk/environment/delete-one-or-more-env-var.md) | Delete one or more Env Var |
| **GET** | [`/v1/env/{id}`](/docs/rest-api/sdk/environment/retrieve-the-decrypted-value-of-a-shared-environment-variable-by-id.md) | Retrieve the decrypted value of a Shared Environment Variable by id. |
| **PATCH** | [`/v1/env/{id}/unlink/{projectId}`](/docs/rest-api/sdk/environment/disconnects-a-shared-environment-variable-for-a-given-project.md) | Disconnects a shared environment variable for a given project |
| **GET** | [`/v9/projects/{idOrName}/custom-environments`](/docs/rest-api/sdk/environment/retrieve-custom-environments.md) | Retrieve custom environments |
| **POST** | [`/v9/projects/{idOrName}/custom-environments`](/docs/rest-api/sdk/environment/create-a-custom-environment-for-the-current-project.md) | Create a custom environment for the current project. |
| **GET** | [`/v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}`](/docs/rest-api/sdk/environment/retrieve-a-custom-environment.md) | Retrieve a custom environment |
| **PATCH** | [`/v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}`](/docs/rest-api/sdk/environment/update-a-custom-environment.md) | Update a custom environment |
| **DELETE** | [`/v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}`](/docs/rest-api/sdk/environment/remove-a-custom-environment.md) | Remove a custom environment |

## user

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v3/events`](/docs/rest-api/sdk/user/list-user-events.md) | List User Events |
| **GET** | [`/v1/events/types`](/docs/rest-api/sdk/user/list-event-types.md) | List Event Types |
| **GET** | [`/v2/user`](/docs/rest-api/sdk/user/get-the-user.md) | Get the User |
| **DELETE** | [`/v1/user`](/docs/rest-api/sdk/user/delete-user-account.md) | Delete User Account |

## feature-flags

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v2/projects/{projectIdOrName}/feature-flags/flags`](/docs/rest-api/sdk/feature-flags/list-flags.md) | List flags |
| **GET** | [`/v1/projects/{projectIdOrName}/feature-flags/flags`](/docs/rest-api/sdk/feature-flags/list-flags-1.md) | List flags |
| **PUT** | [`/v1/projects/{projectIdOrName}/feature-flags/flags`](/docs/rest-api/sdk/feature-flags/create-a-flag.md) | Create a flag |
| **GET** | [`/v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}`](/docs/rest-api/sdk/feature-flags/get-a-flag.md) | Get a flag |
| **PATCH** | [`/v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}`](/docs/rest-api/sdk/feature-flags/update-a-flag.md) | Update a flag |
| **DELETE** | [`/v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}`](/docs/rest-api/sdk/feature-flags/delete-a-flag.md) | Delete a flag |
| **GET** | [`/v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}/versions`](/docs/rest-api/sdk/feature-flags/list-flag-versions.md) | List flag versions |
| **GET** | [`/v1/projects/{projectIdOrName}/feature-flags/settings`](/docs/rest-api/sdk/feature-flags/get-project-flag-settings.md) | Get project flag settings |
| **PATCH** | [`/v1/projects/{projectIdOrName}/feature-flags/settings`](/docs/rest-api/sdk/feature-flags/update-project-flag-settings.md) | Update project flag settings |
| **GET** | [`/v1/teams/{teamId}/feature-flags/settings`](/docs/rest-api/sdk/feature-flags/list-team-project-flag-settings.md) | List team project flag settings |
| **GET** | [`/v2/teams/{teamId}/feature-flags/flags`](/docs/rest-api/sdk/feature-flags/list-all-flags-for-a-team.md) | List all flags for a team |
| **GET** | [`/v1/teams/{teamId}/feature-flags/flags`](/docs/rest-api/sdk/feature-flags/list-all-flags-for-a-team-1.md) | List all flags for a team |
| **GET** | [`/v1/projects/{projectIdOrName}/feature-flags/segments`](/docs/rest-api/sdk/feature-flags/list-segments.md) | List segments |
| **PUT** | [`/v1/projects/{projectIdOrName}/feature-flags/segments`](/docs/rest-api/sdk/feature-flags/create-a-segment.md) | Create a segment |
| **GET** | [`/v1/projects/{projectIdOrName}/feature-flags/segments/{segmentIdOrSlug}`](/docs/rest-api/sdk/feature-flags/get-a-segment.md) | Get a segment |
| **PATCH** | [`/v1/projects/{projectIdOrName}/feature-flags/segments/{segmentIdOrSlug}`](/docs/rest-api/sdk/feature-flags/update-a-segment.md) | Update a segment |
| **DELETE** | [`/v1/projects/{projectIdOrName}/feature-flags/segments/{segmentIdOrSlug}`](/docs/rest-api/sdk/feature-flags/delete-a-segment.md) | Delete a segment |
| **GET** | [`/v1/deployments/{deploymentId}/feature-flags`](/docs/rest-api/sdk/feature-flags/retrieve-the-feature-flags-of-a-deployment.md) | Retrieve the feature flags of a deployment |
| **GET** | [`/v1/projects/{projectIdOrName}/feature-flags/sdk-keys`](/docs/rest-api/sdk/feature-flags/get-all-sdk-keys.md) | Get all SDK keys |
| **PUT** | [`/v1/projects/{projectIdOrName}/feature-flags/sdk-keys`](/docs/rest-api/sdk/feature-flags/create-an-sdk-key.md) | Create an SDK key |
| **DELETE** | [`/v1/projects/{projectIdOrName}/feature-flags/sdk-keys/{hashKey}`](/docs/rest-api/sdk/feature-flags/delete-an-sdk-key.md) | Delete an SDK key |

## integrations

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/integrations/git-namespaces`](/docs/rest-api/sdk/integrations/list-git-namespaces-by-provider.md) | List git namespaces by provider |
| **GET** | [`/v1/integrations/search-repo`](/docs/rest-api/sdk/integrations/list-git-repositories-linked-to-namespace-by-provider.md) | List git repositories linked to namespace by provider |
| **GET** | [`/v1/integrations/integration/{integrationIdOrSlug}/products/{productIdOrSlug}/plans`](/docs/rest-api/sdk/integrations/list-integration-billing-plans.md) | List integration billing plans |
| **POST** | [`/v1/integrations/installations/{integrationConfigurationId}/resources/{resourceId}/connections`](/docs/rest-api/sdk/integrations/connect-integration-resource-to-project.md) | Connect integration resource to project |
| **GET** | [`/v1/integrations/configurations`](/docs/rest-api/sdk/integrations/get-configurations-for-the-authenticated-user-or-team.md) | Get configurations for the authenticated user or team |
| **GET** | [`/v1/integrations/configuration/{id}`](/docs/rest-api/sdk/integrations/retrieve-an-integration-configuration.md) | Retrieve an integration configuration |
| **DELETE** | [`/v1/integrations/configuration/{id}`](/docs/rest-api/sdk/integrations/delete-an-integration-configuration.md) | Delete an integration configuration |
| **GET** | [`/v1/integrations/configuration/{id}/products`](/docs/rest-api/sdk/integrations/list-products-for-integration-configuration.md) | List products for integration configuration |
| **POST** | [`/v1/storage/stores/integration/direct`](/docs/rest-api/sdk/integrations/create-integration-store-free-and-paid-plans.md) | Create integration store (free and paid plans) |

## marketplace

| Method | Endpoint | Description |
|---|---|---|
| **PATCH** | [`/v1/installations/{integrationConfigurationId}`](/docs/rest-api/sdk/marketplace/update-installation.md) | Update Installation |
| **GET** | [`/v1/installations/{integrationConfigurationId}/account`](/docs/rest-api/sdk/marketplace/get-account-information.md) | Get Account Information |
| **GET** | [`/v1/installations/{integrationConfigurationId}/member/{memberId}`](/docs/rest-api/sdk/marketplace/get-member-information.md) | Get Member Information |
| **POST** | [`/v1/installations/{integrationConfigurationId}/events`](/docs/rest-api/sdk/marketplace/create-event.md) | Create Event |
| **GET** | [`/v1/installations/{integrationConfigurationId}/resources`](/docs/rest-api/sdk/marketplace/get-integration-resources.md) | Get Integration Resources |
| **GET** | [`/v1/installations/{integrationConfigurationId}/resources/{resourceId}`](/docs/rest-api/sdk/marketplace/get-integration-resource.md) | Get Integration Resource |
| **PUT** | [`/v1/installations/{integrationConfigurationId}/resources/{resourceId}`](/docs/rest-api/sdk/marketplace/import-resource.md) | Import Resource |
| **PATCH** | [`/v1/installations/{integrationConfigurationId}/resources/{resourceId}`](/docs/rest-api/sdk/marketplace/update-resource.md) | Update Resource |
| **DELETE** | [`/v1/installations/{integrationConfigurationId}/resources/{resourceId}`](/docs/rest-api/sdk/marketplace/delete-integration-resource.md) | Delete Integration Resource |
| **POST** | [`/v1/installations/{integrationConfigurationId}/billing`](/docs/rest-api/sdk/marketplace/submit-billing-data.md) | Submit Billing Data |
| **POST** | [`/v1/installations/{integrationConfigurationId}/billing/invoices`](/docs/rest-api/sdk/marketplace/submit-invoice.md) | Submit Invoice |
| **POST** | [`/v1/installations/{integrationConfigurationId}/billing/finalize`](/docs/rest-api/sdk/marketplace/finalize-installation.md) | Finalize Installation |
| **GET** | [`/v1/installations/{integrationConfigurationId}/billing/invoices/{invoiceId}`](/docs/rest-api/sdk/marketplace/get-invoice.md) | Get Invoice |
| **POST** | [`/v1/installations/{integrationConfigurationId}/billing/invoices/{invoiceId}/actions`](/docs/rest-api/sdk/marketplace/invoice-actions.md) | Invoice Actions |
| **POST** | [`/v1/installations/{integrationConfigurationId}/billing/balance`](/docs/rest-api/sdk/marketplace/submit-prepayment-balances.md) | Submit Prepayment Balances |
| **PUT** | [`/v1/installations/{integrationConfigurationId}/resources/{resourceId}/secrets`](/docs/rest-api/sdk/marketplace/update-resource-secrets.md) | Update Resource Secrets |
| **POST** | [`/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items`](/docs/rest-api/sdk/marketplace/create-one-or-multiple-experimentation-items.md) | Create one or multiple experimentation items |
| **PATCH** | [`/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}`](/docs/rest-api/sdk/marketplace/patch-an-existing-experimentation-item.md) | Patch an existing experimentation item |
| **DELETE** | [`/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}`](/docs/rest-api/sdk/marketplace/delete-an-existing-experimentation-item.md) | Delete an existing experimentation item |
| **GET** | [`/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/global-config`](/docs/rest-api/sdk/marketplace/get-the-data-of-a-user-provided-global-config.md) | Get the data of a user-provided Global Config |
| **PUT** | [`/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/global-config`](/docs/rest-api/sdk/marketplace/push-data-into-a-user-provided-global-config.md) | Push data into a user-provided Global Config |
| **HEAD** | [`/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/global-config`](/docs/rest-api/sdk/marketplace/get-the-data-of-a-user-provided-global-config-1.md) | Get the data of a user-provided Global Config |

## authentication

| Method | Endpoint | Description |
|---|---|---|
| **POST** | [`/v1/integrations/sso/token`](/docs/rest-api/sdk/authentication/sso-token-exchange.md) | SSO Token Exchange |
| **GET** | [`/v6/user/tokens`](/docs/rest-api/sdk/authentication/list-auth-tokens.md) | List Auth Tokens |
| **POST** | [`/v3/user/tokens`](/docs/rest-api/sdk/authentication/create-an-auth-token.md) | Create an Auth Token |
| **GET** | [`/v5/user/tokens/{tokenId}`](/docs/rest-api/sdk/authentication/get-auth-token-metadata.md) | Get Auth Token Metadata |
| **DELETE** | [`/v3/user/tokens/{tokenId}`](/docs/rest-api/sdk/authentication/delete-an-authentication-token.md) | Delete an authentication token |

## logs

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/projects/{projectId}/deployments/{deploymentId}/runtime-logs`](/docs/rest-api/sdk/logs/get-logs-for-a-deployment.md) | Get logs for a deployment |

## microfrontends

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/microfrontends/groups`](/docs/rest-api/sdk/microfrontends/list-microfrontends-groups.md) | List microfrontends groups |
| **GET** | [`/v1/microfrontends/groups/{groupId}/projects`](/docs/rest-api/sdk/microfrontends/list-projects-in-a-microfrontends-group.md) | List projects in a microfrontends group |
| **GET** | [`/v1/microfrontends/{deploymentId}/config`](/docs/rest-api/sdk/microfrontends/get-microfrontends-config-for-a-deployment.md) | Get microfrontends config for a deployment |
| **GET** | [`/v1/microfrontends/projects/{projectIdOrName}/production-mfe-config`](/docs/rest-api/sdk/microfrontends/get-microfrontends-config-for-a-project.md) | Get microfrontends config for a project |
| **POST** | [`/v1/microfrontends/group`](/docs/rest-api/sdk/microfrontends/create-a-microfrontends-group-with-applications.md) | Create a microfrontends group with applications |

## observability

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/observability/manage/configuration/projects`](/docs/rest-api/sdk/observability/lists-disabled-observability-plus-projects.md) | Lists disabled Observability Plus projects |
| **PUT** | [`/v1/observability/manage/configuration/projects/{projectIdOrName}`](/docs/rest-api/sdk/observability/updates-a-disabled-observability-plus-project-setting.md) | Updates a disabled Observability Plus project setting |

## projectMembers

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/projects/{idOrName}/members`](/docs/rest-api/sdk/projectmembers/list-project-members.md) | List project members |
| **POST** | [`/v1/projects/{idOrName}/members`](/docs/rest-api/sdk/projectmembers/adds-a-new-member-to-a-project.md) | Adds a new member to a project. |
| **DELETE** | [`/v1/projects/{idOrName}/members/{uid}`](/docs/rest-api/sdk/projectmembers/remove-a-project-member.md) | Remove a Project Member |

## project-routes

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/projects/{projectId}/routes`](/docs/rest-api/sdk/project-routes/get-project-routing-rules.md) | Get project routing rules |
| **POST** | [`/v1/projects/{projectId}/routes`](/docs/rest-api/sdk/project-routes/add-a-routing-rule.md) | Add a routing rule |
| **PUT** | [`/v1/projects/{projectId}/routes`](/docs/rest-api/sdk/project-routes/stage-routing-rules.md) | Stage routing rules |
| **DELETE** | [`/v1/projects/{projectId}/routes`](/docs/rest-api/sdk/project-routes/delete-routing-rules.md) | Delete routing rules |
| **PATCH** | [`/v1/projects/{projectId}/routes/{routeId}`](/docs/rest-api/sdk/project-routes/edit-a-routing-rule.md) | Edit a routing rule |
| **POST** | [`/v1/projects/{projectId}/routes/generate`](/docs/rest-api/sdk/project-routes/generate-a-routing-rule-from-natural-language.md) | Generate a routing rule from natural language |
| **GET** | [`/v1/projects/{projectId}/routes/versions`](/docs/rest-api/sdk/project-routes/get-routing-rule-version-history.md) | Get routing rule version history |
| **POST** | [`/v1/projects/{projectId}/routes/versions`](/docs/rest-api/sdk/project-routes/promote-restore-or-discard-a-routing-rule-version.md) | Promote, restore, or discard a routing rule version |

## projects

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v10/projects`](/docs/rest-api/sdk/projects/retrieve-a-list-of-projects.md) | Retrieve a list of projects |
| **GET** | [`/v1/projects/traces`](/docs/rest-api/sdk/projects/get-a-project-trace-by-request-id.md) | Get a project trace by request ID |
| **POST** | [`/v11/projects`](/docs/rest-api/sdk/projects/create-a-new-project.md) | Create a new project |
| **POST** | [`/v1/projects/{idOrName}/token`](/docs/rest-api/sdk/projects/generate-a-project-oidc-token.md) | Generate a project OIDC token |
| **POST** | [`/v1/projects/traces/session`](/docs/rest-api/sdk/projects/create-a-trace-session-token-for-a-deployment.md) | Create a trace session token for a deployment |
| **GET** | [`/v9/projects/{idOrName}`](/docs/rest-api/sdk/projects/find-a-project-by-id-or-name.md) | Find a project by id or name |
| **PATCH** | [`/v9/projects/{idOrName}`](/docs/rest-api/sdk/projects/update-an-existing-project.md) | Update an existing project |
| **DELETE** | [`/v9/projects/{idOrName}`](/docs/rest-api/sdk/projects/delete-a-project.md) | Delete a Project |
| **POST** | [`/v1/projects/{idOrName}/avatar`](/docs/rest-api/sdk/projects/upload-a-project-avatar.md) | Upload a project avatar |
| **GET** | [`/v9/projects/{idOrName}/domains`](/docs/rest-api/sdk/projects/retrieve-project-domains-by-project-by-id-or-name.md) | Retrieve project domains by project by id or name |
| **GET** | [`/v9/projects/{idOrName}/domains/{domain}`](/docs/rest-api/sdk/projects/get-a-project-domain.md) | Get a project domain |
| **PATCH** | [`/v9/projects/{idOrName}/domains/{domain}`](/docs/rest-api/sdk/projects/update-a-project-domain.md) | Update a project domain |
| **DELETE** | [`/v9/projects/{idOrName}/domains/{domain}`](/docs/rest-api/sdk/projects/remove-a-domain-from-a-project.md) | Remove a domain from a project |
| **POST** | [`/v10/projects/{idOrName}/domains`](/docs/rest-api/sdk/projects/add-a-domain-to-a-project.md) | Add a domain to a project |
| **POST** | [`/v1/projects/{idOrName}/domains/{domain}/move`](/docs/rest-api/sdk/projects/move-a-project-domain.md) | Move a project domain |
| **POST** | [`/v9/projects/{idOrName}/domains/{domain}/verify`](/docs/rest-api/sdk/projects/verify-project-domain.md) | Verify project domain |
| **GET** | [`/v10/projects/{idOrName}/env`](/docs/rest-api/sdk/projects/retrieve-the-environment-variables-of-a-project-by-id-or-name.md) | Retrieve the environment variables of a project by id or name |
| **POST** | [`/v10/projects/{idOrName}/env`](/docs/rest-api/sdk/projects/create-one-or-more-environment-variables.md) | Create one or more environment variables |
| **GET** | [`/v1/projects/{idOrName}/env/{id}`](/docs/rest-api/sdk/projects/retrieve-the-decrypted-value-of-an-environment-variable-of-a-project-by-id.md) | Retrieve the decrypted value of an environment variable of a project by id |
| **PATCH** | [`/v9/projects/{idOrName}/env/{id}`](/docs/rest-api/sdk/projects/edit-an-environment-variable.md) | Edit an environment variable |
| **DELETE** | [`/v9/projects/{idOrName}/env/{id}`](/docs/rest-api/sdk/projects/remove-an-environment-variable.md) | Remove an environment variable |
| **DELETE** | [`/v1/projects/{idOrName}/env`](/docs/rest-api/sdk/projects/batch-remove-environment-variables.md) | Batch remove environment variables |
| **POST** | [`/projects/{idOrName}/transfer-request`](/docs/rest-api/sdk/projects/create-project-transfer-request.md) | Create project transfer request |
| **PUT** | [`/projects/transfer-request/{code}`](/docs/rest-api/sdk/projects/accept-project-transfer-request.md) | Accept project transfer request |
| **PATCH** | [`/v1/projects/{idOrName}/protection-bypass`](/docs/rest-api/sdk/projects/update-protection-bypass-for-automation.md) | Update Protection Bypass for Automation |
| **POST** | [`/v1/projects/{projectId}/rollback/{deploymentId}`](/docs/rest-api/sdk/projects/point-production-traffic-to-a-previous-production-deployment-by-id.md) | Point production traffic to a previous production deployment by ID |
| **PATCH** | [`/v1/projects/{projectId}/rollback/{deploymentId}/update-description`](/docs/rest-api/sdk/projects/updates-the-description-for-a-rollback.md) | Updates the description for a rollback |
| **PATCH** | [`/v1/projects/{projectId}/microfrontends`](/docs/rest-api/sdk/projects/update-the-microfrontends-settings.md) | Update the microfrontends settings |
| **POST** | [`/v10/projects/{projectId}/promote/{deploymentId}`](/docs/rest-api/sdk/projects/point-production-traffic-to-a-given-deployment.md) | Point production traffic to a given deployment |
| **GET** | [`/v1/projects/{projectId}/promote/aliases`](/docs/rest-api/sdk/projects/gets-a-list-of-aliases-with-status-for-the-current-promote.md) | Gets a list of aliases with status for the current promote |
| **POST** | [`/v1/projects/{projectId}/pause`](/docs/rest-api/sdk/projects/pause-a-project.md) | Pause a project |
| **POST** | [`/v1/projects/{projectId}/unpause`](/docs/rest-api/sdk/projects/unpause-a-project.md) | Unpause a project |

## rolling-release

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/projects/{idOrName}/rolling-release/billing`](/docs/rest-api/sdk/rolling-release/get-rolling-release-billing-status.md) | Get rolling release billing status |
| **GET** | [`/v1/projects/{idOrName}/rolling-release/config`](/docs/rest-api/sdk/rolling-release/get-rolling-release-configuration.md) | Get rolling release configuration |
| **PATCH** | [`/v1/projects/{idOrName}/rolling-release/config`](/docs/rest-api/sdk/rolling-release/update-the-rolling-release-settings-for-the-project.md) | Update the rolling release settings for the project |
| **DELETE** | [`/v1/projects/{idOrName}/rolling-release/config`](/docs/rest-api/sdk/rolling-release/delete-rolling-release-configuration.md) | Delete rolling release configuration |
| **GET** | [`/v1/projects/{idOrName}/rolling-release`](/docs/rest-api/sdk/rolling-release/get-the-active-rolling-release-information-for-a-project.md) | Get the active rolling release information for a project |
| **POST** | [`/v1/projects/{idOrName}/rolling-release/approve-stage`](/docs/rest-api/sdk/rolling-release/update-the-active-rolling-release-to-the-next-stage-for-a-project.md) | Update the active rolling release to the next stage for a project |
| **POST** | [`/v1/projects/{idOrName}/rolling-release/start`](/docs/rest-api/sdk/rolling-release/start-a-rolling-release-for-the-project.md) | Start a rolling release for the project |
| **POST** | [`/v1/projects/{idOrName}/rolling-release/complete`](/docs/rest-api/sdk/rolling-release/complete-the-rolling-release-for-the-project.md) | Complete the rolling release for the project |

## sandboxes

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v2/sandboxes`](/docs/rest-api/sdk/sandboxes/list-sandboxes.md) | List sandboxes |
| **POST** | [`/v2/sandboxes`](/docs/rest-api/sdk/sandboxes/create-a-named-sandbox.md) | Create a named sandbox |
| **GET** | [`/v2/sandboxes/drives`](/docs/rest-api/sdk/sandboxes/list-drives.md) | List drives |
| **POST** | [`/v2/sandboxes/drives/{name}`](/docs/rest-api/sdk/sandboxes/get-or-create-a-drive.md) | Get or create a drive |
| **DELETE** | [`/v2/sandboxes/drives/{name}`](/docs/rest-api/sdk/sandboxes/delete-a-drive.md) | Delete a drive |
| **GET** | [`/v2/sandboxes/snapshots`](/docs/rest-api/sdk/sandboxes/list-snapshots.md) | List snapshots |
| **GET** | [`/v2/sandboxes/snapshots/{snapshotId}`](/docs/rest-api/sdk/sandboxes/get-a-snapshot.md) | Get a snapshot |
| **DELETE** | [`/v2/sandboxes/snapshots/{snapshotId}`](/docs/rest-api/sdk/sandboxes/delete-a-snapshot.md) | Delete a snapshot |
| **GET** | [`/v2/sandboxes/sessions`](/docs/rest-api/sdk/sandboxes/list-sessions.md) | List sessions |
| **GET** | [`/v2/sandboxes/sessions/{sessionId}`](/docs/rest-api/sdk/sandboxes/get-a-session.md) | Get a session |
| **GET** | [`/v2/sandboxes/{name}`](/docs/rest-api/sdk/sandboxes/get-a-named-sandbox.md) | Get a named sandbox |
| **PATCH** | [`/v2/sandboxes/{name}`](/docs/rest-api/sdk/sandboxes/update-a-sandbox.md) | Update a sandbox |
| **DELETE** | [`/v2/sandboxes/{name}`](/docs/rest-api/sdk/sandboxes/delete-a-sandbox.md) | Delete a sandbox |
| **GET** | [`/v2/sandboxes/sessions/{sessionId}/cmd`](/docs/rest-api/sdk/sandboxes/list-commands.md) | List commands |
| **POST** | [`/v2/sandboxes/sessions/{sessionId}/cmd`](/docs/rest-api/sdk/sandboxes/execute-a-command.md) | Execute a command |
| **GET** | [`/v2/sandboxes/sessions/{sessionId}/cmd/{cmdId}`](/docs/rest-api/sdk/sandboxes/get-a-command.md) | Get a command |
| **POST** | [`/v2/sandboxes/sessions/{sessionId}/cmd/{cmdId}/kill`](/docs/rest-api/sdk/sandboxes/kill-a-command.md) | Kill a command |
| **GET** | [`/v2/sandboxes/sessions/{sessionId}/cmd/{cmdId}/logs`](/docs/rest-api/sdk/sandboxes/stream-command-logs.md) | Stream command logs |
| **POST** | [`/v2/sandboxes/sessions/{sessionId}/stop`](/docs/rest-api/sdk/sandboxes/stop-a-session.md) | Stop a session |
| **POST** | [`/v2/sandboxes/sessions/{sessionId}/extend-timeout`](/docs/rest-api/sdk/sandboxes/extend-session-timeout.md) | Extend session timeout |
| **POST** | [`/v2/sandboxes/sessions/{sessionId}/network-policy`](/docs/rest-api/sdk/sandboxes/update-network-policy.md) | Update network policy |
| **POST** | [`/v2/sandboxes/sessions/{sessionId}/fs/read`](/docs/rest-api/sdk/sandboxes/read-a-file.md) | Read a file |
| **POST** | [`/v2/sandboxes/sessions/{sessionId}/fs/mkdir`](/docs/rest-api/sdk/sandboxes/create-a-directory.md) | Create a directory |
| **POST** | [`/v2/sandboxes/sessions/{sessionId}/fs/write`](/docs/rest-api/sdk/sandboxes/write-files.md) | Write files |
| **POST** | [`/v2/sandboxes/sessions/{sessionId}/snapshot`](/docs/rest-api/sdk/sandboxes/create-a-snapshot.md) | Create a snapshot |
| **POST** | [`/v2/sandboxes/{name}/fork`](/docs/rest-api/sdk/sandboxes/fork-a-named-sandbox.md) | Fork a named sandbox |

## security

| Method | Endpoint | Description |
|---|---|---|
| **POST** | [`/v1/security/attack-mode`](/docs/rest-api/sdk/security/update-attack-challenge-mode.md) | Update Attack Challenge mode |
| **GET** | [`/v1/security/firewall/config`](/docs/rest-api/sdk/security/returns-activated-waf-config.md) | Returns activated WAF config |
| **PUT** | [`/v1/security/firewall/config`](/docs/rest-api/sdk/security/put-firewall-configuration.md) | Put Firewall Configuration |
| **PATCH** | [`/v1/security/firewall/config`](/docs/rest-api/sdk/security/update-firewall-configuration.md) | Update Firewall Configuration |
| **GET** | [`/v1/security/firewall/config/{configVersion}`](/docs/rest-api/sdk/security/read-firewall-configuration.md) | Read Firewall Configuration |
| **DELETE** | [`/v1/security/firewall/config/{configVersion}`](/docs/rest-api/sdk/security/returns-activated-waf-config-1.md) | Returns activated WAF config |
| **POST** | [`/v1/security/firewall/config/{configVersion}/activate`](/docs/rest-api/sdk/security/returns-activated-waf-config-2.md) | Returns activated WAF config |
| **GET** | [`/v1/security/firewall/attack-status`](/docs/rest-api/sdk/security/read-active-attack-data.md) | Read active attack data |
| **GET** | [`/v1/security/firewall/bypass`](/docs/rest-api/sdk/security/read-system-bypass.md) | Read System Bypass |
| **POST** | [`/v1/security/firewall/bypass`](/docs/rest-api/sdk/security/create-system-bypass-rule.md) | Create System Bypass Rule |
| **DELETE** | [`/v1/security/firewall/bypass`](/docs/rest-api/sdk/security/remove-system-bypass-rule.md) | Remove System Bypass Rule |
| **GET** | [`/v1/security/firewall/events`](/docs/rest-api/sdk/security/read-firewall-actions-by-project.md) | Read Firewall Actions by Project |
| **POST** | [`/v1/security/firewall/config/generate-rule`](/docs/rest-api/sdk/security/generate-a-firewall-rule-from-natural-language.md) | Generate a firewall rule from natural language |

## teams

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v3/teams/{teamId}/members`](/docs/rest-api/sdk/teams/list-team-members.md) | List team members |
| **POST** | [`/v2/teams/{teamId}/members`](/docs/rest-api/sdk/teams/invite-a-user.md) | Invite a user |
| **POST** | [`/v1/teams/{teamId}/request`](/docs/rest-api/sdk/teams/request-access-to-a-team.md) | Request access to a team |
| **GET** | [`/v1/teams/{teamId}/request/{userId}`](/docs/rest-api/sdk/teams/get-access-request-status.md) | Get access request status |
| **POST** | [`/v1/teams/{teamId}/members/teams/join`](/docs/rest-api/sdk/teams/join-a-team.md) | Join a team |
| **PATCH** | [`/v1/teams/{teamId}/members/{uid}`](/docs/rest-api/sdk/teams/update-a-team-member.md) | Update a Team Member |
| **DELETE** | [`/v1/teams/{teamId}/members/{uid}`](/docs/rest-api/sdk/teams/remove-a-team-member.md) | Remove a Team Member |
| **GET** | [`/v2/teams/{teamId}`](/docs/rest-api/sdk/teams/get-a-team.md) | Get a Team |
| **PATCH** | [`/v2/teams/{teamId}`](/docs/rest-api/sdk/teams/update-a-team.md) | Update a Team |
| **GET** | [`/v2/teams`](/docs/rest-api/sdk/teams/list-all-teams.md) | List all teams |
| **POST** | [`/v1/teams`](/docs/rest-api/sdk/teams/create-a-team.md) | Create a Team |
| **POST** | [`/v1/teams/{teamId}/dsync-roles`](/docs/rest-api/sdk/teams/update-team-directory-sync-role-mappings.md) | Update Team Directory Sync Role Mappings |
| **DELETE** | [`/v1/teams/{teamId}`](/docs/rest-api/sdk/teams/delete-a-team.md) | Delete a Team |
| **DELETE** | [`/v1/teams/{teamId}/invites/{inviteId}`](/docs/rest-api/sdk/teams/delete-a-team-invite-code.md) | Delete a Team invite code |
| **PATCH** | [`/v1/teams/{teamId}/microfrontends/{groupId}`](/docs/rest-api/sdk/teams/update-a-microfrontends-group.md) | Update a microfrontends group |
| **DELETE** | [`/v1/teams/{teamId}/microfrontends/{groupId}`](/docs/rest-api/sdk/teams/delete-a-microfrontends-group.md) | Delete a microfrontends group |

## vcr

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/vcr/repository`](/docs/rest-api/sdk/vcr/list-repositories.md) | List repositories |
| **POST** | [`/v1/vcr/repository`](/docs/rest-api/sdk/vcr/create-a-repository.md) | Create a repository |
| **GET** | [`/v1/vcr/repository/{idOrName}`](/docs/rest-api/sdk/vcr/get-a-repository.md) | Get a repository |
| **DELETE** | [`/v1/vcr/repository/{idOrName}`](/docs/rest-api/sdk/vcr/delete-a-repository.md) | Delete a repository |
| **GET** | [`/v1/vcr/repository/{idOrName}/images`](/docs/rest-api/sdk/vcr/list-repository-images.md) | List repository images |
| **GET** | [`/v1/vcr/repository/{idOrName}/permissions`](/docs/rest-api/sdk/vcr/list-repository-permissions.md) | List repository permissions |
| **POST** | [`/v1/vcr/repository/{idOrName}/permissions`](/docs/rest-api/sdk/vcr/add-a-repository-permission.md) | Add a repository permission |
| **DELETE** | [`/v1/vcr/repository/{idOrName}/permissions`](/docs/rest-api/sdk/vcr/remove-a-repository-permission.md) | Remove a repository permission |
| **DELETE** | [`/v1/vcr/repository/{idOrName}/permissions/all`](/docs/rest-api/sdk/vcr/clear-all-repository-permissions.md) | Clear all repository permissions |
| **GET** | [`/v1/vcr/repository/{idOrName}/tags`](/docs/rest-api/sdk/vcr/list-repository-tags.md) | List repository tags |
| **GET** | [`/v1/vcr/repository/{idOrName}/tags/{tag}`](/docs/rest-api/sdk/vcr/get-a-repository-tag.md) | Get a repository tag |
| **GET** | [`/v1/vcr/repository/{idOrName}/images/{imageIdOrDigest}`](/docs/rest-api/sdk/vcr/get-a-repository-image.md) | Get a repository image |
| **DELETE** | [`/v1/vcr/repository/{idOrName}/images/{imageId}`](/docs/rest-api/sdk/vcr/delete-a-repository-image.md) | Delete a repository image |

## web-analytics

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/query/web-analytics/visits/aggregate`](/docs/rest-api/sdk/web-analytics/aggregates-page-views.md) | Aggregates page views |
| **GET** | [`/v1/query/web-analytics/events/aggregate`](/docs/rest-api/sdk/web-analytics/aggregates-custom-events.md) | Aggregates custom events |
| **GET** | [`/v1/query/web-analytics/visits/count`](/docs/rest-api/sdk/web-analytics/counts-page-views.md) | Counts page views |
| **GET** | [`/v1/query/web-analytics/events/count`](/docs/rest-api/sdk/web-analytics/counts-custom-events.md) | Counts custom events |

## webhooks

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v1/webhooks`](/docs/rest-api/sdk/webhooks/get-a-list-of-webhooks.md) | Get a list of webhooks |
| **POST** | [`/v1/webhooks`](/docs/rest-api/sdk/webhooks/creates-a-webhook.md) | Creates a webhook |
| **GET** | [`/v1/webhooks/{id}`](/docs/rest-api/sdk/webhooks/get-a-webhook.md) | Get a webhook |
| **DELETE** | [`/v1/webhooks/{id}`](/docs/rest-api/sdk/webhooks/deletes-a-webhook.md) | Deletes a webhook |

## aliases

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v2/deployments/{id}/aliases`](/docs/rest-api/sdk/aliases/list-deployment-aliases.md) | List Deployment Aliases |
| **POST** | [`/v2/deployments/{id}/aliases`](/docs/rest-api/sdk/aliases/assign-an-alias.md) | Assign an Alias |
| **GET** | [`/v4/aliases`](/docs/rest-api/sdk/aliases/list-aliases.md) | List aliases |
| **GET** | [`/v4/aliases/{idOrAlias}`](/docs/rest-api/sdk/aliases/get-an-alias.md) | Get an Alias |
| **DELETE** | [`/v2/aliases/{aliasId}`](/docs/rest-api/sdk/aliases/delete-an-alias.md) | Delete an Alias |
| **PATCH** | [`/aliases/{id}/protection-bypass`](/docs/rest-api/sdk/aliases/update-the-protection-bypass-for-a-url.md) | Update the protection bypass for a URL |

## certs

| Method | Endpoint | Description |
|---|---|---|
| **GET** | [`/v8/certs/{id}`](/docs/rest-api/sdk/certs/get-cert-by-id.md) | Get cert by id |
| **DELETE** | [`/v8/certs/{id}`](/docs/rest-api/sdk/certs/remove-cert.md) | Remove cert |
| **GET** | [`/v8/certs`](/docs/rest-api/sdk/certs/get-certs.md) | Get certs |
| **POST** | [`/v8/certs`](/docs/rest-api/sdk/certs/issue-a-new-cert.md) | Issue a new cert |
| **PUT** | [`/v8/certs`](/docs/rest-api/sdk/certs/upload-a-cert.md) | Upload a cert |

---

## Related

- [REST API overview](/docs/rest-api)

- [REST API errors](/docs/rest-api/errors)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
