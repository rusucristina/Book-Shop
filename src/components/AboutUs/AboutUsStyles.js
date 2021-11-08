import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    aboutUsGrid:{
        background:"linear-gradient(to right,#4e3456, #5f5b81)",
        width: "100vw",
        maxHeight: "650px",
        gridTemplateColumns:"2fr 6fr"
    },
    imgGrid:{
         width:"100%",  
    },
    headerImg:{
        borderRadius: "10%",
        width:"80%",
        maxHeight: "650px",
        maxWidth:"800px",
        margin:"0px 0 0 50px",
        boxShadow:" 0px 10px 10px 10px #76aae8 ",
        padding:"0",
    },
    
    textGrid:{
        maxHeight: "650px",
        margin:"0",
        padding:"0",
        boxSizing: "border-box",
        fontFamily: "arial",
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        minHeight: "100px",
    },

    headerText: {
        marginTop: "200px",
    },
    
}));