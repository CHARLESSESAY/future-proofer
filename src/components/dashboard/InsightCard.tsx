interface Props {
  title: string;
  value: string;
  trend: string;
  color: string;
}

export default function InsightCard({ title, value, trend, color }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h3 className="font-medium text-gray-700 mb-2 text-sm">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mb-3">{value}</p>
      <p className={`${color} text-sm font-semibold`}>{trend}</p>
    </div>
  );
}
