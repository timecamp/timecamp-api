Group
======

GET /group
----------

Returns all groups.

Example:
`https://www.timecamp.com/third_party/api/group/api_token/a36cabi96bba83f826`

```json
[
  {
    "group_id": "123",
    "name": "Root group",
    "parent_id": "1208"
  },
  {
    "group_id": "456",
    "name": "Sub-group",
    "parent_id": "123"
  }
]
```

POST /client
----------

Modify existing group. Edit permission is required.

Example:
`https://www.timecamp.com/third_party/api/group/api_token/a36cabi96bba83f826`

Post Variable Array Fields:
* group_id: 1234 (__required__)
* name: "New name" (optional)
* parent_id: 5678 (optional)

At least one of optional fields must be set.

PUT /group
----------

Add new group. Edit permission is required. 
There cannot be more than one root group (with parent_id = 0) and maximum group tree depth is 4 levels. 

Example:
`https://www.timecamp.com/third_party/api/group/api_token/a36cabi96bba83f826`

Post Variable Array Fields:
* parent_id: "456" (__required__)
* name: "New group" (optional, default: "" - empty string)

```json
[
  {
    "firstName":"aaaa",
    "lastName":"bbb",
    "organizationName":"Time Solutions Sp. z o.o.",
    "address":"Ko\u015bciuszki 33\/4",
    "currencyId":1,
    "email":"k.rudnfficki@timecamp.com",
    "rootGroupId":"1208",
    "addedBy":"640",
    "added":"2014-03-24 17:00:21",
    "clientId":18855
  }
]
```

Delete /group
----------

Delete a group. 
Edit permission is required. 
Root group cannot be deleted. 
All subgroups of deleted group have parent_id changed to root_group_id.

Example:
`https://www.timecamp.com/third_party/api/group/api_token/a36cabi96bba83f826`

Delete Variable Array Fields:
* group_id: "456" (__required__)
