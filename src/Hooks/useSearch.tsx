import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

function useSearch() {
  const location = useLocation();
  const search = useMemo(
    () => new URLSearchParams(location.search),
    [location]
  );
  return search;
}

export default useSearch;
