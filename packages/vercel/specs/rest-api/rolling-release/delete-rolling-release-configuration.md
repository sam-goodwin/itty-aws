---
title: delete-rolling-release-configuration
product: vercel
url: /docs/rest-api/rolling-release/delete-rolling-release-configuration
canonical_url: "https://vercel.com/docs/rest-api/rolling-release/delete-rolling-release-configuration"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-rolling-release-configuration on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete rolling release configuration

```http
DELETE /v1/projects/{idOrName}/rolling-release/config
```

Disable Rolling Releases for a project means that future deployments will not undergo a rolling release. Changing the config never alters a rollout that's already in-flight—it only affects the next production deployment. If you want to also stop the current rollout, call this endpoint to disable the feature, and then call either the /complete or /abort endpoint.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | Project ID or project name (URL-encoded) |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "rollingRelease"
  ],
  "properties": {
    "rollingRelease": {
      "nullable": true
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [rolling-release endpoints](/docs/rest-api#rolling-release)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
