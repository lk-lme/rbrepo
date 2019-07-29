import { useCallback, useState } from 'react';

/**
 * Hook containing accordion-like state and setters.
 * 
 * @param ids An array of ids that uniquely identify each 'panel'.
 * @param allowMultiple If more than one panel can be open at the same time.
 */
function useAccordion(options: Options) {
  const { ids, allowMultiple, defaultOpen = [] } = options;
  const [openItems, setOpenItems] = useState<string[]>([...defaultOpen]);

  // If all panels are open.
  const allOpen = ids.every(id => openItems.includes(id));

  // Sets a panel to be open/closed
  const setOpen = useCallback((id: string, isOpen: boolean) => {
    setOpenItems((current) => {
      // If multiple panels can be open, append/filter the array.
      if (allowMultiple) {
        return isOpen
          ? [...current, id]
          : current.filter(x => x !== id);
      }

      // Otherwise discard existing values.
      return isOpen ? [id] : [];
    });
  }, [allowMultiple, setOpenItems]);

  // Sets all panels to be open/closed
  const setAll = useCallback((open: boolean) => {
    setOpenItems(open ? ids : []);
  }, []);

  // Sets all panels to be open if at least one is not, 
  // otherwise sets all panels to be closed.
  const toggleAll = useCallback(() => {
    setAll(!allOpen);
  }, [allOpen]);

  // Helper to tell if a panel is currently open.
  const isOpen = useCallback(id => openItems.includes(id), [openItems]);

  return { openItems, allOpen, isOpen, setOpen, setAll, toggleAll };
}

export interface Options {
  ids: string[];
  defaultOpen?: string[];
  allowMultiple?: boolean;
}

export default useAccordion;
