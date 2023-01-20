import Image from "next/image";
import { useEffect } from "react";
import { content } from "../../utills/Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="  relative flex md:flex-row flex-col-reverse md:items-end   justify-around items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-24 "
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-dark_primary">
            {hero.firstName}{" "}
            <span className="text-blue-500">{hero.LastName}</span>
          </h1>
        </div>
        {/* first col */}
        <div className="pb-32  " data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex  justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem]  h-96">
            <Image width={500} src={hero.image} alt={""}/>
            
        </div>
      </div>
    </section>
  );
};

export default Hero;
