import { Box } from "@material-ui/core";
import Category from "./Categories";
import { languages, framework, database, other } from "./Items/data";

const Skills = () => {
    return (
        <Box>
            <Category name="Language" data={languages}/>
            <Category name="Framework / Library" data={framework}/>
            <Category name="Database" data={database}/>
            <Category name="Other" data={other}/>
        </Box>
    )
}

export default Skills