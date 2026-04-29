"use client";

import * as React from "react";
import { HelpCircle, MessageCircle, ChevronDown } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
CustomAccordionItem.displayName = "CustomAccordionItem";

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex flex-1 items-center justify-between gap-4 rounded-2xl p-5 text-left",
        "transition-all focus-visible:outline-none",
        "data-[state=open]:shadow-md",
        className
      )}
      style={
        {
          backgroundColor: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(200,98,42,0.18)",
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="flex items-center gap-4">
        <HelpCircle className="h-5 w-5 flex-shrink-0" style={{ color: "#c8622a" }} />
        <span
          className="font-sans text-base font-medium leading-snug"
          style={{ color: "var(--text-secondary)" }}
        >
          {children}
        </span>
      </div>
      <div
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-105 group-data-[state=open]:rotate-180"
        style={{ backgroundColor: "rgba(200,98,42,0.12)" }}
      >
        <ChevronDown className="h-4 w-4" style={{ color: "#c8622a" }} />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = "CustomAccordionTrigger";

const CustomAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden",
      "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-2",
      className
    )}
    {...props}
  >
    <div className="mt-3 ml-14">
      <div
        className="flex items-start gap-4 rounded-2xl p-5 shadow-sm transition-all"
        style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--card-border)",
        }}
      >
        <span
          className="flex-1 font-sans text-sm leading-relaxed"
          style={{ color: "var(--text-secondary-muted)" }}
        >
          {children}
        </span>
        <div
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-transform hover:scale-105"
          style={{ backgroundColor: "rgba(200,98,42,0.1)" }}
        >
          <MessageCircle className="h-5 w-5" style={{ color: "#c8622a" }} />
        </div>
      </div>
    </div>
  </AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = "CustomAccordionContent";

export {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
};
