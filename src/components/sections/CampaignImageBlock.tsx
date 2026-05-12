import { ImageWithFallback } from "@/components/common/ImageWithFallback";

export function CampaignImageBlock({ src, alt, title, description }: { src: string; alt: string; title: string; description: string }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white shadow-sm">
      <ImageWithFallback src={src} alt={alt} className="bg-[#EAF4FF]" imgClassName="h-auto w-full object-contain" />
      <div className="p-5">
        <h3 className="text-2xl font-black text-[#11205A]">{title}</h3>
        <p className="mt-2 leading-7 text-[#667085]">{description}</p>
      </div>
    </article>
  );
}
