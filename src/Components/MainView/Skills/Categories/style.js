import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
    category: {
        marginLeft: 30,
        marginBottom: 40,
        borderTop: '2px solid #aaa',
        '& > div': {
            marginBottom: 20,
            marginLeft: 30
        }
    },
    title: {
        fontSize: 'xx-large',
        marginBottom: 10
    }
}))