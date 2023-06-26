import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import Jiggi from "../../public/dev-ed-wave.png";
type Props = {};

const Hero = (props: Props) => {
  const flexCenter = "flex justify-center gap-16";
  return (
    <section>
      <div className="text-center p-10">
        <h2 className="text-4xl py-1 text-teal-400 font-medium">
          Onogu Ojonugwa Martins
        </h2>
        <h3 className="text-3xl py-1 ">Frontend Engineer</h3>
        <p className="text-md py-3 leading-8 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
          molestiae debitis placeat quos temporibus ratione.
        </p>
      </div>
      <div className={`${flexCenter} text-5xl text-gray-600 `}>
        <AiFillTwitterCircle />
        <AiFillLinkedin />
      </div>
      <div className="relative bg-gradient-to-b from-teal-300 to-teal-100 rounded-full w-80 h-80 mx-auto mt-10">
        <Image src={Jiggi} alt="image of developer" objectFit="cover" />
      </div>
    </section>
  );
};

export default Hero;
