import './App.css';
import {
	BarChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Bar,
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

function BarCharts() {
	return (
		<>
			<h1 className="text-heading">
				March 2023 Tech Report - Bar Chart
			</h1>
			<ResponsiveContainer width="50%" aspect={3}>
				<BarChart data={pdata} margin={{ right: 300 }}>
					<CartesianGrid />
					<XAxis dataKey="name"
						interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Bar dataKey="student"
						storke="black" fill="green"  />
					<Bar dataKey="months"
						stroke="red" fill="yellow" />
				</BarChart>
			</ResponsiveContainer>
		</>
	);
}

export default BarCharts;
