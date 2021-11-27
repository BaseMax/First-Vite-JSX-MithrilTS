import m from "mithril"
import classes from "./Items.module.css"

export const Items = () => {
    let loading = false;

    return {
        view: () => {
        return (
            <>
                {loading ? 
                    <div className={classes.loaderContainer}>
                        <div className={classes.loader} />
                    </div>
                : null }
            </>
        )
        },
    }
}
