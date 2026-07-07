## SSL/TLS Recommendation

**get** `/zones/{zone_id}/ssl/recommendation`

Retrieve the SSL/TLS Recommender's recommendation for a zone.

### Path Parameters

- `zone_id: string`

### Returns

- `errors: array of ResponseInfo`

  - `code: number`

  - `message: string`

  - `documentation_url: optional string`

  - `source: optional object { pointer }`

    - `pointer: optional string`

- `messages: array of ResponseInfo`

  - `code: number`

  - `message: string`

  - `documentation_url: optional string`

  - `source: optional object { pointer }`

- `result: object { id, editable, modified_on, 2 more }`

  - `id: string`

  - `editable: boolean`

    Whether this setting can be updated or not.

  - `modified_on: string`

    Last time this setting was modified.

  - `value: "auto" or "custom"`

    Current setting of the automatic SSL/TLS.

    - `"auto"`

    - `"custom"`

  - `next_scheduled_scan: optional string`

    Next time this zone will be scanned by the Automatic SSL/TLS.

- `success: boolean`

  Indicates the API call's success or failure.

### Example

```http
curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/ssl/recommendation \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

#### Response

```json
{
  "errors": [
    {
      "code": 1000,
      "message": "message",
      "documentation_url": "documentation_url",
      "source": {
        "pointer": "pointer"
      }
    }
  ],
  "messages": [
    {
      "code": 1000,
      "message": "message",
      "documentation_url": "documentation_url",
      "source": {
        "pointer": "pointer"
      }
    }
  ],
  "result": {
    "id": "ssl_automatic_mode",
    "editable": true,
    "modified_on": "2014-01-01T05:20:00.12345Z",
    "value": "auto",
    "next_scheduled_scan": "2014-01-01T05:20:00.12345Z"
  },
  "success": true
}
```
