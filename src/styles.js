import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down('md')]: {
    backgroundColor: theme.palette.secondary.main,
  },
  container: {
    boxSizing: 'border-box',
    backgroundColor: "white",
    marginTop: "50px",
    borderRadius: "20px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '85%'
  },
  containerData: {
    boxSizing: 'border-box',
    backgroundColor: "white",
    padding: '20px',
    paddingTop: '0px',
    paddingBottom: '0px',
    marginTop: "50px",
    marginBottom: "50px",
    borderRadius: "20px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '85%'
  },
  button: {
    margin: "20px"
  },
  submitButton: {
    marginTop: '20px'
  },
  select: {
    width: "200px",
    marginBottom: '20px'
  },
  label: {
    position: "relative",
    padding: "0px",
  },
  form: {
    margin: '20px',
    marginTop: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  loadingButton: {
    margin: '20px',
    marginTop: '0px'
  },
  divider: {
    backgroundColor: 'black',
    // border: '2px solid black',
    width: '50%',
    margin: '20px'
  },
  card: {
    color: '#fff',
    width: '90%',
    
    backgroundColor: '#424242',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    textShadow: '2px 2px 2px rgba(0,0,0,0.5)'

  }
}));

export default useStyles;
