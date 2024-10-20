"use client";

import { useRouter } from "next/navigation";

export default function ButtonRedirect({ url, type, children }) {
  const { push } = useRouter();
  return (
    <button className={type} onClick={() => push(url)}>
      {children}
    </button>
  );
}
