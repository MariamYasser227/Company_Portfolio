import { Link } from "react-router-dom";

const PageHeader = ({ title, currentPath }) => {
  return (
    <section className="relative h-[29rem] w-full overflow-hidden">
      <img
        src="/assets/breadcrumb.jpg"
        alt="Header Background"
        className="absolute inset-0 z-0 object-cover w-full h-full"
      />

      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-green-900/80 via-green-900/60 to-green-950/90 blur-sm" />

      <div
        className="absolute bottom-24 right-8 md:right-40 z-[2] text-right text-white"
        dir="rtl"
      >
        <nav className="flex items-center justify-end gap-2 text-xl font-semibold md:text-2xl">
          <Link to="/" className="transition opacity-80 hover:opacity-100">
            الرئيسية
          </Link>

          <span className="text-base text-green-400 md:text-lg">›</span>

          <Link
            to={currentPath}
            className="font-bold transition opacity-80 hover:opacity-100"
          >
            {title}
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default PageHeader;
