/**
 * Gets the 'next' item in an array when navigating backward or forward.
 * Loops when it hits either end.
 * 
 * @param direction If it should get the next or previous item.
 * @param allElems The full array of items.
 * @param currentElem The 'current' item used as the starting point.
 */
function getNextArrItem<T>(
  direction: 'forward' | 'backward',
  allElems: T[],
  currentElem?: T | null,
) {
  const inc = direction === 'forward' ? 1 : -1;
  const defaultElem =
    direction === 'forward' ? allElems[0] : allElems[allElems.length - 1];

  return currentElem
    ? allElems[allElems.findIndex(elem => currentElem === elem) + inc] ||
        defaultElem
    : defaultElem;
}

export default getNextArrItem;
