// components//header.tsx
import Link from 'next/link';
export default function Header() {
    return (
        <header>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        </header>
    );
    }