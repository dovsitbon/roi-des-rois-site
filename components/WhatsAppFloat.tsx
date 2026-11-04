import { WhatsAppIcon } from "@/components/icons";
import { waLink } from "@/lib/quote";

export function WhatsAppFloat({ label, message }: { label: string; message: string }) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed end-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-noir/90 text-gold-light shadow-[0_10px_30px_rgba(0,0,0,0.45)] backdrop-blur transition-colors duration-500 hover:bg-gold hover:text-noir md:end-8 md:bottom-8"
    >
      <WhatsAppIcon />
    </a>
  );
}
