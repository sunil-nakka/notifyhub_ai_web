import { PageHero } from "@/components/pages/page-hero";
import { ButtonLink } from "@/components/ui/primitives";
import { IconArrow } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title="That page doesn't exist."
      lede="The link may be out of date, or the page may not have been built yet."
      actions={
        <>
          <ButtonLink href="/" size="lg">
            Back to home
            <IconArrow className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            Talk to us
          </ButtonLink>
        </>
      }
    />
  );
}
