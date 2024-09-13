import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full">
      <Image
        src="/banner.png"
        alt="Banner Background"
        className="w-screen h-auto xl:h-[85vh] 2xl:h-[70vh] max-h-[700px] "
        width={1500}
        height={600}
        priority
      />
    </div>
  );
};

export default Banner;
