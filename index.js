// code your solution here
function superbowlWin(record) {
    const result = record.find(record => record.result === "W");
    if(result === undefined)
        return undefined;
    else
        return result.year;
}