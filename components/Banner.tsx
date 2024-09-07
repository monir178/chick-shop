import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full">
      <Image
        src="/banner.png"
        alt="Banner Background"
        className="w-screen h-auto  xl:h-[70vh] "
        width={1500}
        height={600}
      />
    </div>
  );
};

export default Banner;
