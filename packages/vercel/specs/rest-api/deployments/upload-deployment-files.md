---
title: upload-deployment-files
product: vercel
url: /docs/rest-api/deployments/upload-deployment-files
canonical_url: "https://vercel.com/docs/rest-api/deployments/upload-deployment-files"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about upload-deployment-files on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Upload Deployment Files

```http
POST /v2/files
```

Before you create a deployment you need to upload the required files for that deployment. To do it, you need to first upload each file to this endpoint. Once that's completed, you can create a new deployment with the uploaded files. The file content must be placed inside the body of the request. In the case of a successful response you'll receive a status code 200 with an empty body.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Header parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `'content-Length'` | number | No | The file size in bytes |
| `'x-Vercel-Digest'` | string. maxLength: 40 | No | The file SHA1 used to check the integrity |
| `'x-Now-Digest'` | string. maxLength: 40 | No | The file SHA1 used to check the integrity |
| `'x-Now-Size'` | number | No | The file size as an alternative to `Content-Length` |


## Request body

Required: No

Content-Type: `application/octet-stream`

```json
{
  "type": "string",
  "format": "binary"
}
```

## Responses

### 200: File already uploaded
File successfully uploaded

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "urls"
      ],
      "properties": {
        "urls": {
          "type": "array",
          "description": "Array of URLs where the file was updated",
          "items": {
            "type": "string"
          }
        }
      }
    },
    {
      "type": "object"
    }
  ]
}
```

### 400: One of the provided values in the headers is invalid
Digest is not valid
File size is not valid

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

### 426: No description

---

## Related

- [deployments endpoints](/docs/rest-api#deployments)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
