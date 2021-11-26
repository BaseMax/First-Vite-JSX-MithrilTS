import m from "mithril"
import classes from "./Items.module.css"

export const Items = () => {
    return {
        view: () => {
        return (
            <div className={classes.loaderContainer}>
                <div className={classes.loader} />
            </div>
        )
        },
    }
}
