import Image from "next/image";
import Code from "../../public/code.png";
type Props = {};

const Services = (props: Props) => {
  return (
    <section>
      <h2 className="text-3xl py-1">Services I Offer</h2>
      <p className="text-md, py-2, leading-8 text-gray-800 ">
        As a frontend engineer, i have worked as a freelance engineer, web
        developer, project manager, and mobile engineer for{" "}
        <span className="text-teal-400">startups</span> and{" "}
        <span className="text-teal-400">agencies</span>. I have collaborated
        with amazing and talented people all over the world to create world
        class applications for businesses.
      </p>
      <p className="text-md py-2 leading-8, text-gray-800">
        I offer a wide range of services, including programming and teaching.
      </p>
      <div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10">
          <Image
            src={Code}
            alt="image of developer"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="font-medium text-lg pt-8 pb-2">Hello</h3>
          <p className="py2">
            bjjbd jnjkd kjbnkjkdf jknbkndf jknjkndfnjknkmsbhh kjbjkfnknfdb
            jbkjndfs kjijr jnfdf code
          </p>
          <h4 className="text-teal-600 py-4">Code Stack i use</h4>
          <p className="py-1 text-gray-700">hi</p>
          <p className="py-1 text-gray-700">hi</p>
          <p className="py-1 text-gray-700">hi</p>
          <p className="py-1 text-gray-700">hi</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
          <Image
            src={Code}
            alt="image of developer"
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="font-medium text-lg pt-8 pb-2">Hello</h3>
          <p className="py2">
            bjjbd jnjkd kjbnkjkdf jknbkndf jknjkndfnjknkmsbhh kjbjkfnknfdb
            jbkjndfs kjijr jnfdf code
          </p>
          <h4 className="text-teal-600 py-4">Code Stack i use</h4>
          <p className="py-1 text-gray-700">hi</p>
          <p className="py-1 text-gray-700">hi</p>
          <p className="py-1 text-gray-700">hi</p>
          <p className="py-1 text-gray-700">hi</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
