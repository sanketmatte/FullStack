import './App.css';
import {
	LineChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';

// Sample chart data
const pdata = [
	{
		name: 'MongoDb',
		student: 11,
		months: 3
	},
	{
		name: 'Javascript',
		student: 15,
		months: 2
	},
	{
		name: 'PHP',
		student: 5,
		months: 3
	},
	{
		name: 'Java',
		student: 10,
		months: 3.5
	},
	{
		name: 'C#',
		student: 9,
		months: 3.5
	},
	{
		name: 'C++',
		student: 10,
		months: 2
	},
];

function LineCharts() {
	return (
		<>
			<h1 className="text-heading">
				March 2023 Tech Report - Line Chart
			</h1>
			<ResponsiveContainer width="50%" aspect={3}>
				<LineChart data={pdata} margin={{ right: 300 }}>
					<CartesianGrid />
					<XAxis dataKey="name"
						interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line dataKey="student"
						stroke="black" activeDot={{ r: 8 }} />
					<Line dataKey="months"
						stroke="red" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}

export default LineCharts;
