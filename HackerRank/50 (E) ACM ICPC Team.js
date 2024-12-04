function acmTeam(topic) {
    let maxTopics = 0;
    let count = 0;

    // Iterate over all pairs of people
    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            // Compute the number of topics known by both people (bitwise OR)
            let knownTopics = 0;
            for (let k = 0; k < topic[0].length; k++) {
                if (topic[i][k] === '1' || topic[j][k] === '1') {
                    knownTopics++;
                }
            }
            
            // Check if this team knows more topics than the current max
            if (knownTopics > maxTopics) {
                maxTopics = knownTopics;
                count = 1;
            } else if (knownTopics === maxTopics) {
                count++;
            }
        }
    }

    return [maxTopics, count];
}
