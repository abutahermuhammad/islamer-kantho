import Link from "next/link";

export default function PrimaryNavigation() {
  return (
    <>
      <nav className="ik_nav_primary">
        <div className="ik_container ik_p-3 ik_text-center">
          <Link
            className="ik_text-3xl ik_font-bold ik_text-primary hover:ik_text-primary"
            href={`/`}
            as={"/"}
          >
            ইসলামের কন্ঠ
          </Link>
        </div>
      </nav>

      <style jsx>{`
        .ik_nav_primary .ik_container {
          padding: 8px 0;
          text-align: center;
        }
        .ik_nav_primary .ik_container a {
          font-size: 28px;
          font-weight: 600;
          color: #055547;
        }
      `}</style>
    </>
  );
}
