"use client";

import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CustomPagination({ limit = 12, total = 100 }) {
  const [skip, setSkip] = useState(0);
  const totalPage = Math.ceil(total / limit);
  const router = useRouter();
  const handlePagination = (event: any, page: number) => {
    setSkip((page - 1) * limit);
    if (limit && total) {
      router.push(`/products?limit=${limit}&skip=${skip}`);
    }
  };

  return <Pagination count={totalPage} onChange={handlePagination} />;
}
