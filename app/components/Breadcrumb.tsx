import Link from "next/link";

interface BreadcrumbProps {
  serviceName: string;
}

const Breadcrumb = ({ serviceName }: BreadcrumbProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="container mx-auto px-4 pt-6 pb-2"
    >
      <ol className="flex items-center gap-2 text-sm font-dmsans text-gray-500">
        <li>
          <Link
            href="/"
            className="hover:text-[#211cda] transition-colors"
          >
            Início
          </Link>
        </li>
        <li aria-hidden="true" className="text-gray-400">
          /
        </li>
        <li>
          <Link
            href="/#servicos"
            className="hover:text-[#211cda] transition-colors"
          >
            Serviços
          </Link>
        </li>
        <li aria-hidden="true" className="text-gray-400">
          /
        </li>
        <li>
          <span className="text-gray-900 font-medium">{serviceName}</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
