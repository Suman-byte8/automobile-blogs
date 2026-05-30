import { getAdUnit } from "../config/adsConfig";

export default function AdUnit({ adId, className = "" }) {
  const ad = getAdUnit(adId);

  if (!ad) {
    console.warn(`Ad unit with id "${adId}" not found in config.`);
    return null;
  }

  return (
    <div
      className={`ad-unit ${ad.responsiveVisibility} ${className}`}
      data-ad-id={ad.id}
      data-ad-slot={ad.slot}
      data-ad-size={ad.size}
      style={{
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <div
        className="mx-auto flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50"
        style={{
          width: "100%",
          maxWidth: `${ad.width}px`,
          height: `${ad.height}px`,
          maxHeight: `${ad.height}px`,
        }}
      >
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Advertisement
          </p>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            {ad.label}
          </p>
          <p className="mt-0.5 text-xs text-gray-400">
            {ad.size}
          </p>
        </div>
      </div>
    </div>
  );
}

// Ad container that renders a group of ads with proper spacing
export function AdGroup({
  adIds,
  className = "",
  gap = "gap-6",
}) {
  return (
    <div className={`flex flex-col ${gap} ${className}`}>
      {adIds.map((adId) => (
        <AdUnit key={adId} adId={adId} />
      ))}
    </div>
  );
}
