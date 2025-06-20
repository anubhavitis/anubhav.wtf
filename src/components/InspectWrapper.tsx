"use client";

import Inspect from "inspx";

interface InspectWrapperProps {
  children: React.ReactNode;
}

export default function InspectWrapper({ children }: InspectWrapperProps) {
  return <Inspect>{children as React.ReactElement}</Inspect>;
}
