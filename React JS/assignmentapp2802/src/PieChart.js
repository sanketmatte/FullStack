import './App.css';
import {
	PieChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Pie,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';

// Sample chart data
const pdata = [
	{
		name: 'MongoDb',
		student: 11,
		months: 3,
        fill:'blue'
	},
	{
		name: 'Javascript',
		student: 15,
		months: 2,
        fill:'cyan'

	},
	{
		name: 'PHP',
		student: 5,
		months: 3,
        fill:'green'

	},
	{
		name: 'Java',
		student: 10,
		months: 3.5,
        fill:'red'

	},
	{
		name: 'C#',
		student: 9,
		months: 3.5,
        fill:'black'

	},
	{
		name: 'C++',
		student: 10,
		months: 2,
        fill:'orange'

	},
];

function PieCharts() {
	return (
		<>
			<h1 className="text-heading">
				March 2023 Tech Report - Pie Chart
			</h1>
			<ResponsiveContainer width="50%" aspect={3}>
				<PieChart data={pdata} margin={{ right: 300 }}>

					{/* <CartesianGrid />
					<XAxis dataKey="name" data={pdata}
						interval={'preserveStartEnd'} />
					<YAxis></YAxis> */}
					<Legend />
					<Tooltip />
					<Pie dataKey="student" data={pdata}
						  />
					{/* <Pie dataKey="months" data={pdata}
						stroke="red" fill="cyan" /> */}
				</PieChart>
			</ResponsiveContainer>
            {/* <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                <Pie
                    dataKey="months"
                    isAnimationActive={false}
                    data={pdata}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Pie dataKey="student" data={pdata} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                <Tooltip />
                </PieChart>
            </ResponsiveContainer> */}
		</>
	);
}

export default PieCharts;
