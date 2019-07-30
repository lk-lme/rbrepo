import Children from 'react-children-utilities';

type FilterFn = (child: React.ReactChild) => boolean;

function filterChildren(children: React.ReactNode, fn: FilterFn): React.ReactNode[] {
  const results: React.ReactNode[] = [];

  Children.deepForEach(children, (child) => {
    if (fn(child)) {
      results.push(child);
    }
  });

  return results;
}

export default filterChildren;
