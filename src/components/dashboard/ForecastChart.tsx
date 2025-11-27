import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Props {
  mode: 'career' | 'business';
}

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 280 },
  { name: 'May', value: 600 },
  { name: 'Jun', value: 450 },
];

export default function ForecastChart({ mode }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="font-medium text-[#0033A0] mb-4">
        {mode === 'career' ? 'Career Growth Forecast' : 'Business Revenue Forecast'}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#0033A0" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
