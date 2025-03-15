import { Button, Flex } from "@radix-ui/themes";
import { Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="bg-white relative mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div
          className="relative md:col-span-2 h-[60vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/picture.jpg')" }}
        >
          <div className="absolute inset-0"></div>
          <div className="relative text-white px-4 max-w-lg">
            <h1 className="text-2xl font-bold border-b pb-4">WORLD NEWS</h1>

            <h1 className="text-xl mt-4 font-bold">
              Amazing places in America to visit
            </h1>
            <p className="my-2 text-sm ">
              For some reasons - this country, this city, this neightborhood.
              this particular street - is the place your living a majority of
              your life in.
            </p>
            <Button color="red">Learn More</Button>
          </div>
        </div>
        <aside className="bg-white p-4 my-auto rounded-lg">
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-5">
            MORE NEWS
          </h2>
          <div className="mt-4 space-y-4">
            <Flex direction={"column"} gap={"2"}>
              <h3 className="text-red-500 text-sm font-bold">TRAVEL</h3>
              <p className="text-sm font-medium">Article title</p>
              <p className="text-xs text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Flex gap={"1"} align={"center"} className="text-gray-400">
                <Clock size={13} />
                <p className="text-xs">2 min ago</p>
              </Flex>
            </Flex>
            <Flex direction={"column"} gap={"2"}>
              <h3 className="text-red-500 text-sm font-bold">TECHNOLOGY</h3>
              <p className="text-sm font-medium">Article title</p>
              <p className="text-xs text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Flex gap={"1"} align={"center"} className="text-gray-400">
                <Clock size={13} />
                <p className="text-xs">2 min ago</p>
              </Flex>
            </Flex>
          </div>
        </aside>
      </section>
    </>
  );
};

export default HeroSection;
