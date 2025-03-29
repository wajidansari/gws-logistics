import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-100">
      <h1 className="text-primary text-6xl font-bold">404</h1>
      <p className="text-muted-foreground mt-4 text-lg">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/">
        <p className="bg-primary hover:bg-primary-foreground mt-6 rounded px-4 py-2 text-white">
          Go Back Home
        </p>
      </Link>
    </div>
  );
}
