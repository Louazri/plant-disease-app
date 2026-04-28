import { useEffect, useMemo, useState } from "react";
import { fetchHistory } from "../api/axios";
import { formatDateTime, toPercent } from "../utils/formatters";
import TopNav from "../components/home/TopNav";

const backgroundImageUrl =
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80";

function History() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadHistory = async () => {
      try {
        setIsLoading(true);
        const response = await fetchHistory();
        setItems(response?.data || []);
      } catch (error) {
        const status = error?.response?.status;
        if (status === 404 || status === 204) {
          setItems([]);
          setErrorMessage("");
        } else {
          setErrorMessage(error?.response?.data?.message || "Unable to load history.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadHistory();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-emerald-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-emerald-950/80" aria-hidden="true" />

      <TopNav />

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-16">
        <div className="mb-8 max-w-2xl">
          <h1 className="text-3xl font-semibold text-white">Detection History</h1>
          <p className="mt-2 text-sm text-emerald-100/70">
            Review previous AI scans, confidence scores, and uploaded images.
          </p>
        </div>

        {isLoading ? (
          <div className="rounded-3xl border border-white/10 bg-white/90 p-8 text-emerald-900 shadow-xl">
            Loading history...
          </div>
        ) : errorMessage ? (
          <div className="rounded-3xl border border-red-200/40 bg-red-500/10 p-6 text-red-100">
            {errorMessage}
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/90 p-8 text-emerald-900 shadow-xl">
            No scans yet. Upload a leaf image to start your first detection.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((item, index) => (
              <HistoryCard key={`${item.imageUrl}-${index}`} item={item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function HistoryCard({ item }) {
  const confidencePercent = useMemo(() => toPercent(item?.confidence), [item]);

  const formattedDate = formatDateTime(item?.createdAt) || "Unknown date";

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/90 text-emerald-950 shadow-xl">
      <div className="h-40 w-full bg-emerald-50">
        {item?.imageUrl ? (
          <img src={item.imageUrl} alt="Scan" className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-emerald-600">
            No image available
          </div>
        )}
      </div>
      <div className="space-y-3 p-5">
        <div>
          <p className="text-xs text-emerald-700/70">Disease</p>
          <p className="text-base font-semibold">{item?.disease || "Not detected"}</p>
        </div>
        <div className="flex items-center justify-between text-sm text-emerald-700/70">
          <span>Confidence</span>
          <span className="font-semibold text-emerald-900">{confidencePercent}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-emerald-100">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600"
            style={{ width: `${confidencePercent}%` }}
          />
        </div>
        <div className="text-xs text-emerald-700/60">{formattedDate}</div>
      </div>
    </article>
  );
}

export default History;
