import './about.scss';
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';
import aboutDatas from '../../components/aboutData/AboutData';


export default function About() {
	return (
	  <div className='about'>
		<Banner />
		<main className='about_main'>
		  {aboutDatas && aboutDatas.map(data => (
			<div key={data.id} className="about_main_collapse">
			  <Collapse style={{margin:'30px 0'}} title={data.title} content={data.content} />
			</div>
		  ))}
		</main>
	  </div>
	);
  }
