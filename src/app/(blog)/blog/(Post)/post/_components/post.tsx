"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Post() {
    const router = useRouter();

    useEffect(() => {
        router.push('/blog');
    }, [router]);

    return null;
}