var mergeTwoLists = function (list1, list2) {
    // Step 1: Create a dummy node
    var dummy = new ListNode(-Infinity);
    // Step 2: Initialize pointers
    var prev = dummy;
    var current1 = list1;
    var current2 = list2;
    // Step 3: Merge the lists
    while (current1 && current2) {
        // Step 4: Compare values and link nodes
        if (current1.val <= current2.val) {
            prev.next = current1;
            prev = current1;
            current1 = current1.next;
        }
        else {
            prev.next = current2;
            prev = current2;
            current2 = current2.next;
        }
    }
    // Step 5: Complete the merging process
    if (current1)
        prev.next = current1;
    if (current2)
        prev.next = current2;
    // Step 6: Finalize the merged list
    // Step 7: Return the merged list
    return dummy.next;
};
