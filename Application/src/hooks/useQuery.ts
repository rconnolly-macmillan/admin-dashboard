'use client';
const useQuery = () => {
	const urlSearchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
	const entries = Object.fromEntries(urlSearchParams.entries())
	// console.log('URLSearchParams:', urlSearchParams);
	// console.log('entries', entries);
	return entries;
};

export default useQuery;
