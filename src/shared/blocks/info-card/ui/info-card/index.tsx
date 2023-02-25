export interface InfoCardProps {
	image: string,
	title: string,
	text: string,
}

export const InfoCard = (props: InfoCardProps) => {
	return (
		<div>
			<img src={props.image} alt="cover" />
			<h4>{props.title}</h4>
			<p>{props.text}</p>
		</div>
	)
}
