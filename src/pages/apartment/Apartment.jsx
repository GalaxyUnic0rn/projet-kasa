import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from '../../data/data';
import Slider from "../../components/carousel/Carousel";
import Collapse from '../../components/collapse/Collapse';
import NotFound from '../404/404';
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating';

const Apartment = () => {
    const [imageSlider, setImageSlider] = useState([]);
    const { id } = useParams();
    const dataCurrentAccomodation = datas.find(data => data.id === id);

    useEffect(() => {
        if (dataCurrentAccomodation) {
            setImageSlider(dataCurrentAccomodation.pictures);
        }
    }, [id, dataCurrentAccomodation]);

    if (!dataCurrentAccomodation) {
        return <NotFound />;
    }

    const { title, location, tags, host, description, equipments, rating: hostRating } = dataCurrentAccomodation;
    const { name, picture: hostPicture } = host;
    const [firstName, lastName] = name.split(' ');

    return (
        <div className='accomodation_wrapper'>
            <Slider imageSlider={imageSlider} />
            <main className="accomodation">
                <div className="accomodation_content">
                    <div className="accomodation_content_infos">
                        <h1>{title}</h1>
                        <p>{location}</p>
                        <div>
                            {tags.map((tag, index) => 
                                <Tag key={index} tag={tag}/>
                            )}
                        </div>
                    </div>
                    <div className="accomodation_content_host">
                        <div>
                            <div className='accomodation_content_host_name'>
                                <span>{firstName}</span>
                                <span>{lastName}</span>
                            </div>
                            <img src={hostPicture} alt={`host of ${title}`} />
                        </div>

                        <div className="accomodation_content_host_stars">
                            <Rating rating={hostRating} />
                        </div>
                    </div>
                </div>
                <div className="accomodation_collapse">
                    <div className="accomodation_collapse_item">
                        <Collapse title={'Description'} content={description}/>
                    </div>
                    <div className="accomodation_collapse_item">
                        <Collapse title={'Équipements'} content={equipments}/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Apartment;
