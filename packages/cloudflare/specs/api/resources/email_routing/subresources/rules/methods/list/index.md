## List routing rules

**get** `/zones/{zone_id}/email/routing/rules`

Lists existing routing rules.

### Path Parameters

- `zone_id: string`

  Identifier.

### Query Parameters

- `enabled: optional true or false`

  Filter by enabled routing rules.

  - `true`

  - `false`

- `page: optional number`

  Page number of paginated results.

- `per_page: optional number`

  Maximum number of results per page.

### Returns

- `errors: array of object { code, message, documentation_url, source }`

  - `code: number`

  - `message: string`

  - `documentation_url: optional string`

  - `source: optional object { pointer }`

    - `pointer: optional string`

- `messages: array of object { code, message, documentation_url, source }`

  - `code: number`

  - `message: string`

  - `documentation_url: optional string`

  - `source: optional object { pointer }`

    - `pointer: optional string`

- `success: true`

  Whether the API call was successful.

  - `true`

- `result: optional array of EmailRoutingRule`

  - `id: optional string`

    Routing rule identifier.

  - `actions: optional array of Action`

    List actions patterns.

    - `type: "drop" or "forward" or "worker"`

      Type of supported action.

      - `"drop"`

      - `"forward"`

      - `"worker"`

    - `value: optional array of string`

  - `enabled: optional true or false`

    Routing rule status.

    - `true`

    - `false`

  - `matchers: optional array of Matcher`

    Matching patterns to forward to your actions.

    - `type: "all" or "literal"`

      Type of matcher.

      - `"all"`

      - `"literal"`

    - `field: optional "to"`

      Field for type matcher.

      - `"to"`

    - `value: optional string`

      Value for matcher.

  - `name: optional string`

    Routing rule name.

  - `priority: optional number`

    Priority of the routing rule.

  - `tag: optional string`

    Routing rule tag. (Deprecated, replaced by routing rule identifier)

- `result_info: optional object { count, page, per_page, 2 more }`

  - `count: optional number`

    Total number of results for the requested service.

  - `page: optional number`

    Current page within paginated list of results.

  - `per_page: optional number`

    Number of results per page of results.

  - `total_count: optional number`

    Total results available without any search parameters.

  - `total_pages: optional number`

    The number of total pages in the entire result set.

### Example

```http
curl https://api.cloudflare.com/client/v4/zones/$ZONE_ID/email/routing/rules \
    -H "X-Auth-Email: $CLOUDFLARE_EMAIL" \
    -H "X-Auth-Key: $CLOUDFLARE_API_KEY"
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
  "success": true,
  "result": [
    {
      "id": "a7e6fb77503c41d8a7f3113c6918f10c",
      "actions": [
        {
          "type": "forward",
          "value": [
            "destinationaddress@example.net"
          ]
        }
      ],
      "enabled": true,
      "matchers": [
        {
          "type": "literal",
          "field": "to",
          "value": "test@example.com"
        }
      ],
      "name": "Send to user@example.net rule.",
      "priority": 0,
      "tag": "a7e6fb77503c41d8a7f3113c6918f10c"
    }
  ],
  "result_info": {
    "count": 1,
    "page": 1,
    "per_page": 20,
    "total_count": 1,
    "total_pages": 100
  }
}
```
