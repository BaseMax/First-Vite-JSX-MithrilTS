import m from "mithril";

import { Slider } from "./Slider";
import { Headers } from "./Headers";
import { Items } from "./Items";

const Link = m.route.Link;

export const HomePage = () => {
  return {
    view: () => {
      return (
        <>
            <Headers />
            <Slider />
            <Items />
            <Link href="/ads/">Ads Page</Link>
            <Link href="/search/">Search Page</Link>
        </>
      )
    },
  }
}


