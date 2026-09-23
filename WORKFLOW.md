 Box Office Sync Workflow

 Task 1

Clone A added a 10% group discount for orders of 5 or more tickets and pushed the change to `feature/group-pricing`.

[Task 1](screenshots/task1.png)

 Task 2

Clone B changed the ticket price calculation from truncation to rounding. The push was rejected because Clone A had already pushed a newer commit to the remote branch.

[Task 2](screenshots/task2.png)

 Task 3

Clone B fetched and merged the remote branch. A conflict occurred in `tickets.js`. I resolved it by keeping both the 10% group discount from Clone A and the `Math.round()` change from Clone B.

[Task 3](screenshots/task3.png)

 Task 4

Clone C added a 50% VIP surcharge using the `premium` parameter. Its push was rejected because the remote branch had already moved forward.

[Task 4](screenshots/task4.png)

 Task 5

Clone C fetched and merged the updated feature branch. This created a three-way conflict because the branch already contained the group discount and rounding changes. I resolved the conflict so the group discount from Clone A, rounding from Clone B, and VIP surcharge from Clone C all remained.

[Task 5](screenshots/task5.png)

 Task 6

Clone A added a flat $10 discount. Its push was rejected because the remote branch had changed. I fetched and rebased instead of merging. The rebase produced conflicts in both `tickets.js` and `test.js`. I resolved both conflicts while keeping the group discount, rounding, VIP surcharge, and flat $10 discount.

[Task 6](screenshots/task6.png)

 Task 7

The completed `feature/group-pricing` branch was merged into `main`. The updated `main` branch was pushed to GitHub, and the final commit was tagged `v1.0-synced`.

[Task 7](screenshots/task7.png)

 1. Final `calculateTicketPrice` Walkthrough

The final function combines all of the changes:

1. `quantity * basePrice` — the original ticket-price calculation.
2. The 10% discount for 5 or more tickets — added by Clone A.
3. The 50% VIP surcharge — added by Clone C.
4. The flat $10 discount — added later by Clone A.
5. `Math.round()` — changed by Clone B.

 2. Task 3 vs. Task 5 Conflicts

Task 3 was a two-way conflict between the group-discount change from Clone A and the rounding change from Clone B.

Task 5 was harder because Clone C was adding a third line of work to code that already contained the first two changes. I had to make sure the VIP surcharge was added without accidentally removing either the group discount or rounding behavior.

 3. Why the Flat $10 Discount Changed Other Test Results

The group discount and VIP surcharge use the same `calculateTicketPrice` function. The flat $10 discount is applied to the final total, so it also affects orders that use the group discount or VIP surcharge.

This shows that changes are not always completely isolated when different features share the same function or code.

 4. Process Change That Could Prevent the Rejected Pushes

A useful process change would be requiring contributors to fetch and update their branch before pushing or starting new work. Keeping local branches synchronized with the remote branch would reduce rejected pushes and make conflicts easier to handle.
