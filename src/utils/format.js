export function areAllKeyValuePairsIncluded(obj, _obj) {
    const [theSmallOnes, theBigOnes] = [Object.entries(obj), Object.entries(_obj)]
        .sort()
        .sort((a, b) => b.length > a.length)
        .reverse();
    const a = theSmallOnes.every(([k, v]) => {
        const bigOne = theBigOnes.find(([_k, _v]) => _k === k);
        if (!bigOne) return false;
        const [_, value] = bigOne;
        if (value === v) return true;
    });
    return a;
}
