import { Avatar } from "@material-ui/core"

const ContactItem = ({item, _style_ = null}) => {
    return (
        // <a href='https://google.com'><Avatar src={item} className={_style_} alt='item'></Avatar></a>
        <a href='https://google.com'><Avatar src={item} className={_style_} alt='item'></Avatar></a>
    )
}

export default ContactItem