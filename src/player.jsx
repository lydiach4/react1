
export default (props) => {
    return (
        <div className="flex flex-col text-center gap-3 border border-blue-700 bg-blue-300 hover:opacity-50 text-blue-900">
<img className="object-cover w-[500px] h-[500px]" src={props.imageURL} alt="" />
<h1 className="text-xl font-bold "> {`Name : ${props.name}`}</h1>
<h2 className="text-xl font-thin "> {`Age : ${props.age}`}</h2>
<h3 className="text-xl font-semibold ">{`Nationality : ${props.nationality}`}</h3>
<h4 className="text-xl font-thin ">{`Team : ${props.team}`}</h4>
<h5 className="text-xl font-black ">{`Jersey Number : ${props.jerseyNumber}`}</h5>
        </div>
    )
}