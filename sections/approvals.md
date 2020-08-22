Approvals
======

POST /approval
----------

Change status of approval.

Post Variable Array Fields:
* from: “2020-08-22” (__required__)
* to: “2020-08-22” (__required__)
* user_id: “123” (__required__)
* status: “2” (__required__) 
* approval_id: “0” 
* comment: "optional note"

Status:
2 - send for approval
1 - approve
0 - reject approval

GET /approval
----------

Get approvals.

Get Variable Array Fields:
* from: “2020-08-22” (__required__)
* to: “2020-08-22” (__required__)
* all: “1” return approvals for all users
* with_attendance: “1” return also attendance data

Returns approvals array object.

GET /approval_users
----------

Get users ids I can approve.
