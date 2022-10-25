import Image from "next/image";

const LipssonHero = () => {
  return (
    <Image
      src="/images/logo.png"
      layout="responsive"
      className="xs:h-[200px]"
      alt="Lipsson logo"
      width={600}
      height={700}
    />
  );
};

export default LipssonHero;
