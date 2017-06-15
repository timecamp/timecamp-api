Clients
======

GET /client
----------

Return all clients.

Example:
`https://www.timecamp.com/third_party/api/client/api_token/a36cabi96bba83f826`

```json
[
  {
    "firstName":"aaaa",
    "lastName":"bbb",
    "organizationName":"Time Solutions Sp. z o.o.",
    "address":"Ko\u015bciuszki 33\/4",
    "currencyId":1,
    "email":"k.rffudnicki@timecamp.com",
    "rootGroupId":"1208",
    "addedBy":"640",
    "added":"2014-03-24 17:00:21",
    "clientId":18855
  }
]
```

POST /client
----------

Modify current client

Example:
`https://www.timecamp.com/third_party/api/client/api_token/a36cabi96bba83f826`

Post Variable Array Fields:
* clientId: 1234 (__required__)
* firstName: "Kamil" (optional)
* lastName: "Rudnicki" (optional)
* organizationName: "Time Solutions Sp. z o.o." (optional)
* address: "Kosciuszki 33/4, NIP: 8943003832" (optional)
* email: "k.rudnicki2@timecamp.com" (optional)
* currencyId: 1 (optional, all available IDs can be found here: `GET https://www.timecamp.com/third_party/api/currency/format/json/api_token/a36cabi96bba83f826`)

PUT /client
----------

Add new client.

Example:
`https://www.timecamp.com/third_party/api/client/api_token/a36cabi96bba83f826`

Post Variable Array Fields:
* organizationName: "Time Solutions Sp. z o.o." (__required__)
* firstName: "Kamil" (optional)
* lastName: "Rudnicki" (optional)
* address: "Kosciuszki 33/4, NIP: 8943003832" (optional)
* email: "k.rudnfficki2@timecamp.com" (optional)
* currencyId: 1 (optional, all available IDs can be found here: `GET https://www.timecamp.com/third_party/api/currency/format/json/api_token/a36cabi96bba83f826`)

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
