import React from 'react'
import { Link } from 'gatsby'
import { isEmpty } from '../utils'

const Card = ({cards, base}) => {

  return (
     <React.Fragment>
      {cards
        .filter(v => !isEmpty(v.node) && !v.node.data.Hidden)
        .map((v, index) => {
          const data = v.node.data
          return (
            <div key={ v.node.recordId } class='col-xs-12 col-sm-6 col-lg-3'>      
              <Link to={`/${base}/${v.node.recordId}`} className='thumbnail'>
                <div className='image' data-toggle='tooltip' style={{ backgroundColor: data.Colour }} >
                  { data.Priority && <span className='priority'>PRIORITY</span>}
  								{ data.Image && !data.Illustration && data.Image[0].url.endsWith('.svg') && <img src={ data.Image[0].url } height='110' alt='' />}
  								{ data.Image && !data.Illustration && !data.Image[0].url.endsWith('.svg') && <img src={ data.Image[0].url } width='100%' alt='' />}
                  { data.Illustration && <img src={ data.Illustration[0].url } width='150' alt='' />}
                </div>
                <div className='text'>
                  <h3 data-toggle='tooltip' title='Opportunities'>{ data.Name }</h3>
                  <p className='badges' data-toggle='tooltip' title='Opportunities'>
                  { data.Attributes && data.Attributes.map((attribute, index) => <span className='badge badge-pill badge-primary' key={ index }>{ attribute }</span>)}
                  { data.Personas && data.Personas.map( (persona, index) => <span className='badge badge-pill badge-secondary' key={ index }>{ persona.data.Name }</span> )}
                  </p>
                </div>
              </Link>
            </div>     
          )
      })}
    </React.Fragment>
  ) 
}
export default Card