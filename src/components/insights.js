import React from 'react'

const Insights = ({title, insights}) => {
  return (

    <React.Fragment>
      {title && <h2>{title}</h2>}
      <div className='list-group cards'>          
      { insights && insights.map((insight, index) => (   
          <a target='_blank' rel="noopener noreferrer" href={`https://airtable.com/tblosssvF4nn2TChF/viwIDA3HojnvLxvVf/${insight.recordId}?blocks=hide`} className='list-group-item' key={ insight.recordId }>
            <p>{ insight.data.Insight }
              <i className='fas fa-external-link-alt'></i>
            </p>
          </a>      
      ))}
      </div>			
    </React.Fragment>
  )
}
export default Insights
