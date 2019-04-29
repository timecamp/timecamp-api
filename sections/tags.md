Tags
======


Get /tag/{id}
----------

Return tag data.

Example:
`https://www.timecamp.com/third_party/api/tag/123`

Response:
```json
{
  "id":"123",
  "name":"tag name",
  "archived":"0",
  "tag_list_id":"456"
}
```

Post /tag/
----------

Create new tag.

Example:
`https://www.timecamp.com/third_party/api/tag`

Params (all required):
* name: "tag name"
* list: "456" // tag list id

Response (new tag id):
```json
123
```

Put /tag/{id}
----------

Update tag name or archive status.

Example:
`https://www.timecamp.com/third_party/api/tag/123`

Params (at least one is required):
* name: "new tag name"
* archived: 1 (0 or 1)

Get /tag_list/
----------

Return all tag lists for user.

Example:
`https://www.timecamp.com/third_party/api/tag_list`

Response:
```json
[
    {
      "id":"456",
      "name":"tag list one",
      "archived":"0"
    },
    {
      "id":"789",
      "name":"tag list two",
      "archived":"1"
    }
]
```

Get /tag_list/{id}
----------

Return tag list data.

Example:
`https://www.timecamp.com/third_party/api/tag_list/456`

Response:
```json
{
  "id":"456",
  "name":"tag list one",
  "archived":"0"
}
```

Get /tag_list/{id}/tags
----------

Return tags from tag list.

Example:
`https://www.timecamp.com/third_party/api/tag_list/456/tags`

Response:
```json
[
    {
        "id":"123",
        "name":"tag one",
        "archived": 0
    },
    {
        "id":"321",
        "name":"tag two",
        "archived": 1
    }
]
```

Post /tag_list/
----------

Create new tag list.

Example:
`https://www.timecamp.com/third_party/api/tag_list`

Params (all required):
* name: "tag list name"

Response (new tag list id):
```json
456
```

Put /tag_list/{id}
----------

Update tag name.

Example:
`https://www.timecamp.com/third_party/api/tag_list/123`

Params (at least one is required):
* name: "new tag name"
* archived: 1 (0 or 1)

