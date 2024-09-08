import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full">
      <Image
        src="/banner.png"
        alt="Banner Background"
        className="w-screen h-auto xl:h-[75vh] 2xl:h-[60vh] max-h-[700px] "
        width={1500}
        height={600}
      />
    </div>
  );
};

export default Banner;
