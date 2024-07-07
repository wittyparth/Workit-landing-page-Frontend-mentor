import "./App.css";
import lightLogo from "./assets/images/logo-light.svg";
import darkLogo from "./assets/images/logo-dark.svg";
import phone from "./assets/images/image-hero.webp";
import pattern1 from "./assets/images/bg-pattern-1.svg";
import pattern2 from "./assets/images/bg-pattern-2.svg";
import pattern3 from "./assets/images/bg-pattern-3.svg";
import person from "./assets/images/image-founder.webp";
import facebook from "./assets/images/facebook.svg";
import instagram from "./assets/images/instagram.svg";
import twitter from "./assets/images/twitter.svg";

function App() {
  const data = [
    {
      id: 1,
      heading: "Actionable insights",
      paragraph:
        "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.",
    },
    {
      id: 2,
      heading: "Data-driven decisions",
      paragraph:
        "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.",
    },
    {
      id: 3,
      heading: "Always affordable",
      paragraph:
        "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.",
    },
  ];
  return (
    <main className="flex flex-col font-manrope overflow-x-clip bg-white">
      <div className="bg-dark_purple">
        <nav className="flex justify-between mt-10 text-white items-center px-[5%]">
          <img src={lightLogo} alt="Workit" className="w-[100px]" />
          <p className="text-lg border-b-neon_green border-b-2 pb-1 font-semibold cursor-pointer">
            Apply for access
          </p>
        </nav>
        <div className="mt-10 text-center text-white rounded-b-3xl pb-28">
          <h1 className="font-fraunces text-[3.5rem] my-8 max-w-[450px] mx-auto">
            Data{" "}
            <span className="border-b-[3px] border-b-neon_green pb-1">
              tailored
            </span>{" "}
            to your needs.
          </h1>
          <div className="text-black py-4 px-8 bg-neon_green w-fit mx-auto text-lg font-semibold cursor-pointer border-2 border-neon_green hover:bg-dark_purple hover:text-white transition-colors duration-500">
            Learn more
          </div>
          {/* <img
            src={pattern1}
            alt="pattern1"
            className="absolute left-[20%] top-[40%] w-[100px]"
          /> */}
          {/* <img src={pattern2} alt="pattern2" className="absolute" /> */}
        </div>
      </div>
      <div className="shape relative overflow-clip"></div>
      <img
        src={phone}
        alt=""
        className="w-[100%] mx-auto mt-[-120px] z-10 max-w-[500px]"
      />
      <div className="p-8 flex flex-col gap-8 border-b-[40%] mb-10">
        {data.map((item) => (
          <div className="flex flex-col justify-between py-3 items-center gap-4">
            <p className="w-[55px] h-[55px] rounded-full border-2 border-dark_purple flex justify-center items-center text-xl font-fraunces">
              {item.id}
            </p>
            <h1 className="text-3xl font-semibold font-fraunces text-dark_purple tracking-wide">
              {item.heading}
            </h1>
            <p className="text-dark_gray tracking-wide text-center text-md">
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>
      <div>
        <img
          src={person}
          alt="founder"
          className="max-w-[400px] mx-auto -z-10"
        />
        <div className="p-4 bg-dark_purple text-white flex flex-col gap-6 mx-6 text-center md:text-left mt-[-20px] rounded-md py-6 md:w-[50%] float-right md:p-8">
          <h1 className="font-fraunces text-3xl">Be the first to test</h1>
          <p className="text-md font-manrope">
            Hi, I'm Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I’ll be in touch to schedule a
            call.
          </p>
          <div className="text-black py-4 px-8 bg-neon_green w-fit mx-auto text-md font-semibold cursor-pointer border-2 border-neon_green hover:bg-dark_purple hover:text-white transition-colors duration-500">
            Apply for access
          </div>
        </div>
      </div>
      <img src={darkLogo} alt="" className="w-[100px] mx-auto my-10" />
      <div className="mx-auto w-fit flex flex-row justify-between items-center p-4 mb-10">
        <img src={facebook} alt="facebook" className="mx-3 w-[1.5em]" />
        <img src={instagram} alt="facebook" className="mx-3 w-[1.5em]" />
        <img src={twitter} alt="facebook" className="mx-3 w-[1.5em]" />
      </div>
    </main>
  );
}

export default App;
