export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} Ashenafi Mulugeta. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
