import Navbar from "../components/navbar";
import FeatureCard from "../components/featurecard";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-slate-100 min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-32 sm:py-44">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight max-w-4xl">
          📄 Unlock Your PDFs with <span className="text-blue-600">SmartDoc AI</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
          Upload. Chat. Summarize. Discover knowledge within your documents using AI.
        </p>
        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 text-lg rounded-xl hover:bg-blue-700 transition shadow">
            Upload Now
          </button>
          <button className="bg-white border border-gray-300 px-6 py-3 text-lg rounded-xl hover:bg-gray-100 transition">
            How It Works
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 text-gray-800">
          What Can SmartDoc AI Do?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            title="💬 Chat with PDFs"
            description="Ask natural language questions and get answers directly from document content."
          />
          <FeatureCard
            title="⚡ Instant Summaries"
            description="Get quick summaries of long reports, articles, or legal papers."
          />
          <FeatureCard
            title="📊 Insight Graphs"
            description="Visualize topics, links, and entities using semantic graphs powered by AI."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4">Start exploring your PDFs like never before</h2>
        <p className="text-lg mb-8">No sign-up required. Just upload and chat instantly.</p>
        <button className="bg-white text-blue-700 px-6 py-3 text-lg rounded-xl hover:bg-gray-100 transition font-semibold">
          Try SmartDoc Now →
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-8">
        Built by Suman © {new Date().getFullYear()} • SmartDoc AI
      </footer>
    </div>
  );
}
