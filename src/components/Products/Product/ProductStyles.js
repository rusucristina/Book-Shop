import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    boxShadow:" 2px 2px 10px 2px #76aae8 ",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    justifyContent: 'space-between',
  },
  bookTitle:{
    fontSize:"1.5rem",
    fontFamily:"cursive"
  }
}));