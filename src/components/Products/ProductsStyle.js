import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    background: "linear-gradient(to right, #1f1b23, #434343)",
    padding: theme.spacing(3),
    width: "calc(100% - 0px)"
  },
  root: {
    flexGrow: 1,
  },
}));