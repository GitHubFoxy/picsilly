import Image from "next/image";
import { Button } from "../../../ui/button";

export default function Logo() {
  return (
    <div className="">
      <Button className="flex items-center gap-2 text-white">
        <Image alt="" src={"/logo.png"} width={20} height={20} />
        <div>PICSILLY</div>
      </Button>
    </div>
  );
}
