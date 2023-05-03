import { useMemo } from 'react';

// Check if only Sweden is selected
const useIsOnlySweden = (search: URLSearchParams) => {
  const isOnlySweden = useMemo(() => {
    const swedenParams = search.getAll('sweden');
    const otherCountriesParams = ['denmark', 'norway', 'finland'].filter(
      (key) => search.get(key) !== null
    );
    return swedenParams.length === 1 && otherCountriesParams.length === 0;
  }, [search]);

  return { isOnlySweden };
};

export default useIsOnlySweden;
