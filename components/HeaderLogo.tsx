import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Image
      src="/images/logo_light.png"
      height={45}
      width={100}
      className="z-20"
      alt="Lipsson logo"
    />
  );
};

export default HeaderLogo;
