---
title: update-the-rolling-release-settings-for-the-project
product: vercel
url: /docs/rest-api/rolling-release/update-the-rolling-release-settings-for-the-project
canonical_url: "https://vercel.com/docs/rest-api/rolling-release/update-the-rolling-release-settings-for-the-project"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-the-rolling-release-settings-for-the-project on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update the rolling release settings for the project

```http
PATCH /v1/projects/{idOrName}/rolling-release/config
```

Update (or disable) Rolling Releases for a project. When disabling with the resolve-on-disable feature flag enabled, any active rolling release document is resolved using the disableRolloutAction parameter: "abort" to roll back (default), or "complete" to promote the canary to production. When enabling or updating config, changes only affect the next production deployment and do not alter a rollout that's already in-flight. Note: Enabling Rolling Releases automatically enables skew protection on the project with the default value if it wasn't configured already.

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
  "oneOf": [
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
    },
    {
      "type": "object",
      "required": [
        "rollingRelease"
      ],
      "properties": {
        "rollingRelease": {
          "type": "object",
          "nullable": true,
          "properties": {
            "stages": {
              "type": "array",
              "nullable": true
            }
          }
        }
      }
    }
  ]
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
