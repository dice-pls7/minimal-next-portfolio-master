import { Metadata } from "next";

import { AwwwardsContactPage } from "@/components/awwwards";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <ClientPageWrapper>
      <AwwwardsContactPage />
    </ClientPageWrapper>
  );
}
