import React from 'react'
import styles from './styles.module.css'
import Button from 'material-ui-core/Button'

function MissingPersonCard(props){
    const {date_reported, id_number, first_name, last_name, ethnicity, current_age, age_when_missing, gender, height, weight, hair_color, eye_color, circumstances, agency_name, agency_city, agency_state, agency_address, agency_zip, thumbnail_url, case_qr_code, agency_website} = props.data
    const name = `${first_name} ${last_name}`
    const link = `https://www.namus.gov/MissingPersons/Case#/${id_number}?nav`
    // Todo: Figure out a way to improve image loading flow; design cards
    return (
        <div className={styles.wrapper}>
          <h1>Please Help Find Me</h1>
            <img src={thumbnail_url} alt={'photograph of ' + { name }} />
            {date_reported !== '' ?
          <h3>My name is {name}. I am a {current_age} year old {ethnicity} {gender}. I was reported missing from {agency_city}, {agency_state} on  {date_reported}.</h3> :
          <h3>My name is {name}. I am a {current_age} year old {ethnicity} {gender}. I was reported missing from {agency_city}, {agency_state}.</h3>}
          <h3>Physical Description:</h3>
          <p>{ethnicity} {gender}</p>
          <p>{height} Tall</p>
          <p>{weight}</p>
          <p>{hair_color} hair, {eye_color} eyes</p>
          <h3>{name} is missing from {agency_city}, {agency_state}</h3>
          <h3>Circumstances surrounding {name}'s disappearance: </h3>
          <h4>{circumstances}</h4>
          <h2>If you have seen {name}, please contact:</h2>
          {agency_website !== '' ?
          (<a href={agency_website}>
          <h3>{agency_name}</h3></a>)
          : (<h3>{agency_name}</h3>)}
          <div>
          <div>
          <h2>Or Call the National Center For Missing & Exploited Children:</h2>
          <a href='tel:1-800-843-5678'><h3>1-800-THE-LOST</h3></a>
          </div>
          <Button className={styles.infoBtn} href={link} color='secondary' variant='outlined'>More Information</Button>
          </div>
        </div>
    )
}

export default MissingPersonCard