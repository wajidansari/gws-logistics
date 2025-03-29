import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const Accordion = ({ items }) => {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className=" text-black  w-full rounded-lg  font-sans"
    >
      {items.map((item, index) => (
        <AccordionPrimitive.Item
          key={index}
          value={item.value}

        >
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger
              className={clsx(
                "group flex w-full items-center justify-between px-4 py-3 text-lg font-medium",
                "bg-neutral-100 text-black",
              
              )}
            >
              {item.title}
              <ChevronDown
                className="text-black transition-transform group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="bg-neutral-100 text-black px-4 py-3 ">
            {item.content}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

export default Accordion;
