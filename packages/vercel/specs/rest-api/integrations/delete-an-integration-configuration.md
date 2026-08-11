---
title: delete-an-integration-configuration
product: vercel
url: /docs/rest-api/integrations/delete-an-integration-configuration
canonical_url: "https://vercel.com/docs/rest-api/integrations/delete-an-integration-configuration"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-an-integration-configuration on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete an integration configuration

```http
DELETE /v1/integrations/configuration/{id}
```

Allows to remove the configuration with the `id` provided in the parameters. The configuration and all of its resources will be removed. This includes Webhooks, LogDrains and Project Env variables.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 204: The configuration was successfully removed

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: The configuration was not found

### 410: No description

---

## Related

- [integrations endpoints](/docs/rest-api#integrations)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
