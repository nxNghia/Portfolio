import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    root: {
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 100
    },
    projects_container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    button_container: {
        textAlign: 'center',
        marginTop: 50
    }
}))