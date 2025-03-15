import { Flex } from "@radix-ui/themes";
import { Clock } from "lucide-react";

const TrendingSection = () => {
  return (
    <>
      <section className="container mx-auto p-6 max-w-5xl">
        <h2 className="text-xl font-semibold mb-4">TRENDING</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow rounded-sm overflow-hidden">
            <img
              src="/picture1.jpg"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,

                backgroundColor: "var(--gray-5)",
              }}
            />
            <Flex direction={"column"} p={"4"} gap={"2"}>
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
          <div className="bg-white shadow rounded-sm overflow-hidden">
            <img
              src="/picture.jpg"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
            />
            <Flex direction={"column"} p={"4"} gap={"2"}>
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
          <div className="bg-white shadow rounded-sm overflow-hidden">
            <img
              src="/picture2.jpg"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,

                backgroundColor: "var(--gray-5)",
              }}
            />
            <Flex direction={"column"} p={"4"} gap={"2"}>
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
        </div>
      </section>
    </>
  );
};

export default TrendingSection;
