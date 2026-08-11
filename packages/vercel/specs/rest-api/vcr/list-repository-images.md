---
title: list-repository-images
product: vercel
url: /docs/rest-api/vcr/list-repository-images
canonical_url: "https://vercel.com/docs/rest-api/vcr/list-repository-images"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-repository-images on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List repository images

```http
GET /v1/vcr/repository/{idOrName}/images
```

List images for a container registry repository, including their tags.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string. maxLength: 255 | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `limit` | integer. min: 1; max: 100 | No |  |
| `cursor` | string. maxLength: 1024 | No | Opaque pagination cursor returned by a previous list response. |
| `untagged` | boolean | No |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "A paginated list of images for a repository.",
  "required": [
    "images"
  ],
  "properties": {
    "images": {
      "type": "array",
      "items": {
        "type": "object",
        "description": "An image enriched with its tags and VHS-readiness status, as returned when listing a repository's images.",
        "required": [
          "createdAt",
          "id",
          "kind",
          "manifestDigest",
          "repositoryId",
          "sizeInBytes",
          "status",
          "tags"
        ],
        "properties": {
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
          "tags": {
            "type": "array",
            "description": "Tags pointing at this image's manifest."
          },
          "id": {
            "type": "string",
            "description": "Internal identifier of the image."
          },
          "repositoryId": {
            "type": "string",
            "description": "Identifier of the repository the image belongs to."
          },
          "manifestDigest": {
            "type": "string",
            "description": "SHA-256 digest of the image manifest."
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
          "sizeInBytes": {
            "type": "number",
            "description": "Total size in bytes of the image's resources (manifest, config and layer blobs) stored by the registry."
          },
          "vhs": {
            "type": "object",
            "description": "Converted VHS drive data, present once an image has been optimized for sandbox launch.",
            "required": [
              "digest",
              "path"
            ]
          },
          "createdAt": {
            "type": "string",
            "description": "ISO 8601 timestamp of when the image was created."
          }
        }
      }
    },
    "nextCursor": {
      "type": "string",
      "description": "Cursor to fetch the next page of results, when more are available."
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
