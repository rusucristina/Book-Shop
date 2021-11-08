import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    background: "linear-gradient(to right,#4e3456, #5f5b81  )",
    padding: theme.spacing(3),
    width: "calc(100% - 0px)"
  },
  root: {
    flexGrow: 1,
  },
}));