import { Card } from "@mui/material";
import Image from "next/image";

export default function TopBrandCard({ imageUrl }) {
  return (
    <Card>
      <Image height={180} width={180} src={imageUrl} alt="" />
    </Card>
  );
}
