export default function LoadingSpinner({ size = 40 }) {
  return (
    <div
      className="flex flex-col items-center gap-4"
      role="status"
      aria-label="Loading"
    >
      <div
        className="rounded-full border-4 border-dark-800 border-t-primary-500 animate-spin"
        style={{ width: size, height: size }}
      />
      <span className="text-sm text-gray-500 font-body">Loading…</span>
    </div>
  )
}
