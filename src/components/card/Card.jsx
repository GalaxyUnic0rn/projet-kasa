import './card.scss'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {

	return (
		<Link to={`/property/${id}`} className="gallery_card">
			<img src={cover} alt={"image of kasa website -" + title} />
			<h3>{title}</h3>	
		</Link>
	)
}
