const cards = ["a", "b", "c", "d"];

export default function LoadingSkeleton() {
  return (
    <div
      className="skeleton-screen"
      aria-label="Cargando contenido"
      aria-busy="true"
    >
      <header className="skeleton-header">
        <div className="skeleton-shell flex items-center justify-between">
          <div className="skeleton-line h-10 w-36 rounded-xl" />
          <div className="hidden gap-6 md:flex">
            {cards.map((key) => (
              <div key={key} className="skeleton-line h-4 w-16" />
            ))}
          </div>
          <div className="skeleton-line h-11 w-40 rounded-xl" />
        </div>
      </header>
      <main className="skeleton-shell flex flex-col gap-6 py-6 sm:gap-7 sm:py-8">
        <section className="skeleton-panel grid min-h-[650px] items-center gap-8 p-5 lg:grid-cols-2 lg:p-9">
          <div>
            <div className="skeleton-line h-4 w-48" />
            <div className="mt-7 skeleton-line h-16 w-full max-w-xl rounded-2xl" />
            <div className="mt-3 skeleton-line h-16 w-4/5 rounded-2xl" />
            <div className="mt-7 skeleton-line h-5 w-3/4" />
            <div className="mt-3 skeleton-line h-5 w-2/3" />
            <div className="mt-8 flex gap-3">
              <div className="skeleton-line h-13 w-40 rounded-xl" />
              <div className="skeleton-line h-13 w-40 rounded-xl" />
            </div>
          </div>
          <div className="skeleton-line h-[480px] rounded-3xl" />
        </section>
        <section className="skeleton-panel p-5 lg:p-9">
          <div className="mx-auto skeleton-line h-12 w-80 max-w-full" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {cards.map((key) => (
              <div key={key} className="skeleton-card">
                <div className="skeleton-line size-14 rounded-xl" />
                <div className="mt-6 skeleton-line h-7 w-3/4" />
                <div className="mt-5 skeleton-line h-4 w-full" />
                <div className="mt-3 skeleton-line h-4 w-5/6" />
              </div>
            ))}
          </div>
        </section>
        <section className="skeleton-panel grid gap-6 p-5 lg:grid-cols-2 lg:p-9">
          <div className="skeleton-line min-h-96 rounded-3xl" />
          <div className="space-y-5">
            <div className="skeleton-line h-12 w-3/4" />
            <div className="skeleton-line h-5 w-full" />
            <div className="skeleton-line h-5 w-5/6" />
            {cards.map((key) => (
              <div key={key} className="skeleton-line h-12 w-full rounded-xl" />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
