import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
import propTypes from "prop-types"

const PopulationChart = ({ populationData }) => {
  const year = []
  const population = []

  populationData.populationCounts !== undefined &&
    populationData.populationCounts.map((ele) => {
      year.push(ele.year)
      population.push(ele.value)
    })

  const options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Population chart",
        color: "blue",
      },
    },
  }

  const labels = year

  const data = {
    labels,
    datasets: [
      {
        label: "Population",
        data: population,
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  }

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px 10px",
        borderRadius: "10px",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  )
}
PopulationChart.propTypes={
  populationData:propTypes.object

}
export default PopulationChart
