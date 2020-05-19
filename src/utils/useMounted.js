import { useEffect, useState } from 'react';

export default function useMounted() {
	const [isMounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	return isMounted;
}
