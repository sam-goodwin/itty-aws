---
title: finalize-installation
product: vercel
url: /docs/rest-api/marketplace/finalize-installation
canonical_url: "https://vercel.com/docs/rest-api/marketplace/finalize-installation"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about finalize-installation on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Finalize Installation

```http
POST /v1/installations/{integrationConfigurationId}/billing/finalize
```

This endpoint allows the partner to mark an installation as finalized. This means you will not send any more invoices for the installation. Use this after a customer has requested uninstall and you have sent any remaining invoices. This will allow the uninstall process to proceed immediately after all invoices have been paid. <br/> Use the `credentials.access_token` we provided in the [Upsert Installation](#upsert-installation) body to authorize this request.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |


## Responses

### 204: No description

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [marketplace endpoints](/docs/rest-api#marketplace)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
