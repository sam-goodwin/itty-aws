---
title: get-a-repository-tag
product: vercel
url: /docs/rest-api/vcr/get-a-repository-tag
canonical_url: "https://vercel.com/docs/rest-api/vcr/get-a-repository-tag"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-a-repository-tag on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get a repository tag

```http
GET /v1/vcr/repository/{idOrName}/tags/{tag}
```

Fetch a single tag from a repository, including the backing image's metadata and VHS-readiness status.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string. maxLength: 255 | Yes |  |
| `tag` | string. maxLength: 255 | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "tag"
  ],
  "properties": {
    "tag": {
      "type": "object",
      "description": "A tag pointing at an image in a Vercel Container Registry repository, enriched with the backing image's metadata and VHS-readiness status.",
      "required": [
        "createdAt",
        "imageId",
        "kind",
        "manifestDigest",
        "sizeInBytes",
        "status",
        "tag",
        "updatedAt"
      ],
      "properties": {
        "tag": {
          "type": "string",
          "description": "The tag name."
        },
        "manifestDigest": {
          "type": "string",
          "description": "SHA-256 digest of the image manifest the tag points at."
        },
        "imageId": {
          "type": "string",
          "description": "Internal identifier of the image the tag points at."
        },
        "kind": {
          "type": "string",
          "description": "Whether the manifest is a multi-platform image index, a single-platform image manifest or an attestation.",
          "enum": [
            "attestation",
            "index",
            "manifest"
          ]
        },
        "platform": {
          "type": "string",
          "description": "Operating system the manifest targets. Only present for single-platform manifests."
        },
        "arch": {
          "type": "string",
          "description": "CPU architecture the manifest targets. Only present for single-platform manifests."
        },
        "pushedBy": {
          "type": "string",
          "description": "Identifier of the actor that pushed the image."
        },
        "status": {
          "type": "string",
          "description": "VHS-readiness status, or `null` for a multi-platform index.",
          "enum": [
            "preparing",
            "ready",
            "unoptimized",
            null
          ],
          "nullable": true
        },
        "sizeInBytes": {
          "type": "number",
          "description": "Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry."
        },
        "createdAt": {
          "type": "string",
          "description": "ISO 8601 timestamp of when the tag was created."
        },
        "updatedAt": {
          "type": "string",
          "description": "ISO 8601 timestamp of when the tag was last updated."
        }
      }
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

- [vcr endpoints](/docs/rest-api#vcr)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
