import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
toolbar: theme.mixins.toolbar,
root: {
  maxWidth: '100%',
  boxShadow:" 2px 2px 10px 2px #76aae8 ",
},
  title:{
    margin:"30px",
    display:"flex",
    alignText: "center !important",
    position: "relative",
    fontSize: "2.5rem",
    color: "#6676bb",
    textTransform: "uppercase",
    width: "650px",
    textAlign: "center",
  },
  emptyButton: {
    backgroundColor:"#9a579d",
    color:"white",
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
    backgroundColor:"#6676bb",
    color:"white"
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));