export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-12 max-w-4xl mx-auto border-t border-[var(--color-border)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <p className="text-[var(--color-text-muted)] text-sm">
          Built by humans who got tired of 47 open tabs.
        </p>
        <p className="font-mono text-xs text-[var(--color-text-muted)]">
          OVERHEARD &copy; 2026
        </p>
      </div>
    </footer>
  );
}
