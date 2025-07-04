export default function FeatureCard({ title, description }) {
  return (
    <div className="p-6 bg-slate-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition text-left">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
