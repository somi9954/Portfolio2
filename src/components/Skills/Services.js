import Service from './Service'
import {ServicesData} from './ServicesData'

const Services = () => {
  return (
    <div id="services" className="section dark1">
      <div className="container">
        <div className="section-title">
          <h1 style={{color:'#999ca1'}}>My <span className="color-primary">SKILLS</span></h1>
        </div>
        <div className="columns">
          {ServicesData.map(item => (
              <Service key={item.id} title={item.title} images={item.images} icon={item.icon} details={item.details} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services;