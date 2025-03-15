import { Flex } from "@radix-ui/themes";
import React from "react";
import { Clock } from "lucide-react";

const HappeningSection = () => {
  return (
    <>
      <section className="container mx-auto p-6 max-w-5xl">
        <h2 className="text-xl font-semibold mb-4">HAPPENING NOW</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div
              className="relative h-[42vh] bg-cover bg-center text-white p-6 flex flex-col justify-end rounded-sm"
              style={{ backgroundImage: "url('/picture1.jpg')" }}
            >
              <h2 className="text-xl font-bold">Large article title</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi exercitationem, ad tempora
              </p>
              <Flex gap={"1"} align={"center"}>
                <Clock size={13} />
                <p className="text-xs">2 min ago</p>
              </Flex>
            </div>
            <div
              className="relative h-[42vh] bg-cover bg-center text-white p-6 flex flex-col justify-end mt-4 rounded-sm"
              style={{ backgroundImage: "url('/picture2.jpg')" }}
            >
              <h2 className="text-xl font-bold">Large article title</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi exercitationem, ad tempora
              </p>
              <Flex gap={"1"} align={"center"}>
                <Clock size={13} />
                <p className="text-xs">2 min ago</p>
              </Flex>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative rounded-sm overflow-hidden">
              <img
                src="/picture1.jpg"
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: "20vh",
                  backgroundColor: "var(--gray-5)",
                }}
              />
              <Flex direction={"column"} mt={"2"}>
                <p className="text-sm font-medium">Small title</p>
                <Flex gap={"2"} align={"center"} className="text-gray-400">
                  <Clock size={13} />
                  <p className="text-xs">2 min ago</p>
                </Flex>
              </Flex>
            </div>
            <div className="relative rounded-sm overflow-hidden">
              <img
                src="/picture2.jpg"
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: "20vh",
                  backgroundColor: "var(--gray-5)",
                }}
              />
              <Flex direction={"column"} mt={"2"}>
                <p className="text-sm font-medium">Small title</p>
                <Flex gap={"2"} align={"center"} className="text-gray-400">
                  <Clock size={13} />
                  <p className="text-xs">2 min ago</p>
                </Flex>
              </Flex>
            </div>

            <div className="relative rounded-sm overflow-hidden">
              <img
                src="/picture.jpg"
                alt="Bold typography"
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                  height: "20vh",
                  backgroundColor: "var(--gray-5)",
                }}
              />
              <Flex direction={"column"} mt={"2"}>
                <p className="text-sm font-medium">Small title</p>
                <Flex gap={"2"} align={"center"} className="text-gray-400">
                  <Clock size={13} />
                  <p className="text-xs">2 min ago</p>
                </Flex>
              </Flex>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HappeningSection;
