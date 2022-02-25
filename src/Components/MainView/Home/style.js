import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
        width: '80%',
        margin: 'auto',
        marginTop: 50
    },
    me_image: {
        borderRadius: '50%',
        width: 'auto',
        height: 'auto'
    },
    image_container: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center'
    },
    basic_info: {
        display: 'flex',
        height: 300,
        '& li': {
            fontSize: 'x-large',
            marginBottom: 20
        }
    },
    basic_info_name: {
        flexGrow: 1,
        '& h5': {
            fontSize: 50
        }
    },
    quote: {
        marginTop: 100,
        textAlign: 'center',
        margin: 'auto',
        width: '60%',
        fontStyle: 'italic',
        height: 'calc(100vh - 600px)'
    }
}))