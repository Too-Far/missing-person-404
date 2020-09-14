import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Paper from 'material-ui-core/Paper'
import MissingPersonCard from './components/MissingPersonCard'


function PageNotFound () {
  const randomInt = Math.floor((Math.random() * 300) + 0)
  const [random, setRandom] = useState(Math.floor((Math.random() * 325) +1))
  const [show, setShow] = useState(random + 2)
  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get('https://missingpersonapi.herokuapp.com/missingperson/').then(
      res=>{
        setData(Array.from(res.data))
      }
    ).catch( err => alert(err))
  }, []);


  const handleClick=(()=>{
    setShow(show + 2)
  })

    return (
      <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1>MISSING PERSONS</h1>
            <h4>You have reached this page because the page you are looking for does not exist. Instead of giving you  the standard error page, we thought we would use this opportunity to show you some mising persons in the hope that you may have seen one. Every set of eyes helps bring them home!</h4>
          </div>
          <div className={styles.cardContainer}>
            {data.slice(random ,show).map(item =>
            <div className={styles.missingCard}>
            <Paper elevation='20'><MissingPersonCard key={item.id_number} data={item}/>
            </Paper> </div>)}
          </div>
          <div className={styles.moreBtn}>
      <Button variant='contained' onClick={handleClick} color='primary'>Want to See More?</Button>
      </div>
    </div>
    )

};

export default PageNotFound
