/** Takes two strings.
 *  Returns true if all characters in string 1 are present somewhere in string 2 and characters from string 1 appear in the same order in string 2.
 *  Make 2 pointers starting at 0.
 *  Check if val at both pointers is the same:
 *    - yes? advance both pointers by 1
 *    - no? advance string 2's pointer by 1 and check again
 *  If string 2's pointer exceeds the end of string 2 return false.
 *  If string 1's pointer exceeds the end of string 1 return true.
 */
function isSubsequence(str1, str2) {
    let str1Idx = 0;
    let str2Idx = 0;
    if (!str1) return true;
    while (str2Idx < str2.length) {
        if (str2[str2Idx] === str1[str1Idx]) {
            str1Idx += 1;
        }
        if (str1Idx === str1.length) return true;
        str2Idx += 1;
    }
    return false;
}
