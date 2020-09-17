import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from 'material-ui-core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import theme from './theme'
import MissingPersonCard from './components/MissingPersonCard'

  const useStyles = makeStyles( theme=>({
    header: {
      margin: '2em',
      padding: '0.5em',
      fontSize: '2em',
      textAlign: 'center',
      backgroundColor: '#A9A9A9',
      color: 'white',
      borderRadius: '10px',
      maxWidth: '100%',
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]:{
        fontSize:'1rem'
      }
      },
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      [theme.breakpoints.down('sm')]:{
         gridTemplateColumns: '1fr'
      },
    },
    wrapper: {
      textAlign: 'center'
    },
    moreBtn: {
      position: 'sticky',
      position: '-webkit-sticky',
      bottom: '3rem',
      alignSelf: 'flex-end',
      justifySelf: 'center'
    },
    missingCard: {
      display: 'flex',
      justifyContent: 'center',
      marginLeft: '3rem',
      marginRight: '3rem',
      marginBottom: '3rem',
      flex: 1
    }
  }))

function PageNotFound () {
  const classes = useStyles()
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
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={classes.wrapper}>
          <div className={classes.header}>
            <h1>MISSING PERSONS</h1>
            <h4>You have reached this page because the page you are looking for does not exist. Instead of giving you  the standard error page, we thought we would use this opportunity to show you some mising persons in the hope that you may have seen one. Every set of eyes helps bring them home!</h4>
          </div>
          <div className={classes.cardContainer}>
            {data.slice(random ,show).map(item =>
            <div className={classes.missingCard}>
            <Paper elevation='20'><MissingPersonCard key={item.id_number} data={item}/>
            </Paper> </div>)}
          </div>
          <div className={classes.moreBtn}>
      <Button variant='contained' onClick={handleClick} color='primary'>Want to See More?</Button>
      </div>
    </div>
    </ThemeProvider>
    )

};

export default PageNotFound
