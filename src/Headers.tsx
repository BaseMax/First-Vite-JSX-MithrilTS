import m from "mithril"
import classes from "./Headers.module.css"

// import searchIcon from "./assets/search.svg"
// import notificationIcon from "./assets/notification.svg"
import miresehLogo from "./assets/logo.png"

const Link = m.route.Link;

export const Headers = () => {
    // let searchFocus = true;
    let searchFocus = false;
    const notificationHandler = () => {

    };
    const searchHandler = () => {
        // m.route.set("/search/");
        searchFocus = !searchFocus;
    };
    return {
        view: () => {
        return (
            <header className={classes.header}>
                <form>
                    <svg onclick={searchHandler} className={classes.searchIcon} fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50">
                        <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" />
                    </svg>
                    { searchFocus === false ?
                        <label onclick={searchHandler}>
                            <span>جستجو در</span>
                            <img src={miresehLogo} alt="" />
                        </label>
                    : null }
                    { searchFocus === false ?
                        <svg onclick={notificationHandler} className={classes.notificationIcon} enable-background="new 0 0 611.999 611.999" version="1.1" viewBox="0 0 612 612" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                            <path d="m570.11 500.25c-65.037-29.371-67.511-155.44-67.559-158.62v-84.578c0-81.402-49.742-151.4-120.43-181.2-0.152-41.851-34.238-75.851-76.12-75.851-41.883 0-75.968 34.002-76.121 75.849-70.682 29.804-120.42 99.801-120.42 181.2v84.578c-0.046 3.181-2.522 129.25-67.561 158.62-7.409 3.347-11.481 11.412-9.768 19.36 1.711 7.949 8.74 13.626 16.871 13.626h164.88c3.38 18.594 12.172 35.892 25.619 49.903 17.86 18.608 41.479 28.856 66.502 28.856 25.025 0 48.644-10.248 66.502-28.856 13.449-14.012 22.241-31.311 25.619-49.903h164.88c8.131 0 15.159-5.676 16.872-13.626 1.715-7.948-2.355-16.012-9.764-19.358zm-85.673-60.395c6.837 20.728 16.518 41.544 30.246 58.866h-417.36c13.726-17.32 23.407-38.135 30.244-58.866h356.87zm-178.43-405.34c18.945 0 34.963 12.73 39.975 30.082-12.912-2.678-26.282-4.09-39.975-4.09s-27.063 1.411-39.975 4.09c5.013-17.351 21.031-30.082 39.975-30.082zm-162.03 307.22v-84.685c0-89.343 72.686-162.03 162.03-162.03s162.03 72.686 162.03 162.03v84.826c0.023 2.596 0.427 29.879 7.303 63.465h-338.67c6.88-33.618 7.286-60.949 7.307-63.606zm162.03 235.75c-26.341 0-49.33-18.992-56.709-44.246h113.42c-7.379 25.254-30.364 44.246-56.707 44.246z"/>
                            <path d="m306 119.24c-74.25 0-134.66 60.405-134.66 134.65 0 9.531 7.727 17.258 17.258 17.258s17.258-7.727 17.258-17.258c0-55.217 44.923-100.14 100.14-100.14 9.531 0 17.258-7.727 17.258-17.258-1e-3 -9.532-7.728-17.257-17.259-17.257z"/>
                        </svg>
                    : null }
                    { searchFocus === true ?
                        <input type="text" placeholder="جستجو در میرسه"  oncreate={(vnode) => vnode.dom.focus()}/>
                    : null }
                </form>
            </header>
        )
        },
    }
}