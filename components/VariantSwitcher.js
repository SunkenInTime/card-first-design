import Link from "next/link";
import { useRouter } from "next/router";
import { variantMeta, variantOrder } from "../data/variants";

export default function VariantSwitcher() {
  const router = useRouter();

  return (
    <div className="variant-switcher">
      <span className="variant-switcher__label">Iterations</span>
      <div className="variant-switcher__row">
        {variantOrder.map((slug) => {
          const item = variantMeta[slug];
          const isActive = router.pathname === `/${slug}`;

          return (
            <Link
              key={slug}
              className={`variant-pill${isActive ? " is-active" : ""}`}
              href={`/${slug}`}
            >
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
